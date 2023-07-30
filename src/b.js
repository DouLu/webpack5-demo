const year = "2023";
const desc = "test desc";
export { year, desc };

import img from "./img/img.png";
const Img = document.createElement("img");
Img.src = img;
debugger;
document.getElementById("main").appendChild(Img);

if (module?.hot) {
  module.hot.accept();
}

console.log("start hot replace");
