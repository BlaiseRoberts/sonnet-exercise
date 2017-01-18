var sonnetEl = document.getElementById("sonnet")
var sonnet = document.getElementById("sonnet").innerHTML

console.log(sonnet.indexOf("orphans"))
console.log(sonnet.length)

var newSonnet = sonnet.replace("winter", "yuletide")
newSonnet = newSonnet.replace(/the /g,"a large ")

sonnetEl.innerHTML = newSonnet


