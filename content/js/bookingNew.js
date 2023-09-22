function load() {
    const preload = document.querySelector('.load')
    window.addEventListener('load', () => {
        preload.style.display = 'none'
    })
}
load()

const iconBar = document.querySelector('.icon-bar')
const close = document.querySelector('.icon-close')
const navMobila = document.querySelector('nav .container');
function navbar() {

    iconBar.addEventListener('click', () => {
        navMobila.style.left = '0'
        
    })
    close.addEventListener('click', () => {
        navMobila.style.left = '-150%'
        
    });

    document.addEventListener('mouseup', () => {
        navMobila.style.left = '-150%'
    })

}

navbar()


const btnSort = document.querySelector('.btn-sort');
const downSort = document.querySelector('.down-sort')
const unvi = document.querySelector('.btn-unvi');
const down = document.querySelector('.down-unvi');
const sub = document.querySelector('.sub')
const downsub = document.querySelector('.down-sub')

addevent(unvi, down)
addevent(btnSort, downSort)
addevent(sub, downsub)


function addevent(item1, item2) {
    item1.addEventListener('click', (e) => {
        e.preventDefault();
        item2.classList.toggle('active')
    })
    document.addEventListener('mouseup', () => {
        item2.classList.remove('active')
    })
}


logout()
function logout() {
    const logout = document.querySelector('.log');
    const localname = JSON.parse(localStorage.getItem('log'));
    if (localname == null) {
        logout.style.display = 'none'
    } else {
        logout.style.display = 'block'

    }
    logout.addEventListener('click', () => {
        localStorage.removeItem('log');
        window.location.href = 'login.html'
    })
}

// Start data server 
//   let datatea = async ()=> {
//    let res = await fetch('http://localhost:3000/teacher',{
//     method:'GET',
//  }).then((res)=> res.json());
//  console.log(res);
//   }
// datatea()

let teachers = [
    {
        "id": 0,
        "price": 150,
        "name": "salma salem",
        "img": "1.webp",
        "sub": "research Writing",
        "evaluation": 5,
        "univ": "Auc",
        "expert": 6,
        "day": ["Wednesday", "Thursday", "Sunday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Research Writing", "Introduction to Political Science ", "Freshman Writing", "Scientific Thinking", "Philosophical Thinking", "Introduction to Comparative Politics", "Introduction to Psychology"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true
    },
    {
        "id": 1,
        "price": 125,
        "name": "gehad ahmed",
        "img": "2.webp",
        "sub": "fundamentals of Computing I",
        "evaluation": 5,
        "univ": "Auc",
        "expert": 6,
        "day": ["Thursday", "monday"
        ],
        "about": "Gehad dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 2,
        "price": 250,
        "name": "mariam hesham",
        "img": "3.webp",
        "sub": "Introduction to Political Science II",
        "evaluation": 5,
        "univ": "Auc",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "monday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 3,
        "price": 200,
        "name": "layal tantawi",
        "img": "4.webp",
        "sub": "Introduction to Psychology",
        "evaluation": 5,
        "univ": "Auc",
        "expert": 3,
        "day": ["Thursday", "monday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 4,
        "price": 175,
        "name": "salma abdellatif ",
        "img": "5.webp",
        "sub": "fundamentals of computing II",
        "evaluation": 5,
        "univ": "Auc",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "sunday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 5,
        "price": 150,
        "name": "Fadia Habib ",
        "img": "6.webp",
        "sub": "Introduction to Macroeconomics",
        "evaluation": 5,
        "univ": "Auc",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "sunday"
        ],
        "most": true

    },
    {
        "id": 6,
        "price": 120,
        "name": "Arwa Aboulella ",
        "img": "7.webp",
        "sub": "Introduction to Macroeconomics",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["firday", "Thursday", "sunday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 7,
        "price": 150,
        "name": "karim wagdy",
        "img": "9.webp",
        "sub": "Computer Organization and System Programming",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 8,
        "price": 80,
        "name": "Omar",
        "img": "10.webp",
        "sub": "Computer Programming Lab",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 9,
        "price": 250,
        "name": "Farah mokhtar",
        "img": "1.webp",
        "sub": "Electronic Business and Government",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 10,
        "price": 50,
        "name": "Salma Tarek",
        "img": "2.webp",
        "sub": "Mathematics III",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 11,
        "price": 150,
        "name": "Mai Eldorghamy",
        "img": "3.webp",
        "sub": "Concepts of Programming languages",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 7,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 12,
        "price": 200,
        "name": "Salma moftah ",
        "img": "4.webp",
        "sub": "Evidence Law",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 13,
        "price": 100,
        "name": "Abdelrahman",
        "img": "5.webp",
        "sub": "Portfolio Management and Investment",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 14,
        "price": 150,
        "name": "Ahmed Nagy",
        "img": "6.webp",
        "sub": "Portfolio Management and Investment",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 15,
        "price": 100,
        "name": "Shahd Moataz",
        "img": "7.webp",
        "sub": "Electronic Business and Government",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 16,
        "price": 300,
        "name": "Youssef khaled",
        "img": "8.webp",
        "sub": "Mathematics and Numerical Computations for Civil Engineering",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 17,
        "price": 200,
        "name": "Jana dessouky",
        "img": "9.webp",
        "sub": "Electronic Business and Government",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 18,
        "price": 99,
        "name": "Nosaiba Ibrahim",
        "img": "10.webp",
        "sub": "Electronic Business and Government1",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 19,
        "price": 150,
        "name": "Ahmad Maged Mohamed Farid",
        "img": "1.webp",
        "sub": "Computer Programming Lab",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 20,
        "price": 150,
        "name": "Abdullah Maged",
        "img": "2.webp",
        "sub": "Introduction to Computer Science",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 21,
        "price": 230,
        "name": "Noureldin Yahia",
        "img": "3.webp",
        "sub": "Introduction to Computer Science",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "most": true

    },
    {
        "id": 22,
        "price": 100,
        "name": "Farida Mohamed",
        "img": "4.webp",
        "sub": "General & Inorganic Chemistry",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 23,
        "price": 125,
        "name": "Donia Sharaf",
        "img": "5.webp",
        "sub": "Introduction to Computer Science",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 24,
        "price": 50,
        "name": "Sherifa Hammoud",
        "img": "6.webp",
        "sub": "Mathematics for Business Informatics III",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 25,
        "price": 50,
        "name": "Salma Ahmed ",
        "img": "7.webp",
        "sub": "Introduction to Research",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 26,
        "price": 100,
        "name": "Youssef Muhammed Shawky ",
        "img": "3.webp",
        "sub": "Cost Accounting I",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 27,
        "price": 200,
        "name": "Lamis",
        "img": "8.webp",
        "sub": "Selected Topics in Arcitectural Computing",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 28,
        "price": 150,
        "name": "Malak Ahmed",
        "img": "10.webp",
        "sub": "Financial Management I",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 8,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 29,
        "price": 170,
        "name": "Maha",
        "img": "2.webp",
        "sub": "Consumer Behavior",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 8,
        "day": ["firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 30,
        "price": 150,
        "name": "Kareema Bakr",
        "img": "3.webp",
        "sub": "Introduction to Research",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 8,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true

    },
    {
        "id": 31,
        "price": 110,
        "name": "Salma ahmed",
        "img": "5.webp",
        "sub": "Freshman 1",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "most": true
    },
    {
        "id": 32,
        "price": 180,
        "name": "Youssef Elsawi",
        "img": "6.webp",
        "sub": "Financial Accounting II",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 33,
        "price": 200,
        "name": "Hassan",
        "img": "7.webp",
        "sub": "Tax Accounting I",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 34,
        "price": 200,
        "name": "Marwan Hazem",
        "img": "8.webp",
        "sub": "Fixed Prosthodontics (1)",
        "evaluation": 5,
        "univ": "BUE",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 35,
        "price": 170,
        "name": "Raghad Magdy",
        "img": "9.webp",
        "sub": "Biochemistry",
        "evaluation": 5,
        "univ": "BUE",
        "expert": 7,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 36,
        "price": 200,
        "name": "Osama Desouki Hussein Mohamed Hussein",
        "img": "10.webp",
        "sub": "Maths for Communications",
        "evaluation": 5,
        "univ": "BUE",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 37,
        "price": 100,
        "name": "Toqa Asaad",
        "img": "2.webp",
        "sub": " Analytical Chemistry-1",
        "evaluation": 5,
        "univ": "BUE",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 38,
        "price": 120,
        "name": "Marina Tawadros",
        "img": "1.webp",
        "sub": "Financial Accounting",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 1,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 39,
        "price": 100,
        "name": "Shady Zafer",
        "img": "2.webp",
        "sub": "Maths for Communications",
        "evaluation": 5,
        "univ": "BUE",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 40,
        "price": 150,
        "name": "ali wassif",
        "img": "7.webp",
        "sub": "German 1",
        "evaluation": 5,
        "univ": "BUE",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 41,
        "price": 162,
        "name": "Mohamed Ahmed",
        "img": "7.webp",
        "sub": "German 1",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 42,
        "price": 140,
        "name": "Camellia Rashad",
        "img": "9.webp",
        "sub": "Introduction to Microeconomics",
        "evaluation": 5,
        "univ": "BUE",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 43,
        "price": 200,
        "name": "hend",
        "img": "10.webp",
        "sub": "Introduction to Psychological Statistics",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 44,
        "price": 80,
        "name": "Malak Helali",
        "img": "5.webp",
        "sub": "Electronic Business and Government",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 45,
        "price": 150,
        "name": "Omar Mamdouh",
        "img": "7.webp",
        "sub": "Concepts of Programming languages",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 46,
        "price": 100,
        "name": "Mariam Abdelrahman",
        "img": "4.webp",
        "sub": "Mathematics and Numerical Computations for Civil Engineering",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 47,
        "price": 150,
        "name": "Nairuz",
        "img": "3.webp",
        "sub": "Physics",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 48,
        "price": 150,
        "name": "Hazem Hegazy",
        "img": "7.webp",
        "sub": "Fundamentals of Building Technology (Building Physics and Building Structures)",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 49,
        "price": 305,
        "name": "Mazen Tarek Khalil",
        "img": "6.webp",
        "sub": "Mechanical Engineering Drawing",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00"
        , "newest": true
    },
    {
        "id": 50,
        "price": 170,
        "name": "Farah Sultan",
        "img": "5.webp",
        "sub": "Introduction to Law (Theory of Legal Rights - Theory of Law)",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 2,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 51,
        "price": 100,
        "name": "Mariam yehia",
        "img": "6.webp",
        "sub": "Mathematics for Business Informatics III",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 52,
        "price": 100,
        "name": "Menna",
        "img": "4.webp",
        "sub": "Mathematics and Numerical Computations for Civil Engineering",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 53,
        "price": 200,
        "name": "Hanna Shehab",
        "img": "10.webp",
        "sub": "Calculus I",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 54,
        "price": 98,
        "name": "sama ",
        "img": "7.webp",
        "sub": "Descriptive Geometry",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 55,
        "price": 215,
        "name": "Mariam Tarek",
        "img": "9.webp",
        "sub": "General Histology",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 56,
        "price": 150,
        "name": "Marwan Amer",
        "img": "8.webp",
        "sub": "General Medicine",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 57,
        "price": 250,
        "name": "Bassel Abdelaziz ",
        "img": "2.webp",
        "sub": "Principles of Marketing",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 58,
        "price": 150,
        "name": "Zeyad Tarek",
        "img": "1.webp",
        "sub": "Financial Accounting",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "newest": true
    },
    {
        "id": 59,
        "price": 300,
        "name": "Baher",
        "img": "7.webp",
        "sub": "Software Engineering",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 60,
        "price": 200,
        "name": "Amr El Meligy",
        "img": "6.webp",
        "sub": "E-Business Development",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 61,
        "price": 150,
        "name": "Jessy Akram",
        "img": "7.webp",
        "sub": "Oral pathology",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 62,
        "price": 200,
        "name": "Maya Moris",
        "img": "3.webp",
        "sub": "Freshman 1",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 63,
        "price": 165,
        "name": "Yassin Elhelly",
        "img": "9.webp",
        "sub": "Introduction to Computer Science",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 64,
        "price": 108,
        "name": "Youssef sedik",
        "img": "1.webp",
        "sub": "Operative dentistry (1)",
        "evaluation": 5,
        "univ": "MIU",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 65,
        "price": 150,
        "name": "Malak Tamer",
        "img": "2.webp",
        "sub": "Algebra and Trigonometry",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 66,
        "price": 200,
        "name": "",
        "img": "3.webp",
        "sub": "",
        "evaluation": 5,
        "univ": "",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 67,
        "price": 65,
        "name": "Alya Moussa",
        "img": "4.webp",
        "sub": "Introduction to Psychology",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 3,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 68,
        "price": 150,
        "name": "Lina Tarek",
        "img": "7.webp",
        "sub": "Statistics for Business",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 69,
        "price": 140,
        "name": "Khaled Mamdouh Abdelaty ",
        "img": "9.webp",
        "sub": "Classical Mechanics, Sound and Heat ",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 70,
        "price": 325,
        "name": "Mohamed Hamza",
        "img": "10.webp",
        "sub": "Economic Development",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "newest": true
    },
    {
        "id": 71,
        "price": 50,
        "name": "Omar Yossuf",
        "img": "4.webp",
        "sub": "Fundamentals of Computing I",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 72,
        "price": 250,
        "name": "Meriam",
        "img": "7.webp",
        "sub": "Research Writing",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 73,
        "price": 150,
        "name": "Mostafa",
        "img": "9.webp",
        "sub": "Calculus I",
        "evaluation": 5,
        "univ": "",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 74,
        "price": 200,
        "name": "Reem Sleem",
        "img": "6.webp",
        "sub": "Strength and Testing of Materials",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 75,
        "price": 180,
        "name": "Habiba Amin Said",
        "img": "5.webp",
        "sub": "Business Finance I",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 76,
        "price": 200,
        "name": "Malak Sobhy ",
        "img": "4.webp",
        "sub": "Introduction to Comparative Politics",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 77,
        "price": 120,
        "name": "Dahab Ahmed",
        "img": "1.webp",
        "sub": "Introduction to Computer Science",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 78,
        "price": 300,
        "name": "Galal Ahmed Galal Abou El Dahab",
        "img": "6.webp",
        "sub": "Introduction to Business",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "best": true
    },
    {
        "id": 79,
        "price": 250,
        "name": "Miral Fahmy",
        "img": "8.webp",
        "sub": "Financial Accounting",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 80,
        "price": 109,
        "name": "Fairuz Soufy",
        "img": "7.webp",
        "sub": "Computer Applications for Social Sciences",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 81,
        "price": 200,
        "name": "Sama Hashem Mohamed Wagih Elhadidy",
        "img": "9.webp",
        "sub": "Introduction to Advertising",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 82,
        "price": 150,
        "name": "Merna Shreef Alnosiry",
        "img": "10.webp",
        "sub": "Introduction to Microeconomics",
        "evaluation": 5,
        "univ": "AUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 83,
        "price": 220,
        "name": "Omar S. A. ALI",
        "img": "8.webp",
        "sub": "Math (1)",
        "evaluation": 5,
        "univ": "AASTMT",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "best": true
    },
    {
        "id": 84,
        "price": 250,
        "name": "Sarah Mohamed",
        "img": "7.webp",
        "sub": "Software Requirement Engineering",
        "evaluation": 5,
        "univ": "AASTMT",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "best": true
    },
    {
        "id": 85,
        "price": 250,
        "name": "Abdelrahman",
        "img": "6.webp",
        "sub": "Advanced Programming",
        "evaluation": 5,
        "univ": "AASTMT",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 86,
        "price": 99,
        "name": "Omar Azzam",
        "img": "5.webp",
        "sub": "Electronic Business and Government",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 87,
        "price": 75,
        "name": "Youssef Ahmed",
        "img": "4.webp",
        "sub": "Physics",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore quos animi dolore deserunt quasi similique? Laboriosam excepturi eum eligendi.",
        "services": ["Subject", "Subject ", "Subject", "Subject", "Subject", "Subject", "Subject"
        ],
        "grades": ["RHET 120 - A", "POLS 101 - A", "RHET 110/1010 - B-", "SCI 120 - B+", "PHIL 220 - B+", "POLS 313 - B-", "PSYC 201 - A "
        ],
        "doctor": ["Henry", "Lee", "Shirley Barber", "Susy Kotit", "Alessandro Topa", "Sean Lee", "Lameese ElDesouky"
        ],
        "time": "19: 00-23: 00",
        "best": true
    },
    {
        "id": 88,
        "price": 200,
        "name": "Reem Manassa",
        "img": "7.webp",
        "sub": "Introduction to Computer Science",
        "evaluation": 5,
        "univ": "GUC",
        "expert": 4,
        "day": ["Wednesday", "Thursday", "firday"
        ],
        "best": true
    }
]


const bodyteacher = document.getElementById('body-teacher');
display()
function display () {
    displayData()
pages('parent','aboutteacher.html')
pages('btnclick','bookinginsret.html')

}
function pages (items , location) {
    const id = document.querySelectorAll(`.${items}`);
    id.forEach(id=> {
        id.addEventListener('click',()=> {
            const number = id.dataset.id;
            const idteacher = teachers.find(teacher=> teacher.id == number);
            savelocalStorage('about',idteacher);
            window.location.href=`${location}`;
        })

    })
}

function savelocalStorage(name, object) {
    localStorage.setItem(`${name}`, JSON.stringify(object))
}

function displayData() {
    let box =''
    teachers.forEach(teacher=> {
        box+=`<div class=" col-sm-12 col-md-6 col-lg-4 gy-3 border-0 teacher  " data-id='${teacher.id}'>
        <div class="card h-100 py-3 shadow">
        <div class="position-absolute price ">
        <p><small>EGP</small>${teacher.price}</p>
        </div>
        <div class='parent p-2 pointer' data-id=${teacher.id}>
            <div class=" d-flex align-items-center justify-content-between">
            <div class="w-50 p-3">
                <p>${teacher.name}</p>
                <p>AUC</p>
                <div>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                </div>
            </div>
            <div class="w-50 d-flex justify-content-end">
                <img src="content/asstes/image/${teacher.img}" class="rounded-start-circle w-75" alt="">
            </div>
          </div>
          <div class="p-3">
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8">${teacher.sub}</span>
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8"> +${teacher.expert}</span>
          </div>
          <div class="px-3">
          </div>
          

          </div>
          <div class="w-100 p-3">
            <button type='button' data-id='${teacher.id}' class="w-100 p-2 btn-orangen btnclick">Booking</button>
          </div>
        </div>
        </div>`

    })
bodyteacher.innerHTML=box;
}


function search (value,id) {
    
    let box = ''
    teachers.forEach(teacher=>{
    if(id == 'name'){
        if(teacher.name.includes(value)){
            box+=`<div class=" col-sm-12 col-md-6 col-lg-4 gy-3 border-0 teacher  " data-id='${teacher.id}'>
    <div class="card h-100 py-3 shadow">
    <div class="position-absolute price ">
    <p><small>EGP</small>${teacher.price}</p>
    </div>
    <div class='parent p-2 pointer' data-id=${teacher.id}>
        <div class=" d-flex align-items-center justify-content-between">
        <div class="w-50 p-3">
            <p>${teacher.name}</p>
            <p>AUC</p>
            <div>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
            </div>
        </div>
        <div class="w-50 d-flex justify-content-end">
            <img src="content/asstes/image/${teacher.img}" class="rounded-start-circle w-75" alt="">
        </div>
      </div>
      <div class="p-3">
        <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8">${teacher.sub}</span>
        <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8"> +${teacher.expert}</span>
      </div>
      <div class="px-3">
      </div>
      

      </div>
      <div class="w-100 p-3">
        <button type='button' data-id='${teacher.id}' class="w-100 p-2 btn-orangen btnclick">Booking</button>
      </div>
    </div>
    </div>`
        }
    }else if (id == 'univ') {
        if(teacher.univ.includes(value)){
            box+=`<div class=" col-sm-12 col-md-6 col-lg-4 gy-3 border-0 teacher  " data-id='${teacher.id}'>
    <div class="card h-100 py-3 shadow">
    <div class="position-absolute price ">
    <p><small>EGP</small>${teacher.price}</p>
    </div>
    <div class='parent p-2 pointer' data-id=${teacher.id}>
        <div class=" d-flex align-items-center justify-content-between">
        <div class="w-50 p-3">
            <p>${teacher.name}</p>
            <p>AUC</p>
            <div>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
            </div>
        </div>
        <div class="w-50 d-flex justify-content-end">
            <img src="content/asstes/image/${teacher.img}" class="rounded-start-circle w-75" alt="">
        </div>
      </div>
      <div class="p-3">
        <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8">${teacher.sub}</span>
        <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8"> +${teacher.expert}</span>
      </div>
      <div class="px-3">
      </div>
      

      </div>
      <div class="w-100 p-3">
        <button type='button' data-id='${teacher.id}' class="w-100 p-2 btn-orangen btnclick">Booking</button>
      </div>
    </div>
    </div>`
        }
    }else if (id == 'sub'){
        if(teacher.sub.includes(value)){
            box+=`<div class=" col-sm-12 col-md-6 col-lg-4 gy-3 border-0 teacher  " data-id='${teacher.id}'>
    <div class="card h-100 py-3 shadow">
    <div class="position-absolute price ">
    <p><small>EGP</small>${teacher.price}</p>
    </div>
    <div class='parent p-2 pointer' data-id=${teacher.id}>
        <div class=" d-flex align-items-center justify-content-between">
        <div class="w-50 p-3">
            <p>${teacher.name}</p>
            <p>AUC</p>
            <div>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
                <i class="fas fa-star color-secondary"></i>
            </div>
        </div>
        <div class="w-50 d-flex justify-content-end">
            <img src="content/asstes/image/${teacher.img}" class="rounded-start-circle w-75" alt="">
        </div>
      </div>
      <div class="p-3">
        <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8">${teacher.sub}</span>
        <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8"> +${teacher.expert}</span>
      </div>
      <div class="px-3">
      </div>
      

      </div>
      <div class="w-100 p-3">
        <button type='button' data-id='${teacher.id}' class="w-100 p-2 btn-orangen btnclick">Booking</button>
      </div>
    </div>
    </div>`
        }
    }
        }
        )
        bodyteacher.innerHTML=box
        pages('parent','aboutteacher.html')
        pages('btnclick','bookinginsret.html')
}


// start sort
const buttons = document.querySelectorAll('.sortclick');
buttons.forEach(button=> {
    button.addEventListener('click', () => {
        if(button.dataset.value == 'most'){
           getMost(button)
        }else if (button.dataset.value == 'newest') {
           getNew(button)
        }else if (button.dataset.value == 'best'){
            getbest(button)
        }
        
        pages('parent','aboutteacher.html')
        pages('btnclick','bookinginsret.html')
    })
})


// function sortClick
function getMost(button) {
    let box = ''
    button.value == 1 ? teachers.map(t => t.most ? box += `<div class=" col-sm-12 col-md-6 col-lg-4 gy-3 border-0 teacher" data-id='${t.id}'>
        <div class="card py-3 shadow">
        <div class="position-absolute price ">
        <p><small>EGP</small>${t.price}</p>
        </div>
        <div class='parent p-2 pointer' data-id=${t.id}>
          <div class=" d-flex align-items-center justify-content-between">
            <div class="w-50 p-3">
                <p>${t.name}</p>
                <p>AUC</p>
                <div>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                </div>
            </div>
            <div class="w-50 d-flex justify-content-end">
                <img src="content/asstes/image/${t.img}" class="rounded-start-circle w-75" alt="">
            </div>
          </div>
          <div class="p-3">
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8">${t.sub}</span>
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8"> +${t.texpert}</span>
          </div>
          <div class="px-3">
          </div>
          
    
          </div>
          <div class="w-100 p-3">
            <button type='button' data-id='${t.id}' class="w-100 p-2 btn-orangen btnclick">Booking</button>
          </div>
        </div>
        </div>`  : '') : ''
    bodyteacher.innerHTML = box
}
function getNew(button) {
    let box = ''
    button.value == 1 ? teachers.map(t => t.newest ? box += `<div class=" col-sm-12 col-md-6 col-lg-4 gy-3 border-0 teacher" data-id='${t.id}'>
        <div class="card py-3 shadow">
        <div class="position-absolute price ">
        <p><small>EGP</small>${t.price}</p>
        </div>
        <div class='parent p-2 pointer' data-id=${t.id}>
          <div class=" d-flex align-items-center justify-content-between">
            <div class="w-50 p-3">
                <p>${t.name}</p>
                <p>AUC</p>
                <div>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                </div>
            </div>
            <div class="w-50 d-flex justify-content-end">
                <img src="content/asstes/image/${t.img}" class="rounded-start-circle w-75" alt="">
            </div>
          </div>
          <div class="p-3">
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8">${t.sub}</span>
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8"> +${t.texpert}</span>
          </div>
          <div class="px-3">
          </div>
          
    
          </div>
          <div class="w-100 p-3">
            <button type='button' data-id='${t.id}' class="w-100 p-2 btn-orangen btnclick">Booking</button>
          </div>
        </div>
        </div>`  : '') : ''
    bodyteacher.innerHTML = box
}
function getbest(button) {
    let box = ''
    button.value == 1 ? teachers.map(t => t.best ? box += `<div class=" col-sm-12 col-md-6 col-lg-4 gy-3 border-0 teacher" data-id='${t.id}'>
        <div class="card py-3 shadow">
        <div class="position-absolute price ">
        <p><small>EGP</small>${t.price}</p>
        </div>
        <div class='parent p-2 pointer' data-id=${t.id}>
          <div class=" d-flex align-items-center justify-content-between">
            <div class="w-50 p-3">
                <p>${t.name}</p>
                <p>AUC</p>
                <div>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                    <i class="fas fa-star color-secondary"></i>
                </div>
            </div>
            <div class="w-50 d-flex justify-content-end">
                <img src="content/asstes/image/${t.img}" class="rounded-start-circle w-75" alt="">
            </div>
          </div>
          <div class="p-3">
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8">${t.sub}</span>
            <span class="bg-orangen  py-1 px-2 text-white shadow rounded-2 fs-8"> +${t.texpert}</span>
          </div>
          <div class="px-3">
          </div>
          
    
          </div>
          <div class="w-100 p-3">
            <button type='button' data-id='${t.id}' class="w-100 p-2 btn-orangen btnclick">Booking</button>
          </div>
        </div>
        </div>`  : '') : ''
    bodyteacher.innerHTML = box
}
// function price
function sortprice (value) {
        if (value == 'high'){
        teachers.sort((a, b) => b.price - a.price);
    
    }else if (value == 'low'){
        teachers.sort((a, b) => a.price - b.price);
    
    }
    displayData()
    pages('parent','aboutteacher.html')
    pages('btnclick','bookinginsret.html')
}