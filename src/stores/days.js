import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDaysStore = defineStore('days', () => {
  const pickDay = ref([
    {
        id:1,
        title:'сегодня',
        active:true
      },
      {
        id:2,
        title:'неделя',
        active:false
      },
      {
        id:3,
        title:'месяц',
        active:false
      },
    ])
    const activeDay = ref(pickDay.value[0])
    const toggleActive = (item) => {
      pickDay.value.forEach((item) => {
        item.active = false;
    });
    item.active = true
    activeDay.value = item
}

  return { pickDay, toggleActive, activeDay }
})
