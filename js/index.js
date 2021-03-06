// var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
// slideshows.forEach(initSlideShow);

// function initSlideShow(slideshow) {

//   var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

//   var index = 0, time = 10000;
//   slides[index].classList.add('active');  
  
//   setInterval( () => {
//     slides[index].classList.remove('active');
    

//     index++;
  
//     if (index === slides.length) index = 0; 
    
//     slides[index].classList.add('active');

//   }, time);
// }
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
// var closeSidenav = "document.getElementById('mySidenav')";
// window.onclick = function(event) {
//   if (event.target == closeSidenav) {
//    closeSidenav.style.width = "0";
//  }
// }

function getAllArticles(){
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response =>response.json()
  )
  .then(json =>{
    document.querySelector('#loader').className = "loader";
    json.forEach(element => {
      document.getElementById("articles-container").innerHTML +=`
    <div class="article">
    <table class="articles-table">
        
    <tbody>
    <tr>
    <td rowspan="2"><img src="img/biden.jpeg" width="150px" height="150px"></td>
    <td colspan="2"><p>${element.name}</p></td>
    </tr>

    <tr>
    <td rowspan="2"><p>President Joe Biden to take the oath of office today!</p></td>
    </tr>

    </tbody>

    </table>
    </div>
    `
    });
  })
}
getAllArticles();

function getRecentArticles(){
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response =>response.json()
  )
  .then(json =>{
    document.querySelector("#loader").className = "loader";
    json.forEach(element => {
      document.getElementById("recent-articles-container").innerHTML +=`
    <div class="recent-article">
    <table class="recent-articles-table">
        
    <tbody>
    <tr>
    <td rowspan="3"><img class="recent-articles-img" src="img/biden.jpeg" width="100px" height="100px"></td>
    <td style="color:#242582;">Politics</td>
    </tr>

    <tr>
    <td>President Joe Biden of America</td>
    </tr>
    <tr>
    <td id="recent-articles-date">Jan. 25, 2021, 2.50 p.m.</td>
    </tr>
    </tbody>

    </table>
    </div>
    `
    });
  })
}
getRecentArticles();



