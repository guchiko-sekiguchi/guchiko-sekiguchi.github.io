<template>
  <div class="contents-layout">
    <div class="contents">
      <div class="kanban">
        <h2 class="game-title">ブロック動かし</h2>
      </div>
      <div class="game-area" ref="gameArea">
        <div
          class="block01"
          :style="{ top: posY + 'px', left: posX + 'px' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posX: 0,
      posY: 0,
      step: 40,
      maxX: 400,
      maxY: 520,
      minX: 0,
      minY: 0,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKey);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  },
  methods: {
    handleKey(e) {
  const arrowKeys = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
  if (arrowKeys.includes(e.key)) {
    e.preventDefault(); // ← これでスクロール抑止！
  }

  if (e.key === "ArrowRight") this.posX += this.step;
  if (e.key === "ArrowLeft") this.posX -= this.step;
  if (e.key === "ArrowUp") this.posY -= this.step;
  if (e.key === "ArrowDown") this.posY += this.step;

  this.posX = Math.max(this.minX, Math.min(this.posX, this.maxX));
  this.posY = Math.max(this.minY, Math.min(this.posY, this.maxY));
},
  },
};
</script>

<style scoped>


.game-area{
    width:440px;
    height: 560px;
    background-color: rgb(255, 255, 255);
    border: double 4px gray;
    margin: 20px auto 0;
    position: relative;
    background-image:
        linear-gradient(to right, gray 1px, transparent 1px),
        linear-gradient(to bottom, gray 1px, transparent 1px);
    background-size: 40px 40px;
    box-sizing: content-box;
}

.block01{
    width:40px;
    height: 40px;
    top: 0px;
    left:0px;
    background-color: #E63995;
    position: relative;
}
.btn-group{
    margin-top: 20px;
}

.start{
    height:50px ;
    font-size: 36px;
    font-weight: bold;
    animation: blinking 1s ease-in-out infinite alternate;
    cursor: pointer;

    all: unset;
    text-align: center;
    width: 120px;
    height: 30px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 15px;
    border-bottom: 5px solid #522323;
    background: #a52a2a;
    color: white;
}

@keyframes blinking {
	0% {
		opacity: 0;
	}
    25%{
        opacity: 0;
    }
	100% {
		opacity: 1;
	}
}

.active {
    display: block;
}

.btn-group > .noneactive {
    cursor: default;
    opacity: 0.5;
}

</style>