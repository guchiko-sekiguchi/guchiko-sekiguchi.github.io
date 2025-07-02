'use strict';

{

// 1〜100の数字をランダムに作る（Math.random()）。

let randomNmber = Math.floor(Math.random()*100);


const result = document.querySelector(".result");
const not = document.querySelector(".number-of-times");
let count = 0;

// 入力した数字と正解を比べる。
// 入力 ＞ 正解 → 「もっと小さい」
function judgement (){
    const numberInput = Number(document.querySelector(".number-input").value);
    if(numberInput === randomNmber){
        console.log(`数字は${randomNmber}です。`);
        console.log(`入力は${numberInput}です。`);
        count  ++;
        not.textContent = count;
        result.textContent='大正解！';
    }

    if(numberInput > randomNmber){
        console.log(`数字は${randomNmber}です。`);
        console.log(`入力は${numberInput}です。`);
        count  ++;
        not.textContent = count;
        result.textContent='もっと小さい';
    }
        // 入力 ＜ 正解 → 「もっと大きい」
    if(numberInput < randomNmber){
        console.log(`数字は${randomNmber}です。`);
        console.log(`入力は${numberInput}です。`);
        count  ++;
        not.textContent = count;
        result.textContent='もっと大きい';
    }        
        // 正解ならループ終了（while）。
        // console.log(`挑戦回数は${count}回です。`);
        // 正解時に何回目で正解したか表示。
        if(numberInput === randomNmber){
            console.log(`数字は${randomNmber}です。`);
            console.log(`入力は${numberInput}です。`);
            count  ++;
            not.textContent = count;
            result.textContent='大正解！';
            submit.disabled = true;
            submit.classList.add('noneactive');
        }
}

function onemoreTime (){
    randomNmber = Math.floor(Math.random()*100);
    result.textContent='もう一回入力しよう！';
    let numberInp = Number(document.querySelector(".number-input").value);
    document.querySelector(".number-input").value ='';
    count = 0;
    not.textContent = count;
    submit.classList.add('noneactive');
}

function btnValued (){
    submit.classList.remove('noneactive');
    submit.disabled = false;
}





    const submit = document.querySelector(".submit");
    submit.disabled = true;
    const onemore = document.querySelector(".onemore");
    const numberInput = document.querySelector(".number-input");
    
    numberInput.addEventListener('input', btnValued);

    submit.addEventListener('click', judgement);
    onemore.addEventListener('click', onemoreTime);

}