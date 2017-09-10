const ready = () => {
    const request = new XMLHttpRequest;
    const url = 'https://www.googleapis.com/books/v1/volumes?q=test:keyes&key=AIzaSyCQHwYgHthKdQzPFjB7FZ7JCmEE6UxOtM8';
    request.onreadystatechange = function() {
        console.log(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            let content = '';
            let myArr = JSON.parse(this.responseText);
            let myArrs = myArr.items;
            for (let i = 0; i < myArrs.length; i++) {
                content += `<div class='card-columns'>` +
                    `<div class='card' style="width: 300px;">` +
                    `<img class="rounded mx-auto d-block" src='${myArrs[i].volumeInfo.imageLinks.thumbnail}'` +
                    `width="170" height="230" alt='Card image'>` +
                    `<div class='card-block text-right'` +
                    `<div class="list-group">` +
                    `<a href="#" class="list-group-item">` +
                    `Name:<div>${myArrs[i].volumeInfo.title}</div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Authors:` +
                    `</div><div class='col-sm-6'>${myArrs[i].volumeInfo.authors}</div></div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Categories:` +
                    `</div><div class='col-sm-6'>${myArrs[i].volumeInfo.categories}</div></div></a>` +
                    `<div class="card-footer">` +
                    `<button type='button' data-toggle='collapse'` +
                    `data-target='#${myArrs[i].id}'>More information</button>` +
                    `</div>` +
                    `<div id='${myArrs[i].id}' class='collapse'>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Published Date:` +
                    `</div><div class='col-sm-6'>${myArrs[i].volumeInfo.publishedDate}</div></div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Page count:` +
                    `</div><div class='col-sm-6'>${myArrs[i].volumeInfo.pageCount}</div></div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Publisher:` +
                    `</div><div class='col-sm-6'>${myArrs[i].volumeInfo.publisher}</div></div></a>` +
                    `<a href="#" class="list-group-item">Description:` +
                    `<div>${myArrs[i].volumeInfo.description}</div></a>` +
                    `</div>` +
                    `</div>` +
                    `</div>` +
                    `</div>` +
                    `</div>`
            }
            const elem = document.getElementById("text");
            elem.innerHTML = content;
        }
    }
    request.open('GET', url, true);
    request.send();
}
document.addEventListener('DOMContentLoaded', ready);
