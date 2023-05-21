function create_request()
{
    if(document.getElementById("id").value.length==0)
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
     difference = (y.getTime()-x.getTime())/(1000*3600*24);
     if(difference==0)
     {
         difference=1;
     }
     if(difference>window.localStorage.getItem("vacation"))
     {
        document.getElementById("fail").innerHTML="*The days you requested exceed the available number of vacation days for this employee.";
        return false;
     }
    add_status();
    window.localStorage.setItem("From",document.getElementById("from").value);
    window.localStorage.setItem("to",document.getElementById("to").value);
    window.localStorage.setItem("reason",document.getElementById("reason").value);
    window.localStorage.setItem("number_of_requests",1);
    return true;
}

function form()
{
    get_id();
    get_status();
}