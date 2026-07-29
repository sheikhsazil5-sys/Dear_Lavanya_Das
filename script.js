/*=========================================
Dear Lavanya Das ❤️
Premium Edition V2
=========================================*/

/*=========================================
ELEMENTS
=========================================*/

const loader = document.getElementById("loader");

const lights = document.querySelector(".lights");

const petals = document.querySelector(".petals");

const sparkles = document.querySelector(".sparkles");

const mouseGlow = document.querySelector(".mouse-glow");

/*=========================================
LOADER
=========================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1800);

});

/*=========================================
FLOATING LIGHTS
=========================================*/

function createLight(){

    const light=document.createElement("div");

    light.className="light";

    light.style.left=Math.random()*100+"vw";

    light.style.animationDuration=
    (6+Math.random()*6)+"s";

    light.style.opacity=Math.random();

    light.style.transform=
    `scale(${0.5+Math.random()*1.5})`;

    lights.appendChild(light);

    setTimeout(()=>{

        light.remove();

    },12000);

}

setInterval(createLight,350);

/*=========================================
SPARKLES
=========================================*/

function createSpark(){

    const spark=document.createElement("div");

    spark.className="spark";

    spark.style.left=Math.random()*100+"vw";

    spark.style.top=Math.random()*100+"vh";

    spark.style.animationDuration=
    (2+Math.random()*4)+"s";

    sparkles.appendChild(spark);

    setTimeout(()=>{

        spark.remove();

    },6000);

}

setInterval(createSpark,180);

/*=========================================
MOUSE GLOW
=========================================*/

window.addEventListener("mousemove",(e)=>{

    mouseGlow.style.left=e.clientX+"px";

    mouseGlow.style.top=e.clientY+"px";

});

/*=========================================
ROSE PETALS
=========================================*/

const petalImages=[

"assets/images/petal1.png",

"assets/images/petal2.png",

"assets/images/petal3.png",

"assets/images/petal4.png"

];

function createPetal(){

    const petal=document.createElement("img");

    petal.src=

    petalImages[
    Math.floor(Math.random()*petalImages.length)
    ];

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.width=

    (18+Math.random()*32)+"px";

    petal.style.opacity=

    .5+Math.random()*.5;

    petal.style.transform=

    `rotate(${Math.random()*360}deg)`;

    const duration=10+Math.random()*10;

    const drift=(Math.random()-0.5)*400;

    petal.animate(

    [

    {

    transform:

    `translate(0,-100px)
     rotate(0deg)`,

    opacity:0

    },

    {

    opacity:1,

    offset:.15

    },

    {

    transform:

    `translate(${drift}px,
    ${window.innerHeight+200}px)
    rotate(${720+Math.random()*720}deg)`,

    opacity:0

    }

    ],

    {

    duration:duration*1000,

    easing:"linear"

    }

    );

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },duration*1000);

}

setInterval(createPetal,220);
/*=========================================
OPEN MY HEART
=========================================*/

const openBtn=document.getElementById("openBtn");

const overlay=document.getElementById("overlay");

const envelope=document.getElementById("envelopePopup");

const popupMessage=document.getElementById("popupMessage");

const continueBtn=document.getElementById("continueBtn");

/*=========================================
LETTER
=========================================*/

const letterText=`

Dear Lavanya ❤️

Some people become memories.

But you became a beautiful chapter
of my life.

Every smile...

Every conversation...

Every little moment...

became something unforgettable.

This website is just a small way
to say...

Thank You.

❤️

`;

let letterIndex=0;

function typeLetter(){

    popupMessage.innerHTML="";

    letterIndex=0;

    function typing(){

        if(letterIndex<letterText.length){

            popupMessage.innerHTML+=letterText.charAt(letterIndex);

            letterIndex++;

            setTimeout(typing,35);

        }

    }

    typing();

}

/*=========================================
OPEN ENVELOPE
=========================================*/

openBtn.addEventListener("click",()=>{

    overlay.classList.add("show");

    envelope.classList.add("show");

    typeLetter();

});

/*=========================================
CONTINUE
=========================================*/

continueBtn.addEventListener("click",()=>{

    overlay.classList.remove("show");

    envelope.classList.remove("show");

    document
    .getElementById("story")
    .scrollIntoView({

        behavior:"smooth"

    });

});

/*=========================================
SCROLL REVEAL
=========================================*/

const reveals=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.2
});

reveals.forEach(section=>{

observer.observe(section);

});

/*=========================================
SMOOTH NAVIGATION
=========================================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

target.scrollIntoView({

behavior:"smooth"

});

});

});

/*=========================================
MUSIC
=========================================*/

const bgMusic=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let musicPlaying=false;

musicBtn.addEventListener("click",()=>{

if(!musicPlaying){

bgMusic.volume=.5;

bgMusic.play();

musicBtn.innerHTML="⏸ Pause Music";

musicPlaying=true;

}

else{

bgMusic.pause();

musicBtn.innerHTML="▶ Play Music";

musicPlaying=false;

}

});
/*=========================================
GALLERY POPUP
=========================================*/

const galleryImages=document.querySelectorAll(".gallery-item img");

const imagePopup=document.getElementById("imagePopup");

const popupImage=document.getElementById("popupImage");

const closeImage=document.getElementById("closeImage");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

popupImage.src=img.src;

imagePopup.classList.add("show");

});

});

closeImage.addEventListener("click",()=>{

imagePopup.classList.remove("show");

});

imagePopup.addEventListener("click",(e)=>{

if(e.target===imagePopup){

imagePopup.classList.remove("show");

}

});

/*=========================================
LETTER POPUP
=========================================*/

const readMoreBtn=document.getElementById("readMoreBtn");

const letterPopup=document.getElementById("letterPopup");

const closeLetter=document.getElementById("closeLetter");

readMoreBtn.addEventListener("click",()=>{

letterPopup.classList.add("show");

});

closeLetter.addEventListener("click",()=>{

letterPopup.classList.remove("show");

});

letterPopup.addEventListener("click",(e)=>{

if(e.target===letterPopup){

letterPopup.classList.remove("show");

}

});

/*=========================================
MEMORY JAR
=========================================*/

const memoryBtn=document.getElementById("memoryBtn");

const memoryJar=document.getElementById("memoryJar");

memoryBtn.addEventListener("click",()=>{

memoryJar.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.18) rotate(-8deg)"

},

{

transform:"scale(1) rotate(8deg)"

},

{

transform:"scale(1)"

}

],{

duration:900,

iterations:1

});

roseRain(80);

setTimeout(()=>{

roseRain(100);

},900);

setTimeout(()=>{

roseRain(120);

},1800);

});

/*=========================================
ROSE RAIN
=========================================*/

function roseRain(count){

for(let i=0;i<count;i++){

setTimeout(()=>{

const petal=document.createElement("img");

petal.src=petalImages[

Math.floor(Math.random()*petalImages.length)

];

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.width=(20+Math.random()*40)+"px";

petal.style.opacity=.5+Math.random()*.5;

petal.style.zIndex="999";

const duration=5+Math.random()*3;

const drift=(Math.random()-.5)*500;

petal.animate([

{

transform:`translate(0,-80px) rotate(0deg)`,

opacity:0

},

{

opacity:1,

offset:.15

},

{

transform:`translate(${drift}px,${window.innerHeight+250}px)
rotate(${720+Math.random()*720}deg)`,

opacity:0

}

],{

duration:duration*1000,

easing:"ease-in"

});

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},duration*1000);

},i*25);

}

}

/*=========================================
FLOATING HEARTS
=========================================*/

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="500";

heart.animate([

{

transform:"translateY(0) scale(.8)",

opacity:0

},

{

opacity:1,

offset:.2

},

{

transform:`translateY(-${window.innerHeight+200}px)
rotate(${Math.random()*180}deg)`,

opacity:0

}

],{

duration:7000,

easing:"linear"

});

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,1200);
/*=========================================
FINAL SURPRISE
=========================================*/

const surpriseBtn=document.getElementById("surpriseBtn");

const finalPopup=document.getElementById("finalPopup");

const closeFinal=document.getElementById("closeFinal");

const finalMusic=document.getElementById("finalMusic");

surpriseBtn.addEventListener("click",()=>{

    finalPopup.classList.add("show");

    roseRain(180);

    bgMusic.pause();

    finalMusic.currentTime=0;
    finalMusic.volume=.7;
    finalMusic.play();

    burstHearts();

});

/*=========================================
CLOSE FINAL
=========================================*/

closeFinal.addEventListener("click",()=>{

    finalPopup.classList.remove("show");

});

/*=========================================
RESTART
=========================================*/

const restartBtn=document.getElementById("restartBtn");

restartBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
HEART BURST
=========================================*/

function burstHearts(){

    for(let i=0;i<80;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML="❤️";

            heart.style.position="fixed";

            heart.style.left="50%";

            heart.style.top="50%";

            heart.style.fontSize=(18+Math.random()*22)+"px";

            heart.style.pointerEvents="none";

            heart.style.zIndex="9999";

            const x=(Math.random()-.5)*900;

            const y=(Math.random()-.5)*900;

            heart.animate([

                {

                    transform:"translate(0,0) scale(.4)",

                    opacity:1

                },

                {

                    transform:`translate(${x}px,${y}px) scale(1.5)`,

                    opacity:0

                }

            ],{

                duration:2500,

                easing:"ease-out"

            });

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },2500);

        },i*25);

    }

}

/*=========================================
AUTO BACKGROUND ROSE WAVES
=========================================*/

setInterval(()=>{

    roseRain(35);

},25000);

/*=========================================
WELCOME EFFECT
=========================================*/

setTimeout(()=>{

    roseRain(50);

},2500);

/*=========================================
PARALLAX HERO
=========================================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.backgroundPositionY=

    window.scrollY*.3+"px";

});

/*=========================================
RANDOM GLOW
=========================================*/

setInterval(()=>{

    document.body.animate([

        {

            filter:"brightness(1)"

        },

        {

            filter:"brightness(1.08)"

        },

        {

            filter:"brightness(1)"

        }

    ],{

        duration:2200

    });

},12000);

/*=========================================
KEYBOARD SHORTCUT
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        imagePopup.classList.remove("show");

        letterPopup.classList.remove("show");

        finalPopup.classList.remove("show");

        envelope.classList.remove("show");

        overlay.classList.remove("show");

    }

});

/*=========================================
END
=========================================*/

console.log("🌹 Dear Lavanya Premium V2 Loaded Successfully ❤️");
