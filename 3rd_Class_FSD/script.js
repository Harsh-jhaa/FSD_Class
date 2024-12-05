import {sum,sub,circleArea,pi} from './functions.mjs'

document.getElementById('btn').addEventListener("click",()=>{
    document.getElementById('para2').innerHTML=sub(7,4);
    document.getElementById('para').innerHTML=sum(3,4);
    document.getElementById('para3').innerText=`${pi}`;
    

})
