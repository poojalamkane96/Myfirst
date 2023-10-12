//change date on webpage dynamicallynds
const end_date="19 June 2023 05:0 PM";
document.getElementById("enddate").innerText=end_date;
//get all inputes
const inputes=document.getElementsByTagName("input");

function clock()
{
//create date object to get current date
const changing_date=new Date(end_date);
const current_date=new Date();

//get difference of two dates default its in milliseconds
const difference=(changing_date-current_date)/1000;

//convert to seconds to days
inputes[0].value=Math.floor(difference/3600/24);
//console.log("day  "+day)

//convert into hour
inputes[1].value=Math.floor((difference/24)%24);
//console.log("hour "+hour);

//convert into minutes
inputes[2].value=Math.floor((difference/60)%60);
//console.log("min " +min);

//convert into seoncds
inputes[3].value=Math.floor(difference)%60;
//console.log("seonds "+seconds );

}
clock();

//setinerval to clock of 1 seconds
setInterval(()=>{
    clock();
} ,1000
)