var Bus = function(driverName, color, gas) { //create Constructor
    this.studentsOnTheBus = [];
    this.driverName = driverName;
    this.color = color;
    this.gas = gas;
    this.studentEntersBus = function(student) {
        this.studentsOnTheBus.push(student);
    };
    this.busChatter = function() {
        this.studentsOnTheBus.forEach(function(student) {
            if (student.canStudentHaveFun) {
                console.log(student.catchPhrase);
            }
        })
    };
};

module.exports = Bus;
