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

const normalScrollDown = (value) => {
  window.scrollBy(0, value);
};

const pushingSwitchingUrl = (image, response, URL) => {
  switch (URL) {
    case configAnimals.catUrl:
      image.src = response.data.file;
      break;

    case configAnimals.dogUrl:
      image.src = response.data.url;
      let fileNameEx = urlParseEx(image.src);
      if (fileNameEx === "mp4" || fileNameEx === "webm") {
        image = createdVideoOBJ(image, response.data.url);
      }
      break;

    case configAnimals.foxUrl:
      image.src = response.data.image;
      break;

    case configAnimals.rabbitUrl:
      image.src = URL;
      break;
  }

  return image;
};
