/* ------------ NAV BAR */
const hamburgetBtn = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleMenu = () => {
    hamburgetBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open-menu')
}
hamburgetBtn.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);

const navClick = (e) => {
    const navBtn = document.querySelector(`#nav-${e}`);
    navBtn.classList.toggle('navClick');
    for(let i = 1; i <= 4; i++){
        const isNavBtn = document.querySelector(`#nav-${i}`);
        if(e == i){
            navBtn.classList.add('navClick');
        }else{
            isNavBtn.classList.remove('navClick');
        }
    }
}


/* MAIN NEWS FEED */

let newsList = [
    {
        Title: `Front-End vs Back-End Developers: What's the Difference?`,
        Date: 'January 3, 2023',
        likes: '4.8 k'
    },
    {
        Title: `What is a Full Stack Developer?`,
        Date: 'January 12, 2023',
        likes: '3.2 k'
    },
    {
        Title: `What are soft Skills and How Do They Benefit Your Career?`,
        Date: 'January 22, 2023',
        likes: '2.6 k'
    },
    {
        Title: `IT Jobs: In-Demand, Available to Everyone, Ripe With Opportunity`,
        Date: 'January 29, 2023',
        likes: '7.6k'
    },
    {
        Title: `7 Learning Tips for Data Science Self-Study`,
        Date: 'Febuary 1, 2023',
        likes: '1.5 k'
    },
    {
        Title: `Hard Skills vs. Soft Skills: Do you Really Need Both? Why?`,
        Date: 'Febuary 10, 2023',
        likes: '4.9 k'
    },
    {
        Title: `What is JavaScript?`,
        Date: 'Febuary 16, 2023',
        likes: '3.1 k'
    },
    {
        Title: `Who is a Business Analyst: Roles, Skills, Salaries, Job`,
        Date: 'Febuary 22, 2023',
        likes: '2.4 k'
    },
    {
        Title: `How Much Do Data Analysts Make? 2023 Salary Guide`,
        Date: 'Febuary 24, 2023',
        likes: '2.6 k'
    },
];

const feed = (newsList) => {
    let feeds = '';
    for(let i = 0; i < newsList.length; i++){
         feeds += `<li class="cards" id="deleteID-${i}" style="background-image: url('img/card-img/Image-${i}.png');">
         <div class="bg"></div>
        <button class="delete-btn" onclick="deleteCard(${i})"><i class="fa-solid fa-xmark"></i></button>
        <div class="text-container">
            <button id="checkID-${i}" class="check-btn hideCheckBtn" onclick="checkCard(${i})"><i class="fa-solid fa-check"></i></button>
            <div class="textbox">
                <p class="text">${newsList[i].Title}</p>
            </div>
            <div class="below-section">
                <h3 class="date">${newsList[i].Date}</h3>
                <div class="likes">
                    <button onclick="likeCard(${i})"><i id="likeID-${i}" class="fa-regular fa-heart"></i></button>
                    <p class="likes-count">${newsList[i].likes}</p>
                </div>
            </div>
        </div>
    </li>`
    document.getElementById("list").innerHTML = feeds;
    }
}
feed(newsList);

const deleteCard = (e) => {
    const deleteBtn = document.querySelector(`#deleteID-${e}`);
    deleteBtn.classList.add('hideCard');
}
const checkCard = (e) => {
    const checkBtn = document.querySelector(`#checkID-${e}`);
    checkBtn.classList.toggle('show-checkBtn');
    checkBtn.classList.toggle('hideCheckBtn');
}
const likeCard = (e) => {
    const checkBtn = document.querySelector(`#likeID-${e}`);
    checkBtn.classList.toggle('fa-regular');
    checkBtn.classList.toggle('fa-solid');
    checkBtn.classList.toggle('clickLike');
}





