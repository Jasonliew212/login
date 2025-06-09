<template>
  <div class="input-wrapper">
    <input
      v-for="(digit, index) in otp"
      :key="index"
      ref="otpRefs"
      :type="type"
      v-model="otp[index]"
      @input="onInput($event, index)"
      @keydown.backspace="onBackspace($event, index)"
      maxlength="1"
      class="input-field"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
})

const emit = defineEmits(['update:modelValue'])

// Array of 6 characters for the OTP digits
const otp = ref(Array(6).fill(''))
const otpRefs = ref([]) // Refs for each input field

// Update modelValue whenever any digit changes
watch(otp, (newOtp) => {
  emit('update:modelValue', newOtp.join(''))
})

// Autofocus on the first input when mounted
onMounted(() => {
  otpRefs.value[0]?.focus()
})

// Move focus and validate digit
function onInput(event, index) {
  const val = event.target.value

  // Only allow digits
  if (!/^\d$/.test(val)) {
    otp.value[index] = ''
    return
  }

  // Move to next input
  if (index < otpRefs.value.length - 1) {
    otpRefs.value[index + 1]?.focus()
  }
}

// Handle backspace
function onBackspace(event, index) {
  if (otp.value[index] === '') {
    if (index > 0) {
      otpRefs.value[index - 1]?.focus()
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  justify-content: space-between;
  gap: clamp(5px, 5px, 20px);
  margin-block: 0.5rem;
  width: 100%;
  max-width: 100%
}

.input-field {
  flex: 1;
  aspect-ratio: 1 / 1;
  min-width: 30px; /* Optional: cap max width */
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 0.85rem;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.input-field::placeholder {
  color: rgba(139, 191, 214, 0.7);
}

.input-field:focus {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 2px rgba(100, 149, 237, 0.5);
}
</style>
