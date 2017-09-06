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
            `<table class='table-sm'>`+
            `<tr class="table-danger">`+
                       `<tbody>`+

                       `<tr><td><img src='${myArrs[i].volumeInfo.imageLinks.thumbnail}'  class="rounded float-left" alt='Card image cap'></td>`+
                       `<td><div class='row'><div class='col-sm-12'>Name:</div><div class='col-sm-12'>${myArrs[i].volumeInfo.title}</div></div></td></tr>`+
                       `<tr><td>Authors:</td><td><div>${myArrs[i].volumeInfo.authors}</div></td></tr>`+
                       `<tr><td>Publisher:</td><td><div>${myArrs[i].volumeInfo.publisher}</div></td></tr>`+
                       `<tr><td>Publication date:</td><td><div>${myArrs[i].volumeInfo.publishedDate}</div></td></tr>`+
                       `<tr><td>Page count:</td><td><div>${myArrs[i].volumeInfo.pageCount}</div></td></tr>`+
                       `<tr><td>Categories:</td><td><div>${myArrs[i].volumeInfo.categories}</div></td></tr>`+
                       `<tr><td>Description:</td><td><div>${myArrs[i].volumeInfo.description}</div></td></tr>`+

                       `</tbody>`+
                       `</tr>`+
                       `</table>`
  }
        const elem = document.getElementById("text");
        elem.innerHTML = content;
}
}
request.open('GET', url, true);
request.send();
