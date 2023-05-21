function search_edit()
{
    if(!search_by_id())
    {
        return false;
    }
    else
    {
        get_data2();
        return true;
    }
}

function enable_edit()
        {
            if(window.sessionStorage.getItem("found")!="true")
            {
                w=document.getElementById("id");
                if(w.value.length==0)
                {
                    w.nextElementSibling.textContent="*This field must be filled";
                     return false;
                }
                w.nextElementSibling.textContent="*Use the search button to search for the employee";
                return false;
            }
            else
            {
                w=document.getElementById("id");
               w.nextElementSibling.textContent="";
               x=document.getElementsByClassName("myinput");
        
               for(i in x){x[i].disabled=false;}             
            }
            
        }

        function save_edit()
        {
            if(!search_by_id())
            {
                 return false;
            }
              else
             {
                  edit_data();
                return true;
         }
      }
function edit()
{
    if(window.sessionStorage.getItem("found")!="true")
    {
        w=document.getElementById("id");
        if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This field must be filled";
             return false;
        }
        w.nextElementSibling.textContent="*Use the search button to search for the employee";
        return false;
    }
    document.getElementById("status").innerHTML="";
    if(!validate_name())
    {
        return false;
    }
 
   if(!validate_email())
   {
       return false;
   }
   if(!validate_address())
   {
       return false;
   }
   
   if(!validate_phone())
   {return false;}

   if(!validate_number())
   {
        return false;
   }
   if(!validate_date())
   {
       return false;
   }


        add_status(); 
        edit_data();
        return true;
    

}
 function edit_data()
{

        window.localStorage.setItem("Name",document.getElementById("ename").value);
        window.localStorage.setItem("Address",document.getElementById("eaddress").value);
        window.localStorage.setItem("Number",document.getElementById("phone").value);
        window.localStorage.setItem("email",document.getElementById("email").value);
        window.localStorage.setItem("Gender",document.getElementById("gender").value);
        window.localStorage.setItem("Status",document.getElementById("s").value);
        window.localStorage.setItem("vacation",document.getElementById("available_days").value);
        window.localStorage.setItem("actual",document.getElementById("actual_days").value);
        window.localStorage.setItem("Salary",document.getElementById("salary").value);
        window.localStorage.setItem("DOB",document.getElementById("date").value);
}

function get_data2()
{
   document.getElementById("ename").value= window.localStorage.getItem("Name");
   document.getElementById("email").value= window.localStorage.getItem("email");
   document.getElementById("eaddress").value= window.localStorage.getItem("Address");
   document.getElementById("phone").value= window.localStorage.getItem("Number");
   document.getElementById("gender").value= window.localStorage.getItem("Gender");
   document.getElementById("s").value= window.localStorage.getItem("Status");
   document.getElementById("available_days").value= window.localStorage.getItem("vacation");
   document.getElementById("actual_days").value= window.localStorage.getItem("actual");
   document.getElementById("salary").value= window.localStorage.getItem("Salary");
   document.getElementById("date").value= window.localStorage.getItem("DOB");
}