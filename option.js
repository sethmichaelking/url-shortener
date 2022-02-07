let saveBtn = document.querySelector("#shorturl");
let api = document.querySelector("#myAPI");
let toastError = document.querySelector('.toast-error')
let toastSuccess = document.querySelector('.toast-success');

saveBtn.addEventListener('click', () => {
    
    if (api.value) {
        toastSuccess.classList.remove('d-hide');

        //store the data

        chrome.storage.local.set({"API": api.value}, function() {
            console.log('Value is set to ' + api.value);
          });

    } else {
        toastError.classList.remove('d-hide')
        setTimeout(() => {
            toastError.classList.add('d-hide')
        }, 2500)
    }

})