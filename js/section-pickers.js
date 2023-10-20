var devPickers = document.getElementsByClassName("dev-btn-picker");
var mscPickers = document.getElementsByClassName("msc-btn-picker");
var devSection = document.getElementById("dev-section");
var mscSection = document.getElementById("msc-section");

for (var i = 0; i < devPickers.length; i++) {
  devPickers[i].addEventListener("click", () => {
    document.body.classList.remove("msc");
    document.body.classList.add("dev");
    mscSection.classList.remove("container");
    mscSection.classList.add("none");
    devSection.classList.remove("none");
    devSection.classList.add("container");
  });
}

for (var i = 0; i < mscPickers.length; i++) {
  mscPickers[i].addEventListener("click", () => {
    document.body.classList.remove("dev");
    document.body.classList.add("msc");
    devSection.classList.remove("container");
    devSection.classList.add("none");
    mscSection.classList.remove("none");
    mscSection.classList.add("container");
  });
}
