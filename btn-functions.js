// Show surprise with a smooth fade-in after 5 seconds
function showSurprise() {
    $(".hidden-content").fadeIn(3000); // Slow fade-in effect (1.5s duration)
  }
  
  $(function () {
    setTimeout(showSurprise, 7000); // ⏰ Show after 5 seconds
  });
  function goToNextPage() {
    window.location.href = "next.html"; // Redirect to next page
  }
  