async function f(){
    let k=await fetch('https://jsonplaceholder.typicode.com/posts')
    let data=await k.json()
    return data   
}
async function ip(){
    let contents= await f()
    let container = document.getElementsByClassName('container')[0]
    for(content of contents) {
        let sentences = content.body.split('\n')
        for(sentence of sentences) {
            for(i=0;i<sentence.length/15;i++){
                container.insertAdjacentHTML('beforeend', `<div>${sentence.slice(15*i,15*(i+1))}</div><hr>`)
            }
            container.insertAdjacentHTML('beforeend', `<div>${sentence.slice(15*i,sentences.length+1)}</div>`)
        }
    }
}

// ip()
let ttl=document.getElementById('ttl')
let i,j,cnt,container = document.getElementsByClassName('container')[0];
ttl.innerText=""

let sentence="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 남산 위에 저 소나무 높고 구름 없이 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세"
let st2=sentence.split(" ")
for(content of st2){
    cnt+=content.length
    if(cnt>30){
        cnt=content.length
        
    }
}
// for(let i=0; i<sentence.length; i+=30){
//     container.insertAdjacentHTML('beforeend', '<div class=smcont></div>')
//     let cont=document.getElementsByClassName('smcont')[i/30]
//     for(let j=i; j<i+30 && j < sentence.length; j++){
//         cont.insertAdjacentHTML('beforeend',`<span>${sentence[j]}</span>`)
//     }
//     cont.insertAdjacentHTML('beforeend','<hr>')
// }