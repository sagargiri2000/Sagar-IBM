let form = document.getElementById("userform")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value
    // console.log(name)

    let obj = {
        name, email, phoneNumber, password, confirmPassword
    }

    if(password !== confirmPassword){
        return alert("password not match")
    }

    let tr =document.createElement("tr")

    let td1= document.createElement("td");
    td1.innerText=obj.name;

    let td2= document.createElement("td");
    td2.innerText=obj.email;

    let td3= document.createElement("td");
    td3.innerText=obj.phoneNumber;

    let td4= document.createElement("td");
    td4.innerText=obj.password;

    let td5= document.createElement("td");
    td5.innerText=obj.confirmPassword;

    tr.append(td1,td2,td3,td4,td5)
    document.getElementById("tbody").append(tr);
});



