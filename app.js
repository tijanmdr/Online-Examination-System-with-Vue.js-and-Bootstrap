new Vue({
    el: '.container',
    data: {
        sel: [],
        questions: []
    },
    mounted: function () {
        this.askQuestions();
        this.cssSelector();
    }, 
    methods: {
        askQuestions: function() {
            var questions = [
                {
                    id: 1,
                    question: 'What year is this?',
                    option1: '2015',
                    option2: '2014',
                    option3: '2016',
                    option4: '2017',
                    answer: '2016',
                    answered: ''
                },
                {
                    id: 2,
                    question: 'What month is this?',
                    option1: 'January',
                    option2: 'February',
                    option3: 'March',
                    option4: 'April',
                    answer: 'April',
                    answered: ''
                }
            ];

            this.questions = questions;
        }, 

        cssSelector: function () {
            var sel = {
                group: 'form-group',
                col: 'col-sm-3',
                btn: 'btn btn-primary'
            };

            this.sel = sel;
        },

        checkResult: function() {
            var modal = this.questions;
            var len = modal.length;
            var marks = 0;

            for (var i=0; i<len; i++) {
                if (modal[i].answered == modal[i].answer) {
                    console.log('Sucessful');

                    marks++;
                } else {
                    console.log('The correct answer is '+modal[i].answer);
                }
            }

            var per = (marks/len)*100;
            console.log('You scored '+per+'%');
        }
    }
});