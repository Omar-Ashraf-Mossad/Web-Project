
function add_data()
{
    if(!validate())
    {
        return false;
    }
    check_exist(document.getElementById("id").value,document.getElementById("email").value);
    return false;
}

function save_data()
{
    
    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("status").innerHTML=this.responseText;

        w=document.getElementsByTagName("form")[0].getElementsByTagName("input");
        for(i of w)
        {
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

        // window.localStorage.setItem("Name",document.getElementById("ename").value);
        // window.localStorage.setItem("Id",document.getElementById("id").value);
        // window.localStorage.setItem("Address",document.getElementById("eaddress").value);
        // window.localStorage.setItem("Number",document.getElementById("phone").value);
        // window.localStorage.setItem("email",document.getElementById("email").value);
        // window.localStorage.setItem("Gender",document.getElementById("gender").value);
        // window.localStorage.setItem("Status",document.getElementById("s").value);
        // window.localStorage.setItem("vacation",document.getElementById("vacation").value);
        // window.localStorage.setItem("actual","0");
        // window.localStorage.setItem("Salary",document.getElementById("salary").value);
        // window.localStorage.setItem("DOB",document.getElementById("date").value);
}