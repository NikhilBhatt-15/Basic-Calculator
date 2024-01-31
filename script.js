

function clearinput(){
    document.getElementById("output").value="";
}
function deleteinput(){
    

    let  output=String(document.getElementById("output").value);
    let x = output.slice(0,output.length-1);
    document.getElementById("output").value=x;

}

function  addtoOutput(str){
    
    let x = String(document.getElementById("output").value);
    if(x.length==15){
        alert('Maximum length of input is 15 characters');
        return;
    }
    x=x+str;
    document.getElementById("output").value=x;
}

function checkinput(){
    let x = document.getElementById("output").value;
    x.replaceAll(" ","");
    let re=/^[a-zA-Z]/;
    return re.test(x);
}

function equals_to(){
    if(1){
        let a = document.getElementById("output").value;
        console.log(a);
        let x = eval(a);
        console.log(x);
        document.getElementById("output").value=x;
    }
    else{
        alert("Invalid Input");
    }

} 