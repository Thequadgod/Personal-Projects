"use strict";
$(document).ready( () => {
    /*
   let d1 = "Mon";
   let d2 = "Tue";
   let d3 = "Wed";
   */
    
    $("#test").click( () => {
        
        total = 0;
        var mon =  document.getElementById("mon").value;
        var tue =  document.getElementById("tue").value;
        var wed =  document.getElementById("wed").value;
        var thur = document.getElementById("thur").value;
        var fri = document.getElementById("fri").value;
        var sat = document.getElementById("sat").value; 
        var sun = document.getElementById("sun").value;
        
        const ar = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
        
        var total = +mon + +tue + +wed + +thur + +fri + +sat + +sun;
        document.getElementById("total").textContent = total;
        console.log(ar);

        console.log(total);

        $("#reset").click ( () => {
            $("#mon").val("");
            $("#tue").val("");
            $("#wed").val("");
            $("#thur").val("");
            $("#fri").val("");
            $("#sat").val("");
            $("#sun").val("");
            $("#total").val("");
            total = 0;
            document.getElementById("total").textContent = total;

    });
        
    });
    
});