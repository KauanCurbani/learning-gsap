let cursor = ".cursor";
let homeImage = ".home-image";
let trails = ".trail";
let enjoyButton = ".enjoy-button";

function generateTrail() {
  for (var i = 0; i < 20; i++) {
    var trail = document.createElement("div");
    trail.classList.add(`trail`);
    trail.classList.add(`${i}`);
    trail.style.transform = `scale(${
      1 - Number.parseInt(trail.className.split(" ")[1]) * 0.05
    })`;
    document.body.appendChild(trail);
  }
}

generateTrail();

gsap.from(homeImage, { scaleY: 0, duration: 1, ease: "back" });
gsap.from(homeImage, { y: 250, duration: 1, ease: "power1" });

gsap.from(".kauan-text", {
  duration: 0.6,
  y: 150,
  stagger: 0.1,
  delay: 0.8,
  ease: "circ",
});
gsap.from(".curbani-text", {
  duration: 0.6,
  y: 150,
  stagger: 0.1,
  ease: "circ",
  delay: 1.4,
});

gsap.from(".fullstack-text", {
  duration: 0.6,
  y: -150,
  stagger: 0.1,
  delay: 0.8,
  ease: "circ",
});
gsap.from(".developer-text", {
  duration: 0.6,
  y: -150,
  stagger: 0.1,
  ease: "circ",
  delay: 1.4,
});

gsap.set(trails, {
  xPercent: -50,
  yPercent: -50,
  backgroundColor: "#cccccc",
});
gsap.set(cursor, { xPercent: -50, yPercent: -50, backgroundColor: "#ffffff" });

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    y: e.clientY,
    x: e.clientX,
    duration: 0.01,
  });
  gsap.to(trails, {
    y: e.clientY,
    x: e.clientX,
    duration: 0.1,
    stagger: 0.001,
  });
});

document.addEventListener("mousedown", (e) => {
  gsap.to(cursor, { scale: 2, duration: 0.8, ease: "elastic" });
});

document.addEventListener("mouseup", (e) => {
  gsap.to(cursor, { scale: 1, duration: 1.3, ease: "elastic" });
});

function onEnjoyClick() {
  gsap.to(".kauan-text", {
    duration: 0.6,
    y: -150,
    stagger: 0.1,
    ease: "M0,0 C0,0 0.684,0.026 0.842,0.216 1,0.406 1,1 1,1 ",
  });
  gsap.to(".curbani-text", {
    duration: 0.6,
    y: -150,
    stagger: 0.1,
    ease: "M0,0 C0,0 0.684,0.026 0.842,0.216 1,0.406 1,1 1,1 ",
    delay: 0.6,
  });

  gsap.to(".fullstack-text", {
    duration: 0.6,
    y: 150,
    stagger: 0.1,
    ease: "M0,0 C0,0 0.684,0.026 0.842,0.216 1,0.406 1,1 1,1 ",
  });
  gsap.to(".developer-text", {
    duration: 0.6,
    y: 150,
    stagger: 0.1,
    ease: "M0,0 C0,0 0.684,0.026 0.842,0.216 1,0.406 1,1 1,1 ",
    delay: 0.6,
  });
  gsap.to(homeImage, {
    y: 250,
    scaleY: 0,
    duration: 1,
    delay: 1,
    ease: "power1",
  });
  gsap.to(enjoyButton, {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power1",
  });
}
