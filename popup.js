
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
      var error = document.getElementById('errorMessage');
      error.innerHTML = "Please fill all fields";
   } else {
   	var obj = {};
   	obj[groupName] = data;
   	chrome.storage.sync.set(obj);

      fields = 0;

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
			// main.appendChild(icon);
			var link = document.createElement('a');
         	console.log(link);
			link.href = items[i][1];
         link.appendChild(icon);
         link.target = "_blank";
         var txt = document.createTextNode(items[i][0]);
         link.appendChild(txt);
			main.appendChild(link);
			var br = document.createElement('br');
   		main.appendChild(br);
		}
      var bin = document.createElement('button');
      bin.innerHTML = "Delete";
      bin.id = "minus";
      bin.classList.add('button');
      bin.classList.add('button-default');
      bin.onclick = function () {
         chrome.storage.sync.remove(groupName);
         loadGroups();
      	while(main.firstChild){
      		main.removeChild(main.firstChild);
      	}
      }

      var edit = document.createElement('button');
      edit.id = "edit";
      edit.innerHTML = "Edit";
      edit.onclick = function () {
         editGroup(groupName);
      }
      main.appendChild(edit);
      main.appendChild(bin);
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
      var buttons = [];
		title.innerHTML = groupName;
		main.appendChild(title);
		for(i = 0; i < items.length; i++){
         console.log(items);
			// var item = document.getElementById("plusForm");
			var nameTxt = document.createTextNode("Name: ");
		   	main.appendChild(nameTxt);
			var name = document.createElement('input');
		   	name.type = "text";
		   	name.value = items[i][0];
		   	name.id = "name" + i;
            name.size = 10;
		   	main.appendChild(name);
		   	var urlTxt = document.createTextNode("Link: ");
		   	main.appendChild(urlTxt);
		   	var url = document.createElement('input');
		   	url.type = "text";
		   	url.id = "link" + i;
		   	url.value = items[i][1];
            main.appendChild(url);
            url.size = 15;
		   	var button = document.createElement('button');
		   	var span = document.createElement('span');
		   	span.innerHTML = "&#x2b;";
		   	button.class = "glyphicon";
            buttons.push(button);
		   	button.appendChild(span);
            main.appendChild(button);
            var br = document.createElement('br');
            main.appendChild(br);
		}
      buttons.forEach(function (button) {
         button.onclick = function () {
            console.log("Things");
            var index = buttons.indexOf(button);
            console.log(index);
            deleteAlias(groupName, index);
         }
      });
	});
	// on click of submit:
	// displayGroup(groupName);
}

function deleteAlias(groupName,i){
	main.removeChild(main.childNodes[i]);
   console.log(i);
	chrome.storage.sync.get(groupName,function(group){
		var items = Object.values(group)[0];
      console.log(items);
		items.splice(i,1);
      console.log(items);
		var obj = {};
		obj[groupName] = items;
		chrome.storage.sync.set(obj);
      updateEdit(items, groupName);
	});
}

function updateEdit(items, groupName) {
	var main = document.getElementById("main");
	while(main.firstChild){
		main.removeChild(main.firstChild);
	}
	var title = document.createElement('h3');
   var buttons = [];
	title.innerHTML = groupName;
	main.appendChild(title);
	for(i = 0; i < items.length; i++){
      console.log(items);
		// var item = document.getElementById("plusForm");
		var nameTxt = document.createTextNode("Name: ");
      main.appendChild(nameTxt);
      var name = document.createElement('input');
      name.type = "text";
      name.value = items[i][0];
      name.id = "name" + i;
      name.size = 10;
      main.appendChild(name);
      var urlTxt = document.createTextNode("Link: ");
      main.appendChild(urlTxt);
      var url = document.createElement('input');
      url.type = "text";
      url.id = "link" + i;
      url.value = items[i][1];
      main.appendChild(url);
      url.size = 15;
      var button = document.createElement('button');
      var span = document.createElement('span');
      span.innerHTML = "&#x2b;";
      button.class = "glyphicon";
      buttons.push(button);
      button.appendChild(span);
      main.appendChild(button);
      var br = document.createElement('br');
      main.appendChild(br);
	}
   buttons.forEach(function (button) {
      button.onclick = function () {
         console.log("Things");
         var index = buttons.indexOf(button);
         console.log(index);
         deleteAlias(groupName, index);
      }
   });
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
         button.type = "button";
         button.classList.add('btn');
         button.classList.add('btn-info');
         button.classList.add('btn-block');

         // console.log(key);
         button.innerHTML = key.toString();
         button.onclick = function () {
            displayGroup(key.toString());
         }

         sidebar.appendChild(button);
      });
   });
}
