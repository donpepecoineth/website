function expandImage(img) {
    var expandedImg = document.createElement("img");
    expandedImg.setAttribute("src", img.src);
    expandedImg.setAttribute("class", "expanded");
    expandedImg.onclick = function() {
      expandedImg.parentElement.removeChild(expandedImg);
    }
    document.body.appendChild(expandedImg);
  }
