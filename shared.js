var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modall = document.querySelector(".modal");
var noModall = document.querySelector(".modal__action--negative");
var menuIcon = document.querySelector(".menu--icon")
var mobileNav = document.querySelector(".mobile-nav")

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modall.style.display = "block";
    backdrop.style.display = "block";
  });
}

noModall.addEventListener("click",goback)
backdrop.addEventListener("click",function(){
  mobileNav.style.display = "none";
  goback();
})

function goback(){
  modall.style.display = "none";
  backdrop.style.display="none";
}

menuIcon.addEventListener("click",function(){
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
})

