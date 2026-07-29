/* ==========================================
   DEAR LAVANYA DAS
   SCRIPT.JS V2
   PART 1
========================================== */

"use strict";

/* ==========================================
   ELEMENTS
========================================== */

const petalsContainer = document.querySelector(".petals");
const lightsContainer = document.querySelector(".lights");

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 3000);

});

/* ==========================================
   FLOATING LIGHTS
========================================== */

function createLight() {

    if (!lightsContainer) return;

    const light = document.createElement("div");

    light.className = "light";

    const size = Math.random() * 5 + 3;

    light.style.width = `${size}px`;
    light.style.height = `${size}px`;

    light.style.left = `${Math.random() * 100}vw`;

    light.style.animationDuration =
        `${8 + Math.random() * 6}s`;

    lightsContainer.appendChild(light);

    setTimeout(() => {

        light.remove();

    }, 15000);

}

/* ==========================================
   FALLING PETALS
========================================== */

function createPetal() {

    if (!petalsContainer) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left =
        `${Math.random() * 100}vw`;

    petal.style.animationDuration =
        `${8 + Math.random() * 5}s`;

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 13000);

}

/* ==========================================
   START PARTICLES
========================================== */

setInterval(createLight, 600);

setInterval(createPetal, 500);

/* ==========================================
   PART 2
   HERO + ENVELOPE + TYPEWRITER
========================================== */

/* ==========================================
   ELEMENTS
========================================== */

const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const envelope = document.querySelector(".envelope");

const popupLetter = document.getElementById("popupLetter");
const continueBtn = document.getElementById("continueBtn");

const bgMusic = document.getElementById("bgMusic");
const finalMusic = document.getElementById("finalMusic");

/* ==========================================
   MUSIC
========================================== */

if(bgMusic){

    bgMusic.volume = 0.35;

}

if(finalMusic){

    finalMusic.volume = 0.45;

}

/* ==========================================
   POPUP MESSAGE
========================================== */

const popupMessage = `Before you continue...

Thank you for opening this little corner of my heart.

I hope this little surprise brings a smile to your face.

❤️`;

/* ==========================================
   TYPEWRITER
========================================== */

function typeWriter(element,text,speed=70){

    if(!element) return;

    element.innerHTML="";

    let index=0;

    const timer=setInterval(()=>{

        if(index>=text.length){

            clearInterval(timer);

            return;

        }

        if(text[index]==="\n"){

            element.innerHTML+="<br>";

        }else{

            element.innerHTML+=text[index];

        }

        index++;

    },speed);

}

/* ==========================================
   OPEN ENVELOPE
========================================== */

function openEnvelope(){

    if(!overlay || !envelope) return;

    overlay.classList.add("active");

    setTimeout(()=>{

        envelope.classList.add("open");

        typeWriter(popupLetter,popupMessage,55);

        if(continueBtn){

            continueBtn.style.opacity="1";

            continueBtn.style.transform="translateY(0)";

        }

    },600);

}

/* ==========================================
   HERO BUTTON
========================================== */

if(openBtn){

    openBtn.addEventListener("click",openEnvelope);

}

/* ==========================================
   CONTINUE BUTTON
========================================== */

if(continueBtn){

    continueBtn.addEventListener("click",()=>{

        overlay.classList.remove("active");

        envelope.classList.remove("open");

        if(bgMusic){

            bgMusic.play().catch(()=>{});

        }

        const story=document.querySelector(".story");

        if(story){

            story.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}
/* ==========================================
   PART 3
   SCROLL REVEAL + GALLERY + LETTER
========================================== */

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealSections = document.querySelectorAll(
    ".story, .timeline, .gallery, .special, .letter, .music, .memory, .ending"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

    });

}, {
    threshold: 0.15
});

revealSections.forEach((section) => {

    section.classList.add("hidden-section");

    revealObserver.observe(section);

});

/* ==========================================
   IMAGE POPUP
========================================== */

const imagePopup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeImage = document.getElementById("closeImage");

document.querySelectorAll(".photo img").forEach((img) => {

    img.addEventListener("click", () => {

        if (!imagePopup || !popupImg) return;

        popupImg.src = img.src;
        popupImg.alt = img.alt || "";

        imagePopup.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

function closeGalleryPopup() {

    if (!imagePopup) return;

    imagePopup.classList.remove("active");

    document.body.style.overflow = "";

}

if (closeImage) {

    closeImage.addEventListener("click", closeGalleryPopup);

}

if (imagePopup) {

    imagePopup.addEventListener("click", (e) => {

        if (e.target === imagePopup) {

            closeGalleryPopup();

        }

    });

}

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeGalleryPopup();

    }

});

/* ==========================================
   READ MORE LETTER
========================================== */

const readMoreBtn = document.getElementById("readMore");
const hiddenLetter = document.getElementById("hiddenLetter");
const hiddenText = document.getElementById("hiddenText");

const fullLetter = `Dear Lavanya Das ❤️

Some people become memories.

But you became one of my favorite chapters.

Thank you for every smile,
every conversation,
and every beautiful moment.

I don't know what tomorrow holds,

but today...

I'm grateful that our paths crossed.

Keep smiling.

With Love,

Saz ❤️`;

function typeHiddenLetter() {

    if (!hiddenText) return;

    hiddenText.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        if (i >= fullLetter.length) {

            clearInterval(timer);

            if (readMoreBtn) {

                readMoreBtn.style.display = "none";

            }

            return;

        }

        if (fullLetter[i] === "\n") {

            hiddenText.innerHTML += "<br>";

        } else {

            hiddenText.innerHTML += fullLetter[i];

        }

        i++;

    }, 40);

}

if (readMoreBtn) {

    readMoreBtn.addEventListener("click", () => {

        if (hiddenLetter) {

            hiddenLetter.classList.add("open");

        }

        typeHiddenLetter();

    });

}
/* ==========================================
   PART 4
   FINAL SURPRISE + MUSIC
========================================== */

/* ==========================================
   ELEMENTS
========================================== */

const lastBtn = document.getElementById("lastBtn");
const finalPopup = document.getElementById("finalPopup");
const finalText = document.getElementById("finalText");
const closeFinal = document.getElementById("closeFinal");
const heartContainer = document.getElementById("heartContainer");

/* ==========================================
   FINAL MESSAGE
========================================== */

const finalMessage = `Dear Lavanya Das ❤️

Thank you for being one of the most beautiful chapters of my life.

No matter what happens in the future,

I'll always smile whenever I remember these moments.

You are truly special.

Keep smiling...

Always. 🌸`;

/* ==========================================
   TYPEWRITER
========================================== */

function typeFinalMessage(){

    if(!finalText) return;

    finalText.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        if(i>=finalMessage.length){

            clearInterval(timer);
            return;

        }

        if(finalMessage[i]==="\n"){

            finalText.innerHTML+="<br>";

        }else{

            finalText.innerHTML+=finalMessage[i];

        }

        i++;

    },40);

}

/* ==========================================
   FLOATING HEART
========================================== */

function createFloatingHeart(){

    if(!heartContainer) return;

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
        (20+Math.random()*25)+"px";

    heart.style.animationDuration=
        (3+Math.random()*2)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

/* ==========================================
   HEART BURST
========================================== */

function startHeartBurst(){

    let count=0;

    const burst=setInterval(()=>{

        createFloatingHeart();

        count++;

        if(count>=30){

            clearInterval(burst);

        }

    },120);

}

/* ==========================================
   OPEN FINAL POPUP
========================================== */

function openFinalPopup(){

    if(!finalPopup) return;

    if(bgMusic){

        bgMusic.pause();
        bgMusic.currentTime=0;

    }

    if(finalMusic){

        finalMusic.currentTime=0;

        finalMusic.play().catch(()=>{});

    }

    finalPopup.classList.add("active");

    typeFinalMessage();

    startHeartBurst();

}

/* ==========================================
   CLOSE FINAL POPUP
========================================== */

function closeFinalPopup(){

    if(!finalPopup) return;

    finalPopup.classList.remove("active");

}

/* ==========================================
   EVENTS
========================================== */

if(lastBtn){

    lastBtn.addEventListener("click",openFinalPopup);

}

if(closeFinal){

    closeFinal.addEventListener("click",closeFinalPopup);

}

if(finalPopup){

    finalPopup.addEventListener("click",(e)=>{

        if(e.target===finalPopup){

            closeFinalPopup();

        }

    });

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeFinalPopup();

    }

});
/* ==========================================
   PART 5 V2
   MEMORY JAR + CINEMATIC ROSE RAIN
========================================== */

const jarHearts = document.getElementById("jarHearts");
const memoryCount = document.getElementById("memoryCount");
const openJar = document.getElementById("openJar");

let memories = 0;
const maxMemories = 5;

/* ==========================================
   MEMORY COUNTER
========================================== */

function updateMemoryCounter(){

    if(memoryCount){

        memoryCount.innerText = memories;

    }

}

function addMemory(){

    if(memories >= maxMemories) return;

    memories++;

    updateMemoryCounter();

    const heart = document.createElement("div");

    heart.className = "jar-heart";

    heart.innerHTML = "❤️";

    jarHearts.appendChild(heart);

    if(memories === maxMemories){

        openJar.classList.add("ready");

    }

}

const memoryTimer = setInterval(()=>{

    addMemory();

    if(memories >= maxMemories){

        clearInterval(memoryTimer);

    }

},2000);


/* ==========================================
   ORIGINAL CINEMATIC ROSE RAIN
========================================== */

const petalImages = [

    "assets/images/petal1.png",
    "assets/images/petal2.png",
    "assets/images/petal3.png",
    "assets/images/petal4.png"

];

function roseRain(){

    for(let i=0;i<220;i++){

        const petal=document.createElement("img");

        petal.src =
        petalImages[
            Math.floor(Math.random()*petalImages.length)
        ];

        const size=12+Math.random()*35;
        const drift=(Math.random()-0.5)*900;
        const duration=7000+Math.random()*5000;
        const rotate=Math.random()*1440-720;
        const delay=Math.random()*4000;

        petal.style.position="fixed";
        petal.style.left=Math.random()*100+"vw";
        petal.style.top="-80px";
        petal.style.width=size+"px";
        petal.style.pointerEvents="none";
        petal.style.zIndex="99999";
        petal.style.opacity="0";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.style.opacity="1";

            petal.animate([

                {

                    transform:"translate(0,0) rotate(0deg)",
                    opacity:1

                },

                {

                    transform:`translate(${drift}px,120vh) rotate(${rotate}deg)`,
                    opacity:0

                }

            ],{

                duration:duration,
                easing:"ease-in-out",
                fill:"forwards"

            });

        },delay);

        setTimeout(()=>{

            petal.remove();

        },duration+delay);

    }

}


/* ==========================================
   MEMORY JAR OPEN
========================================== */

if(openJar){

    openJar.addEventListener("click",()=>{

        if(memories < maxMemories){

            alert("Collect all memories first ❤️");

            return;

        }

        if(bgMusic){

            bgMusic.pause();

            bgMusic.currentTime=0;

        }

        if(finalMusic){

            finalMusic.currentTime=0;

            finalMusic.play().catch(()=>{});

        }

        roseRain();

        setTimeout(()=>{

            roseRain();

        },2500);

        setTimeout(()=>{

            roseRain();

        },5000);

        setTimeout(()=>{

            alert(`🌸 Some memories never fade...

They bloom forever.

❤️ Thank You, Lavanya Das ❤️`);

        },3500);

    });

}


/* ==========================================
   INIT
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    updateMemoryCounter();

    console.log("Dear Lavanya Das ❤️ Loaded");

});
