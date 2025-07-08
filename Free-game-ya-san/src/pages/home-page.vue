<template>
    <div class="contents-layout">
        <div class="contents">
            <div class="kanban">
                <h2 class="game-title"><span>Welcome to </span>"FreeGame・ya・san".</h2>
            </div>

            <p class="intro">
                フリーゲームサイト "FreeGame・ya・san" です。<br>
                ちょっとした時間に気軽に遊べる、簡単なゲームをいくつか置いています。<br>  
                すべてブラウザで動作し、ダウンロードや登録などは不要です。<br><br>
                まだ作品数は多くありませんが、少しずつ増やしていく予定です。  <br>
                是非遊んでみてください。<br><br><br>
                <small>※このサイトのゲームはPCのみの対応となっております。</small>
            </p>

        
            <router-link to="/Free-game-ya-san/game-list" class="enter-button">
            ▶ ゲームを見てみる
            </router-link>

        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.contents{
    text-align: center;
}
.kanban h2{
  font-family: "Cinzel Decorative", serif;
}
.intro{
  margin: 5rem 0;


}
.enter-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #333;
  background-color: transparent;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease, color 0.2s ease;
  font-weight: bold;
}

.enter-button:hover {
  transform: scale(1.05) ;
  color: #E63995; /* アクセント色：ピンク（変更可） */
}

.enter-button::after {
  content: '';
  margin-left: 0.5em;
  display: inline-block;
  transition: transform 0.2s ease;
}

.enter-button:hover::after {
  transform: translateX(4px);
}

@media (max-width: 1200px) {
h2{
    letter-spacing:2px;
    font-size: 1.2rem;

}
}


@media (max-width: 1020px) {
h2{
    letter-spacing:3px;
    line-height: 1.2;
}
span::after {
    content: "";
    display: block;  /* ブロック要素にして改行 */
  }

.side {
    display: none;
  }

.container {
  width: 100%;
}
  
}

@media (max-width: 768px) {
h2{
    letter-spacing:3px;
}

.middle-area {
    padding: 0; /* 中央に余白を追加 */
  }
}
@media (max-width: 477px) {
  h2{
    letter-spacing:0px;
    font-size: 1rem;
}
}
</style>