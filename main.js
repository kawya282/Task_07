const txt = document.querySelector(".txtBox");
const form = document.querySelector(".searchForm");
const searchTxt = document.querySelector(".search-word");
const description = document.querySelector(".description");

const dictionaryJson = "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json";

function searchWord(e){
  e.preventDefault();
  //make asynchronous requests to the server and load the information that is returned by the server onto the web page
  fetch(dictionaryJson).then(function(response){ 
    return response.json();
  })
  .then(function(data){
    e.preventDefault;
    let word = txt.value;
    console.log(txt.value);

    let searchKeyword = word.toUpperCase();

    Object.keys(data).forEach(function(key){
      if(key === searchKeyword){
        searchTxt.innerHTML = searchKeyword;
        if(searchKeyword === data[key]){
          description.innerHTML = "Not Found";
        }
        else{
          description.innerHTML = data[key];
        }

        console.log(data[key]);
      }
    });
  });
}

form.addEventListener("submit", searchWord);
