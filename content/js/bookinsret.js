function load () {
    const preload = document.querySelector('.load')
    window.addEventListener('load',()=> {
    preload.style.display='none'
})
}
load()


const datateacher = JSON.parse(localStorage.getItem('about'))
const check = document.querySelectorAll('[type="checkbox"]');
let help = []

check.forEach((item)=> {
    item.addEventListener('click',()=> {
        if(item.checked === true) {
            help.push(item.value);
        }
    })
})
const Additional = document.getElementById('Additional')
const email = document.getElementById('email')
const FirstName = document.getElementById('FirstName')
const LastName = document.getElementById('LastName')
const Phone = document.getElementById('Phone')


// Start University

const listUnvi =document.querySelector('.list-unvi');
const  nameUnvi = document.querySelector('.name-unvi') 
const nameds = document.querySelectorAll('.named');
const University = document.getElementById('University')

listUnvi.addEventListener('click' , ()=> {
    nameUnvi.classList.toggle('active')
})

document.addEventListener('mouseup' , ()=> {
    nameUnvi.classList.remove('active')
})

let val;
nameds.forEach(named=> {
    named.addEventListener('click',()=> {
         val= named.dataset.value;
        University.value = val
    })
})



const bodySubject = document.querySelector('.body-subject')
const obj = JSON.parse(localStorage.getItem('about'))
const nameteache = document.querySelector('.nameteacher');
nameteache.textContent=obj.name
function displaySubject() {
    let boxsub = ''
    obj.services.forEach((ele , index)=>{
        boxsub+=`<div   class="p-3  pointer bg-white border rounded-2 col-sm-6 col-md-5  box-subject " data-value='${ele + index}'>
        <div>
        <p class="m-0 fs-8 text-dark">${ele}</p>
        <p class="m-0 fs-8 text-secondary grades">${obj.grades[index]}</p>
        <span class="m-0 fs-8 text-secondary">${obj.doctor[index]}</span>
        </div>
        </div>`
    })
    bodySubject.innerHTML=boxsub
}
displaySubject()

const boxSubject = document.querySelectorAll('.box-subject');
const subject = []

boxSubject.forEach((box)=> {
    box.addEventListener('click', (boxs)=> {
        boxSubject.forEach(t => {
            t.classList.remove('active')
        })
        box.classList.add('active');
        if(box.classList.contains('active')){
            let value = box.dataset.value
            subject.push(value)
        }
    })
})

const bodyDay = document.querySelector('.body-day');
const addDay = document.querySelector('.add-day');

addDay.addEventListener('click' , ()=> {
    bodyDay.innerHTML+=`<div class="mt-3 d-flex align-items-center gap-3">
    <div class="w-50">
<label for="day" class="fs-8 text-dark pointer">Day</label>
        <select name="day" id="day" class="pointer w-100 p-2 rounded-2" >
            <option value="Thursday">Thursday</option>
            <option value="Monday">Monday</option>
        </select>
    </div>
    <div class="w-50 ">
<label for="Time-slot" class="fs-8 text-dark pointer">Time slot</label>
        <select name="time" id="Time-slot" class="pointer w-100 fs-8-v p-2 rounded-2" >
            <option value="17">5pm - 6pm</option>
            <option value="18">6pm - 7pm</option>
        </select>
    </div>
</div>`
    
})

const daySession = document.getElementById('day');
const timeSession = document.getElementById('Time')

let valueDay;
let valueTime;
daySession.onchange= ()=> {
    valueDay=daySession.value
    
}

timeSession.onchange = ()=> {
    valueTime=timeSession.value
}



const radio = document.querySelectorAll('[type="radio"]');
let pay = [] ;

radio.forEach(radio=> {
    radio.addEventListener('click' , ()=> {
        if(radio.checked == true){
            pay.push(radio.dataset.value)
        }
    })
})
if(pay.length > 1) {
    pay.pop()
}


const imageTeacher = document.querySelector('.image-teacher')
const nameteacher = document.querySelector('.name-teacher');
const priceSession = document.querySelector('.price-Session');
const money = document.querySelector('.money')
const totole = document.querySelector('.totole')
const call = document.querySelector('.call')
const popup =document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');
const popupDown = document.querySelector('.popup-close')
imageTeacher.src=`content/asstes/image/${datateacher.img}`
nameteacher.textContent=`${datateacher.name}`
priceSession.textContent=`${datateacher.price}.00 EGP`
money.textContent=`${datateacher.price}.00 `
let totoleMoney = datateacher.price + 9 ;
totole.textContent = `${totoleMoney} EGP`
call.textContent=`call ${datateacher.name}`
const checkbook = document.querySelector('.checkbook');


checkbook.addEventListener('click',()=> {
    if(help.length > 0  && email.value != "" && Additional.value != "" && FirstName.value != "" &&  LastName.value != "" && Phone.value != "" && University.value != "" && pay.length > 0 ) {
        
        const session = {
            'help': help,
            'email': email.value,
            ' Additional': Additional.value,
            'firstname':FirstName.value,
            'lastname':LastName.value,
            'phone':Phone.value,
            'University':val,
            'subject':subject,
            'pay':pay,
            'day':valueDay,
            'time':valueTime
        }
        localStorage.setItem('datasession',JSON.stringify(session))
        if(pay[0] === "online"){
            window.location.href = 'paymant.html'
        }
        else {
            window.location.href = 'order.html'
            
        }
    }else {
        popup.classList.add('active')
        popupDown.classList.add('active')
        
    }
})

closePopup.addEventListener('click' , ()=> {
    popup.classList.remove('active')
    popupDown.classList.remove('active')
    
})







