angular.module('monterailApp')
    .controller('MainCtrl', ['$scope', 'MainService', class MainCtrl {

        constructor($scope, MainService ){
            this.popupStatus = false;
            this.includePopup = "partials/popup.html";
            this.questions = MainService.getQuestions();
            this.activeQuestion = this.questions[0];
            this.users = MainService.getUsers();
            this.activeUserIndex = 0;
            this.questionsLimit = 3;
            this.addMoreQuestionsStatus = true;
            this.stringSearch = '';
            this.filterOptions = {
                "string": {question: ''},
                "all": {},
                "my_shelf": {my_shelf: true}
            };
            this.currentFilter = 'all';
            this.sortOrder = [];
            this.someVal = 0;
            this.init($scope);
        }

        init($scope) {
            this.getActiveUser();
            this.countItemsInQuestion($scope);
        }

        countItemsInQuestion($scope){
            $(document).ready(function(){
                let boxSize = $('.q-box__activities__items').eq(0).outerWidth();
                let itemSize = $('.q-box__activities__item').eq(0).outerWidth() + 20;
                let itemNumbers = Math.floor(boxSize / itemSize);
                if (window.matchMedia('(max-width: 660px)').matches) {
                    itemNumbers = itemNumbers - 1
                } else {
                    itemNumbers = itemNumbers - 2
                }
                $scope.$apply(function(){

                    $scope.ctrl.someVal = itemNumbers;
                });
            });


            $(window).resize(function(){
                let boxSize = $('.q-box__activities__items').eq(0).outerWidth();
                let itemSize = $('.q-box__activities__item').eq(0).outerWidth() + 20;
                let itemNumbers = Math.floor(boxSize / itemSize);
                if (window.matchMedia('(max-width: 660px)').matches) {
                    itemNumbers = itemNumbers - 1
                } else {
                    itemNumbers = itemNumbers - 2
                }
                $scope.$apply(function(){
                    $scope.ctrl.someVal = itemNumbers;
                });

            });
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

        closePopup(){
            this.popupStatus = false;
        }

        addMoreQuestions(){
            this.questionsLimit += 3;
            if( this.questionsLimit >= this.questions.length){
                this.addMoreQuestionsStatus = false;
            }
        }

        changeSorting( cond ){
            this.sortActiveClass = cond;

            if (cond == 'recent'){
                this.sortOrder = ['-when'];
                this.filterOptions['string'] = {};
            }
            else if (cond == 'hot'){
                this.sortOrder = ['-hot'];
                this.filterOptions['string'] = {};
            }
        }

        howManyLeft(commentsArr){
            return commentsArr.length;
        }

        setMobileOptionVal(){
            this.mobileOptions = !this.mobileOptions;
        }

        defaultClick(){
            alert('do something...');
        }

    }]);

