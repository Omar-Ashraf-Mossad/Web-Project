function accept(a)
{
    
       if( confirm('Are you sure that you want to accept?'))
       {
        document.getElementById(a).innerHTML="Accepted";
        x=new Date(window.localStorage.getItem("From"));
        y=new Date(window.localStorage.getItem("to"));

        difference = (y.getTime()-x.getTime())/(1000*3600*24);

        window.localStorage.setItem("vacation",parseInt(window.localStorage.getItem("vacation"))-difference);
        window.localStorage.setItem("actual",parseInt(window.localStorage.getItem("actual"))+difference);
        window.localStorage.setItem("number_of_requests",parseInt(window.localStorage.getItem("number_of_requests"))-1);

        window.localStorage.removeItem("From");
        window.localStorage.removeItem("to");

        remove_buttons(a);  
       } 
    
    
      
}
function reject(a)
{

        
        if(confirm('Are you sure that you want to reject?'))
        { document.getElementById(a).innerHTML="Rejected";  remove_buttons(a);
         window.localStorage.setItem("number_of_requests",parseInt(window.localStorage.getItem("number_of_requests"))-1);

         window.localStorage.removeItem("From");
         window.localStorage.removeItem("to");
        }
    
    
   
}


function remove_buttons(a)
{
    p=document.getElementById(a).parentNode;
    c=p.children;

    
       
            p.removeChild(c[7]);
            p.removeChild(c[7]);
        


    


}

function make_request(a)
{
        a=document.getElementById(a).innerHTML;
        window.localStorage.setItem("id",a);
        window.location.href="VacationForm.html";
}

function get_id()
{
        document.getElementById("id").value=window.localStorage.getItem("id");
        window.localStorage.removeItem("id");
        if(window.localStorage.getItem("status")==1)
        {
        document.getElementById("status").innerHTML="The opereation terminated successfully";
        document.getElementById("status").style.backgroundColor="#7FFF00";
        window.localStorage.removeItem("status");
        }
}