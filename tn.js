function f(){
    container.insertAdjacentHTML('beforeend', '<input>')
    console.log(event)
}



let cnt=0,container=document.getElementsByClassName('container')[0],sentence="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 남산 위에 저 소나무 높고 구름 없이 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세"
let st2=sentence.split(" ")
for(content of st2){
    cnt+=content.length
    if(cnt>30){
        cnt=content.length
        container.insertAdjacentHTML('beforeend','<hr>')
    }
    for(j=0;j<content.length;j++){
        container.insertAdjacentHTML('beforeend',`<span onclick=f()>${content[j]}</span>`)
    }
    container.insertAdjacentHTML('beforeend','<span> </span>')
}
container.insertAdjacentHTML('beforeend','<hr>')