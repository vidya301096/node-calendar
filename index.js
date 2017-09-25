#!/usr/bin/env node
'use strict';

var Calendar = require('calendar-base').Calendar,
cal = new Calendar();
var date = new Date();
var str="";
str += "Current Date:"+date+"\n\t\t";
var currentCalendar = cal.getCalendar(date.getFullYear(),date.getMonth());
str += currentCalendar[8].year + " Calendar\n";
str += "Sun\tMon\tTue\tWed\tThu\tFri\tSat\n";
for(var i = 0;i < currentCalendar.length;i++){
	if( i % 7 === 0){
		str += "\n";
	}
	if(currentCalendar[i] === false){
		str += " \t";
	}
	else{
		str += currentCalendar[i].day+"\t";
	}
}
console.log(str);

