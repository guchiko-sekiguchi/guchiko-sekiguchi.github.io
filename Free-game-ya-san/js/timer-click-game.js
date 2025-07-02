'use strict';

{    
// --- 要素の取得 ---
    const text = document.querySelector(".text");// 状態の表示
    const start = document.querySelector(".start");// スタートボタン
    const resetD = document.querySelector(".reset");// もう一回ボタン
    const countR = document.querySelector(".count");// 回数
    const timerDisplay = document.querySelector(".timer-display");// 時間表示
    const btnS = document.querySelector(".btn-r");// 連打ボタン
    
// --- ボタンの初期設定 ---
    btnS.disabled = true;
    btnS.classList.add('noneactive');
    
// --- 宣言 ---    
    let second = 0;
    let count = 0;
    let milicecond = 0;
    let timerRunning = false;
    let id = 0;

// --- 1秒数える---    
    function startTimer(){
        if (timerRunning) return; // すでに動いていたら何もしない
        timerRunning = true;

        function oneSecond(){
            second ++;
            milicecond += 1000;
            timerDisplay.textContent = second;
            console.log(timerDisplay.textContent);

            
            if (timerRunning){
                setTimeout(oneSecond, 1000);
            }
        }
        oneSecond();
    }
    
// --- 「スタート」ボタンを押すとゲーム開始。5秒数える---
    // 5秒間だけカウント可能状態にする（setTimeout）。
    function startCount(){
        // ボタン設定
        start.disabled = true;
        start.classList.add('noneactive');
        btnS.disabled = false;
        text.textContent = "連打中！";// テキスト変更
    
        btnS.classList.remove('noneactive');
        id = setTimeout(()=>{
            text.textContent = "finish!";// テキスト変更
            btnS.disabled = true;
            btnS.classList.add('noneactive');
            timerRunning = false;
        },4000);
    }


// --- 「リセット」を押すとリセットされる関数---
    function reset(){
        countR.textContent = 0;
        timerDisplay.textContent = 0;
        start.disabled = false;
        start.classList.remove('noneactive');
        btnS.disabled = true;
        btnS.classList.add('noneactive');
        text.textContent = "もう一回チャレンジする？";// テキスト変更
        timerRunning = false;
        clearTimeout(id);// タイマー止める処理
        second = 0;
        count = 0;
        milicecond = 1000;
        id = 0;
    }


    // ゲーム中かどうか判定するための**フラグ変数（isPlaying）**を用意。
    // const isPlaying = ;

// --- 「連打」を押すたびにカウントを1増やす関数---
    function renda(){
        count ++ ;
        countR.textContent =count;
    }

// --- イベントの登録 ---
    start.addEventListener('click',startTimer);
    start.addEventListener('click',startCount);
    resetD.addEventListener('click',reset);
    btnS.addEventListener('click',renda);

}