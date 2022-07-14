// Global Variables for height, width, color and form
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const colorSelected = document.querySelector("#colorPicker");
const size = document.querySelector("#sizePicker");

//function to create table
const makeGrid = (h, w) => {
  //create div for table
  const myDiv = document.createElement("div");
  //calculate width of table div
  setWidth = 25 * w;
  //give myDiv an id for querySelector, width and auto margin for centering
  myDiv.setAttribute("id", "myDiv");
  myDiv.style.width = `${setWidth}px`;
  myDiv.style.margin = "auto";
  //for loop for rows
  for (let r = 1; r <= h; r++) {
    const newRow = document.createElement("tr");
    console.log("tr - " + r);
    myDiv.appendChild(newRow);
    //for loop for columns
    for (let c = 1; c <= w; c++) {
      const newCol = document.createElement("td");
      //event listener will add class "selected" when table cell is clicked and remove class if it is clicked a second time
      newCol.addEventListener("click", function (e) {
        let target = e.target;
        if (target.classList.contains("selected")) {
          target.classList.remove("selected");
        } else {
          target.classList.add("selected");
        }
      });
      console.log("td - " + c);
      newRow.appendChild(newCol);
    }
  }
  document.body.appendChild(myDiv);
};

//when form is submitted set h and w to height and width, remove previous grid if there is one.  prevent default stops form from submitting.
size.addEventListener("submit", function (e) {
  e.preventDefault();
  const h = height.value;
  const w = width.value;
  const divToRemove = document.querySelector("#myDiv");
  if (divToRemove) {
    divToRemove.remove();
  }
  //call makeGrid function with h and w arguments
  makeGrid(h, w);
});

//when a color is selected, set all boxes with "selected" class to the selected color.
colorSelected.addEventListener("input", function () {
  const boxSelected = document.querySelectorAll(".selected");
  boxSelected.forEach(function (b) {
    b.style.backgroundColor = colorSelected.value;
    //remove "selected" class from each square
    b.classList.remove("selected");
  });
});
