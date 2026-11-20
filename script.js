// ---------- TYPING EFFECT (FIXED) ----------

const roleText = document.querySelector(".hero h2");

// Create an inner span so text updates don't cause layout/scroll jumps
const typingSpan = document.createElement("span");
roleText.textContent = ""; // Clear original text
roleText.appendChild(typingSpan);

const roles = [
    "History Undergrad",
    "Blogger",
    "Writer" ,
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typing() {
    let current = roles[roleIndex];

    if (!deleting) {
        typingSpan.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typing, 1500);
            return;
        }
    } else {
        typingSpan.textContent = current.substring(0, charIndex--);

        if (charIndex === 0) {
            deleting = false;
            roleIndex++;
            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typing, 80);
}

typing();





// ---------- SCROLL REVEAL ----------


const hiddenElements =
document.querySelectorAll(
"section, .project-card, .timeline-card, .content-box"
);



hiddenElements.forEach(element=>{

    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition=
    "all 0.8s ease";

});




function reveal(){


hiddenElements.forEach(element=>{


let position =
element.getBoundingClientRect().top;


let screen =
window.innerHeight;



if(position < screen - 100){


element.style.opacity="1";

element.style.transform=
"translateY(0)";


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();







// ---------- ACTIVE NAVIGATION ----------


const sections =
document.querySelectorAll("section");


const links =
document.querySelectorAll(
".nav-buttons a"
);



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


let top =
window.scrollY;


let offset =
section.offsetTop - 150;


let height =
section.offsetHeight;



if(
top >= offset &&
top < offset+height
){

current =
section.getAttribute("id");

}


});



links.forEach(link=>{


link.style.fontWeight="400";


if(
link.getAttribute("href")
.includes(current)
){

link.style.fontWeight="800";

}


});


});







// ---------- MOUSE SOFT EFFECT ----------


const dot =
document.createElement("div");


dot.className="mouse-dot";


document.body.appendChild(dot);



document.addEventListener(
"mousemove",
(e)=>{


dot.style.left =
e.clientX+"px";


dot.style.top =
e.clientY+"px";


});

document.getElementById("emailBtn").onclick = function(){

    const user = "yourname";
    const mail = "gmail.com";

    window.location.href = 
    "mailto:" + user + "@" + mail;

};

document.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message sent successfully!");

});
