const randomDogBtn = document.querySelector(".randomDog"),
  randomFoxBtn = document.querySelector(".randomFox"),
  randomCatBtn = document.querySelector(".randomCat"),
  randomRabbitBtn = document.querySelector(".randomRabbit"),
  imagePostedZone = document.querySelector(".image_posted");

randomCatBtn.addEventListener("click", () => {
  randomImageMaker(configAnimals.catUrl);
});

randomDogBtn.addEventListener("click", () => {
  randomImageMaker(configAnimals.dogUrl);
});

randomFoxBtn.addEventListener("click", () => {
  randomImageMaker(configAnimals.foxUrl);
});

randomRabbitBtn.addEventListener("click", () => {
  randomImageMaker(configAnimals.rabbitUrl);
});
