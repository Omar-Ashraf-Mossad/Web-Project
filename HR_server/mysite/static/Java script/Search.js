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
            window.location.href ="http://127.0.0.1:8000/app/Search_result";
        }
        
        
    }
    
}

 function search_by_name(name)
 {
     
        xhttp = new XMLHttpRequest();
        xhttp.open("GET","http://127.0.0.1:8000/app/search/"+name);
         
        xhttp.onload = function(){
            data = JSON.parse(xhttp.response);
            var id = 1;
            for(i of data)
            {
                t=document.getElementById("table");

                x=document.createElement("tr");
                t.appendChild(x);

                td = document.createElement("td");
                x.appendChild(td);
                td.id=id;
                td.innerHTML=i['Id'];

                td = document.createElement("td");
                x.appendChild(td);
                td.innerHTML=i['Name'];
                b=document.createElement("button");
                b.innerHTML="Request a vacation";
                b.setAttribute("onclick","make_request("+id+")");
                b.setAttribute("class","green");
                td.appendChild(b);
                get_item();
                id++;
            }
            window.sessionStorage.removeItem("searchitem");
        }
    
        
        if(document.cookie.indexOf('csrftoken')>-1)
        {
            value = document.cookie.split('csrftoken')[1].split('=')[1]
            xhttp.setRequestHeader('X-CSRFToken',value);
        }
        
        xhttp.send();
 }
function check_exist(id,e,phone,type)
{
    xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://127.0.0.1:8000/app/check/");
     
    xhttp.onload = function(){
        data = JSON.parse(xhttp.responseText);
        w=document.getElementById("id");

        if(type==1)
        {
            if(data['r1']=="True")
            {
                w.nextElementSibling.textContent="*This Id already exist please enter another value";
                return;
            }
            w.nextElementSibling.textContent="";
            w=document.getElementById("email");
            if(data['r2']=="True")
            {
                w.nextElementSibling.textContent="*This email is assigned to another employee please provide another email";
                return;
            }
            w.nextElementSibling.textContent="";
            w=document.getElementById("phone");
            if(data['r3']=="True")
            {
                w.nextElementSibling.textContent="*This phone is already in use";
                return;
            }
            w.nextElementSibling.textContent="";
    
             save_data();
        }
        else
        {
            w=document.getElementById("email");
            if(data['r2']=="True")
            {
                w.nextElementSibling.textContent="*This email is assigned to another employee please provide another email";
                return;
            }
            w.nextElementSibling.textContent="";
            w=document.getElementById("phone");
            if(data['r3']=="True")
            {
                w.nextElementSibling.textContent="*This phone is already in use";
                return;
            }
            w.nextElementSibling.textContent="";
    
            save_data();
        }
       
         
    }


    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    

    object = {
      id:id,
      email:e,
      number:phone,
      Type:type
    }
    xhttp.send(JSON.stringify(object));
}
   

function get_item()
{
    x=window.sessionStorage.getItem("searchitem");
    document.getElementById("result").innerHTML=x;


}


function search_by_id()
{

    if(!validate_id("id"))
        {
            return false;
        }
    return true;
    
}
function search_by_id2()
{
    w=document.getElementById("Id");
    if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This Field Can't be empty";
            return false;
        }
    x=parseInt(w.value);
        
    if(x<=0)
    {
        w.nextElementSibling.textContent="*Id cannont accept negative numbers";
        return false;
    }
    else if(x>99999)
    {
        w.nextElementSibling.textContent="*Id cannot exceed 5 digits";
        return false;
    } 
  
    w.nextElementSibling.textContent="";
    return true;
}
function check_id(id)
{
    clear_span();
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/check/Id/"+id);
     
    xhttp.onload = function(){
        emp = xhttp.responseText;
         if(emp=="True")
         {
            id=document.getElementById("id");
            id.nextElementSibling.textContent="";
            document.getElementById("button").disabled=false;
            get_data(id.value);
         }
         else
         {
            id=document.getElementById("id");
            id.nextElementSibling.textContent="*This id is not found";
            document.getElementById("button").disabled=true;

         }
         
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
    
}

function check()
{
    get_item();
    check_name(x);
}
function check_name(name)
{
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/check/name/"+name);
     
    xhttp.onload = function(){
        emp = xhttp.responseText;
         if(emp=="True")
         {
            search_by_name(name);
         }
         else
         {
            document.getElementById("fail").innerHTML="*No Matched result.";
            window.sessionStorage.removeItem("searchitem");

         }
         
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
    
}
function clear_span()
{
    
    f=document.getElementsByTagName("span");
        for(i of f)
        {
            i.textContent="";
        }
    document.getElementById("status").innerHTML="";
}

