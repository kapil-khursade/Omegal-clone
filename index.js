// rotateing the logo when reloaded
function logoRot(){
    document.getElementById("logo").classList.toggle("rotateLogo");
    let count = 50000 - Math.random()*50000;
    count = Math.floor(count).toLocaleString("en-US")+"+";
    document.getElementById("curOnline").innerText=count;
}

// showing the langauge
function showLang(){
    document.getElementById("lagOptions").classList.toggle("showLang");
}