
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
	chrome.storage.local.set(obj);
}

function getData(groupName){
	chrome.storage.local.get(groupName, function(items){
          console.log(items);
	});
}
