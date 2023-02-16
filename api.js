async function getDocuments() {
    let response = await fetch(`https://prjt-bb444-default-rtdb.asia-southeast1.firebasedatabase.app/documents.json`)
    let data = await response.json()
    return data
}
async function getDocument(id) {
    let response = await fetch(`https://prjt-bb444-default-rtdb.asia-southeast1.firebasedatabase.app/documents.json`)
    let data = await response.json()
    return data[id]
}
async function title(key){
    let response = await fetch(`https://prjt-bb444-default-rtdb.asia-southeast1.firebasedatabase.app/documents.json`)
    let data = await response.json()
    return data[key]
}
async function insertDocuments() {
    let data = await getDocuments()
    let documents = document.getElementById('box-wrapper')
    for (let key in data) {
        documents.insertAdjacentHTML('beforeend', `
            <div class="second" id="${key}" onclick="goto('${key}')">${data[key].title}</div>
        `)
    }
}
async function postDocuments(post) {
    let response = await fetch(`https://prjt-bb444-default-rtdb.asia-southeast1.firebasedatabase.app/documents.json`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json'
        }
    })
    let data = await response.json()
    return data
}
if (location.href.includes('index.html')) {
    insertDocuments()
}
function goto(id){
    location.href=`tn.html?id=${id}`
}

function addNewBlock(){
    let br=document.getElementById("box-wrapper")
    br.insertAdjacentHTML('beforeend', "<input id='new'></input>")
    let inp=document.getElementById('new')
    console.log(inp.value)
    inp.remove()
}