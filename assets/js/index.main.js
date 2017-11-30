
function show() {
    alert(average_ppt_by_iso);
}



/* blocks display hide functinos */

function show_block(block) {
    if(block=="first") { 
        var block1 = document.getElementById("block-one");
        block1.style.display = "block";
    }   
    if(block=="second") {
        var block2 = document.getElementById("block-two");
        block2.style.display = "block";
    }
    if(block=="third") {
        var block3 = document.getElementById("block-third");
        block3.style.display="block";

    }
    if(block=="fourth") {
        var block4 = document.getElementById("block-fourth");
        block4.style.display="block";
    }
    if(block=="fifth") {
        var block5 = document.getElementById("block-fifth");
        block5.style.display = "block";
    }
    if(block=="sixth") {
        var block6 = document.getElementById("block-sixth");
        block6.style.display = "block";
    }
}
function close_all() {
    var block1 = document.getElementById("block-one");
    var block2 = document.getElementById("block-two");
    var block3 = document.getElementById("block-third");
    var block4 = document.getElementById("block-fourth");
    var block5 = document.getElementById("block-fifth");
    var block6 = document.getElementById("block-sixth");
    block1.style.display = "none";   
    block2.style.display = "none";   
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
}

function close_result() {
    var resultBlock = document.getElementById("result");
    resultBlock.style.display="none";    
}
function close_result_block_two() {
    var resultBlock = document.getElementById("result_block_two");
    resultBlock.style.display="none";    
}
function close_result_block_third() {
    var resultBlock = document.getElementById("result_block_third");
    resultBlock.style.display="none";    
}
function close_result_block_fourth() {
    var resultBlock = document.getElementById("result_block_fourth");
    resultBlock.style.display="none";    
}
function close_result_block_fifth() {
    var resultBlock = document.getElementById("result_block_fifth");
    resultBlock.style.display="none";    
}
function close_result_block_sixth() {
    var resultBlock = document.getElementById("result_block_sixth");
    resultBlock.style.display="none";    
}