document.addEventListener("DOMContentLoaded",function(){
    var errorElement= document.querySelector('.error');
    if(errorElement){
        setTimeout(function(){
            errorElement.style.opacity="0";
            setTimeout(function(){
                errorElement.style.display="none";
            },1000);
        },5000);
    }
});