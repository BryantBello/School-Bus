var prompt = require('prompt');
var fs = require('fs');
var Student = require('./student.js');
var prompt = require('prompt');
var fs = require('fs');
var Student = require('./student.js');
var Bus = require('./bus.js');
var bus;
var students = 1;
//Start Prompt
prompt.start();
//prompt to get the bus drive info from Bus
console.log('Enter bus driver and bus info: ');
prompt.get(['driver', 'color', 'gas'], function(err, result) { //Creating new bus using info from prompt
    bus = new Bus(result.driver, result.color, result.gas);
    console.log('Enter 20 students: ');
    getStudentInfo(); //calling getStudentInfo function below
});

function getStudentInfo() { //function to gather the students info
    console.log(students);
    students++;
    prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
        var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
        bus.studentEntersBus(student);
        student.canStudentHaveFun();
        if (bus.studentsOnTheBus.length <= 20) { //keep asking student info until 20 students are reach, then the bus will be full
            getStudentInfo();
        } else {
            bus.busChatter();
        }
        fs.appendFile('schoolbus.txt', JSON.stringify(Student.canStudentHaveFun) + "\r\n", function(err) { //working on grabbinh right object
            if (err) {
                throw err;
            } else {
                console.log("Students have been added to the list!!");
            }
        });
    });
}
