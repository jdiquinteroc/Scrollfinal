// 🌬️ Animación de aparición con scroll (GSAP + ScrollTrigger)
gsap.utils.toArray("section").forEach(section => {
  gsap.to(section, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
