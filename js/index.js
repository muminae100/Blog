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
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

function getAllArticles(){
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



