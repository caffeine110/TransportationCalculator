$(document).ready(function() {
    
    
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
        
         hide_element_row_hider2 = function() {
             $('.row_hider').css("display","none");
             $('.row_hider_ep3_no').css("display","");
         }
         show_element_row_hider2 = function() {
             $('.row_hider').css("display","");
             $('.row_hider_ep3_no').css("display","none");
         }


        /***** extra for ep e4 */
        $('.row_hider_ep4_no').css("display","none");
        
         hide_element_row_hider2 = function() {
             $('.row_hider').css("display","none");
             $('.row_hider_ep4_no').css("display","");
         }
         show_element_row_hider2 = function() {
             $('.row_hider').css("display","");
             $('.row_hider_ep4_no').css("display","none");
         }

});
    
    
    // FOR RADIO BUTTONS


    function check_radio_buttons_1() {
        
        var ep1_yes = document.getElementById("fourth_ep1_yes");
        var ep1_no = document.getElementById("fourth_ep1_no");
    
        if( ep1_yes.checked ==  true)  {      
            hide_element_row_hider1();
        }
        else if(ep1_no.checked == true) {
            show_element_row_hider1();        
        } 
    }
    
    function check_radio_buttons_2() {
        var ep2_yes = document.getElementById("fourth_ep2_yes");
        var ep2_no = document.getElementById("fourth_ep2_no");
    
        if( ep2_yes.checked ==  true)  {
            hide_element_row_hider2();
        }
    
        else if(ep2_no.checked == true) {
            show_element_row_hider2();        
        } 
    }
    
    function check_radio_buttons_3() {
        var ep3_yes = document.getElementById("fourth_ep3_yes");
        var ep3_no = document.getElementById("fourth_ep3_no");
    
        if( ep3_yes.checked ==  true)  {
            hide_element_row_hider3();
        }
    
        else if(ep3_no.checked == true) {
            show_element_row_hider3();        
        } 
    }

    function check_radio_buttons_4() {
        var ep4_yes = document.getElementById("fourth_ep4_yes");
        var ep4_no = document.getElementById("fourth_ep4_no");
    
        if( ep4_yes.checked ==  true)  {
            hide_element_row_hider4();
        }
    
        else if(ep4_no.checked == true) {
            show_element_row_hider4();        
        } 
    }
    
    //calculations
    
    function calculate_super_elivation() {

        v = document.getElementById("fourth_velocity_one").value;
        r = document.getElementById("fourth_radius_one").value;

        v = parseFloat(v);
        r = parseFloat(r);
        
        var u = 0.15 ;
        var z1 = (v*v)/( 127*r ) - u ;

        var z2 = ( v * v ) / ( 127 * r ) ;

        var z3 = ( v * v ) / (225 * r) ;

        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";
        
        document.getElementById("result_of_super_elivation").innerHTML ="General super elivation is : "+ z1 +" m.";
        document.getElementById("result_of_super_elivation").innerHTML ="Equilibrium super elivtion is : "+ z2 +" m.";
        document.getElementById("result_of_super_elivation").innerHTML ="assign super elivation is : "+ z3 +" m.";
        
    }
    
    function calculate_extra_winding_of_road() {
        
        v = document.getElementById("fourth_velocity_two").value;
        r = document.getElementById("fourth_radius_two").value;
        n = document.getElementById("fourth_lanes_two").value;
        l = document.getElementById("fourth_length_two").value;
    
        v = parseFloat(v);
        r = parseFloat(r);
        n = parseFloat(n);
        l = parseFloat(l);
        
        var z1 = ( n * l * l ) / ( 2 * r );
        var z2 = ( v ) / ( 3.5* Math.sqrt(r) );

        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";
                
        document.getElementById("result_of_extra_winding_of_road").innerHTML ="extra winding of vehical is : "+ z1+z2 +" m.";
        
    }

    function calculate_set_back_distance() {
        
        v = document.getElementById("fourth_velocity_three").value;
        r = document.getElementById("fourth_ssd_three").value;
        r = document.getElementById("fourth_radius_three").value;
        
        v = parseFloat(v);
        r = parseFloat(r);
        r = parseFloat(r);
        
        if ()


        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";
                
        document.getElementById("result_of_extra_winding_of_road").innerHTML ="extra winding of road  is : "+ z1+z2+z3+z4 +" m.";
        
    }

    function calculate_calculate_curve_resistance() {

        r = document.getElementById("reaction-two").value;
        l = document.getElementById("length-two").value;
        a = document.getElementById("acceleration-two").value;
        v1 = document.getElementById("velocity_rev").value;
        
        
        v = parseFloat(v);
        l = parseFloat(l);
        a = parseFloat(a);
        v1 = parseFloat(v1);
        
        var z1 = 0.278 * v * r ;
        var z2 = 2 * (( 0.2 * v) + l ) ;
        var z3 = 0.278 * v * Math.sqrt(45/a) ;
        var z4 = 0.278 * v1 * (Math.sqrt(45/a)) ;
    
        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";
        
        document.getElementById("result_of_two_way").innerHTML ="Overtaking sight distance of Two way vehical is : "+ z1+z2+z3+z4 +" m.";
    }