var myApp = angular.module('myApp',['getAge']);
myApp.service("appService",function(){
	this.registeredStudents = [];
	this.register = function(){

	};
	this.removeStudent = function(){

	}
	this.editStudent = function(){

	}
	
});

myApp.controller('appController',function($scope, getCurrentAge, appService){
$scope.classObj = [
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
$scope.stateName = [
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
	];

$scope.name;
$scope.fatherName;
$scope.dob;
console.log("dob ==> ", $scope.dob);
$scope.age;
$scope.selectClass = $scope.classObj[0];
$scope.roll;
$scope.gender = "male";
$scope.address;
$scope.selectState = $scope.stateName[0];
$scope.pinCode;
function dateFormat(dateToBeFormat){
	var year = dateToBeFormat.getFullYear(),
		month = dateToBeFormat.getMonth()+1, 
		date = dateToBeFormat.getDate();
	return year+'-'+month+'-'+date;
}
$scope.dateChange = function(){
	var age = document.getElementById('age');
	age.value = getCurrentAge.getYourCurrentAge(dateFormat($scope.dob));
}
$scope.stateChange = function(){
	var pinCode = document.getElementById('pinCode'),
		currentStatePin;
		for(var indx in $scope.stateName ){
			if($scope.stateName[indx].state == $scope.selectState.state){
				currentStatePin = $scope.stateName[indx].pincode;
				break;
			}
		}
		pinCode.value = currentStatePin;		
}
function getPinCode(state){
	var statePinCode;
	for(var indx in $scope.stateName ){
		if(state == $scope.stateName[indx].state){
			statePinCode = $scope.stateName[indx].pincode;
			break;
		}
	}
	return statePinCode;
}
// document.getElementById('pinCode').value = getPinCode($scope.selectState.state);
console.log("state ==> ", $scope.selectState.state);
$scope.allRegisteredStudents = appService.registeredStudents; 
$scope.final = function(){
	var currentDate = new Date();
	var singleStudentDetails = {};
	singleStudentDetails.id = currentDate.getFullYear().toString().substr(2,2)+currentDate.getMonth()+currentDate.getDate()+currentDate.getHours()+currentDate.getMinutes()+currentDate.getSeconds();
	singleStudentDetails.name = $scope.name;
	singleStudentDetails.fatherName = $scope.fatherName;
	singleStudentDetails.dob = dateFormat($scope.dob);
	singleStudentDetails.age = getCurrentAge.getYourCurrentAge(dateFormat($scope.dob));
	singleStudentDetails.class = $scope.selectClass.class;
	singleStudentDetails.roll = $scope.roll;
	singleStudentDetails.gender = $scope.gender;
	singleStudentDetails.address = $scope.address;
	singleStudentDetails.state = $scope.selectState.state;
	singleStudentDetails.pinCode = getPinCode($scope.selectState.state);
	console.log(singleStudentDetails);
	appService.registeredStudents.push(singleStudentDetails);
	console.log(appService.registeredStudents);
}

$scope.view = function(viewObject){
	console.log("viewObject ==> ", viewObject);
	appService.registeredStudents;
}
$scope.edit = function(editObject){
	console.log("editObject ==> ",  editObject);
	appService.editStudent(editObject);
}
$scope.remove = function(removeObject){
	console.log("removeObject ==> ", removeObject);
	appService.removeStudent(removeObject);
}

});

