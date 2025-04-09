document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    // Create the stars container if not already created
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars");
    document.body.appendChild(starContainer);
  
    // Function to generate random stars throughout the entire document
    function createStars(count) {
      for (let i = 0; i < count; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
  
        // Random positions within the full viewport height and width
        star.style.top = Math.random() * 100 + "vh"; // Random height (full viewport height)
        star.style.left = Math.random() * 100 + "vw"; // Random width (full viewport width)
  
        // Random animation duration and delay
        star.style.animationDuration = (Math.random() * 2 + 1) + "s"; // Random twinkling speed
        star.style.animationDelay = Math.random() * 2 + "s"; // Random start delay
  
        starContainer.appendChild(star);
      }
    }
  
    // Create 500 stars for a richer effect
    createStars(500);
  
    // GSAP Scroll Animation for Timeline Events
    gsap.utils.toArray(".timeline-event").forEach((event, index) => {
      gsap.from(event, {
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: event,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  });
  