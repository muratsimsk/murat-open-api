// Fetch data from TheCatAPI to get cat breeds
fetch('https://api.thecatapi.com/v1/images/search')
  .then((res) => {
    if (!res.ok){
        throw new Error("Invalid Request");

    }
    return res.json();

  })
  .then(data => {
    console.log(data[0].url); 

  })
  .catch((err) => console.warn(err));



