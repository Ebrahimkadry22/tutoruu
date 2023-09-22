// function load () {
//     const preload = document.querySelector('.load')
//     window.addEventListener('load',()=> {
//     preload.style.display='none'
// })
// }
// load()


window.addEventListener ('scroll' , function(){
    const nav = document.querySelector('.nav-fixed');
    nav.classList.toggle('fixed' , window.scrollY > 0 )
    
})

navbar()

// navmobila
function navbar () {
    const iconNav = document.querySelector('.icon-nav');
    const listMobila = document.querySelector('.nav-fixed .container')
    iconNav.addEventListener ('click' , function() {
        listMobila.classList.add('active')
        iconNav.style.display='none'
        
    })
    document.addEventListener('mouseup' , ()=> {
        listMobila.classList.remove('active')
        iconNav.style.display='block'
        iconNav.style.transition='var(--transition-3)'  
    })
}





const emai= document.getElementById('email')
const pass= document.getElementById('password')
const btn =document.querySelector('.submit')
const fieldEmail = document.querySelector('.field-email')
const fieldPass = document.querySelector('.field-pass')

const login = [
    {
        'id':1,
        'name':'ibrahim22@gmail.com',
        'pass':'12345'
    },
    {
        'id':2,
        'name':'kadry22@gmail.com',
        'pass':'2456'
    },
    {
        'id':3,
        'name':'Ahmed22@gmail.com',
        'pass':'5555'
    },
    {
        'id':4,
        'name':'mohmed55@gmail.com',
        'pass':'6666'
    },
    {
        'id':5,
        'name':'safe22@gmail.com',
        'pass':'7777'
    },

]


btn.addEventListener('click',()=> {
    Login()
    field()
})

function field() {
    if(emai.value == '') {
        fieldEmail.style.display='block'
    }
    if(pass.value == '') {
        fieldPass.style.display='block'
    }
}
const datalogin = JSON.parse(localStorage.getItem("login"))
function Login () {

    for(let i = 0 ; i < datalogin.length ; i++) {
        if(emai.value == datalogin[i].name && pass.value == datalogin[i].pass){
            localStorage.setItem('log',JSON.stringify(emai.value))
            window.location.href='index.html'
            break;
        }else {
            window.location.href='login.html'
        }
        
}
}


active () 
createEmail()
const loginPage = document.querySelector('.login-page')

function active () {
    const signlink = document.querySelector('.sign');
    const signUpPage = document.querySelector('.signUp');
    const signEmail = document.querySelector('.sign-email')
    const createEmail = document.querySelector('.create-email')
    
    signlink.addEventListener('click',()=> {
        signUpPage.style.display='flex'
        loginPage.style.display='none'
    })
    
    signEmail.addEventListener('click' , ()=> {
        signUpPage.style.display='none'
        createEmail.style.display='flex'
    })
}



function createEmail () {
    const nameuser = document.getElementById('name')
    const user = document.getElementById('Username')
    const phone = document.getElementById('phone')
    const University = document.getElementById('University')
    const emailNew = document.getElementById('emailcreate')
    const passwordcreate = document.getElementById('passwordcreate')
    const passwordconfirm = document.getElementById('confirmpassword')
    const btncreate = document.getElementById('btncreate')
    const succes = document.querySelector('.succes');
    const closeSucces = document.querySelector('.close-succes')
    const error = document.querySelector('.error')
    const btnError = document.querySelector('.btn-error')
    const descriptionError = document.querySelector('.description-error')
    const createEmail = document.querySelector('.create-email')
    
    
    btncreate.addEventListener('click',()=> {
        if(nameuser.value=="" || user.value == "" || phone.value == "" || University.value == "" || emailNew.value == "" || passwordcreate.value == "" || passwordconfirm.value == "") {
            error.style.display='block'
            descriptionError.textContent='Please register complete data'
            
        }
        else if (passwordcreate.value != passwordconfirm.value ) {
            error.style.display='block'
            descriptionError.textContent='Make Sure the passwords match'
        }
            
        else {
            const dataUser={
                'name':user.value,
                'pass':passwordcreate.value,
                "nameperson":nameuser.value,
                "phone":phone.value,
                "email":emailNew.value,
                "University" :University.value,
                "password":passwordconfirm.value
            }
            login.push(dataUser)
            localStorage.setItem('login',JSON.stringify(login))
                succes.style.display='block'
            
        }
        
    })

    closeSucces.addEventListener('click',()=> {
        succes.style.display='none'
        createEmail.style.display='none'
        loginPage.style.display='flex'
    })
    btnError.addEventListener('click' , ()=> {
        error.style.display='none'
    })
}