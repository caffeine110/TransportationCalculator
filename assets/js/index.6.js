function calculate_transition_summit_curve() {
    
        var ssd = document.getElementById("sixth_safe_sight_distance_one").value;
        var n = document.getElementById("sixth_daviation_one").value;
        var osd = document.getElementById("sixth_safe_osd").value;



        ssd=parseFloat(ssd);
        n=parseFloat(n);
        osd=parseFloat(osd);




        if(ssd>0) {

        var l = ( n * ssd * ssd ) / 4.4 ;
        
               if ( l >= ssd) {
                       var z1 = l ;
               }
               else if (l < ssd) {
                   var z2 = 2*ssd - ( 4.4 / n ) ;
       
               }
               else {
                   var str="please enter the proper values : "
               }
           
               var result = document.getElementById("result_block_sixth");
               result.style.display = "block";
           
       
               if ( l >= ssd) {
                   document.getElementById("verticle_summit_curve").innerHTML = "Length of vertical curve ( Summit ) curve is : " +z1+" m.";
                           }
               else if (l < ssd) {
                   document.getElementById("verticle_summit_curve").innerHTML = "Length of vertical curve ( Summit ) curve is : " +z2+" m.";
               }
               else {
                   document.getElementById("verticle_summit_curve").innerHTML = " " + str;
               }

        }

        else if(osd>0) {

            
            var l = ( n * osd * osd ) / 9.6 ;
        
               if ( l >= osd) {
                       var z1 = l ;
               }
               else if (l < osd) {
                   var z2 = 2*osd - ( 9.6 / n ) ;
       
               }
               else {
                   var str="please enter the proper values : "
               }
           
               var result = document.getElementById("result_block_sixth");
               result.style.display = "block";
           
       
               if ( l >= osd) {
                   document.getElementById("verticle_summit_curve").innerHTML = "Length of vertical curve ( Summit ) curve is : " +z1+" m.";
                           }
               else if (l < osd) {
                   document.getElementById("verticle_summit_curve").innerHTML = "Length of vertical curve ( Summit ) curve is : " +z2+" m.";
               }
               else {
                   document.getElementById("verticle_summit_curve").innerHTML = " " + str;
               }

        }
        else {
            alert("Values are less than zero");
        }
    }
    //end fun


    function calculate_transition_vally_curve() {
        
            var v = document.getElementById("sixth_velocity_two").value;
            var r = document.getElementById("sixth_daviation_two").value;
            var e = document.getElementById("sixth_safe_distance_two").value;
        
            v=parseFloat(v);
            r=parseFloat(r);
            e=parseFloat(e);
            
            

            l = 0.38 * Math.sqrt(r*v*v*v);

            var confart = l;

            if(l>=e) {
                l = (r*e*e)/(1.5+0.35*e);

            }
            else if(l<e) {
                l=2*e-((1.5+0.035*e)/r);
            }
            else {
                alert("not proper values");

            }

            var i =( 1.6 * e * v * v )/ l;
                      
            var result = document.getElementById("result_block_sixth");
            result.style.display = "block";

            document.getElementById("verticle_vally_curve").innerHTML = "Lenght of the valley curve ";

            document.getElementById("verticle_vally_curve1").innerHTML = "According to confort condition : " +confart+" m.";
            document.getElementById("verticle_vally_curve2").innerHTML = "According to headlight slight distance is : " +l+" m.";
            document.getElementById("verticle_vally_curve3").innerHTML = "Impact factor is : " +l+" m.";
        
        }