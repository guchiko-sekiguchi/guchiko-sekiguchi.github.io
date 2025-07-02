# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


🔍 関東・博物館データベース：大まかな構成ヒント
1. App.vue（全体の管理）
状態管理するものは？（例：選択中の地域）

子コンポーネントにどうやって状態を渡す？（provide/inject or props）

2. Header.vue（上部固定）
どんなタイトルを表示する？（サイト名？）

ナビメニューは入れる？不要？

3. Sidebar.vue（左メニュー）
どんな選択肢（ボタン）を用意する？（地域名？）

ボタン押した時どうやってApp.vueの状態を変える？（何で渡す？）

4. Main.vue（メイン表示エリア）
Sidebarで選ばれた「地域」に応じて何を表示する？（博物館リスト？）

どこにデータ（博物館名・説明）を持たせる？（Main.vue内？App.vue？外部JSON？）

5. Footer.vue（下部）
コピーライト？製作者名？不要なら空でもOK。

6. その他ヒント
データの流れ（状態）はApp.vue起点？それとも各ページで完結？

必要なVue機能：ref、provide/inject、（場合により）computed。

CSS（Flexbox）で「Header/Sidebar/Main/Footer」レイアウトを組む。