import { year } from "./b.js";
import "./a.scss";
import "./b.css";
import { random } from "lodash";
console.log(
  "%c [ year ]-2",
  "font-size:13px; background:pink; color:#bf2c9f;",
  year
);

const arrow = (arg) => {
  console.log(
    "%c [ arg ]-11",
    "font-size:13px; background:pink; color:#bf2c9f;",
    arg
  );

  const clone = structuredClone(arg);
  console.log(
    "%c [ clone ]-18",
    "font-size:13px; background:pink; color:#bf2c9f;",
    clone
  );
};

arrow("no hot replace");

console.log("env----", NODE_ENV);

console.log("split chunks----", random(0, 10));
