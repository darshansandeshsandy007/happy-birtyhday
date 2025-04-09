// IFTTT Slottt Machine by Jen Hamon
// Updated to display names: Suu, Dincy, and Subiksha in order
var wordlist = ["Suu", "Dincy", "Subiksha","Love"];
var currentIndex = 0; // Keeps track of the current name

function buildSlotItem(text) {
  return $("<div>").addClass("slottt-machine-recipe__item").text(text);
}

function buildSlotContents($container, wordlist) {
  var $items = wordlist.map(buildSlotItem);
  $container.append($items);
}

function popPushNItems($container, n) {
  var $children = $container.find(".slottt-machine-recipe__item");
  $children.slice(0, n).insertAfter($children.last());

  if (n === $children.length) {
    popPushNItems($container, 1);
  }
}

// Rotate the contents to create the animation effect
function rotateContents($container, n) {
  setTimeout(function () {
    popPushNItems($container, n);
    $container.css({ top: 0 });
  }, 300);
}

// Rotate the slot in order
function animate() {
  currentIndex = (currentIndex + 1) % wordlist.length; // Move to the next name
  $wordbox.animate({ top: -currentIndex * 150 }, 500, "swing", function () {
    rotateContents($wordbox, currentIndex);
  });
}

$(function () {
  $wordbox = $("#wordbox .slottt-machine-recipe__items_container");
  buildSlotContents($wordbox, wordlist);
  buildSlotContents($wordbox, wordlist);
  buildSlotContents($wordbox, wordlist);
  buildSlotContents($wordbox, wordlist);

  setInterval(animate, 2000);
});  