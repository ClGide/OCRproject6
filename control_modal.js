const BtnOpen = document.getElementsByClassName("btn-open");
const BtnOpenImg = document.getElementsByClassName("btn-open-img");
const modal = document.getElementsByClassName("modal");
const BtnClosed = document.getElementsByClassName("btn-closed");


for (let i=0; i<29; i++) {

    BtnOpen[i].addEventListener(
        "click", function (){
            modal[i].classList.add("show");
    
        }
    );

    BtnOpenImg[i].addEventListener(
        "click", function (){
            modal[i].classList.add("show");
    
        }
    );
    
    BtnClosed[i].addEventListener(
        "click", function() {
            modal[i].classList.remove("show")
       }
    );
}
