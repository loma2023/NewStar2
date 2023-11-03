let section3 = document.querySelector(".section3")
let left = section3.querySelector(".left")
left.querySelector(".imgUser").src = UserData[0].imgUser
left.querySelector("h2").innerText = UserData[0].Username
left.querySelectorAll("p")[0].innerText = UserData[0].Email
left.querySelectorAll("p")[1].innerText = UserData[0].Phone
left.querySelectorAll("p")[2].innerText = UserData[0].Type
left.querySelectorAll("p")[3].innerText = UserData[0].Insert
left.querySelectorAll("p")[4].innerText = UserData[0].Read
left.querySelectorAll("p")[5].innerText = UserData[0].Edit
left.querySelectorAll("p")[6].innerText = UserData[0].Delete

function userimg(event) {
  let file = event.target
  let right = section3.querySelector(".right")
  let imgloader = section3.querySelector(".imgloader");
  let imgUser = right.querySelector(".imgUser");
  let fr = new FileReader();

  fr.addEventListener('loadend', () => {
    let res = fr.result;
    imgloader.style.display = "table"
    imgloader.classList.add("waiting")
    imgUser.src = res
    let obj = {
      base64: res.split("base64,")[1],
      type: file.files[0].type,
      name: file.files[0].name,
    }
    fetch(urlImages, {
      method: "POST",
      body: JSON.stringify(obj)
    })
      .then(r => r.text())
      .then((data) => { imgUser.src = data, imgUser.id = data })
      .then(() => imgloader.style.display = "none")
      .then(() => imgloader.classList.remove("waiting"))
  })
  fr.readAsDataURL(file.files[0])
}

function ShowPowers(value) {
  if (value === "Admin") {
    section3.querySelector(".parent-power").style.display = "none"
  } else {
    section3.querySelector(".parent-power").style.display = ""
  }
}

let checkbox = section3.querySelectorAll(".checkbox")
checkbox.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.value == "true") {
      btn.value = "false"
    } else {
      btn.value = "true"
    }
  })
});

function insert_value(id) {
  let UserData = JSON.parse(localStorage.UserData);
  let Msg = document.querySelector(".Msg-Box")
  if (UserData[0].Type === "User" && id == "save") { Msg.id = "هذه الصلاحيه غير متوفره لك"; CompleteData(); return }

  let username = section3.querySelector(".Username").value;
  let phone = section3.querySelector(".phone").value;
  let email = section3.querySelector(".email").value;
  let password = section3.querySelector(".password").value;
  let Rpassword = section3.querySelector(".Rpassword").value;
  let type = section3.querySelector(".typeuser").value
  let right = section3.querySelector(".right")
  let userimg = right.querySelector(".imgUser").id
  let imgloader = section3.querySelector(".imgloader");
  let url; let id1;

  let insert = "Yes"; let read = "Yes"; let edit = "Yes"; let delet = "Yes"

  if (username == "" || phone == "" || email == "" || password == "" || Rpassword == "" || type == "نوع المستخدم") { Msg.id = "اكمل البيانات"; CompleteData(); return }
  if (password != Rpassword) { Msg.id = "كلمة المرور غير متطابقه"; CompleteData(); return }
  if (imgloader.classList.contains("waiting")) { Msg.id = "انتظر تحميل الصورة"; CompleteData(); return }


  if (type == "User") {
    let i = section3.querySelector(".Insert-box").value;
    let r = section3.querySelector(".Read-box").value;
    let e = section3.querySelector(".Edit-box").value;
    let d = section3.querySelector(".Delete-box").value;
    insert = "No"; read = "No"; edit = "No"; delet = "No"
    if (i == "true") { insert = "Yes" }
    if (r == "true") { read = "Yes" }
    if (e == "true") { edit = "Yes" }
    if (d == "true") { delet = "Yes" }
  }

  if (UserData[0].Type === "User" && id != "save") {
    insert = UserData[0].Insert
    read = UserData[0].Read
    edit = UserData[0].Edit
    delet = UserData[0].Delete
  }

  if (id == "save") {
    id1 = "=row()-2"
    url = Login_URL + "?action=insert" + "&id=" + id1 + "&username=" + username + "&phone=" + phone + "&email=" + email + "&password=" + password
      + "&userimg=" + userimg + "&type=" + type + "&insert=" + insert + "&read=" + read + "&edit=" + edit + "&delet=" + delet
  } else {
    url = Login_URL + "?action=update" + "&id=" + id + "&username=" + username + "&phone=" + phone + "&email=" + email + "&password=" + password
      + "&userimg=" + userimg + "&type=" + type + "&insert=" + insert + "&read=" + read + "&edit=" + edit + "&delet=" + delet

    if (id === UserData[0].id) {
      let obj = { id: id, Username: username, Email: email, Phone: phone, Pass: password, imgUser: userimg, Type: type, Insert: insert, Read: read, Edit: edit, Delete: delet };
      let UserData = [];
      UserData.push(obj)
      localStorage.setItem("UserData", JSON.stringify(UserData))
    }
  }
  let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });
  LoadSave()
  fetch(sheet1_URL)
    .then((response) => response.json())
    .then((data) => showData4())
    .then((data) => setTimeout(() => {
      SuccessSave();
    }, 1500))
    .catch((err) => failedSave(err))
}

function Edit() {
  section3.querySelector(".Username").value = UserData[0].Username;
  section3.querySelector(".phone").value = UserData[0].Phone;
  section3.querySelector(".email").value = UserData[0].Email;
  section3.querySelector(".password").value = UserData[0].Pass;
  section3.querySelector(".Rpassword").value = UserData[0].Pass;
  let right = section3.querySelector(".right")
  right.style.display = ""
  right.querySelector(".imgUser").src = UserData[0].imgUser;
  right.querySelector(".imgUser").id = UserData[0].imgUser;
  section3.querySelector(".btn_save").id = UserData[0].id;

  if (UserData[0].Type === "User") {
    section3.querySelector(".typeuser").innerHTML = `<option value="${UserData[0].Type}" disabled selected hidden>${UserData[0].Type}</option>`
  } else {
    section3.querySelector(".typeuser").innerHTML = `<option value="${UserData[0].Type}" disabled selected hidden>${UserData[0].Type}</option>
  <option value="Admin">Admin</option>
  <option value="User">User</option>`
  }
  if (screen.width < 601) {
    window.scroll({ top: 620, behavior: 'smooth' });
  } else {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

}

function add_user() {
  let Msg = document.querySelector(".Msg-Box")
  if (UserData[0].Type.includes("User")) { Msg.id = "هذه الصلاحيه غير متوفره لك"; CompleteData(); return }
  let right = section3.querySelector(".right")
  right.style.display = ""
}


function showData4() {
  fetch(Login_URL)
    .then((response) => response.json())
    .then((row) => {
      let colum; let element = ""
      for (let i = 1; i < row.length; i++) {
        colum = row[i];
        element += `<div class="D-User">
        <div>
            <img src="${colum[5]}">
            <h1>${colum[1]}</h1>
        </div>
        <a onclick="EditD_User(event)" class="fa-solid fa-pen-to-square"></a>
        <i class="id">${colum[0]}</i>
        <i class="email">${colum[2]}</i>
        <i class="phone">${colum[3]}</i>
        <i class="password">${colum[4]}</i>
        <i class="typeuser">${colum[6]}</i>
        <i class="insert">${colum[7]}</i>
        <i class="read">${colum[8]}</i>
        <i class="edit">${colum[9]}</i>
        <i class="delete">${colum[10]}</i>
    </div>`
      }
      section3.querySelector(".con-User").innerHTML = element
    })
};
showData4()


function EditD_User(event) {
  let btn = event.target
  let User = btn.parentElement

  section3.querySelector(".Username").value = User.querySelector("h1").innerText;
  section3.querySelector(".phone").value = User.querySelector(".phone").innerText;
  section3.querySelector(".email").value = User.querySelector(".email").innerText;
  section3.querySelector(".password").value = User.querySelector(".password").innerText;
  section3.querySelector(".Rpassword").value = User.querySelector(".password").innerText;
  let right = section3.querySelector(".right")
  right.style.display = ""
  right.querySelector(".imgUser").src = User.querySelector("img").src;
  right.querySelector(".imgUser").id = User.querySelector("img").src;
  section3.querySelector(".btn_save").id = User.querySelector(".id").innerText;

  section3.querySelector(".typeuser").innerHTML = `<option value="${User.querySelector(".typeuser").innerText}" disabled selected hidden>${User.querySelector(".typeuser").innerText}</option>
  <option value="Admin">Admin</option>
  <option value="User">User</option>`

  if (screen.width < 601) {
    window.scroll({ top: 620, behavior: 'smooth' });
  } else {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}