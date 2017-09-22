const request = new XMLHttpRequest;
const STEP = 12;
let startIndex;
// const fullUrl= () => {
//     let url = 'https://www.googleapis.com/books/v1/volumes?q=j:keyes&key=AIzaSyCQHwYgHthKdQzPFjB7FZ7JCmEE6UxOtM8&startIndex&maxResults=12';
//     return (url);
// };
const url = 'https://www.googleapis.com/books/v1/volumes?q=j:keyes&key=AIzaSyCQHwYgHthKdQzPFjB7FZ7JCmEE6UxOtM8&maxResults=12';
 request.onreadystatechange = function() {

     if (this.readyState == 4 && this.status == 200) {
         let content = '';
         console.log(JSON.parse(this.responseText))
         let myArrs = JSON.parse(this.responseText).items;

  myArrs.map((item) => {
             let data = {
                 id: item.id,
                 img: (!item.volumeInfo.imageLinks || !item.volumeInfo.imageLinks.thumbnail) ?
                 'img/content.png' : item.volumeInfo.imageLinks.thumbnail,
                 title: item.volumeInfo.title || 'Nameless',
                 authors: (item.volumeInfo.authors) ? item.volumeInfo.authors.join(', ') : 'Unknown',
                 categories: (item.volumeInfo.categories) ? item.volumeInfo.categories.join(', ') : 'No categories',
                 pageCount: item.volumeInfo.pageCount || 'Unknown',
                 publishedDate: item.volumeInfo.publishedDate || 'Unknown',
                 publisher: item.volumeInfo.publisher || 'Unknown',
                 description: item.volumeInfo.description || 'No description',

             };
             let header = `<div class='book-heading'>
                               <h2 class='text-center'>
                                   ${data.title}
                               </h2>
                               <img class='rounded center-block' src='${data.img}'>
                           </div>`;
             let body = `<div class='book-body'>
                             <div class='primary-info'>
                                 <p><b>Authors</b>: ${data.authors}</p>
                                 <p><b>Categories</b>: ${data.categories}</p>
                             </div>
                             <div class='container-fluid'>
                                 <button class='btn btn-light' data-toggle='collapse'
                                 data-target='#${data.id}'>More information</button>
                             </div>
                         </div>`;
             let footer = `<div id='${data.id}' class='book-footer collapse'>
                               <p><b>Date</b>: ${data.publishedDate}</p>
                               <p><b>Publisher</b>: ${data.publisher}</p>
                               <p><b>Page count</b>: ${data.pageCount}</p>
                               <p><b>Description</b>: ${data.description}</p>
                           </div>`;

             content +=
                 `<div class='col-xs-12 col-sd-6 col-md-4 col-lg-3'>
                     ${header}
                     ${body}
                     ${footer}
                 </div>`
    });

         const elem = document.querySelector('.row');
         elem.innerHTML = content;

document.querySelector('.pagination').addEventListener('click', e => {
    if (e.target.getAttribute('data-id') === 'btn') {
     startIndex += STEP;
}});
}
}

 request.open('GET', url);
 request.send();
