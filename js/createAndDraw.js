export default function createAndDraw(blob) {
    const img = document.createElement("img");

    img.id = "preview";
    img.src = URL.createObjectURL(blob);
    img.style.borderRadius = "12px";
    img.style.margin = " 0 10px 10px 0";

    document.querySelector(".images").append(img);
}