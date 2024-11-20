const developerRole = document.getElementById('developer-role');
const roles = ["Java Full Stack Developer", "Web Developer"];
let index = 0;

function toggleRole() {
    developerRole.classList.remove('animate__fadeIn');
    developerRole.classList.add('animate__fadeOut');

    setTimeout(() => {
        developerRole.textContent = roles[index];
        developerRole.classList.remove('animate__fadeOut');
        developerRole.classList.add('animate__fadeIn');
         

  index = (index + 1) % roles.length; }, 500);   
  } setInterval(toggleRole, 1500); 

 
   // JavaScript for slider functionality
const slider = document.getElementById('slider');
let scrollAmount = 0;

function slide(direction) {
const imgWidth = slider.querySelector('img').offsetWidth + 10;  
const maxScroll = (imgWidth * (slider.children.length / 2));

// Calculate new scroll position
scrollAmount += direction * imgWidth;

// Loop the slider content
if (scrollAmount >= maxScroll) {
scrollAmount = 0;
} else if (scrollAmount < 0) {
scrollAmount = maxScroll - imgWidth;
}

// Apply translation
slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// toggle

let navBtn=document.getElementById('nav-btn');
let body = document.body;

navBtn.onclick=()=>{

if( document.body.style.backgroundColor=='black'){
body.style.backgroundColor='white';
document.querySelectorAll('.me-3').forEach(element => {
    element.style.color = 'black';
    });
    


}

else if(document.body.style.backgroundColor=='white') {
body.style.backgroundColor='black';
document.querySelectorAll('.me-3').forEach(element => {
element.style.color = 'skyblue';
});


}else{
body.style.backgroundColor='white';
}

}
