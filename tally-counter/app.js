"use strict";
const displayCount = document.getElementById("display-count");
const main = document.getElementById("container");
const btnsDiv = document.getElementById("btnsDiv");
const h1 = document.querySelector("h1");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
// STYLING USING TYPESCRIPT
/*
since main might be null we have to use and optional chaining
main.style.height = "100vh"; === 'main' is possibly 'null'
BUT
if we use optional it will throw this error
"The left-hand side of an assignment expression may not be an optional property access."
*/
if (main != null) {
    main.style.height = "100vh";
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
}
if (displayCount != null) {
    displayCount.style.width = "200px";
    displayCount.style.height = "100px";
    displayCount.style.display = "flex";
    displayCount.style.flexDirection = "column";
    displayCount.style.justifyContent = "center";
    displayCount.style.alignItems = "center";
}
if (h1 != null) {
    h1.style.fontSize = "4rem";
    h1.style.fontFamily = "'Oswald', sans-serif";
}
if (btnsDiv != null) {
    btnsDiv.style.width = "200px";
    btnsDiv.style.display = "flex";
    btnsDiv.style.justifyContent = "space-evenly";
    btnsDiv.style.alignItems = "center";
    // btnsDiv.style.gap = "";
}
if (incrementBtn != null && decrementBtn != null) {
    incrementBtn.style.padding = "1rem 2rem";
    decrementBtn.style.padding = "1rem 2rem";
    incrementBtn.style.cursor = "pointer";
    decrementBtn.style.cursor = "pointer";
}
// ADD FUNCTIONALITY USING TYPESCRIPT
let counter = 1;
incrementBtn === null || incrementBtn === void 0 ? void 0 : incrementBtn.addEventListener("click", (e) => {
    if (h1 != null) {
        h1.textContent = `${counter++}`;
    }
});
decrementBtn === null || decrementBtn === void 0 ? void 0 : decrementBtn.addEventListener("click", (e) => {
    if (h1 != null) {
        h1.textContent = `${counter--}`;
    }
});
