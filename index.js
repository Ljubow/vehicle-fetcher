const ready = () => {
    const request = new XMLHttpRequest;
    const url = 'https://www.googleapis.com/books/v1/volumes?q=test:keyes&key=AIzaSyCQHwYgHthKdQzPFjB7FZ7JCmEE6UxOtM8';

    request.onreadystatechange = function() {
        console.log(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            let content = '';
            let myArr = JSON.parse(this.responseText);
            let myArrs = myArr.items;
            for (let i = 0; i < myArrs.length; i++){
              let data = {
                id:myArrs[i].id,
                img: myArrs[i].volumeInfo.imageLinks.thumbnail || '',
                title: myArrs[i].volumeInfo.title || 'Nameless',
                authors: myArrs[i].volumeInfo.authors || 'Unknown',
                categories: myArrs[i].volumeInfo.categories || 'No categories',
                pageCount: myArrs[i].volumeInfo.pageCount || 'Unknown',
                publishedDate: myArrs[i].volumeInfo.publishedDate || 'Unknown',
                publisher: myArrs[i].volumeInfo.publisher || 'Unknown',
                description: myArrs[i].volumeInfo.description || 'No description',

              };
              // let gggg = myArrs[i].volumeInfo.description.gggg || {}
                content += `<div class='card-columns'>` +
                    `<div class='card' style="width: 300px;">` +
                    `<img class="rounded mx-auto d-block" src='${data.img}'` +
                    `width="170" height="230" alt='Card image'>` +
                    `<div class='card-block text-right'` +
                    `<div class="list-group">` +
                    `<a href="#" class="list-group-item">` +
                    `Name:<div>${data.title}</div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Authors:` +
                    `</div><div class='col-sm-6'>${data.authors}</div></div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Categories:` +
                    `</div><div class='col-sm-6'>${data.categories}</div></div></a>` +
                    `<div class="card-footer">` +
                    `<button type='button' data-toggle='collapse'` +
                    `data-target='#${myArrs[i].id}'>More information</button>` +
                    `</div>` +
                    `<div id='${myArrs[i].id}' class='collapse'>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Published Date:` +
                    `</div><div class='col-sm-6'>${data.publishedDate}</div></div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Page count:` +
                    `</div><div class='col-sm-6'>${data.pageCount}</div></div></a>` +
                    `<a href="#" class="list-group-item"><div class='row'><div class='col-sm-6'>Publisher:` +
                    `</div><div class='col-sm-6'>${data.publisher}</div></div></a>` +
                    `<a href="#" class="list-group-item">Description:` +
                    `<div>${data.description}</div></a>` +
                    `</div>` +
                    `</div>` +
                    `</div>` +
                    `</div>` +
                    `</div>`
// <div>${myArrs[i].volumeInfo.description}</div>
            }
            const elem = document.getElementById("text");
            elem.innerHTML = content;
  }
}
    request.open('GET', url, true);
    request.send();
}
document.addEventListener('DOMContentLoaded', ready);
