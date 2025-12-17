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
const emailForm = document.querySelector('.email-input');

if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        // 1. Marrim vlerën që ka shkruar përdoruesi
        const emailValue = this.querySelector('input[type="email"]').value;

        // 2. Krijojmë një rregull (Regex) për të kontrolluar emailin
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 3. Kontrollojmë: A është emaili i saktë?
        if (emailPattern.test(emailValue)) {
            
            // --- SKENARI I SUKSESIT ---
            Swal.fire({
                title: 'Faleminderit!',
                text: 'U regjistruat me sukses për ofertat tona!',
                icon: 'success',
                background: '#1a1a1a',       // Sfond i zi
                color: '#ffffff',            // Tekst i bardhë
                confirmButtonColor: '#ff8800', 
                iconColor: '#ff8800'
            });

            // Pastrojmë fushën vetëm nëse është sukses
            this.querySelector('input[type="email"]').value = '';

        } else {

            // --- SKENARI I GABIMIT (Invalid Email) ---
            Swal.fire({
                title: 'Gabim!',
                text: 'Ju lutemi shkruani një email të vlefshëm (p.sh. emri@mail.com)',
                icon: 'error',               // Ikona e kuqe e gabimit
                background: '#1a1a1a',       // Sfond i zi
                color: '#ffffff',            // Tekst i bardhë
                confirmButtonColor: '#ff8800',
                confirmButtonText: 'Provo Përsëri'
            });
        }
    });
}