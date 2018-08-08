// Handles the add page
function verifyInput(str) {
   if (str == "") return false;
   else return true;
}

var fields = 0;

function addFields() {
   if (fields == 3) {
      var addRow = document.getElementById('addRow');
      addRow.disabled = false;
   }
   fields++;
   var plusForm = document.getElementById('plusForm');
   var nameTxt = document.createTextNode("Name: ");
   plusForm.appendChild(nameTxt);
   var name = document.createElement('input');
   name.size = 10;
   name.type = "text";
   name.id = "name" + fields;
   name.style.margin = "10px";
   plusForm.appendChild(name);
   var urlTxt = document.createTextNode("Link: ");
   plusForm.appendChild(urlTxt);
   var url = document.createElement('input');
   url.type = "text";
   url.id = "link" + fields;
   name.style.margin = "10px";
   plusForm.appendChild(url);
   var br = document.createElement('br');
   plusForm.appendChild(br);
   console.log(fields);
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
      if (!verifyInput(name) || !verifyInput(link)) {
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
