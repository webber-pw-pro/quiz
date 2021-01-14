<template>
  <div class="row">
    <div class="col-lg-12 d-flex justify-content-center align-items-center" style="height: 100vh">

      <button type="button" class="btn btn-dark" @click="$emit('showTrue', true)">Пройдите тест</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  props: {
    show: Boolean
  }
}
</script>

<style scoped>

</style>
