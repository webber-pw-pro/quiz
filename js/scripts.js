/*Vue.component('answer-card', {
	data: () => {
		return {
			cards: [
				{img: 'img/0011.png', title: 'Для себя/своего бизнеса, я предприниматель'},
				{img: 'img/0012.png', title: 'Для клиента, я маркетолог'}
			]
		}
	},
	template: '<div class="answer-container"> <div class="answer-wrap" v-for="card in cards"> <label class="answer-label"> <input class="answer__radio-input" type="radio" v-bind:value="card.title"> <div class="answer-block"> <span class="check"></span><img class="answer-img" v-bind:src="card.img" alt=""> <div class="answer-desc">{{card.title}}</div> </div> </label> </div></div>'
});*/

const vue = new Vue ({
	el: '#app',
	data: {
		show: false,
		page: 0,
    agree: null,
    name: '',
    email: '',
    phone: '',
    heading: ['Quiz', 'Choose your card', 'Choose your checkbox', 'Choose your radio', 'Select your option', 'Input your email', 'Input your phone', 'Quiz'],
    description: ['', 'Finish that quiz and get bonus for the next buy', 'Finish that quiz and get bonus for the next buy', 'Finish that quiz and get bonus for the next buy', 'Finish that quiz and get bonus for the next buy', 'Finish that quiz and get bonus for the next buy', 'Finish that quiz and get bonus for the next buy', 'The most simple way to sell a lot.'],
    hint: ['', 'choose one or more', 'choose one or more', '', '', '', '']
	}
});