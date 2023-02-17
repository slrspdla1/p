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
async function updateDocuments(post, id) {
    let response = await fetch(`https://prjt-bb444-default-rtdb.asia-southeast1.firebasedatabase.app/documents/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(post), // {body: ''}
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
    let br=document.getElementById("box-wrapper"),btn=document.getElementById('fifth')
    btn.style.hidden=true;
    br.insertAdjacentHTML('beforeend', "<input id='ttl' onkeydown='sttl(event)'>")
}

async function sttl(event){
    let documents = document.getElementById('box-wrapper')
    if(event.key==="Enter"){
        let inp=document.getElementById('ttl')
        let result = await postDocuments({title: inp.value, body: ''})
        let key = result.name
        let data = await getDocuments()
        inp.remove()
        num++;
        documents.insertAdjacentHTML('beforeend', `
            <div class="second" id="${key}" onclick="goto('${key}')">${data[key].title}</div>
        `)
    }
}