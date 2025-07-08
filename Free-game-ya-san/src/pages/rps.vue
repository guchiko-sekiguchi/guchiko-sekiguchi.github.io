<template>
  <div class="contents-layout">
    <div class="contents">
      <div class="kanban">
        <h2>じゃんけんゲーム</h2>
      </div>

    <!-- ゲーム結果・ボタンをまとめたゲームエリア -->
    <div class="game-area">
      <p>ボタンを押すとコンピューターとじゃんけんが出来るよ！</p>
      <!-- 結果表示エリア（高さを常に確保） -->
      <div class="result-area">
        <p>
          PC: <span>{{ hands[computerHand] ?? '？' }}</span> と
          あなた: <span>{{ hands[playerHand] ?? '？' }}</span>
        </p>
        <p>{{ resultText || 'ここに結果が出ます！' }}</p>
      </div>

      <!-- じゃんけんボタン -->
      <div class="btn-group">
        <button @click="play(0)" class="btn-g">ぐー</button>
        <button @click="play(1)" class="btn-c">ちょき</button>
        <button @click="play(2)" class="btn-p">ぱー</button>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hands: ['ぐー', 'ちょき', 'ぱー'],
      computerHand: null,
      playerHand: null,
      resultText: '',
    };
  },
  methods: {
    play(player) {
      this.playerHand = player;
      this.computerHand = Math.floor(Math.random() * 3);

      if (this.playerHand === this.computerHand) {
        this.resultText = '引き分け！';
      } else if (
        (this.playerHand === 0 && this.computerHand === 1) ||
        (this.playerHand === 1 && this.computerHand === 2) ||
        (this.playerHand === 2 && this.computerHand === 0)
      ) {
        this.resultText = 'あなたの勝ち！';
      } else {
        this.resultText = '残念！あなたの負け！';
      }
    },
  },
};
</script>

<style scoped>

.game-area {
  min-height: 300px; /* ゲーム全体の高さを安定させる */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.result-area {
  min-height: 60px; /* 結果表示スペースを最初から確保 */
  text-align: center;
  margin: 20px 0;
}


.rps-r{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rps-r span {
    display: inline-block; /* または block, flex にする */
}

.btn-group{
    display: flex;
    width:100% ;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
}

.btn-group button{
    all: unset;
    text-align: center;
    width: 120px;
    height: 80px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    background: white;
    color: black;
    border: 1px solid gray;
}

.btn-group > .btn-g:hover{
    background: #E63995;
    color: white;
}

.btn-group > .btn-c:hover{
    background: #FFD700;
    color: white;
}

.btn-group > .btn-p:hover{
    background: #00B8D9;
    color: white;
}

.active {
    display: block;
}

.btn-group > .noneactive {
    cursor: default;
    opacity: 0.5;
}


</style>