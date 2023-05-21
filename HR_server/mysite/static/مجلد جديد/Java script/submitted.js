function check()
{
    if(window.localStorage.getItem("number_of_requests")==null||window.localStorage.getItem("number_of_requests")==0)
    {
        document.getElementById("empty").innerHTML="No requests in the queue.";
        return false;
    }
    else
    {
        var id1=1;
        w=document.getElementById("container");
        box=document.createElement("div");
        box.id="box";
        p=document.createElement("p");

        var text=document.createTextNode("Employee name :"+window.localStorage.getItem("Name"));
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("Employee ID :"+window.localStorage.getItem("Id"));
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);
        
        var text=document.createTextNode("From date :"+window.localStorage.getItem("From"));
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("To date :"+window.localStorage.getItem("to"));
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("Reason :"+window.localStorage.getItem("reason"));
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(br);

        var text=document.createTextNode("status:");
        var result= document.createElement("span");
        result.id = id1;
        br=document.createElement("br");

        p.appendChild(text);
        p.appendChild(result);
        p.appendChild(br);

        var b=document.createElement("button");
        b.setAttribute("class","green");
        b.setAttribute("onclick","accept('"+id1+"')")
        b.textContent="Accept";

        p.appendChild(b);

        var b=document.createElement("button");
        b.setAttribute("class","red");
        b.setAttribute("onclick","reject('"+id1+"')")
        b.textContent="Reject";

        p.appendChild(b);

        
        box.appendChild(p);
        box.setAttribute("class","box");
        w.appendChild(box);

    }
}