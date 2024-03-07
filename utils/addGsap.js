import gsap from "gsap";

export default function addGsap() {
  if(typeof window !== 'undefined'){
  const magnets = document.querySelectorAll(".gsap-magnetic");
  const strength = 50;

  magnets.forEach((magnet) => {
    magnet.addEventListener("mousemove", moveMagnet);
    magnet.addEventListener("mouseout", function (event) {
      gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: "Power4.easeOut" });
    });
  });

  function moveMagnet(event) {
    const magnetButton = event.currentTarget;
    const bounding = magnetButton.getBoundingClientRect();

    gsap.to(magnetButton, 1, {
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        strength,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        strength,
      ease: "Power4.easeOut",
    });
  }
}}
