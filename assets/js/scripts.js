let burgerMenu = document.getElementById('closedBurger');
let overlay = document.getElementById('burgerNav');
burgerMenu.addEventListener('click', function () {
  this.classList.toggle("openBurger");
  overlay.classList.toggle("visible");
});



function closeMenu() {
  burgerMenu.classList.toggle("openBurger");
  overlay.classList.toggle("visible");
};



 let openCollapsible = document.getElementById('openCollapsible');
 let closeCollapsible = document.getElementById('closeCollapsible');
 let collapsible = document.getElementById('collapsible');
 function cake() {
   openCollapsible.classList.toggle("smallHidden");
   closeCollapsible.classList.toggle("smallVisible");
   collapsible.classList.toggle("active");
 };



 let boxOne=document.getElementById("centerFigure");
 let boxTwo=document.getElementById("leftFigure");
 let boxThree=document.getElementById("rightFigure");

 boxOne.addEventListener("click", putInCenter);
 boxTwo.addEventListener("click", putInCenter);
 boxThree.addEventListener("click", putInCenter);


 function putInCenter(e) {
   console.log("put in center: "+e.currentTarget.element);
   let centerFigure=document.getElementById("centerFigure");
   centerFigure.id=e.currentTarget.id;
   e.currentTarget.id="centerFigure";
   }
  
// ACCORDIONS
function initAcc(elem, option){
  document.addEventListener('click', function (e) {
      if (!e.target.matches(elem+' .a-btn')) return;
      else{
          if(!e.target.parentElement.classList.contains('active')){
              if(option==true){
                  let elementList = document.querySelectorAll(elem+' .a-container');
                  Array.prototype.forEach.call(elementList, function (e) {
                      e.classList.remove('active');
                  });
              }            
              e.target.parentElement.classList.add('active');
          }else{
              e.target.parentElement.classList.remove('active');
          }
      }
  });
}

initAcc('.accordion.v1', true);
initAcc('.accordion.v2', false);





