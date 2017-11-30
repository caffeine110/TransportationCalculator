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
        
         hide_element_row_hider3 = function() {
             $('.row_hider').css("display","none");
             $('.row_hider_ep3_no').css("display","");
         }
         show_element_row_hider3 = function() {
             $('.row_hider').css("display","");
             $('.row_hider_ep3_no').css("display","none");
         }


        /***** extra for ep e4 */
        $('.row_hider_ep4_no').css("display","none");
        
         hide_element_row_hider4 = function() {
             $('.row_hider').css("display","none");
             $('.row_hider_ep4_no').css("display","");
         }
         show_element_row_hider4 = function() {
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
            show_element_row_hider2();
            show_element_row_hider3();
            show_element_row_hider4();
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
            show_element_row_hider1();
            show_element_row_hider3();
            show_element_row_hider4();
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
            show_element_row_hider1();
            show_element_row_hider2();
            show_element_row_hider4();
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
            show_element_row_hider1();
            show_element_row_hider2();
            show_element_row_hider3();
        }
    
        else if(ep4_no.checked == true) {
            show_element_row_hider4();   
                 
        } 
    }
    
    //calculations
    
    function calculate_super_elivation() {

        var v = document.getElementById("fourth_velocity_one").value;
        var r = document.getElementById("fourth_radius_one").value;

        v = parseFloat(v);
        r = parseFloat(r);
        

        //error checking remaining isNaN() function 



        var u = 0.15 ;
        var z1 = (v*v) / ( 127*r ) - u ;

        var z2 = ( v * v ) / ( 127 * r ) ;

        var z3 = ( v * v ) / (225 * r) ;

        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";

        document.getElementById("result_of_super_elivation").innerHTML = "";
        document.getElementById("result_of_extra_winding_of_road").innerHTML = "";
        document.getElementById("result_of_set_back_distance").innerHTML = "";
        document.getElementById("result_of_curve_resisrance").innerHTML = "";

        document.getElementById("result_of_super_elivation").innerHTML ="General super elivation is : "+ z1 +" m.";
        document.getElementById("result_of_super_elivation").innerHTML +="Equilibrium super elivtion is : "+ z2 +" m.";
        document.getElementById("result_of_super_elivation").innerHTML +="\nAssign super elivation is : "+ z3 +" m.";
        
    }
    
    function calculate_extra_winding_of_road() {
        
        var v = document.getElementById("fourth_velocity_two").value;
        var r = document.getElementById("fourth_radius_two").value;
        var n = document.getElementById("fourth_lanes_two").value;
        var l = document.getElementById("fourth_length_two").value;
    
        v = parseFloat(v);
        r = parseFloat(r);
        n = parseFloat(n);
        l = parseFloat(l);
        
        var z1 = ( n * l * l ) / ( 2 * r );
        var z2 = ( v ) / ( 3.5* Math.sqrt(r) );

        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";
        
        //printing result 

        document.getElementById("result_of_super_elivation").innerHTML = "";
        document.getElementById("result_of_extra_winding_of_road").innerHTML = "";
        document.getElementById("result_of_set_back_distance").innerHTML = "";
        document.getElementById("result_of_curve_resisrance").innerHTML = "";

        document.getElementById("result_of_extra_winding_of_road").innerHTML = "Extra winding of vehical is : "+z1+z2+" m.";
        
    }

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

    function calculate_curve_resistance() {

        var t = document.getElementById("fourth_tractive_forse_four").value;
        var a = document.getElementById("fourth_turing_angle_four").value;
        
        
        t = parseFloat(t);
        a = parseInt(a);
        
        var z1 = t * ( 1- Math.cos(a) );
    
        var result = document.getElementById("result_block_fourth");
        result.style.display =" block";
        
        document.getElementById("result_of_super_elivation").innerHTML = "";
        document.getElementById("result_of_extra_winding_of_road").innerHTML = "";
        document.getElementById("result_of_set_back_distance").innerHTML = "";
        document.getElementById("result_of_curve_resisrance").innerHTML = "";

        document.getElementById("result_of_curve_resisrance").innerHTML ="Curve Resistance is : "+ z1 +" m.";
    }