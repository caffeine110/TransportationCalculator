$(document).ready(function() {
    form_row_shower_parabola_type = function() {
        $('.form_row_parabola_type').css("display","");
    } 
    form_row_hider_parabola_type = function() {
        $('.form_row_parabola_type').css("display","none");
    } 
    form_row_shower_straight_type = function() {
        $('.form_row_straight_type').css("display","");
    } 
    form_row_hider_straight_type = function() {
        $('.form_row_straight_type').css("display","none");
    } 
    form_row_hider_gradient_no = function() {
        $('.form_row_gradient_no').css("display","none");
    }
    form_row_shower_gradient_no = function() {
        $('.form_row_gradient_no').css("display","");
    }


    //calling for initial states
    $("#gradient_calculation_block").css("display","none");
    $("#compeseted_gradient_block").css("display","none");
    $(".form_row_hiders").css("display","none");
    form_row_hider_straight_type();







    $('#result_block_one').css("display","none")
    
        $("#loader").fadeOut("slow");
    
        /***** for ep e1 */
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


        /***** extra for ep e3 */
        $('.row_hider_ep3_no').css("display","none");
        
         hide_element_row_hider3 = function() {
             $('.row_hider').css("display","none");
             $('.row_hider_ep3_no').css("display","");
         }
         show_element_row_hider3 = function() {
             $('.row_hider').css("display","");
             $('.row_hider_ep3_no').css("display","none");
         }
});
    

function get_blocks_and_buttons() {

    
}
function go_with_camber() {
    var camber_block =  document.getElementById("camber_calculation_block");
    var gradient_block =  document.getElementById("gradient_calculation_block");
    var compeseted_block =  document.getElementById("compeseted_gradient_block");
    var camber_button = document.getElementById("camber_calculation");
    var gradient_button = document.getElementById("gradient_calculation");
    var compeseted_button = document.getElementById("compeseted_gradient");
    
    camber_button.style.backgroundColor="#c0392b";
    camber_button.style.color="#fff";
    gradient_button.style.backgroundColor="#fff";
    gradient_button.style.color="#000";
    compeseted_button.style.backgroundColor="#fff";
    compeseted_button.style.color="#000";
    camber_block.style.display="";
    gradient_block.style.display="none";
    compeseted_block.style.display="none";
}
function go_with_gradient(){ 
    var camber_block =  document.getElementById("camber_calculation_block");
    var gradient_block =  document.getElementById("gradient_calculation_block");
    var compeseted_block =  document.getElementById("compeseted_gradient_block");
    var camber_button = document.getElementById("camber_calculation");
    var gradient_button = document.getElementById("gradient_calculation");
    var compeseted_button = document.getElementById("compeseted_gradient");
    
    gradient_button.style.backgroundColor="#c0392b";
    gradient_button.style.color="#fff";
    camber_button.style.backgroundColor="#fff";
    camber_button.style.color="#000";
    compeseted_button.style.backgroundColor="#fff";
    compeseted_button.style.color="#000";
    camber_block.style.display="none";
    gradient_block.style.display="";
    compeseted_block.style.display="none";
}
function go_with_compeseted() {
    var camber_block =  document.getElementById("camber_calculation_block");
    var gradient_block =  document.getElementById("gradient_calculation_block");
    var compeseted_block =  document.getElementById("compeseted_gradient_block");
    var camber_button = document.getElementById("camber_calculation");
    var gradient_button = document.getElementById("gradient_calculation");
    var compeseted_button = document.getElementById("compeseted_gradient");
    
    compeseted_button.style.backgroundColor="#c0392b";
    compeseted_button.style.color="#fff";
    camber_button.style.backgroundColor="#fff";
    camber_button.style.color="#000";
    gradient_button.style.backgroundColor="#fff";
    gradient_button.style.color="#000";
    camber_block.style.display="none";
    gradient_block.style.display="none";
    compeseted_block.style.display="";
}
function camber_type_change() {
    var ep1_yes = document.getElementById("parabola_camber");
    var ep1_no = document.getElementById("straight_camber");
    if( ep1_yes.checked ==  true)  { 
        form_row_hider_straight_type();
        form_row_shower_parabola_type();
        document.getElementById("result_parabola_type").style.display = "";
        document.getElementById("result_straight_type").style.display = "none";
    }
    else if(ep1_no.checked == true) {
        form_row_hider_parabola_type();
        form_row_shower_straight_type();
        document.getElementById("result_parabola_type").style.display = "none";
        document.getElementById("result_straight_type").style.display = "";
        
    } 
}
function calculate_parabolic_camber() {
    var width = document.getElementById("width_of_the_road_parabola").value;
    var slope = document.getElementById("slope_of_the_road_parabola").value;
    var x = document.getElementById("horizontal_compo_of_the_road_parabola").value;

    width = parseFloat(width);
    slope = parseFloat(slope);
    x = parseFloat(x);
    

    if(width==0 || isNaN(width) || slope==0 || isNaN(slope)) {
        var result = document.getElementById("result_parabola_type");
        result.style.display= "";
        result.innerHTML = "Error: Values  are incorrect or zeroes" ;
    }
    else {

        y = 2*x*x;

        camber_parabola_type = y/(width*slope);

        var result = document.getElementById("result_parabola_type");
        result.style.display= "";
        result.innerHTML = "The camber is "+camber_parabola_type+" meter.";

    }
}
function calculate_straight_camber() {
    var width = document.getElementById("width_of_the_road_straight").value;
    var slope = document.getElementById("slope_of_the_road_straight").value;
    width = parseFloat(width);
    slope = parseFloat(slope);
    if(width==0 || isNaN(width) || slope==0 || isNaN(slope)) {
        var result = document.getElementById("result_parabola_type");
        result.style.display= "";
        result.innerHTML = "Error: Values  are incorrect or zeroes" ;
    }
    else {
        camber_straight_type = width/(2*slope);
        var result = document.getElementById("result_parabola_type");
        result.style.display= "";
        result.innerHTML = "The camber is "+camber_straight_type+" meter.";
    }
}
function gradient_type_change() {
    var ep1_yes = document.getElementById("decision_gradient_yes");
    var ep1_no = document.getElementById("decision_gradient_no");
    if( ep1_yes.checked ==  true)  { 
        document.getElementById("result_gradient_yes").style.display = "none";
        document.getElementById("result_gradient_no").style.display = "";
        if(camber_parabola_type == 0.0) {
            document.getElementById("result_gradient_no").innerHTML = "Camber not calculated yet.";
        }
        else {
            global_g = 2 * camber_parabola_type ;
            document.getElementById("result_gradient_no").innerHTML = "The gradient is " + (2*camber_parabola_type)+ " meter.";
        } 
        form_row_hider_gradient_no();
    }
    else if(ep1_no.checked == true) {
        document.getElementById("result_gradient_yes").style.display = "";
        document.getElementById("result_gradient_no").style.display = "none";
        form_row_shower_gradient_no();
    } 
}
function calculate_gradient() {
    var camber = document.getElementById("camber_of_gradient_no").value;
    camber = parseFloat(camber);
    if(camber == 0 || isNaN(camber)) {
        document.getElementById("result_gradient_no").style.display = "";
        document.getElementById("result_gradient_no").innerHTML = "Enter valid value of the camber";
    }
    else {
        global_g = 2 *camber;
        document.getElementById("result_gradient_no").style.display = "";
        document.getElementById("result_gradient_no").innerHTML = "The gradient is "+(2*camber)+" unit.";
    }
}
function calculate_compeseted_gradient() {
    var radius = document.getElementById("radius_of_curvature").value;
    
    
    radius = parseFloat(radius);
    
    if(global_g == 0.0 || isNaN(global_g)) {
        document.getElementById("result_compeseted_gradient").style.display = "";
        document.getElementById("result_compeseted_gradient").innerHTML = "Calculate gradient first. Unknown gradient.";
    }    
    else if(radius == 0 || isNaN(radius)) {
        document.getElementById("result_compeseted_gradient").style.display = "";
        document.getElementById("result_compeseted_gradient").innerHTML = "Enter valid value of the camber";
    }
    else {
    
        var gc = Math.min(75/radius,(30+radius)/radius);

        global_cg = global_g - gc ;
        
        if(global_cg >= 4) {
            document.getElementById("result_compeseted_gradient").style.display = "";
            document.getElementById("result_compeseted_gradient").innerHTML = "The compensated gradient is "+(global_cg)+"% .";
        }
        else {
            document.getElementById("result_compeseted_gradient").style.display = "";
            document.getElementById("result_compeseted_gradient").innerHTML = "The compensated gradient is 4% .";
        
        }
    }
}





















/*
    // FOR RADIO BUTTONSone_ep1_yes


    function check_radio_buttons_first() {
        
        var ep1_yes = document.getElementById("one_ep1_yes");
        var ep1_no = document.getElementById("one_ep1_no");
    
        if( ep1_yes.checked ==  true)  { 

            hide_element_row_hider1();
        
            show_element_row_hider2();
            show_element_row_hider3();
               
        }
        else if(ep1_no.checked == true) {
            show_element_row_hider1();        
        } 
    }
    
    function check_radio_buttons_second() {
        var ep2_yes = document.getElementById("one_ep2_yes");
        var ep2_no = document.getElementById("one_ep2_no");
    
        if( ep2_yes.checked ==  true)  {
            hide_element_row_hider2();

            show_element_row_hider1();
            show_element_row_hider3();
        }
    
        else if(ep2_no.checked == true) {
            show_element_row_hider2();        
        } 
    }
    
    function check_radio_buttons_third() {
        var ep3_yes = document.getElementById("one_ep3_yes");
        var ep3_no = document.getElementById("one_ep3_no");
    
        if( ep3_yes.checked ==  true)  {
            hide_element_row_hider3();

            show_element_row_hider1();
            show_element_row_hider2();
        }
    
        else if(ep3_no.checked == true) {
            show_element_row_hider3();        
        } 
    }

    
    //calculations

    
    function calculate_camber() {

        var w = document.getElementById("one_width_one").value;
        var s = document.getElementById("one_slope_one").value;
        var h = document.getElementById("one_horizontal_component_one").value;
        
        w = parseFloat(w);
        s = parseFloat(s);
        h = parseFloat(h);
        
        z1 = 2*(h*h);
        z2 = ( z1 ) / ( w * s ); 
        //error checking remaining isNaN() function 


        var result = document.getElementById("result_block_one");
        result.style.display =" block";

        document.getElementById("result_of_camber").innerHTML = "";
        document.getElementById("result_of_gradient").innerHTML = "";
        document.getElementById("result_of_composite_gradient").innerHTML = "";

        document.getElementById("result_of_camber").innerHTML +="\nValue of Camber  is : "+ z2 +" m.";
        
    }

    function calculate_gradient() {
        
                var c = document.getElementById("one_camber_two").value;
                
                c = parseFloat(c);
                
                z1 = 2 * ( c );

                //error checking remaining isNaN() function 
        
        
                var result = document.getElementById("result_block_one");
                result.style.display =" block";
        
                document.getElementById("result_of_camber").innerHTML = "";
                document.getElementById("result_of_gradient").innerHTML = "";
                document.getElementById("result_of_composite_gradient").innerHTML = "";
        
                document.getElementById("result_of_gradient").innerHTML +="\nValue of gradient is : "+ z1 ;
                
    }
   
    function calculate_compensated_gradient() {

                var r = document.getElementById("one_radius_three").value;
                
                r = parseFloat(r);
                
                z1 = 25 / r ;


                var result = document.getElementById("result_block_one");
                result.style.display =" block";

                document.getElementById("result_of_camber").innerHTML = "";
                document.getElementById("result_of_gradient").innerHTML = "";
                document.getElementById("result_of_composite_gradient").innerHTML = "";

                document.getElementById("result_of_composite_gradient").innerHTML +="\nValue of Compensated Gradient  is : "+ z1 ;
                
    }


            
/*****************************************
 * 
 * 
    function calculate_set_back_distance() {
        
        var l = document.getElementById("fourth_length_three").value;
        var ssd = document.getElementById("fourth_ssd_three").value;
        var r = document.getElementById("fourth_radius_three").value;
        
        l = parseFloat(l);
        r = parseFloat(r);
        r = parseFloat(r);
        
        if ( l > ssd ){
            var z1 = ( ssd * ssd ) / ( 8* r) ;
        }
        else if ( l < ssd ){
            var z2 = ( l * ( 25 - l ) ) / ( 8*r ) ;
        }
        else {
            var str="Please Enter the Proper values : ";
        }


        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";
        

        document.getElementById("result_of_super_elivation").innerHTML = "";
        document.getElementById("result_of_extra_winding_of_road").innerHTML = "";
        document.getElementById("result_of_set_back_distance").innerHTML = "";
        document.getElementById("result_of_curve_resisrance").innerHTML = "";
        
        if ( l > ssd ) {
            document.getElementById("result_of_set_back_distance").innerHTML ="Set back Distance is : "+ z1 +" m.";            
        }
        else if ( l < ssd ) {
            document.getElementById("result_of_set_back_distance").innerHTML ="Set back distance is : "+ z2 +" m.";            
            }
        else {
            document.getElementById("result_of_set_back_distance").innerHTML =" "+ str ;                        
        }        
    }


************************************************88*/