/* Site-wide cursor ribbon. Spring follow + Catmull-Rom trail. */
(function () {
  var reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches;
  if (reduceMotion || coarse) return;

  var root = document.documentElement;
  var layer = document.createElement("div");
  layer.id = "cursor-trail-layer";
  layer.setAttribute("aria-hidden", "true");

  var canvas = document.createElement("canvas");
  canvas.id = "cursor-trail-canvas";

  var core = document.createElement("div");
  core.className = "cursor-trail__core";

  var ring = document.createElement("div");
  ring.className = "cursor-trail__ring";

  layer.appendChild(canvas);
  layer.appendChild(ring);
  layer.appendChild(core);
  document.body.appendChild(layer);
  root.classList.add("cursor-trail-on");

  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0;
  var H = 0;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  var targetX = W * 0.5;
  var targetY = H * 0.5;
  var x = targetX;
  var y = targetY;
  var vx = 0;
  var vy = 0;
  var ringX = targetX;
  var ringY = targetY;
  var lastX = targetX;
  var lastY = targetY;
  var speed = 0;
  var hovering = false;
  var hidden = false;
  var hasMoved = false;

  var MAX_POINTS = 26;
  var MIN_DIST = 3.2;
  var points = [];

  var STIFF = 0.22;
  var DAMP = 0.68;
  var RING_FOLLOW = 0.16;

  var HOVER_SEL =
    "a, button, input, textarea, select, label, summary, [role='button'], .project-card, .btn, .search-toggle";

  function isTextField(el) {
    if (!el || !el.closest) return false;
    return !!el.closest("input, textarea, select, [contenteditable='true']");
  }

  function isHoverable(el) {
    if (!el || !el.closest) return false;
    return !!el.closest(HOVER_SEL);
  }

  function splashLocked() {
    return root.classList.contains("home-splash--lock");
  }

  function setHidden(next) {
    if (hidden === next) return;
    hidden = next;
    root.classList.toggle("cursor-trail--hidden", hidden);
  }

  function setHover(next) {
    if (hovering === next) return;
    hovering = next;
    root.classList.toggle("cursor-trail--hover", hovering);
  }

  function onPointerMove(ev) {
    if (ev.pointerType && ev.pointerType !== "mouse") return;
    targetX = ev.clientX;
    targetY = ev.clientY;
    hasMoved = true;
    setHidden(splashLocked() || isTextField(ev.target));
    setHover(!hidden && isHoverable(ev.target) && !isTextField(ev.target));
  }

  function onPointerLeave() {
    setHidden(true);
  }

  function onPointerEnter() {
    if (!splashLocked()) setHidden(false);
  }

  document.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("mouseleave", onPointerLeave);
  document.addEventListener("mouseenter", onPointerEnter);
  document.addEventListener("mousedown", function (ev) {
    if (ev.button !== 0 || hidden) return;
    root.classList.add("cursor-trail--click");
    window.setTimeout(function () {
      root.classList.remove("cursor-trail--click");
    }, 180);
  });

  function pushPoint(px, py) {
    var last = points[points.length - 1];
    if (last) {
      var dx = px - last.x;
      var dy = py - last.y;
      if (dx * dx + dy * dy < MIN_DIST * MIN_DIST) return;
    }
    points.push({ x: px, y: py });
    if (points.length > MAX_POINTS) points.shift();
  }

  function catmull(p0, p1, p2, p3, t) {
    var t2 = t * t;
    var t3 = t2 * t;
    return {
      x:
        0.5 *
        (2 * p1.x +
          (-p0.x + p2.x) * t +
          (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
          (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
      y:
        0.5 *
        (2 * p1.y +
          (-p0.y + p2.y) * t +
          (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
          (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
    };
  }

  function drawTrail() {
    ctx.clearRect(0, 0, W, H);
    if (hidden || points.length < 3) return;

    var n = points.length;
    var samples = [];
    var i;
    var s;
    for (i = 0; i < n - 1; i++) {
      var p0 = points[Math.max(0, i - 1)];
      var p1 = points[i];
      var p2 = points[i + 1];
      var p3 = points[Math.min(n - 1, i + 2)];
      var steps = 4;
      for (s = 0; s < steps; s++) {
        samples.push(catmull(p0, p1, p2, p3, s / steps));
      }
    }
    samples.push(points[n - 1]);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    var fade = hovering ? 0.42 : 1;
    var boost = Math.min(1, speed / 28);

    for (i = 1; i < samples.length; i++) {
      var t = i / (samples.length - 1);
      var a = samples[i - 1];
      var b = samples[i];
      var width = (1 - t) * (9.5 + boost * 4.5) + 0.8;
      var alpha = (1 - t) * (0.38 + boost * 0.16) * fade;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = "rgba(176, 176, 176, " + alpha.toFixed(3) + ")";
      ctx.lineWidth = width;
      ctx.stroke();
    }
  }

  function tick() {
    if (splashLocked()) {
      setHidden(true);
    }

    var ax = (targetX - x) * STIFF;
    var ay = (targetY - y) * STIFF;
    vx = (vx + ax) * DAMP;
    vy = (vy + ay) * DAMP;
    x += vx;
    y += vy;

    ringX += (x - ringX) * RING_FOLLOW;
    ringY += (y - ringY) * RING_FOLLOW;

    var dx = x - lastX;
    var dy = y - lastY;
    speed = speed * 0.82 + Math.sqrt(dx * dx + dy * dy) * 0.18;
    lastX = x;
    lastY = y;

    if (hasMoved && !hidden) {
      pushPoint(x, y);
    } else if (points.length) {
      points.shift();
    }

    core.style.transform = "translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px,0)";
    ring.style.transform = "translate3d(" + ringX.toFixed(2) + "px," + ringY.toFixed(2) + "px,0)";

    drawTrail();
    window.requestAnimationFrame(tick);
  }

  window.requestAnimationFrame(tick);
})();
