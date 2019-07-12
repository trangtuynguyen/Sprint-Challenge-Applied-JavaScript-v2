// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response=>{
        cardMaker(response.data);
    })
    .catch(error=>{
        console.log("this is an error", error);
    })

function cardMaker(data){

    //make elements

    console.log(data); 

    console.log(data['articles']['bootstrap']);
    for(topic in data.articles){

        data['articles'][topic].forEach(element => {
            //create element
            let card = document.createElement('div');
            let headline = document.createElement('div');
            let author = document.createElement('div');
            let imgCont = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('span');
    
            //add classes
            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgCont.classList.add('img-container');
    
            //add content and src
            headline.textContent = data['articles'][topic]['headline'];
            name.textContent = data['articles'][topic]['authorName'];
            img.setAttribute('src', data['articles'][topic]['authorPhoto']);
    
            //appending
            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(name);
            author.appendChild(imgCont);
            imgCont.appendChild(img);
    
            //big append
            let cardCont = document.querySelector('.cards-container');
            cardCont.appendChild(card);
    
            
        });
    

    

    }
    

    // data['articles'].forEach(element => {});
}

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
