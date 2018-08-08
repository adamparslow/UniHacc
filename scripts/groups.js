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
      bin.classList.add('btn');
      bin.classList.add('btn-info');
      bin.onclick = function () {
         chrome.storage.sync.remove(groupName);
         loadGroups();
      	while(main.firstChild){
      		main.removeChild(main.firstChild);
      	}
      }

      var edit = document.createElement('button');
      edit.classList.add('btn');
      edit.classList.add('btn-info');
      edit.id = "edit";
      edit.innerHTML = "Edit";
      edit.onclick = function () {
         editGroup(groupName);
      }
      main.appendChild(edit);
      main.appendChild(bin);
	});
}
