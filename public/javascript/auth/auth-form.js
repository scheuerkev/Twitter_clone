window.addEventListener('DOMContentLoaded', () => {
    const forgot = document.querySelector('#forgot');
    if (forgot) {
        forgot.addEventListener('click', () => {
            Swal.fire({
                title: 'Just fill your email',
                input: 'email',
                inputPlaceholder: "your@email.yourdomain"
            }).then(result => {
                const email = result.value;
                if (email) {
                    axios.post('/users/forgot-password', {
                        email
                    }).then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Please check your emails to continue your password reset'
                        })
                    }).catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Errr.... something went wrong'
                        })
                    })
                }
            })
        })
    }
});