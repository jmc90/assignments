var div = document.getElementById("div1")
var ul = document.createElement("ul")
var li = document.createElement("li")
var p = document.createElement("p")

div.appendChild(ul)
ul.appendChild(li)

div.appendChild(p)

var text = document.createTextNode("Hellloo")
var something = document.createTextNode("paragraph")

li.appendChild(text)

ul.appendChild(li)
var text2 = document.createTextNode("Hellloo")
li.appendChild(text2)
p.appendChild(something)

