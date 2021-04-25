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
      <div class="gameName">
        <h1>${gamesResult.name}</h1>
      </div>
      <div class="gameImg2"><img src="${gamesResult.images[0].src}"/></div>
      <div class="gameDesc">
        <p>${gamesResult.description}</p>
      </div>
    </div>
    `;
  
    document.querySelector('.stockStatus').innerHTML += 
    `
    <p>In Stock: ${gamesResult.is_in_stock}</p>
    `; 
  
    document.querySelector('.tags').innerHTML += 
    `
    <div class="tags">
    <p>Available On: ${gamesResult.tags[0].name}, ${gamesResult.tags[1].name}, ${gamesResult.tags[2].name}</p>
    </div>
    `; 

    if (gamesResult.on_sale) {
      document.querySelector('.sale').innerHTML += 
    `
    <p>On Sale For: ${gamesResult.prices.sale_price}-, NOK</p>
    <p class="origionalPrice">Origional Price: ${gamesResult.prices.regular_price}-,NOK</p>
    `; 
    } else {
      document.querySelector('.sale').style.display = 'none';
    }

    document.querySelector('.basketButton').innerHTML += 
    `
    <div class="priceButton">
    <p>Price: ${gamesResult.prices.price}-, NOK</p>
    </div>
    `; 

    document.querySelector('.categories').innerHTML += 
    `
    <div class="categoriesList">
    <p>Category: ${gamesResult.categories[0].name}, ${gamesResult.categories[1].name}</p>`; 

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
