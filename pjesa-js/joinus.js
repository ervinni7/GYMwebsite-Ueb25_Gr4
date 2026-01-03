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

        // Per te marre vleren qe e ka shkruar useri
        const emailValue = this.querySelector('input[type="email"]').value;

        // Rregulla e emailit
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Kontrolli i emailit ne footer
        if (emailPattern.test(emailValue)) {
            
            // Kur emaili eshte i sakte
            Swal.fire({
                title: 'Faleminderit!',
                text: 'U regjistruat me sukses për ofertat tona!',
                icon: 'success',
                background: '#1a1a1a',      
                color: '#ffffff',            
                confirmButtonColor: '#ff8800', 
                iconColor: '#ff8800'
            });

            // Pastrojme fushen kur eshte me sukses
            this.querySelector('input[type="email"]').value = '';

        } else {

            //  (Invalid Email) 
            Swal.fire({
                title: 'Gabim!',
                text: 'Ju lutemi shkruani një email të vlefshëm (p.sh. emri@mail.com)',
                icon: 'error',              
                background: '#1a1a1a',      
                color: '#ffffff',           
                confirmButtonColor: '#ff8800',
                confirmButtonText: 'Provo Përsëri'
            });
        }
    });
}
// Pjesa e butonit te Pyetjeve logjika show-hide
const mainBtn = document.getElementById('faq-toggle-btn');
const faqSection = document.getElementById('faq-section');

if (mainBtn && faqSection) {
    mainBtn.addEventListener('click', function() {
        
        // Kjo aktivizon CSS animacionin)
        faqSection.classList.toggle('e-hapur');

        if (faqSection.classList.contains('e-hapur')) {
          
            mainBtn.innerHTML = '❌ Mbyll Pyetjet'; 
            mainBtn.classList.add('active'); 
        } else {
           
            mainBtn.innerHTML = '❓ Pyetje të Shpeshta';
            mainBtn.classList.remove('active'); 
        }
    });
}
//Logjika e dergo mesazhin
const contactForm = document.querySelector('.kontakt-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Ndalojme rifreskimin e faqes

        // Marrim vlerat
        const nameInput = this.querySelector('input[placeholder="Emri juaj"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        //SHikojme nese format jane bosh apo me space
        if (name === "" || email === "" || message === "") {
            Swal.fire({
                title: 'Kujdes!',
                text: 'Ju lutemi plotësoni të gjitha fushat!',
                icon: 'warning',
                confirmButtonColor: '#ff8800'
            });
            return; // Ndalem ketu nese ka gabim
        }

        //Popup i suksesit
        Swal.fire({
            title: `Faleminderit, ${name}!`, 
            text: 'Mesazhi juaj u dërgua me sukses.',
            icon: 'success',
            confirmButtonColor: '#ff8800'
        });

        // Forma resetohet
        contactForm.reset();
    });
}
/*Per pjesen e pergjigjjeve, animacione te pergjigjjeve */
$(document).ready(function(){

    // Kur klikohet titulli i pyetjes
    $(".faq-pyetje").click(function(){
        
        
        $(this).next(".faq-pergjigjje").slideToggle(400); // 400ms shpejtesia

      
        $(this).parent().toggleClass("active");
    });

});