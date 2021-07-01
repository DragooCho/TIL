const randomImageMaker = (URL) => {
  axios
    .get(URL)
    .then((response) => {
      let image = new Image(imgWidthValue);
      image = pushingSwitchingUrl(image, response, URL);
      imagePostedZone.appendChild(image);
    })
    .catch((error) => {
      imagePostedZone.innerHTML = error;
    });
  normalScrollDown(scrollDownValue);
};

const scrollDownValue = 1400;
const imgWidthValue = 300;
