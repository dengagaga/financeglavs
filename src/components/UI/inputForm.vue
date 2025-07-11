<template>
  <div class="form_autorization-inps">
    <label class="form_autorization-label">{{ title }}</label>
    <input 
      class="form_autorization-inp" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      type="text" 
    />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  modelValue: String 
});

defineEmits(['update:modelValue']);
</script>