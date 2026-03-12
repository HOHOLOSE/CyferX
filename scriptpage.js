const params=new URLSearchParams(location.search)
const id=params.get("id")

fetch("scripts.json")
.then(r=>r.json())
.then(data=>{

let s=data[id]

document.getElementById("page").innerHTML=`
<h2>${s.title}</h2>

<a href="${s.youtube}" target="_blank">
<button>Watch YouTube</button>
</a>

<br><br>

<input id="key" placeholder="Enter Key">

<button onclick="unlock('${s.key}',\`${s.script}\`)">
Unlock Script
</button>

<div id="scriptbox"></div>
`

})

function unlock(key,script){

let input=document.getElementById("key").value

if(input===key){

document.getElementById("scriptbox").innerHTML=`
<textarea id="code">${script}</textarea>
<button onclick="copy()">Copy Script</button>
`

}else{

alert("Wrong key!")

}

}

function copy(){

let text=document.getElementById("code")

text.select()

document.execCommand("copy")

alert("Copied!")

}