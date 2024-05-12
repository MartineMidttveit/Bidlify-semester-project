export default function createElement(tag, classNames = false, text = false) {
    const ele = document.createElement(tag);
    classNames && ele.setAttribute("class", classNames);
    text && (ele.textContent = text);
  
    return ele;
}
  