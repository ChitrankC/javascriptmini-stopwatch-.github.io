window.onload = function () {
    var seconds = 00;
    var miliseconds = 00;
    var append_miliseconds = document.getElementById("miliseconds");
    var append_seconds = document.getElementById("seconds");
    var btn_start = document.getElementById("btn_start");
    var btn_stop  = document.getElementById("btn_stop");
    var btn_reset = document.getElementById("btn_reset");
    var Interval;



    btn_start.onclick = function(){
        clearInterval (Interval);
        Interval = setInterval(startTimer, 10);
    }
    btn_stop.onclick = function(){
        clearInterval(Interval);
    }
    btn_reset.onclick = function(){
        clearInterval(Interval);
        seconds = "00";
        miliseconds ="00";
        append_miliseconds.innerHTML = miliseconds;
        append_seconds.innerHTML = seconds;
    }
    function startTimer(){
        miliseconds++;
        if(miliseconds<=9){
            append_miliseconds.innerHTML = "0" + miliseconds;
            
        }
        if(miliseconds>9){
            console.log("seconds");
            seconds++;
            append_seconds.innerHTML = "0" + 0;
            miliseconds = 0;
            append_miliseconds.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            append_seconds.innerHTML = seconds;
        }

    }
}
