const ColorValue = document.getElementById("ColorValue");
const ColorMode = document.getElementById("ColorMode");
const GetColorBtn = document.getElementById("GetColorBtn");

GetColorBtn.addEventListener("click", () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${ColorValue.value.replace(
      "#",
      ""
    )}&mode=${ColorMode.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
