function getQueryStringObject() {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

let i=0,c=0,testing=0,cnt=0,container=document.getElementById('cont1'),num=0
let bodyText

async function getsent(){
    let ttl=document.getElementById('ttl')
    let qs = getQueryStringObject() 
    let sentence = await getDocument(qs.id)
    let st2=sentence.body.split(" ")
    bodyText=sentence.body
    ttl.innerText=sentence.title;
    for(content of st2){
        cnt+=content.length
        if(cnt>30){
            cnt=content.length
            container.insertAdjacentHTML('beforeend','<hr>')
        }
        for(j=0;j<content.length;j++){
            i++;
            container.insertAdjacentHTML('beforeend',`<span onclick="f(event)">${content[j]}</span>`)
        }
        container.insertAdjacentHTML('beforeend','<span> </span>')
    }
    container.insertAdjacentHTML('beforeend','<hr>')
}
getsent()

function f(event){
    if(c===1){
        num++;
        let answer = event.target.innerText
        let input = document.createElement('input')
        input.addEventListener('change', (event) => {
            if (event.target.value === answer) {
                num--;
                let span = document.createElement('span')
                span.innerText = answer
                span.addEventListener('click', (event) => f(event))
                event.target.after(span)
                event.target.remove()
                span.style.color='green'
                span.style.fontWeight='bold'

                if(num==0){
                    alert('시험 통과')
                    testing=0
                    document.getElementById('btn2').innerText='시험 시작하기'
                }

            } else {
                input.style.borderColor='red'
                input.style.borderStyle='solid'
                input.style.borderRadius='3px'
            }
        })
        input.addEventListener('click', (event) => {
            if (testing === 0 && c===1) {
                num--;
                let span = document.createElement('span')
                span.innerText = answer
                span.addEventListener('click', (event) => f(event))
                event.target.after(span)
                event.target.remove()
            }
        })
        event.target.before(input)
        event.target.remove()
    }
}

function start(){
    if(c===1){
        alert('아직 빈칸만들기를 멈추지 않았습니다.')
    } else if(num===0){
        alert('빈칸을 한 개도 만들지 않았습니다.')
    } else{
        testing=1;
        document.getElementById('btn2').innerText='시험 시작됨'
    }
}

function clicked(){
    let bt;
    if(c===0){
        c=1;
        bt=document.getElementById('btn1')
        bt.innerText='멈추기'
    } else{
        c=0;
        bt=document.getElementById('btn1')
        bt.innerText='빈칸 만들기'
    }
}

function change(){
    let btn=document.getElementById('chbt')
    let bigcon=document.getElementById('container');
    btn.style.display='none';
    bigcon.insertAdjacentHTML('beforeend','<input id="chginp" onkeydown="changebd(event)">')
    let k=document.getElementById('chginp')
    k.value=bodyText;
    k.style.alignItems='flex-start';
}

async function changebd(event){
    let bt=document.getElementById('chbt')
    let inp=document.getElementById('chginp')
    let cont1=document.getElementById('cont1')
    if(event.key=='Enter'){
        let qs = getQueryStringObject() 
        let result = await updateDocuments({body: inp.value}, qs.id)
        cont1.innerHTML=''
        if (result) {
            getsent()
        }
        inp.remove()
        bt.style.display='block';
    }
}

async function del(){
    let qs = getQueryStringObject() 
    let id = qs.id
    let response = await fetch(`https://prjt-bb444-default-rtdb.asia-southeast1.firebasedatabase.app/documents/${id}.json`, {
        method: 'DELETE',
    })
    let data = await response.json()
    location.href='index.html'
    return data
}