gsap.registerPlugin(ScrollTrigger);

// Select the h1 element inside the section
const heading = document.querySelector("section h1");

// Define the GSAP animation
gsap.from(heading, {
  y: 200,
  autoAlpha: 0,
  duration: 0.5,
  ease: "linear",
  scrollTrigger: {
    trigger: "section",
    start: "top 30%",
    end: "bottom",
  },
});
