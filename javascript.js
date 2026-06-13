const careers = {

software: {
title: "Software Engineer",

roadmap:
"12th → Degree/BCA → Programming → Projects → Internship → Job",

skills: [
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

ai: {
title: "AI Engineer",

roadmap:
"12th → Degree → Python → ML → DL → Projects → Internship → Job",

skills: [
"Python",
"Statistics",
"Machine Learning",
"Deep Learning"
],

cost:
"₹50,000 - ₹2,50,000 per year",

salary:
"₹5-12 LPA (Fresher)"
},

datascientist: {
title: "Data Scientist",

roadmap:
"12th → Degree → Python → Statistics → Machine Learning → Projects → Internship → Job",

skills: [
"Python",
"Statistics",
"Machine Learning",
"Data Analysis"
],

cost:
"₹50,000 - ₹2,50,000 per year",

salary:
"₹6-12 LPA (Fresher)"
},

cybersecurity: {
title: "Cyber Security Analyst",

roadmap:
"12th → Degree → Networking → Security Fundamentals → Ethical Hacking → Certifications → Job",

skills: [
"Networking",
"Linux",
"Cyber Security",
"Ethical Hacking"
],

cost:
"₹50,000 - ₹2,00,000 per year",

salary:
"₹5-10 LPA (Fresher)"
},

ca: {
title: "Chartered Accountant",

roadmap:
"12th Commerce → CA Foundation → CA Intermediate → Articleship → CA Final → Chartered Accountant",

skills: [
"Accounting",
"Taxation",
"Auditing",
"Finance"
],

cost:
"₹50,000 - ₹3,00,000 total course cost",

salary:
"₹7-12 LPA (Fresher)"
},

doctor: {
title: "Doctor",

roadmap:
"12th PCB → NEET → MBBS → Internship → Specialization → Doctor",

skills: [
"Biology",
"Patient Care",
"Communication",
"Medical Knowledge"
],

cost:
"₹1 Lakh - ₹25+ Lakhs depending on institution",

salary:
"₹6-12 LPA (Initial)"
},

lawyer: {
title: "Lawyer",

roadmap:
"12th → CLAT/LAW Entrance → LLB → Internship → Bar Council Registration → Lawyer",

skills: [
"Communication",
"Legal Research",
"Argumentation",
"Drafting"
],

cost:
"₹50,000 - ₹3,00,000 per year",

salary:
"₹4-10 LPA (Initial)"
},

uiux: {
title: "UI/UX Designer",

roadmap:
"12th → Degree/Certification → Design Principles → Figma → Portfolio → Internship → Job",

skills: [
"Figma",
"Wireframing",
"User Research",
"Prototyping"
],

cost:
"₹20,000 - ₹2,00,000",

salary:
"₹4-8 LPA (Fresher)"
}

};

// Explore Career Button
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

document
.getElementById("careerSection")
.scrollIntoView({
behavior: "smooth"
});

setTimeout(() => {
document
.getElementById("career")
.focus();
}, 500);

});

// Career Selection
const select = document.getElementById("career");

select.addEventListener("change", function () {

let choice = careers[this.value];

if (!choice) {
document.getElementById("details").style.display = "none";
return;
}

document.getElementById("details").style.display = "block";

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

skillList.innerHTML = "";

choice.skills.forEach(skill => {

let li =
document.createElement("li");

li.innerText = skill;

skillList.appendChild(li);

});

});
