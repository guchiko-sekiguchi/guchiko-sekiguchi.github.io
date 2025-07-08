<template>
  <div class="contents-layout">
    <div class="contents">
      <div class="kanban">
        <h2>5秒連打</h2>
      </div>

      <p class="text">{{ gameStatus }}</p>

      <div class="btn-group">
        <button
            class="start"
            @click="startGame"
            :disabled="isRunning"
            :class="{ noneactive: isRunning }"
            @mousedown="handleMouseDown"
            @touchstart="handleTouchStart"
        >
            Start
        </button>

        <button
          class="reset"
          @click="resetGame"
        >
          リセット
        </button>
      </div>

      <p><span>{{ count }}</span>回</p>
      <p>君は5秒でどれだけ連打出来るかな！</p>
      <p><span>{{ timerDisplay }}</span>秒</p>

      <div class="btn-group">
        <button
            class="btn-r"
            @click="clickButton"
            :disabled="!isRunning"
            :class="{ noneactive: !isRunning }"
            @mousedown="handleMouseDown"
            @touchstart="handleTouchStart"
        >
         連打！
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      timerDisplay: 0,
      isRunning: false,
      timer: null,
      gameStatus: 'ゲームを始める？',
    };
  },
  methods: {
    startGame() {
      this.count = 0;
      this.timerDisplay = 5;
      this.gameStatus = '連打してね！';
      this.isRunning = true;

      this.timer = setInterval(() => {
        this.timerDisplay--;
        if (this.timerDisplay === 0) {
          clearInterval(this.timer);
          this.isRunning = false;
          this.gameStatus = '終了！お疲れ様！';
        }
      }, 1000);
    },
    clickButton() {
      if (this.isRunning) {
        this.count++;
      }
    },
    resetGame() {
      clearInterval(this.timer);
      this.count = 0;
      this.timerDisplay = 0;
      this.isRunning = false;
      this.gameStatus = 'ゲームを始める？';
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
.text{
    height:30px;
}

.start,
.reset{
    all: unset;
    text-align: center;
    width: 170px;
    height: 80px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
}

.start{
    border-bottom: 5px solid #A02060;
    background: #E63995;
    color: white;
    transition: transform 0.1s ease, box-shadow 0.2s ease;

}

.start:active:not(:disabled) {
  transform: scale(0.96); /* 少し小さくする */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.reset{
    border-bottom: 5px solid #007B9E;
    background: #00B8D9;
    color: white;
    transition: transform 0.1s ease, box-shadow 0.2s ease;
}



.count{
    height:50px ;
    font-size: 36px;
    font-weight: bold;
}

p{
    margin-top: 40px;
}

.timer-display{
    font-size: 42px;
}

.btn-group{
    display: flex;
    width:480px ;
    margin: 40px auto 0;
    gap: 20px;
    justify-content: center;
    
}


.btn-r{
    all: unset;
    text-align: center;
    width: 120px;
    height: 80px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    border-bottom: 5px solid #C19F00;
    background: #FFD700;
    color: white;
    transition: transform 0.1s ease, box-shadow 0.2s ease;
}

.btn-r:active:not(:disabled) {
  transform: scale(0.96); /* 少し小さくする */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}


.noneactive {
    cursor: default;
    opacity: 0.5;
}

</style>