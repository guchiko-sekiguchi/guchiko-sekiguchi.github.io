<template>
  <div class="contents-layout">
    <div class="contents">
      <div class="kanban">
        <h2>数当てゲーム</h2>
      </div>
      <p>
        数を当ててみてね！<br />
        1～100の間で出題するよ！<br />
        ↓に入力して「提出」を押してね！
      </p>

      <div class="number-input-erea">
        <label>
          <input
            type="number"
            min="1"
            max="100"
            v-model.number="userInput"
            @input="onInputChange"
            class="number-input"
            autofocus
          />
        </label>

        <div class="btns">
          <button
            class="submit"
            :disabled="!canSubmit"
            :class="{ noneactive: !canSubmit }"
            @click="checkAnswer"
            @mousedown="handleMouseDown"
            @touchstart="handleTouchStart"
          >
            提出する！
          </button>
          <button
            class="onemore"
            @click="resetGame"
            @mousedown="handleMouseDown"
            @touchstart="handleTouchStart"
          >
            もう一回！
          </button>
        </div>
      </div>

      <p><span>{{ count }}</span>回目の挑戦</p>
      <p class="result">{{ resultMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: Math.floor(Math.random() * 100) + 1,
      userInput: '',
      count: 0,
      resultMessage: '結果がここに表示されるよ！',
      canSubmit: false,
    };
  },
  methods: {
    onInputChange() {
      this.canSubmit = this.userInput !== '';
    },
    checkAnswer() {
      if (this.userInput === this.answer) {
        this.resultMessage = '🎉 大正解！';
      } else if (this.userInput > this.answer) {
        this.resultMessage = 'もっと小さいよ！';
      } else {
        this.resultMessage = 'もっと大きいよ！';
      }
      this.count++;
      this.canSubmit = false;
    },
    resetGame() {
      this.answer = Math.floor(Math.random() * 100) + 1;
      this.userInput = '';
      this.count = 0;
      this.resultMessage = '結果がここに表示されるよ！';
      this.canSubmit = false;
    },
    handleMouseDown(e) {
      if (e.target.disabled) e.preventDefault();
    },
    handleTouchStart(e) {
      if (e.target.disabled) e.preventDefault();
    },
  },
};
</script>

<style scoped>
.noneactive {
  opacity: 0.5;
  pointer-events: none;
}

.number-input-erea{
    margin-top: 20px;
    text-align: center;
}

.number-input-erea label{
    display: block;
    margin-bottom: 20px;
}

.number-input{
    margin-top: 20px; 
    width: 100px;
    font-size: 36px;
    font-weight: bold;
    padding: 10px;
    text-align: right;
}

.btns{
    display: flex;
    gap:20px;
    justify-content: center;
}

.submit,
.onemore{
    all: unset;
    text-align: center;
    width: 120px;
    height: 60px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    border-bottom: 5px solid #A02060;
    background: #E63995;
    color: white;
    margin-top: 20px;    
    transition: transform 0.1s ease, box-shadow 0.2s ease;

}

.submit:active:not(:disabled)  {
  transform: scale(0.96); /* 少し小さくする */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

button.submit:disabled:active {
  transform: none;
}

.onemore{
  background: #00B8D9;
  border-bottom: 5px solid #007B9E;
}

.onemore:active {
  transform: scale(0.96); /* 少し小さくする */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}


.btns > .noneactive {
    cursor: default;
    opacity: 0.5;
}

</style>