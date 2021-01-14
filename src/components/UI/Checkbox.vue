<template>
  <label class="label label__checkbox">

    <input class="input__checkbox" type="checkbox" :name="'checkbox_'+count+reached" :value="'checkbox_'+count+reached">
    <div class="checkbox_checked"></div>
    <p class="checkbox__text">Checkbox #{{ count }}</p>
  </label>
</template>

<script>
export default {
name: "Checkbox",
  props: {
    count: Number,
    reached: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
