function gifStart() {

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=t2ilWvAtz6EDx36HEayD5xPBM0uHMRoj&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        elements.img.src = response.data.images.original.url;
    })
    .catch(function(err) {
        console.log(err);
    });

};

const elements = {
    img: document.getElementById('content'),
    BTN: document.getElementById('gifBTN'),
};

gifStart();

const eventHandlers = (() => {
    elements.BTN.addEventListener('click', gifStart);
})();