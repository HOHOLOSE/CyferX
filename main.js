fetch("scripts.json")
.then(r=>r.json())
.then(data=>{

let games={}

data.forEach(s=>{
if(!games[s.game]){
games[s.game]=s.gameid
}
})

let container=document.getElementById("games")

Object.entries(games).forEach(([name,id])=>{

let thumb=`https://thumbnails.roblox.com/v1/games/icons?universeIds=${id}&size=512x512&format=Png`

fetch(thumb)
.then(r=>r.json())
.then(imgdata=>{

let img=imgdata.data[0].imageUrl

container.innerHTML+=`
<a href="game.html?game=${encodeURIComponent(name)}">
<div class="card">
<img src="${img}">
<h3>${name}</h3>
</div>
</a>
`

})

})

})