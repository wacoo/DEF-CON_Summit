const parent = document.getElementById('featured');

const data = [
    {
        img_path: 'static/images/miller-c.jpg',
        name: 'Charlie Miller',
        occupation: 'A world-class white hat hacker.',
        description: 'Charlie won the Pwn2Own computer hacking contest four times. He found a vulnerability that would allow hacking into 1.4 million vehicles. He has worked for many high-tech companies including Twitter and Uber.'

    },
    {
        img_path: 'static/images/greg.jpg',
        name: 'Greg Hoglund',
        occupation: 'A specialist in computer forensics',
        description: 'Hoglund is a crucial feature in our list of ethical hackers. Some of the areas he is best known for working in include physical memory forensics, attribution of hackers and malware detection.'
    },
    {
        img_path: 'static/images/kevin2.jpg',
        name: 'Kevin Mitnick',
        occupation: 'Former Black Hat hacker, the most high-profile hacker in recent history',
        description: 'Mitnick’s activities breaching major corporations for his amusement earned him a place on the FBI’s most-wanted list. He was arrested in 1995 and served five years in prison.'
    },
    {
        img_path: 'static/images/Tsutomu-Shimomura.jpg',
        name: 'Tsutomu Shimomura',
        occupation: 'A cybersecurity expert, physicist, and is credited with tracking down Kevin Mitnick.',
        description: 'Being a computational physics research scientist, Shimomura also worked for the National Security Agency (NSA). He was known to be one of the leading researchers who raised awareness of the lacking security and privacy of cellular phones at that time.'
    },
    {
        img_path: 'static/images/1200px-Dan_Kaminsky_cropped.jpg',
        name: 'Dan Kaminsky',
        occupation: 'One of the most famous white hat hackers.',
        description: 'In 2008 he found a DNS flaw which allowed black hat hackers to redirect requests from one website to another in seconds. Thanks to Kaminsky’s discovery the vulnerability was fixed quickly after.'
    },
    {
        img_path: 'static/images/British-scientist-Tim-Berners-Lee.webp',
        name: 'Tim Berners-Lee',
        occupation: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
        description: 'One of the most famous names in computer science, Berners-Lee is the founder of the World Wide Web. Today he serves as the director of the World Wide Web Consortium (W3C), which oversees the development of the web.'
    }
];

const content = [];

window.addEventListener("resize", function () {
    let width = window.matchMedia("(min-width: 768px)");
    if (window.matchMedia("(min-width: 768px)").matches) {
        count = data.length;
        populateFutureSpeakers(count);
    }
    else {
        count = 2;
        populateFutureSpeakers(count);
        moreButtonListener();
    }
});


window.addEventListener("load", function () {
    let width = window.matchMedia("(min-width: 768px)");
    if (window.matchMedia("(min-width: 768px)").matches) {
        count = data.length;
        populateFutureSpeakers(count);
    }
    else {
        count = 2;
        populateFutureSpeakers(count);
    }
});

function populateFutureSpeakers(count) {
    const title = `<h2>Featured Speakers</h2>
    <hr class="line">`;
    parent.innerHTML = title;

    let wrapper = `<div class="wrapper">`;

    for (let i = 0; i < count; i += 1) {
        let speaker = `<div class="feature_card">
            <div class="icon">
                <img src=${data[i].img_path} alt="">
            </div>
            <div  class="detail">
                <h3>${data[i].name}</h3>
                <p class="occupation">${data[i].occupation}</p>
                <hr align="left">
                <p class="description">${data[i].description}</p>
            </div>
        </div>`;
        wrapper = wrapper + speaker;
    }
    
    wrapper = wrapper + '</div>';
    parent.innerHTML = parent.innerHTML  + wrapper;

    if (count === 2) {
        const btn = `<div class="btn_more" id="btn_more">
                <a href="#">MORE <img src="static/images/arrow_down 1.png" alt=""></a>
            </div>`
            parent.innerHTML = parent.innerHTML + btn;
    }
}
populateFutureSpeakers(2);

function moreButtonListener() {
    const more = document.getElementById('btn_more');
    more.addEventListener('click', (event) => {
        event.preventDefault();
        count = data.length;
        populateFutureSpeakers(count);
    });
}
moreButtonListener();
