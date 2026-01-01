function StarRating() {
  const [stars, setStars] = React.useState(0);

  return React.createElement(
    "div",
    { className: "rating" },
    [1,2,3,4,5].map(function (n) {
      return React.createElement(
        "span",
        {
          key: n,
          className: "star " + (n <= stars ? "on" : "off"),
          onClick: function (e) {
            e.preventDefault();
            e.stopPropagation();
            setStars(n);
          }
        },
        "★"
      );
    }).concat([
      React.createElement(
        "span",
        { key: "val", className: "rating-value" },
        stars + "/5"
      )
    ])
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("rating-root");
  if (!el) return;

  ReactDOM.createRoot(el).render(
    React.createElement(StarRating)
  );
});
