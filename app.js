//
// // get attribute get the data by id 
// function foo(){
//     var a = document.getElementById('inp');
//     var b = a.getAttribute('name');
//     console.log(b)

// }


//
// has attribute check the attribute is available or not 
// function foo(){
//     var a = document.getElementById('inp');
//     var b = a.hasAttribute('class');
//     console.log(b)

// }




//
// set attribute ke means hain agaar nai hai toh lga toh Attribute 
// function foo(){
//     var a = document.getElementById('inp');
//     var b = a.setAttribute('class', 'aaa');
//     console.log(b)

// }


// Navigation Bar full Resposive

let homepages = document.querySelector('.home-pages');
let SocialMedia = document.querySelector('.Social-Media');
let togglebtn = document.querySelector('.toggle-btn');
let mainnvabar = document.querySelector('.main-nav-bar');
let logooneElement = document.querySelector('.logo-one');
let codingElement = document.querySelector('.coding');

function AutoResizing(){
    const mainwindow = window.innerWidth;
    if(mainwindow <= 997){
        homepages.style.display = 'none';
        SocialMedia.style.display = 'none';
        togglebtn.style.display = 'block';
        mainnvabar.style.padding = '30px';
        logooneElement.style.color = 'blue';
        codingElement.style.fontsize = '30px';

    } else {
        homepages.style.display = 'block';
        SocialMedia.style.display = 'flex';
        togglebtn.style.display = 'none'
        mainnvabar.style.padding = '0';
        logooneElement.style.color = 'red';
        codingElement.style.fontsize = '30px';
    }
}

AutoResizing()

window.addEventListener('resize', AutoResizing);