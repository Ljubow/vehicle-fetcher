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
            content +=
            // `<div class='row'>` +
            `<div class='col-sm-6'>`+
                `<div class='card text-white bg-danger md-5'>` +
                `<img class='rounded mx-auto d-block' src='${myArrs[i].volumeInfo.imageLinks.thumbnail}' width="170" height="230" alt='Card image cap'>` +
                `<div class='card-body'>` +
                `<div class='row'>` +
                `<div class="col-6">` +
                `<div class='list-group' id='list-tab' role='tablist'>` +
                `<a class="list-group-item list-group-item-action active list-group-item-danger" data-id='${myArrs[i].id}' id="list-home-list"` +
                `data-toggle="list" href="#list-home" role="tab" aria-controls="home">Name</a>` +
                `<a class="list-group-item list-group-item-action list-group-item-danger"  id="list-authors-list"` +
                `data-toggle="list" href="#list-authors" role="tab" aria-controls="authors">Authors</a>` +
                `<a class="list-group-item list-group-item-action list-group-item-danger"  id="list-publisher-list"` +
                `data-toggle="list" href="#list-publisher" role="tab" aria-controls="publisher">Publisher</a>` +
                `<a class="list-group-item list-group-item-action list-group-item-danger"  id="list-publishedDateings-list" ` +
                `data-toggle="list" href="#list-publishedDate" role="tab" aria-controls="publishedDate">Publication date</a>` +
                `<a class="list-group-item list-group-item-action list-group-item-danger"  id="list-pageCount-list"` +
                `data-toggle="list" href="#list-pageCount" role="tab" aria-controls="pageCount">Page count</a>` +
                `<a class="list-group-item list-group-item-action list-group-item-danger"  id="list-categories-list"` +
                `data-toggle="list" href="#list-categories" role="tab" aria-controls="categories">Categories</a>` +
                `<a class="list-group-item list-group-item-action list-group-item-danger"  id="list-description-list"` +
                `data-toggle="list" href="#list-description" role="tab" aria-controls="description">Description</a>` +
                `</div>`+
                `</div>`+
                `<div class="col-6">`+
                `<div class="tab-content" id="nav-tabContent">`+
                `<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">` +
                `<div>${myArrs[i].volumeInfo.title}</div></div>`+
                `<div class="tab-pane fade" id="list-authors" role="tabpanel" aria-labelledby="list-authors-list">` +
                `<div>${myArrs[i].volumeInfo.authors}</div></div>`+
                `<div class="tab-pane fade" id="list-publisher" role="tabpanel" aria-labelledby="list-publisher-list">` +
                `<div>${myArrs[i].volumeInfo.publisher}</div></div>`+
                `<div class="tab-pane fade" id="list-publishedDate" role="tabpanel" aria-labelledby="list-publishedDate-list">` +
                `<div>${myArrs[i].volumeInfo.publishedDate}</div></div>`+
                `<div class="tab-pane fade" id="list-pageCount" role="tabpanel" aria-labelledby="list-pageCount-list">` +
                `<div>${myArrs[i].volumeInfo.pageCount}</div></div>`+
                `<div class="tab-pane fade" id="list-categories" role="tabpanel" aria-labelledby="list-categories-list">` +
                `<div>${myArrs[i].volumeInfo.categories}</div></div>`+
                `<div class="tab-pane fade" id="list-description" role="tabpanel" aria-labelledby="list-description-list">` +
                `<div>${myArrs[i].volumeInfo.description}</div></div>`+
            `</div>`+
            `</div>`+
            `</div>`+
            `</div>`+
            `</div>`+
            `</div>`+
            `</div>`
      }
        const elem = document.getElementById("text");
        elem.innerHTML = content;

  //   elem.addEventListener('click', function(e) {
  //       const typeId = e.target.getAttribute('data-id');
  //       if (!typeId) return;
  //       const arr = myArrs.find((type) => {
  //           return type.id == typeId;
  //       });
  //     .innerHTML = ;
  // });
}
}
request.open('GET', url, true);
request.send();
}
document.addEventListener('DOMContentLoaded', ready);
