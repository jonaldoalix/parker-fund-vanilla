import { particlesConfig, hasParticlesTarget } from "./particle-config.js";

if (typeof particlesJS === "function" && hasParticlesTarget()) {
  particlesJS("particles-js", particlesConfig);
}

let count_particles;
let stats;
let update;

if (typeof Stats === "function") {
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
    if (
      window.pJSDom &&
      window.pJSDom[0] &&
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array &&
      count_particles
    ) {
      count_particles.innerText =
        window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}
