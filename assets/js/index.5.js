function calculate_transition_curve() {
    
        v = document.getElementById("fifth_velocity_one").value;
        r = document.getElementById("fifth_radius_one").value;
        w = document.getElementById("fifth_width_one").value;
        e = document.getElementById("fifth_winding_one").value;
        m = document.getElementById("fifth_elivation_one").value;
    
        v=parseFloat(v);
        r=parseFloat(r);
        w=parseFloat(w);
        e=parseFloat(e);
        m=parseFloat(m);
        
        z1 = (( w + r ) * ( v * m * e ) / 2);
    
        
        
        var result = document.getElementById("result_block_fifth");
        result.style.display = "block";
        alert(z1);
    
        document.getElementById("safe_sight").innerHTML = "Length of transitional curve is : "+z1+" m.";
    
    }