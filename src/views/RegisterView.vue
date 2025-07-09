<template>
  <div class="autorization">
    <h1 class="autorization_title">Создать аккаунт</h1>
    <div class="fon">
      <div class="autorization_all">
        <form action="" class="form_autorization">
          <div class="form_autorization-inps">
            <label class="form_autorization-label"  for="">Имя</label>
            <input class="form_autorization-inp" v-model="name" type="text" name="" id="" />
          </div>
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Номер телефона</label>
            <input class="form_autorization-inp" v-model="phone" type="text" name="" id="" />
          </div>
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Почта</label>
            <input class="form_autorization-inp" v-model="gmail" type="text" name="" id="" />
          </div>
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Пароль</label>
            <input class="form_autorization-inp" v-model="password" type="text" name="" id="" />
          </div>
          <p class="form_autorization-text">
            By continuing, you agree to Terms of Use and Privacy Policy.
          </p>
          <btnAutorization :link="''" @click="register()">Зарегистрироваться</btnAutorization>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from '@/router'
import btnAutorization from '@/components/UI/btnAutorization.vue'
import { ref } from 'vue';
import axios from 'axios';
const name = ref('');
const password = ref('');
const gmail = ref('');
const phone = ref('');

const register = () => {
    axios.post('https://be8fbe4c3c8dd85c.mokky.dev/register', {fullName: name.value, password: password.value, email: gmail.value, phone: phone.value}, 
    {headers: { 'Content-Type': 'application/json', Accept: "application/json", }}).then((res) => {
      console.log(res.data.token);
      
      if (res.data) {
        name.value = '';
        password.value = '';
        phone.value = '';
        gmail.value = '';
        router.push('/')
      }
    }
   
  );
}
</script>
<style>
.form_autorization-text {
  color: #4b4544;
  font-size: 14px;
  text-align: center;
  max-width: 230px;
}
</style>
