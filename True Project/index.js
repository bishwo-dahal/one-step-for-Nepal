/*
const threeBars = document.querySelector(".three-bars");
const barFirst = document.querySelector(".bar-1");
const barSecond = document.querySelector(".bar-2");
const barThird = document.querySelector(".bar-3");

threeBars.addEventListener("click",()=>{
    barFirst.classList.toggle("cross-bar-1");
    barSecond.classList.toggle("cross-bar-2");
    barThird.classList.toggle("cross-bar-3");
})
*/






const threeBars = document.querySelector(".three-bars");
const navigation = document.querySelector(".navigation");
function myFunction() {
    threeBars.classList.toggle("change");
    navigation.classList.toggle("navigation-toggle");
  }

const ripplesButton =   document.querySelector(".button");
if(ripplesButton !== null){

ripplesButton.addEventListener("click",function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.classList.add("ripple");
    this.appendChild(ripples);
    ripples.style.left = `${x}px`; 
    ripples.style.top = `${y}px`;

    setTimeout(() => { 
        ripples.remove(); 
    }, 300); 
})
}
// footer generator 
const footerText  = `        <div class="footer">
<div class="info-block">
<div class="logo">
    <img src="logo.svg" alt="LearnCodeIn">
</div>
<div class="location">
    <i class="fa fa-map-marker"></i>
    5<sup>th</sup> Floor, A-118,
    Sector-136, Noida, Uttar Pradesh            
</div>
<div class="feedback">
    <i class="fa fa-envelope" aria-hidden="true"></i>feedback@gmail.com
</div>
<div class="social-sites">
    <div class="foot-facebook"><i class="fa fa-facebook foot-social" aria-hidden="true"></i></div>
   <div class="foot-facebook"><i class="fa fa-instagram foot-social" aria-hidden="true"></i></div>
   <div class="foot-facebook"><i class="fa fa-linkedin foot-social" aria-hidden="true"></i></div>
   <div class="foot-facebook"><i class="fa fa-twitter foot-social" aria-hidden="true"></i> </div>  
   <div class="foot-facebook"><i class="fa fa-youtube foot-social" aria-hidden="true"></i> </div>         
</div>
</div>
<div class="first-column">
    <div class="foot-topic">Company</div>
    <div class="foot-first-subtopic foot-subtopic">
        <ul type = "none" class="suptopics">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">Careers</a></li>
            <li><a href="index.html">Privacy Policy</a></li>
            <li><a href="index.html">Contact us</a></li>
        </ul>

    </div>
</div>
<div class="second-column">
    <div class="foot-topic">Learn</div>
    <div class="foot-second-subtopic foot-subtopic">
        <ul type = "none" class="suptopics">
            <li><a href="index.html">About us</a></li>
            <li><a href="index.html">Careers</a></li>
            <li><a href="index.html">Privacy Policy</a></li>
            <li><a href="index.html">Contact us</a></li>
        </ul>
    </div>            
</div>
<div class="third-column">
    <div class="foot-topic">Practice</div>
    <div class="foot-third-subtopic foot-subtopic">
        <ul type = "none" class="suptopics">
            <li><a href="index.html">About us</a></li>
            <li><a href="index.html">Careers</a></li>
            <li><a href="index.html">Privacy Policy</a></li>
            <li><a href="index.html">Contact us</a></li>
            <li><a href="index.html">Careers</a></li>
            <li><a href="index.html">How To connect </a></li>
            <li><a href="index.html">Contact us</a></li>
        </ul>

    </div>
    
</div>
<div class="fourth-column">
    <div class="foot-topic">Contribute</div>
    <div class="foot-fourth-subtopic foot-subtopic">
        <ul type = "none" class="suptopics">
            <li><a href="index.html">About us</a></li>
            <li><a href="index.html">Careers</a></li>
            <li><a href="index.html">Languages </a></li>
            <li><a href="index.html">Contact us</a></li>
            <li><a href="index.html">Languages </a></li>
            <li><a href="index.html">Contact us</a></li>
        </ul>    
    </div>
    
</div>
</div>
<div class="copyright">
@LearnCodeIn All right reserved</div>`;

let footer  = document.querySelector("footer");

footer.innerHTML = footerText;
 

