function check_request(id)
{
    
            if(id.length==0)
            {
                alert("Something went wrong");
                window.location.href="http://127.0.0.1:8000/app/Home";

            }
            
    clear_span();
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/check/request/"+id);
     
    xhttp.onload = function(){
        req = xhttp.responseText;
        id=document.getElementById("id");
        if(req=="Not found")
        {
            alert("This Employee does not exist");
            window.location.href="http://127.0.0.1:8000/app/Home";
        }
         if(req=="True")
         {
                id.nextElementSibling.textContent="*This employee has a request in queue you can't request a new one";
         }
         else
         {
            id=document.getElementById("id");
            id.nextElementSibling.textContent="";
            make_request(id.value);

         }
         
        }
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
}
function create_request()
{
    w=parseInt(document.getElementById("id").value)
    check_request(w);
    return false;
}


function make_request(id)
{
    if(id.length==0)
    {
        document.getElementById("fail").innerHTML="*You Can't request a vacation with an empty id search for the employee to request a vacation";
         return false;
    }
    w=document.getElementsByName("input");
    document.getElementById("fail").innerHTML="";

    for( i of w)
    {
        if(i.value.length==0)
        {
            i.nextElementSibling.textContent="*This Field Can't be empty";
            return false;
        }
        i.nextElementSibling.textContent="";

    }
    x=new Date(document.getElementById("from").value);
    y=new Date(document.getElementById("to").value);

    if(y<x)
    {
        document.getElementById("fail").innerHTML="*To Date can't be smaller than from date";
        return false;
    }
   
    clear_span();

    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/check/duration/"+id);
     
    xhttp.onload = function(){
        req = xhttp.responseText;
        x=new Date(document.getElementById("from").value);
        y=new Date(document.getElementById("to").value);
   
       
        difference = (y.getTime()-x.getTime())/(1000*3600*24);
        if(difference==0)
        {
            difference=1;
        }
        if(difference>req)
        {
           document.getElementById("fail").innerHTML="*The days you requested exceed the available number of vacation days for this employee.";
        }
        else save_request(id,difference);
         
        }
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
    
    
}

function save_request(id,difference)
{
   
    clear_span();
    xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://127.0.0.1:8000/app/save/request/");
     
    xhttp.onload = function(){

            alert("Success");
            window.location.href="http://127.0.0.1:8000/app/Home"
        }
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    object={
        id:id,
        from:document.getElementById("from").value,
        to:document.getElementById("to").value,
        reason:document.getElementById("reason").value,
        duration:difference
    }
    xhttp.send(JSON.stringify(object));
    
}

function form()
{
    get_id();
    id=document.getElementById("id");
    if(id.value.length==0)
    {
         alert("Something wentwrong");
         window.location.href="http://127.0.0.1:8000/app/Home"
    }
}