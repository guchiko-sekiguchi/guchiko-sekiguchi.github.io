'use strict';

{
// ==== 設定 ====
const defaultCellSize = 20;
const defaultDotSize = 32;
const defaultToolColor = '#959595';
const defaultToolSize = 1;
const defaultToolMode = 'pen';


// ==== 状態 ====
let cellSize = defaultCellSize;
let dotSize = defaultDotSize;
let currentToolColor = defaultToolColor;
let currentToolSize = defaultToolSize;
let currentToolMode = defaultToolMode;
let isMouseDown = false; // ← フラグ追加


// ==== 配列 ====
let grid = Array(dotSize).fill().map(() => Array(dotSize).fill(null));

// ==== DOM取得 ====
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // 2Dモードのコンテキスト（描画用道具）を取得
const clearBtn = document.querySelector(".clear");
const penTool = document.querySelector(".pen-tool");
const eraserTool = document.querySelector(".eraser-tool");
const colorPalette = document.querySelector("#color-palette");
const inputColorResult = document.querySelector("#inputColorResult");
const rendering = document.querySelector(".rendering");

  // 要素の絶対座標値（位置）を取得
  
  function PaintAction(e){
    const rect = canvas.getBoundingClientRect();
    const clickX = Math.floor((e.clientX - rect.left) / cellSize);
    const clickY = Math.floor((e.clientY - rect.top) / cellSize);
    if (clickX < 0 || clickX >= dotSize || clickY < 0 || clickY >= dotSize) return;

    if(currentToolMode === 'pen'){
      ctx.fillStyle = currentToolColor;
      ctx.fillRect(clickX * cellSize, clickY * cellSize, cellSize, cellSize);
      grid[clickY][clickX] = currentToolColor;
    } else if(currentToolMode === 'eraser'){
      ctx.clearRect(clickX * cellSize, clickY * cellSize, cellSize, cellSize);
    }
  };

// ==== ボタン ====
function paintClear(){
  //  キャンバスをクリアする
  for(let y=0; y<dotSize; y++){
    for(let x=0; x<dotSize; x++){
      grid[y][x] = null;
      ctx.fillStyle = grid[y][x];
      ctx.clearRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
  // gridLayout();
  console.log(`キャンバスをクリアしました。`);
};

function changePen(){
  currentToolMode = 'pen';
  console.log(`ペンに切り替えました。`);
};

function changeEraser(){
  currentToolMode = 'eraser';
  console.log(`消しゴムに切り替えました。`);
};


// console.table(grid);

// colorPalette.addEventListener(`change`, (e) => {
//   const value = e.target.value;
//   inputColorResult.innerHTML = value;
// });

// ==== パレット ====
const colors = [
  '#ef857d', '#f0be7d','#e8f07d', '#aff07d', '#7df084','#7df0be','#959595',
  '#7de8f0', '#7daff0','#847df0', '#be7df0','#f07de8', '#f07daf',
]; // 12色（好きに変えてOK）

const container = document.querySelector('.my-color');

colors.forEach(color => {
  const circle = document.createElement('div');
  circle.classList.add('color-circle');
  circle.style.backgroundColor = color;

  circle.addEventListener('click', () => {
    currentToolColor = color;  // ペン色を変更
    console.log('選択された色:', currentToolColor);  // デバッグ確認用
  });
  container.appendChild(circle);  
});


function exportAsImage() {
  const imageURI = canvas.toDataURL('image/png');
  
  const a = document.createElement('a');
  a.href = imageURI;
  a.download = 'pixelArt.png';
  a.click();
}

// ==== イベント ====
// canvas.addEventListener(`click`,PaintAction);
clearBtn.addEventListener(`click`,paintClear);

penTool.addEventListener(`click`,changePen);
eraserTool.addEventListener(`click`,changeEraser);;
rendering.addEventListener(`click`,exportAsImage);


canvas.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  PaintAction(e); // 押した瞬間にも描画
});

canvas.addEventListener('mouseup', () => {
  isMouseDown = false;
});

canvas.addEventListener('mouseleave', () => { // キャンバス外に出た場合
  isMouseDown = false;
});

canvas.addEventListener('mousemove', (e) => {
  if(isMouseDown){
    PaintAction(e); // 押しながら動かしてるときだけ描画
  }
});


// ctx.fillStyle = "red";      // 塗りつぶし色
// ctx.fillRect(0, 0, 50, 50); // (x, y, 幅, 高さ)

// ctx.strokeStyle = "blue";     // 線の色
// ctx.lineWidth = 2;           // 線の太さ
// ctx.strokeRect(10, 10, 50, 50);

// ctx.beginPath();           // 描き始め
// ctx.moveTo(10, 10);       // 開始点
// ctx.lineTo(100, 200);     // 終点
// ctx.stroke();             // 描画

// ctx.fillStyle = "black"; 
// ctx.beginPath();
// ctx.arc(100, 110, 20, 0, Math.PI * 2); // (x, y, 半径, 開始角度, 終了角度)
// ctx.fill();

// ctx.beginPath();
// ctx.arc(160, 110, 20, 0, Math.PI * 2); // (x, y, 半径, 開始角度, 終了角度)
// ctx.fill();


// ctx.beginPath();
// ctx.arc(130, 145, 30, 0, Math.PI * 2); // (x, y, 半径, 開始角度, 終了角度)
// ctx.fill();


// ctx.font = "20px Arial";
// ctx.fillText("Hello", 200, 50);

// ==== 初期化 ====
// gridの初期化（何もない状態）
ctx.clearRect(0, 0, canvas.width, canvas.height);  // ←透明にする場合
// reset();
// gridLayout();

canvas.style.backgroundSize = `${cellSize}px ${cellSize}px`;

}