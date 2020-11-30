let btn = document.querySelector('.button');
let result = document.querySelector('.result');

result.innerHTML = localStorage.getItem('prev');

const imgRequest = (url) => {
  return fetch(url)
        .then((response) => {          
          console.log('response', response);
          return response.json();
        })        
        .catch(() => { console.log('error') });

}


function displayImg (apiData) {
  //delete localStorage.prev;
  let cards = '';
  
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  localStorage.setItem('prev', cards);
  result.innerHTML = cards;

}


btn.addEventListener('click', function () {
  let sumCheck = "";
  const pageNumber = document.querySelector('.input-pageNumber').value;
  const limit = document.querySelector('.input-limit').value;
  let pageNumberCheck = pageNumber < 1 || pageNumber > 10 || isNaN (pageNumber)? "Номер страницы" : "";
  let limitCheck = limit < 1 || limit > 10 || isNaN (limit)? "Лимит" : "";

  sumCheck = pageNumberCheck + limitCheck == "Номер страницыЛимит"? "Номер страницы и лимит" : pageNumberCheck + limitCheck;

 if (sumCheck !== ""){    
    result.innerHTML = `${sumCheck} вне диапазона от 1 до 10`;
  } else { 
    request(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`); 
    
    async function request(url) {
      console.log("Start");

      let requestResult = await imgRequest(url);
      console.log('requestResult', requestResult);
      displayImg (requestResult);


      console.log("end")
    }
    
    
  } 
})
