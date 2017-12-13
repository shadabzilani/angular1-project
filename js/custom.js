
var classObj = [
	{
		"class":"one",
		"id":1
	},
	{
		"class":"two",
		"id":2
	},
	{
		"class":"three",
		"id":3
	},
	{
		"class":"four",
		"id":4
	},
	{
		"class":"fove",
		"id":5
	},
	{
		"class":"six",
		"id":6
	},
	{
		"class":"seven",
		"id":7
	},
	{
		"class":"eight",
		"id":8
	},
	{
		"class":"nine",
		"id":9
	},
	{
		"class":"ten",
		"id":10
	}
	];
var stateWithPinCode = [
		{
			"state":"Delhi",
			"pincode": 11,
			"id":1
		},
		{
			"state":"Haryana",
			"pincode": 12,
			"id":2
		},
		{
			"state":"Punjab",
			"pincode": 14,
			"id":3
		},
		{
			"state":"Himachal Pradesh",
			"pincode": 17,
			"id":4
		},
		{
			"state":"Jammu & Kashmir",
			"pincode": 18,
			"id":5
		},
		{
			"state":"Uttar Pradesh",
			"pincode": 20,
			"id":6
		},
		{
			"state":"Rajasthan",
			"pincode": 30,
			"id":7
		},
		{
			"state":"Gujarat",
			"pincode": 36,
			"id":8
		},
		{
			"state":"Maharashtra",
			"pincode": 40,
			"id":9
		},
		{
			"state":"Madhya Pradesh",
			"pincode": 45,
			"id":10
		},
		{
			"state":"Chhattisgarh",
			"pincode": 49,
			"id":11
		},
		{
			"state":"Andhra Pradesh",
			"pincode": 50,
			"id":12
		},
		{
			"state":"TELANGANA",
			"pincode": 50,
			"id":13
		},
		{
			"state":"Karnataka",
			"pincode": 56,
			"id":14
		},
		{
			"state":"Tamil Nadu",
			"pincode": 60,
			"id":15
		},
		{
			"state":"Kerala",
			"pincode": 67,
			"id":16
		},
		{
			"state":"Lakshadweep",
			"pincode": 682,
			"id":17
		},
		{
			"state":"West Bengal",
			"pincode": 70,
			"id":18
		},
		{
			"state":"Andaman & Nicobar",
			"pincode": 744,
			"id":19
		},
		{
			"state":"Orissa",
			"pincode": 75,
			"id":20
		},
		{
			"state":"Assam",
			"pincode":78,
			"id":21
		},
		{
			"state":"Arunachal Pradesh",
			"pincode":79,
			"id":22
		},
		{
			"state":"Manipur",
			"pincode": 79,
			"id":23
		},
		{
			"state":"Meghalaya",
			"pincode": 79,
			"id":24
		},
		{
			"state":"Mizoram",
			"pincode": 79,
			"id":25
		},
		{
			"state":"Nagaland",
			"pincode":79,
			"id":26
		},
		{
			"state":"Tripura",
			"pincode":79,
			"id":27
		},
		{
			"state":"Bihar",
			"pincode": 80,
			"id":28
		},
		{
			"state":"Jharkhand",
			"pincode":80,
			"id":29
		}
	]
	
var fullName = document.getElementById('fullName'),
	fathrName = document.getElementById('fathrName'),
	dob = document.getElementById('dob'),
	age = document.getElementById('age'),
	selectclassOpt = document.getElementById('selectclassOpt'),
	rollNum = document.getElementById('rollNum'),
	gender = document.querySelectorAll('#gender input:checked')[0],
	address = document.getElementById('address'),
	state = document.getElementById('state'),
	pincode = document.getElementById('pincode'),
	male = document.getElementById('male'),
	female = document.getElementById('female'),
	allStudentDetails = localStorage.allStudentDetails ? JSON.parse(localStorage.allStudentDetails) : [],
	idForSingleStudent = 0;
	localStorage.allStudentDetails = JSON.stringify(allStudentDetails);

function init(){
	if(allStudentDetails.length != 0){
		for(var indx in allStudentDetails){
			appendChildDetailsInTable(allStudentDetails[indx],"newReg");
		}	
	}	
};
init();

// create select option from object
function selectOptionCreate(selectId , ObjectName, keyName){
	var selectId = document.getElementById(selectId);
	for(var index in ObjectName){
	    var option = document.createElement("option");
	    option.value = option.text = ObjectName[index][keyName];
	   	selectId.add(option);
	}
}
selectOptionCreate("selectclassOpt", classObj , "class");
selectOptionCreate("state", stateWithPinCode , "state");

function classNameChange(){
	selectclassOptValue = selectclassOpt.value;
	//console.log("selectclassOptValue ==> ", selectclassOptValue);
}

function stateNameChange(){
	stateValue = state.value;
	//update pincode
	for(indx in stateWithPinCode){
		if(stateWithPinCode[indx].state == stateValue){
			pincode.value = stateWithPinCode[indx].pincode;
			break;
		}
	}
	//console.log("stateValue ==> ", stateValue);
}

function getAge(dateOfBirth){
	var dateOfBirthArry = dateOfBirth.split('-');
		dateOfBirthYear = dateOfBirthArry[0],
		dateOfBirthMonth = dateOfBirthArry[1],
		dateOfBirthDate = dateOfBirthArry[2],
		currentTime = new Date(),
		currentTimeYear = currentTime.getFullYear(), 
		currentTimeMonth = currentTime.getMonth()+1,
		currentTimeDate =  currentTime.getDate();

		if(currentTimeMonth>dateOfBirthMonth){
			return currentTimeYear-dateOfBirthYear;
		}else if(currentTimeMonth<dateOfBirthMonth){
			return (currentTimeYear-dateOfBirthYear)-1;
		}else if(currentTimeMonth==dateOfBirthMonth){
			if(currentTimeDate<dateOfBirthDate){
				return (currentTimeYear-dateOfBirthYear)-1;
			}else{
				return currentTimeYear-dateOfBirthYear;
			}
		}
}

function dateChange(){
	age.value = getAge(dob.value);
}

function appendChildDetailsInTable(obj , typeReg){
	parent = document.getElementById('main-table'); 
	var tableRow = `<tr id="table${obj.id}">
					<td>${obj.name}</td>
					<td>${obj.fathersName}</td>
					<td>${obj.dob}</td>
					<td>${obj.class}</td>
					<td>${obj.gender}</td>
					<td>${obj.state}</td>
					<td class="allIcon">
						<i class="fa fa-eye" aria-hidden="true" data-toggle="tooltip" title="show details" onClick="viewChildDetails(${obj.id})"></i>
						<i class="fa fa-pencil" aria-hidden="true" data-toggle="tooltip" title="edit" onClick="editDetailsChilds(${obj.id})"></i>
						<i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" title="delete" onClick="deleteDetailsChilds(${obj.id})"></i>
					</td>
				</tr>`;
	if(typeReg == "newReg"){
		parent.insertAdjacentHTML('beforeend', tableRow);
	}else if(typeReg == "updateReg"){
		var oldElement = document.getElementById('table'+obj.id);
		oldElement.outerHTML = tableRow;
	}	
	//console.log("tableRow ==> ", tableRow);
}
function resetSelectOption(selectElementId){
	document.getElementById(selectElementId).selectedIndex = 0;
}
function formReset(){
	fullName.value = '';
	fathrName.value = '';
	dob.value = null;
	age.value = '';
	resetSelectOption("selectclassOpt");
	rollNum.value = '';
	genderChange("female");
	address.value = '';
	resetSelectOption("state");
	pincode.value = '';
	
}
function viewChildDetails(studenId){
	var overlay = document.getElementById('overlay'),
		currentStudentObject;
	for(i in allStudentDetails){
		if(allStudentDetails[i].id == studenId){
			currentStudentObject = allStudentDetails[i];
			break;
		}
	}	
	console.log('currentStudentObject ==> ', currentStudentObject);
	var stdntName = document.getElementsByClassName("stdntName")[0],
		fathrNam = document.getElementsByClassName("fathrNam")[0],
		stdntDob = document.getElementsByClassName("stdntDob")[0],
		stdntAge = document.getElementsByClassName("stdntAge")[0],
		sdntClass = document.getElementsByClassName("sdntClass")[0],
		stdntRoll = document.getElementsByClassName("stdntRoll")[0],
		stdntGendr = document.getElementsByClassName("stdntGendr")[0],
		stdntAddrs = document.getElementsByClassName("stdntAddrs")[0],
		stdntStat = document.getElementsByClassName("stdntStat")[0],
		stdntPin = document.getElementsByClassName("stdntPin")[0];
		
		stdntName.innerHTML = currentStudentObject.name;
		fathrNam.innerHTML = currentStudentObject.fathersName;
		stdntDob.innerHTML = currentStudentObject.dob;
		stdntAge.innerHTML = currentStudentObject.age;
		sdntClass.innerHTML = currentStudentObject.class;
		stdntRoll.innerHTML = currentStudentObject.rollNo;
		stdntGendr.innerHTML = currentStudentObject.gender;
		stdntAddrs.innerHTML = currentStudentObject.address;
		stdntStat.innerHTML = currentStudentObject.state;
		stdntPin.innerHTML =  currentStudentObject.pinCode;
	
		//console.log(stdntName, fathrNam, stdntDob, stdntAge, sdntClass, stdntRoll, stdntGendr, stdntAddrs, stdntStat, stdntPin);
		overlay.style.display = "block";
}
function editDetailsChilds(studenId){
	var currentStudentObject,
		currentObjIndex;
	for(var indx in allStudentDetails){
		if(allStudentDetails[indx].id == studenId){
			currentObjIndex = indx;
			currentStudentObject = allStudentDetails[indx];
			break;
		}
	}
	console.log("currentStudentObject ==> ", currentStudentObject);

	fullName.value = currentStudentObject.name;
	fathrName.value = currentStudentObject.fathersName;
	dob.value = currentStudentObject.dob;
	age.value = currentStudentObject.age;
	selectclassOpt.value = currentStudentObject.class;
	rollNum.value = currentStudentObject.rollNo;
	genderChange(currentStudentObject.gender);
	address.value = currentStudentObject.address;
	state.value = currentStudentObject.state;
	pincode.value = currentStudentObject.pinCode;

	hideDom('registeredBtn');
	showDom('updateBtn');

	document.getElementById('updateBtn').setAttribute('data-childId', studenId);	
}
function deleteDetailsChilds(studenId){
	var currentStudentObjIndex;
	for(var indx in allStudentDetails){
		if(allStudentDetails[indx].id == studenId){
			currentStudentObjIndex = indx;
			break;
		}
	}
	allStudentDetails.splice(currentStudentObjIndex, 1);
	localStorage.allStudentDetails = JSON.stringify(allStudentDetails);
	document.getElementById("table"+studenId).remove();
	console.log("allStudentDetails==> ", allStudentDetails);
}
function hideDom(hideDomId){
	document.getElementById(hideDomId).style.display = "none";
}
function showDom(showDomId){
	document.getElementById(showDomId).style.display = "block";
}

function updateChildDetails(){
	var currentStudentId = document.getElementById('updateBtn').getAttribute('data-childId'),
		currentStudentIndex;
	var singleStudentUpdatedDetails = {};
		singleStudentUpdatedDetails.id = currentStudentId;
		singleStudentUpdatedDetails.name = fullName.value;
		singleStudentUpdatedDetails.fathersName = fathrName.value;
		singleStudentUpdatedDetails.dob = dob.value;
		singleStudentUpdatedDetails.age = age.value;
		singleStudentUpdatedDetails.class = selectclassOpt.value;
		singleStudentUpdatedDetails.rollNo = rollNum.value;
		singleStudentUpdatedDetails.gender = gender.value;
		singleStudentUpdatedDetails.address = address.value;
		singleStudentUpdatedDetails.state = state.value;
		singleStudentUpdatedDetails.pinCode = pincode.value;

		for(var indx in allStudentDetails){
			if(allStudentDetails[indx].id == parseInt(currentStudentId)){
				allStudentDetails[indx] = singleStudentUpdatedDetails; //replace with updated child detail
				localStorage.allStudentDetails = JSON.stringify(allStudentDetails);
				break;
			}
		}

		appendChildDetailsInTable(singleStudentUpdatedDetails, 'updateReg');
		//console.log("tableRow ==> ", tableRow);
		console.log("allStudentDetails => ", allStudentDetails);
		hideDom('updateBtn');
		showDom('registeredBtn');
		formReset();
}

function genderChange(genderr){
	male.checked = false;
	female.checked = false;
	document.getElementById(genderr).checked = true;
	gender = document.getElementById(genderr);
	//console.log("gender genderChange = >", gender,  gender.value);
}

function registeredStudent() {
	var singleStudentDetails = {},
		currentDate = new Date();
	
	if(fullName.value != "" && fathrName.value != "" && dob.value != "" && selectclassOpt.value != "" && rollNum.value != "" && address.value != "" && state.value != ""){
		singleStudentDetails.id = currentDate.getFullYear().toString().substr(2,2)+currentDate.getMonth()+currentDate.getDate()+currentDate.getHours()+currentDate.getMinutes()+currentDate.getSeconds();
		singleStudentDetails.name = fullName.value;
		singleStudentDetails.fathersName = fathrName.value;
		singleStudentDetails.dob = dob.value;
		singleStudentDetails.age = age.value;
		singleStudentDetails.class = selectclassOpt.value;
		singleStudentDetails.rollNo = rollNum.value;
		singleStudentDetails.gender = gender.value;
		singleStudentDetails.address = address.value;
		singleStudentDetails.state = state.value;
		singleStudentDetails.pinCode = pincode.value;
		allStudentDetails.push(singleStudentDetails);
		localStorage.allStudentDetails = JSON.stringify(allStudentDetails);
		appendChildDetailsInTable(singleStudentDetails, 'newReg');
		console.log("allStudentDetails => ", allStudentDetails);
		formReset();
		//console.log("gender registraion = >", gender,  gender.value);
	
	}else{
		alert('please fill all input');
	}		
}



	
