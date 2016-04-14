var prompt = require('prompt');
var fs = require('fs');
var Student = require('./student.js');
var Bus = require('./bus.js');
var bus;
var students = 1;

prompt.start();

console.log('Enter bus driver and bus info: ');
prompt.get(['driver', 'color', 'gas'], function (err, result) {
    bus = new Bus(result.driver, result.color, result.gas);
    console.log('Enter 20 students: ');
    getStudentInfo();
});

function getStudentInfo () {
    console.log(students);
    students++;
    prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
        var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
        bus.studentEntersBus(student);
        student.canStudentHaveFun();
        if (bus.studentsOnTheBus.length < 20) {
            getStudentInfo();
        }
        else {
            bus.busChatter();
        }
    });
}