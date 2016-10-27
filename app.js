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
                },
                {
                    id: 3,
                    question: 'Earth is ........... planet.',
                    option1: 'First',
                    option2: 'Second',
                    option3: 'Third',
                    option4: 'Fourth',
                    answer: 'Third',
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

        checkResult: function(event) {
            var modal = this.questions;
            var len = modal.length;
            var marks = 0;

            for (var i=0; i<len; i++) {
                if(modal[i].answered != '') {
                    if (modal[i].answered == modal[i].answer) {
                        marks++;
                    } else {

                    }
                } else if(modal[i].answered == '') {
                    alert('Please answer all the question '+modal[i].id);
                    return;
                }
            }
            var per = (marks/len)*100;
            alert('You scored '+per+'%');
        }
    }
});
