MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

function hideScore() {
  var els = document.querySelectorAll(".post-view-meta-rating,.user-tagline-rating,.game-over-rating-rating,.chart-holder,.user-rating,.section-clickable .clickable-rating,.main-chart-stats-current");
  for (var i = 0; i < els.length; i++) {
    var el = els[i];

    if (window.getComputedStyle(el).visibility == "hidden") {
      continue;
    }

    var censors = el.getElementsByClassName("score-censor");
    if (censors.length > 0) {
      continue;
    }

    el.style.position = "relative";
    var censor = document.createElement("div");
    censor.classList.add("score-censor");
    censor.style.cssText ="position:absolute; top:0; left:0; width:100%; height:100%; background-color:black";
    el.appendChild(censor);
  }
};

var observer = new MutationObserver(function(mutations, observer) {
  hideScore();
});

observer.observe(document, {
  subtree: true,
  attributes: true,
});

hideScore();
