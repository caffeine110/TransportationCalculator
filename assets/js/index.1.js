

/* coded by Ankush Patil */

//jquery functino to change classees

$(document).ready(function() {

    class_adder = function(id) {
       $(id).addClass("active");
       id=""; 
    }
    class_remover = function(id) {
        $(id).removeClass("active");
        id="";
    }
    clear_forms = function() {
        $('#form').val="";
    }
    $('#block-wrapper-for-iso').css("display","none");

    $('#table_iso').css("display","none");

});



/* first block operatinal functions  */
function calculate_rain_gauge() {
    //taking user input
    var m = document.getElementById("numberOfRainGauge").value;
    var pi_str = document.getElementById("arrayOfRainfalls").value.split(",");
    var areas_str = document.getElementById("arrayOfAreas").value.split(",");
    var error_percentage = document.getElementById("errorPercentage").value;
    var pi = [];
    var areas = [];
    var totalPis = 0.0;
    var totalAreas = 0.0;
    var productSum = 0.0;
    var resultBlock = document.getElementById("result");
    var errors = document.getElementById("block_error");

    m = parseInt(m);

    error_percentage = parseFloat(error_percentage);
    /* checking for errors */
    if( m!=pi_str.length || m==1 || isNaN(m)) {
        
        resultBlock.style.display = "none";
        errors.innerHTML = "You have entered wrong inputs Or m is equal to 1";
    
    }
    else {
        errors.innerHTML = "";
        for(var i=0;i<m;i++) {
            pi[i]=parseFloat(pi_str[i]);
            totalPis += pi[i];
            areas[i] = parseFloat(areas_str[i]);
            totalAreas +=areas[i];
            productSum += ( pi[i]*areas[i] );
        }
        //calculating the p averages by respective methods 
        Pavg_by_arithmatic = totalPis / m;
        Pavg_by_thi = productSum / totalAreas;
        totalPis = 0;
        for(var i=0;i<m;i++) {
            totalPis += (pi[i]-Pavg_by_arithmatic)*(pi[i]-Pavg_by_arithmatic);
        }
        var sigma = Math.sqrt(totalPis/(m-1));
        var cv = (100*sigma)/(Pavg_by_arithmatic);
        number_of_rain_gauge_required = (cv/error_percentage)*(cv/error_percentage);
        totalPis= parseInt(totalPis);
        //print absolute of totalPis
        number_of_rain_gauge_required = Math.round(number_of_rain_gauge_required);
        document.getElementById("numberOfRainGuage").innerHTML = "Number of rainguage required : " + String(number_of_rain_gauge_required);
         /* old iso block 
        var num=0.0;

        for(var i=0;i<m-1;i++) {

            num += areas[i]*((pi[i]+pi[i+1])/2) 
        }
        Pavg_by_iso = num/totalAreas;

        PFounds = true;
        */
        resultBlock.style.display="block";
    }
    //alert(typeof(m)+typeof(error_percentage)+typeof(pi[0])+typeof(areas[0]));
}

/* functions for block 1*/

/* block one hidden functins */
function print_ppt(method) {

    var methodList = document.getElementById("ppt_method");
    var result = document.getElementById("ppt_result");
    var arithmaticButton = document.getElementById("arithmatic_button");
    var thiButton = document.getElementById("thi_button");
    var isoButton = document.getElementById("iso_button");


    if(method=="show") {
        methodList.style.display="block";
    }

    else if(method=="hide") {
        methodList.style.display="none";
        class_remover("#thi_button");
        class_remover("#iso_button");
        class_remover("#arithmatic_button");

        document.getElementById('block-wrapper-for-iso').style.display = "none";
        document.getElementById('result_iso_block_element').innerHTML = "";
        
        result.innerHTML="";
    }
    else if(method=="arithmatic") {
        result.innerHTML = "Average Precipitation by Arithmatic Mean Method is : " + Pavg_by_arithmatic + " cm." ;
        
        class_adder("#arithmatic_button");
        class_remover("#thi_button");
        class_remover("#iso_button");
        document.getElementById('block-wrapper-for-iso').style.display = "none";
        document.getElementById('result_iso_block_element').innerHTML = "";
        
        
        
    }
    else if(method=="thiessen") {   
        result.innerHTML = "Average Precipitation by Thiessen Method is : " + Pavg_by_thi + " cm.";
        
        class_adder("#thi_button");
        class_remover("#arithmatic_button");
        class_remover("#iso_button");
        document.getElementById('block-wrapper-for-iso').style.display = "none";
        document.getElementById('result_iso_block_element').innerHTML = "";
       
        
    }
    else if(method=="isohyetal") {

        var block_iso = document.getElementById("block-wrapper-for-iso");
        block_iso.style.display = "block";
        block_iso.style.marginTop = "-600px";
        result.innerHTML="";


        class_adder("#iso_button");
        class_remover("#thi_button");
        class_remover("#arithmatic_button");
        
    }
}

function create_table_iso() {

    var number_of_columns = document.getElementById('number_of_columns');
    if(number_of_columns.value == 0 || isNaN(number_of_columns.value)) {
        alert("Please enter valid number or the number of columns is zero or string ");
    } 
    else {
        var table = document.getElementById("table_iso");
        var n = parseInt(number_of_columns.value);
        for(i = 1 ;i <= n; i++) {
            table.innerHTML += "<tr>";
            table.innerHTML += '<td>'+(i)+'</td> <td>Enter '+(i)+'<sup>th</sup> Range : <input type="text" placeholder="ab-cd" id="range'+i+'" name="numberOfRainGauge" id="numberOfRainGauge" required /></td> <td>Enter'+(i)+'<sup>th</sup> Area : <input type="text" placeholder="xyz" id="area'+i+'" name="numberOfRainGauge" id="numberOfRainGauge" required /></td>';
            table.innerHTML += "</tr>";
        }
        table.innerHTML += "<tr>";
        table.innerHTML += '<td></td> <td></td><td><input type="submit" id="findIt" value="Find It" onclick="find_iso('+ n +')"/></td>';
        table.innerHTML += "</tr>";
    }
    var ele = document.getElementById('table_iso');
    ele.style.display = "";
}

function find_iso(n) {
    //alert(n);
    //var ele = document.getElementById("area1").value;
    //alert(ele);
    //working fine everythings
    var areas = [];
    var ranges = [];
    for(var i=1;i<=n;i++) {
        ranges[i] = document.getElementById('range'+i).value;
        areas[i] = parseFloat(document.getElementById('area'+i).value);
    }
    areas[0]=0;
    ranges[0]=0;
    
    var p = [];
    var i;
    var sum_of_areas = 0,numrator=0;
    for(i=1;i<=n;i++) {
        var temp = ranges[i].split("-");
        p[i]=parseFloat(temp[0]);
        sum_of_areas +=areas[i];
    }
    if(i==n+1)
        p[i]=parseFloat(temp[1]);

    for(i=1;i<=n;i++) {
        numrator += areas[i] * ((p[i]+p[i+1])/2 )
    }

    Pavg_by_iso = numrator/sum_of_areas;
    
    document.getElementById("result_iso_block_element").innerHTML = "Average by isoheytal Method is : <span class='blue'>"+ String(Pavg_by_iso) +'</span>';
    

    //checked input alert(areas+" "+ranges); alert(p);
    //checked type alert(typeof(areas[2])+" "+typeof(ranges[2]));
}