'use strict';

{
// --- 要素の取得 ---
    const gamAArea = document.querySelector(".game-area");// ゲームエリア
    const b01 = document.querySelector(".block01");// ブロック
    const computedStyle = getComputedStyle(b01);// スタイルの取得
    const start = document.querySelector(".start");// スタートボタン

    
// --- 宣言 ---    
    let second = 0;
    let count = 0;
    let milicecond = 0;
    let timerRunning = false;
    let id = 0;
    
    // 最初の位置を取得（pxの数字だけに変換）
    let posX = parseInt(computedStyle.left); 
    let posY = parseInt(computedStyle.top);

    const minX = 0;
    const minY = 0;
    const maxX = 400;
    const maxY = 520;

    //キーを押した時
    document.addEventListener("keydown", (e) =>{
        const step = 40;

        if (e.key === "ArrowRight") posX += step;
        if (e.key === "ArrowLeft") posX -= step;
        if (e.key === "ArrowUp") posY -= step;
        if (e.key === "ArrowDown") posY += step;

    // エリア制限
        posX = Math.max(minX, Math.min(posX, maxX));
        posY = Math.max(minY, Math.min(posY, maxY));
        
        b01.style.left = posX + "px";
        b01.style.top = posY + "px";
    });
}