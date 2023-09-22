function load () {
    const preload = document.querySelector('.load')
    window.addEventListener('load',()=> {
    preload.style.display='none'
})
}
load() 
const datateacher = JSON.parse(localStorage.getItem('about'))
const datasession = JSON.parse(localStorage.getItem('datasession'))
const dayspan = document.querySelector('.day');
const dayNext= document.querySelector('.day-next-session');
const name = document.querySelector('.name')
const subject = document.querySelector('.subject')
const phone = document.querySelector('.phone')
const nameuser = document.querySelector('.name-user')
const price = document.querySelector('.price')
const Total = document.querySelector('.Total')
function day () {
    let today = new Date() ;
     let  day = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
     let  daynext = (today.getDate()+ 2) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      dayspan.textContent=`${day}`
      dayNext.textContent=`${daynext}`
      name.textContent=`${datateacher.name}`
      subject.textContent=`${datateacher.sub}`
      nameuser.textContent=`${datasession.email}`
      phone.textContent=`${datasession.phone}`
      price.textContent=`${datateacher.price}.00 EGP`
      var tot = datateacher.price + 9 ;
      Total.textContent=`${tot}.00 EGP`
}
day()