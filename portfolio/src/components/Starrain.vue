<template>
  <canvas ref="canvas" class="lines-canvas"></canvas>
</template>

<script>
export default {
  data() {
    return {
      ctx: null,
      canvasWidth: 0,
      canvasHeight: 0,
      lines: [],
      lineCount: 50,
      speed: 1.5,
      angle: -45 * (Math.PI / 180), // ラジアン
      colors: ["#00ffff", "#ff00ff", "#ffff00", "#41b883"],
      animationId: null,
    };
  },
  mounted() {
    this.setupCanvas();
    window.addEventListener("resize", this.onResize);
    this.initLines();
    this.animate();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    cancelAnimationFrame(this.animationId);
  },
  methods: {
    setupCanvas() {
      const canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");
      this.canvasWidth = window.innerWidth;
      this.canvasHeight = window.innerHeight;
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
    },
    onResize() {
      this.setupCanvas();
      this.initLines();
    },
    initLines() {
      this.lines = [];
      for (let i = 0; i < this.lineCount; i++) {
        this.lines.push({
          x: Math.random() * this.canvasWidth,
          y: Math.random() * this.canvasHeight,
          length: 50 + Math.random() * 100,
          width: 1 + Math.random() * 2,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
        });
      }
    },
    animate() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      for (const line of this.lines) {
        // 線の終点計算
        const x2 = line.x + line.length * Math.cos(this.angle);
        const y2 = line.y + line.length * Math.sin(this.angle);

        // 線を描画
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // 線を角度方向に移動
        line.x += this.speed * Math.cos(this.angle);
        line.y += this.speed * Math.sin(this.angle);

        // 画面外ループ処理（線の長さ分余裕を持つ）
        if (line.x - line.length > this.canvasWidth) line.x = -line.length;
        if (line.y - line.length > this.canvasHeight) line.y = -line.length;
        if (line.x + line.length < 0) line.x = this.canvasWidth + line.length;
        if (line.y + line.length < 0) line.y = this.canvasHeight + line.length;
      }

      this.animationId = requestAnimationFrame(this.animate);
    },
  },
};
</script>

<style scoped>
.lines-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  background: transparent;
}
</style>