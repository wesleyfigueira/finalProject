const techniques=[
    {name:"Guard",imgUrl:"https://cdn.shopify.com/s/files/1/2776/7470/files/arataba-jiu-jitsu-aprenda-img-imobilizacoes-cadeado-1200x675_large.jpg?v=1541733411"},
    {name:"Submission", imgUrl:"https://cdn.evolve-vacation.com/wp-content/uploads/2018/04/submission-chains.png"},
    {name:"Takedowns",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHbb9zuQ6RQJznpMtZCx1nV1_QczJ6nSZcw&s"}

];

function displayTechniques(showTechniques){
    const container = document.getElementById('techniquesContainer');
    container.innerHTML= '';
    showTechniques.forEach(technique =>{
        const card= document.createElement("div");
        card.classList.add('technique-card');
        card.innerHTML=`
        <img src="${technique.imgUrl}">
        <h2>${technique.name}<h2>
        
        `;
        container.appendChild(card);
        
    })
}


displayTechniques(techniques)