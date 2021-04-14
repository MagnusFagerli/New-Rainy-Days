const url = "https://rainy-days.fagerlidesign.no/wp-json/wc/store/products/";

const container = document.querySelector(".jacketcontainer");

async function fetchJacket() {
    try {
        const response = await fetch(url);
        const jacket = await response.json();

        for (let i = 0; i < jacket.length; i++) {
            console.log("test");


            container.innerHTML += `<div class="product-card">
                                    <a href="product.html?id=${jacket[i].id}"><h2>${jacket[i].name}</h2>
                                    <div class="jacketimg"><img src="${jacket[i].images[0].src};"></div></a>
                                    <p>${jacket[i].short_description}</p><p>${jacket[i].prices.price}<i>$</i></p>
                                    <div class="buybtn"><a href="product.html?id=${jacket[i].id}"><h4>Explore</h4></div>
                                    </div>
                                    
            
            
            `
        }


    }
    catch (error) {
        console.log(error);
    }
}

fetchJacket();
