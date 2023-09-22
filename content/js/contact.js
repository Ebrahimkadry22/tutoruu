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

const name =document.getElementById('name')
const email =document.getElementById('email')
const massage = document.getElementById('massage')
const btnsubmit = document.querySelector('.btnsubmit')
const popup =document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');
btnsubmit.addEventListener('click', (e)=> {
e.preventDefault()
if(name.value != "" && email.value != "" && massage.value != "") {
    popup.classList.add('active')
    name.value=''
    email.value=''
    massage.value=''
}
})

    closePopup.addEventListener('click' , ()=> {
        popup.classList.remove('active')
    })





