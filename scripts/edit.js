// Handles the edit for individual groups
function editGroup(groupName) {
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
      var submit = document.createElement('button');
      submit.id = "editSubmit";
      submit.innerHTML = "Submit";
      submit.onclick = function () {
         submitEdit(groupName);
      }
      main.appendChild(submit);
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

function submitEdit(groupName) {
   var isVerified = true;
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

      var submit = document.getElementById("plusMenu");
      submit.style.visibility = "hidden";

      loadGroups();
      displayGroup(groupName);
   }
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
   var submit = document.createElement('button');
   submit.id = "editSubmit";
   submit.innerHTML = "Submit";
   submit.onclick = function () {
      submitEdit(groupName);
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
