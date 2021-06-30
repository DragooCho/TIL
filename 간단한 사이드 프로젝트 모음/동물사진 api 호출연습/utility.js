const urlParseEx = (img) => {
  const parseUrl = img.split(".");
  const nameExValue = parseUrl[parseUrl.length - 1];
  return nameExValue;
};

const createdVideoOBJ = (image, dataUrl) => {
  image = null;
  let newVideoTag = document.createElement("video");

  newVideoTag.setAttribute("src", dataUrl);
  newVideoTag.setAttribute("width", "300");
  newVideoTag.setAttribute("autoplay", "true");
  newVideoTag.setAttribute("loop", "true");
  image = newVideoTag;

  return image;
};

function clickScrollDown() {
  window.scrollBy(0, 1000);
}
