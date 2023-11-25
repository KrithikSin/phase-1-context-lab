/* Your Code Here */
function createEmployeeRecord(record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}
function createEmployeeRecords(records) {
    return records.map((employee) => {
        return createEmployeeRecord(employee);
    });
}

function createTimeInEvent(dateTime) {
    const newDateTime = dateTime.split(' ');
    const date = newDateTime[0];
    const time = parseInt(newDateTime[1]);

    this.timeInEvents.push({
        type: 'TimeIn',
        date: date,
        hour: time,
    });
    return this;
}

function createTimeOutEvent(dateTime) {
    const newDateTime = dateTime.split(' ');
    const date = newDateTime[0];
    const time = parseInt(newDateTime[1]);

    this.timeOutEvents.push({
        type: 'TimeOut',
        date: date,
        hour: time,
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((event) => event.date === date);
    const timeOut = this.timeOutEvents.find((event) => event.date === date);

    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(date) {
    const wage = this.payPerHour * hoursWorkedOnDate.call(this, date);
    return wage;
}

function findEmployeeByFirstName(collection, firstName) {
    const employee = collection.find(
        (employee) => employee.firstName === firstName
    );
    return employee;
}

function calculatePayroll(employees) {
    let totalPayRoll = 0;
    employees.forEach((employee) => {
        totalPayRoll += allWagesFor.call(employee);
    });
    return totalPayRoll;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(
        function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d);
        }.bind(this),
        0
    ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
};
