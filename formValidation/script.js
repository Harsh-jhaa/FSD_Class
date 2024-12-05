const fname = document.querySelector("#fname").value.length




const formSubmit= function  () {
    if(fname >=5 ){
        // window.alert("enter a valid name")
        console.log(fname + 3)
    }
    
}
const btn = document.querySelector("#button")
btn.addEventListener("click",formSubmit)