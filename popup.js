
document.addEventListener("DOMContentLoaded", function() {
    loadGroups();

    var plus = document.getElementById("plus");
    
    plus.addEventListener("click", function() {
        openPlusMenu(); 

<<<<<<< HEAD
    sub.addEventListener("click", function() {
        closeSubmit();
    });

    addRow.addEventListener("click", function() {
      addFields();
   });
=======
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
    
>>>>>>> 418f6a052ac3f53abc121f6d4bef1b3e2fd858eb
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
<<<<<<< HEAD
    console.log("We are here");
    var submit = document.getElementById("plusMenu");
    submit.style.visibility = "hidden";
=======
    console.log("beeb");
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.visibility = "hidden";
>>>>>>> 418f6a052ac3f53abc121f6d4bef1b3e2fd858eb
}


var fields = 0;

function addFields() {
   fields++;
<<<<<<< HEAD
   var plusMenu = document.getElementById('plusMenu');
   var nameTxt = document.createTextNode("Name: ");
   // var nameTxt = document.createElement('p');
   // nameTxt.innerHTML = "Name: ";
   plusMenu.appendChild(nameTxt);
   var name = document.createElement('input');
=======
   var plusForm = document.getElementById("plusForm");
   var nameTxt = document.createTextNode("Name: ");
   plusForm.appendChild(nameTxt);
   var name = document.createElement("input");
>>>>>>> 418f6a052ac3f53abc121f6d4bef1b3e2fd858eb
   name.type = "text";
   name.id = "name" + fields;
   plusMenu.appendChild(name);
   var urlTxt = document.createTextNode("URL: ");
<<<<<<< HEAD
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
=======
   plusForm.appendChild(urlTxt);
   var url = document.createElement("input");
   url.type = "text";
   url.id = "url" + fields;
   plusForm.appendChild(url);
   plusForm.appendChild("br");
>>>>>>> 418f6a052ac3f53abc121f6d4bef1b3e2fd858eb
}


function loadGroups() {
  var totalgroups = 0; //import this from taras's database
  var i;
  for (i = totalgroups; i > 0 ; i -= 1){
      document.createElement("COMP 1531");

  }

}