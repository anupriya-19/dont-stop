const KEY="dontstop_v1";
let data=JSON.parse(localStorage.getItem(KEY)||'{"mistakes":[],"tests":[],"activity":{}}');
const $=id=>document.getElementById(id);
function save(){localStorage.setItem(KEY,JSON.stringify(data));render();}
function today(){return new Date().toISOString().slice(0,10)}
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function render(){
 const attempted=data.tests.reduce((a,x)=>a+Number(x.attempted||0),0), correct=data.tests.reduce((a,x)=>a+Number(x.correct||0),0);
 $("dashAccuracy").textContent=attempted?Math.round(correct/attempted*100)+"%":"0%";
 $("dashMistakes").textContent=data.mistakes.length; $("dashTests").textContent=data.tests.length;
 const due=data.mistakes.filter(x=>x.revisions?.some(d=>d===today())).length; $("dashRevisions").textContent=due;
 $("todayList").innerHTML=due?data.mistakes.filter(x=>x.revisions.includes(today())).map(x=>`<div class="entry"><b>${esc(x.subject)} • ${esc(x.topic)}</b><div class="meta">Revision due today</div></div>`).join(""):"Nothing due today 🎯";
 $("mistakeList").innerHTML=data.mistakes.length?data.mistakes.slice().reverse().map((x,i)=>`<div class="entry"><div class="entryTitle">${esc(x.subject)} • ${esc(x.topic)}</div><div class="meta">${esc(x.date)} • Q${esc(x.qno||"-")}</div><span class="pill">${esc(x.code||"M")}</span><p>${esc(x.mistake)}</p><div class="meta">Reason: ${esc(x.reason||"-")} · Revisit: ${esc(x.revisit||"-")}</div></div>`).join(""):'<div class="card empty">No mistakes recorded yet.</div>';
 $("testList").innerHTML=data.tests.length?data.tests.slice().reverse().map(x=>`<div class="entry"><div class="entryTitle">${esc(x.test)}</div><div class="meta">${esc(x.date)} · ${esc(x.time||"")} min</div><span class="pill">Attempted ${x.attempted}</span><span class="pill">Correct ${x.correct}</span><span class="pill">Wrong ${x.wrong}</span><p>${esc(x.mainProblem||"")}</p></div>`).join(""):'<div class="card empty">No tests recorded yet.</div>';
 const subjects={};data.tests.forEach(x=>{let s=x.subject||"Other";subjects[s]??={a:0,c:0};subjects[s].a+=+x.attempted||0;subjects[s].c+=+x.correct||0});
 $("areas").innerHTML=Object.keys(subjects).length?Object.entries(subjects).map(([s,v])=>`<div class="entry"><b>${esc(s)}</b><div class="meta">${v.a?Math.round(v.c/v.a*100):0}% accuracy · ${v.a-v.c} wrong</div></div>`).join(""):'<div class="empty">Add tests to see your areas.</div>';
 let streak=0,d=new Date();while(data.activity[d.toISOString().slice(0,10)]){streak++;d.setDate(d.getDate()-1)} $("streakText").textContent=`${streak} day streak`; $("streakBar").style.width=Math.min(streak/30*100,100)+"%";
}
function field(name,label,type="text",opts=""){return `<div class="field"><label>${label}</label>${type==="textarea"?`<textarea name="${name}" ${opts}></textarea>`:type==="select"?`<select name="${name}" ${opts}>${arguments[3]}</select>`:`<input name="${name}" type="${type}" ${opts}>`}</div>`}
function openForm(kind){
 $("modal").hidden=false;$("formTitle").textContent=kind==="mistake"?"Add Mistake":"Add Test";
 let f="";
 if(kind==="mistake") f=field("date","Date","date",'required')+field("subject","Subject","text",'required')+field("topic","Topic","text",'required')+field("qno","Question number","number")+field("mistake","What was the mistake?","textarea",'required')+field("correctMethod","Correct method","textarea")+field("reason","Reason / code","text")+field("revisit","Revisit note","text")+field("code","Code (C/CA/S/R/T/G/M/A)","text");
 else f=field("date","Date","date",'required')+field("test","Test name","text",'required')+field("subject","Subject","text",'required')+field("attempted","Attempted","number",'min="0" required')+field("correct","Correct","number",'min="0" required')+field("wrong","Wrong","number",'min="0"')+field("time","Time (minutes)","number",'min="0"')+field("mainProblem","Main problem","textarea")+field("knownWrong","What did I know but still get wrong?","textarea")+field("unknown","What concept did I not know?","textarea")+field("slow","Which questions took too much time?","textarea")+field("skip","Which should I have skipped?","textarea");
 $("entryForm").innerHTML=f+`<button class="submit">Save</button>`;$("entryForm").date.value=today();$("entryForm").onsubmit=e=>{e.preventDefault();let o=Object.fromEntries(new FormData(e.target).entries());if(kind==="mistake"){let base=new Date(o.date+"T00:00:00");o.revisions=[1,3,7,15,30].map(n=>{let d=new Date(base);d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)});data.mistakes.push(o)}else{if(!o.wrong)o.wrong=Math.max(0,+o.attempted-(+o.correct));data.tests.push(o)}data.activity[o.date]=true;save();closeForm()}}
function closeForm(){$("modal").hidden=true}
document.querySelectorAll(".navBtn").forEach(b=>b.onclick=()=>{document.querySelectorAll(".navBtn").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(b.dataset.screen).classList.add("active")});
let deferred;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;$("installBtn").hidden=false});$("installBtn").onclick=async()=>{if(deferred){deferred.prompt();deferred=null}};
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
render();