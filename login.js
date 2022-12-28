function val()
{
    let username=document.getElementById("username");
    let password=document.getElementById("password");
    let flag=0;
    
    if(username.value=="")
    {
        document.getElementById("userError").innerHTML="Username is Empty.";
    }
    else if(!(username.value.includes("@")))
    {
        document.getElementById("userError").innerHTML="Username must email address containing '@'."
    }
    else if(username.value.length<3)
    {
        document.getElementById("userError").innerHTML="Username require min 3 charracters."
    }
    else{
        document.getElementById("userError").innerHTML="";
        flag++;
    }
    if(password.value=="")
    {
        document.getElementById("passError").innerHTML="Password is Empty."
    }
    else{
        document.getElementById("passError").innerHTML="";
        flag++;
    }
    if(flag==2)
    {
        return true;
    }
    else
    {
        return false;
    }
}
