// // TO DO -  create some date button, create a button, apply a event listener on that button such that when you click on that button, you show on that screen separately date, day, month and a year. then show a sentence in which you show all those things together.

function  displayDate(){
    let date = new Date();
    var TotalDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var Totalmonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'November', 'December'];

    let presentDay = date.getDay();
    var dayName = TotalDays[presentDay];

    let presentMonth = date.getMonth();
    var monthName = Totalmonths[presentMonth];

    let year = date.getFullYear();

    document.getElementById('display').innerHTML= "<b>Day: </b>" + dayName + ", " + presentDay + "th day of the week." + "<br> <b>Month: </b>" + monthName + ", " + presentMonth + "th month of the year" + "<br> <b>Year: </b>" + year +"<br><b> Date: </b>" + date;
}


