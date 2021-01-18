<template>
  <div class="row">
    <div class="col-lg-12">
        <div class="overlay">

          <form method="post" class="form" @submit.prevent="onSubmit">

            <button id="close" @click="showFalse" title="Close">
              <span class="span__close span_close_first"></span>
              <span class="span__close span_close_second"></span>
            </button>

            <div v-if="page == 0" class="h-100">
              <div class="row h-100">
                <div class="col-lg-6 bg-preload"></div>
                <div class="col-lg-6 d-flex flex-column justify-content-center">
                  <h1 class="px-5">{{quiz[page].heading}}</h1>
                  <p class="px-5">Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features, or fixing bugs.</p>
                  <button class="submit submit_start d-flex justify-content-center align-items-center mt-5" type="button" @click="page += 1">Start</button>
                </div>
              </div>

            </div>

            <div class="wrapper h-100 w-100" v-if="page > 0 && page < 6">
              <div class="row">
                <div class="col-lg-12">
                  <p class="description">{{quiz[page].description}}</p>
                  <hr>
                  <h1 class="mt-4">{{quiz[page].heading}}</h1>
                   <div class="hint" v-if="quiz[page].hint != ''">{{quiz[page].hint}}</div>
                </div>
              </div>

              <div class="row main">
                <div class="col-lg-12">
                  <div v-if="page == 1" class="h-100">
                    <div class="cards d-flex mt-3 h-100">
                      <label class="card h-100">
                        <input type="radio" class="input__radio_card" v-model="quiz[page].answer" name="radio_card" value="I’m a businessman" hidden>
                        <div class="radio_card_checked"></div>
                        <div class="card__img bg-preload"></div>
                        <div class="card__description d-flex align-items-center justify-content-center"><p>I’m a businessman</p></div>
                      </label>

                      <label class="card h-100 ml-5">
                        <input type="radio" class="input__radio_card" v-model="quiz[page].answer" name="radio_card" value="I’m a professional" hidden>
                        <div class="radio_card_checked"></div>
                        <div class="card__img bg-preload"></div>
                        <div class="card__description d-flex align-items-center justify-content-center"><p>I’m a freelancer</p></div>
                        </label>
                    </div>
                  </div>

                  <div v-if="page == 2">
                    <div class="row">
                      <div class="col-lg-6">
                        <label class="label label__checkbox" v-for="num of 3">

                          <input class="input__checkbox" type="checkbox" v-model="quiz[page].answer" :name="'checkbox_'+num" :value="'checkbox_'+num">
                          <div class="checkbox_checked"></div>
                          <p class="checkbox__text">Checkbox #{{ num }}</p>
                        </label>

                      </div>

                      <div class="col-lg-6">
                        <label class="label label__checkbox" v-for="num of 2">

                          <input class="input__checkbox" type="checkbox" v-model="quiz[page].answer" :name="'checkbox_'+ Number(num + 3)" :value="'checkbox_'+ Number(num + 3)">
                          <div class="checkbox_checked"></div>
                          <p class="checkbox__text">Checkbox #{{ num+3 }}</p>
                        </label>
                      </div>
                    </div>

                  </div>

                  <div v-if="page == 3">
                    <div class="row">
                      <div class="col-lg-6">
                        <label class="label label__radio" v-for="num of 2">
                          <input class="input__radio" type="radio" v-model="quiz[page].answer" name="radio_input" :value="'radio_'+num">
                          <div class="radio_checked"></div>
                          <p class="radio__text">Radio #{{ num }}</p>
                        </label>
                      </div>
                      <div class="col-lg-6">
                        <label class="label label__radio" v-for="num of 2">

                          <input class="input__radio" type="radio" v-model="quiz[page].answer" name="radio_input" :value="'radio_'+ Number(num + 2)">
                          <div class="radio_checked"></div>
                          <p class="radio__text">Radio #{{ num+2 }}</p>
                        </label>
                      </div>
                    </div>

                  </div>

                  <div v-if="page == 4">
                    <!-- <div class="row">
                      <div class="col-lg-12">

                      </div>
                    </div> -->
                    <select class="input select" type="text" v-model="quiz[page].answer" name="select" placeholder="Select your option">
                      <option value="IT">IT</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Government">Government</option>
                      <option value="Finance">Finance</option>
                      <option value="Law">Law</option>
                      <option value="PR">PR</option>
                    </select>
                  </div>

                  <div v-if="page == 5">
                    <input class="input input__text" v-model="quiz[page].answer" v-phone @input="inputValidate($event.target)" :class="custom.isError" type="tel" name="phone" placeholder="Input your phone">
                  </div>

                </div>
              </div>


              <div class="row" v-if="page > 0">
                <div class="col-lg-2 ml-auto">
                  <button ref="nextBtn" class="submit d-flex justify-content-center align-items-center mt-5" type="button" @click="page += 1">Next</button>
                </div>
              </div>
            </div>

            <div v-if="page == 6 && custom.isSubmit !== true" class="container">
              <div class="row w-100 h-100 m-auto">
                <div class="col-lg-7 padding_column_last d-flex justify-content-center flex-column">
                  <h1>{{quiz[page].heading}}</h1>
                  <p class="description">{{quiz[page].description}}</p>
                </div>
                <div class="col-lg-5 padding_column_last d-flex align-items-center flex-column justify-content-center">
                  <h2>Type your email</h2>
                  <input class="input input__text input_text_last" v-model="quiz[page].answer" type="email" name="last_email" placeholder="example@domain.com">
                  <button class="submit submit_last" type="submit" :disabled="custom.isDisabled">Open free account</button>
                  <label class="d-flex pt-4 justify-content-center align-content-center">
                    <input class="input__checkbox" type="checkbox" name="policy" @change="custom.isDisabled = !custom.isDisabled" required hidden>
                    <span class="checkbox_checked checkbox_checked_border checkbox_inline"></span>
                    <p class="text">Agree with Privacy Policy</p>
                  </label>
                </div>
              </div>
            </div>

            <div v-if="custom.isSubmit" class="container">
              <div class="row w-100 h-100 m-auto">
                <div class="col-lg-12 padding_column_last d-flex align-items-center flex-column justify-content-center">
                  <h2 class="text-center">Result</h2>
                  <div class="">
                    <div v-for="item of custom.result">
                      <p>{{ item }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>


    </div>
  </div>
</template>

<script>
import Checkbox from "./UI/Checkbox";

export default {
  name: "Quiz",
  components: {Checkbox},
  props: {
    show: Boolean
  },
  data() {
    return {
      page: 0,
      agree: null,
      custom: {
        isError: null,
        isDisabled: true,
        isSubmit: false,
        result: []
      },
      name: [],
      email: '',
      phone: '',
      quiz: [
          { heading: 'Quiz', description: '', hint: '', question: null, answer: null },
          { heading: 'Choose your card', description: 'Finish that quiz and get bonus for the next buy', hint: '', question: 'Card', answer: null },
          { heading: 'Choose your checkbox', description: 'Finish that quiz and get bonus for the next buy', hint: 'choose one or more', question: 'Checkbox', answer: [] },
          { heading: 'Choose your radio', description: 'Finish that quiz and get bonus for the next buy', hint: 'choose one', question: 'Radio', answer: null },
          { heading: 'Select your option', description: 'Finish that quiz and get bonus for the next buy', hint: '', question: 'Option', answer: 'IT' },
          { heading: 'Input your phone', description: 'Finish that quiz and get bonus for the next buy', hint: '', question: 'Phone', answer: null },
          { heading: 'Quiz', description: 'The most simple way to sell a lot.', hint: '', question: 'Email', answer: null }
      ]
    }
  },
  methods: {
    showFalse() {
      this.$emit('showFalse', [false, 0])
    },
    inputValidate(e) {
      if (e.value === '') {
        this.custom.isError = 'input_invalid'
        this.$refs.nextBtn.setAttribute("disabled", "disabled")
      } else {
        this.custom.isError = null
        this.$refs.nextBtn.removeAttribute("disabled")
      }
    },
    onSubmit() {
      this.custom.isSubmit = true

      this.quiz.map((item, index) => {
        if (index !== 0) {
          // console.log(item.question + ': ' + item.answer)

          if (typeof item.answer === 'object') {
            item.answer = item.answer.join(", ")
          }

          if (item.answer.length) {
            this.custom.result.push(item.question + ': ' + item.answer)
          }

        }
      })
    }
  }
}
</script>

<style scoped>

</style>
