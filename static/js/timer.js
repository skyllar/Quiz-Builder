var hours = 10;
var minutes = 10;
var seconds = 10;
var timer = null;


		  timer = setInterval(counter, 1000);


function stop(){
	clearInterval(timer);
}
 
function counter() {


    var hh = 0;
    var mm = 0;
    var ss = 0;

    
    ss = seconds - 1;
    if (seconds == 0 && minutes > 0 ) {
        seconds = 59;
        minutes = minutes - 1;
        mm = minutes - 1;
        if (minutes == 0 && hours > 0) {
            minutes = 59;
            hours = hours - 1;
            hh = hours - 1;
        }
    }
    else
        seconds = seconds - 1;
    
    if (seconds < 10) {
        ss = "0" + seconds;
    }else{
        ss = seconds;
    }
    if (minutes < 10) {
        mm = "0" + minutes;
    }else{
        mm = minutes;
    }
    if (hours < 10) {
        hh = "0" + hours;
    }else{
        hh = hours;
    }

    $('#displayTime').html(hh + " : " + mm + " : " + ss);

	if ( seconds == 0 && minutes == 0 && hours == 0) {
          stop()
		check= alert("Sorry,Your Time is Over \nPlease click ok to submit")
         document.myform1.action = "time_over";
        $( "#submitted" ).submit();
	}

}
