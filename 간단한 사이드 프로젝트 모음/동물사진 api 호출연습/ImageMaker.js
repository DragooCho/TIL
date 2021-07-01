const randomImageMaker = (URL) => {
  axios
    .get(URL)
    .then((response) => {
<<<<<<< HEAD
      let image = new Image(imgWidthValue);
      image = pushingSwitchingUrl(image, response, URL);
=======
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
>>>>>>> parent of 547f08a... 동물사진 api 호출연습 -함수 코드정리
      imagePostedZone.appendChild(image);
    })
    .catch((error) => {
      imagePostedZone.innerHTML = error;
    });
<<<<<<< HEAD
  normalScrollDown(scrollDownValue);
=======
  clickScrollDown();
>>>>>>> parent of 547f08a... 동물사진 api 호출연습 -함수 코드정리
};

const scrollDownValue = 1500;
const imgWidthValue = 300;
