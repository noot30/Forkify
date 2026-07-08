let data = [];
async function food(meal){
    let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${meal}`);
    let result = await response.json();
    data = result.data.recipes;
    displayData();
}
function displayData(){
    let cols = '';
    for(let i = 0; i < data.length; i++){
        cols += `
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card">
                <img src="${data[i].image_url}" class="card-img">
                <div class="card-body">
                    <h5>${data[i].title}</h5>
                    <p>${data[i].publisher}</p>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('colsData').innerHTML = cols;
}
food('pizza');
let links = document.querySelectorAll('.nav-link');
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(e){
        e.preventDefault();
        let meal = this.textContent.toLowerCase().trim();
        food(meal);
    });
}
