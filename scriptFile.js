$("#hamburger").on("click", function () {
  $(".icon").toggleClass("active");
  $("#navigation").toggleClass("listactive");
  $(".container").toggleClass("blur");
});

$("#hamburger").on("clicl", function () {
  $(".icon").removeClass("active");
  $("#navigation").removeClass("listavtive");
  $(".container").removeClass("blur");
});

var bar = new ProgressBar.Line(loadingText, {
  easing: "easeInOut",
  duration: 500,
  strokeWidth: 0.2,
  color: "#555",
  trailWidth: 1.0,
  trailColor: "#bbb",
  text: {
    autoStyleContainer: false,
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      padding: "0",
      margin: "-30px 0 0 0",
      transform: "translate(-50%,-50%)",
      "font-size": "1.5rem",
      color: "#fff",
      background: "transparent",
    },
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + "%");
  },
});

bar.animate(1.0, function () {
  $("#loading").delay(500).fadeOut(800);
});

particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 400 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 200, height: 100 },
    },
    opacity: {
      value: 0.503504865902493,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: "#ffffff",
      opacity: 0.8,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);


// スクロール時に「fade-in」クラスを追加
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(function (element) {
      const position = element.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
          element.classList.add('visible');
      }
  });
});
