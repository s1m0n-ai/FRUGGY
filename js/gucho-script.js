const contract_address_selector = document.querySelector('.contact-copy-icon')

if (contract_address_selector) {
    contract_address_selector.addEventListener('click', function () {
        const address = document.getElementById('contact-address').innerText;
        navigator.clipboard.writeText(address).then(function () {
            console.log("text copied")
        }).catch(function (err) {
            console.error('clould not copy text: ', err);
        });
    });
}

function showGuchoHelmetpage() {
    window.location.href = "helmet.html";
}

function backtoGuchopage() {
    window.location.href = 'index.html?skipVideo=true';
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skipVideo') === 'true') {
        document.getElementById('video-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }

};



