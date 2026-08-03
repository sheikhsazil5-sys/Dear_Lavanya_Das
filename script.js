/* ===========================
   Dear Lavanya Das
   Script.js
=========================== */
// Falling Petals
const popupMessage = `Before you continue...

Thank you for opening this little corner of my heart.

I hope this little surprise brings a smile to your face.

❤️`;

const petals = document.querySelector(".petals");
function typePopupLetter(){

    const letter = document.getElementById("popupLetter");
const btn = document.getElementById("continueBtn");

btn.style.opacity = "0";
btn.style.transform = "translateY(15px)";
    letter.innerHTML = "";

    let i = 0;

    const typing = setInterval(()=>{

        if(i < popupMessage.length){

            if(popupMessage.charAt(i) === "\n"){

                letter.innerHTML += "<br>";

            }else{

                letter.innerHTML += popupMessage.charAt(i);

            }

            i++;

        }else{

            clearInterval(typing);
           letter.innerHTML = popupMessage.replace(/\n/g,"<br>");
           btn.style.opacity = "1";
btn.style.transform = "translateY(0)";

        }

    },80);

}

function createPetal(){

    const petal=document.createElement("div");

    petal.classList.add("petal");

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(8+Math.random()*5)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },13000);

}

setInterval(createPetal,500);

// Envelope

const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const envelope = document.querySelector(".envelope");
const continueBtn = document.getElementById("continueBtn");
const bgMusic = document.getElementById("bgMusic");
const finalMusic = document.getElementById("finalMusic");

bgMusic.volume = 0.35;
finalMusic.volume = 0.45;

openBtn.addEventListener("click",()=>{

    overlay.classList.add("active");

    setTimeout(()=>{

        envelope.classList.add("open");

        typePopupLetter();

    },800);

});

continueBtn.addEventListener("click",()=>{

    overlay.classList.remove("active");
   bgMusic.play().catch(()=>{});

    envelope.classList.remove("open");

    document.querySelector(".story").scrollIntoView({
        behavior:"smooth"
    });

});


// Scroll Reveal

const sections=document.querySelectorAll(".story,.timeline,.gallery,.special,.letter,.music,.ending");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeImage = document.getElementById("closeImage");

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        popup.style.display="flex";
        popupImg.src=img.src;

    });

});

closeImage.addEventListener("click",()=>{

    popup.style.display="none";

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});
// ===============================
// Final Surprise
// ===============================

const lastBtn = document.getElementById("lastBtn");
const finalPopup = document.getElementById("finalPopup");
const finalText = document.getElementById("finalText");
const closeFinal = document.getElementById("closeFinal");

const finalMessage = `Dear Lavanya Das ❤️

Thank you for being one of the most beautiful chapters of my life.

No matter what happens in the future,
I'll always smile whenever I remember these moments.

You are truly special.

Keep smiling... Always. 🌸`;

function typeFinalMessage(){

    finalText.innerHTML = "";

    let i = 0;

    const typing = setInterval(()=>{

        if(i < finalMessage.length){

            if(finalMessage.charAt(i) === "\n"){
                finalText.innerHTML += "<br>";
            }else{
                finalText.innerHTML += finalMessage.charAt(i);
            }

            i++;

        }else{

            clearInterval(typing);

        }

    },40);

}

if(lastBtn && finalPopup && finalText && closeFinal){

    lastBtn.addEventListener("click",()=>{

        finalPopup.style.display = "flex";

        typeFinalMessage();

    });

    closeFinal.addEventListener("click",()=>{

        finalPopup.style.display = "none";

    });

}
function createHeart(){

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    document.getElementById("heartContainer").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4000);

}

lastBtn.addEventListener("click",()=>{

    let count = 0;

    const burst = setInterval(()=>{

        createHeart();

        count++;

        if(count >= 25){
            clearInterval(burst);
        }

    },120);

});
// ===============================
// Read More Letter
// ===============================

const readMore = document.getElementById("readMore");
const hiddenLetter = document.getElementById("hiddenLetter");
const hiddenText = document.getElementById("hiddenText");

const fullLetter = `Dear Lavanya Das❤️

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

Saz❤️`;

readMore.addEventListener("click",()=>{

    hiddenLetter.classList.add("open");

    hiddenText.innerHTML="";

    let i=0;

    const typing=setInterval(()=>{

        if(i<fullLetter.length){

            if(fullLetter.charAt(i)==="\n"){

                hiddenText.innerHTML+="<br>";

            }else{

                hiddenText.innerHTML+=fullLetter.charAt(i);

            }

            i++;

        }else{

            clearInterval(typing);

            readMore.style.display="none";

        }

    },40);

});
// ===============================
// MEMORY JAR
// ===============================

const jarHearts = document.getElementById("jarHearts");
const memoryCount = document.getElementById("memoryCount");
const openJar = document.getElementById("openJar");

let memories = 0;
const maxMemories = 5;

// Add Heart Function
function addMemoryHeart(){

    if(memories >= maxMemories) return;

    memories++;

    memoryCount.innerText = memories;

    const heart = document.createElement("div");
    heart.className = "jar-heart";
    heart.innerHTML = "❤️";

    jarHearts.appendChild(heart);

    if(memories === maxMemories){

        openJar.style.boxShadow =
        "0 0 25px rgba(255,105,180,.8)";

        openJar.style.transform = "scale(1.05)";
    }

}

// Demo (Automatically fills every 2 seconds)
// Baad me isko Story, Gallery, Letter se connect karenge.
setInterval(()=>{

    addMemoryHeart();

},2000);

// ===============================
// CINEMATIC ROSE PETAL RAIN + OPEN MEMORY JAR
// ===============================

const petalImages = [
    "assets/images/petal1.png",
    "assets/images/petal2.png",
    "assets/images/petal3.png",
    "assets/images/petal4.png"
];

function roseRain(){

    for(let i=0;i<220;i++){

        const petal=document.createElement("img");

        petal.src = petalImages[Math.floor(Math.random()*petalImages.length)];

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

// ===============================
// OPEN MEMORY JAR
// ===============================

openJar.addEventListener("click",()=>{
   console.log(memories);

    if(memories < maxMemories){

        alert("Collect all memories first ❤️");
        return;

    }

    // 🌹 3 Waves of Rose Petals
   bgMusic.pause();
bgMusic.currentTime = 0;
finalMusic.play().catch(()=>{});
    roseRain();

    setTimeout(()=>{
        roseRain();
    },2500);

    setTimeout(()=>{
        roseRain();
    },5000);

    setTimeout(()=>{

        alert("🌸 Some memories never fade...\n\nThey bloom forever.\n\n❤️ Thank You, Lavanya Das❤️");

    },3500);

});
alert("Script Loaded");
// ================= LOADER =================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("loader-hide");

},3000);

});
