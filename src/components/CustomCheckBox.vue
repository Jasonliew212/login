<template>
    <label class="custom-checkbox">
        <input type="checkbox" :value="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
  name: 'CustomCheckBox',
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

<style>
.custom-checkbox {
  display: inline-block;
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  user-select: none;
}

/* Hide the default checkbox */
.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Custom box */
.custom-checkbox .checkmark {
  position: absolute;
  top: -7px;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

/* Show checkmark when checked */
.custom-checkbox input:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>