var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

  var index = 0, time = 10000;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Go over each slide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
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



