
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
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.visibility = "visible";
}

function closeSubmit(){
   var groupName = document.getElementById('groupName').value;
   var isVerified = true;
   if (!verifyInput(groupName)) {
      isVerified = false;
   }
   var data = [];
   for (let i = 0; i <= fields; i++) {
      console.log('name' + i)
      let name = document.getElementById('name' + i).value;
      let link = document.getElementById('link' + i).value;
      if (!verifyInput(name) && !verifyInput(link)) {
         isVerified = false;
         break;
      }
      data.push([name, link]);
   }
   if (!isVerified) {
      console.log("Make sure all fields are filled out");
   } else {
   	var obj = {};
   	obj[groupName] = data;
   	chrome.storage.sync.set(obj);

      var submit = document.getElementById("plusMenu");
      submit.style.visibility = "hidden";

      loadGroups();
   }
}

function verifyInput(str) {
   if (str == "") return false;
   else return true;
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
   url.id = "link" + fields;
   plusForm.appendChild(url);
   var br = document.createElement('br');
   plusForm.appendChild(br);
   console.log(fields);
}

function displayGroup(groupName){
   	console.log("thigns");
	var main = document.getElementById("main");
	while(main.firstChild){
		main.removeChild(main.firstChild);
	}
	var title = document.createElement('h3');
	title.innerHTML = groupName;
	main.appendChild(title);
   	console.log(main);
	chrome.storage.sync.get(groupName,function(group){
      console.log(group);
      var items = Object.values(group)[0];
      console.log(items);
		for(i = 0; i < items.length; i++){
			var icon = document.createElement('img');
			icon.src = "http://s2.googleusercontent.com/s2/favicons?domain_url=" 
						+ items[i][1];
			main.appendChild(icon);
			var link = document.createElement('a');
         	console.log(link);
			link.href = items[i][1];
			link.innerHTML = items[i][0];
			main.appendChild(link);
			var br = document.createElement('br');
   		main.appendChild(br);
		}
	});
}

function editGroup(groupName){
	chrome.storage.sync.get(groupName,function(group){
		var items = Object.values(group)[0];
		// add in a trash next to each field and make text boxes editable
		var main = document.getElementById("main");
		while(main.firstChild){
			main.removeChild(main.firstChild);
		}
		var title = document.createElement('h3');
		title.innerHTML = groupName;
		main.appendChild(title);
		for(i = 0; i < items.length; i++){
			var item = document.getElementById("plusForm");
			var nameTxt = document.createTextNode("Name: ");
		   	item.appendChild(nameTxt);
			var name = document.createElement('input');
		   	name.type = "text";
		   	name.value = items[i][0];
		   	name.id = "name" + i;
		   	item.appendChild(name);
		   	var urlTxt = document.createTextNode("Link: ");
		   	item.appendChild(urlTxt);
		   	var url = document.createElement('input');
		   	url.type = "text";
		   	url.id = "link" + i;
		   	url.value = items[i][1];
		}
	});
	// on click of submit:
	displayGroup(groupName);
}

function deleteAlias(groupName,i){
	main.removeChild(main.chilNodes[i]);
}

function loadGroups() {
   chrome.storage.sync.get(null, function (items) {
      var keys = Object.keys(items);
      var sidebar = document.getElementById('sidebar');
      while (sidebar.firstChild) {
         sidebar.removeChild(sidebar.firstChild);
      }
      console.log(keys);
      keys.forEach(function (key) {
         var button = document.createElement('button');
         // console.log(key);
         button.innerHTML = key.toString();
         button.onclick = function () {
            displayGroup(key.toString());
         }

         sidebar.appendChild(button);
      });
   });
}
