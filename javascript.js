const careers = {

software:{
title:"Software Engineer",

roadmap:
"12th → Degree/BCA → Programming → Projects → Internship → Job",

skills:[
"C++",
"DSA",
"DBMS",
"Web Development"
],

cost:
"₹50,000 - ₹2,00,000 per year",

salary:
"₹3-8 LPA (Fresher)"
},

ai:{
title:"AI Engineer",

roadmap:
"12th → Degree → Python → ML → DL → Projects → Internship → Job",

skills:[
"Python",
"Statistics",
"Machine Learning",
"Deep Learning"
],

cost:
"₹50,000 - ₹2,50,000 per year",

salary:
"₹5-12 LPA (Fresher)"
}
};

const select = document.getElementById("career");

select.addEventListener("change", function(){

let choice = careers[this.value];

if(!choice) return;

document.getElementById("details").style.display="block";

document.getElementById("title").innerText =
choice.title;

document.getElementById("roadmap").innerText =
choice.roadmap;

document.getElementById("cost").innerText =
choice.cost;

document.getElementById("salary").innerText =
choice.salary;

let skillList =
document.getElementById("skills");

skillList.innerHTML="";

choice.skills.forEach(skill=>{
let li=document.createElement("li");
li.innerText=skill;
skillList.appendChild(li);
});

});
