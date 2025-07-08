<template>
  <div class="balloon-bg">
    <div
      v-for="balloon in balloons"
      :key="balloon.id"
      class="balloon-wrapper"
      :style="balloon.style"
      @animationend="removeBalloon(balloon.id)"
    >
      <div class="balloon" :style="{ backgroundColor: balloon.color }">
        <svg class="string" viewBox="0 0 10 100">
          <path d="M5,0 Q0,25 5,50 Q10,75 5,100"
            stroke="#444" fill="none" stroke-width="1" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BalloonBackground',
  data() {
    return {
      balloons: [],
      nextId: 1,
      colors: ['#FFF176', '#FF90B3', '#B9FBC0', '#D1C4E9'],
      interval: null,
      balloonInterval: 800,
      maxBalloons: 15,
    };
  },
  mounted() {
    this.updateBalloonSettings();
    this.createInitialBalloons();

    this.timerId = setInterval(() => {
      if (this.balloons.length < this.maxBalloons) {
        this.createBalloon(false);
      }
    }, 2000);

    window.addEventListener('resize', this.updateBalloonSettings);
  },
  beforeUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this.updateBalloonSettings);
  },
  methods: {
    updateBalloonSettings() {
      const width = window.innerWidth;

      if (width >= 1200) {
        this.balloonInterval = 700;
        this.maxBalloons = 30;
      } else if (width >= 768) {
        this.balloonInterval = 1000;
        this.maxBalloons = 20;
      } else {
        this.balloonInterval = 1500;
        this.maxBalloons = 10;
      }

      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.balloons.length < this.maxBalloons) {
          this.createBalloon();
        }
      }, this.balloonInterval);
    },

    randomStyle() {
      const left = Math.random() * 90;
      const size = Math.random() * 20 + 40;
      const offset = Math.random() * 200 + 100; // 画面下に隠れる初期Y位置
      return {
        left: `${left}%`,
        width: `${size}px`,
        height: `${size * 1.2}px`,
        transform: `translateY(${offset}px)`, // ← 初期位置を画面下へ
      };
    },

    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },

    createInitialBalloons() {
      for (let i = 0; i < this.maxBalloons; i++) {
        this.createBalloon(true);
      }
    },

    createBalloon(isInitial = false) {
      const delay = Math.random() * 14;
      this.balloons.push({
        id: this.nextId++,
        color: this.randomColor(),
        style: {
          ...this.randomStyle(),
          animationDelay: isInitial ? `-${delay}s` : `${delay}s`,
        },
      });
    },

    removeBalloon(id) {
      this.balloons = this.balloons.filter(b => b.id !== id);
    },
  }
};
</script>


<style scoped>
.balloon-bg {
  position: fixed;
  inset: 0;
  z-index: 0; /* 必要に応じて調整 */
  overflow: hidden;
  pointer-events: none;
}
.balloon-wrapper {
  position: absolute;
  bottom: 0;
  animation: floatUp 14s linear forwards;
}
.balloon {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: inset -5px -10px 10px rgba(255, 255, 255, 0.6);
}
.string {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 100px;
  animation: sway 2s ease-in-out infinite;
  z-index: -1;
}
@keyframes floatUp {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-120vh); }
}
@keyframes sway {
  0%, 100% { transform: translateX(-50%) rotate(5deg); }
  50%      { transform: translateX(-50%) rotate(-5deg); }
}
</style>