function convertCurrency() {
    var dollars = document.getElementById("usd-input").value;
    var exchangeRate = 1126.90;    
    var rwf = dollars * exchangeRate;
    document.getElementById("result").innerHTML = rwf + "RWF";
  }
  
