<template>
  <div class="glav_all">
    <header class="header">
      <div class="header_top">
        <img class="header_top-logo" src="@/assets/img/logo.png" alt="" />
        <img class="header_top-img" src="@/assets/img/bell.svg" alt="" />
      </div>
      <div class="header_mid">
        <div class="header_mid-left">
          <h3 class="title_5">
            <img src="@/assets/img/Income.png" alt="" />
            Общий доход
          </h3>
          <h1 class="title_2">144 000 Р</h1>
        </div>
        <div class="header_mid-right">
          <h3 class="title_5">
            <img src="@/assets/img/Expense.png" alt="" />
            Общий расход
          </h3>
          <h1 class="title_2 title_blue">- 144 000 Р</h1>
        </div>
      </div>
      <div class="header_bot"></div>
    </header>
    <main class="main">
      <glavMenu></glavMenu>
          <div class="fon">
            <pickDay></pickDay>
            <basicExpenses></basicExpenses>
            <list></list>
          </div>
      <navMenu></navMenu>
    </main>
   
  </div>
</template>
<script setup>
import glavMenu from '@/components/glavMenu.vue'
import basicExpenses from '@/components/basicExpenses.vue'
import navMenu from '@/components/UI/navMenu.vue'
import pickDay from '@/components/UI/pickDay.vue'
import list from '@/components/UI/list.vue'

</script>
<style scoped>
.glav_all {
  background-color: var(--main-green);
  height: 100vh;
}
.fon {
  padding: 63px 33px 33px;
  margin-top: -40px;
}
.header {
  padding: 14px 38px;
}
.header_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_top-logo {
  width: 50px;
}
.header_top-img {
  width: 35px;
  height: 35px;
  padding: 7px;
  border-radius: 50%;
  background-color: var(--main-light-green);
}
.header_mid {
  margin-top: 40px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}
.header_mid-left {
  width: 50%;
  border-right: 1px solid var(--main-light-green);
}
.header_mid-right {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
}

</style>
