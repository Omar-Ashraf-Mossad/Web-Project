function delete1()
{
     if(window.sessionStorage.getItem("found")!="true")
     {
         w=document.getElementById("id");
         w.nextElementSibling.textContent="*This field must be filled";
         return false;
     }
     else
     {
        w.nextElementSibling.textContent="";
   
        if(confirm('Are you sure that you want delete'))
        {
           add_status();
           window.sessionStorage.removeItem("found");
            delete_data();
            return true;
        } 
        
     }   
}
function search_delete()
{
    if(!search_by_id())
    {
        return false;
    }
    else
    {
        get_data();
    }
}

function get_data()
{
   document.getElementById("name").innerHTML= window.localStorage.getItem("Name");
   document.getElementById("email").innerHTML= window.localStorage.getItem("email");
   document.getElementById("address").innerHTML= window.localStorage.getItem("Address");
   document.getElementById("number").innerHTML= window.localStorage.getItem("Number");
   document.getElementById("gender").innerHTML= window.localStorage.getItem("Gender");
   document.getElementById("s").innerHTML= window.localStorage.getItem("Status");
   document.getElementById("available_days").innerHTML= window.localStorage.getItem("vacation");
   document.getElementById("actual_days").innerHTML= window.localStorage.getItem("actual");
   document.getElementById("salary").innerHTML= window.localStorage.getItem("Salary");
   document.getElementById("dob").innerHTML= window.localStorage.getItem("DOB");
}

function delete_data()
{
         window.localStorage.removeItem("Name");
         window.localStorage.removeItem("Id");
         window.localStorage.removeItem("email");
         window.localStorage.removeItem("Address");
         window.localStorage.removeItem("Number");
         window.localStorage.removeItem("Gender");
         window.localStorage.removeItem("Status");
         window.localStorage.removeItem("vacation");
         window.localStorage.removeItem("actual");
         window.localStorage.removeItem("Salary");
         window.localStorage.removeItem("DOB");
}