
// search btn 
const searchBtn =()=>{
    const inputName = document.getElementById('search_box')
    const inputText = inputName.value;
    inputName.value = ''
    // console.log(inputText )

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`

    fetch(url)
    .then(res => res.json())
    .then(data => showPlayer(data.player))
}

// show player UI
const showPlayer = (players)=>{
// console.log(players)
const playerCard = document.getElementById('players')
playerCard.textContent = ''
players.forEach(player =>{
    const div = document.createElement('div');
        div.innerHTML = `<div class="card border mt-3">
                            <div class="pro-pic">
                            <img class="w-50" src="${player.strThumb}" alt="">
                            </div>
                            <h1>${player.strPlayer}</h1>
                            <h4>${player.strNationality}</h4>
                                <div class="all-btn">
                                <button class="btn btn-danger">Delete</button>
                                <button onclick="playerDetail(${player.idPlayer})" <button class="btn btn-success">Details</button>
                                </div>
                        </div>`;
 playerCard.appendChild(div)
})

}

// detail btn click to player detail 
const playerDetail = (byId) =>{
   const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${byId}`
   fetch(url)
   .then(res =>res.json())
   .then(data => console.log(data.players[0]))
}

// player Detail UI 
  const  displayDetail =(detail)=>{
      console.log(detail)

    }

