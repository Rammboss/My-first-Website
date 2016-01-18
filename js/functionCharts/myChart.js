function getdata(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://arsnova.eu/api/statistics/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        
        }
        return myArr;
    };
        

}




