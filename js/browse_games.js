let GameHubAPI = [];

// document.querySelector('.loading').innerHTML = `<img src="https://www.gatewaygreen.org/wp-content/uploads/2017/07/Spinner.gif"/>`
// Source: 
// document.querySelector('.welcome_info').classList.add('hide');
// document.querySelector('footer').classList.add('hide');

const getGames = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/http://xentraz.tech/wp-json/wc/store/products'
		);

		const res = await response.json();
		GameHubAPI = res;
		console.log(GameHubAPI)

		GameCards(GameHubAPI);


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
	document.querySelector('.welcome_info').classList.remove('hide');
	document.querySelector('.loading').innerHTML = ``;
	document.querySelector('footer').classList.remove('hide');
};

getGames();


const GameCards = (charityArray) => {
	const mainElm = document.querySelector('.charityList');
	charityArray.map(({link, name, description, image, id}) => {
		mainElm.innerHTML += 
		`
		<div class="charity-card">
			<div class="charity-card-inner">
				<div class="charity-card-front">
					<div class = "charityImg">
						<img src="${image}"/>
					</div>
					<div class = "charityName">
					<h2>${name}</h2>
					</div>
				</div>
				<div class="charity-card-back">
				<div class="card_back">
						<h2>${name}</h2>
						<div class="donation_progress">
						<p>Yearly Goal: 80%</p>
							<div class ="progress_bar">
								<div class="color_bar"></div>
							</div>
							</div>
							<div class="donate_now_btn">
								<a href="details.html?id=${id}">donate</a>
							</div>
					</div>
				</div>
			</div>
		</div>
	`;
	});
}
