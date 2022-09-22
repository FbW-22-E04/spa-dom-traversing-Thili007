// 1st Q

const h1 = document.querySelector("h1");
const closestHeader = h1.closest("header");

closestHeader.style.border = "5px solid tomato";

// 2nd Q

const package = document.querySelectorAll(".package-title");
package.forEach(
  (item) =>
    (item.previousElementSibling.style.border = "4px solid rgb(82, 212, 255)")
);

let labels = document.querySelectorAll(`.info label`);
labels.forEach((label) => {
  if (label.matches(".mild")) {
    label.style.borderBottom = "2px solid yellow";
  } else if (label.matches(".intense")) {
    label.style.borderBottom = "2px solid orange";
  } else {
    label.style.borderBottom = "2px solid red";
  }
});

const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");
const listItems = navList.children;

for (let i = 0; i < listItems.length; i++) {
  const item = document.createElement("li");
  item.innerText = listItems[i].innerText;
  siteMap.appendChild(item);
}
