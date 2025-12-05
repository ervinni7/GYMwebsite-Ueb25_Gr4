const forma = document.getElementById('formaRegjistrimit');
const fushaEmail = document.getElementById('email');

/* Kur të klikoni Sign Up */
forma.addEventListener('submit', function(event) {
    event.preventDefault(); // Ndaluam refresh-in e faqeve

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (emailPattern.test(fushaEmail.value)) {
        // Shfaqim mesazhin e suksesit
        Swal.fire({
            title: 'Sukses!',
            text: 'Faleminderit! U regjistruat me sukses.',
            icon: 'success',
            confirmButtonText: 'Në rregull',
            confirmButtonColor: '#e69500'
        });
        
        // Përsëri pastrojmë fushën e email-it pasi të shtypet butoni
        fushaEmail.value = '';
    } else {
        // Nëse emaili është i pavlefshëm
        Swal.fire({
            title: 'Gabim!',
            text: 'Ju lutemi futni një email të vlefshëm.',
            icon: 'error',
            confirmButtonText: 'Në rregull',
            confirmButtonColor: '#e69500'
        });
    }
});
