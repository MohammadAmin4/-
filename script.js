function convert() {
    let value = parseFloat(document.getElementById("value").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    
    if (isNaN(value)) {
        document.getElementById("result").innerHTML = "❌ یه عدد معتبر وارد کن!";
        return;
    }
    
    let meters = 0;
    if (fromUnit === "m") meters = value;
    else if (fromUnit === "cm") meters = value / 100;
    else if (fromUnit === "km") meters = value * 1000;
    
    let result = 0;
    if (toUnit === "m") result = meters;
    else if (toUnit === "cm") result = meters * 100;
    else if (toUnit === "km") result = meters / 1000;
    
    let resultText = "";
    if (toUnit === "m") resultText = "متر";
    else if (toUnit === "cm") resultText = "سانتی‌متر";
    else resultText = "کیلومتر";
    
    document.getElementById("result").innerHTML = `✅ نتیجه: ${result} ${resultText}`;
}

document.getElementById("convertBtn").addEventListener("click", convert);
