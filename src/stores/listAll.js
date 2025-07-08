import { ref } from 'vue'
import { defineStore } from 'pinia'
import rent from '/src/assets/img/Rent.png'

export const useListAllStore = defineStore('listAll', () => {
     const listAll = ref([
    {
        id:1,
        title:'ЗП',
        img:rent,
        data:'08.07.2025',
        cause:'Зарплата',
        price:20000,
        active:true,
        type:'income'
      },
      {
        id:2,
        title:'Масло',
        img:rent,
        data:'08.07.2025',
        cause:'Авто',
        price:5400,
        active:true,
        type:'expense'
      },
      {
        id:3,
        title:'Продукты',
        img:rent,
        data:'08.07.2025',
        cause:'Продукты',
        price:2400,
        active:true,
        type:'expense'
      },
      {
        id:3,
        title:'Подработка',
        img:rent,
        data:'08.07.2025',
        cause:'Подработка',
        price:4000,
        active:true,
        type:'income'
      },
    ])

  return { listAll }
})
