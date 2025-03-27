document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;



const schools=[ {SchoolName: "Gracie Barra",location:"Recife",master:"Helio ",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnbRQv0HRRMla32wLXiBop7KsWgX5vk1WKA&s"},
                {SchoolName: "ZR Brazillian JJ",location:"Olinda",master:"Victor o viado",imgUrl:"https://cdns3.fitfit.fitness/br/media/items/originals/11249-ZR-Team-Sorocaba-Jiu-Jitsu-9mQPs.jpg"}
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
            <img src="${school.imgUrl}" alt="${school.SchoolName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}

displayschool(schools)