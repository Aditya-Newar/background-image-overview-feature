let summer = document.querySelector(".summer");
let winter = document.querySelector(".winter")
let body = document.querySelector("body");
let autumn = document.querySelector(".autumn");
let spring = document.querySelector(".spring");
let rainy = document.querySelector(".rainy");

const themes = {
    summer: "smr",
    winter: "wntr",
    autumn: "autm",
    spring: "spng",
    rainy: "rny",
};

Object.entries(themes).forEach(([key, themeClass]) => {
    document.querySelector(`.${key}`).addEventListener("mouseover", () => {
        body.className = themeClass;
    });
});
