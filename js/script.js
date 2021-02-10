window.addEventListener("load", (e)=>{
    document.onkeydown = function(e){
        if (event.keyCode === 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) ) {
            return false;   
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }

  

        if (e.ctrlKey  && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };

    // document.addEventListener('contextmenu', function(e){
    //     e.preventDefault();
    // }, false);
});

window.addEventListener('DOMContentLoaded', (e)=>{
   
	document.onkeydown = function(e){
        if (event.keyCode === 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) ) {
            return false;   
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }

  

        if (e.ctrlKey  && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };
    
    // MENU
    document.addEventListener('contextmenu', function(e){
        e.preventDefault();
    }, false);


AOS.init({
    duration: 1200,
});

});



async function fetchApi(url1){
    const dataFetch = await fetch(url1, {
        method: 'GET',
        headers:{
            Accept:'application/json',
            // Authorization: auth
        }
    });

    const data = await dataFetch.json();

    return data;
}




async function getGambar(){

    const data = await fetchApi('./js/data.json');
    
    const containerSertifikat = document.querySelector('.image-sertifikat');
    let cards = '';
    let response = data[0];
    response.data.forEach(res => cards += showGambar(res))
    containerSertifikat.innerHTML = cards;
}

getGambar();


function showGambar(show){
    return `
    <div class="col-md-3 col-lg-3 col-12">
        <div class="card mb-3" data-aos="fade-down">
        <img src="${show.name}" class="card-img-top" alt="${show.title}">
            <div class="card-body">
                <h5 class="card-title">${show.title}</h5>
            </div>
        </div> 
    </div> 
    `
}
// divider


const auth = "18723444-e4b201efdb3be39e4ddb22521";

window.addEventListener("scroll", function(){
    const navbar = document.querySelector('.navbar-dark');
        if(this.scrollY >= 640){
            navbar.classList.add("bg-dark")
        }else{
            navbar.classList.remove("bg-dark");
        }
});

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});


{/* <span onclick="setDarkMode(true)">
              <i class="fa fa-2x fa-moon-o switch-moon"></i>
            </span> */}


// START DARK MODE REFACTORING
const currentThem = localStorage.getItem("them");
if (currentThem === "dark") {
    setDarkMode();
}

function setDarkMode(){
   
    let isDark = document.body.classList.toggle('darkmode')
    if (isDark) {
        fontAwesome = '☀️';

        localStorage.setItem("them", "dark")
    }else{
        fontAwesome = '🌑'
       
        localStorage.removeItem("them")
    }

    document.getElementById('darkBtn').innerHTML = fontAwesome;
}

// END DARKMODE REFACTORING
            
// // START DARK MODE
// const currentThem = localStorage.getItem("them");
// if (currentThem === "dark") {
//     setDarkMode(true);
// }



// function setDarkMode(isDark){
//     if (isDark) {
//         document.body.setAttribute('id','darkmode');
//         localStorage.setItem("them", "dark")
//     }else{
//         document.body.setAttribute('id','home');
//         localStorage.removeItem("them")
//     }
// }

// // END DARKMODE






// function smoothScroll(target, duration)
// {
// var target = document.querySelector(target);
// var targetPosition = target.getBoundingClientRect().top;
// var startPosition = window.pageYOffset;
// var distance = targetPosition - startPosition;
// var startTime = null;

//     function animation(currentTime){
//         if(startTime === null) startTime = currentTime;
//         console.log(startTime);
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);

//         window.scrollTo(0,run);
//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }
//     function ease (t, b, c, d) {
//         return c * Math.sin(t/d * (Math.PI/2)) + b;
//     };
    

// requestAnimationFrame(animation);
// }

const links = document.querySelectorAll('#navbarNav .nav-link');
links.forEach(link => {
    console.log(link)
    
    // link.addEventListener("click", clickHandler);
    link.addEventListener('click', function(e){
        // take current active then remove it
        links.forEach(current => current.classList.remove('active'))
        // give new active 
        this.classList.add('active');

        const href= this.getAttribute('href');
       

        

        // if (href === '#home') {
        //     document.body.scrollTop = 0;
        //     document.documentElement.scrollTop = 0;
        // }else{
        //     const offsetTop = document.querySelector(href).pageYOffset;


        //     scroll({
        //         top: offsetTop,
        //         behavior:"smooth"
        //     }); 

        //     // window.scrollBy({
        //     //     top:50,
        //     //     behavior: "smooth"
        //     // })
        // }


 
    });

});





// function clickHandler(e){
//     e.preventDefault();


    
//     const href = this.getAttribute("href");
//     // console.log(href)
  
//     if(href === '#home'){
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     }else{
//         const offsetTop = document.querySelector(href).offsetTop -50;

//         scroll({
//             top: offsetTop,
//             behavior: "smooth"
//         });
//         // document.querySelector(href).scrollIntoView({
//         //     behavior: "smooth"
//         //   });
//     }
// }


// async function fetchApi(url){
//     const dataFetch = await fetch(url, {
//         method: 'GET',
//         headers:{
//             Accept:'application/json',
//             // Authorization: auth
//         }
//     });

//     const data = await dataFetch.json();
//     return data;
// }



// // showCard();

// async function getImage(){

//     const data = await fetchApi('https://pixabay.com/api/?key=18723444-e4b201efdb3be39e4ddb22521&q=programming&image_type=photo');
    
//     const containerProject = document.querySelector('.image-project');
//     let cards = '';
//     data.hits.forEach(hit => {
//         cards += showCard(hit)
//         // console.log(cards +=showCard(hit))
//     });
//     containerProject.innerHTML = cards;
//     console.log(data)
// }


//  function showCard(h){
//     return `
//     <div class="col-md-3 col-lg-3 col-12">
//         <div class="card mb-3">
//         <img src="${h.userImageURL}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${h.user}</h5>
//             </div>
//         </div> 
//     </div> 
//     `
// }

// getImage();

