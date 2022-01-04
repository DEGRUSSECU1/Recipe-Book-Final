const searchBtn = document.querySelector("#search-btn");
const mealList = document.querySelector("#meal");
const mealDetailContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.querySelector("#recipe-close-btn")
const gifIndex = document.querySelector("#gifOne");
const tellTimeBtn = document.querySelector('#tell-time');
//add eventListeners
searchBtn.addEventListener('click', getMealList);
tellTimeBtn.addEventListener('click', tellTime);

//get meal list that matches with the ingredients


async function getMealList () {
  let searchInputText  = document.getElementById("search-input").value.trim();
  let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchInputText}&app_id=698b578c&app_key=%20b7ebc4b3cb6a36ca47086edba0ef31a8`)
  let data = await response.json();
  console.log(data);
  populateRecipes(data);
}


  function populateRecipes(data) {
    recipe = data.hits.recipe
    let html = " ";
     if(data.hits) {
       data.hits.forEach(hits => {
     html += ` 
                    <div class="meal-item" data-id = "${hits.recipe}" >
                      <div class="meal-img">
                        <img src="${hits.recipe.image}" alt="food image">
                      </div>
                      <div class="meal-name">
                        <h3>${hits.recipe.label}</h3>
                        <a href="${hits.recipe.url}" class="recipe-btn">Get Recipe</a>
                      </div>
                    </div>
                    `;
                  });
                }
             
              mealList.innerHTML = html;
          };
  getMealList();

function tellTime() {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let now = new Date();
  let month = months[now.getMonth()];
  let day = weeks[now.getDate()];
  let year = now.getFullYear();
  let dayNum = now.getUTCDay();
  let theHr = now.getHours();
  let theMin = now.getMinutes();
  let theSec = now.getSeconds();
  let period = "AM";
  if(theHr >= 12){
    period = "PM";
  }
  if(theHr == 0){
    theHr = 12;
  }
  if(theHr > 12){
    theHr = theHr - 12;
  }
document.getElementById("month").innerHTML = month;
document.getElementById("dayname").innerHTML = day;
document.getElementById("year").innerHTML = year;
document.getElementById("daynum").innerHTML = dayNum;
document.getElementById("hour").innerHTML = theHr;
document.getElementById("minutes").innerHTML = theMin;
document.getElementById("seconds").innerHTML = theSec;
document.getElementById("period").innerHTML = period;

}
tellTime();









