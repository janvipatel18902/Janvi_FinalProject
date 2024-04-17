$(function()
{  
    //value for animation  
    var width = 1000;  
    var animationSpeed = 700;  
    var pause = 2000;  
    var currentSlide = 1;  
    //Dom element.   
    var $slider = $('#slider');  
    var $sliderAnimation = $slider.find('.slides');  
    var $slides = $sliderAnimation.find('.slide');  
  
    setInterval(function()
    {  
         $sliderAnimation.animate({'margin-left': '-='+width}, animationSpeed, function(){  
         currentSlide ++;  
         if(currentSlide === $slides.length)  
         {  
                $sliderAnimation.css('margin-left', 0);  
                currentSlide = 1;  
         }  
     });  
    },pause);  
}); 