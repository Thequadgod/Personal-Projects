"use strict";


$(document).ready( () => {
    
    //let other = $("#other").val();
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
    
    
   // console.log(other);
    $("#test").click( () => {
                    let distance = $("#type").val();

            console.log(distance);
            //    console.log(radioButton);
                   // console.log(foo);
                  });   
    
});// end ready