
function load () {
    const preload = document.querySelector('.load')
    window.addEventListener('load',()=> {
    preload.style.display='none'
})
}
load()


const iconBar = document.querySelector('.icon-bar')
const close = document.querySelector('.icon-close')
const navMobila = document.querySelector('nav .container');
function navbar () {
   
   iconBar.addEventListener('click' , ()=> {
       navMobila.style.left='0'
       // close.style.display='block'
   })
   close.addEventListener('click' , ()=> {
       navMobila.style.left='-150%'
       // close.style.display='none'
   });
   
   document.addEventListener('mouseup',()=> {
       navMobila.style.left='-150%'
   } )

}

navbar()



const teache = JSON.parse(localStorage.getItem('about'));
const nam = document.querySelector('.nameteacher');
const img = document.getElementById('content-img');
const tea = document.querySelector('.teacher');
const money = document.querySelector('.money')
const btn = document.querySelector('.btn-book');
const boxSubject = document.querySelector('.box-subject')
const boxday = document.querySelector('.box-day')
const about =document.querySelector('.about')

img.src=`content/asstes/image/${teache.img}`
nam.textContent=teache.name
tea.textContent=teache.name
money.textContent=teache.price + `EGP/hr`
btn.setAttribute('data-id',teache.id);
btn.textContent='Book a session with ' + teache.name;

btn.addEventListener('click' ,()=> {
    window.location.href='bookinginsret.html'
})

// Start tabs about
const items = document.querySelectorAll('.item');
const tabs = document.querySelectorAll('.tab');
items.forEach((i , index)=> {
    i.addEventListener('click' , ()=>{
        items.forEach(t => {
            t.classList.remove('active')
        })
        i.classList.add('active');
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tabs[index].classList.add('active')

    })
})
displaySubject()

function displaySubject() {
    let boxsub = ''
    teache.services.forEach((ele , index)=>{
        boxsub+=`<div class="p-3 border rounded-2 col-sm-6 col-md-5  box-subject ">
        <div>
        <p class="m-0 fs-8 text-dark">${ele}</p>
        <p class="m-0 fs-8 text-secondary grades">${teache.grades[index]}</p>
        <span class="m-0 fs-8 text-secondary">${teache.doctor[index]}</span>
        </div>
        </div>`
    })
    boxSubject.innerHTML=boxsub
    let boxandtime = ''
    teache.day.forEach((ele , index)=>{
        boxandtime+=`
        <div class="p-3 border rounded-2 col-sm-6 col-md-5  ">
        <div>
            <p class="m-0 fs-8 text-dark">${ele}</p>
            <p class="m-0 fs-8 color-secondary">${teache.time}</p>
            
        </div>
        </div>
        `
    })
    boxday.innerHTML=boxandtime
    about.textContent=teache.about
    
}

logout()
function logout(){
const logout =document.querySelector('.log');
const localname = JSON.parse(localStorage.getItem('log'));
if(localname == null) {
    logout.style.display='none'
}else {
    logout.style.display='block'

}
logout.addEventListener ('click' , ()=> {
    localStorage.removeItem('log');
        window.location.href='login.html'
})
}


