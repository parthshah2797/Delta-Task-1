//Stores the date object for the specified target
var targetDate = new Date(2016,05,11,01,30,00,00);

var targetMs = targetDate.getTime(); 
function displayTime(){
    //Stores the date object for the current date and time 
    var currentDate = new Date();
    
    var currentMs = currentDate.getTime();
    
    //remainderMs stores the total number of Milliseconds left for the target from the current time.
    var remainderMs = targetMs - currentMs;
    
    //Convert the Milliseconds into days, hours, minutes and seconds
    var remainderDays = Math.floor(remainderMs/(1000*60*60*24));
    var remainderHours = Math.floor(remainderMs/(1000*60*60))-(remainderDays*24);
    var remainderMinutes = Math.floor(remainderMs/(1000*60))-(remainderDays*24*60)-(remainderHours*60);
    var remainderSeconds = Math.floor(remainderMs/1000)-(remainderDays*24*60*60)-(remainderHours*60*60)-(remainderMinutes*60);
    
    //Set the value of the respective elements.
    document.getElementById("days").value = remainderDays; 
    document.getElementById("hrs").value = remainderHours;
    document.getElementById("mins").value = remainderMinutes;
    document.getElementById("sec").value = remainderSeconds;
    
    //Alert when timer reaches zero
    if(remainderDays==0&&remainderHours==0&&remainderMinutes==0&&remainderSeconds==0)
	{
        alert("The Game Has Begun");
    }
    
    //Function used to run the 'display time' function after every second
    setTimeout(displayTime,1000);
}
function startClock(){
    setTimeout(displayTime,1000);
}
startClock();