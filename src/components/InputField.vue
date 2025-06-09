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

<script>
export default {
  name:'InputField',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 1rem;
}

.input-field {
  width: 90%;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  background-color: #206997;
  border: #0C73C9 1px solid;
  color: #CAE6FF;
  font-size: 10px;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field::placeholder {
  color: #6FA4D3;
}

.input-field:focus {
  background-color: #206997;
  box-shadow: 0 0 0 2px rgba(100, 149, 237, 0.5);
}

@media (min-width: 768px) {
  .input-field{
    font-size: 14px;
  }
}

</style>