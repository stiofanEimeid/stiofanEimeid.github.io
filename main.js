//variables:

var carouselSlide = document.querySelector(".holder");
var carouselImages = document.querySelectorAll(".holder img"); 
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var counter = 1;
var myInterval;
var play = document.getElementById("playpause");


//hiding visibility

slider.addEventListener("mouseover", function(){
  prevBtn.classList.remove("hide"); //or toggle x 4// 
  nextBtn.classList.remove("hide");
})

slider.addEventListener("mouseout", function(){
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
})

// starting position:

carouselSlide.style.transform = "translateX(" + (counter * -10) + "%)";


// functions:

function slideRight(){
  carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
	counter++;
	carouselSlide.style.transform = "translateX(" + (counter * -10) + "%)";
}

function slideLeft(){
  carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
	counter--;
	carouselSlide.style.transform = "translateX(" + (counter * -10) + "%"  
}
// button navigation:

nextBtn.addEventListener("click", function(){
	if(counter >= carouselImages.length -1) return; 
  slideRight();
});


prevBtn.addEventListener("click", function(){
	if(counter <=0) return; 
  slideLeft();
});

// transitions:

carouselSlide.addEventListener("transitionend", function(){
  if(counter === 9){
  	carouselSlide.style.transition = "none"; 
  	counter = 1;
  	carouselSlide.style.transform = "translateX(" + (counter * -10) + "%";
  }

  if(counter === 0){
  	carouselSlide.style.transition = "none"; 
  	counter = 8;
  	carouselSlide.style.transform = "translateX(" + (counter * -10) + "%";
  }
});

// play+pause functionality:

   function myFunction() { 
        if(counter >= carouselImages.length -1) return; 
     slideRight();
      };

   play.addEventListener("change", function(){
        if(this.checked != true){
          myInterval=setInterval(myFunction, 3000);
        } else 
          clearInterval(myInterval);
        
        });

// playBtn.addEventListener("click", function() {
//   if(play){
//     myInterval=setInterval(myFunction, 3000);
//     play = false;
//     playBtn.style.color = "#ccad00";
//     pauseBtn.style.color = "black";
//   }
//   else return;
// });

// pauseBtn.addEventListener("click", function() {
//     clearInterval(myInterval);
//     play = true;
//     playBtn.style.color = "black";
//     pauseBtn.style.color = "#ccad00";
// });

// arrow-key navigation:

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if(counter <=0) return; 
        slideLeft();
            break;
        case 39:
        slideRight();
            break;
    }
};
