import "./style.css";
import Icon from "./icon.png";
import printMe from "./print";

async function getComponent() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const { default: _ } = await import("lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // Test button
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
