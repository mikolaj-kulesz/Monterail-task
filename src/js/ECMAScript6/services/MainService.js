angular.module('monterailApp')
    .factory('MainService', [function(){
        return {
            getQuestions: function(){
                return [
                    {
                        question_id: 1,
                        question: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Eva',
                        author_id: 1,
                        author_photo_src: 'img/face_01.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate(),
                        hot: true,
                        my_shelf: true,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 2,
                        question: 'Nulla aliquam enim risus. Phasellus vulputate, risus sit amet dignissim aliquam?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Veronica',
                        author_id: 2,
                        author_photo_src: 'img/face_02.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate(),
                        hot: false,
                        my_shelf: true,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 3,
                        question: 'Cras accumsan eros tristique venenatis pharetra. Cras molestie mauris lacus, quis aliquam ?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Tom',
                        author_id: 3,
                        author_photo_src: 'img/face_03.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate() - 1,
                        hot: true,
                        my_shelf: false,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 4,
                        question: 'Mauris hendrerit scelerisque ultrices?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Brian',
                        author_id: 4,
                        author_photo_src: 'img/face_04.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate(),
                        hot: false,
                        my_shelf: false,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 5,
                        question: 'Nullam sed magna turpis. Nunc fringilla justo et sapien interdum fermentum?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Viki',
                        author_id: 5,
                        author_photo_src: 'img/face_05.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate() - 3,
                        hot: true,
                        my_shelf: false,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 6,
                        question: ' Aenean non dolor sit ame?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Tom',
                        author_id: 3,
                        author_photo_src: 'img/face_03.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate() - 4,
                        hot: false,
                        my_shelf: true,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 7,
                        question: 'Nam fermentum ante enim, vel egestas diam varius quis. Integer massa ligula?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Brian',
                        author_id: 4,
                        author_photo_src: 'img/face_04.png',
                        votes: 19,
                        when: new Date().getDate() - 7,
                        peers_involved: 2,
                        hot: true,
                        my_shelf: false,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 8,
                        question: 'Duis feugiat odio eu arcu suscipit, vitae accumsan purus venenatis?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Eva',
                        author_id: 1,
                        author_photo_src: 'img/face_01.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate() - 12,
                        hot: true,
                        my_shelf: true,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    },
                    {
                        question_id: 9,
                        question: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dapibus metus. Fusce et nulla commodo, ornare eros nec, tincidunt enim. Fusce pellentesque blandit tincidunt. Cras fringilla nulla eu enim ornare, ut sagittis sem mattis. Suspendisse ullamcorper odio dolor, at iaculis neque suscipit ultricies. Nam tortor tellus, congue et luctus eget, luctus ut libero. Vivamus non nunc orci. Fusce sit amet eleifend diam. Nam ornare tortor a interdum auctor. Pellentesque consectetur dui nulla, a elementum turpis gravida a. Nunc sagittis, massa vitae iaculis placerat, ante nulla consequat lacus, ac maximus dolor lacus sit amet tellus. Cras sodales viverra lectus, vitae ornare urna semper ac. Duis rhoncus ullamcorper purus. Nullam viverra molestie ante.',
                        author: 'Veronica',
                        author_id: 2,
                        author_photo_src: 'img/face_02.png',
                        votes: 19,
                        peers_involved: 2,
                        when: new Date().getDate() - 5,
                        hot: false,
                        my_shelf: false,
                        comments: [
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Tom',
                                author_id: 3,
                                author_photo_src: 'img/face_03.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: [
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Eva',
                                        author_id: 1,
                                        author_photo_src: 'img/face_01.png',
                                        votes: 9,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    },
                                    {
                                        text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                        author: 'Brian',
                                        author_id: 4,
                                        author_photo_src: 'img/face_04.png',
                                        votes: 7,
                                        when: 'yesterday',
                                        type: 'comment',
                                        sub_comments: []
                                    }
                                ]
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Veronica',
                                author_id: 2,
                                author_photo_src: 'img/face_02.png',
                                votes: 3,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Brian',
                                author_id: 4,
                                author_photo_src: 'img/face_04.png',
                                votes: 8,
                                when: 'yesterday',
                                type: 'comment',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Eva',
                                author_id: 1,
                                author_photo_src: 'img/face_01.png',
                                votes: 11,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            },
                            {
                                text: 'Integer vehicula egestas erat a lacinia. Mauris rhoncus purus non tellus ultricies, at blandit nisi mattis?',
                                author: 'Viki',
                                author_id: 5,
                                author_photo_src: 'img/face_05.png',
                                votes: 5,
                                when: 'yesterday',
                                type: 'discussion',
                                sub_comments: []
                            }
                        ]
                    }
                ];
            },

            getUsers: function() {
                return [
                    {
                        user_id: 1,
                        name: 'Eva',
                        user_photo_src: 'img/face_01.png',
                        member_for: '5 months',
                        last_seen: 'Saturday afternoon',
                        activity_level: 1,
                        peers: 46,
                        discussions: 29,
                        findings: 19,
                        questions: 3,
                        others: [
                            {
                                user_id: 2,
                                name: 'Veronica',
                                user_photo_src: 'img/face_02.png',
                            },
                            {
                                user_id: 4,
                                name: 'Brian',
                                user_photo_src: 'img/face_04.png',
                            }
                        ],
                        hot: {
                            user_id: 2,
                            name: 'Veronica',
                            user_photo_src: 'img/face_02.png',
                            found: 'Lorem ipsum dolor sit amet',
                            title: 'Lorem ipsum dolor sit amet',
                            peers: 6,
                            discussions: 3,
                            conversations: 3,
                            votes: 3
                        }
                    },
                    {
                        user_id: 2,
                        name: 'Veronica',
                        user_photo_src: 'img/face_02.png',
                        member_for: '7 months',
                        last_seen: 'Saturday afternoon',
                        activity_level: 2,
                        peers: 46,
                        discussions: 29,
                        findings: 19,
                        questions: 3,
                        others: [
                            {
                                user_id: 2,
                                name: 'Veronica',
                                user_photo_src: 'img/face_02.png',
                            },
                            {
                                user_id: 1,
                                name: 'Eva',
                                user_photo_src: 'img/face_01.png',
                            }

                        ],
                        hot: {
                            user_id: 1,
                            name: 'Eva',
                            user_photo_src: 'img/face_01.png',
                            found: 'Lorem ipsum dolor sit amet',
                            title: 'Lorem ipsum dolor sit amet',
                            peers: 6,
                            discussions: 2,
                            conversations: 1,
                            votes: 23
                        }
                    },
                    {
                        user_id: 3,
                        name: 'Tom',
                        user_photo_src: 'img/face_03.png',
                        member_for: '2 months',
                        last_seen: 'Saturday afternoon',
                        activity_level: 3,
                        peers: 1,
                        discussions: 2,
                        findings: 4,
                        questions: 7,
                        others: [
                            {
                                user_id: 1,
                                name: 'Eva',
                                user_photo_src: 'img/face_01.png',
                            },
                            {
                                user_id: 2,
                                name: 'Veronica',
                                user_photo_src: 'img/face_02.png',
                            },
                            {
                                user_id: 3,
                                name: 'Tom',
                                user_photo_src: 'img/face_03.png',
                            },
                        ],
                        hot: {
                            user_id: 4,
                            name: 'Brian',
                            user_photo_src: 'img/face_04.png',
                            found: 'Lorem ipsum dolor sit amet',
                            title: 'Lorem ipsum dolor sit amet',
                            peers: 6,
                            discussions: 3,
                            conversations: 3,
                            votes: 19
                        }
                    },
                    {
                        user_id: 4,
                        name: 'Brian',
                        user_photo_src: 'img/face_04.png',
                        member_for: '29 months',
                        last_seen: 'Saturday noon',
                        activity_level: 3,
                        peers: 1,
                        discussions: 2,
                        findings: 4,
                        questions: 7,
                        others: [
                            {
                                user_id: 1,
                                name: 'Eva',
                                user_photo_src: 'img/face_01.png',
                            }
                        ],
                        hot: {
                            user_id: 2,
                            name: 'Veronica',
                            user_photo_src: 'img/face_02.png',
                            found: 'Lorem ipsum dolor sit amet',
                            title: 'Lorem ipsum dolor sit amet',
                            peers: 1,
                            discussions: 1,
                            conversations: 3,
                            votes: 1
                        }
                    },
                    {
                        user_id: 5,
                        name: 'Viki',
                        user_photo_src: 'img/face_05.png',
                        member_for: '15 months',
                        last_seen: 'Saturday afternoon',
                        activity_level: 3,
                        peers: 1,
                        discussions: 2,
                        findings: 4,
                        questions: 7,
                        others: [
                            {
                                user_id: 1,
                                name: 'Eva',
                                user_photo_src: 'img/face_01.png',
                            }
                        ],
                        hot: {
                            user_id: 2,
                            name: 'Veronica',
                            user_photo_src: 'img/face_02.png',
                            found: 'Lorem ipsum dolor sit amet',
                            title: 'Lorem ipsum dolor sit amet',
                            peers: 1,
                            discussions: 1,
                            conversations: 3,
                            votes: 1
                        }
                    }
                ];
            }
        };
    }]);