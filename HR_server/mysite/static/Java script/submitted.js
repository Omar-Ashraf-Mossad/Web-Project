function check()
{
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/check/allrequest/");
     
    xhttp.onload = function(){
        result = xhttp.responseText;
        if(result=="True")
        {
           get_request();
        }
        else
        {
           document.getElementById("empty").innerHTML="No requests in the queue.";
        }
         
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
}

function get_request()
{
    
    xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:8000/app/getallrequest/");
     
    xhttp.onload = function(){
        data = JSON.parse(xhttp.response);
    for(i of data)
    {
        w=document.getElementById("container");
        box=document.createElement("div");
        box.id="box";
        p=document.createElement("p");

        var text=document.createTextNode("Employee name :"+i['Name']);
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("Employee ID :"+i['Id']);
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);
        
        var text=document.createTextNode("From date :"+i['From']);
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("To date :"+i['To']);
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("Reason :"+i['Reason']);
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("status:");
        var result= document.createElement("span");
        result.id = i['Id'];
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(result);
        p.appendChild(br);

        var b=document.createElement("button");
        b.setAttribute("class","green");
        b.setAttribute("onclick","accept('"+i['Id']+"')")
        b.textContent="Accept";

        p.appendChild(b);

        var b=document.createElement("button");
        b.setAttribute("class","red");
        b.setAttribute("onclick","reject('"+i['Id']+"')")
        b.textContent="Reject";

        p.appendChild(b);

        
        box.appendChild(p);
        box.setAttribute("class","box");
        w.appendChild(box);
    }
    }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
        

    
}

function accept(a)
{
    
       if( confirm('Are you sure that you want to accept?'))
       {
        

        
    
    
             xhttp = new XMLHttpRequest();
             xhttp.open("GET","http://127.0.0.1:8000/app/accept/request/"+a);
         
             xhttp.onload = function(){
                document.getElementById(a).innerHTML="Accepted";  remove_buttons(a);
            }
    
        
        if(document.cookie.indexOf('csrftoken')>-1)
        {
            value = document.cookie.split('csrftoken')[1].split('=')[1]
            xhttp.setRequestHeader('X-CSRFToken',value);
        }
        
        xhttp.send();
        

       } 
    
    
      
}
function reject(a)
{

        
    if(confirm('Are you sure that you want to reject?'))
    { 


         xhttp = new XMLHttpRequest();
         xhttp.open("GET","http://127.0.0.1:8000/app/delete/request/"+a);
     
         xhttp.onload = function(){
            document.getElementById(a).innerHTML="Rejected";  remove_buttons(a);
        }

    
    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    
    xhttp.send();
    }
    
    
   
}