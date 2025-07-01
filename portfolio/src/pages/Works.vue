<template>
<section class="works-list">
  <div class="work-item">
    <h3 class="title"><span>ポートフォリオサイト</span><span><small>※このサイトです。</small></span></h3>
    <div class="desc">
      <p><strong>制作月　：</strong>2025年6月(デザイン+コーディング)</p>
      <p><strong>画面数　：</strong>1</p>
      <p><strong>制作期間：</strong>約3日</p>
      <p><strong>使用技術：</strong>HTML、CSS、JavaScript、Vue</p>
      <p><strong>機能実装：</strong><br>レスポンシブ、Vueコンポーネント、キーフレームアニメーションなど</p>
    </div>

    <div class="work-video">
      <img src="/src/assets/port-folio-site.png" alt="ポートフォリオサイト" />
      <!-- <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
        controls
        muted
        width="100%"
        >
        お使いのブラウザは動画タグに対応していません。他のブラウザでご覧ください。
      </video> -->
    </div>

    <div class="detail">
      <p><strong>概要：</strong></p>
      <p>背景やテキストをhoverした際などアニメーションを多く使っています。画面のデザインをこだわりました。チャットGPTと打合せをし構成を考え、コードの下書きを書いてもらい、修正する形で作成いたしました。背景のアニメーションは自分の言葉でイメージを伝え、想像通りのものを作成してもらうことが出来ました。</p>
    </div>
  </div>

  <div class="work-item">
    <h3 class="title"><span>CSSアニメーションの</span><span>サンプルサイト</span></h3>
    <div class="desc">
      <p><strong>制作月　：</strong>2025年6月(デザイン+コーディング)</p>
      <p><strong>画面数　：</strong>1</p>
      <p><strong>制作期間：</strong>約2日</p>
      <p><strong>使用技術：</strong>HTML、CSS、JavaScript、Vue</p>
      <p><strong>機能実装：</strong><br>Vueコンポーネント、キーフレームアニメーションなど</p>
    </div>

    <div class="work-video">
      <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
        controls
        muted
        width="100%"
        >
        お使いのブラウザは動画タグに対応していません。他のブラウザでご覧ください。
      </video>
    </div>

    <div class="detail">
      <p><strong>概要：</strong><br>CSSで出来るアニメーションのサンプルサイトのようなものを作成しました。グラデーションでおしゃれな印象の統一感のあるデザインのサイトにしました。</p>
    </div>
  </div>

  <div class="work-item">
    <h3 class="title">ドット絵制作アプリ</h3>
    <div class="desc">
      <p><strong>制作月　：</strong>2025年5月(デザイン+コーディング)</p>
      <p><strong>画面数　：</strong>1</p>
      <p><strong>制作期間：</strong>1日</p>
      <p><strong>使用技術：</strong>HTML、CSS、JavaScript、Vue</p>
      <p><strong>機能実装：</strong><br>Vueコンポーネント、キーフレームアニメーションなど</p>
    </div>

    <div class="work-video">
      <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
        controls
        muted
        width="100%"
        >
        お使いのブラウザは動画タグに対応していません。他のブラウザでご覧ください。
      </video>
    </div>

    <div class="detail">
      <p><strong>概要：</strong><br>最低限の機能を実装したドット絵のお絵描きアプリです。改修を想定してドットのサイズなど変数で管理しています。今後はキャンバスサイズ変更に加え、レイヤー機能など様々な機能を追加したいと思っています。</p>
    </div>
  </div>

  <div class="work-item">
    <h3 class="title">フリーゲームサイト</h3>
    <div class="desc">
      <p><strong>制作月　：</strong>2025年5月(デザイン+コーディング)</p>
      <p><strong>画面数　：</strong>5（トップページ1、ミニゲーム4）</p>
      <p><strong>制作期間：</strong>約5日</p>
      <p><strong>使用技術：</strong>HTML、CSS、JavaScript、Vue</p>
      <p><strong>機能実装：</strong><br>Vueコンポーネント、キーフレームアニメーションなど</p>
    </div>

    <div class="work-video">
      <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
        controls
        muted
        width="100%"
        >
        お使いのブラウザは動画タグに対応していません。他のブラウザでご覧ください。
      </video>
    </div>

    <div class="detail">
      <p><strong>概要：</strong><br>JavaScriptの学習で、じゃんけんゲーム、数字当てゲーム、５秒連打ゲーム、ブロック移動ゲームを作成いたしました。</p>
    </div>
  </div>

</section>
</template>

<style>

.works-list {
  gap: 40px;
  padding: 2rem 1rem;
}

.work-item {
  display: grid;
  grid-template-areas:
    "title title"
    "desc video"
    "detail detail";
  grid-template-columns: 1fr 1fr ;
  gap: 20px 40px;
  padding: 2rem;
  border-radius: 12px;
}

.work-item:nth-child(even) {
  display: grid;
  grid-template-areas:
    "title title"
    "video desc"
    "detail detail";
    grid-template-columns: 1fr 1fr;
}

.title {
  grid-area: title;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom:1px solid gray ;
  
}

.title small{
  font-size: 10px;
}

.desc {
  grid-area: desc;
  border-radius: 8px;
  padding: 0.5rem;
  line-height: 1.5;
}
.work-item{
  justify-content: center; 
  align-items: center;    
  border-radius: 8px;
  padding: 1rem;
}


.work-video {
  grid-area: video;
}

.work-video img{
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  display: block; /* ブラウザの余白を抑える */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.work-video video {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  display: block; /* ブラウザの余白を抑える */
  box-shadow: inset;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.detail {
  grid-area: detail;
  border-radius: 8px;
  padding: 0.5rem;
  line-height: 1.7;
  font-size: 15px;
  color: #333;
}

@media (max-width: 768px) {
  .work-item{
    grid-template-areas:
      "title"
      "video"
      "desc"
      "detail";
    grid-template-columns: 1fr;
  }
  .work-item:nth-child(even) {
    grid-template-areas:
      "title"
      "video"
      "desc"
      "detail";
    grid-template-columns: 1fr;
  }

    .work-video {
    width: 100%;
    max-width: 100%;
  }
  
}

@media (max-width: 967px) {
  span::after {
    content: "\A";       /* 改行コード */
    white-space: pre;    /* 改行を反映させる */
  }
  
}

</style>
