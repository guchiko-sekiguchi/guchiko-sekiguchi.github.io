import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home-page.vue'
import GameList from '../pages/game-list.vue'
import FallingObjectGame from '../pages/falling-object-game.vue'
import TimerClickGame from '../pages/timer-click-game.vue'
import NumberGuessingGame from '../pages/number-guessing-game.vue'
import Rps from '../pages/rps.vue'

const routes = [
    { path: '/Free-game-ya-san/', component: HomePage },
    { path: '/Free-game-ya-san/game-list', component: GameList },
    { path: '/Free-game-ya-san/falling-object-game', component: FallingObjectGame },
    { path: '/Free-game-ya-san/timer-click-game', component: TimerClickGame },
    { path: '/Free-game-ya-san/number-guessing-game', component: NumberGuessingGame },
    { path: '/Free-game-ya-san/rps', component: Rps },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router