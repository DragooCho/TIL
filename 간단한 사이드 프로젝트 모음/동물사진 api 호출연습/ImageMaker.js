const randomImageMaker = (URL) => {
  axios
    .get(URL)
    .then((response) => {
      let image = new Image(300);
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
      imagePostedZone.appendChild(image);
    })
    .catch((error) => {
      imagePostedZone.innerHTML = error;
    });
  clickScrollDown();
};
