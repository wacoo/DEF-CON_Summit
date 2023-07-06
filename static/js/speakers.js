const parent = document.getElementById('featured');

const data = [
    {
        img_path: 'static/images/speaker_01.png',
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'

    },
    {
        img_path: 'static/images/speaker_02.png',
        name: 'SohYeong Noh',
        occupation: 'Director of Art Centre Nabi and a board member of CC Korea',
        description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
    },
    {
        img_path: 'static/images/speaker_03.png',
        name: 'Lila tretikov',
        occupation: 'Executive Director of the Wikimedia Foundation',
        description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.'
    },
    {
        img_path: 'static/images/speaker_04.png',
        name: 'Kilnam Chon',
        occupation: '',
        description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame'
    },
    {
        img_path: 'static/images/speaker_05.png',
        name: 'Julia Leda',
        occupation: 'President of Young Pirates of Europe',
        description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July'
    },
    {
        img_path: 'static/images/speaker_06.png',
        name: 'Ryan Merkley',
        occupation: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
        description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment'
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
