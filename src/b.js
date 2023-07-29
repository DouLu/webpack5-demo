const year = "2023";
export { year };

import img from "./img/img.png";
const Img = document.createElement("img");
Img.src = img;
document.getElementById("main").appendChild(Img);
