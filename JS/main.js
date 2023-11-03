if (localStorage.UserData == null) { location.href = "index.html" }
let UserData = JSON.parse(localStorage.UserData);

let header = document.querySelector("header")
header.querySelector(".img-user").src = UserData[0].imgUser

if (UserData[0].Type === "Admin") {
  document.querySelector(".con-User").style.display =""
}

let pages = document.querySelector(".pages")
pages.querySelectorAll("a")[0].classList.add("hoverd")

function Hide_Msg() {
  document.querySelector(".Msg-Box").classList.remove("active")
  document.querySelector(".Msg-Box").id = ""
}

function Show_search(event) {
  let btn = event.target
  if (btn.id === "search") {
    document.querySelectorAll(".form_insert")[0].style.display = "none"
    document.querySelectorAll(".form_insert")[1].style.display = "none"
    document.querySelectorAll(".form_search")[0].classList.add("active_search")
    document.querySelectorAll(".form_search")[1].classList.add("active_search") 
    btn.classList.remove("fa-search")  
    btn.classList.add("fa-plus")
    btn.id = "plus"
  }else{
    document.querySelectorAll(".form_insert")[0].style.display = ""
    document.querySelectorAll(".form_insert")[1].style.display = ""
    document.querySelectorAll(".form_search")[0].classList.remove("active_search")
    document.querySelectorAll(".form_search")[1].classList.remove("active_search")   
    btn.classList.add("fa-search")  
    btn.classList.remove("fa-plus")  
   btn.id = "search"
  }

}


function CompleteData() {
  let MsgBox = document.querySelector(".Msg-Box")
  MsgBox.querySelector(".loader").style.display = "none"
  MsgBox.querySelector(".btn-oky").style.display = "grid"
  MsgBox.querySelector(".btn-oky").innerHTML = `<a onclick="Hide_Msg()">موافق</a>`
  MsgBox.querySelector("i").classList.add("fa-exclamation")
  MsgBox.querySelector("i").classList.remove("fa-check")
  MsgBox.querySelector("i").classList.remove("fa-xmark")
  MsgBox.querySelector("i").classList.remove("fa-trash")
  MsgBox.querySelector("i").classList.remove("fa-cloud-arrow-up")
  MsgBox.querySelector("h1").innerText = MsgBox.id

  MsgBox.classList.add("active")
}

function LoadSave() {
  document.querySelector("audio").play();
  let MsgBox = document.querySelector(".Msg-Box")
  MsgBox.querySelector(".loader").style.display = "flex"
  MsgBox.querySelector(".btn-oky").style.display = "none"
  MsgBox.querySelector("i").classList.add("fa-cloud-arrow-up")
  MsgBox.querySelector("i").classList.remove("fa-exclamation")
  MsgBox.querySelector("i").classList.remove("fa-check")
  MsgBox.querySelector("i").classList.remove("fa-xmark")
  MsgBox.querySelector("i").classList.remove("fa-trash")
  MsgBox.querySelector("h1").innerText = "جارِ حفظ البيانات"

  MsgBox.classList.add("active")
}

function SuccessSave() {
  let MsgBox = document.querySelector(".Msg-Box")
  MsgBox.querySelector(".loader").style.display = "none"
  MsgBox.querySelector(".btn-oky").style.display = "grid"
  MsgBox.querySelector(".btn-oky").innerHTML = `<a onclick="Hide_Msg()">موافق</a>`
  MsgBox.querySelector("i").classList.add("fa-check")
  MsgBox.querySelector("i").classList.remove("fa-exclamation")
  MsgBox.querySelector("i").classList.remove("fa-xmark")
  MsgBox.querySelector("i").classList.remove("fa-trash")
  MsgBox.querySelector("i").classList.remove("fa-cloud-arrow-up")
  MsgBox.querySelector("h1").innerText =  "تم حفظ البيانات"
  MsgBox.classList.add("active")
}

function failedSave(err){
  let MsgBox = document.querySelector(".Msg-Box")
  MsgBox.querySelector(".loader").style.display = "none"
  MsgBox.querySelector(".btn-oky").style.display = "grid"
  MsgBox.querySelector(".btn-oky").innerHTML = `<a onclick="Hide_Msg()">موافق</a>`
  MsgBox.querySelector("i").classList.add("fa-xmark")
  MsgBox.querySelector("i").classList.remove("fa-check")
  MsgBox.querySelector("i").classList.remove("fa-exclamation")
  MsgBox.querySelector("i").classList.remove("fa-trash")
  MsgBox.querySelector("i").classList.remove("fa-cloud-arrow-up")
  MsgBox.querySelector("h1").innerText =  "خطأ في الانترنت اعد المحاوله"
  MsgBox.classList.add("active")

}

function GoToPage1() {
  document.querySelector(".section1").style.display = "block"
  document.querySelector(".section2").style.display = "none"
  document.querySelector(".section3").style.display = "none"
  document.querySelector(".section4").style.display = "none"
  document.querySelector(".ico-search").style.display = ""
  pages.querySelectorAll("a")[0].classList.add("hoverd")
  pages.querySelectorAll("a")[1].classList.remove("hoverd")
  pages.querySelectorAll("a")[2].classList.remove("hoverd")
  pages.querySelectorAll("a")[3].classList.remove("hoverd")
  pages.querySelectorAll("a")[4].classList.remove("hoverd")
}

function GoToPage2() {
  document.querySelector(".section2").style.display = "block"
  document.querySelector(".section1").style.display = "none"
  document.querySelector(".section3").style.display = "none"
  document.querySelector(".section4").style.display = "none"
  document.querySelector(".ico-search").style.display = ""
  pages.querySelectorAll("a")[0].classList.remove("hoverd")
  pages.querySelectorAll("a")[1].classList.add("hoverd")
  pages.querySelectorAll("a")[2].classList.remove("hoverd")
  pages.querySelectorAll("a")[3].classList.remove("hoverd")
  pages.querySelectorAll("a")[4].classList.remove("hoverd")
}

function GoToPage3() {
  document.querySelector(".section3").style.display = "grid"
  document.querySelector(".section1").style.display = "none"
  document.querySelector(".section2").style.display = "none"
  document.querySelector(".section4").style.display = "none"
  document.querySelector(".ico-search").style.display = "none"
  pages.querySelectorAll("a")[0].classList.remove("hoverd")
  pages.querySelectorAll("a")[1].classList.remove("hoverd")
  pages.querySelectorAll("a")[2].classList.remove("hoverd")
  pages.querySelectorAll("a")[3].classList.add("hoverd")
  pages.querySelectorAll("a")[4].classList.remove("hoverd")
}

function GoToPage4() {
  pages.querySelectorAll("a")[0].classList.remove("hoverd")
  pages.querySelectorAll("a")[1].classList.remove("hoverd")
  pages.querySelectorAll("a")[2].classList.remove("hoverd")
  pages.querySelectorAll("a")[3].classList.remove("hoverd")
  pages.querySelectorAll("a")[4].classList.add("hoverd")
  document.querySelector(".ico-search").style.display = "none"
  localStorage.removeItem("UserData")
  localStorage.removeItem("accountsheet1")
  localStorage.removeItem("accountsheet2")
  localStorage.removeItem("accountsheet3")
  location.href = "index.html"
}

function GoToPage5() {
  document.querySelector(".section3").style.display = "none"
  document.querySelector(".section1").style.display = "none"
  document.querySelector(".section2").style.display = "none"
  document.querySelector(".section4").style.display = "block"
  document.querySelector(".ico-search").style.display = "none"
  pages.querySelectorAll("a")[0].classList.remove("hoverd")
  pages.querySelectorAll("a")[1].classList.remove("hoverd")
  pages.querySelectorAll("a")[2].classList.add("hoverd")
  pages.querySelectorAll("a")[3].classList.remove("hoverd")
  pages.querySelectorAll("a")[4].classList.remove("hoverd")
}



let sheet1_URL = "https://script.google.com/macros/s/AKfycbySGeayJoqmTJ_PSwBHi6FcVSW6H32Oa_9cpQwn-LES2w8TtISzyYtxoWnkyR14TUxx/exec";
let sheet2_URL = "https://script.google.com/macros/s/AKfycby7nlfDUH59teE-5DKXrTE78h2TASma_ggsnPBuXfBFvzZDyJsXCDCHQhqtrSOmSFSb/exec";
let sheet3_URL = "https://script.google.com/macros/s/AKfycbzQ_cS-M57kd41xWc6ZTjOK0p9I70aflDl2EXwBs638W3Qr9fXShdyKlPZQY1CsV3DP/exec";
let Login_URL = "https://script.google.com/macros/s/AKfycbzKX6oDD5JCB1UBuMQ4iiTJXVbVRfH986RZ6DSz_0byGyBpKaSLB-F1xQ_z5XKUeouE/exec"
let urlImages = "https://script.google.com/macros/s/AKfycbzInpr5KRwBxBy48MISwiYRyjabobjS2OyRjdQ6fzSyIngT3gLeSeepuo0WRRlpPjI0/exec";
