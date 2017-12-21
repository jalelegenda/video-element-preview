document.addEventListener("DOMContentLoaded", function(){
    console.log("Stay tuned :)");

    var logo = document.getElementById("logo");
    changePageBasedOnScreenWidth(logo);

    window.addEventListener("resize", function(){
        changePageBasedOnScreenWidth(logo);
    });
    
});


function changePageBasedOnScreenWidth(img){
    if(window.innerWidth < 481){
		console.log("works");
        img.src = "./logo.png";
    } else {
		console.log("works");
        img.src = "./logo_h.png";
    }
}