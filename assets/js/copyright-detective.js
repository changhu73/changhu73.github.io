(function() {
  'use strict';

  function matchesSelector(el, selector) {
    var proto = Element.prototype;
    var fn = proto.matches || proto.msMatchesSelector || proto.webkitMatchesSelector;
    if (!fn) return false;
    return fn.call(el, selector);
  }

  function closestElement(el, selector) {
    var current = el;
    while (current && current !== document) {
      if (matchesSelector(current, selector)) return current;
      current = current.parentElement;
    }
    return null;
  }

  // ========== Case Study Tab Switching ==========
  function applyCaseStudySelection(caseValue) {
    if (!caseValue) return;

    var allContents = document.querySelectorAll('.case-study-content');
    for (var j = 0; j < allContents.length; j++) {
      allContents[j].classList.remove('active');
    }

    var selectedContent = document.getElementById('case-study-' + caseValue);
    if (selectedContent) {
      selectedContent.classList.add('active');
    }
  }

  function setActiveTab(tab) {
    var tabs = document.querySelectorAll('.custom-tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    if (tab) {
      tab.classList.add('active');
    }
  }

  // ========== Accordion Toggle ==========
  function toggleAccordion(header) {
    var content = header.nextElementSibling;
    if (!content) return;

    var isExpanded = content.classList.contains('expanded');

    if (isExpanded) {
      content.classList.remove('expanded');
      header.classList.remove('expanded');
    } else {
      content.classList.add('expanded');
      header.classList.add('expanded');
    }
  }

  function onDocumentClick(e) {
    var header = closestElement(e.target, '[data-accordion="true"]');
    if (header) {
      e.preventDefault();
      e.stopPropagation();
      toggleAccordion(header);
      return;
    }

    var legacy = closestElement(e.target, '[data-action]');
    if (legacy) {
      var action = legacy.getAttribute('data-action');
      if (action === 'togglePromptPreview' || action === 'toggleRunsContainer' || action === 'toggleRun' || action === 'toggleStrategy') {
        e.preventDefault();
        e.stopPropagation();
        toggleAccordion(legacy);
        return;
      }
    }

    var tab = closestElement(e.target, '.custom-tab');
    if (tab) {
      e.preventDefault();
      e.stopPropagation();
      var caseValue = tab.getAttribute('data-case');
      applyCaseStudySelection(caseValue);
      setActiveTab(tab);
    }
  }

  function onDocumentChange(e) {
    var select = closestElement(e.target, '#case-study-select');
    if (select) {
      applyCaseStudySelection(select.value);
    }
  }

  function initGlobalDelegation() {
    document.removeEventListener('click', onDocumentClick, true);
    document.addEventListener('click', onDocumentClick, true);
    document.removeEventListener('change', onDocumentChange, true);
    document.addEventListener('change', onDocumentChange, true);
  }

  // ========== Copy BibTeX ==========
  function initCopyBibtex() {
    var bibtexElement = document.getElementById('bibtex-content');
    if (!bibtexElement) return;

    var hintEl = document.querySelector('.bibtex-copy-hint');
    if (hintEl && !hintEl.getAttribute('data-original')) {
      hintEl.setAttribute('data-original', hintEl.textContent.trim());
    }

    bibtexElement.addEventListener('click', function() {
      var bibtex = this.textContent.trim();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(bibtex).then(function() {
          showCopySuccess();
        }).catch(function() {
          fallbackCopy(bibtex);
        });
      } else {
        fallbackCopy(bibtex);
      }
    });

    function fallbackCopy(text) {
      var textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showCopySuccess();
      } catch (err) {
        showCopyError();
      }
      document.body.removeChild(textArea);
    }

    function showCopySuccess() {
      bibtexElement.classList.add('copied');
      if (hintEl) {
        hintEl.textContent = '✓ Copied to clipboard!';
        hintEl.style.color = '#38ef7d';
        hintEl.style.fontWeight = '600';
      }
      setTimeout(function() {
        bibtexElement.classList.remove('copied');
        if (hintEl) {
          hintEl.textContent = hintEl.getAttribute('data-original') || 'Click the BibTeX code above to copy';
          hintEl.style.color = '#6c757d';
          hintEl.style.fontWeight = 'normal';
        }
      }, 2000);
    }

    function showCopyError() {
      if (hintEl) {
        hintEl.textContent = '✗ Copy failed. Please select and copy manually.';
        hintEl.style.color = '#e74c3c';
        hintEl.style.fontWeight = '600';
        setTimeout(function() {
          hintEl.textContent = hintEl.getAttribute('data-original') || 'Click the BibTeX code above to copy';
          hintEl.style.color = '#6c757d';
          hintEl.style.fontWeight = 'normal';
        }, 3000);
      }
    }
  }

  // ========== Number/Slider Helpers ==========
  window.adjustNumber = function(button, delta) {
    var input = button.closest('.case-study-number-input').querySelector('input[type="number"]');
    var currentValue = parseInt(input.value) || 0;
    var newValue = Math.max(parseInt(input.min || 1), Math.min(parseInt(input.max || 100), currentValue + delta));
    input.value = newValue;
  };

  window.updateSliderValue = function(slider) {
    var value = parseFloat(slider.value);
    var valueSpan = slider.parentElement.querySelector('.case-study-slider-value');
    var percentage = (value / (parseFloat(slider.max) - parseFloat(slider.min))) * 100;
    valueSpan.textContent = value.toFixed(2);
    valueSpan.style.left = percentage + '%';
  };

  // ========== Diff Rendering ==========
  function tokenizeText(text) {
    var tokens = [];
    var regex = /(\S+)/g;
    var match;
    var lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        var whitespace = text.substring(lastIndex, match.index);
        tokens.push({ text: whitespace, type: 'whitespace' });
      }
      tokens.push({ text: match[0], type: 'token' });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      tokens.push({ text: text.substring(lastIndex), type: 'whitespace' });
    }

    return tokens;
  }

  function normalizeToken(token) {
    return token.toLowerCase().replace(/[^\w]/g, '');
  }

  function findLCS(seq1, seq2) {
    var m = seq1.length;
    var n = seq2.length;
    var dp = [];
    for (var x = 0; x <= m; x++) {
      dp[x] = [];
      for (var y = 0; y <= n; y++) {
        dp[x][y] = 0;
      }
    }

    for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
        if (seq1[i - 1] === seq2[j - 1] && seq1[i - 1] !== '') {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    var matches = {};
    var ii = m, jj = n;

    while (ii > 0 && jj > 0) {
      if (seq1[ii - 1] === seq2[jj - 1] && seq1[ii - 1] !== '') {
        matches['gt-' + (ii - 1)] = true;
        matches['mo-' + (jj - 1)] = true;
        ii--;
        jj--;
      } else if (dp[ii - 1][jj] > dp[ii][jj - 1]) {
        ii--;
      } else {
        jj--;
      }
    }

    return matches;
  }

  function findMatches(groundTruth, modelOutput) {
    var gtTokens = tokenizeText(groundTruth);
    var moTokens = tokenizeText(modelOutput);

    var gtNormalized = [];
    var moNormalized = [];
    for (var i = 0; i < gtTokens.length; i++) {
      gtNormalized.push(gtTokens[i].type === 'token' ? normalizeToken(gtTokens[i].text) : '');
    }
    for (var j = 0; j < moTokens.length; j++) {
      moNormalized.push(moTokens[j].type === 'token' ? normalizeToken(moTokens[j].text) : '');
    }

    var matches = findLCS(gtNormalized, moNormalized);

    return { gtTokens: gtTokens, moTokens: moTokens, matches: matches };
  }

  function renderDiffText(tokens, matches, prefix, container) {
    var matchCount = 0;
    var missCount = 0;
    var extraCount = 0;

    for (var idx = 0; idx < tokens.length; idx++) {
      var token = tokens[idx];
      if (token.type === 'whitespace') {
        var span = document.createElement('span');
        span.textContent = token.text;
        container.appendChild(span);
      } else {
        var key = prefix + '-' + idx;
        var isMatch = matches[key];
        var span2 = document.createElement('span');
        span2.textContent = token.text;

        if (isMatch) {
          span2.className = 'diff-token diff-token--match';
          matchCount++;
        } else {
          if (prefix === 'gt') {
            span2.className = 'diff-token diff-token--miss';
            missCount++;
          } else {
            span2.className = 'diff-token diff-token--extra';
            extraCount++;
          }
        }

        container.appendChild(span2);
      }
    }

    return { matchCount: matchCount, missCount: missCount, extraCount: extraCount };
  }

  function initializeDiffRendering() {
    var diffWrappers = document.querySelectorAll('.diff-wrapper');

    for (var w = 0; w < diffWrappers.length; w++) {
      var wrapper = diffWrappers[w];
      var gtContainer = wrapper.querySelector('.diff-column-body--ground');
      var moContainer = wrapper.querySelector('.diff-column-body--generated');

      if (!gtContainer || !moContainer) continue;

      var gtText = gtContainer.getAttribute('data-text') || gtContainer.textContent.trim();
      var moText = moContainer.getAttribute('data-text') || moContainer.textContent.trim();

      gtContainer.innerHTML = '';
      moContainer.innerHTML = '';

      var result = findMatches(gtText, moText);
      var gtStats = renderDiffText(result.gtTokens, result.matches, 'gt', gtContainer);
      var moStats = renderDiffText(result.moTokens, result.matches, 'mo', moContainer);

      var legend = wrapper.querySelector('.diff-legend');
      if (legend) {
        var matchItem = legend.querySelector('.legend-item:first-child span:last-child');
        var missItem = legend.querySelector('.legend-item:nth-child(2) span:last-child');
        var extraItem = legend.querySelector('.legend-item:last-child span:last-child');

        if (matchItem) matchItem.textContent = 'Matches: ' + gtStats.matchCount;
        if (missItem) missItem.textContent = 'Missed (Ground Truth Only): ' + gtStats.missCount;
        if (extraItem) extraItem.textContent = 'Extra (Model Generation Only): ' + moStats.extraCount;
      }
    }
  }

  // ========== Main Initialization ==========
  function initializeAll() {
    initCaseStudyTabs();
    initGlobalDelegation();
    initCopyBibtex();
    initializeDiffRendering();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
  } else {
    initializeAll();
  }

  window.addEventListener('load', function() {
    setTimeout(initializeAll, 100);
  });
})();

