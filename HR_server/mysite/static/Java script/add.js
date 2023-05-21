
function add_data()
{
    clear_span();

    if(!validate())
    {
        return false;
    }
    check_exist(document.getElementById("id").value,document.getElementById("email").value,document.getElementById("phone").value,1);
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
            if(i.type=="submit")
            {
                continue;
            }
            i.value = null;
        }
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
        Vacation:document.getElementById("vacation").value,
        Actual:0,
        Salary:document.getElementById("salary").value,
        DOB:document.getElementById("date").value
    }
    xhttp.send(JSON.stringify(object));

        
}