$(document).ready(function () {
  console.log("Fireworks script loaded...");

  let animationTriggered = false; // Prevent multiple triggers

  $(".candles").one("click", function () {
    console.log("Candles clicked!");

    if (animationTriggered) {
      console.log("Animation already triggered. Skipping...");
      return;
    }
    animationTriggered = true;

    // Blow out the candles
    $(".flame, .flame2, .flame3").fadeOut("fast").promise().done(function () {
      console.log("Candles blown out...");

      // Hide text2 and empty its content
      $(".text2").fadeOut("fast").promise().done(function () {
        console.log("Text2 faded out...");
        $(".text2").empty(); // Clear text2 content

        // Show and animate text
        $(".text")
          .animate({ top: -90, opacity: 1 }, "fast")
          .promise()
          .done(function () {
            console.log("Text animation complete...");

            // Launch fireworks after text animation
            launchFireworks();

            // Show text3 after text animation
            $(".text3")
              .animate({ top: -60, opacity: 1 }, "fast")
              .promise()
              .done(function () {
                console.log("Text3 animation complete...");

                // Show button after text3 animation
                setTimeout(function () {
                  console.log("Showing the button...");
                  if ($("#clickMeBtn").length) {
                    $("#clickMeBtn").fadeIn("fast"); // Button appears smoothly
                  } else {
                    console.error("#clickMeBtn NOT found!");
                  }
                }, 500);
              });
          });
      });
    });
  });

  // Launch multiple fireworks with staggered delay
  function launchFireworks() {
    console.log("Launching fireworks...");
    for (let i = 0; i < 12; i++) {
      setTimeout(createFirework, i * 300); // Launch fireworks at 300ms intervals
    }
  }

  // Create a firework explosion
  function createFirework() {
    console.log("Creating a firework...");
    const firework = $("<div class='firework'></div>");
    $("#fireworks").append(firework);

    const x = Math.random() * $(window).width(); // Random x-position
    const y = Math.random() * ($(window).height() / 2 + 50); // Random y-position

    firework.css({
      left: x + "px",
      top: y + "px",
    });

    // Create multiple particles for burst effect
    for (let i = 0; i < 25; i++) {
      createParticle(x, y);
    }

    // Remove the firework after 1 second
    setTimeout(function () {
      firework.remove();
    }, 1000);
  }

  // Create individual particles for the firework
  function createParticle(x, y) {
    const particle = $("<div class='particle'></div>");
    $("#fireworks").append(particle);

    const angle = Math.random() * 2 * Math.PI; // Random direction
    const speed = Math.random() * 8 + 5; // Random speed (5-13)
    const distance = speed * 12; // Particle travel distance

    const destinationX = x + Math.cos(angle) * distance;
    const destinationY = y + Math.sin(angle) * distance;

    particle.css({
      left: x + "px",
      top: y + "px",
      backgroundColor: getRandomColor(),
    });

    // Animate particles and remove after 1s
    particle.animate(
      {
        left: destinationX + "px",
        top: destinationY + "px",
        opacity: 0,
      },
      1200,
      function () {
        particle.remove();
      }
    );
  }

  // Get a random color for fireworks
  function getRandomColor() {
    const colors = [
      "#FF0000", // Red
      "#FF7300", // Orange
      "#FFD700", // Gold
      "#00FF00", // Green
      "#00BFFF", // Blue
      "#8A2BE2", // Purple
      "#FF00FF", // Pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  $("#clickMeBtn").click(function () {
    console.log("Button clicked! Redirecting...");
    window.location.href = "final.html";
  });
  
});
