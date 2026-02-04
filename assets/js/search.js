/* ==========================================================================
   Site Search Functionality
   ========================================================================== */

(function() {
  'use strict';

  // Get search data from JSON script tag
  var searchData = [];
  
  function initSearchData() {
    var dataScript = document.getElementById('search-data');
    if (dataScript) {
      try {
        searchData = JSON.parse(dataScript.textContent);
      } catch (e) {
        console.error('Error parsing search data:', e);
        searchData = [];
      }
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchData);
  } else {
    initSearchData();
  }

  // Search function
  function search(query) {
    if (!query || query.trim().length < 2) {
      return [];
    }

    var queryLower = query.toLowerCase().trim();
    var queryWords = queryLower.split(/\s+/).filter(function(word) {
      return word.length > 0;
    });
    
    if (queryWords.length === 0) {
      return [];
    }

    var results = [];

    searchData.forEach(function(page) {
      if (!page || !page.title) return;
      
      var titleLower = (page.title || '').toLowerCase();
      var contentLower = (page.content || '').toLowerCase();
      
      // Calculate relevance score
      var score = 0;
      var titleMatches = 0;
      var contentMatches = 0;
      
      queryWords.forEach(function(word) {
        // Title matches are worth more
        if (titleLower.indexOf(word) !== -1) {
          score += 10;
          titleMatches++;
        }
        // Content matches
        var contentMatchesCount = (contentLower.match(new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        score += contentMatchesCount;
        contentMatches += contentMatchesCount;
      });
      
      if (score > 0) {
        // Get excerpt from content
        var excerpt = '';
        var firstMatchIndex = -1;
        var content = page.content || '';
        
        queryWords.forEach(function(word) {
          var index = contentLower.indexOf(word);
          if (index !== -1 && (firstMatchIndex === -1 || index < firstMatchIndex)) {
            firstMatchIndex = index;
          }
        });
        
        if (firstMatchIndex !== -1) {
          var start = Math.max(0, firstMatchIndex - 50);
          var end = Math.min(content.length, firstMatchIndex + query.length + 100);
          excerpt = content.substring(start, end);
          if (start > 0) excerpt = '...' + excerpt;
          if (end < content.length) excerpt = excerpt + '...';
        } else {
          excerpt = content.substring(0, 150);
          if (content.length > 150) excerpt += '...';
        }
        
        results.push({
          title: page.title,
          url: page.url,
          excerpt: excerpt,
          score: score,
          titleMatches: titleMatches,
          contentMatches: contentMatches
        });
      }
    });
    
    // Sort by score (descending)
    results.sort(function(a, b) {
      return b.score - a.score;
    });
    
    return results.slice(0, 10); // Limit to top 10 results
  }

  // Highlight search terms in text
  function highlightText(text, query) {
    if (!query || !text) return text;
    
    var queryWords = query.toLowerCase().trim().split(/\s+/).filter(function(word) {
      return word.length > 0;
    });
    var result = text;
    
    queryWords.forEach(function(word) {
      var regex = new RegExp('(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      result = result.replace(regex, '<span class="search-result-highlight">$1</span>');
    });
    
    return result;
  }

  // Render search results
  function renderResults(results, query) {
    var resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    if (!query || query.trim().length < 2) {
      resultsContainer.innerHTML = '<div class="search-no-results">Type at least 2 characters to search</div>';
      return;
    }
    
    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
      return;
    }
    
    var html = '';
    results.forEach(function(result) {
      var highlightedTitle = highlightText(result.title, query);
      var highlightedExcerpt = highlightText(result.excerpt, query);
      var fullUrl = result.url.startsWith('http') ? result.url : result.url;
      
      html += '<div class="search-result-item" data-url="' + fullUrl + '">';
      html += '<div class="search-result-title">' + highlightedTitle + '</div>';
      html += '<div class="search-result-url">' + result.url + '</div>';
      html += '<div class="search-result-excerpt">' + highlightedExcerpt + '</div>';
      html += '</div>';
    });
    
    resultsContainer.innerHTML = html;
    
    // Add click handlers
    var resultItems = resultsContainer.querySelectorAll('.search-result-item');
    resultItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var url = this.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      });
    });
  }

  // Modal controls
  var searchModal = document.getElementById('search-modal');
  var searchToggle = document.getElementById('search-toggle');
  var searchClose = document.querySelector('.search-modal-close');
  var searchInput = document.getElementById('search-input');
  var searchOverlay = document.querySelector('.search-modal-overlay');

  // Open modal
  function openSearchModal() {
    if (searchModal) {
      searchModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      if (searchInput) {
        setTimeout(function() {
          searchInput.focus();
        }, 100);
      }
    }
  }

  // Close modal
  function closeSearchModal() {
    if (searchModal) {
      searchModal.style.display = 'none';
      document.body.style.overflow = '';
      if (searchInput) {
        searchInput.value = '';
        var resultsContainer = document.getElementById('search-results');
        if (resultsContainer) {
          resultsContainer.innerHTML = '';
        }
      }
    }
  }

  // Event listeners
  if (searchToggle) {
    searchToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openSearchModal();
    });
    // Also handle as button if it's a button element
    if (searchToggle.tagName === 'BUTTON') {
      searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openSearchModal();
      });
    }
  }

  if (searchClose) {
    searchClose.addEventListener('click', closeSearchModal);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', closeSearchModal);
  }

  // Search input handler
  if (searchInput) {
    var searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      var query = this.value;
      
      searchTimeout = setTimeout(function() {
        var results = search(query);
        renderResults(results, query);
      }, 300); // Debounce search
    });

    // Handle Enter key
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var results = search(this.value);
        if (results.length > 0) {
          var url = results[0].url.startsWith('http') ? results[0].url : results[0].url;
          window.location.href = url;
        }
      }
      if (e.key === 'Escape') {
        closeSearchModal();
      }
    });
  }

  // Keyboard shortcut removed - search is only accessible via the search button

})();
