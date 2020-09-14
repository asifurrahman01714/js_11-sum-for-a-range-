var m=parseInt( prompt("Enter your first Number: ")); 
var n=parseInt( prompt("Enter your Last Number: ")); 
var sum=0;

for(var x=m; x<=n;x=x+1 )
{
    sum=sum+x;
}
document.write("Total sum from m to n : " + sum);