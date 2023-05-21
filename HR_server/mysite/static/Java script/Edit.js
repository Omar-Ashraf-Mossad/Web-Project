function search_edit()
{
    clear_span();
    if(!search_by_id2())
    {
        return false;
    }
    id=document.getElementById("Id");

    check_id2(id.value);
}

function enable_edit()
{
           
                w=document.getElementById("id");
               w.nextElementSibling.textContent="";
               x=document.getElementsByClassName("myinput");
        
               for(i in x){x[i].disabled=false;}             
            
            
}

function check_id2(id)
{
    clear_span();
    w=document.getElementsByTagName("form")[0];
    w=w.getElementsByTagName("input");
    for(i of w)
    {
        if(i.type=="button")
        {
            continue;
        }
       i.value="";
       i.disabled=true; 
    }
    document.getElementById("button1").disabled=true;
    document.getElementById("button2").disabled=true;
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/check/Id/"+id);
     
    xhttp.onload = function(){
        emp = xhttp.responseText;
         if(emp=="True")
         {
            id=document.getElementById("Id");
            id.nextElementSibling.textContent="";
            document.getElementById("button1").disabled=false;
            document.getElementById("button2").disabled=false;
            get_data2(id.value);
         }
         else
         {
            id=document.getElementById("Id");
            id.nextElementSibling.textContent="*This id is not found";
            document.getElementById("button1").disabled=true;
            document.getElementById("button2").disabled=true;

         }
         
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
    
}
function edit()
{
    clear_span();

    if(!validate())
    {
        return false;
    }
    check_exist(document.getElementById("id").value,document.getElementById("email").value,document.getElementById("phone").value,2);
    return false;

        
    

}
 function save_data()
{
    clear_span();
    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("status").innerHTML=this.responseText;

        w=document.getElementsByTagName("form")[0].getElementsByTagName("input");
        for(i of w)
        {
            if(i.type=="button")
            {
                continue;
            }
            i.value = null;
        }
        document.getElementById("button1").disabled=true;
        document.getElementById("button2").disabled=true;
    }
    xhttp.open("POST","http://127.0.0.1:8000/app/add/1/");
        if(document.cookie.indexOf('csrftoken')>-1)
        {
            value = document.cookie.split('csrftoken')[1].split('=')[1]
            xhttp.setRequestHeader('X-CSRFToken',value);
        }
        
    
    object = {
        Id:document.getElementById("id").value,
        Name:document.getElementById("ename").value,
        Address:document.getElementById("eaddress").value,
        Number:document.getElementById("phone").value,
        Email:document.getElementById("email").value,
        Gender:document.getElementById("gender").value,
        Status:document.getElementById("s").value,
        Vacation:document.getElementById("available_days").value,
        Actual:0,
        Salary:document.getElementById("salary").value,
        DOB:document.getElementById("date").value
    }
    xhttp.send(JSON.stringify(object));
       
}

function get_data2(id)
{
    clear_span();
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/get/Id/"+id);
     
    xhttp.onload = function(){
        data = JSON.parse(xhttp.response);
        document.getElementById("ename").value= data['Name'];
        document.getElementById("id").value= data['Id'];
        document.getElementById("email").value= data['Email'];
        document.getElementById("eaddress").value=data['Address'];
        document.getElementById("phone").value= data['Number'];
        document.getElementById("gender").value= data['Gender'];
        document.getElementById("s").value= data['Status'];
        document.getElementById("available_days").value= data['Available'];
        document.getElementById("actual_days").value= data['Actual'];
        document.getElementById("salary").value= data['Salary'];
        document.getElementById("date").value= data['DOB'];
         
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
   
}