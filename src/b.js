const year = "2023";
export { year };

import img from "./img/img.png";
const Img = document.createElement("img");
Img.src = img;
debugger;
document.getElementById("main").appendChild(Img);

if (module?.hot) {
  module.hot.accept();
}

console.log("start hot replace");
