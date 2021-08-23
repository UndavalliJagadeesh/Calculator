var num;
var n,res,syB;
function onscr(n){
    document.getElementById("res").value+=n
}
function rem(){
    num=document.getElementById("res").value
    num=num.slice(0,num.length-1)
    document.getElementById("res").value=num
}
function add(num){
    var num1=parseFloat(num.slice(0,num.indexOf('+')));
    var num2=parseFloat(num.slice(num.indexOf('+')+1,num.length));
    var ans=num1+num2;
    return ans;
}
function sub(num){
    var num1=parseFloat(num.slice(0,num.indexOf('-')));
    var num2=parseFloat(num.slice(num.indexOf('-')+1,num.length));
    var ans= num1-num2;
    return ans;
}
function mul(num){
    var num1=parseFloat(num.slice(0,num.indexOf('*')));
    var num2=parseFloat(num.slice(num.indexOf('*')+1,num.length));
    var ans= num1*num2;
    return ans;
}
function divide(num){
    var num1=parseFloat(num.slice(0,num.indexOf('/')));
    var num2=parseFloat(num.slice(num.indexOf('/')+1,num.length));
    if(num2==0){
        var ans="Undefined"
        return ans
    }
    var ans= num1/num2; 
    return ans;
}
function sol(){
    num=document.getElementById("res").value
    if(num.includes('+')){
        document.getElementById("res").value=add(num);
    }else if(num.includes('-')){
        document.getElementById("res").value=sub(num);
    }else if(num.includes('*')){
        document.getElementById("res").value=mul(num);
    }else if(num.includes('/')){
        document.getElementById("res").value=divide(num);
    }
}

function clr(){
    document.getElementById("res").value=""
}
