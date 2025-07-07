<template>
  <button class="form_autorization-btn" @click="transition()">
    <slot></slot>
  </button>
</template>
<script setup>
import router from '@/router'
const props = defineProps({
  link: String,
})
const transition = () => {
  router.push('/' + props.link)
}
</script>
<style>
.form_autorization-btn {
  background-color: var(--main-green);
  color: var(--main-welcome);
  border-radius: 30px;
  font-size: 17px;
  font-weight: 700;
  max-width: 230px;
  width: 100%;
  padding: 12px;
}
.form_autorization-reg {
  background-color: var(--main-light-green);
}
</style>
