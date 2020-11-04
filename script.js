const menuBar = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItem = [nav1,nav2,nav3,nav4,nav5];


function navAnimate(direction1, direction2){
    navItem.forEach((nav,i)=>{
        console.log(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
        nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
    });
}


function toggleNav() {
    //menu bar open/close
    menuBar.classList.toggle('change');

    //menu bar active
    overlay.classList.toggle('overlay-active');

    if (overlay.classList.contains('overlay-active')){
        //animating in
        overlay.classList.replace("overlay-slide-left","overlay-slide-right");

        navAnimate('out','in');

    }else{
        //animating out
        overlay.classList.replace("overlay-slide-right","overlay-slide-left");

        navAnimate('in','out');
    }
}

//event listeners
menuBar.addEventListener("click", toggleNav);
navItem.forEach(nav=>{
    nav.addEventListener('click',toggleNav);
})



