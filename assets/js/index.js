// "use strict;"
const pageNumber = document.querySelector(".pageNumbers");
const mainDiv = document.getElementById("divlist");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let products = null;
fetch("./records.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    products = data;
    console.log(products);
  });
let pageNo = 1;
const itemsPerPage = 12;
let currentPage = 1;

function renderTemplate() {
  let divStringfalse = "";

  for(let i= 0; i<12;i++){
    divStringfalse += `
        <div class="card mb-3 shadow mx-2" style="max-width: 400px;">
            <div class="row g-0">
                <div class="col-12 d-flex align-items-center">
                    <img src="" class="img-fluid" style="height: 240px;" alt="templates" >
                </div>
                <div class="card-footer tags">
                    <strong style='color:green'>Tags: </strong>
                    <input type="text" style="width:80%; border: none; outline:none; background-color: transparent;" readonly />
                </div>
            </div>
        </div> 
        `;
  }
  mainDiv.innerHTML = divStringfalse;
}
renderTemplate();



// Rendering with Ui buttons
function getBtns(pageNo) {
  // total content 340
  currentPage = pageNo;
  let btns = [];
  if (2 >= pageNo) {
    for (let i = 1; i <= 5; i++) {
      btns.push(i);
    }
    return btns;
  } else {
    for (let i = pageNo - 2; i <= pageNo + 2; i++) {
      btns.push(i);
    }
    return btns;
  }
}


function decrPage() {
  if (currentPage > 1) {
    currentPage -= 1;
    // console.log(currentPage);
    return renderTemplateList(currentPage);
  } else {
    return renderTemplateList(1);
  }
}


function incrPage() {
  currentPage += 1;
  // console.log(currentPage);
  return renderTemplateList(currentPage);
}


function getContSize(pageNo) {
  let totalpage = 12;

  let start = totalpage * (pageNo - 1) + 1;
  let end = pageNo * 12 + 1;
  return [start, end];
}


// ---------------------------------------------------------
function renderTemplateList(pageNumberNo) {
  let divString = "";
  mainDiv.innerHTML="";
  
  let templates = getContSize(pageNumberNo);

  products.slice(templates[0], templates[1]).forEach((element) => {
    divString += `
        <div class="card mb-3 shadow mx-2" style="max-width: 400px;">
            <div class="row g-0">
                <div class="col-12 d-flex align-items-center" style="height:240px;" >
                    <img src="assets/${element.thumbnailPath}" class="img-fluid" alt="template" onclick='window.open("assets/${element.indexPath}","_self")'>
                </div>
                <div class="card-footer tags">
                    <strong style='color:green'>Tags: </strong>
                    <input type="text" value="${element.tags}" style="width:80%; border: none; outline:none; background-color: transparent;" readonly id="${element.id}" ondblclick="makeItWritable(${element.id})" onkeyup="updateTags(${element.id})"/>
                </div>
            </div>
        </div> 
        `;
  });
  mainDiv.innerHTML = divString;
  renderBtns(pageNumberNo);
}

function renderBtns(currentPage) {
  let divBtn = "";
  let pno = getBtns(currentPage);
  for (let i = 0; i < pno.length; i++) {
    if (pno[i]===currentPage) {
      divBtn += `<div class="m-1 pt-3">
            <p  style" height: 23px, width: 30px" onClick="renderTemplateList(${pno[i]})" class="fs-5 bg-danger page-bt btn" >${pno[i]}</p>
        </div>
      `;
    }
    else{
      divBtn += `<div class="m-1 pt-3">
                    <p  style" height: 23px, width: 30px" onClick="renderTemplateList(${pno[i]})" class="fs-5 page-bt btn" >${pno[i]}</p>
                </div>
            `;
    }
  }
  pageNumber.innerHTML = divBtn;
}

setTimeout(() => {
  renderTemplateList(1);
},2000);