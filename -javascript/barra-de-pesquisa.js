// Obtendo todas as variáveis necessárias.
const searchWrapper = document.querySelector('.inserir-pesq');
const inputBox = searchWrapper.querySelector('input'); // --> tag de inserção de dados
const suggBox = searchWrapper.querySelector('.auto-pesq');
const icon = searchWrapper.querySelector('.lupa');
let linkTag = searchWrapper.querySelector('a');
let webLink;

// Se o usuário apertar qualquer tecla e soltar
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //Valor digitado
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = 'https://www.google.com/search?q=' + userData;
      linkTag.setAttribute('href', webLink);
      console.log(webLink);
      linkTag.click();
    };
    emptyArray = sugestao.filter((data) => {
      //Filtrando o valor da matriz e os caracteres do usuário para minúsculas e retornando apenas as palavras que começam com os caracteres inseridos pelo usuário.
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // Passando dados de retorno dentro da tag li
      return (data = '<li>' + data + '</li>');
    });
    searchWrapper.classList.add('active'); //Mostrando caixa do autocomplete
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll('li');
    for (let i = 0; i < allList.length; i++) {
      //Adicionando o atributo 'onclick' em todas as tags li
      allList[i].setAttribute('onclick', 'select(this)');
    }
  } else {
    searchWrapper.classList.remove('active'); //Ocultando caixa do autocomplete
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = '/-html/' + selectData + '.html'; /* Criando caminho dinâmico com o valor digitado */
    linkTag.setAttribute('href', webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove('active');
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = '<li>' + userValue + '</li>';
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}
