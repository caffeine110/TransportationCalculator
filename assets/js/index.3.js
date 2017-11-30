$(document).ready(function() {


    $("#loader").fadeOut("slow");

   
    $('.row_hider_ep1_no').css("display","none");
   
    hide_element_row_hider1 = function() {
        $('.row_hider').css("display","none");
        $('.row_hider_ep1_no').css("display","");
    }
    
    show_element_row_hider1 = function() {
        $('.row_hider').css("display","");
        $('.row_hider_ep1_no').css("display","none");
    }

    /***** extra for ep e2 */

    $('.row_hider_ep2_no').css("display","none");
    
     hide_element_row_hider2 = function() {
         $('.row_hider').css("display","none");
         $('.row_hider_ep2_no').css("display","");
     }
     show_element_row_hider2 = function() {
         $('.row_hider').css("display","");
         $('.row_hider_ep2_no').css("display","none");
     }
 
});



function check_radio_buttons_one() {
  
    
    var ep1_yes = document.getElementById("ep1_yes");
    var ep1_no = document.getElementById("ep1_no");

    if( ep1_yes.checked ==  true)  {      
        hide_element_row_hider1();
        show_element_row_hider2();
    }
    else if(ep1_no.checked == true) {
        show_element_row_hider1(); 
               
    } 
}

function check_radio_buttons_two() {
    var ep2_yes = document.getElementById("ep2_yes");
    var ep2_no = document.getElementById("ep2_no");

    if( ep2_yes.checked ==  true)  {
        hide_element_row_hider2();
        show_element_row_hider1();
        
    }

    else if(ep2_no.checked == true) {
        show_element_row_hider2();        
    } 
}


function calculate_one_way() {

    v = document.getElementById("velocity-one").value;
    r = document.getElementById("reaction-one").value;
    l = document.getElementById("length-one").value;
    a = document.getElementById("acceleration-one").value;
    
    v = parseFloat(v);
    r = parseFloat(r);
    l = parseFloat(l);
    a = parseFloat(a);
    

    var z1 = 0.278 * v * r ;
    var z2 = 2 * (( 0.2 * v) + l ) ;
    var z3 = 0.278 * v * (Math.sqrt(45/a)) ;

    var result = document.getElementById("result_block_third");
    result.style.display =" block";
    document.getElementById("result_of_two_way").innerHTML ="";
    document.getElementById("result_of_one_way").innerHTML ="";

    document.getElementById("result_of_one_way").innerHTML ="Overtaking sight distance of one way vehical is "+ z1+z2+z3 +" m.";

}

function calculate_two_way() {

    v = document.getElementById("velocity-two").value;
    r = document.getElementById("reaction-two").value;
    l = document.getElementById("length-two").value;
    a = document.getElementById("acceleration-two").value;
    v1 = document.getElementById("velocity_rev").value;
    
    
    v = parseFloat(v);
    r = parseFloat(r);
    l = parseFloat(l);
    a = parseFloat(a);
    v1 = parseFloat(v1);
    
    var z1 = 0.278 * v * r ;
    var z2 = 2 * (( 0.2 * v) + l ) ;
    var z3 = 0.278 * v * Math.sqrt(45/a) ;
    var z4 = 0.278 * v1 * (Math.sqrt(45/a)) ;

    var result = document.getElementById("result_block_third");
    result.style.display =" block";
    
    document.getElementById("result_of_two_way").innerHTML ="";
    document.getElementById("result_of_one_way").innerHTML ="";
    document.getElementById("result_of_two_way").innerHTML ="Overtaking sight distance of Two way vehical is : "+ z1+z2+z3+z4 +" m.";
    
}

