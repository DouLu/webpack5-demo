const animal = "sunry";

const arrow = (arg) => {
  console.log(
    "%c [ arg ]-2",
    "font-size:13px; background:pink; color:#bf2c9f;",
    arg
  );
};
arrow("test babel");

const sleep = async () =>
  new Promise((resovle) => {
    setTimeout(resovle, 1000);
  });
