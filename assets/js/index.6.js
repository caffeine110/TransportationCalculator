$(document).ready(function() {
    $('.row_hider_ep_no_sixth_block').css("display","none");
    hide_element_row_hider_sixth_block = function() {
        $('.row_hider_ep_no_sixth_block').css("display","");
    }
    show_element_row_hider_sixth_block = function() {
        $('.row_hider_ep_no_sixth_block').css("display","none");
    }
});

function check_radio_buttons_sixth_block() {

    var ep_yes = document.getElementById("ep_yes_sixth_block");
    var ep_no = document.getElementById("ep_no_sixth_block");

    if( ep_yes.checked ==  true)  {
        show_element_row_hider_sixth_block();
    }
    else if(ep_no.checked == true) {
        hide_element_row_hider_sixth_block();        
    } 
}

function calculate_runoff() {
    runoff = 0;
    var s1;
    var s2;
    var all_i;
    var all_o;
    s1 = document.getElementById("initial_depth").value;
    s2 = document.getElementById("final_depth").value;
    all_i = document.getElementById("volume_inflow_reservoir").value;
    all_o = document.getElementById("volume_outflow_reservoir").value;
    s1 = parseFloat(s1);
    s2 = parseFloat(s2);
    all_i = parseFloat(all_i);
    all_o = parseFloat(all_o);

    var ep_yes = document.getElementById("ep_yes_sixth_block");


    if( ep_yes.checked ==  true)  {
        runoff = Pavg_by_arithmatic - depth_of_water_evaporated - Et - rate_of_infiltration - all_o + all_i + (s1-s2) ;
        runoffFound = true;
       
        alert(Pavg_by_arithmatic+" "+runoff +" "+depth_of_water_evaporated+" "+rate_of_infiltration+" "+Et+" ");
         alert(PFounds + " " + probablityFound + " " + evaporationFound + " " +infiltrationFound + " " + infiltrationFound + " " + runoffFound + " " )
    }
    else if( ep_yes.checked == false) {

        runoff = 0.0;
       
        var p=0.0;
        var ev=0.0;
        var et=0.0;
        var i=0.0;

        p = document.getElementById("precipitaion_sixth_block").value;
        ev = document.getElementById("evaporation_sixth_block").value;
        et = document.getElementById("evapotranspiration_sixth_block").value;
        i = document.getElementById("infiltration_sixth_block").value;
        
        p = parseFloat(p);
        ev = parseFloat(ev);
        et = parseFloat(et);
        i = parseFloat(i);

        //alert(p+ " " + ev+ " " +et+ " " +i+ " " );
        
       
        runoff = p - ev - et - i - all_i + all_o + (s1 - s2);

        runoffFound = true;

        


    } 


    var result = document.getElementById("result_block_sixth");
    result.style.display = "block";

    document.getElementById("result_runoff").innerHTML = "o. The runoff from catchment is : " + runoff +" m.";
    document.getElementById("result_runoff").focus();

    
}