const updateBitcoinButtonText = (val) => {
    document.getElementById("bitcoin-button").textContent = val;
}

//handle browser node differences
if(typeof exports != 'undefined') {
    module.exports = {
        updateBitcoinButtonText
    }
}

