const people = [ 
    { 
     name: "Wayne Barnett",
     role: "Chief Editor",
     picture: "wayne-barnett-founder-ceo.jpg",

    },
    {
    name: "Angela Caroll",
    role: "Founder & CEO",
    picture: "angela-caroll-chief-editor.jpg",
    },
    {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "walter-gordon-office-manager.jpg",
    },
    {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg",
    },
    {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg",
    },
    {
    name: "Scott Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.jpg",
    },
    
]
console.log(people);
// OUTPUT
let box = document.getElementById("wrapper");
for ( i = 0; i < people.length; i++) {
    let thisPerson = people[i];
    console.log(thisPerson.name, thisPerson.role, thisPerson.picture);
    box.innerHTML += `<div class="card"><img src="img/${thisPerson.picture}"><div class="text"><h2>${thisPerson.name}</h2><h2>${thisPerson.role}</h2></div></div>`;
}