<template>

    <ul class="">
        <li class="">
            <router-link to="/" class="menu-color">Home</router-link>
        </li>
        <li class="">
            <router-link to="/gallery" class="menu-color">Gallery</router-link>
        </li>
    </ul>

</template>

<style scoped>
ul{
    list-style: none;
    display: flex;
    gap: 10px;
}

li{
    display: flex;
    color: white;
    width: 100px;
    align-self: center;
    justify-content: center;
}

.menu-color{
    color: white;
}

</style>