let button = document.querySelector('.button');
let result = document.querySelector('.result');



function useRequest(url, value) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      
        console.log(1);
        if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
        
      } else {

        
    
            if (value < 1 || value > 10){
                result.innerHTML = 'число вне диапазона от 1 до 10';
            } else {
                const resultObj = JSON.parse(xhr.response);
                displayImg(resultObj[value-1]);
                
                
            }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };


function displayImg (obj) {
    
    const cardBlock = `
        <div class="card">
          <img
            src="${obj.download_url}"
            class="card-image"
        />
        <p>${obj.author}</p>                  
        </div>
      `;

      result.innerHTML = cardBlock;

}


button.addEventListener('click', function () {
  const value = document.querySelector('.input').value;    
  useRequest('https://picsum.photos/v2/list/?limit=10', value);

  

});