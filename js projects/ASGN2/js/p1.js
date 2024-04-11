var disc=0;
function check_no(input,output)
{
    if(input>0 && input!=0)
    {
        output.style.color="green";
        output.innerHTML="Success";
        return true;
    }
    else
    {
        output.style.color="red";
        output.innerHTML="Enter valid number";
        return false;
    }
}
function check_disc(input,output)
{
    input=new Date(input)
    if(input.getDay()==0||input.getDay()==1)
    {
        output.innerHTML="10%"
        disc=10;
    }
    else if(input.getDay()==2||input.getDay()==3)
    {
        output.innerHTML="15%"
        disc=15;
    }
    else if(input.getDay()==4||input.getDay()==5||input.getDay()==6)
    {
        output.innerHTML="5%"
        disc=5;
    }
    else
    {
        output.style.color="red";
        output.innerHTML="SELECT DATE";
        return false;
    }
}
function calc_bill(dis,tax,tot,amt)
{
    if(disc!=0)
    {
        disc=disc/100*amt;
        var t=0.05*amt
        amt=parseInt(amt)+t-disc
        dis.innerHTML="  " + disc;
        tax.innerHTML="  " +t;
        tot.innerHTML="  " + amt

    }
}