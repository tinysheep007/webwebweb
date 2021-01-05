var nothingMouseOverCount=0;
function nothingStart(){
    document.getElementById("nothing").innerHTML="There is really nothing why do you even hover over it";
    nothingMouseOverCount++;
}
function nothingBack(){
    document.getElementById("nothing").innerHTML="You checked it "+nothingMouseOverCount+" times bro";
}

function sidebarHover(element){
    element.style.borderRadius = "0px";
    element.style.border="dashed 5px";
    element.style.fontSize="35px";
}

function sidebarUnhover(element){
    element.style.borderRadius = "50px";
    element.style.border="none";
    element.style.fontSize="25px";
}

function headerHover(element){
    element.style.width="100%";
    element.style.marginLeft="0px";
    element.style.background="linear-gradient(to top, #33ccff 0%, #ff99cc 100%)";
    document.getElementById("fallFlip").style.display="inline-block";
    document.getElementById("fallGuysTopRight").style.display="none";

    

   
}

function headerUnhover(element){
    element.style.width="75%";
    element.style.marginLeft="10%";
    element.style.background="linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)";
    document.getElementById("fallFlip").style.display="none";
    document.getElementById("fallGuysTopRight").style.display="inline-block";
    document.getElementById("chris").display="none";
    
}

function QuickQsubmit(){
    if(document.getElementById("QuickQinput").value==="N"){
        alert("wRONG");
    }
    else if(document.getElementById("QuickQinput").value==="Y"){
        alert("CorrEcT SeNoR");
    }
    else{
        alert("just ansswer it with Y or N!!!");
    }
}


function changeCatPosition(element){
    element.style.display="none";
}

function showCat(){
    document.getElementById("realCat").style.display="block";
}

