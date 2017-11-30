function calculate_infiltration() {
    var fo;
    var fc;
    var a;
    var t;
    var k;
    fo = document.getElementById("initial_rate_of_infiltration").value;
    fc = document.getElementById("final_constant_rate_of_infiltration").value;
    a = document.getElementById("shaded_area").value;
    t = document.getElementById("time_for_storm").value;
    fo=parseFloat(fo);
    fc=parseFloat(fc);
    a=parseFloat(a);
    t=parseFloat(t);

    k = (fo-fc)/a;

    var second_term = (fo-fc) * Math.exp((-k)*t);
    
    rate_of_infiltration = fc + second_term;
    
    infiltrationFound = true;
    var result = document.getElementById("result_block_fifth");
    result.style.display = "block";

    document.getElementById("result_infiltration").innerHTML = " Rate of infiltration at the time "+t+" is : " + rate_of_infiltration +" mm/hr.";
    rate_of_infiltration = rate_of_infiltration * t /1000;
    document.getElementById("result_infiltration").innerHTML += "</br><br/> Depth of infiltration at the time "+t+" is : " + rate_of_infiltration +" m.";

}