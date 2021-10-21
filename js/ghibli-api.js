fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
   
    // Any code that depends on the `data` must go in this block
    console.log(data);
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });

  const movie = document.querySelector(".movies")

  movie.innerHTML = `
  <figure>
  <img src="${data.image}" alt="${data.title}">
  <figcaption>${data.description}</figcaption>
  </figure>
  `  

