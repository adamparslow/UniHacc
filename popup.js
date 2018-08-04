
document.addEventListener('DOMContentLoaded', function() {
    var plus = document.getElementById('plus');
    var sub = document.getElementById('submit');
    var addRow = document.getElementById('addRow');
    plus.addEventListener("click", function() {
        openPlusMenu();
    });

    sub.addEventListener("click", function() {
        closeSubmit();
    });

    addRow.addEventListener("click", function() {
      addFields();
   });
});




function okButton (){
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "none";
}

function openPlusMenu () {
    console.log("benlo");
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.visibility = "visible";
}

function closeSubmit(){
    console.log("We are here");
    var submit = document.getElementById("plusMenu");
    submit.style.visibility = "hidden";
}


var fields = 0;
function addFields() {
   fields++;
   var plusMenu = document.getElementById('plusMenu');
   var nameTxt = document.createTextNode("Name: ");
   // var nameTxt = document.createElement('p');
   // nameTxt.innerHTML = "Name: ";
   plusMenu.appendChild(nameTxt);
   var name = document.createElement('input');
   name.type = "text";
   name.id = "name" + fields;
   plusMenu.appendChild(name);
   var urlTxt = document.createTextNode("URL: ");
   // var urlTxt = document.createElement('p');
   // urlTxt.innerHTML = "URL: ";
   plusMenu.appendChild(urlTxt);
   var url = document.createElement('input');
   url.type = "text";
   url.id = "url" + fields;
   plusMenu.appendChild(url);
   var br = document.createElement('br');
   plusMenu.appendChild(br);
   console.log("We are here now");
}
