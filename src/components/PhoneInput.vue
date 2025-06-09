<template>
  <div class="phone-input-wrapper">
    <select class="country-code-select" v-model="countryCode">
      <option v-for="country in countries" :key="country.value" :value="country.value" class="options">{{ country.code }}</option>
      <!-- Add more options as needed -->
    </select>
    <div class="phone-input">
        <input placeholder="Phone Number" v-model="phoneNumber" class="phone-input2"/>
        <button class="otp-button" @click="requestOtp" :class="{clicked: isClicked}">
            Request OTP
        </button>
    </div>
  </div>
</template>


<script>
import countries from '@/assets/json/countriesCode.json'

export default {
  name: 'PhoneInput',
  data() {
    return {
      countryCode: '+60',
      phoneNumber: '',
      isClicked: false,
      countries
    }
  },
  methods: {
    requestOtp() {
      alert(`Requesting OTP for ${this.countryCode} ${this.phoneNumber}`);
      this.isClicked = true;
    }
  }
}
</script>

<style scoped>
.options{
 color: black;
 size: 10pxs;
}
button{
  background: linear-gradient(180deg, #2379be, #103858);
}
button.clicked {
  background: #1c5c84;
}
.phone-input-wrapper {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
  width: 98%;
  margin-inline: auto;
}

.country-code-select {
  height: 34px;
  padding: 0.6rem 0.5rem;
  background-color: #206997;
  color: #CAE6FF;
  border-radius: 0.5rem 0 0 0.5rem;
  outline: none;
  border: #0C73C9 1px solid;
  font-size: 10px;
}

.phone-input {
  display:flex;
  background-color: #206997;
  color: #CAE6FF;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  outline: none;
  width: 100%;
  border: #0C73C9 1px solid;
}

.phone-input2 {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: #CAE6FF;
  font-size: 10px;
  outline: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 0.6rem 1rem;
  width: 75%;
}

.phone-input2::placeholder {
  color: #6FA4D3;
}

.phone-input:focus-within {
  box-shadow: 0 0 0 2px rgba(100, 149, 237, 0.5);
}

.country-code-select:focus{
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
  font-size: 6px;
  height: fit-content;
  margin-block: auto;
  margin-right: 5px;
  white-space: nowrap;
  z-index: 2;
}

.otp-button:hover {
  background-color: #1d4ed8;
}
@media (min-width: 768px) {
  .phone-input2 {
    width: 100%;
    font-size: 14px;
  }
  .country-code-select{
    font-size: 14px;
    height: auto;
  }
  .otp-button{
    font-size: x-small;
  }
}
@media (max-width: 425px){
    .phone-input-wrapper{
        width: 101%;
        margin-inline: auto;
    }
}
@media (max-width: 375px){
    .phone-input-wrapper{
        width: 102%;
        margin-inline: auto;
    }
}
@media (max-width: 320px){
    .phone-input-wrapper{
        width: 104%;
        margin-inline: auto;
    }
}
</style>

