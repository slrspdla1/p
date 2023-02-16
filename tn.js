let sentence="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 남산 위에 저 소나무 높고 구름 없이 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세"
let i=0,c=0,testing=0,cnt=0,container=document.getElementsByClassName('container')[0],num=0
let st2=sentence.split(" ")

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
            if (testing === 0) {
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