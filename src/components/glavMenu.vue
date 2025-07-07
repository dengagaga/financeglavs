<template>
  <ul class="glav_menu">
    <li class="glav_menu-item" v-for="item in menu" :key="item">
      <img class="glav_menu-img" :src="item.img" alt="" />
      <p class="glav_menu-title">{{ item.title }}</p>
    </li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
import ex from '@/assets/img/ex.png'
import history from '@/assets/img/history.png'
import inc from '@/assets/img/inc.png'
import topUp from '@/assets/img/topUp.png'
const menu = ref([
  {
    id: 1,
    title: 'Доход',
    img: inc,
  },
  {
    id: 2,
    title: 'Расход',
    img: ex,
  },
  {
    id: 3,
    title: 'История',
    img: history,
  },
  {
    id: 4,
    title: 'Общее',
    img: topUp,
  },
])
</script>
<style>
.glav_menu {
  background-color: var(--main-white);
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 10px 20px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.glav_menu-item {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.glav_menu-img {
  max-width: 28px;
  width: 100%;
}
.glav_menu-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--main-color);
}
</style>
