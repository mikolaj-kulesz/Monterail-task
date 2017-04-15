angular.module('monterailApp')
    .controller('SingleCtrl', ['$routeParams', 'MainService', class SingleCtrl {

        constructor($routeParams, MainService) {
            this.popupStatus = false;
            this.includePopup = "partials/popup.html";
            this.questions = MainService.getQuestions();
            this.activeQuestion = '';
            this.getActiveQuestion($routeParams.ID);
            this.users = MainService.getUsers();
            this.activeUserIndex = 0;
        }

        getActiveQuestion(id){
            let indexes = $.map(this.questions, function(obj, index) {
                if(obj.question_id == id) {
                    return index;
                }
            });
            window.scrollTo(0, 0);
            var activeQuestionIndex = indexes[0];
            console.log(activeQuestionIndex);
            this.activeQuestion = this.questions[activeQuestionIndex];
        }

        votesUp(sq){
            ++sq.votes;
        }
        votesDown(sq){
            --sq.votes;
            if( sq.votes < 0){
                sq.votes = 0;
            }
        }

        showUser(id){
            let indexes = $.map(this.users, function(obj, index) {
                if(obj.user_id == id) {
                    return index;
                }
            })

            this.activeUserIndex = indexes[0];
            this.getActiveUser();
            this.popupStatus = true;
        }

        getActiveUser(){
            this.activeUser = this.users[this.activeUserIndex];
        }

        nextUser(){
            this.activeUserIndex = (++this.activeUserIndex % this.users.length);
            this.getActiveUser()
        }

        prevUser(){
            this.activeUserIndex = (--this.activeUserIndex % this.users.length);
            if (this.activeUserIndex < 0){
                this.activeUserIndex = this.users.length-1;
            }
            this.getActiveUser()
        }

        closePopup(){
            this.popupStatus = false;
        }

        defaultClick(){
            alert('do something...');
        }

    }]);

