let generateBtn = document.querySelector("#shorten");
let api = document.querySelector("#myURL");
let toastError = document.querySelector('.toast-error')
let toastSuccess = document.querySelector('.toast-success');
let loaded = document.querySelector('.loading')

const url = new URL("https://t.ly/api/v1/link/shorten");
let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

generateBtn.addEventListener('click', () => {
    
    if (api.value) {
            loaded.classList.remove('d-hide')
            chrome.storage.local.get(['API'], function(result) {
                fetch(url, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({
                    "long_url": api.value,
                    "domain": "https://t.ly/",
                    "api_token": result.API
                })
             }).then(response => response.json())
                    .then(json => {
                        loaded.classList.add('d-hide')
                        toastSuccess.classList.remove('d-hide')
                        toastSuccess.textContent = json.short_url;
                 });
         });
        


    } else {
        toastError.classList.remove('d-hide')
        setTimeout(() => {
            toastError.classList.add('d-hide')
        }, 2500)
    }

})