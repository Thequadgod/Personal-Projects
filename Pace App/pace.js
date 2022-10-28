"use strict";


$(document).ready( () => {
    var totalK = 0;
   // var totalM = 0;
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

        var distance = document.getElementById("type").value;
        console.log(distance);
        console.log("total k",totalK);
      
        
        var hour = document.getElementById("hour").value;
        var minu = document.getElementById("minu").value;
        var sec = document.getElementById("sec").value;
        
        minu =  (hour * 60) + +minu;
        sec =   (minu * 60) + +sec;
        console.log("minutes =",minu ,sec,hour);
        
        
        const    output = minu / (convertD(distance));
        
        var totalM = totalK / 1.609;
        
        const output2 = minu / totalM;
        console.log(output2);
        console.log(totalM);
        console.log(output);
        //document.getElementById("result").textContent = output;
        
        var paceMinutes = Math.floor(output);
		var paceSeconds = Math.round((output - paceMinutes) * 60);
        
        console.log("Pace Minutes-",paceMinutes ,"Pace Seconds", paceSeconds);
        
        var paceMinutes2 = Math.floor(output2);
		var paceSeconds2 = Math.round((output2 - paceMinutes2) * 60);
        console.log("Pace Minutes2-",paceMinutes2,"Pace Seconds2", paceSeconds2);        
        
        let paceMinString = paceMinutes.toString();
        let paceSecondString = paceSeconds.toString();
        
        if(paceSecondString < 10) {
		paceSecondString = "0" + paceSecondString;
	   }// end if
        
        let paceMinString2 = paceMinutes2.toString();
        let paceSecondString2 = paceSeconds2.toString();
        
        if(paceSecondString2 < 10) {
		paceSecondString2 = "0" + paceSecondString2;
        }// end if
        
        console.log(paceMinString2, paceSecondString2);
        
        let final = paceMinString + ":" + paceSecondString +" Per Kilometer and "+ paceMinString2 +":" +paceSecondString2 +" Per Mile";//paceSM.concat(colon,paceS);
        
        document.getElementById("result").innerText = final;
        console.log(totalM, totalK);
        
        $("#reset").click( () => {
                //sets reset button to normal values
        document.getElementById("hour").value = "";
        document.getElementById("minu").value = "";
        document.getElementById("sec").value  = "";
        document.getElementById("result").innerText = "";
        document.getElementById("type").value = "";

        
        });// end click listener for reset button    
    
        
        
        // add seconds
        
        
        // do same thing 
        /*
        ----------------What's Left to Do----------------
        -Make user input
        -make per mile as well
        -make it so you can press enter to calculate on the keyboard
        -make reset button
        -Make leading 0's a thing (for example, using a 1:19 half givse 6:2 instead of 6:02 min per miles)
        
        
        
        -maybe add mph for paces
        -maybe integrate the mpw calculator too
        -maybe have a 400/800/1600 time too
        
        */
        /*
            fix time so 80 seconds / 60 is 1 minute 20 seconds
            
             
            
            var totalMinutes = hours * 60 + minutes + seconds / 60,
		pace = totalMinutes / miles,
		
        
        if(paceSeconds < 10) {
		paceSeconds = "0" + paceSeconds;
	}
    
    paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per mile.";
        */
        //console.log(foo);

        //var total = +hour + +minu + +sec;
        
             
         }); // end calculate click listener
    
    function ktom(diistance){
        
    }
         function convertD(distance){
        if (distance == "10k"){
            //var totalK = 0;
            console.log("10k");
            return totalK = 10;
        } else if (distance == "5k"){
            console.log("5k", totalK);
            return totalK = 5;
              
        } else if (distance == "8k"){
            console.log("8k");
            return totalK = 8;
        } else if (distance == "Half"){
            console.log("Half");
            return totalK = 21.097;
        } else if (distance == "Marathon"){
            console.log("Marathon");
            return totalK = 42.195;
        }
        console.log(distance, totalK);
        }
    
    $("#type").click( () => {
        let distance = $("#type").val();

        if ((distance) == "otherk" || (distance) == "otherm"){
                 $("#otherTxt").removeAttr("disabled");
        }else {
            $("#otherTxt").attr("disabled", "disabled");
        }
            
        
            });// end click for calculate button
    
    $("#random").click( () => {
            
       //var testh = Math.random() * 10;
        //console.log(testh);
        document.getElementById("hour").value = "1";
            
        document.getElementById("minu").value = "19";
        document.getElementById("sec").value  = "";
        //document.getElementById("result").innerText = "";
        document.getElementById("type").value = "Half";    
            
        });// end random
    
    /*
    if (isValid == false) {
        event.preventDefault();
    }
    */
    
});// end ready