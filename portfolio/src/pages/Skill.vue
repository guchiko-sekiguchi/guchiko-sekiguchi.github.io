<template>
<section class="skills">
  <div class="skill-contents">
    <div class="skill-category">
      <h3><i class="fa-solid fa-paintbrush"></i>デザイン</h3>
      <div class="skill-tag">
        <div class="stars">★★☆☆☆</div>
        <div class="tag-icon">
          <i class="fa-brands fa-figma fa-lg"></i><span>Figma</span>
        </div>
      </div>
      <div class="skill-tag">
        <div class="stars">★★★★★☆</div>
        <span>CLIP STUDIO PAINT</span>
      </div>
      <div class="skill-tag">
        <div class="stars">★★☆☆☆</div>
        <span>Illustrator</span>
      </div>
    </div>
    
    <div class="skill-category">
      <h3><i class="fa-solid fa-code "></i>フロントエンド </h3>
      <div class="skill-tag">
        <div class="stars">★★★☆☆</div>
        <div class="tag-icon">
          <i class="fab fa-html5 fa-lg"></i><span>HTML</span>
        </div>
      </div>
      <div class="skill-tag">
        <div class="stars">★★★☆☆</div>
        <div class="tag-icon">
          <i class="fa-brands fa-css3-alt fa-lg"></i><span>CSS</span>
        </div>
      </div>
      <div class="skill-tag">
        <div class="stars">★★☆☆☆</div>
        <div class="tag-icon">
          <i class="fab fa-js fa-lg"></i><span>JavaScript</span>
        </div>
      </div>
      <div class="skill-tag">
        <div class="stars">★☆☆☆☆</div>
        <div class="tag-icon">
          <i class="fa-brands fa-vuejs fa-lg"></i><span>Vue</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style>

.tag-icon{
  display: flex;
  line-height: none;
  align-items: center;
  gap: 8px;
  justify-content: center;
}


.skill-tag{
  text-align: center;
}

.skill-tag span i{
  right: 8px;
}

.skills {
  margin: 0 auto 70px;
  font-family: 'Yu Gothic', 'Noto Sans JP', sans-serif;
  color: #222;
  line-height: 1.4;
  position: relative;
  border-radius: 8px;
  text-align: center;
}

.skill-contents{
  margin: 3cqmin auto 0;
}

.skill-category {
  margin-bottom: 2.5rem;
}

.skills h2 {
  font-size: 1.5rem;
    letter-spacing: 3px;
}


.skill-category h3 {
    letter-spacing: 3px;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  position: relative;
}

.skill-category h3:before {
  content: '';
  position: absolute;
  bottom: -10px;
  display: inline-block;
  width: 60px;
  height: 3px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: black;
  border-radius: 2px;
}

.skill-tag {
  display: inline-block;
  background: transparent; /* 枠なし */
  padding: 6px 12px;
  margin: 6px 8px;
  text-align: center;
  min-width: 100px;
  position: relative;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
}

.stars{
  position: relative;
  color: #f4c150;
  overflow: hidden;
}

.stars::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(25deg);
  animation: shine 2.5s infinite;
}

@keyframes shine {
  0% {
    left: -75%;
  }
  100% {
    left: 125%;
  }
}
</style>