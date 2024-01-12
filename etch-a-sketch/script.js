const SIZE_OF_DRAWING_FIELD = 800;

let divContainer = document.querySelector(".container");
let buttonChangeGrid = document.querySelector("#btnChangeGrid");

function createGrid(gridRows) {
  let sizeOfCell = SIZE_OF_DRAWING_FIELD / gridRows;
  for (let i = 0; i < gridRows; i++)
    for (let j = 0; j < gridRows; j++) {
      let newDiv = document.createElement("div");
      newDiv.style.width = `${sizeOfCell - 2}px`;
      newDiv.style.height = `${sizeOfCell - 2}px`;
      newDiv.style.border = "1px solid rgba(0,0,0, 0.1)";
      newDiv.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
      divContainer.appendChild(newDiv);
    }
}

let gridRows = 64;
createGrid(gridRows);

buttonChangeGrid.addEventListener("click", (e) => {
  gridRows = parseInt(prompt("How many squares per side do you want?"));

  // while (gridRows < 1 || gridRows >= 100 || typeof rows != "number") {
  //   gridRows = prompt("You can't enter that. Type number:");
  // }
});
