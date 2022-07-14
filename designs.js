const makeGrid = (h, w) => {
  const myDiv = document.createElement("div");
  setWidth = 22 * w;
  myDiv.setAttribute("id", "myDiv");
  myDiv.style.width = `${setWidth}px`;
  myDiv.style.margin = "auto";
  for (let r = 1; r <= h; r++) {
    const newRow = document.createElement("tr");
    console.log("tr - " + h);
    myDiv.appendChild(newRow);
    for (let c = 1; c <= w; c++) {
      const newCol = document.createElement("td");
      newCol.addEventListener("click", function (e) {
        let target = e.target;
        if (target.classList.contains("selected")) {
          target.classList.remove("selected");
        } else {
          target.classList.add("selected");
        }
      });
      console.log("td - " + w);
      newRow.appendChild(newCol);
    }
  }
  document.body.appendChild(myDiv);
};

const size = document.querySelector("#sizePicker");
size.addEventListener("submit", function (e) {
  e.preventDefault();
  const h = document.getElementById("inputHeight").value;
  const w = document.getElementById("inputWidth").value;
  const divToRemove = document.querySelector("#myDiv");
  if (divToRemove) {
    divToRemove.remove();
  }
  makeGrid(h, w);
});

const colorSelected = document.querySelector("#colorPicker");
colorSelected.addEventListener("input", function () {
  const boxSelected = document.querySelectorAll(".selected");
  boxSelected.forEach(function (b) {
    b.style.backgroundColor = colorSelected.value;
    b.classList.remove("selected");
  });
});
