<template>
  <div class="glav_all">
    <modalAll @toggleShow="toggleShow" v-if="modal" />
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
          <h1 class="title_2">{{ totalProfit }} ₽</h1>
        </div>
        <div class="header_mid-right">
          <h3 class="title_5">
            <img src="@/assets/img/Expense.png" alt="" />
            Общий расход
          </h3>
          <h1 class="title_2 title_blue">- {{ totalExpense }} ₽</h1>
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
      <navMenu :close="close" @toggleShow="toggleShow"></navMenu>
    </main>
   
  </div>
</template>
<script setup>
import glavMenu from '@/components/glavMenu.vue'
import basicExpenses from '@/components/basicExpenses.vue'
import modalAll from '@/components/modalAll.vue'
import navMenu from '@/components/UI/navMenu.vue'
import pickDay from '@/components/UI/pickDay.vue'
import list from '@/components/UI/list.vue'
import { onMounted, ref } from 'vue'
import { useListAllStore } from '@/stores/listAll'
import { computed } from 'vue'
import { useDaysStore } from '@/stores/days';
const daysStore = useDaysStore()
const totalProfit = computed(() => {
  return daysStore.activeDay.id == 1 ? daysStore.totalProfitToday : daysStore.activeDay.id == 2 ? daysStore.totalProfitWeek : daysStore.totalProfitMounth
})
const totalExpense = computed(() => {
  return daysStore.activeDay.id == 1 ? daysStore.totalExpenseToday : daysStore.activeDay.id == 2 ? daysStore.totalExpenseWeek : daysStore.totalExpenseMounth
})
const listAllStore = useListAllStore()
onMounted(() => {
  listAllStore.getListAll()
})

const toggleShow = () => {
  modal.value = !modal.value
  close.value = !close.value
}
const modal = ref(false)
const close = ref(false)
</script>
<style scoped>
.main {
  height: 100vh;
}
.glav_all {
  background-color: var(--main-green);
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
