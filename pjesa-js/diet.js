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

