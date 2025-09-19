export default function clearImages(elem) {
    if (elem.children.length > 1) {
        Array.from(elem.getElementsByTagName("img")).forEach(img => img.style.display = "none");
    }
}