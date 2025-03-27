document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;



const schools=[ {SchoolName: "Gracie Barra",location:"Recife",master:"Helio ",contact:"+1 98747744744",website:"www.graciebarra.com",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnbRQv0HRRMla32wLXiBop7KsWgX5vk1WKA&s"},
                {SchoolName: "ZR team",location:"Olinda",master:"Victor",contact:"+1 98747744744",website:"www.zrteam.com",imgUrl:"https://cdns3.fitfit.fitness/br/media/items/originals/11249-ZR-Team-Sorocaba-Jiu-Jitsu-9mQPs.jpg"},
                {SchoolName:"JF team",location:"Recife",master:"teste",contact:"+1 98747744744",website:"www.zrteam.com",imgUrl:"https://d2779tscntxxsw.cloudfront.net/5af8c5910971e.png?width=650&quality=80"},
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