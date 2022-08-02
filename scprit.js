const newJokes = document.querySelector(".joke-text");
const buttonFuc = document.querySelector(".new-joke-btn");
const tweetlink = document.querySelector(".tweet-btn");

buttonFuc.addEventListener("click", getNEWJokes);

getNEWJokes();
function getNEWJokes() {
    //  https://icanhazdadjoke.com/ api for getting new jocks
    // fatch().then(function().then(function())).catch(function())
    fetch("https://icanhazdadjoke.com/",{
        headers: {
            'Accept': 'application/json'
          }
    }).then((response)=>{
        // console.log(response);
       return response.json();
    }).then((result)=>{
        // console.log(result.joke);
        
        newJokes.innerHTML = result.joke;
        let newJoke = `https://twitter.com/share?text=${result.joke}`;
        tweetlink.setAttribute('href', newJoke);
        
    }).catch((error)=>{
        console.log(error.name);
        console.log(error.message);
        newJokes.innerHTML = error.message ;

    })
}
