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
  let searchElement = document.getElementById("searchbar");
  let food = searchElement.value;
  searchElement.value = "";
  let foodJson = JSON.stringify(food);
  ajaxPostRequest("/sendquery", foodJson, display);
}


function display(jsonarr){
  let datajs = JSON.parse(jsonarr);
  let resultElem = document.getElementById("results");
  resultElem.innerHTML = datajs;
}

