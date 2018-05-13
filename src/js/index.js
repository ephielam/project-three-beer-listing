//imports
//axios allows us to fetch data from API without ajax
import axios from 'axios';
//beer.js stores Beer class
import Beer from './beer';
// import SingleBeer from './singlebeer.js';

//for the homepage
//dipslay page 1 on load
changePageNum(1);

//when a page number link is clicked
document.querySelectorAll('.pagination a').forEach(a => {
  	a.addEventListener('click', function(event) {
	  	//make its id a variable named 'page'
	    const page = event.target.id;
	    //empty container before before loading new page
	    const container = document.getElementById('beers-grid');
	  	container.innerHTML = '';
	  	//remove 'active' class from all links
	  	document.querySelectorAll('.pagination a').forEach(a => {
		  	a.classList.remove('active');
		  	//add 'active' class to this link
		  	this.classList.add('active');
		  });
	  	//changePageNum function to show selected page (1-5) info
		changePageNum(page);
  })
});

//reload page 1 when returning to the 'beers' page
document.querySelector('.beers-page').addEventListener('click', function(event) {
	const container = document.getElementById('beers-grid');
	container.innerHTML = '';
	changePageNum(1);
	//hide 'pick-a-beer-form'
	const form = document.getElementById('pick-a-beer-form');
	form.setAttribute('style', 'display: none');
	const pagination = document.getElementById('pagination');
	pagination.setAttribute('style', 'display: block');
});

//when the 'quick find' page is selected
document.querySelector('.quick-find-page').addEventListener('click', function(event) {
	//empty the container before loading new page
	const container = document.getElementById('beers-grid');
	container.innerHTML = '';
	//load quickFind
	quickFind();
	container.setAttribute('style', 'display: block');
	//hide 'pick-a-beer-form'
	const form = document.getElementById('pick-a-beer-form');
	form.setAttribute('style', 'display: none');	
	//hide pagination
	const pagination = document.getElementById('pagination');
	pagination.setAttribute('style', 'display: none');
	
});

//when the 'pick a beer' page is selected
document.querySelector('.pick-a-beer-page').addEventListener('click', function(event) {
	//empty the container before loading new page
	const container = document.getElementById('beers-grid');
	container.innerHTML = '';
	//show 'pick-a-beer-form'
	const form = document.getElementById('pick-a-beer-form');
	form.setAttribute('style', 'display: flex');
	//hide pagination
	const pagination = document.getElementById('pagination');
	pagination.setAttribute('style', 'display: none');
});

//function to change the page on 'beers' page
function changePageNum(page) {
//change the page number
	axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`)
	  .then(function (response) {
	   //name the retrieved data 'beerray'
	   const beerray = response.data;
	   //for each beer
	   for (let eachBeer of beerray){
	 		let beer = buildBeer(eachBeer);
	 		//add6ToPage function from beer script
	     	beer.add6ToPage(); 	
	    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

//function to create new streamlined beer objects
function buildBeer(eachBeer) {
 	//declare variables for each required value pulled from eachBeer object
    const name = eachBeer.name;
    const desc = eachBeer.description;
    const tag = eachBeer.tagline;
    const img = eachBeer.image_url;
    const abv = eachBeer.abv;
    const ibu = eachBeer.ibu;
    const ph = eachBeer.ph;
    //use imported Beer class
    let beer = new Beer(name, desc, tag, img, abv, ibu, ph);
    //tell the function to return beer
    return beer;
};


function quickFind() {
//use punk api 'random beer generator'
	axios.get(`https://api.punkapi.com/v2/beers/random`)
	  .then(function (response) {
	  	//name the retrieved data 'beerobject'
	   	const beerobject = response.data[0];

	  	const container = document.getElementById('beers-grid');
	  	container.innerHTML = '';

	  	let beer = document.createElement('div');
        beer.className = 'single-beer-box';
    //for inside the div, img, name (h2), tagline(h3),desc (p),
    let beerImg = document.createElement('img');
    	beerImg.className = 'beer-img';
		beerImg.setAttribute('src', beerobject.image_url);
		beerImg.setAttribute('alt',beerobject.name);
    let beerName = document.createElement('h2');
        beerName.className = 'beer-name';
        beerName.innerText = beerobject.name;
        let beerTag = document.createElement('h3');
        beerTag.className = 'beer-tag';
        beerTag.innerText = beerobject.tagline;
    let beerDesc = document.createElement('p');
        beerDesc.className = 'beer-desc';
        beerDesc.innerText = beerobject.description;
    //create another inner div, class 'beer-stats'
    let beerStats = document.createElement('div');
        beerStats.className = 'beer-stats';
        //inside 'beer-stats', abv, ibu, and ph divs
       	let beerAbv = document.createElement('div');
            	beerAbv.className = 'beer-abv';
            let beerAbvLabel = document.createElement('p');
                beerAbvLabel.className = 'beer-abv-label';
                beerAbvLabel.innerText = 'ABV';
            let beerAbvValue = document.createElement('span');
                beerAbvValue.className = 'beer-abv-value';
                beerAbvValue.innerText = beerobject.abv;
        let beerIbu = document.createElement('div');
            beerIbu.className = 'beer-ibu';
            let beerIbuLabel = document.createElement('p');
                beerIbuLabel.className = 'beer-ibu-label';
                beerIbuLabel.innerText = 'IBU';
            let beerIbuValue = document.createElement('span');
                beerIbuValue.className = 'beer-ibu-value';
                beerIbuValue.innerText = beerobject.ibu;
        let beerPh = document.createElement('div');
            beerPh.className = 'beer-ph';
            //depending on the ph value, set a different class (for background color)
            if (beerobject.ph < 4.6) {
                	beerPh.classList.add('beer-ph-46');
                } else if (beerobject.ph < 5.4) {
                	beerPh.classList.add('beer-ph-4650');
                } else if (beerobject.ph < 5.8) { 	
                	beerPh.classList.add('beer-ph-5458');
                } else {
                	beerPh.classList.add('beer-ph-5862');
                };
            let beerPhLabel = document.createElement('p');
                beerPhLabel.className = 'beer-ph-label';
                beerPhLabel.innerText = 'pH';
            let beerPhValue = document.createElement('span');
            	beerPhValue.className = 'beer-ph-value';
                beerPhValue.innerText = beerobject.ph; 
            //add the ingredients button
        let ingredientsButton = document.createElement('button');
            ingredientsButton.className = 'ingredients';
            ingredientsButton.innerText = 'Ingredients'; 
    let buttonDiv = document.createElement('div');
        buttonDiv.className = 'button-div';
        let anotherButton = document.createElement('button');
            anotherButton.className = 'another-beer';
            anotherButton.innerText = 'Give me another beer'; 

    //append all of the above to apporpriate parent elements
    //'another-beer' button inside the 'anotherButton' div
    buttonDiv.appendChild(anotherButton);
    //contents to abv-ibu-ph baby divs         
    beerAbv.appendChild(beerAbvLabel);
    beerAbv.appendChild(beerAbvValue);
    beerIbu.appendChild(beerIbuLabel);
    beerIbu.appendChild(beerIbuValue);
    beerPh.appendChild(beerPhLabel);
    beerPh.appendChild(beerPhValue);
    //abv-ibu-ph divs to the beer stats div
    beerStats.appendChild(beerAbv);
    beerStats.appendChild(beerIbu);
    beerStats.appendChild(beerPh);
    //major items to beer-box div
    beer.appendChild(beerImg);
    beer.appendChild(beerName);
    beer.appendChild(beerTag);
    beer.appendChild(beerDesc);
    beer.appendChild(beerStats);
    beer.appendChild(ingredientsButton);
  
    //bung it all in the html 'beers-grid' section
    container.appendChild(beer);
    container.appendChild(buttonDiv);
	 		// let random = buildRandom(randomBeer);
	 		// //add6ToPage function from beer script
	   //   	random.add1ToPage(); 	
	    
  })
  .catch(function (error) {
    console.log(error);
  });
}