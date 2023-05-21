function set_searchitem()
{
    x=document.getElementById("search").value;
    if(x=="")
    {
        alert("can't search with an empty value");
        return;

    }

        
    if(x!=""&&x!=" ")
    {
        var y=0;

        for(i in x)
        {
            if(x[i]==" ")
            {
                alert("Name cannot have spaces");
                y=1;
                break;
            }
    
            if(!isNaN( x[i]))
            {
                 alert("Name cannot have numbers"); 
                  y=1; 
                  break;
                
            }
            
           
        } 
        if(y==0)
        {
            window.sessionStorage.setItem("searchitem",x);
            window.location.href ="Search_result.html";
        }
        
        
    }
    
}

 function search_by_name()
 {
     if(window.sessionStorage.getItem("searchitem")==window.localStorage.getItem("Name"))
     {
        var id = 1;
        t=document.getElementById("table");

        x=document.createElement("tr");
        t.appendChild(x);

        td = document.createElement("td");
        x.appendChild(td);
        td.id=id;
        td.innerHTML=window.localStorage.getItem("Id");

        td = document.createElement("td");
        x.appendChild(td);
        td.innerHTML=window.localStorage.getItem("Name");
        b=document.createElement("button");
        b.innerHTML="Request a vacation";
        b.setAttribute("onclick","make_request("+id+")");
        b.setAttribute("class","green");
      
        td.appendChild(b);
     }
     else
     {
         document.getElementById("fail").innerHTML="*No Matched result."
     }
     get_item();

 }
    
   

function get_item()
{
    x=window.sessionStorage.getItem("searchitem");
    document.getElementById("result").innerHTML=x;
    window.sessionStorage.removeItem("searchitem");


}


function search_by_id()
{

    if(!validate_id())
        {
            return false;
        }
    id=document.getElementById("id");
    if(id.value!=window.localStorage.getItem("Id"))
    {
        id.nextElementSibling.textContent="*This id is not found";
        window.sessionStorage.setItem("found","false");
        return false;
    }
    id.nextElementSibling.textContent="";
    window.sessionStorage.setItem("found","true");
    return true;
}