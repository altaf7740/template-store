// "use strict;"
const pageNumbers = document.querySelector(".pageNumbers");
// const listItems = paginationList.querySelectorAll("li");
const mainDiv = document.getElementById("divlist");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let products = null;
fetch('./records.json').then(response => {
    return response.json()
}).then(data => {
    products = data;
    console.log(products);
});

const itemsPerPage = 12;
// const pageCount = Math.ceil(products.length / itemsPerPage);
let currentPage = 1;

// Working with Ui buttons
function getBtns(pageNo){
    currentPage = pageNo;
	let btns = [];
  if( 2 >= pageNo){
  	for(let i=1; i<=5; i++){
    	btns.push(i);
    }
    return  btns;
  }
  
  /* else if(pageNo){} */
  else{
  	for(let i=pageNo-2; i<= pageNo+2; i++){
    	btns.push(i);
    }
    return btns;
  }
}

function decrPage(){
    if(currentPage>1){
        currentPage -= 1;
        console.log(currentPage);
        return renderTemplateList(currentPage);
    }
    else{
        console
        return renderTemplateList(1);
    }
}

function incrPage(){
    currentPage += 1;
    console.log(currentPage);
    return renderTemplateList(currentPage);
}

function getContSize(pageNo){
	let totalpage =12;

  let start = totalpage * (pageNo -1)+1;
  let end = (pageNo * 12)+1;
  return [start, end];
};


// ---------------------------------------------------------
function renderTemplateList(pageNumberNo) {
    let divString = "";
    currentPage = pageNumberNo;
    let templates = getContSize(pageNumberNo);

    products.slice(templates[0], templates[1]).forEach(element => {
        divString += `
        <div class="card mb-3 shadow mx-2" style="max-width: 400px;">
            <div class="row g-0">
                <div class="col-12 d-flex align-items-center">
                    <img src="assets/${element.thumbnailPath}" class="img-fluid" alt="template" onclick='window.open("assets/${element.indexPath}","_self")'>
                </div>
                <div class="card-footer tags">
                    <strong style='color:green'>Tags: </strong> 
                    <input type="text" value="${element.tags}" style="width:80%; border: none; outline:none; background-color: transparent;" readonly id="${element.id}" ondblclick="makeItWritable(${element.id})" onkeyup="updateTags(${element.id})"/>
                </div>
            </div>
        </div>
        `
    });
    mainDiv.innerHTML = divString;
}


let pno  = getBtns(1);
let divBtn = "";

pno.forEach(ele =>{
    divBtn += `<div class="m-1 pt-3">
                    <p  style" height: 23px, width: 30px" onClick="renderTemplateList(${ele})" class="fs-5 bg-info btn" >${ele}</p>
                </div>
`
});

pageNumbers.innerHTML = divBtn;

setTimeout(() => {
    renderTemplateList(1)
}, 2000);

