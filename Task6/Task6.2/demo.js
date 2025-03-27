
var data = [];
var sentData = []
var h1 = document.getElementById("h1")
var h2 = document.getElementById("h2")
var h3 = document.getElementById("h3")
var h4 = document.getElementById("h4")
var h5 = document.getElementById("h5")
var h6 = document.getElementById("h6")
var h7 = document.getElementById("h7")
var h8 = document.getElementById("h8")
var h9 = document.getElementById("h9")
var url = location.search
// .search msh a7sn 7aga
    var params = url.split('?')[1].split('&');
    
    for(let i=0; i < params.length; i++){
        data[i] = params[i].split("=").join(" "); 
    }
    
    sentData = data
 
        h1.innerHTML = sentData[0];
        h2.innerHTML = sentData[1];
        h3.innerHTML = sentData[2];
        h4.innerHTML = sentData[3];
        h5.innerHTML = sentData[4];
        h6.innerHTML = sentData[5];
        h7.innerHTML = sentData[6];
        h8.innerHTML = sentData[7];
        h9.innerHTML = sentData[8];

