const careers = {

software:{
title:"Software Engineer",
overview:"Builds software applications, websites and systems.",
eligibility:"12th + B.Tech/BCA/Diploma",
duration:"3-4 Years",
cost:"₹50,000 - ₹2,00,000 per year (varies by route and institution)",
skills:["C++","DSA","Web Development","Database Management"],
salary:"Fresher: ₹3-8 LPA | Mid-Level: ₹8-20 LPA",
roadmap:[
"Complete 12th",
"KCET/JEE/Other Route",
"B.Tech/BCA",
"Learn Programming",
"Build Projects",
"Internship",
"Placement"
],
mistakes:[
"Only watching tutorials",
"Ignoring DSA",
"No projects",
"Not applying for internships"
],
alternatives:[
"BCA",
"Diploma + Lateral Entry",
"Self Learning + Projects"
]
},

ai:{
title:"AI Engineer",
overview:"Develops AI, Machine Learning and Generative AI systems.",
eligibility:"12th + Degree",
duration:"4-5 Years",
cost:"₹50,000 - ₹2,00,000 per year",
skills:["Python","Statistics","Machine Learning","Deep Learning"],
salary:"Fresher: ₹5-12 LPA | Experienced: ₹15+ LPA",
roadmap:[
"12th",
"B.Tech/BCA",
"Python",
"Machine Learning",
"Deep Learning",
"Projects",
"Internship"
],
mistakes:[
"Ignoring Mathematics",
"Only using AI tools",
"No practical projects"
],
alternatives:[
"Data Science",
"ML Engineer",
"AI Research"
]
},

doctor:{
title:"Doctor",
overview:"Diagnoses and treats patients.",
eligibility:"NEET Qualification",
duration:"5.5+ Years",
cost:"Highly dependent on institution and admission route",
skills:["Biology","Communication","Patient Care"],
salary:"Varies by specialization and experience",
roadmap:[
"12th PCB",
"NEET",
"MBBS",
"Internship",
"Specialization (Optional)"
],
mistakes:[
"Underestimating study duration",
"Poor time management"
],
alternatives:[
"BDS",
"BAMS",
"Nursing"
]
},

ca:{
title:"Chartered Accountant",
overview:"Handles accounting, taxation and auditing.",
eligibility:"12th Pass",
duration:"4-5 Years",
cost:"Generally lower than many professional degrees",
skills:["Accounting","Taxation","Auditing"],
salary:"₹6-12 LPA starting, varies widely",
roadmap:[
"12th",
"CA Foundation",
"CA Intermediate",
"Articleship",
"CA Final"
],
mistakes:[
"Skipping revision",
"Not practicing problems regularly"
],
alternatives:[
"CMA",
"CS",
"B.Com + Finance"
]
},

ias:{
title:"IAS Officer",
overview:"Administrative officer working in government.",
eligibility:"Any Bachelor's Degree",
duration:"Graduation + UPSC Preparation",
cost:"Depends mainly on education and preparation expenses",
skills:["Current Affairs","Writing","Decision Making"],
salary:"Government pay scale with allowances",
roadmap:[
"Graduation",
"UPSC Prelims",
"UPSC Mains",
"Interview",
"Training"
],
mistakes:[
"Reading too many sources",
"No answer writing practice",
"Ignoring mock tests"
],
alternatives:[
"IPS",
"IFS",
"State PSC Services"
]
}

};

const careerSelect = document.getElementById("careerSelect");
const careerInfo = document.getElementById("careerInfo");

function displayCareer(career){

const c = careers[career];

careerInfo.innerHTML = `
<h2>${c.title}</h2>

<div class="info-box">
<p><strong>Overview:</strong> ${c.overview}</p>
</div>

<h3>Eligibility</h3>
<p>${c.eligibility}</p>

<h3>Duration</h3>
<p>${c.duration}</p>

<h3>Estimated Cost</h3>
<p>${c.cost}</p>

<h3>Skills Required</h3>
<ul>
${c.skills.map(skill => `<li>${skill}</li>`).join("")}
</ul>

<h3>Salary Progression</h3>
<p>${c.salary}</p>

<h3>Roadmap</h3>
<ol>
${c.roadmap.map(step => `<li>${step}</li>`).join("")}
</ol>

<h3>Common Mistakes</h3>
<ul>
${c.mistakes.map(item => `<li>${item}</li>`).join("")}
</ul>

<h3>Alternative Paths</h3>
<ul>
${c.alternatives.map(item => `<li>${item}</li>`).join("")}
</ul>
`;
}

displayCareer("software");

careerSelect.addEventListener("change",function(){
displayCareer(this.value);
});