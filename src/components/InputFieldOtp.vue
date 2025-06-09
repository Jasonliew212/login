<template>
  <div class="input-wrapper">
    <input
      v-for="(digit, index) in otp"
      :key="index"
      :ref="setOtpRef"
      :type="type"
      v-model="otp[index]"
      @input="onInput($event, index)"
      @keydown.backspace="onBackspace($event, index)"
      maxlength="1"
      class="input-field"
    />
  </div>
</template>

<script>
export default {
  name: 'InputFieldOtp',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      otp: Array(6).fill(''),
      otpRefs: []
    };
  },
  mounted() {
    if (this.otpRefs[0]) {
      this.otpRefs[0].focus();
    }
  },
  watch: {
    otp: {
      deep: true,
      handler(newOtp) {
        this.$emit('update:modelValue', newOtp.join(''));
      }
    }
  },
  methods: {
    setOtpRef(el) {
      if (el && !this.otpRefs.includes(el)) {
        this.otpRefs.push(el)
      }
    },
    onInput(event, index) {
      const val = event.target.value
      if (!/^\d$/.test(val)) {
        this.otp[index] = ''
        return
      }

      this.otp[index] = val

      if (index < this.otpRefs.length - 1) {
        this.otpRefs[index + 1]?.focus()
      }
    },
    onBackspace(event, index) {
      if (this.otp[index] === '') {
        if (index > 0) {
          this.otpRefs[index - 1]?.focus()
        }
      }
    }
  }
};
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
  max-width: 50px;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: #CAE6FF;
  font-size: 14px;
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
@media(min-width:768px){
  .input-field{
    font-size: 18px;
  }
}
</style>
