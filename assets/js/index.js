"use strict;"
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


const pages = [];
function getpageno(pageno){
	let ans = [];
  if( 2 >= pageno){
  	for(let i=1; i<=5; i++){
    	ans.push(i);
    }
    return  ans;
  }
  
  /* else if(pageno){} */
  else{
  	for(let i=pageno-2; i<= pageno+2; i++){
    	ans.push(i);
    }
    return ans;
  }
}
// console.log(fun(1));


function getIndex(pageno){
	let totalpage =12;

  let start = totalpage * (pageno -1)+1;
  let end = (pageno * 12)+1;
  return [start, end];
};


// console.log(getIndex(3));

// ---------------------------------------------------------
function renderTemplateList() {
    let divString = "";
    let point = getIndex(2);

    products.slice(point[0], point[1]).forEach(element => {
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

    let pno  = getpageno(1);
    let divpagi = "";
    
    pno.forEach(ele =>{
        divpagi += `<div class="m-1 pt-3">
                        <p  style" height: 23px, width: 30px" class="fs-5 bg-info btn " ><span class="text-color-danger">${ele}</span></p>
                    </div>
    `
    });
    
    pageNumbers.innerHTML = divpagi;
}

setTimeout(() => {
    renderTemplateList()
}, 100);