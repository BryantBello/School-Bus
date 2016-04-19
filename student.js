var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, canStudentHaveFun) { //creating constructor object
    this.name = name;
    this.gender = gender;
    this.grade = grade;
    this.GPA = GPA;
    this.detentions = detentions;
    this.sleepingInClass = sleepingInClass;
    this.catchPhrase = catchPhrase;
    this.canStudentHaveFun = function() {
        if (this.GPA > 2 && this.detentions < 10) { //if else statement to determine if student is a good student or not based on grades and detentions
            console.log("Congratulations, you can have fun!");
            return true;
        } else {
            console.log('You are in danger of failing. Please try harder!!!!');
            return false;
        }
    };
};

module.exports = Student;
