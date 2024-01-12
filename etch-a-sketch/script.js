let divContainer = document.querySelector(".container");

for (let i = 0; i < 16; i++)
  for (let j = 0; j < 16; j++) {
    let newDiv = document.createElement("div");
    newDiv.style.width = "20px";
    newDiv.style.height = "20px";
    newDiv.style.border = "1px solid rgba(0,0,0, 0.1";
    divContainer.appendChild(newDiv);
  }
