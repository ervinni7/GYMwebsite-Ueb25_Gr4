document.getElementById("bmi-form").addEventListener("submit", function(e){
    e.preventDefault();

    let height = parseFloat(document.getElementById("height").value) / 100;
    let weight = parseFloat(document.getElementById("weight").value);
    let result = document.getElementById("bmi-result");

    if(height <= 0 || weight <= 0){
        result.textContent = "Ju lutem vendosni vlera të sakta!";
        result.style.color = "red";
        return;
    }

    let bmi = weight / (height * height);
    let status = "";

    if(bmi < 18.5) status = "Nën peshë";
    else if(bmi < 25) status = "Peshë normale";
    else if(bmi < 30) status = "Mbi peshë";
    else status = "Obezitet";

    result.textContent = `BMI juaj është: ${bmi.toFixed(1)} — ${status}`;
    result.style.color = "#111";
});

const rowToDetailsMap = {
  Bulking: 'dieta-bulking',
  Cutting: 'dieta-cutting',
  Mirembajtje: 'dieta-mirembajtje',
  Vegjetarian: 'dieta-vegjetariane',
  HighProtein: 'dieta-highProtein',
  Lowcarb: 'dietalowcarb'
};

const dietRows = document.querySelectorAll('.diet-table tbody tr');

dietRows.forEach(row => {
  row.style.cursor = 'pointer';

  row.addEventListener('click', () => {
    const key = row.dataset.target;
    const detailsId = rowToDetailsMap[key];
    if (!detailsId) return;

    document.querySelectorAll('section details').forEach(d => {
      d.open = false;
    });

    const targetDetails = document.getElementById(detailsId);
    if (targetDetails) {
      targetDetails.setAttribute("open", true);
targetDetails.querySelector("summary").focus();
targetDetails.scrollIntoView({ behavior: "smooth", block: "start" });

    }
  });
});

