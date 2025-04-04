document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;



const schools=[ {SchoolName:"Gracie Barra",location:"Recife",master:"Helio ",contact:"+1 98747744744",website:"www.graciebarra.com",imgUrl:"https://s2-extra.glbimg.com/-l7co9nryEW6KtY-he6jcOzCTH8=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/f/l/HFgAEARRGHIBLAypsXuQ/gracie-barra-europa.jpeg"},
                {SchoolName:"ZR team",location:"Olinda",master:"Victor",contact:"+1 98747744744",website:"www.zrteam.com",imgUrl:"https://cdns3.fitfit.fitness/br/media/items/originals/11249-ZR-Team-Sorocaba-Jiu-Jitsu-9mQPs.jpg"},
                {SchoolName:"JF team",location:"Recife",master:"teste",contact:"+1 98747744744",website:"www.zrteam.com",imgUrl:"https://d2779tscntxxsw.cloudfront.net/5af8c5910971e.png?width=650&quality=80"},
                {SchoolName:"Gracie Humaite,",location:"Rio De Janeiro",master:"Helio ",contact:"Default",website:"www.graciehumaita.com",imgUrl:"https://www.graciemag.com/wp-content/uploads/2022/10/Gracie-Humaita-pic2.jpeg"},
                {SchoolName:"Carlson Gracie",location:"Rio De Janeiro",master:"Helio ",contact:"11 87574747",website:"www.carlson.com",imgUrl:"https://www.tribunadigital.com.br/uploads/images/2024/11/mega-evento-de-jiu-jitsu-na-academia-carlson-gracie-em-faxinal-inspira-e-motiva-atletas-locais-9e3a6.jpg"},
                {SchoolName:"Alliance",location:"São Paulo",master:"Helio ",contact:"11 98874774",website:"www.alliancejiujitsu.com",imgUrl:"https://www.elitesports.com/cdn/shop/articles/alliance-jiu-jitsu-schools-legacy-and-history.jpg?v=1741702048&width=1500"},
                {SchoolName:"GF Team",location:"São Paulo",master:"Helio ",contact:"19 987747471",website:"www.gfteam.com",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEjhA091ffc8G5PBdfae10L4hjZp4xvxFgA&s"},
                {SchoolName:"Nova Uniao",location:"Recife",master:"Helio ",contact:"81 9788747447",website:"www.novauniao.com",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABk9WCU_Z1vQDvT9muqbe98mKzx909kYBMg&s"},
                {SchoolName:"Atos JiuJitsu",location:"Recife",master:"Helio ",contact:"81 987470211",website:"www.atosjiujitsu.com",imgUrl:"https://www.elitesports.com/cdn/shop/articles/atos-jiu-jitsu-schools-legacy-and-history.jpg?v=1741704658&width=1500"},
];



function displayschool(showSchool) {
    const container = document.getElementById('school-container');
    container.innerHTML = '';
    showSchool.forEach(school => {
        const card = document.createElement('div');
        card.classList.add('school-card');
        card.innerHTML = `
            <h2>${school.SchoolName}</h2>
            <p><strong>Location:</strong> ${school.location}</p>
            <p><strong>Master:</strong> ${school.master}</p>
            <p><strong>Contact:</strong> ${school.contact}</p>
            <p><strong>Web Site:</strong> ${school.website}</p>
            <img src="${school.imgUrl}" alt="${school.SchoolName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}





displayschool(schools)