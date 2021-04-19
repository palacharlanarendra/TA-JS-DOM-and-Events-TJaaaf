const cardsArray = [
    {
      name: 'shell',
      img: './assets/images/blueshell.png',
    },
    {
      name: 'star',
      img: './assets/images/star.png',
    },
    {
      name: 'bobomb',
      img: './assets/images/bobomb.png',
    },
    {
      name: 'mario',
      img: './assets/images/mario.png',
    },
    {
      name: 'luigi',
      img: './assets/images/luigi.png',
    },
    {
      name: 'peach',
      img: './assets/images/peach.png',
    },
    {
      name: '1up',
      img: './assets/images/1up.png',
    },
    {
      name: 'mushroom',
      img: './assets/images/mushroom.png',
    },
    {
      name: 'thwomp',
      img: './assets/images/thwomp.png',
    },
    {
      name: 'bulletbill',
      img: './assets/images/bulletbill.png',
    },
    {
      name: 'coin',
      img: './assets/images/coin.png',
    },
    {
      name: 'goomba',
      img: './assets/images/goomba.png',
    },
  ];


    let root = document.querySelector(".game");
    let grid = document.createElement("section");
    root.append(grid);
    grid.classList.add("grid");


    let concatArray = cardsArray.concat(cardsArray);
   
    let RandomArray =concatArray.sort(()=>0.5-Math.random());

    RandomArray.forEach((elem) => {
        // Create card element with the name dataset
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.name = elem.name

  // Create front of card
  const front = document.createElement('div')
  front.classList.add('front')

  // Create back of card, which contains
  const back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = `url(${elem.img})`

  // Append card to grid, and front and back to each card
  grid.appendChild(card)
  card.appendChild(front)
  card.appendChild(back)
      })

      grid.addEventListener("click",handleClick);

      let firstGuess = ''
      let secondGuess = ''
      let count = 0
      function handleClick(event){
        let clicked = event.target;
        console.log(clicked);
        if (clicked.nodeName === 'SECTION') {
            return
          }

        if (count < 2) {
            count++
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name
                console.log(firstGuess)
                clicked.parentNode.classList.add('select')
              } else {
                secondGuess = clicked.parentNode.dataset.name
                console.log(secondGuess)
                clicked.parentNode.classList.add('select')
              }
         
            if (firstGuess !== '' && secondGuess !== '') {
            
              if (firstGuess === secondGuess) {
               
                match();
                resetGuesses();
              }else{
                resetGuesses();
              }
            }
          }
      }

function resetGuesses(){
    firstGuess = ''
    secondGuess = ''
    count = 0

    var selected = document.querySelectorAll('.select')
    selected.forEach((card) => {
        card.classList.remove('select')
        });
};

function match(){
    var selected = document.querySelectorAll('.select')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}





























































  