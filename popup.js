
function plusButton () {
    var input = document.getElementById("plus");
    input.addEventListener("click", function(event) {
        openPlusMenu();
    });
}

function okButton (){
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "none";
}

function openPlusMenu () {
    console.log("benlo");
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "block";
}


var fields = 0;
function addFields() {
   fields++;
   var plusForm = document.getElementById('plusForm');
   var nameTxt = document.createTextNode("Name: ");
   plusForm.appendChild(nameTxt);
   var name = document.createElement('input');
   name.type = "text";
   name.id = "name" + fields;
   plusForm.appendChild(name);
   var urlTxt = document.createTextNode("URL: ");
   plusForm.appendChild(urlTxt);
   var url = document.createElement('input');
   url.type = "text";
   url.id = "url" + fields;
   plusForm.appendChild(url);
   plusForm.appendChild('br');
}
