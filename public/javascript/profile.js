window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input-profile');
    const form = document.querySelector('#form-container');

    form.addEventListener('click', () => {
        input.click();
    })

    input.addEventListener('change', ()=> {
        form.submit();
    })

})