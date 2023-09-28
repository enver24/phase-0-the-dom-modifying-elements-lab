document.querySelector("main").remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

const yourName = "Enver Balabanel";
newHeader.textContent = `${yourName} is the champion`;