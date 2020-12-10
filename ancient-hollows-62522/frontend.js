function ajaxGetRequest(path, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
          if (this.readyState===4 && this.status ===200) {
              callback(this.response);
            }
    }
    request.open("GET", path);
    request.send();
}

function ajaxPostRequest(path, data, callback){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    };
    request.open("POST", path);
    request.send(data);
}


function submit(){
    let user = document.getElementById("user").value;
    document.getElementById("user").value = "";

    let restaurant1 = document.getElementById("restaurant1").value;
    document.getElementById("restaurant1").value = "";

    let restaurant2 = document.getElementById("restaurant2").value;
    document.getElementById("restaurant2").value = "";

    let restaurant3 = document.getElementById("restaurant3").value;
    document.getElementById("restaurant3").value = "";

    let restaurant4 = document.getElementById("restaurant4").value;
    document.getElementById("restaurant4").value = "";

    let restaurant5 = document.getElementById("restaurant5").value;
    document.getElementById("restaurant5").value = "";

    let info = [user,restaurant1,restaurant2,restaurant3,restaurant4,restaurant5]
    let infoJson = JSON.stringify(info);
    ajaxPostRequest("/add_restaurant", infoJson, display2);
}

function algoRun(){
    let foodJson = JSON.stringify("hello");
    ajaxPostRequest("/algo", foodJson, display);
}

function deleteAll(){
    let foodJson = JSON.stringify("hi");
    document.getElementById("results").value = "";
    ajaxPostRequest("/delete", foodJson, display2);
}

function test(){
    let foodJson = JSON.stringify("hi");
    document.getElementById("results").value = "";
    ajaxPostRequest("/test", foodJson, display2);
}


function display(jsonarr){
    document.getElementById("results").value = "";
    let datajs = JSON.parse(jsonarr);
    let resultElem = document.getElementById("results");
    resultElem.innerHTML = "The Best Restaurant to Eat at is " + datajs;
}

function display2(jsonarr){
  return jsonarr;
}
