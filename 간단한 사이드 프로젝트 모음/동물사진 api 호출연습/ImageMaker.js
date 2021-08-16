const scrollDownValue = 1400;
const imgWidthValue = 300;
const pTegNumVal = 0;

const randomImageMaker = (URL) => {
  axios
    .get(URL)
    .then((response) => {
      let image = new Image(imgWidthValue);
      image = pushingSwitchingUrl(image, response, URL);
      imagePostedZone.appendChild(image);
    })
    .catch((error) => {
      const p = document.createElement("p");
      imagePostedZone.appendChild(p);
      const errorMessage = imagePostedZone.querySelector("p");

      errorMessage.innerHTML =
        error.message + ": " + "서버에서 불러오지 못했습니다.";
    });
  normalScrollDown(scrollDownValue);
};
