"use strict";


$(document).ready( () => {
    var totalK = 0;
    /*
    let foo = document.querySelector('input[name="type"]').val;
     $(":radio").change( () => {
        const radioButton = $(":radio:checked").val();
        if (radioButton == "other") {
            $("#otherTxt").attr("disabled", false);
            console.log("test1");
        } else {
            $("#otherTxt").attr("disabled", true);
            console.log("test2");
        }
    });
    
    

    const selectDistance = (distance) => {
        switch(distance){
            case "Marathon":
                console.log("marathon");
            case "Half Marathon":
                console.log("half marathon");
            case "10k":
                console.log("10k");
            case "8k":
                console.log("8k");
            case "5k":
                console.log("5k");
        }
    }// end switch
    
    $(":radio").change( () => {

        console.log("changed");
        console.log(distance);
        
    });//
    */
    
    
    /*
    $("#toggle").click( () => {
       console.log("checkbox"); 
        if (toggle.checked == true){
            console.log("checked");
                $("#otherTxt").removeAttr("disabled");
        }else{
            console.log("unchecked");
                $("#otherTxt").attr("disabled", "disabled");
        }
    });// emd checkbox click
    */
  /*
       function time(hour, minu, sec)
        {
            if (hour == 0){
                return hour;
            } else {
                console.log(minu);
                console.log(hour);
                minu =  (hour * 60) + +minu;
                sec =   (minu * 60) + +sec;
                console.log("minutes =",minu);
                console.log("seconds =",sec);
                console.log("hours",hour);
                return hour,minu,sec;
           
            }
            
        }
    */
    
     
    
    $("#test").click( () => {
        //var totalK = 0;

        var distance = document.getElementById("type").value;
        console.log(distance);
        //convertD(distance);

        console.log(totalK);
        /*
        const selectDiance = (distance) => {
            switch(distance){
                case "10k":
                    
                    return console.log("case 10k")
            }
        }
        */
        // const time = new time(0,0,0,hour,minu,sec);
      
        
        var hour = document.getElementById("hour").value;
        var minu = document.getElementById("minu").value;
        var sec = document.getElementById("sec").value;
        //time(hour,minu,sec);
        minu =  (hour * 60) + +minu;
        sec =   (minu * 60) + +sec;
        console.log("minutes =",minu ,sec,hour);
        //console.log(time);
        const    output = minu / (convertD(distance)) ;
        console.log(output);
        document.getElementById("result").textContent = output;
        /*
            fix time so 80 seconds / 60 is 1 minute 20 seconds
            
            
            
            var totalMinutes = hours * 60 + minutes + seconds / 60,
		pace = totalMinutes / miles,
		paceMinutes = Math.floor(pace),
		paceSeconds = Math.round((pace - paceMinutes) * 60);
        */
        //console.log(foo);

        //var total = +hour + +minu + +sec;
        
     
        //console.log(total);
        
         });   
         function convertD(distance){
        if (distance == "10k"){
            //var totalK = 0;
            console.log("11k");
            return totalK = 10;
        } else if (distance == "5k"){
            console.log("5k", totalK);
            return totalK = 5;
              
        } else if (distance == "8k"){
            console.log("8k");
            return totalK = 8;
        } else if (distance == "Half"){
            console.log("Half");
            return totalK = 22.2;
        } else if (distance == "Marathon"){
            console.log("Marathon");
            return totalK = 44.4;
        }
        console.log(distance, totalK);
        }
    
    $("#type").click( () => {
        let distance = $("#type").val();

        if ((distance) == "other"){
                 $("#otherTxt").removeAttr("disabled");
        }else {
            $("#otherTxt").attr("disabled", "disabled");
        }
                     
            });
    
    
    /*
    if (isValid == false) {
        event.preventDefault();
    }
    */
    
});// end ready