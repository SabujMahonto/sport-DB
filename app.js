

const searchBtn =()=>{
    const inputName = document.getElementById('search_box')
    const inputText = inputName.value;
    inputName.value = ''
    console.log(inputText )

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`

    fetch(url)
    .then(res => res.json())
    .then(data => showPlayer(data.player))
}


const showPlayer = (player)=>{
console.log(player)

}
