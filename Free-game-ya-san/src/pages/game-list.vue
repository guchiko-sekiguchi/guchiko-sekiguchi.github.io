<template>
<div class="contents-layout">
    <div class="contents">
    <div class="kanban">
        <h2>ゲーム一覧</h2>
    </div>
    <ul>
        <li class="content game">
            <router-link to="/Free-game-ya-san/rps">
            <div class="game-style pink">
                <div class="pin left"></div>
                <div class="pin right"></div>
                <h3>じゃんけんゲーム</h3>
                <img src="../assets/rps.jpg" alt="じゃんけんゲーム">
                <div class="caption">
                    <span>game</span>
                    <p>じゃんけんゲームです。<br>じゃんけん・・・ポンッ！</p>
                </div>
            </div>
        </router-link></li>
        <li class="content game">
            <router-link to="/Free-game-ya-san/number-guessing-game">
            <div class="game-style yellow">
                <div class="pin left"></div>
                <div class="pin right"></div>
                <h3>数当てゲーム</h3>
                <img src="../assets/number-guessing-game.jpg" alt="数当てゲーム">
                <div class="caption">
                    <span>game</span>
                    <p>数当てゲームです。<br>Low or High!</p>
                </div>
            </div>
        </router-link></li>
        <li class="content game">
            <router-link to="/Free-game-ya-san/timer-click-game">
            <div class="game-style blue">
                <div class="pin left"></div>
                <div class="pin right"></div>
                <h3>5秒連打</h3>
                <img src="../assets/timer-click-game.jpg" alt="タイマークリックゲーム">
                <div class="caption">
                    <span>game</span>
                    <p>5秒連打ゲームです。<br>5秒間連打しまくれ！</p>
                </div>
            </div>
        </router-link></li>
        <li class="content game">
            <router-link to="/Free-game-ya-san/falling-object-game">
            <div class="game-style sky">
                <h3>ブロック動かし</h3>
                <div class="pin left"></div>
                <div class="pin right"></div>
                <img src="../assets/falling-object-game.jpg" alt="超シンプル落ち物ゲーム">
                <div class="caption">
                    <span>game</span>
                    <p>ブロック動かしです。<br>ブロックを動かすだけです。</p>
                </div>
            </div>
        </router-link></li>
    </ul>
    </div>
    </div>
</template>

<script>
</script>

<style>

h3{
    font-family: 'MyCustomFont', Arial, sans-serif;
    font-weight: normal;
    letter-spacing:1px;

}

/* 丸いピン */
.pin {
  position: absolute;
  top: 0.5rem;
  width: 10px;
  height: 10px;
  background-color: #00B8D9;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0,0,0,0.5);
}

/* ピンの位置：左右 */
.pin.left {
  left: 1rem;
}

.pin.right {
  right: 1rem;
}



.contents ul{
    margin-top: 2rem;
    padding:0 1rem ;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    gap:  3rem 2rem; /* 要素間の隙間 */
    justify-items: center; /* 各アイテムを中央寄せ */
}

.game-style{
    position: relative;
    margin: 0 auto;
    border-radius: 1px;
    overflow: hidden;
    background-color: white;
    box-sizing: border-box;
}

li{
    width: 200px;
    height: 300px;
}


.content a{
    text-decoration: none;
    color: #4b3832;
}

.content img{   
    width: 90%;
    height: 90%;
    vertical-align: bottom;
    margin: 10px 10px 0;
    border-radius: 3px;

}

.content h3{
    width: 100%;
    font-size: 14px;
    padding: 8px;
    text-align: center;
    color: #4b3832;
    background-image: linear-gradient(180deg, #ccc 1px, transparent 1px);
    background-size: 100% 2.3em; /* 行間と一致させる */
    line-height: 1.4em;
    background-position: 0 2.2em;       /* ← ここで1行分ずらす */
}

.caption{
    margin: 0.8rem 0.5rem;
    height: 8rem;
}

.content.game span{
    background-color: #4b3832;
    color: white;
    padding: 3px 10px 5px;
    border-radius: 5px;
    font-family: 'YuGothic', sans-serif;
    font-size: 10px;
    font-weight: bold;
}

.contents .caption p{
  height: 7rem;
  margin: 1rem 0.5rem;
  text-align: left;
  background-color: #fff;
  background-image: linear-gradient(180deg, #ccc 1px, transparent 1px); /* 罫線の色と太さ  */
  background-size: 100% 1.5em; /* 行の高さ */
  line-height: 1.5em; /* 文字の高さ */
  padding-bottom: 1px; /* 最終行の下にも罫線を引く */
}

</style>