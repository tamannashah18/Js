function val_sp(input,err)
{
    
    if(input=="")
    {
        err.style.color="red";
        err.innerHTML="Enter SPID";
        return false;
    }
    else
    {
        
        err.style.color="green";
        err.innerHTML="Success";
        return true;
    }
}
function val_nm(input,err)
{
    var patt=/^[A-Z]{1}[a-z]{1,}$/
    
    if(input=="")
    {
        err.style.color="red";
        err.innerHTML="Enter Name";
        return false;
    }
    else if(patt.test(input)==false)
    {        
        err.style.color="red";
        err.innerHTML="First letter should be in uppercase";

        return false;
    }
    else
    {
        
        err.style.color="green";
        err.innerHTML="Success";
        return true;
    }
}function val_mail(input,err)
{
    var patt=/^[A-Za-z0-9_&^%$#.]{3,}@[A-Za-z.]{3,}.[a-zA-Z]{1,}$/
    if(input=="")
    {
        err.style.color="red";
        err.innerHTML="Enter Name";
        return false;
    }
    else if(patt.test(input)==false)
    {        
        err.style.color="red";
        err.innerHTML="First letter should be in uppercase";

        return false;
    }
    else
    {
        
        err.style.color="green";
        err.innerHTML="Success";
        return true;
    }
}
function val_state(input,err)
{
    if(input.value=="")
    {
        err.style.color="red";
        err.innerHTML="Select State";
        return false;
    }
    else
    {
        
        err.style.color="green";
        err.innerHTML="Success";
        return true;
    }
}
function val_uname(input,err)
{
    if(input.value=="")
    {
        err.style.color="red";
        err.innerHTML="Enter Username";
        return false;
    }
    else if(input.length<5)
    {
        err.style.color="red";
        err.innerHTML="Username should be alteast 5 characters long";
        return false;
    }
    else
    {
        
        err.style.color="green";
        err.innerHTML="Success";
        return true;
    }
}
function val_pass(p1,p2,err)
{
    //var patt=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+=])[A-Za-z\d!@#$%^&*()-+=]{6,}$/;
    
    if(p1=="" || p2=="")
    {
        err.style.color="red";
        err.innerHTML="Enter Valid password";
        return false;
    }
    else if(p1==p2)
    {
        err.style.color="green";
        err.innerHTML="Success";
        return true;
    }
    else
    {
        err.style.color="red";
        err.innerHTML="Enter Valid password";
        return false;
    }
}
function val_gen(gen,err)
{
    if(gen[0].checked==false && gen[1].checked==false)
    {
        err.style.color="red";
        err.innerHTML="Select gender";
        return false;
    }
    else
    {
        err.style.color="green";
        err.innerHTML="Success";
        return true;
    }
}