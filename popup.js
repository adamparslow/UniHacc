
document.addEventListener("DOMContentLoaded", function() {
    var plus = document.getElementById("plus");
    
    plus.addEventListener("click", function() {
        openPlusMenu(); 

        var sub = document.getElementById("submit");
        var addRow = document.getElementById("addRow");
        sub.addEventListener("click", function() {
            console.log("clicked submit");
            closeSubmit();
        });
        addRow.addEventListener("click", function() {
            console.log("clicked addRow");
            addFields();
        });
    
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
    console.log("beeb");
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.visibility = "hidden";
}


var fields = 0;

function addFields() {
   fields++;
   var plusForm = document.getElementById("plusForm");
   var nameTxt = document.createTextNode("Name: ");
   plusForm.appendChild(nameTxt);
   var name = document.createElement("input");
   name.type = "text";
   name.id = "name" + fields;
   plusForm.appendChild(name);
   var urlTxt = document.createTextNode("URL: ");
   plusForm.appendChild(urlTxt);
   var url = document.createElement("input");
   url.type = "text";
   url.id = "url" + fields;
   plusForm.appendChild(url);
   plusForm.appendChild("br");
}
