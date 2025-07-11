<template>
    <select 
        name="transaction_type" 
        id="transaction_type" 
        class="transaction_type"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
        <option value="">{{ title }}</option>
        <option 
            :value="title == 'Выберите категорию' ? item.name : item.type" 
            v-for="item in ar" 
            :key="item.id"
        >
            {{ item.name }}
        </option>
    </select>
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
    padding: 7px 14px;
    font-size: 15px;
    min-width: 95px;
    color: var(--main-color);
    border-radius: 14px;
    border: 1px solid var(--main-color);
    width: 100%;
    font-weight: 600;
}
</style>