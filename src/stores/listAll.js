import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import rent from '/src/assets/img/Rent.png'

export const useListAllStore = defineStore('listAll', () => {
     const listAll = ref([])
     const getListAll = () => {
       axios.get('https://be8fbe4c3c8dd85c.mokky.dev/listAll').then(response => {
         listAll.value = response.data
         listAll.value.forEach(item => {
             item.img = rent
         })
       })
     }

  return { listAll, getListAll }
})
