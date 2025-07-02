import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Gallery from '../pages/Gallery.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
];

const router = createRouter({
    history: createWebHistory('/Motion-Palette/'),
    routes,
});

export default router;