function load () {
    const preload = document.querySelector('.load')
        window.addEventListener('load',()=> {
        preload.style.display='none'
})
}
load()


// navtop

window.addEventListener ('scroll' , function(){
    const nav = document.querySelector('.nav-fixed');
    nav.classList.toggle('fixed' , window.scrollY > 0 )
    
})


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
navbar()

// Start login
user()

function user () {
    const out = document.querySelector('.logout');
    const nameUserlogin = document.querySelector('.name-user');
    const icon = document.querySelector('.link-login')
    const login = document.querySelector('.login')
    const Named = JSON.parse(localStorage.getItem('log'));
    if(Named != null) {
        nameUserlogin.style.display='block'
        nameUserlogin.textContent=`${Named}`
        icon.style.display='none'
        login.style.height='0'
        login.style.width='0'
        login.style.border='0'
        out.style.display='block'
    }
    else {
        nameUserlogin.style.display='none'
        
    }
}

// start log out
logOut()
function logOut () {
    const out = document.querySelector('.logout');
    const localname = JSON.parse(localStorage.getItem('log'));
    if(localname == null){
        out.style.display='none'
    }else {
        out.style.display='flex'
    }
    out.addEventListener('click',()=> {
        localStorage.removeItem('log');
        window.location.href='login.html'
    })
}  


// Start animation

const text = document.querySelector('.word');
var typed = new Typed ('#typed' , {
    strings:['class' , 'Peer Tutors','Class Notes','Student`s Experieneces','class Reviews','Assignment Help','Exam Reevisions',"Tips and Tri"],
    typeSpeed:  50,
    backSpeed:  50,
    backDelay: 1000,
    startDelay: 1000,
    smartBackspace: true, 
    fadeOut: true,
    loop: true,
    showCursor: true,
    cursorChar: ``,
    autoInsertCss: true,
})





