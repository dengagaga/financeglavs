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
const formattedDataMounth = computed(() => {
  const today = new Date();
   const month = String(today.getMonth() + 1).padStart(2, '0');
  
  return `${month}`;
})

const pickDay = ref([
  {
      id:1,
      title:'Сегодня',
      data: formattedDataDay.value,
      active:false
    },
    {
      id:2,
      title:'Неделя',
      data: '',
      active:false
    },
    {
      id:3,
      title:'Месяц',
      data: null,
      active:true
    },
  ])
const activeDay = ref(pickDay.value[2])
const toggleActive = (item) => {
  pickDay.value.forEach((item) => {
      item.active = false;
  });
  item.active = true
  activeDay.value = item
}
const total = []
const totalTwo = []
const totalProfitToday = ref(0);
const totalProfitWeek = ref(0);
const totalProfitMounth = ref(0);
const totalExpenseToday = ref(0);
const totalExpenseWeek = ref(0);
const totalExpenseMounth = ref(0);
const bigExpenseToday = ref(0);
const bigExpenseWeek = ref(0);
const bigExpenseMounth = ref(0);

watch(() => listAllStore.listAll, // Теперь это getter-функция
  () => {
  totalProfitToday.value = 0
  totalExpenseToday.value = 0
  bigExpenseToday.value = 0
  bigExpenseMounth.value = 0
  totalProfitMounth.value = 0
  totalExpenseMounth.value = 0
  listAllStore.listAll.forEach(item => {
  if(item.data === formattedDataDay.value && item.type === 'income') {
    totalProfitToday.value += +item.price
  }
  if(item.data === formattedDataDay.value && item.type === 'expense') {
    totalExpenseToday.value += +item.price
  }
  if (item.data === formattedDataDay.value && item.type === 'expense') {
    total.push(item.price)
    total.sort((a, b) => Number(b) - Number(a));
    bigExpenseToday.value = total[0]
  }
  if(item.data.split('.')[1] == formattedDataMounth.value && item.type === 'income') {
    totalProfitMounth.value += +item.price
  }
  if(item.data.split('.')[1] == formattedDataMounth.value && item.type === 'expense') {
    totalExpenseMounth.value += +item.price
  }
  if (item.data.split('.')[1] == formattedDataMounth.value && item.type === 'expense') {
    totalTwo.push(item.price)
    totalTwo.sort((a, b) => Number(b) - Number(a));
    bigExpenseMounth.value = totalTwo[0]
  }
})
},
  { deep: true }
);



  return { formattedDataMounth, pickDay, toggleActive, activeDay, formattedDataDay, totalProfitToday, totalProfitWeek, totalProfitMounth, bigExpenseToday, bigExpenseWeek, bigExpenseMounth, totalExpenseToday, totalExpenseWeek, totalExpenseMounth }
})
