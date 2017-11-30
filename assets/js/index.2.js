function calculate_safe_sight_distance() {
    var r = document.getElementById("reaction").value;
    var v = document.getElementById("velocity").value;
    var s = document.getElementById("slope").value;
    var b = document.getElementById("breaking").value;
    var l = document.getElementById("longitudinal").value;
    
    r = parseFloat(r);
    v = parseFloat(v);
    s = parseFloat(s);
    v = parseFloat(v);
    l = parseFloat(l);
    
    var z1 = 0.278 * v * r ;
    var z2 = v * v ;
    var z3 = 254 * ( l * Math.tan(s)) * b ;


        var result = document.getElementById("result_block_two");
        result.style.display= "block";
        document.getElementById("safe_sight_distance").innerHTML = "Safe Sight distance() : " + z1+z2+z3 +" m";   
        
}