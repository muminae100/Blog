var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.body.style.backgroundColor = "rgba(0,0,0, .4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
} 

function getArticles(){
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response =>response.json()
  )
  .then(json =>{
    // document.querySelector('#loader').className = "loader";
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
getArticles();

// function getFeaturedArticles(){
//   fetch('https://jsonplaceholder.typicode.com/users/')
//   .then(response => response.json()
//   )
//   .then(json =>{

//   })
// }