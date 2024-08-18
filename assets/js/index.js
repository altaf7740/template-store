"use strict";
const pageNumber = document.querySelector(".pageNumbers");
const mainDiv = document.getElementById("divlist");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let products = [];
let filteredProducts = [];
fetch("./records.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    filteredProducts = data; 
    // Get saved page number from localStorage or default to page 1
    const savedPage = localStorage.getItem("currentPage") || 1;
    currentPage = parseInt(savedPage);
    renderTemplateList(currentPage);
  });

let pageNo = 1;
const itemsPerPage = 12;
let currentPage = 1;

function renderTemplate() {
  let divStringfalse = "";
  for (let i = 0; i < itemsPerPage; i++) {
    divStringfalse += `
      <div class="card mb-3 shadow mx-2" style="max-width: 400px;">
        <div class="row g-0">
          <div class="col-12 d-flex align-items-center">
            <img src="" class="img-fluid" style="height: 240px;" alt="templates">
          </div>
          <div class="card-footer tags">
            <strong style='color:green'>Tags: </strong>
            <input type="text" style="width:80%; border: none; outline:none; background-color: transparent;" readonly />
          </div>
        </div>
      </div>`;
  }
  mainDiv.innerHTML = divStringfalse;
}

function getBtns(pageNo) {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  let btns = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      btns.push(i);
    }
    return btns;
  } else {
    for (let i = Math.max(1, pageNo - 2); i <= Math.min(totalPages, pageNo + 2); i++) {
      btns.push(i);
    }
    return btns;
  }
}

function decrPage() {
  if (currentPage > 1) {
    currentPage -= 1;
    renderTemplateList(currentPage);
    // Save current page to localStorage
    localStorage.setItem("currentPage", currentPage);
  }
}

function incrPage() {
  if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
    currentPage += 1;
    renderTemplateList(currentPage);
    // Save current page to localStorage
    localStorage.setItem("currentPage", currentPage);
  }
}

function getContSize(pageNo) {
  const start = itemsPerPage * (pageNo - 1);
  const end = start + itemsPerPage;
  return [start, end];
}

function renderTemplateList(pageNumberNo) {
  let divString = "";
  mainDiv.innerHTML = "";

  const templates = getContSize(pageNumberNo);
  filteredProducts.slice(templates[0], templates[1]).forEach((element) => {
    divString += `
      <div class="card mb-3 shadow mx-2" style="max-width: 400px;">
        <div class="row g-0">
          <div class="col-12 d-flex align-items-center" style="height:240px;">
            <img src="assets/${element.thumbnailPath}" class="img-fluid" alt="template" onclick='window.open("assets/${element.indexPath}","_self")'>
          </div>
          <div class="card-footer tags">
            <strong style='color:green'>Tags: </strong>
            <input type="text" value="${element.tags.join(', ')}" style="width:80%; border: none; outline:none; background-color: transparent;" readonly />
          </div>
        </div>
      </div>`;
  });
  mainDiv.innerHTML = divString;
  renderBtns(pageNumberNo);

  // Save current page to localStorage
  localStorage.setItem("currentPage", pageNumberNo);
}

function renderBtns(currentPage) {
  let divBtn = "";
  const pno = getBtns(currentPage);
  pno.forEach((page) => {
    if (page === currentPage) {
      divBtn += `
        <div class="m-1 pt-3">
          <p style="height: 50px; width: 40px;" onClick="renderTemplateList(${page})" class="fs-5 bg-danger page-bt btn">${page}</p>
        </div>`;
    } else {
      divBtn += `
        <div class="m-1 pt-3">
          <p style="height: 50px; width: 40px;" onClick="renderTemplateList(${page})" class="fs-5 page-bt btn">${page}</p>
        </div>`;
    }
  });
  pageNumber.innerHTML = divBtn;
}

function onSearch() {
  const searchName = document.querySelector("#searchbox").value.toLowerCase();
  if (searchName.trim() === "") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product =>
      product.indexPath.toLowerCase().includes(searchName) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchName))
    );
  }
  currentPage = 1;
  renderTemplateList(currentPage);
  // Save current page to localStorage
  localStorage.setItem("currentPage", currentPage);
}

document.querySelector("#searchbox").addEventListener("input", onSearch);

// Automatically load the saved page on load
window.addEventListener("load", () => {
  const savedPage = localStorage.getItem("currentPage");
  if (savedPage) {
    renderTemplateList(parseInt(savedPage));
  } else {
    renderTemplateList(1);
  }
});

setTimeout(() => {
  renderTemplateList(currentPage);
}, 2000);
