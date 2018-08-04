
document.addEventListener('DOMContentLoaded', function() {
    var plus = document.getElementById('plus');
    var sub = document.getElementById('submit');
    var addRow = document.getElementById('addRow');
    plus.addEventListener("click", function() {
        openPlusMenu();
    });

    sub.addEventListener("submit", function() {
        closeSubmit();
    });
<<<<<<< HEAD

    addRow.addEventListener("click", function() {
      addFields();
   })
=======
    
>>>>>>> 2e2bb918b7555600b5cd81f144ce5181d9b9b4ef
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
    var submit = document.getElementById("submit");
    submit.style.visibility = "hidden";
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
