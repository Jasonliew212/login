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

<script>
export default {
  name: 'EmailInput',
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
  emits: ['update:modelValue'],
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    requestOtp() {
      alert(`Requesting OTP for ${this.modelValue}`);
      this.isClicked = true;
    }
  }
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
  background-color: #206997;
  border: #0C73C9 1px solid;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  width: 98%;
  margin-inline: auto;
}

.input-field {
  background-color: #206997;
  border: none;
  color: #CAE6FF;
  font-size: 10px;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 0.6rem 1rem;
  width: 75%;
}

.input-field::placeholder {
  color: #6FA4D3;
}

.input-wrapper:focus-within {
  box-shadow: 0 0 0 2px rgba(100, 149, 237, 0.5);
}
.otp-button {
  padding-block: 8px;
  background-color: #1c5c84;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 6px;
  height: fit-content;
  margin-block: auto;
  margin-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 2;
}

.otp-button:hover {
  background-color: #1c5c84;
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
@media(min-width: 768px){
  .input-field{
    font-size: 14px;
  }
  .otp-button{
    font-size: x-small;
  }
}

</style>