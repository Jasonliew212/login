<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
    />
    <button class="otp-button" @click="requestOtp" :class="{clicked: isClicked}">
      Request OTP
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isClicked = ref(false)

const props = defineProps({
  modelValue: String,
  type: String,
  placeholder: String,
})
defineEmits(['update:modelValue'])

const requestOtp = () => {
  alert(`Requesting OTP for ${props.modelValue}`)
  isClicked.value = true
}
</script>

<style scoped>
button{
  background: linear-gradient(180deg, #2379be, #103858);
}
button.clicked{
  background: #1c5c84;
}

.input-wrapper {
  margin-bottom: 1rem;
  display: flex;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  width: 98%;
  margin-inline: auto;
}
@media (max-width: 425px){
  .input-wrapper{
    width: 101%;
    margin-inline: auto;
  }
}
@media (max-width: 375px){
  .input-wrapper{
    width: 102%;
    margin-inline: auto;
  }
}
@media (max-width: 320px){
  .input-wrapper{
    width: 104%;
    margin-inline: auto;
  }
}

.input-field {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: white;
  font-size: 0.85em;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 0.6rem 1rem;
  width: 75%;
}

.input-field::placeholder {
  color: rgba(139, 191, 214, 0.7);
}

.input-field:focus {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 2px rgba(100, 149, 237, 0.5);
}
.otp-button {
  padding-block: 8px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: x-small;
  height: fit-content;
  margin-block: auto;
  margin-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.otp-button:hover {
  background-color: #1d4ed8;
}

</style>