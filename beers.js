const beers = [
    {
        title: "Mango Bay",
        sub: "Mad Scientist Beer",
        text: "Pale Ale - American",
    },
    {
        title: "Távoli Galaxis",
        sub: "Rothbeer Brewery",
        text: "IPA - American",
    },
    {
        title: "Flying Rabbit AIPA",
        sub: "MONYO Brewing Co.",
        text: "IPA - American",
    },
    {
        title: "Liquid Cocaine",
        sub: "Mad Scientist Beer",
        text: "IPA - Imperial",
    },
    {
        title: "Organic Chocolate Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - English",
    },
    {
        title: "Bracia",
        sub: "Thornbridge Brewery",
        text: "Strong Ale - English",
    },
    {
        title: "Oatmeal Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - Oatmeal",
    },
    {
        title: "Black Tokyo Horizon",
        sub: "BrewDog",
        text: "Stout - American Imperial",
    },
    {
        title: "Vintage Ale",
        sub: "Fuller's",
        text: "Old Ale",
    },
    {
        title: "All the Leaves are Brown",
        sub: "Tempest Brewing Company",
        text: "Brown Ale - American",
    }
];


const beersList = document.querySelector("#cards");


for (let i = 0; i < beers.length; ++i){
    let card = 
    `<div class="card">
    <div class="circle">${i + 1}</div>
    <h1 class="card-title">${beers[i].title}</h1>
    <h2 class="card-sub">${beers[i].sub}</h2>
    <p class="card-text">${beers[i].text}</p>
    <button type="button" value="text">details<span class="material-symbols-outlined">
    arrow_forward
    </span></button>
    </div>`
    
        beersList.insertAdjacentHTML("beforeend", card);
}
