
 document.querySelectorAll('.nav-link').forEach
(link =>{
    if(link.href === window.location.href){
       link.setAttribute('aria-current','page')
    }
}
 )
// alert popup
function Login(){
    alert("Do you want to continue?");   
}

 

 