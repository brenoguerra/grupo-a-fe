<template>
  <v-text-field
    class="form-control"
    :id="id"
    :label="label"
    :placeholder="placeholder"
    v-model="inputValue"
    @keyup="textChange"
    @keydown.enter.prevent="typedEnter"
    outlined
    dense
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true
    },
    typedEnter: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    textChange() {
      this.$emit('change', this.inputValue)
    }
  },
}
</script>