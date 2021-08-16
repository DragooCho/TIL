const randomImageMaker = (URL) => {
  axios
    .get(URL)
    .then((response) => {
      let image = new Image(imgWidthValue);
      image = pushingSwitchingUrl(image, response, URL);
      imagePostedZone.appendChild(image);
    })
    .catch((error) => {
      const errorMessage =
        error.message + ": " + "현재 서버에서 불러오지 못했습니다.";
      imagePostedZone.appendChild(errorMessage);
    });
  normalScrollDown(scrollDownValue);
};

const scrollDownValue = 1400;
const imgWidthValue = 300;
