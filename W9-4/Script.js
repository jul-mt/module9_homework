let btn = document.querySelector('.button');
let result = document.querySelector('.result');


function displayImg (urlData) {
    
  const cardBlock = `
      <div class="card">
        <img
          src="${urlData}"          
      />                        
      </div>
    `;

    result.innerHTML = cardBlock;
}


btn.addEventListener('click', function () {
  let width = document.querySelector('.input-width').value;
  let height = document.querySelector('.input-height').value;

  if (width < 100 || width > 300 || height < 100 || height > 300 || isNaN(width) || isNaN(height)){    
    result.innerHTML = `Одно из чисел вне диапазона от 100 до 300`;
  } else {    
    fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => { displayImg(response.url);})        
        .catch(() => { console.log('error') });
  }
})
