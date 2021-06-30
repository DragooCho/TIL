const randomImageMaker = (URL) => {
  axios
    .get(URL)
    .then((response) => {
      let image = new Image(300);
      image = pushingSwitchingUrl(image, response, URL);
      imagePostedZone.appendChild(image);
    })
    .catch((error) => {
      imagePostedZone.innerHTML = error;
    });
  normalScrollDown(1500);
};
