fetch("http://shibe.online/api/shibes?count=3/")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((e) => console.log(`✔${e}`));

fetch("https://randomfox.ca/floof/")
  .then((response) => {
    console.log(response);
  })
  .catch((e) => console.log(`✔${e}`));
