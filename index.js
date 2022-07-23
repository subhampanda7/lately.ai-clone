let myname = JSON.parse(localStorage.getItem("name")) || "LOG IN";
console.log(myname);

document.querySelector("#showname").innerHTML = myname;