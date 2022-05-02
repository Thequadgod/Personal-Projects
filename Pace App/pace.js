"use strict";

$(document).ready( () => {
    //let other = $("#other").val();
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
   // console.log(other);
    $("#test").click( () => {
                  console.log(other);
            //    console.log(radioButton);
                   // console.log(foo);
                  });   
    
});// end ready