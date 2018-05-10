import axios from 'axios';

axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
  .then(function (response) {

  
  const  beerray = response.data;

   for (let value of beerray){

   	const container = document.getElementById('beers-grid');

    let beer = document.createElement('div');
        beer.className = 'beer-box';
    let beerImg = document.createElement('img');
    	beerImg.className = 'beer-img';
        beerImg.setAttribute('src',value.image_url);
        beerImg.setAttribute('alt',value.name);
    let beerName = document.createElement('h2');
        beerName.className = 'beer-name';
        beerName.innerText = value.name;
    let beerDesc = document.createElement('p');
        beerDesc.className = 'beer-desc';
        beerDesc.innerText = value.description;
    let beerStats = document.createElement('div');
        beerStats.className = 'beer-stats';
        let beerAbv = document.createElement('div');
            beerAbv.className = 'beer-abv';
            let beerAbvLabel = document.createElement('p');
                beerAbvLabel.className = 'beer-abv-label';
                beerAbvLabel.innerText = 'ABV';
            let beerAbvValue = document.createElement('span');
                beerAbvValue.className = 'beer-abv-value';
                beerAbvValue.innerText = value.abv;
        let beerIbu = document.createElement('div');
            beerIbu.className = 'beer-ibu';
            let beerIbuLabel = document.createElement('p');
                beerIbuLabel.className = 'beer-ibu-label';
                beerIbuLabel.innerText = 'IBU';
            let beerIbuValue = document.createElement('span');
                beerIbuValue.className = 'beer-ibu-value';
                beerIbuValue.innerText = value.ibu;
        let beerPh = document.createElement('div');
            beerPh.className = 'beer-ph';
            if (value.ph < 4.6) {
                	beerPh.classList.add('beer-ph-46');
                } else if (value.ph < 5.4) {
                	beerPh.classList.add('beer-ph-4650');
                } else if (value.ph < 5.8) { 	
                	beerPh.classList.add('beer-ph-5458');
                } else {
                	beerPh.classList.add('beer-ph-5862');
                };
            let beerPhLabel = document.createElement('p');
                beerPhLabel.className = 'beer-ph-label';
                beerPhLabel.innerText = 'pH';
            let beerPhValue = document.createElement('span');
            	beerPhValue.className = 'beer-ph-value';
                beerPhValue.innerText = value.ph;
           
               
    beerAbv.appendChild(beerAbvLabel);
    beerAbv.appendChild(beerAbvValue);
    beerIbu.appendChild(beerIbuLabel);
    beerIbu.appendChild(beerIbuValue);
    beerPh.appendChild(beerPhLabel);
    beerPh.appendChild(beerPhValue);
  
    beerStats.appendChild(beerAbv);
    beerStats.appendChild(beerIbu);
    beerStats.appendChild(beerPh);
  
    beer.appendChild(beerImg);
    beer.appendChild(beerName);
    beer.appendChild(beerDesc);
    beer.appendChild(beerStats);
  
    container.appendChild(beer);

   
	}
})
  
  .catch(function (error) {
    console.log(error);
  });




