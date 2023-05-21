


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
        window.location.href="http://127.0.0.1:8000/app/VacationForm";
}

function get_id()
{
        document.getElementById("id").value=window.localStorage.getItem("id");
        window.localStorage.removeItem("id");
       
}