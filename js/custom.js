document.getElementById("open-popup").addEventListener('click', function(){
    document.querySelector(".location-popup").style.display = "block";
    document.querySelector(".left-col").style.overflow = "hidden";
    
})

document.getElementById("popup-close-btn").addEventListener('click', function(){
    document.querySelector(".location-popup").style.display = "none";
    document.querySelector(".left-col").style.overflowY = "scroll";

    
})