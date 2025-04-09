$(document).ready(function () {
  $(".candles").click(function () {
    $(".flame, .flame2, .flame3").fadeOut("fast", function () {
      $(".text").animate({ top: -90, opacity: 1 }, "fast", function () {
        launchFireworks();
      });
    });
  });

  function launchFireworks() {
    for (let i = 0; i < 10; i++) {
      setTimeout(createFirework, i * 400);
    }
  }

  function createFirework() {
    const firework = $("<div class='firework'></div>");
    $("body").append(firework);

    const x = Math.random() * $(window).width();
    const y = Math.random() * $(window).height() / 2 + 50;

    firework.css({
      left: x + "px",
      top: y + "px",
    });

    for (let i = 0; i < 30; i++) {
      createParticle(x, y);
    }

    firework.remove();
  }

  function createParticle(x, y) {
    const particle = $("<div class='particle'></div>");
    $("body").append(particle);

    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 10 + 5;
    const destinationX = x + Math.cos(angle) * speed * 10;
    const destinationY = y + Math.sin(angle) * speed * 10;

    particle.css({
      left: x + "px",
      top: y + "px",
      backgroundColor: getRandomColor(),
    });

    particle.animate(
      {
        left: destinationX + "px",
        top: destinationY + "px",
        opacity: 0,
      },
      1500,
      function () {
        particle.remove();
      }
    );
  }

  function getRandomColor() {
    const colors = ["#ff0000", "#ff7300", "#ffeb00", "#00ff00", "#007bff", "#8a2be2", "#ff00ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});

console.log("Fireworks script loaded...");
