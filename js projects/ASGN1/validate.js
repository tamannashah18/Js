function val_name(n,err)
{
    if(n.value=="")
    {
        err.style.color="red"
        err.innerHTML="Enter Name"
        n.focus()
        return false;
    }
    else
    {
        err.style.color="green"
        err.innerHTML="Success"
        return true;
    }
}
function val_age(n,err)
{
    if(n.value>20)
    {
        err.style.color="red"
        err.innerHTML="Enter Age <20"
        n.focus()
        return false;
    }
    else if(n.value<15)
    {
        err.style.color="red"
        err.innerHTML="Enter Age >15"
        n.focus()
        return false;
    }
    else if(n.value=="")
    {
        err.style.color="red"
        err.innerHTML="Enter Age"
        n.focus()
        return false;
    }
    else
    {
        err.style.color="green"
        err.innerHTML="Success"
        return true;
    }
}
function val_gen(gender,err)
{
    if(gender[0].checked==false && gender[1].checked==false)
    {
        err.style.color="red"
        err.innerHTML="Select Gender"
        return false;
    }else
    {
        err.style.color="green"
        err.innerHTML="Success"
        return true;
    }
}