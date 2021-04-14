const jacketDetails = document.querySelector(".jacketdetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const url = "https://rainy-days.fagerlidesign.no/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchJacket() {

    try {
        const response = await fetch(url);
        const jacketdetails = await response.json();

        console.log(jacketdetails);

        jacketDetails.innerHTML += `<div class="jacket"><h2>${jacketdetails.name}</h2>
                                    <div class="shortdesc"><i>${jacketdetails.short_description}</i></div>
                                    <div class="mainjacket"><img src="${jacketdetails.images[0].src};"></div></a>
                                    <div class="longdesc">${jacketdetails.description}</div>
                                    
                                    
                                    <label class="red">
                                    <input type="radio" name="color" value="Red" />
                                    <div class="button"><span></span></div>
                                    </label>

                                <label class="blue">
                                    <input type="radio" name="color" value="Blue" />
                                    <div class="button"><span></span></div>
                                </label>
                                <label class="yellow">
                                    <input type="radio" name="color" value="Yellow" />
                                    <div class="button"><span></span></div>
                                </label>
                                

                                <div class="crt">
                                    <a href="checkout.html">Add to Cart</a>
                                </div>
                                    
        
        
        
        </div>
        `

    }
    catch (error) {
        console.log(error);
    }

}

fetchJacket();