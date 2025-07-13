<template>
    <ul class="list">
        <li class="item" v-for="item in listDay" :key="item.id">
          <img class="item_img" alt="" :src="item.img" />
          <div class="item_content">
              <h4 class="item_content-title">{{ item.title }}</h4>
              <p class="item_content-data" :class="{'item_content-data-expense': item.type == 'expense'}">{{ item.data }}</p>
          </div>
          <p class="item_cause" :class="{'item_cause-expense': item.type == 'expense'}">
            {{ item.cause }}
          </p>
          <p class="item_price">
            {{ item.price }} ₽
          </p>
        </li>
    </ul>
</template>
<script setup>
import { useListAllStore } from '@/stores/listAll';
import { computed } from 'vue'
import { useDaysStore } from '@/stores/days';
const daysStore = useDaysStore()
const listAllStore = useListAllStore()
const listDay = computed(() => {
  return daysStore.activeDay.id == 1 ? listAllStore.listAll.filter(item => item.data == daysStore.formattedDataDay) : daysStore.activeDay.id == 2 ? listAllStore.listAll.filter(item => item.data == daysStore.formattedDataWeek) : listAllStore.listAll.filter(item => item.data.split('.')[1] == daysStore.formattedDataMounth)
})
console.log(listAllStore.listAll, daysStore.formattedDataDay);

</script>
<style>
.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
    font-size: 14px;
}
.item_content {
    width: 70px;
}
.item_content-title {
    font-weight: 700;
}
.item_content-data {
    color: var(--main-green);
    font-weight: 700;
    font-size: 13px;
}
.item_cause {
   border-right: 1px solid var(--main-green);
   border-left: 1px solid var(--main-green);
   color: var(--main-green);
   padding-top: 10px;
   padding-bottom: 10px;
   width: 110px;
   text-align: center;
   font-size: 13px;
   font-weight: 700;
}
.item_price {
    width: 70px;
}
.item_cause-expense {
   border-right: 1px solid var(--main-blue);
   border-left: 1px solid var(--main-blue);
   color: var(--main-blue);
}
.item_content-data-expense {
    color: var(--main-blue);
}
</style>