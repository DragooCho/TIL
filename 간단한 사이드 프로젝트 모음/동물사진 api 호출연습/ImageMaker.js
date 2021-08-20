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
      // imagePostedZone.appendChild(qwer);
    })
    .catch((error) => {
      const pTag = document.createElement("p");
      imagePostedZone.appendChild(pTag);
      const errorMessage = imagePostedZone.querySelector("p");

      errorMessage.classList.add("pTegNumVal");

      if (errorMessage.getAttribute("class") === "pTegNumVal") {
        errorMessage.setAttribute("class", pTegNumVal + 1);
      } else {
        errorMessage.setAttribute("class", "on");
      }

      errorMessage.innerHTML =
        error.message + ": " + "서버에서 불러오지 못했습니다.";
      imagePostedZone.querySelector(errorMessage);
    });
  normalScrollDown(scrollDownValue);
};
