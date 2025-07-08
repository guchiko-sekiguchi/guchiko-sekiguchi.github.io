<template>
  <header class="site-header">

    <!-- 雲：先に置くことで背景として背面に配置 -->
    <div class="header-cloud">
      <div
        class="cloud"
        v-for="n in 15"
        :key="n"
        :style="cloudStyle(n)"
      >
        <font-awesome-icon icon="cloud" />
      </div>
    </div>

    <div class="title-banner">
      <div class="greek-pillar l-pillar">
        <div class="ornament-ball"></div>
        <div class="capital"></div>       
        <div class="shaft"></div>         
        <div class="base"></div>          
      </div>

      
        <h1 class="site-title"><router-link to="/Free-game-ya-san/"><span>FreeGame・ya・san</span></router-link></h1>

      <div class="greek-pillar r-pillar">
        <div class="ornament-ball"></div> 
        <div class="capital"></div>       
        <div class="shaft"></div>         
        <div class="base"></div>          
      </div>
    </div>

  </header>
</template>


<script>
export default {
  name: 'HeaderCloud',
  methods: {
    cloudStyle(n) {
      // 位置を均等ベースにランダムずらし（まばら感アップ）
      const baseTop = (n / 10) * 30 + 10; // 10〜40%を均等分布
      const variation = Math.random() * 4 - 2; // ±2%程度のばらつき
      const top = baseTop + variation;

      const delay = -(Math.random() * 30); // 負の値で途中から開始
      const size = Math.random() * 2 + 1;

      return {
        top: `${top}%`,
        animationDelay: `${delay}s`,
        transform: `scale(${size})`,
      };
    }
  },
};
</script>


<style scoped>

.site-header{
  padding: 2rem 1rem 1rem;
  position: relative;
}

.header-cloud {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;      /* タイトルより後ろにする */
  pointer-events: none; /* 雲の上でもクリックを無効にする */
}

.cloud {
  position: absolute;
  top: 0px; 
  left: 110%;
  font-size: 2rem;
  color: white;
  opacity: 0.7;
  animation: cloudMove 30s linear infinite;
}

@keyframes cloudMove {
  0% {
    left: 110%;
  }
  100% {
    left: -10%;
  }
}

header {
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
}

.title-banner {
  position: relative;
  display: inline-block;
  white-space: nowrap;
}

.greek-pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.l-pillar{
  position: absolute;
    left: -35px;
    top:-20px;
}

.r-pillar{
    position: absolute;
    right: -35px;
    top:-20px;
}

/* 装飾球：柱より少し大きく */
/* .ornament-ball {
  width: 40px;
  height: 40px;
  background: radial-gradient(circle at 30% 30%, #fef9e7, #e8dac0);
  border: 1px solid #c2a78d;
  border-radius: 50%;
  margin-bottom: -6px; 
  z-index: 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
} */

/* 柱頭：やや控えめに */
.capital {
  width: 46px;
  height: 10px;
  z-index: 1;
  background:
    linear-gradient(
    to right,
    #f0e6d2,
    #e3e6cd,
    #aa998a
  );
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* 柱の本体：太く、安定感を出す */
.shaft {
  width: 24px;
  height: 300px;
  background:
  repeating-linear-gradient(
    to right,
    rgba(232, 218, 192, 0.5),
    rgba(232, 218, 192, 0.5) 4px,
    rgba(201, 187, 162, 0.5) 4px,
    rgba(201, 187, 162, 0.5) 8px
  ),
  linear-gradient(
    to right,
    #f0e6d2,
    #e3e6cd,
    #7a6c5f
  );
  box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
}

/* 柱の土台：少し控えめなサイズに */
.base {
  width: 44px;
  height: 10px;
  background: #e8dac0;
  border-radius: 4px;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.2);
}


h1{
    padding: 0rem;
    text-align: center;
    
}

.site-title {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: #e8dac0;
  border-top: 5px solid #c9bba2;
  border-bottom: 5px solid #c9bba2;
  box-shadow:
    inset 3px 2px 0px rgba(119, 98, 88, 0.6)
  ;
}

.site-title a{
    text-decoration: none;
    font-weight: bold;
    padding: 10px 20px;
}

.site-title span {
  font-family: "Cinzel Decorative", serif;
  font-size: 2.0rem;
  color: #4b3832;
  text-align: center;
  padding: 1rem 3rem;
  background: radial-gradient(circle at center, #fef9e7 30%, #e8dac0 100%);
  border: 4px double #a67c52;
  border-radius: 50% / 35%;
  box-shadow:
    inset 0 0 8px rgba(255, 255, 255, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.2),
    2px 2px 0 0px rgba(180, 153, 140, 0.6);
  display: inline-block;
  min-width: 280px;
  aspect-ratio: 6 / 1;
  z-index: 2;
  vertical-align:bottom;
}



@media (max-width: 967px) {
h1{
    letter-spacing:3px;
}

.site-title span{
    width: 100%;
    font-size: 1.5rem;
}

.l-pillar{
    left: -35px;
    top:-20px;
}

.r-pillar{
    right: -35px;
        top:-20px;
}
  
}

@media (max-width: 768px) {
.site-title span{
    width: 100%;
    font-size: 1rem;
}

h1,
h2{
    letter-spacing:0px;
}
}

@media (max-width: 477px) {
.greek-pillar{
  display: none;}


.title-banner {
  width: 100%;
  padding: 0;
}
.site-title a{
    width: 100%;
}

}
</style>