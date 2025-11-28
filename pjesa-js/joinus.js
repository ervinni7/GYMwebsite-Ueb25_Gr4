/*i lejme nje emer FORMES */
const forma = document.getElementById('formaRegjistrimit');
  
  const fushaEmail = document.getElementById('email');

  /* Kur te klikohet Sign Up */
  forma.addEventListener('submit', function(event) {
      
      /*Faqja nuk behet refresh */
      event.preventDefault();

      // Shfaqim dritaren e suksesit
      Swal.fire({
          title: 'Sukses!',
          text: 'Faleminderit! U regjistruat me sukses.',
          icon: 'success',
          confirmButtonText: 'Në rregull',
          confirmButtonColor: '#e69500' 
      });

      /*Fshihet emaili pasi te shtypet butoni */
      fushaEmail.value = '';
  });