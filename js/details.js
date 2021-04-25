const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");


async function getGames(){
  try{
    const response = await fetch("https://noroffcors.herokuapp.com/http://xentraz.tech/wp-json/wc/store/products/" + id);
    const gamesResult = await response.json(); 

    console.log(gamesResult)

    document.title = `${gamesResult.name}`; 

    document.querySelector('.gameInfo').innerHTML += 
    `
    <div class="gameDetails">
    <h1>${gamesResult.name}</h1>
    <div class="gameImg"><img src="${gamesResult.images[0].src}"/></div>
    <p>${gamesResult.description}</p>
    <p>${gamesResult.categories[0].name}</p>
    <p>${gamesResult.categories[1].name}</p>
    <p>In Stock: ${gamesResult.is_in_stock}</p>
    <p>Price: ${gamesResult.prices.price}-, NOK</p>
    </div>
    `;
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertToUser (
      'An error occured',
      'danger'
    );
    console.log(error);
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = ``;
    }, 5000)
  }
}

getGames(id);
