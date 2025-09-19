import fetchingData from "./fetchingData.js";
import createAndDraw from "./createAndDraw.js";
import clearImages from "./clearImages.js";

const form = document.querySelector("#imgForm");
const images = document.querySelector(".images");

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const params = new URLSearchParams(new FormData(form));
    const url = `https://dummyimage.com/${params.get("width")}x${params.get("height")}/${params.get("bg").substring(1)}/${params.get("color").substring(1)}.${params.get("type")}&text=${params.get("text")}&font=${params.get("font")}&size=${params.get("size")}`;
    
    // console.log(url);

    clearImages(images);
    for (let i = 0; i < params.get("count"); i++) {
        fetchingData(url).then(resp => createAndDraw(resp));
    }
});

document.querySelector(".images button").addEventListener("click", () => {
   clearImages(images);
});

// const params = new URLSearchParams(new FormData(form));
// console.log(params);
// console.log(new FormData(form));
// console.log(new FormData(form).keys());
// for (const elem of new FormData(form).keys()) {
//     console.log(elem);
// }