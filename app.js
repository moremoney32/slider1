/*let slider=document.getElementsByClassName("slideimg");
console.log(slider)
let etape=0;
function defiler(){
    for(let i =0 ;i<slider.length;i++){
        slider[i].classList.remove("active")
    }
}
let avant =document.querySelector(".avant");
/*let arriere=document.querySelector(".arriere");*/
/*avant.addEventListener("click",function() {
    etape++;
    if(etape>=slider.lenght){
        etape=0;
    
    }
    defiler();
    slider[etape].classList.add("active");

})
/*arriere.addEventListener("click",function(){
    etape--;
    if(etape<=0){
        etape=slider.lenght-1;
    }
    defiler()
    slider[etape].classList.add("active");
})*/
let slider = document.querySelector(".slider")
let sliderimg = slider.querySelectorAll("img");
let avant = document.getElementById("bouton-right");
let arriere = document.getElementById("bouton-left");
let counter= 0;
let size=sliderimg[counter].clientWidth;
//slider.style.transform = 'translatex('+ (-size  *counter) +'px)'; 
avant.addEventListener("click",changes)
function changes(){
    if(counter<sliderimg.length-1){
        counter++;
    }
    else{
        counter=0;
    }
    slider.style.transform = 'translatex('+(-size*counter)+'px)';
        slider.style.transition ="transform 0.4s ease-in-out";
    }
        
    arriere.addEventListener("click",rechanges)
function rechanges() {
    if(counter>0){
        counter--;
    }
    else{
        counter=sliderimg.length-1;
    }
    slider.style.transform = 'translatex('+(-size*counter)+'px)';
    slider.style.transition ="transform 0.4s ease-in-out";
    }
    
let footer = document.querySelector(".footer")
    let footerimg = footer.querySelectorAll("img");
    let etape=0;
    avant.addEventListener("click",pousse);
    function pousse(){
        if(etape<footerimg.length-1){
            etape++;
            footerimg[etape].style.opacity=1
            footerimg[etape-1].style.opacity=0.5 
      
        }
        else{
            etape=0;
            //footerimg[0].style.opacity=1
        }
          
    }
    arriere.addEventListener("click",rentre);
    function rentre(){
        if(etape>0){
            etape--;
            footerimg[etape].style.opacity=1
            footerimg[etape+ 1].style.opacity=0.5
        }
        else{
            etape=footerimg.length-1;
            //footerimg.etape[0].style.opacity=1
        
        }
    }
    //exooooooooooooooooo
    

    