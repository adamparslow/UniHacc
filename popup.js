
document.addEventListener("DOMContentLoaded", function() {
    loadGroups();

    var plus = document.getElementById("plus");
    var sub = document.getElementById("submit");
    var addRow = document.getElementById("addRow");

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
   if (fields == 5) {
      var addRow = document.getElementById('addRow');
      addRow.disabled = true;
   }
   fields++;
   var plusForm = document.getElementById('plusForm');
   var nameTxt = document.createTextNode("Name: ");
   // var nameTxt = document.createElement('p');
   // nameTxt.innerHTML = "Name: ";
   plusForm.appendChild(nameTxt);
   var name = document.createElement('input');
   name.type = "text";
   name.id = "name" + fields;
   plusForm.appendChild(name);
   var urlTxt = document.createTextNode("Link: ");
   // var urlTxt = document.createElement('p');
   // urlTxt.innerHTML = "URL: ";
   plusForm.appendChild(urlTxt);
   var url = document.createElement('input');
   url.type = "text";
   url.id = "url" + fields;
   plusForm.appendChild(url);
   var br = document.createElement('br');
   plusForm.appendChild(br);
   console.log(fields);
}

function displayGroup(groupName){
	var main = document.getElementById("main");
	chrome.storage.sync.get(groupName,function(items){
		for(i = 0; i < items.length(); i++){
			var link = document.createElement('a');
			link.href = items[i][1];
			link.innerHTML = items[i][0];
			main.appendChild(link);
			var br = document.createElement('br');
	   		main.appendChild(br);
   		}
	});
}

function loadGroups() {
   chrome.storage.sync.get(null, function (items) {
      var keys = Object.keys(items);
      var sidebar = document.getElementById('sticky_sidebar');
      console.log(keys);
      keys.forEach(function (key) {
         var button = document.createElement('button');
         // Add event listener
         console.log(key);
         button.innerHTML = key.toString();
         sidebar.appendChild(button);
      });
   });

  // var totalgroups = 0; //import this from taras' database
  // var i;
  // for (i = totalgroups; i > 0 ; i -= 1){
  //     document.createElement("COMP 1531");
  // }

}
