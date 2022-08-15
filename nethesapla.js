document.getElementById("btnNetHesapla").addEventListener("click", netHesaplama);

function netHesaplama(){
    event.preventDefault();

    var trueCount;
    var falseCount;
    var netCount;

    trueCount = document.getElementById("true").value;
    falseCount = document.getElementById("false").value;
    netCount = trueCount - (falseCount/4);
    
    document.getElementById("net").value = netCount
}