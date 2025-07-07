<template>
  <div class="autorization">
    <h1 class="autorization_title">Создать аккаунт</h1>
    <div class="fon">
      <div class="autorization_all">
        <form action="" class="form_autorization">
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Имя</label>
            <input class="form_autorization-inp" type="text" name="" id="" />
          </div>
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Номер телефона</label>
            <input class="form_autorization-inp" type="text" name="" id="" />
          </div>
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Почта</label>
            <input class="form_autorization-inp" type="text" name="" id="" />
          </div>
          <div class="form_autorization-inps">
            <label class="form_autorization-label" for="">Пароль</label>
            <input class="form_autorization-inp" type="text" name="" id="" />
          </div>
          <p class="form_autorization-text">
            By continuing, you agree to Terms of Use and Privacy Policy.
          </p>
          <btnAutorization :link="'home'">Зарегистрироваться</btnAutorization>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import btnAutorization from '@/components/UI/btnAutorization.vue'
</script>
<style>
.form_autorization-text {
  color: #4b4544;
  font-size: 14px;
  text-align: center;
  max-width: 230px;
}
</style>
