let dataArr = JSON.parse(localStorage.getItem("signupdata")) || [];

let myname = JSON.parse(localStorage.getItem("name")) || [];

document.querySelector("form").addEventListener("submit", logindata);

function logindata(event) {
  event.preventDefault();

  let loginObj = {
    email: document.querySelector("#email").value,
    pass: document.querySelector("#password").value,
  };

  if (
    document.querySelector("#email").value == "" ||
    document.querySelector("#password").value == ""
  ) {
    alert("Fill all Inputs");
    return;
  }

if(dataArr.length == 0){
    alert("No User Registered Till Now");
    return;
}

  let flag = false;
  dataArr.forEach(function (ele) {
    if (ele.email == loginObj.email && ele.pass1 == loginObj.pass) {
      flag = true;
      alert("Log-In Sucessful");
      window.location.href = "index.html";
      localStorage.setItem("name", JSON.stringify(ele.name));
    }
  });

  if (flag == false) {
    alert("Wrong Credential");
  }
}
