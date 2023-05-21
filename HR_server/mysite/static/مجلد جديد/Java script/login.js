//function for validation password
function validate_password(){

 psw=document.getElementsByName("pass")[0]. value;
if(psw.length<8){

alert("password length must be atleast 8 characters");
return false;

}

else if(psw.length>15){

    alert("password shouldn't exceed 15 charecters");
    return false;
}
else{
    return true;
}

}

//function for validation id
function  validate_id()
{
     x=parseInt(document.getElementById("id").value);

    if(x<=0)
    {
        alert("Id cannont accept negative numbers");
        return false;
    }
    else if(x>99999)
    {
        alert("Id cannot exceed 5 digits");
        return false;
    } 
        return true;
}

//function for validation name
function validate_name()
{
    z=document.getElementById("ename").value;

    for(i in z)
    {
        if(z[i]==" ")
        {
            alert("Name cannot have spaces");
            return false;
        }

        if(!isNaN( z[i]))
        { alert("Name cannot have numbers");  return false;}
        
       
    }
    return true;
    

}



function both_func(){

if(validate_name){
    if(validate_id())    
{
    if(validate_password())
        window.location.href="Home.html";
}

}
return false;
}

  
  