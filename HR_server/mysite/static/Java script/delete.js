function delete1()
{
    if(confirm("Are you sure you want to delete this employee?"))
    {
        x=parseInt(document.getElementById("Id").textContent);
        delete_data(x);
        return false;
    }
    return false;
    
}

function search_delete()
{
    clear_span();
    if(!search_by_id())
    {
        document.getElementById("button").disabled=true;
        return false;
    }
    id=document.getElementById("id");

    check_id(id.value);
    
}

function get_data(id)
{
    clear_span();
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/get/Id/"+id);
     
    xhttp.onload = function(){
        data = JSON.parse(xhttp.response);
        document.getElementById("name").innerHTML= data['Name'];
        document.getElementById("Id").innerHTML= data['Id'];
        document.getElementById("email").innerHTML= data['Email'];
        document.getElementById("address").innerHTML=data['Address'];
        document.getElementById("number").innerHTML= data['Number'];
        document.getElementById("gender").innerHTML= data['Gender'];
        document.getElementById("s").innerHTML= data['Status'];
        document.getElementById("available_days").innerHTML= data['Available'];
        document.getElementById("actual_days").innerHTML= data['Actual'];
        document.getElementById("salary").innerHTML= data['Salary'];
        document.getElementById("dob").innerHTML= data['DOB'];
         
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();

   
}

function delete_data(id)
{
    
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/delete/"+id);
     
         xhttp.onload = function(){
        data = xhttp.response;
        clear_span();
        document.getElementById("status").innerHTML=data;
        document.getElementById("button").disabled=true;
        

       
        
         
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
}

