const searchBtn = document.querySelector("#search-btn");
const mealList = document.querySelector("#meal");
const mealDetailContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.querySelector("#recipe-close-btn")
const gifIndex = document.querySelector("#gifOne");
 
//add eventListeners
searchBtn.addEventListener('click', getMealList);
gifIndex.addEventListener('click', )


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

 
 












