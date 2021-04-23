"use strict";

  window.onload = function() {
  
      var quiz = {
          title: 'Front-End Quiz?',
  
          questions: [{
                  text: "What is HTML5?",
                  responses: [{
                          text: 'Programming Language',
                        
                      },
                      {
                          text: 'Scripting Language',
                          
                      },
                      {
                          text: 'Markup Language',  value: 1
                          
                      }
                  ]
              },
              {
                  text: "What is CSS?",
                  responses: [{
                          
                          text: ' Styling Language', value: 1
                      },
                      {
                          text: 'Bootstrap Framework',
                      
                      },
                      {
                          text: 'Hypertext Processor',
                       
                        
                      }
                  ]
              },
              {
                  text: "What is Javascript?",
                  responses: [{
                          text: 'Scripting Language',
                          value: 1
                        
                      },
                      {
                          text: 'Markup Language',
                        
                      },
                      {
                          text: 'Computer Programming Language',
                         
                         
                      }
                  ]
              },
              {
                  text: "What is Vue.Js?",
                  responses: [{
                          text: 'JavaScript Framework',  value: 1
                      },
                      {
                          text: 'CSS3 Framework',
                    
                      },
                      {
                          text: 'PHP Framework',
                        
                         
                      }
                  ]
              },
              {
                  text: "What is Bootstrap?",
                  responses: [{
                          text: 'CSS3 Framework', value: 1
                   
                      },
                      {
                          text: 'Javascript Framework',
                       
                      },
                      {
                          text: 'PHP Framework',
                          
                       
                      }
                  ]
              },
          ]
      };
  

   const app =  Vue.createApp({
       data(){
       return {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
       }
        },
        methods: {
            // Go to next question
            next: function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
       });
       app.mount('#app');
}
