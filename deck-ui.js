/* F3 deck UI — match the letterbox bars to the active slide (kills black franjas)
   and adapt the nav/Detalle buttons to the slide theme. */
(function () {
  var stage = document.querySelector('deck-stage');
  if (!stage) return;
  var map = { paper: '#ECEAE4', ink: '#1A1815', red: '#FE1414' };
  function theme() {
    var act = document.querySelector('deck-stage > section[data-deck-active]');
    var s = act ? act.querySelector('.s') : null;
    if (s && s.classList.contains('paper')) return 'paper';
    if (s && s.classList.contains('red')) return 'red';
    return 'ink';
  }
  function sync() {
    var t = theme();
    stage.style.setProperty('background', map[t], 'important');
    document.body.setAttribute('data-slide-theme', t);
  }
  var mo = new MutationObserver(sync);
  document.querySelectorAll('deck-stage > section').forEach(function (s) {
    mo.observe(s, { attributes: true, attributeFilter: ['data-deck-active'] });
  });
  window.addEventListener('load', sync);
  sync();
  setTimeout(sync, 120);
  setTimeout(sync, 500);
})();
