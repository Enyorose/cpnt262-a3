fetch('https://ghibliapi.herokuapp.com/films/')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
     // applying my selectors to the items in html
    const movie = document.querySelector(".movies")
    const button = document.querySelector(".btn")
    //create a function to produce a random movie
    const randomFilm = function() {
    //creating a random number
    let film = Math.floor(Math.random() * 21)
    movie.innerHTML = `
    <figure>
    <img src="${data[film].image}" alt="${data[film].title}" weight="300" height="450">
    <h3>${data[film].title}</h3>
    <figcaption>${data[film].description}</figcaption>
    </figure>
    ` }
    randomFilm()
    //add a click listener to the bottom to produce the next random movie
    button.addEventListener('click', randomFilm)
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    movie.innerHTML = `
    <h1>Turn back this page is not available</h1>
    <h2>404 Page not found</h2>
    `
    console.log(err);
  });

  

