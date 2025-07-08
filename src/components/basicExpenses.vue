<template>
    <div class="basic_expenses">
      {{ daysStore.activeDay }}
          <div class="basic_expenses-item">
            <img src="@/assets/img/Salary.svg" alt="">
            <div class="basic_expenses-item-content">
              <h4 class="basic_expenses-item-content-title">Общая прибыль за {{ daysStore.activeDay.title }}</h4>
              <p class="basic_expenses-item-content-text">{{ totalProfit }} р</p>
            </div>
          </div>
          <div class="basic_expenses-item">
            <img src="@/assets/img/Food.svg" alt="">
            <div class="basic_expenses-item-content">
                <h4 class="basic_expenses-item-content-title">Самый большой расход за {{ daysStore.activeDay.title }}</h4>
                <p class="basic_expenses-item-content-text">{{ daysStore.bigExpenseToday }} р</p>
            </div>
          </div>
      </div>
</template>
<script setup>
import { computed } from 'vue'
import { useDaysStore } from '@/stores/days';
const daysStore = useDaysStore()
const totalProfit= computed(() => {
  return daysStore.activeDay.id == 1 ? daysStore.totalProfitToday : daysStore.totalProfitWeek
})
</script>
<style>
.basic_expenses {
  margin-top: 20px;
  padding: 33px;
  background-color: var(--main-green);
  border-radius: 31px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.basic_expenses-item {
  display: flex;
  gap: 10px;
  align-items: center;
}
.basic_expenses-item img {
  width: 30px;
  height: 30px;
}
.basic_expenses-item-content-title {
  font-size: 14px;
  color: var(--main-color);
}
.basic_expenses-item-content-text {
  font-weight: 700;
  font-size: 15px;
  color: var(--main-color);
}
</style>
