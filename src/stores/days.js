import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useListAllStore } from './listAll'

export const useDaysStore = defineStore('days', () => {
const listAllStore = useListAllStore()

const formattedDataDay = computed(() => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}.${month}.${year}`;
})
const pickDay = ref([
  {
      id:1,
      title:'сегодня',
      data: formattedDataDay.value,
      active:true
    },
    {
      id:2,
      title:'неделя',
      data: '',
      active:false
    },
    {
      id:3,
      title:'месяц',
      data: null,
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
const total = []
const totalProfitToday = ref(0);
const bigExpenseToday = ref(0);
const bigExpenseWeek = ref(0);
const bigExpenseMounth = ref(0);
const totalProfitWeek = ref(0);
const totalProfitMounth = ref(0);

watch(() => listAllStore.listAll, // Теперь это getter-функция
  () => {
    totalProfitToday.value = 0
  listAllStore.listAll.forEach(item => {
  if(item.data === formattedDataDay.value && item.type === 'income') {
    totalProfitToday.value += +item.price
    
  }
  if (item.data === formattedDataDay.value && item.type === 'expense') {
    total.push(item.price)
    total.sort((a, b) => Number(b) - Number(a));
    bigExpenseToday.value = total[0]
  }
})
  },
  { deep: true }
);



  return { pickDay, toggleActive, activeDay, formattedDataDay, totalProfitToday, totalProfitWeek, totalProfitMounth, bigExpenseToday, bigExpenseWeek, bigExpenseMounth }
})
