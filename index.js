const ColorValue = document.getElementById("ColorValue");
const ColorMode = document.getElementById("ColorMode");
const GetColorBtn = document.getElementById("GetColorBtn");
const colorContainer = document.getElementById("colorContainer");

GetColorBtn.addEventListener("click", () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${ColorValue.value.replace(
      "#",
      ""
    )}&mode=${ColorMode.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      colorContainer.innerHTML = "";

      data.colors.forEach((color) => {
        const box = document.createElement("div");
        box.className = "colorBox";
        box.style.backgroundColor = color.hex.value;
        box.innerText = color.hex.value;
        colorContainer.appendChild(box);
      });
    });
});
