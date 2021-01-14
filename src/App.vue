<template>
  <div>
    <app-start v-if="show == false" :show="show" @showTrue="show = $event" />
    <app-quiz v-if="show == true" :show="show" @showFalse="show = $event[0], page = $event[1]" />
  </div>

</template>

<script>
import Start from "./components/Start";
import Quiz from "./components/Quiz";

export default {
  name: 'app',
  data () {
    return {
      show: false,
    }
  },
  components: {
    appStart: Start,
    appQuiz: Quiz
  }
}
</script>

<style>

</style>
