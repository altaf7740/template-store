"use strict;"
let templates = null;
let page_size = 9;
let current_page = 0;
const mainDiv = document.getElementById("divlist")

fetch('./records.json').then(response => {
    return response.json()
}).then(data => {
    templates = data;
    console.log(templates)
})

function renderTemplateList() {
    let divString = "";
    templates.slice(0, 12).forEach(element => {
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
    mainDiv.innerHTML = divString
}

setTimeout(() => {
    renderTemplateList()
    
}, 100);
