<template>
    <div class="modal_all">
        <h2 class="title_2 title_2-modal">Добавление дохода / расхода</h2>
         <inputForm class="modal_all-inp" :title="'Название'" v-model="parentName" />
         <inputForm class="modal_all-inp" v-model="parentData" :title="'Дата'" />
         <inputForm class="modal_all-inp" :title="'Сумма'" v-model="parentSumm" />
         <dropForm :title="'Выберите тип'" :ar="parentTypeArray" v-model="parentType" />
         <dropForm :title="'Выберите категорию'" :ar="parentCategoryArray" v-model="parentCategory" />
         <btnAutorization :link="''" @click="add()">Добавить</btnAutorization>
    </div>
</template>
<script setup>
import inputForm from './UI/inputForm.vue';
import btnAutorization from './UI/btnAutorization.vue';
import dropForm from './UI/dropForm.vue';
import axios from 'axios';
import rent from '/src/assets/img/Rent.png'
import { useListAllStore } from '@/stores/listAll'
import { ref } from 'vue';
const listAllStore = useListAllStore()
const emit = defineEmits(['toggleShow'])
const parentData = ref('');
const parentSumm = ref('');
const parentName = ref('');
const parentCategory = ref('');
const parentType = ref('');
const parentTypeArray = ref([
  {
    id: 1,
    name: 'Доход',
    type: 'income'
  },
  {
    id: 2,
    name: 'Расход',
    type: 'expense'
  }
]);
const parentCategoryArray = ref([
  {
    id: 1,
    name: 'Зарплата',
    type: 'income'
  },
  {
    id: 2,
    name: 'Авто',
    type: 'expense'
  },
  {
    id: 3,
    name: 'Продукты',
    type: 'expense'
  },
  {
    id: 4,
    name: 'Подработка',
    type: 'income'
  },
]);
const add = () => {
    let param = { title: parentName.value, data: parentData.value, price: parentSumm.value, img: rent, active: true, type:parentType.value,cause: parentCategory.value,};
    axios.post('https://be8fbe4c3c8dd85c.mokky.dev/listAll', param, 
    {headers: { 'Content-Type': 'application/json', Accept: "application/json", }}).then((res) => {      
      if (res.data) {
        emit('toggleShow');
        parentName.value = '';
        parentData.value = '';
        parentSumm.value = '';
        parentType.value = '';
        parentCategory.value = '';
        listAllStore.getListAll();
      }
    });
}
</script>
<style>
.modal_all {
    position: fixed;
    z-index: 4;
    top: 10px;
    left: 10px;
    right: 10px;
    border-radius: 40px;
    bottom: 100px;
    padding: 20px;
    background: var(--main-light-green);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}
.modal_all-inp input {
    background-color: var(--main-white);
}
.title_2-modal {
    text-align: center;
    color: var(--main-welcome);
}
</style>