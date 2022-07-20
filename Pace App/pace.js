"use strict";


$(document).ready( () => {
    
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
  
    
    
    $("#test").click( () => {
        //let isValid = true;
        //let distance = $("#type").val();
       // console.log(distance);
        let foo = $("#hour").val();
        let foo1 = $("#minu").val();
        let foo2 = $("#sec").val();
        /*
        if (isNaN(foo))
            isValid = false;   
        console.log(foo);
        */
        
        let bar = parseInt(foo);
        let bar1 = parseInt(foo1);
        let bar2 = parseInt(foo2);
        let bar3 = parseInt(foo3);
        
        console.log(foo);
        console.log(foo1);
        console.log(foo2);
        var foo3 = foo + foo1 + foo2;
        console.log(foo3);
        console.log(bar);
        console.log(bar1);
        console.log(bar3);
         });   
         
    
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