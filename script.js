var imfunny = "Why";
var selectedContentMain = "intro";
var selectedContentSmall = "intro";
function removeSelection (){

  document.getElementsByClassName(selectedContentMain + "Button")[0].classList.remove("selected");
  document.getElementsByClassName(selectedContentMain + "Buttons")[0].classList.remove("selected");

}
function introSelection (){
  removeSelection ();
  document.getElementsByClassName("introButton")[0].classList.add("selected");
  document.getElementsByClassName("introButtons")[0].classList.add("selected");


  
  selectedContentMain = "intro";

}
function sportSelection (){
  removeSelection ();
  document.getElementsByClassName("sportsButton")[0].classList.add("selected");
  document.getElementsByClassName("sportsButtons")[0].classList.add("selected");

  
  selectedContentMain = "sports";
}
function musicSelecttion (){
  removeSelection ();
  document.getElementsByClassName("musicButton")[0].classList.add("selected");
  document.getElementsByClassName("musicButtons")[0].classList.add("selected");

  
  selectedContentMain = "music";
}
function academicSelecttion (){
  removeSelection ();
  document.getElementsByClassName("academicButton")[0].classList.add("selected");
  document.getElementsByClassName("academicButtons")[0].classList.add("selected");

  
  selectedContentMain = "academic";
}
function roboticsCodingSelecttion (){
  removeSelection ();
  document.getElementsByClassName("roboticsCodingButton")[0].classList.add("selected");
  document.getElementsByClassName("roboticsCodingButtons")[0].classList.add("selected");

  
  selectedContentMain = "roboticsCoding";
}
