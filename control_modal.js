const BtnOpen = document.getElementsByClassName("btn-open");
const modal = document.getElementsByClassName("modal");
const BtnClosed = document.getElementsByClassName("btn-closed");

/**
BtnOpen[0].addEventListener(
    "click", function (){
        modal[0].classList.add("show");
        console.log("art")

    }
);

BtnClosed[0].addEventListener(
    "click", function() {
        modal[0].classList.remove("show")
   }
);



BtnOpen[1].addEventListener(
    "click", function (){
        modal[1].classList.add("show");
        console.log("art")

    }
);

BtnClosed[1].addEventListener(
    "click", function() {
        modal[1].classList.remove("show")
   }
);



BtnOpen[2].addEventListener(
    "click", function (){
        modal[2].classList.add("show");
        console.log("art")

    }
);

BtnClosed[2].addEventListener(
    "click", function() {
        modal[2].classList.remove("show")
   }
);

*/

for (let i=0; i<29; i++) {

    BtnOpen[i].addEventListener(
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