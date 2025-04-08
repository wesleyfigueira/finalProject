document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;



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


const comments =[
    {commenturl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuBtTJ3tfedVuiN0m7Se4QpnOD8rbwOGa_g&s",text:"Rodrigo Mendes - Jiu-Jitsu is much more than just a martial art — it's a way of life. Every training session is a chance to overcome challenges, control the ego, and grow as a person. On the mats, we learn respect, discipline, and humility. It’s where we build character, not just champions."},
    {commenturl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0hygNlneSMuPkMQG_CMBRS3h4vp-WplIqA&s",text:"Paulo Marconde - Some days you tap, some days you don’t—but every day on the mat, you get a little better at handling life."},
    {commenturl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcaXklri-TbJX8G3Wezg1TTbVeutDkyhTlA&s",text:"Zé Radiola - Jiu-Jitsu teaches you that hitting the ground isn’t failure—it’s just the start of figuring out how to rise smarter."}
]

displayTechniques(techniques)

function displayComment(showcomment) {
    const container = document.getElementById('commentContainer');
    container.innerHTML = ''; 

    showcomment.forEach(comment => {
        const card = document.createElement("div");
        card.classList.add("commentCard");

        const img = document.createElement("img");
        img.src = comment.commenturl;
        img.alt = "Comentário";

        const text = document.createElement("p");
        text.textContent = comment.text;

        card.appendChild(img);
        card.appendChild(text);
        container.appendChild(card); 
    });
}



displayComment(comments)