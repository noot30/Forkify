// var data1=[];
// function getApiData1(){
//     return new Promise(function(callback){
//             var myHttps = new XMLHttpRequest();
//     myHttps.open('GET', 'https://jsonplaceholder.typicode.com/comments');
//     myHttps.send();
//     myHttps.addEventListener('readystatechange', function(){
//         if(myHttps.status == 200 && myHttps.readyState == 4){
//             data1 = JSON.parse(myHttps.response);
//             console.log(data1);
//             displayData1();
//             callback();
//         }
//     });
//     })

// }
// function displayData1(){
//     var cols1 = '';
//     for(var i=0; i<data1.length; i++){
//         cols1 += `
//         <div class="col-md-4">
//             <div class="card mt-5 text-center">
//                 <div class="card-body">
//                     <h2 class="card-title">${data1[i].id}</h2>  
//                     <p class="card-text">${data1[i].title}</p>
//                     <p class="card-text">${data1[i].body}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
//     document.getElementById('colsData1').innerHTML = cols1;
// }
// // getApiData1();

// var data2=[];
// function getApiData2(){
//     return new Promise(function(callback){
//     var myHttps = new XMLHttpRequest();
//     myHttps.open('GET', 'https://jsonplaceholder.typicode.com/albums');
//     myHttps.send();
//     myHttps.addEventListener('readystatechange', function(){
//         if(myHttps.status == 200 && myHttps.readyState == 4){
//             data2 = JSON.parse(myHttps.response);
//             console.log(data2);
//             displayData2();
//             callback();
//         }
//     });         
//     })

// }
// function displayData2(){
//     var cols2 = '';
//     for(var i=0; i<data2.length; i++){
//         cols2 += `
//         <div class="col-md-4">
//             <div class="card mt-5 text-center">
//                 <div class="card-body">
//                     <h2 class="card-title">${data2[i].id}</h2>  
//                     <p class="card-text">${data2[i].title}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
//     document.getElementById('colsData2').innerHTML = cols2;
// }
// // getApiData2();
// var data3=[];
// function getApiData3(callback){
//     return new Promise(function(callback){
//     var myHttps = new XMLHttpRequest();
//     myHttps.open('GET', 'https://jsonplaceholder.typicode.com/photos');
//     myHttps.send();
//     myHttps.addEventListener('readystatechange', function(){
//         if(myHttps.status == 200 && myHttps.readyState == 4){
//             data3 = JSON.parse(myHttps.response);
//             console.log(data3);
//             displayData3();
//             callback();
//         }
//     });
//     })
// }
// function displayData3(){
//     var cols3 = '';
//     for(var i=0; i<data3.length; i++){
//         cols3 += `
//         <div class="col-md-4">
//             <div class="card mt-5 text-center">
//                 <div class="card-body">
//                     <img src="${data3[i].thumbnailUrl}" alt="">
//                     <h2 class="card-title">${data3[i].id}</h2>  
//                     <p class="card-text">${data3[i].title}</p>
//                     <p class="card-text">${data3[i].url}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
//     document.getElementById('colsData3').innerHTML = cols3;
// }
// // getApiData3();
// var data4=[];
// function getApiData4(callback){
//     return new Promise(function(callback){
//             var myHttps = new XMLHttpRequest();
//     myHttps.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     myHttps.send();
//     myHttps.addEventListener('readystatechange', function(){
//         if(myHttps.status == 200 && myHttps.readyState == 4){
//             data4 = JSON.parse(myHttps.response);
//             console.log(data4);
//             displayData4();
//             callback();
//         }
//     });
//     })
// }
// function displayData4(){
//     var cols4 = '';
//     for(var i=0; i<data4.length; i++){
//         cols4 += `
//         <div class="col-md-4">
//             <div class="card mt-5 text-center">
//                 <div class="card-body">
//                     <h2 class="card-title">${data4[i].userId}</h2>        
//                     <p class="card-text">${data4[i].id}</p>  
//                     <p class="card-text">${data4[i].title}</p>
//                     <p class="card-text">${data4[i].completed}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
//     document.getElementById('colsData4').innerHTML = cols4;
// }
// // getApiData4();
// var data5=[];
// function getApiData5(){
//     return new Promise(function(callback){
//         var myHttps = new XMLHttpRequest();
//     myHttps.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     myHttps.send();
//     myHttps.addEventListener('readystatechange', function(){
//         if(myHttps.status == 200 && myHttps.readyState == 4){
//             data5 = JSON.parse(myHttps.response);
//             console.log(data5);
//             displayData5();
//             callback();
//         }
//     });
//     })
// }
// function displayData5(){
//     var cols5 = '';
//     for(var i=0; i<data5.length; i++){
//         cols5 += `
//         <div class="card col-md-4">
//             <div class="card mt-5 text-center">
//                 <div class="card-body">
//                     <h2 class="card-title">${data5[i].id}</h2>  
//                     <p class="card-text">${data5[i].name}</p>
//                     <p class="card-text">${data5[i].username}</p>
//                     <p class="card-text">${data5[i].email}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
//     document.getElementById('colsData5').innerHTML = cols5;
// }
// // getApiData5();
// // getApiData1().then(function(){
// //     getApiData2().then(function(){
// //         getApiData4().then(function(){
// //             getApiData3().then(function(){
// //                 getApiData5();
// //             })
// //         })
// //     })
// // })
var data = [];
async function food(meal){
    var response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${meal}`);
    var result = await response.json();
    data = result.data.recipes;
    displayData();
}
function displayData(){
    var cols = '';
    for(var i = 0; i < data.length; i++){
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
var links = document.querySelectorAll('.nav-link');
for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(e){
        e.preventDefault();
        var meal = this.textContent.toLowerCase().trim();
        food(meal);
    });
}
