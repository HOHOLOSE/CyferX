const params=new URLSearchParams(location.search)
const game=params.get("game")

document.getElementById("gametitle").innerText=game

fetch("scripts.json")
.then(r=>r.json())
.then(data=>{

let container=document.getElementById("scripts")

data.forEach((s,i)=>{

if(s.game===game){

container.innerHTML+=`
<a href="script.html?id=${i}" target="_blank">
<div class="card">
<h3>${s.title}</h3>
</div>
</a>
`

}

})

})