document.querySelector("form").addEventListener("submit", data);

  let dataArr = JSON.parse(localStorage.getItem("signupdata")) || [];
  

  function data(event) {
    event.preventDefault();

    let obj = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      pass1: document.querySelector("#password1").value,
      pass2: document.querySelector("#password2").value,
    };

    dataArr.push(obj);

    if (
      document.querySelector("#name").value == "" ||
      document.querySelector("#email").value == "" ||
      document.querySelector("#password1").value == "" ||
      document.querySelector("#password2").value == ""
    ) {
      alert("Fill all Inputs");
      return;
    } else {
      alert("Sign-Up Sucessfull");
      window.location.href = "index.html";
    }

    localStorage.setItem("signupdata", JSON.stringify(dataArr));
  }