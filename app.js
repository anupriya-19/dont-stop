const KEY="dontstop_v2";

const SUBJECTS=[
"Quantitative Aptitude",
"Reasoning Ability",
"English Language",
"General Awareness",
"Banking & Financial Awareness"
];

const TOPICS=[
/* QUANTITATIVE APTITUDE */
["Quantitative Aptitude","Number System","Level 1"],
["Quantitative Aptitude","Simplification","Level 1"],
["Quantitative Aptitude","Approximation","Level 1"],
["Quantitative Aptitude","LCM & HCF","Level 1"],
["Quantitative Aptitude","Percentages","Level 1"],
["Quantitative Aptitude","Ratio & Proportion","Level 1"],
["Quantitative Aptitude","Average","Level 1"],
["Quantitative Aptitude","Profit & Loss","Level 1"],
["Quantitative Aptitude","Simple Interest","Level 1"],
["Quantitative Aptitude","Compound Interest","Level 1"],
["Quantitative Aptitude","Partnership","Level 2"],
["Quantitative Aptitude","Mixture & Alligation","Level 2"],
["Quantitative Aptitude","Time & Work","Level 2"],
["Quantitative Aptitude","Pipes & Cisterns","Level 2"],
["Quantitative Aptitude","Time Speed & Distance","Level 2"],
["Quantitative Aptitude","Boats & Streams","Level 2"],
["Quantitative Aptitude","Problems on Trains","Level 2"],
["Quantitative Aptitude","Mensuration","Level 2"],
["Quantitative Aptitude","Algebra","Level 2"],
["Quantitative Aptitude","Data Interpretation","Level 2"],
["Quantitative Aptitude","Caselet DI","Level 3"],
["Quantitative Aptitude","Missing DI","Level 3"],
["Quantitative Aptitude","Data Sufficiency","Level 3"],
["Quantitative Aptitude","Quantity Comparison","Level 3"],
["Quantitative Aptitude","Quadratic Equations","Level 3"],
["Quantitative Aptitude","Arithmetic Mixed Questions","Level 3"],
["Quantitative Aptitude","Advanced DI","Level 4"],
["Quantitative Aptitude","Mains Level Arithmetic","Level 4"],

/* REASONING */
["Reasoning Ability","Inequality","Level 1"],
["Reasoning Ability","Syllogism","Level 1"],
["Reasoning Ability","Coding Decoding","Level 1"],
["Reasoning Ability","Direction Sense","Level 1"],
["Reasoning Ability","Blood Relations","Level 1"],
["Reasoning Ability","Order & Ranking","Level 1"],
["Reasoning Ability","Alphanumeric Series","Level 1"],
["Reasoning Ability","Number/Letter Series","Level 1"],
["Reasoning Ability","Puzzles - Basic","Level 2"],
["Reasoning Ability","Seating Arrangement - Linear","Level 2"],
["Reasoning Ability","Seating Arrangement - Circular","Level 2"],
["Reasoning Ability","Floor Based Puzzle","Level 2"],
["Reasoning Ability","Box Based Puzzle","Level 2"],
["Reasoning Ability","Day/Month/Year Puzzle","Level 2"],
["Reasoning Ability","Comparison Puzzle","Level 2"],
["Reasoning Ability","Input Output","Level 2"],
["Reasoning Ability","Data Sufficiency","Level 3"],
["Reasoning Ability","Logical Reasoning","Level 3"],
["Reasoning Ability","Statement & Assumption","Level 3"],
["Reasoning Ability","Statement & Conclusion","Level 3"],
["Reasoning Ability","Statement & Argument","Level 3"],
["Reasoning Ability","Course of Action","Level 3"],
["Reasoning Ability","Critical Reasoning","Level 4"],
["Reasoning Ability","High Level Puzzles","Level 4"],
["Reasoning Ability","Mains Reasoning Mixed Sets","Level 4"],

/* ENGLISH */
["English Language","Noun","Level 1"],
["English Language","Pronoun","Level 1"],
["English Language","Adjective","Level 1"],
["English Language","Adverb","Level 1"],
["English Language","Verb","Level 1"],
["English Language","Preposition","Level 1"],
["English Language","Conjunction","Level 1"],
["English Language","Articles","Level 1"],
["English Language","Subject Verb Agreement","Level 1"],
["English Language","Tenses","Level 1"],
["English Language","Active Passive Voice","Level 2"],
["English Language","Direct Indirect Speech","Level 2"],
["English Language","Vocabulary","Level 2"],
["English Language","Synonyms & Antonyms","Level 2"],
["English Language","Idioms & Phrases","Level 2"],
["English Language","Reading Comprehension","Level 2"],
["English Language","Cloze Test","Level 2"],
["English Language","Error Detection","Level 2"],
["English Language","Sentence Improvement","Level 2"],
["English Language","Para Jumbles","Level 3"],
["English Language","Phrase Replacement","Level 3"],
["English Language","Fillers","Level 3"],
["English Language","Word Usage","Level 3"],
["English Language","Advanced RC","Level 4"],
["English Language","Mains English Mixed Sets","Level 4"],

/* GENERAL AWARENESS */
["General Awareness","Current Affairs - National","Level 1"],
["General Awareness","Current Affairs - International","Level 1"],
["General Awareness","Current Affairs - Banking","Level 1"],
["General Awareness","Current Affairs - Economy","Level 1"],
["General Awareness","Government Schemes","Level 2"],
["General Awareness","Appointments","Level 2"],
["General Awareness","Awards & Honours","Level 2"],
["General Awareness","Sports","Level 2"],
["General Awareness","Books & Authors","Level 2"],
["General Awareness","Important Days","Level 2"],
["General Awareness","Defence Exercises","Level 2"],
["General Awareness","Summits & Conferences","Level 2"],
["General Awareness","Reports & Indices","Level 3"],
["General Awareness","Static GK","Level 3"],
["General Awareness","Countries & Capitals","Level 3"],
["General Awareness","Currencies","Level 3"],
["General Awareness","National Parks","Level 3"],
["General Awareness","Mains Current Affairs Revision","Level 4"],

/* BANKING */
["Banking & Financial Awareness","RBI","Level 1"],
["Banking & Financial Awareness","Types of Banks","Level 1"],
["Banking & Financial Awareness","Banking Terms","Level 1"],
["Banking & Financial Awareness","Deposits","Level 1"],
["Banking & Financial Awareness","Loans & Advances","Level 1"],
["Banking & Financial Awareness","NPA","Level 2"],
["Banking & Financial Awareness","Monetary Policy","Level 2"],
["Banking & Financial Awareness","Repo Rate & Reverse Repo","Level 2"],
["Banking & Financial Awareness","CRR & SLR","Level 2"],
["Banking & Financial Awareness","Basel Norms","Level 2"],
["Banking & Financial Awareness","Financial Markets","Level 2"],
["Banking & Financial Awareness","Money Market","Level 3"],
["Banking & Financial Awareness","Capital Market","Level 3"],
["Banking & Financial Awareness","SEBI","Level 3"],
["Banking & Financial Awareness","IRDAI","Level 3"],
["Banking & Financial Awareness","PFRDA","Level 3"],
["Banking & Financial Awareness","Digital Banking","Level 3"],
["Banking & Financial Awareness","Financial Inclusion","Level 3"],
["Banking & Financial Awareness","Mains Banking Awareness","Level 4"]
];

let data=JSON.parse(localStorage.getItem(KEY)||"null");

if(!data){
data={
topics:TOPICS.map((x,i)=>({
id:i+1,
subject:x[0],
topic:x[1],
level:x[2],
status:"Not Started",
practice:0,
correct:0,
wrong:0,
time:0,
notes:"",
revisions:[]
})),
mistakes:[],
tests:[],
practice:[],
activity:{}
});
saveData();
}else{
data.topics=data.topics||[];
data.mistakes=data.mistakes||[];
data.tests=data.tests||[];
data.practice=data.practice||[];
data.activity=data.activity||{};
}

const $=id=>document.getElementById(id);

function today(){
return new Date().toISOString().slice(0,10);
}

function esc(s=""){
return String(s).replace(/[&<>"']/g,c=>({
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#39;"
}[c]));
}

function saveData(){
localStorage.setItem(KEY,JSON.stringify(data));
}

function save(){
saveData();
render();
}

function topicProgress(t){
if(t.status==="Exam Ready")return 100;
if(t.status==="Completed")return 85;
if(t.status==="Practicing")return 65;
if(t.status==="Learning")return 35;
return 0;
}

function statusClass(s){
return s.toLowerCase().replace(/\s+/g,"");
}

function renderTopics(){

let sf=$("topicSubjectFilter")?.value||"All";
let lf=$("topicLevelFilter")?.value||"All";
let stf=$("topicStatusFilter")?.value||"All";

let list=data.topics.filter(t=>
(sf==="All"||t.subject===sf)&&
(lf==="All"||t.level===lf)&&
(stf==="All"||t.status===stf)
);

$("topicList").innerHTML=list.map(t=>`
<div class="entry">
<div class="entryTitle">${esc(t.topic)}</div>
<div class="meta">${esc(t.subject)} • ${esc(t.level)}</div>

<span class="status ${statusClass(t.status)}">${esc(t.status)}</span>

<div class="topicProgress">
<i style="width:${topicProgress(t)}%"></i>
</div>

<div class="meta">
Progress ${topicProgress(t)}% •
Practice ${t.practice||0} •
Accuracy ${t.practice?Math.round((t.correct/t.practice)*100):0}%
</div>

${t.notes?`<div class="meta">Improve: ${esc(t.notes)}</div>`:""}

<div class="topicActions">
<button onclick="editTopic(${t.id})">✏️ Edit</button>
<button onclick="practiceTopic(${t.id})">📝 Practice</button>
<button onclick="reviseTopic(${t.id})">🔄 Revision</button>
</div>
</div>
`).join("")||`<div class="card empty">No topics match these filters.</div>`;

let completed=data.topics.filter(t=>t.status==="Completed"||t.status==="Exam Ready").length;
let pct=data.topics.length?Math.round(completed/data.topics.length*100):0;

$("topicProgressBar").style.width=pct+"%";
$("topicProgressText").textContent=`${pct}% completed • ${completed}/${data.topics.length} topics`;

}

function editTopic(id){

let t=data.topics.find(x=>x.id===id);
if(!t)return;

$("modal").hidden=false;
$("formTitle").textContent="Edit Topic";

$("entryForm").innerHTML=`
<div class="field">
<label>Subject</label>
<input value="${esc(t.subject)}" disabled>
</div>

<div class="field">
<label>Topic</label>
<input value="${esc(t.topic)}" disabled>
</div>

<div class="field">
<label>Level</label>
<select name="level">
<option ${t.level==="Level 1"?"selected":""}>Level 1</option>
<option ${t.level==="Level 2"?"selected":""}>Level 2</option>
<option ${t.level==="Level 3"?"selected":""}>Level 3</option>
<option ${t.level==="Level 4"?"selected":""}>Level 4</option>
</select>
</div>

<div class="field">
<label>Status</label>
<select name="status">
<option ${t.status==="Not Started"?"selected":""}>Not Started</option>
<option ${t.status==="Learning"?"selected":""}>Learning</option>
<option ${t.status==="Practicing"?"selected":""}>Practicing</option>
<option ${t.status==="Completed"?"selected":""}>Completed</option>
<option ${t.status==="Exam Ready"?"selected":""}>Exam Ready</option>
</select>
</div>

<div class="field">
<label>What should I improve?</label>
<textarea name="notes">${esc(t.notes||"")}</textarea>
</div>

<button class="submit">Save Changes</button>
`;

$("entryForm").onsubmit=e=>{
e.preventDefault();

let f=new FormData(e.target);

t.level=f.get("level");
let oldStatus=t.status;
t.status=f.get("status");
t.notes=f.get("notes");

if(t.status==="Completed"&&oldStatus!=="Completed"&&oldStatus!=="Exam Ready"){
scheduleTopicRevisions(t);
}

save();
closeForm();
};

}

function scheduleTopicRevisions(t){

let base=new Date();

t.revisions=[1,3,7,15,30].map(n=>{
let d=new Date(base);
d.setDate(d.getDate()+n);
return {
date:d.toISOString().slice(0,10),
done:false
};
});

}

function reviseTopic(id){

let t=data.topics.find(x=>x.id===id);
if(!t)return;

let due=t.revisions?.find(r=>r.date<=today()&&!r.done);

if(due){
due.done=true;
save();
alert("Revision completed! 🎯");
}else{
alert("No revision is due for this topic today.");
}

}

function practiceTopic(id){

let t=data.topics.find(x=>x.id===id);
if(!t)return;

$("modal").hidden=false;
$("formTitle").textContent="Practice: "+t.topic;

$("entryForm").innerHTML=`
<div class="field">
<label>Questions attempted</label>
<input name="attempted" type="number" min="1" required>
</div>

<div class="field">
<label>Correct</label>
<input name="correct" type="number" min="0" required>
</div>

<div class="field">
<label>Time in minutes</label>
<input name="time" type="number" min="0">
</div>

<div class="field">
<label>What should I improve?</label>
<textarea name="notes"></textarea>
</div>

<button class="submit">Save Practice</button>
`;

$("entryForm").onsubmit=e=>{
e.preventDefault();

let f=Object.fromEntries(new FormData(e.target).entries());

let attempted=+f.attempted;
let correct=+f.correct;

t.practice+=attempted;
t.correct+=correct;
t.wrong+=Math.max(0,attempted-correct);
t.time+=+(f.time||0);

if(t.status==="Not Started"||t.status==="Learning"){
t.status="Practicing";
}

if(f.notes)t.notes=f.notes;

data.activity[today()]=true;

data.practice.push({
date:today(),
subject:t.subject,
topic:t.topic,
attempted,
correct,
wrong:Math.max(0,attempted-correct),
time:+(f.time||0)
});

save();
closeForm();
};

}

function renderPractice(){

let attempted=data.practice.reduce((a,x)=>a+(+x.attempted||0),0);
let correct=data.practice.reduce((a,x)=>a+(+x.correct||0),0);

$("practiceQuestions").textContent=attempted;
$("practiceAccuracy").textContent=attempted?
Math.round(correct/attempted*100)+"%":"0%";

$("practiceList").innerHTML=data.practice.length?
data.practice.slice().reverse().map(x=>`
<div class="entry">
<div class="entryTitle">${esc(x.subject)} • ${esc(x.topic)}</div>
<div class="meta">${esc(x.date)}</div>
<span class="pill">Attempted ${x.attempted}</span>
<span class="pill">Correct ${x.correct}</span>
<span class="pill">Wrong ${x.wrong}</span>
<span class="pill">Accuracy ${x.attempted?Math.round(x.correct/x.attempted*100):0}%</span>
</div>
`).join(""):
`<div class="card empty">No practice recorded yet.</div>`;

}

function renderRevision(){

let due=[];

data.topics.forEach(t=>{
(t.revisions||[]).forEach(r=>{
if(r.date<=today()&&!r.done){
due.push({topic:t,revision:r});
}
});
});

$("revisionToday").innerHTML=due.length?
due.map(x=>`
<div class="entry">
<div class="entryTitle">${esc(x.topic.topic)}</div>
<div class="meta">${esc(x.topic.subject)} • Revision due ${esc(x.revision.date)}</div>
<button class="primary" onclick="completeRevision(${x.topic.id},'${x.revision.date}')">Mark Done</button>
</div>
`).join(""):
`No revisions due today 🎯`;

$("revisionList").innerHTML=data.topics.filter(t=>t.revisions?.length).map(t=>`
<div class="entry">
<div class="entryTitle">${esc(t.topic)}</div>
<div class="meta">${esc(t.subject)}</div>
${t.revisions.map(r=>`
<span class="pill">
${r.done?"✓":"○"} ${r.date}
</span>
`).join("")}
</div>
`).join("");

}

function completeRevision(id,date){

let t=data.topics.find(x=>x.id===id);
let r=t?.revisions?.find(x=>x.date===date);

if(r){
r.done=true;
data.activity[today()]=true;
save();
}

}

function openForm(kind){

$("modal").hidden=false;

let f="";

if(kind==="mistake"){

$("formTitle").textContent="Add Mistake";

f=`
<div class="field"><label>Date</label><input name="date" type="date" value="${today()}" required></div>
<div class="field"><label>Subject</label><input name="subject" required></div>
<div class="field"><label>Topic</label><input name="topic" required></div>
<div class="field"><label>Question number</label><input name="qno" type="number"></div>
<div class="field"><label>What was the mistake?</label><textarea name="mistake" required></textarea></div>
<div class="field"><label>Correct method</label><textarea name="correctMethod"></textarea></div>
<div class="field"><label>Reason</label><input name="reason"></div>
<div class="field"><label>What should I improve?</label><textarea name="revisit"></textarea></div>
`;

}

else if(kind==="test"){

$("formTitle").textContent="Add Test";

f=`
<div class="field"><label>Date</label><input name="date" type="date" value="${today()}" required></div>
<div class="field"><label>Test name</label><input name="test" required></div>
<div class="field"><label>Subject</label><input name="subject" required></div>
<div class="field"><label>Attempted</label><input name="attempted" type="number" min="0" required></div>
<div class="field"><label>Correct</label><input name="correct" type="number" min="0" required></div>
<div class="field"><label>Wrong</label><input name="wrong" type="number" min="0"></div>
<div class="field"><label>Time (minutes)</label><input name="time" type="number" min="0"></div>
<div class="field"><label>Main problem</label><textarea name="mainProblem"></textarea></div>
<div class="field"><label>What did I know but still get wrong?</label><textarea name="knownWrong"></textarea></div>
<div class="field"><label>What concept did I not know?</label><textarea name="unknown"></textarea></div>
<div class="field"><label>Which questions took too much time?</label><textarea name="slow"></textarea></div>
<div class="field"><label>Which should I have skipped?</label><textarea name="skip"></textarea></div>
`;

}

$("entryForm").innerHTML=f+`<button class="submit">Save</button>`;

$("entryForm").onsubmit=e=>{
e.preventDefault();

let o=Object.fromEntries(new FormData(e.target).entries());

if(kind==="mistake"){

let base=new Date(o.date+"T00:00:00");

o.revisions=[1,3,7,15,30].map(n=>{
let d=new Date(base);
d.setDate(d.getDate()+n);
return d.toISOString().slice(0,10);
});

data.mistakes.push(o);

}else{

if(!o.wrong)o.wrong=Math.max(0,+o.attempted-(+o.correct));

data.tests.push(o);

}

data.activity[o.date]=true;

save();
closeForm();
};

}

function closeForm(){
$("modal").hidden=true;
}

function renderMistakes(){

$("mistakeList").innerHTML=data.mistakes.length?
data.mistakes.slice().reverse().map((x,i)=>`
<div class="entry">
<div class="entryTitle">${esc(x.subject)} • ${esc(x.topic)}</div>
<div class="meta">${esc(x.date)} • Q${esc(x.qno||"-")}</div>
<span class="pill">Mistake</span>
<p>${esc(x.mistake)}</p>
<div class="meta">
Reason: ${esc(x.reason||"-")} •
Improve: ${esc(x.revisit||"-")}
</div>
</div>
`).join(""):
`<div class="card empty">No mistakes recorded yet.</div>`;

}

function renderTests(){

let attempted=data.tests.reduce((a,x)=>a+(+x.attempted||0),0);
let correct=data.tests.reduce((a,x)=>a+(+x.correct||0),0);

$("dashTests").textContent=data.tests.length;

$("testAccuracy").textContent=attempted?
Math.round(correct/attempted*100)+"%":"0%";

$("testList").innerHTML=data.tests.length?
data.tests.slice().reverse().map(x=>`
<div class="entry">
<div class="entryTitle">${esc(x.test)}</div>
<div class="meta">${esc(x.date)} • ${esc(x.subject)}</div>
<span class="pill">Attempted ${x.attempted}</span>
<span class="pill">Correct ${x.correct}</span>
<span class="pill">Wrong ${x.wrong}</span>
${x.mainProblem?`<p>${esc(x.mainProblem)}</p>`:""}
</div>
`).join(""):
`<div class="card empty">No tests recorded yet.</div>`;

}

function renderProgress(){

let total=data.topics.length;

let completed=data.topics.filter(t=>
t.status==="Completed"||t.status==="Exam Ready"
).length;

let overall=total?Math.round(completed/total*100):0;

$("overallProgressBar").style.width=overall+"%";
$("overallProgressText").textContent=overall+"% exam preparation";

let html="";

SUBJECTS.forEach(s=>{

let arr=data.topics.filter(t=>t.subject===s);

let done=arr.filter(t=>t.status==="Completed"||t.status==="Exam Ready").length;

let pct=arr.length?Math.round(done/arr.length*100):0;

html+=`
<div class="entry">
<b>${esc(s)}</b>
<div class="meta">${done}/${arr.length} topics ready • ${pct}%</div>
<div class="topicProgress"><i style="width:${pct}%"></i></div>
</div>
`;

});

$("subjectProgress").innerHTML=html;

let weak=data.topics.filter(t=>{
return t.practice>=10&&t.correct/t.practice<0.7;
}).slice(0,8);

$("areas").innerHTML=weak.length?
weak.map(t=>`
<div class="entry">
<b>${esc(t.topic)}</b>
<div class="meta">${esc(t.subject)} • Accuracy ${Math.round(t.correct/t.practice*100)}%</div>
</div>
`).join(""):
`<div class="empty">No major weak topics identified yet.</div>`;

let improvements=[];

data.topics.filter(t=>t.practice>0).forEach(t=>{
let acc=t.correct/t.practice*100;

if(acc<70)
improvements.push(`${t.topic}: improve accuracy`);

if(t.time>0&&t.practice>=10&&t.time/t.practice>1.5)
improvements.push(`${t.topic}: improve speed`);
});

$("improvementList").innerHTML=improvements.length?
improvements.slice(0,10).map(x=>`<div class="entry">${esc(x)}</div>`).join(""):
`No improvement alerts yet. Keep practicing. 💪`;

}

function renderDashboard(){

let attempted=data.practice.reduce((a,x)=>a+(+x.attempted||0),0);
let correct=data.practice.reduce((a,x)=>a+(+x.correct||0),0);

$("dashAccuracy").textContent=attempted?
Math.round(correct/attempted*100)+"%":"0%";

$("dashMistakes").textContent=data.mistakes.length;

let completed=data.topics.filter(t=>
t.status==="Completed"||t.status==="Exam Ready"
).length;

$("dashCompleted").textContent=completed+"/"+data.topics.length;

let overall=data.topics.length?
Math.round(completed/data.topics.length*100):0;

$("dashProgress").textContent=overall+"%";

let due=0;

data.mistakes.forEach(x=>{
if((x.revisions||[]).includes(today())) due++;
});

data.topics.forEach(t=>{
if((t.revisions||[]).some(r=>r.date<=today()&&!r.done)) due++;
});

$("dashRevisions").textContent=due;

$("todayList").innerHTML=due?
`You have <b>${due}</b> revision(s) due today. Open Revision to start. 🔄`:
`Nothing due today 🎯`;

let weak=data.topics.filter(t=>
t.practice>=10&&t.correct/t.practice<0.7
).slice(0,5);

$("homeWeakAreas").innerHTML=weak.length?
weak.map(t=>`
<div class="entry">
<b>${esc(t.topic)}</b>
<div class="meta">${esc(t.subject)} • ${Math.round(t.correct/t.practice*100)}% accuracy</div>
</div>
`).join(""):
`No major weak areas yet. Keep practicing! 🔥`;
}

function renderStreak(){

let streak=0;
let d=new Date();

while(data.activity[d.toISOString().slice(0,10)]){
streak++;
d.setDate(d.getDate()-1);
if(streak>365)break;
}

$("streakText").textContent=`${streak} day streak`;
$("streakBar").style.width=Math.min(streak/30*100,100)+"%";
}

function render(){

renderDashboard();
renderTopics();
renderPractice();
renderRevision();
renderMistakes();
renderTests();
renderProgress();
renderStreak();

}

document.querySelectorAll(".navBtn").forEach(b=>{
b.onclick=()=>{
document.querySelectorAll(".navBtn").forEach(x=>x.classList.remove("active"));
b.classList.add("active");

document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));

$(b.dataset.screen).classList.add("active");
};
});

$("topicSubjectFilter")?.addEventListener("change",renderTopics);
$("topicLevelFilter")?.addEventListener("change",renderTopics);
$("topicStatusFilter")?.addEventListener("change",renderTopics);

let deferred;

window.addEventListener("beforeinstallprompt",e=>{
e.preventDefault();
deferred=e;
$("installBtn").hidden=false;
});

$("installBtn").onclick=async()=>{
if(deferred){
deferred.prompt();
deferred=null;
}
};

if("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js").catch(()=>{});
}

render();
