var getAge = angular.module('getAge',[]);
getAge.service('getCurrentAge',function(){
    this.getYourCurrentAge  = function(dateOfBirth){
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
});