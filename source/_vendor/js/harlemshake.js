// Taken from some XSS article I read a while ago, slightly modified to suit my needs

(function() {
  var konamiState = 0;
  var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  document.addEventListener('keydown', function(e) {
    if (e.which === konamiCode[konamiState]) {
      konamiState++;
    }
    else {
      konamiState = 0;
    }
    if (konamiState === konamiCode.length) {
      HarlemShake.shake(document.getElementsByClassName('sidebar-profile-picture')[0]);
    }
  });

  window.HarlemShake = {}; // create top level namespace

  HarlemShake.location = '/assets/sounds/';

  HarlemShake.shake = function(element) {
    function h() {
      var e = document.getElementsByClassName(l);
      for (var t = 0; t < e.length; t++) {
        document.body.removeChild(e[t]);
      }
    }

    function p() {
      var e = document.createElement('div');
      e.setAttribute('class', a);
      document.body.appendChild(e);
      setTimeout(function() {
        document.body.removeChild(e);
      }, 100);
    }

    function d(e) {
      return {height: e.offsetHeight, width: e.offsetWidth};
    }

    function v(i) {
      var s = d(i);
      return s.height > e && s.height < n && s.width > t && s.width < r;
    }

    function s() {
      var e = document.createElement('audio');
      e.setAttribute('class', l);
      e.src = i;
      e.loop = false;
      e.addEventListener('canplay', function() {
        setTimeout(function() {
          x(k);
        }, 500);
        setTimeout(function() {
          n();
          p();
          for (var e = 0; e < O.length; e++) {
            t(O[e]);
          }
        }, 15500);
      }, true);
      e.addEventListener('ended', function() {
        n();
        h();
      }, true);
      e.innerHTML = ' <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>';
      document.body.appendChild(e);
      e.play();
    }

    function x(e) {
      e.className += ' ' + s + ' ' + o;
    }

    function t(e) {
      e.className += ' ' + s + ' ' + u[Math.floor(Math.random() * u.length)];
    }

    function n() {
      var e = document.getElementsByClassName(s);
      var t = new RegExp('\\b' + s + '\\b');
      for (var n = 0; n < e.length;) {
        e[n].className = e[n].className.replace(t, '');
      }
    }

    var e = 30;
    var t = 30;
    var n = 500;
    var r = 800;
    var i = HarlemShake.location + 'harlemshake.mp3';
    var s = 'mw-harlem_shake_me';
    var o = 'im_first';
    var u = ['im_drunk', 'im_baked', 'im_trippin', 'im_blown'];
    var a = 'mw-strobe_light';
    var l = 'harlem_shake_element';
    var C = document.getElementsByTagName('*');
    var k = element;
    s();
    var O = [];
    for (var L = 0; L < C.length; L++) {
      var A = C[L];
      if (v(A)) {
        O.push(A);
      }
    }
  };
})();
