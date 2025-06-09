<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  type: String,
  placeholder: String,
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 1rem;
}

.input-field {
  width: 90%;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 0.85rem;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.input-field-otp {
  width: 90%;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 0.85rem;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field::placeholder {
  color: rgba(139, 191, 214, 0.7);
}

.input-field:focus {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 2px rgba(100, 149, 237, 0.5);
}

</style>