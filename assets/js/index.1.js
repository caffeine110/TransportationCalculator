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


});
    
    
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