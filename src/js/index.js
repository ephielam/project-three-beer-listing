//imports
//axios allows us to fetch data from API without ajax
import axios from 'axios';
//beer.js stores Beer class
import Beer from './beer';
import SingleBeer from './singlebeer.js';

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
	container.innerHTML = 'yaaasmaate';
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



function singleBeer(beer){
axios.get(`https://api.punkapi.com/v2/beers/random`)
	.then(function (response) {
		//add1ToPage function from singlebeer script
		const random = response.data;
		singleBeer.add1ToPage();

	});
};