const getFoxPhoto = async () => {
  try {
    const response = await fetch("https://randomfox.ca/floof/");
    console.log(response.type);
    console.log(response.url);
    console.log(response.status);
  } catch (error) {
    (error) => console.log(`✔${error}`);
  }
};

getFoxPhoto();
