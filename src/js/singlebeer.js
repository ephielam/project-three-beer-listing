export default class Singlebeer {
	constructor(name, description, tagline, imageUrl, abv, ibu, ph) {
    this.name = name;
    this.desc = description;
    this.tag = tagline;
    this.img = imageUrl;
    this.abv = abv;
    this.ibu = ibu;
    this.ph = ph;
  }

  add1ToPage() {
    //container is now a reference to the hmtl 'beers-grid' section
   const container = document.getElementById('beers-grid');
   	//create a div, class 'beer-box'
    let beer = document.createElement('div');
        beer.className = 'single-beer-box';
    //for inside the div, img, name (h2), tagline(h3),desc (p),
    let beerImg = document.createElement('img');
    	beerImg.className = 'beer-img';
		beerImg.setAttribute('src', this.img);
		beerImg.setAttribute('alt',this.name);
    let beerName = document.createElement('h2');
        beerName.className = 'beer-name';
        beerName.innerText = this.name;
        let beerTag = document.createElement('h3');
        beerTag.className = 'beer-tag';
        beerTag.innerText = this.tag;
    let beerDesc = document.createElement('p');
        beerDesc.className = 'beer-desc';
        beerDesc.innerText = this.desc;
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
                beerAbvValue.innerText = this.abv;
        let beerIbu = document.createElement('div');
            beerIbu.className = 'beer-ibu';
            let beerIbuLabel = document.createElement('p');
                beerIbuLabel.className = 'beer-ibu-label';
                beerIbuLabel.innerText = 'IBU';
            let beerIbuValue = document.createElement('span');
                beerIbuValue.className = 'beer-ibu-value';
                beerIbuValue.innerText = this.ibu;
        let beerPh = document.createElement('div');
            beerPh.className = 'beer-ph';
            //depending on the ph value, set a different class (for background color)
            if (this.ph < 4.6) {
                	beerPh.classList.add('beer-ph-46');
                } else if (this.ph < 5.4) {
                	beerPh.classList.add('beer-ph-4650');
                } else if (this.ph < 5.8) { 	
                	beerPh.classList.add('beer-ph-5458');
                } else {
                	beerPh.classList.add('beer-ph-5862');
                };
            let beerPhLabel = document.createElement('p');
                beerPhLabel.className = 'beer-ph-label';
                beerPhLabel.innerText = 'pH';
            let beerPhValue = document.createElement('span');
            	beerPhValue.className = 'beer-ph-value';
                beerPhValue.innerText = this.ph; 
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
  }
}