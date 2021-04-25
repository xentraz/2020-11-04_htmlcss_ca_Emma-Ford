let GameHubAPI = [];

// document.querySelector('.loading').innerHTML = `<img src="https://www.gatewaygreen.org/wp-content/uploads/2017/07/Spinner.gif"/>`
// Source: 

const getGames = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/http://xentraz.tech/wp-json/wc/store/products?per_page=20'
		);

		const res = await response.json();
		GameHubAPI = res;
		console.log(GameHubAPI)

		gameCards(GameHubAPI);
    gameCards2(GameHubAPI);
    gameCards3(GameHubAPI)


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
	// document.querySelector('.loading').innerHTML = ``;
};

getGames();


const gameCards = (GamesArray) => {
	const mainElm = document.querySelector('.featuredInfo');
  for (let i = 0; i < GamesArray.length; i++) {
    if ((GamesArray[i].categories[0].name === 'Featured') || (GamesArray[i].categories[1].name === 'Featured')) {
      mainElm.innerHTML += 
      `
      <div class="gameCard">
      <h3>${GamesArray[i].name}</h3>
      <div class="gameImg"><img src="${GamesArray[i].images[0].src}"/></div>
      <a href="/html/details.html?id=${GamesArray[i].id}">More Info</a>
      </div>
      `;
    }
  }
}

const gameCards2 = (GamesArray2) => {
	const mainElm2 = document.querySelector('.freeInfo');
  for (let i = 0; i < GamesArray2.length; i++) {
    if ((GamesArray2[i].categories[0].name === 'Free') || (GamesArray2[i].categories[1].name === 'Free')) {
      mainElm2.innerHTML += 
      `
      <div class="gameCard">
      <h3>${GamesArray2[i].name}</h3>
      <div class="gameImg"><img src="${GamesArray2[i].images[0].src}"/></div>
      <a href="/html/details.html?id=${GamesArray2[i].id}">More Info</a>
      </div>
      `;
    }
  }
}

const gameCards3 = (GamesArray3) => {
	const mainElm3 = document.querySelector('.newInfo');
  for (let i = 0; i < GamesArray3.length; i++) {
    if ((GamesArray3[i].categories[0].name === 'New Releases') || (GamesArray3[i].categories[1].name === 'New Releases')) {
      mainElm3.innerHTML += 
      `
      <div class="gameCard">
      <h3>${GamesArray3[i].name}</h3>
      <div class="gameImg"><img src="${GamesArray3[i].images[0].src}"/></div>
      <a href="/html/details.html?id=${GamesArray3[i].id}">More Info</a>
      </div>
      `;
    }
  }
}