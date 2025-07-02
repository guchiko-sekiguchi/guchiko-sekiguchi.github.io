
'use strict';

{   
    // ユーザーの手はボタンを押した時に受け取る。
    const start = document.querySelector(".start");
    const text00 = document.querySelectorAll(".text00");
    // const text00 = document.querySelectorAll(".text00");
    const userbtn = document.querySelectorAll(".btn-group > button");
    const userResultG = document.querySelector(".btn-g");
    const userResultC = document.querySelector(".btn-c");
    const userResultP = document.querySelector(".btn-p");
    const rpsResuld1 = document.querySelector(".rps-r");
    const rpsResuld2 = document.querySelector(".rps-result");
    const rpsResultM = document.querySelector(".rps-resultm");
    const rpsResultY = document.querySelector(".rps-resulty");
    const rpsResult = document.querySelector(".rps-result");
    
    // 「グー」「チョキ」「パー」の3つの中から、ランダムでコンピュータの手を決める。
    // Math.random() で0〜2の数字を作って配列から選ぶ。
    
    function rps(){
        const randomNum = Math.floor(Math.random() * 3);
        return randomNum;
    };

    function gameActive(){
        start.classList.add('hidden');
        text00.forEach(element => {
            element.classList.remove('hidden'); 
            element.classList.add('active');
        });

        userbtn.forEach(element => {
            element.classList.remove('noneactive'); 
        });
    };

    let numbers;
    function buttonClick(e){

        rpsResuld1.classList.remove('hidden-r');
        rpsResuld2.classList.remove('hidden-r');

        console.log(`０１：じゃんけん開始`);
        const rdN = rps();
        console.log(`０２：randomNumは${rdN}です。`);
        const you = e.target.innerHTML;
        console.log(`０２：あなたは「${e.target.innerHTML}｝です。`);
        switch (e.target.innerHTML) {
        case 'ぐー':
            numbers = 0;
            break;
        case 'ちょき':
            numbers = 1;
            break;
        case 'ぱー':
            numbers = 2;
            break;
        default:
            break;
        }

    // 勝敗判定はif文を使う。
    // 0=ぐー、1＝ちょき、2＝ぱー

    let txt = "aa";
        
        if(rdN === numbers){
            // あいこ
            txt = "引き分け！";
        }else if(
        (rdN === 0 && numbers === 2 )||
        (rdN === 1 && numbers === 0 )||
        (rdN === 2 && numbers === 1 )
        ){// 勝ち
            txt = "あなたの勝ち！";
        }else{
            txt = "残念！あなたの負け！";
        }

        // 勝ちパターン？（グーならチョキに勝つ）

        // 勝敗結果を画面に表示。
        let pc;
        switch (rdN) {
            case 0:
                pc = 'ぐー';
                break;
            case 1:
                pc = 'ちょき';
                break;
            case 2:
                pc = 'ぱー';
                break;
            default:
        }
        console.log(pc);
        rpsResultM.textContent = pc;
        rpsResultY.textContent = you;
        rpsResult.textContent = txt;
    };

    
    start.addEventListener('click',gameActive);
    userResultG.addEventListener('click',buttonClick);
    userResultC.addEventListener('click',buttonClick);
    userResultP.addEventListener('click',buttonClick);





}