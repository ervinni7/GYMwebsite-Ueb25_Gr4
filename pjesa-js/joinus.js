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