
function addGroup(groupName, args) {
	var data  = [];
	n = arguments.length;
	// set up array [[alias1,URL1],[alias2,URL2]...]
	for (i = 1; i < n; i += 2){
		data.push([arguments[i], arguments[i+1]])
	}
	console.log(data);
	var obj = {};
	obj[groupName] = data;
	chrome.storage.sync.set(obj);
}

function getData(groupName){
	chrome.storage.sync.get(groupName, function(items){
          console.log(items);
	});
}

function removeGroup(groupName){
	chrome.storage.sync.remove(groupName);
}

function removeAll(){
	chrome.storage.sync.remove();
}
