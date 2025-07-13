<template>
    <div class="form_autorization-inps">
 <label for="" class="form_autorization-label">{{ title }}</label>
    <select 
        name="transaction_type" 
        id="transaction_type" 
        class="transaction_type"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
        <!-- <option value="">{{ title }}</option> -->
        <option 
            :value="title == 'Выберите категорию' ? item.name : item.type" 
            v-for="item in ar" 
            :key="item.id"
        >
            {{ item.name }}
        </option>
    </select>
    </div>
   
</template>

<script setup>
defineProps({
    title: String,
    ar: Array,
    modelValue: [String, Number] // Принимаем текущее значение
});

defineEmits(['update:modelValue']); 
</script>

<style>
.transaction_type {
    padding: 11px 34px;
    font-size: 15px;
    min-width: 95px;
    color: var(--main-welcome);
    border-radius: 14px;
    background-color:var(--main-white);
    width: 100%;
    font-weight: 600;
}
</style>