<template>
  <div class="autorization">
    <h1 class="autorization_title">Авторизация</h1>
    <div class="fon">
      <div class="autorization_all">
        <form action="" class="form_autorization">
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Почта</label>
            <input class="form_autorization-inp"  v-model="gmail" type="text" name="" id="" />
          </div>
          <div class="form_autorization-inps form_autorization-inps-pass">
            <label class="form_autorization-label" for="">Пароль</label>
            <input class="form_autorization-inp" v-model="password" type="text" name="" id="" />
          </div>
          <btnAutorization :link="''" @click="autorization()">Вход</btnAutorization>
          <a href="" class="form_autorization-link">Забыли пароль?</a>
          <btnAutorization :link="'register'" class="form_autorization-reg">
            Зарегистрироваться
          </btnAutorization>
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
const gmail = ref('');
const password = ref('');
const autorization = () => {
    axios.post('https://be8fbe4c3c8dd85c.mokky.dev/auth', { password: password.value, email: gmail.value }, 
    {headers: { 'Content-Type': 'application/json', Accept: "application/json", }}).then((res) => {
      console.log(res.data.token);
      
      if (res.data) {
        gmail.value = '';
        password.value = '';
        router.push('/glav')
      }
    }
   
  );
}
</script>

<style>
.autorization {
  background-color: var(--main-green);
  height: 100vh;
  padding-top: 78px;
}
.autorization_title {
  text-align: center;
  margin-bottom: 65px;
  font-size: 30px;
  font-weight: 700;
}
.fon {
  background-color: var(--back-green);
  padding: 90px 52px;
  border-radius: 40px 40px 0 0;
  height: 100%;
}
.autorization_all {
}
.form_autorization {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}
.form_autorization-inps {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
}
.form_autorization-inps-pass {
  margin-bottom: 60px;
}
.form_autorization-label {
  font-size: 15px;
  color: var(--main-welcome);
  font-weight: 600;
}
.form_autorization-inp {
  background-color: var(--main-light-green);
  padding: 11px 34px;
  color: var(--main-welcome);
  border-radius: 18px;
  font-size: 14px;
}

.form_autorization-link {
  color: var(--main-blue);
  font-weight: 700;
  font-size: 15px;
}
</style>
