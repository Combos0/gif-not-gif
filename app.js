async function gifStart() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=t2ilWvAtz6EDx36HEayD5xPBM0uHMRoj&s=cats', {mode: 'cors'});
    const gifData = await response.json();
    elements.img.src = gifData.data.images.original.url;
};

const elements = {
    img: document.getElementById('content'),
    BTN: document.getElementById('gifBTN'),
    search: document.getElementById('search'),
};

gifStart();

const eventHandlers = (() => {
    elements.BTN.addEventListener('click', searchGif);
})();

async function searchGif() {
    let keyWord = elements.search.value;
    const userSearch = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=t2ilWvAtz6EDx36HEayD5xPBM0uHMRoj&q=${keyWord}&limit=1&offset=0&rating=g&lang=en`, {mode: 'cors'});
    const gifData = await userSearch.json();
    elements.img.src = gifData.data[0].images.original.url;
};