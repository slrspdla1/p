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
        const title = data[key].title;
        const body = (data[key].body.length ) ? data[key].body.slice(0,15) : "" 
        documents.insertAdjacentHTML('beforeend', `
            <div class="second" id="${key}" onclick="goto('${key}')">
                <div class="title">${title}</div>
                <dis class="content">${body}</div>
            </div>
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
if (!location.href.includes('tn.html')) {
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
    if(event.key==="Enter"){
        let documents = document.getElementById('box-wrapper')
        let inp=document.getElementById('ttl')
        if (inp.value==""){
            alert("????????? ??????????????????!")
        }
        else {
            let result = await postDocuments({title: inp.value, body: ''})
            let key = result.name
            let data = await getDocuments()
            inp.remove()
            documents.insertAdjacentHTML('beforeend', `
                <div class="second" id="${key}" onclick="goto('${key}')">${data[key].title}</div>
            `)
        }

    }
}