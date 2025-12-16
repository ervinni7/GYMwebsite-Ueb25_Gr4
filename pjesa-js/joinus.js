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
    fushaEmail.value = '';
});
// Harta dhe udhezimet
const btnUdhezime = document.getElementById('btn-udhezime');
const mapContainer = document.getElementById('mapi-container');
const textContainer = document.getElementById('udhezimet-text');

if (btnUdhezime && mapContainer && textContainer) {
    btnUdhezime.addEventListener('click', function() {
        
        // Kontrollojmë nëse harta është e dukshme
        if (mapContainer.style.display !== 'none') {
            // Fsheh Hartën -> Shfaq Tekstin
            mapContainer.style.display = 'none';
            textContainer.style.display = 'block';
            
            // Ndrysho tekstin e butonit
            btnUdhezime.innerHTML = '🗺️ Kthehu te Harta';
            btnUdhezime.style.backgroundColor = 'orange'; // Butoni bëhet portokalli
        } else {
            // Fsheh Tekstin -> Shfaq Hartën
            mapContainer.style.display = 'block';
            textContainer.style.display = 'none';
            
            // Kthe tekstin e butonit siç ishte
            btnUdhezime.innerHTML = '📍 Merr Udhëzime';
            btnUdhezime.style.backgroundColor = '#333'; // Butoni kthehet i zi
        }
    });
} 