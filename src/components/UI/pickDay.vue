<template>
    <div class="pick_day">
        <button v-for="item in daysStore.pickDay" @click="daysStore.toggleActive(item)" :key="item.id" :class="{'pick_day-btn--active': item.active}" class="pick_day-btn">{{ item.title }}</button>
    </div>
</template>
<script setup>
import { useDaysStore } from '@/stores/days';
const daysStore = useDaysStore()


</script>
<style>
.pick_day {
    background-color: var( --back-nav);
    padding: 13px;
    border-radius: 30px;
    display: flex;
    
    justify-content: space-between;
}
.pick_day-btn {
    padding: 7px 14px;
    font-size: 15px;
    min-width: 95px;
    color: var(--main-color);
    font-weight: 600;
}
.pick_day-btn--active {
    border-radius: 14px;
    background-color: var(--main-green);
}
</style>