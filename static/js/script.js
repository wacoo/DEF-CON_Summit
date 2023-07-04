const parent= document.getElementById('featured');

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
    }
];

const content = [];
for (let i = 0; i < data.length; i += 1) {
    let speaker = `<h2>Featured Speakers</h2>
    <hr class="line">
    <div class="feature_card">
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
    parent.innerHTML = parent.innerHTML + speaker;
}
