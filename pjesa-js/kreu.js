// Përshëndetje dinamike bazuar në kohën e ditës
function shfaqPershendetje() {
  const hero = document.querySelector('.hero');
  const tani = new Date();
  const ora = tani.getHours();
  
  let pershendetje = '';
  let emoji = '';
  
  if (ora >= 5 && ora < 12) {
    pershendetje = 'Mirëmëngjesi! Filloje ditën me energji';
    emoji = '🌅';
  } else if (ora >= 12 && ora < 18) {
    pershendetje = 'Mirëdita! Koha perfekte për stërvitje';
    emoji = '💪';
  } else if (ora >= 18 && ora < 22) {
    pershendetje = 'Mirëmbrëma! Afati perfekt për gym';
    emoji = '🔥';
  } else {
    pershendetje = 'Ç\'ke ngel? Gjumi është i rëndësishëm!';
    emoji = '😴';
  }
  
  const pershendetjeDiv = document.createElement('div');
  pershendetjeDiv.style.cssText = `
    margin-top: 15px;
    font-size: 16px;
    color: #ff8800;
    font-weight: bold;
    animation: fadeIn 1.5s ease-in;
  `;
  pershendetjeDiv.textContent = `${emoji} ${pershendetje}`;
  hero.appendChild(pershendetjeDiv);
}

// Citatet motivuese që ndryshojnë çdo 5 sekonda
function shfaqCitate() {
  const citatet = [
    '💪 "Fuqia nuk vjen nga ajo që mund të bësh, por nga tejkalimi i asaj që mendon se nuk mund."',
    '🏋️ "Suksesi fillon me vendimin për të provuar."',
    '🔥 "Vetëm një stërvitje të keqe larg nga një ditë e mirë."',
    '⚡ "Dhimbja që ndjen sot do të jetë forca që do të kesh nesër."',
    '🎯 "Qëllimet e tua nuk janë të lehta, por janë të arritshme."',
    '💯 "Transformimi fillon me vendimin e parë."'
  ];
  
  // Krijo elementin për citatën
  const citataDiv = document.createElement('div');
  citataDiv.style.cssText = `
    margin: 20px auto;
    padding: 15px;
    background: linear-gradient(135deg, #ff8800 0%, #ff6600 100%);
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    font-style: italic;
    box-shadow: 0 4px 15px rgba(255, 136, 0, 0.3);
    transition: all 0.5s ease;
  `;
  
  const container = document.querySelector('.container');
  container.insertBefore(citataDiv, container.firstChild.nextSibling);
  
  let index = 0;
  
  function ndryshoCitate() {
    citataDiv.style.opacity = '0';
    citataDiv.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      citataDiv.textContent = citatet[index];
      citataDiv.style.opacity = '1';
      citataDiv.style.transform = 'translateY(0)';
      index = (index + 1) % citatet.length;
    }, 300);
  }
  
  ndryshoCitate();
  setInterval(ndryshoCitate, 5000); // Ndërro çdo 5 sekonda
}

// Butoni "Shko në krye" që shfaqet kur bën scroll poshtë
function krijoButonScrollTop() {
  // Krijo butonin
  const btn = document.createElement('button');
  btn.textContent = '↑';
  btn.id = 'scrollTopBtn';
  btn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #ff8800;
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 20px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(btn);
  
  // Shfaq/fsheh butonin bazuar në scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  
  // Kur klikon butonin, shko në krye
  btn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll i butë
    });
  });
  
  // Efekt hover për butonin
  btn.addEventListener('mouseenter', function() {
    btn.style.transform = 'scale(1.1)';
    btn.style.background = '#ff6600';
  });
  
  btn.addEventListener('mouseleave', function() {
    btn.style.transform = 'scale(1)';
    btn.style.background = '#ff8800';
  });
}

// Ekzekuto të gjitha funksionet kur faqja ngarkohet
window.addEventListener('DOMContentLoaded', function() {
  shfaqPershendetje();
  shfaqCitate();
  krijoButonScrollTop();
});
