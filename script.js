$("#impressum-sites-btn").on("click", function () {
  window.location.href = "impressum.html";
});

$("#impressum-btn").on("click", function () {
  window.location.href = "Sites/impressum.html";
});
$(".contact-btn").on("click", function () {
  const email = "fliesenhof@t-online.de";
  const subject = "";
  const body = "";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href =
    "mailto:test@example.com?subject=Test&body=Hallo%20Welt";
});

//Partner Links

$("#website-agrob-btn").click(function () {
  window.location.href = "https://agrob-buchtal.de/de";
});

$("#website-ardex-btn").click(function () {
  window.location.href = "https://www.ardex.de/";
});

$("#website-lithofin-btn").click(function () {
  window.location.href = "https://www.lithofin.de/de/";
});

$("#website-irisCeramica-btn").click(function () {
  window.location.href = "https://www.irisceramica.com/";
});

$("#website-kermos-btn").click(function () {
  window.location.href = "https://kermos-products.com/de/";
});

$("#website-schlüterSystems-btn").click(function () {
  window.location.href =
    "https://eu.schluter.com/de-DE/heizsysteme-214.html?gad_source=1&gad_campaignid=21893699517&gclid=Cj0KCQjwrc7GBhCfARIsAHGcW5XOZ7IirJ3kG0zcLpYKvg3NsLblSCslnvwzh1dbU05kvUuaaDt1WG8aAu00EALw_wcB";
});

$("#website-sopro-btn").click(function () {
  window.location.href = "https://www.sopro.com/de-de/";
});

$("#website-steulerDesign-btn").click(function () {
  window.location.href = "https://steulerdesign.de/en";
});

$("#website-villeroyUndBoch-btn").click(function () {
  window.location.href = "https://www.villeroy-boch.de/";
});

// Mehr Projekte Button

$("#projekte-btn").click(function () {
  window.location.href = "Sites/projekte.html";
});

// Stellenangebot Button

$("#stellenangebot-btn").click(function () {
  window.location.href = "Sites/Stellenangebot.html";
});

// Partner + Marken Button

$("#qualität-btn").click(function () {
  window.location.href = "Sites/partner+marken.html";
});
