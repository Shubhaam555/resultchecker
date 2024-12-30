function check()
{
let hindi= document.getElementById('hindi').value
let english=document.getElementById('english').value
let maths=document.getElementById('maths').value
let physics=document.getElementById('physics').value
let chemistry=document.getElementById('chemistry').value

hindi=parseInt(hindi)
english=parseInt(english)
maths=parseInt(maths)
physics=parseInt(physics)
chemistry=parseInt(chemistry)
let result=(hindi+english+maths+physics+chemistry)/5;
let status
if(result>90){
    status='PASS IN A+ GRADE'
}
else if(result<=89 && result>=85){
    status='PASS IN A GRADE'
}
else if(result<=84 && result>=80){
    status='PASS IN A- GRADE'
}
else if(result<=79 && result>=75){
    status='PASS IN B+ GRADE'
}
else if(result<=74 && result>=70){
    status='PASS IN B GRADE'
}
else if(result<=69 && result>=65){
    status='PASS IN C+ GRADE'
}
else if(result<=64 && result>=60){
    status='PASS IN C GRADE'
}
else if(result<=59 && result>=55){
    status=' PASS IN D+ GRADE'
}
else if(result<=54 && result>=50){
    status='PASS IN D GRADE'
}
else if(result<=49 && result>=40){
    status='PASS IN E GRADE'
}
else if(result<=39 && result>=0){
    status='FAIL'
}
document.getElementById('h2').innerHTML="YOUR RESULT IS: "+result+"% "+"& YOU ARE "+status
 





}