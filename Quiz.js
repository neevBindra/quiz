class Quiz{
    constructor(){}
    
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
      }

      update(state){
          database.ref('/').update({
              gameState:state
          })
      }

      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
          }
          question = new Que();
          question.display();
          allContestants = []
        }
      }

      play(){
        question.hide();
        contestant.getContestantInfo();
        background("yellow");
        textSize(20);
        text("RESULT!!");
        if(allContestants !== undefined){
          textSize(10);
          text("NOTE: Contastent who answered correctly is highlighted in green color")
          for(var contas in allContestants){
            var correctAns = "2";
            if(correctAns === allContestants[contas].answer){
              fill("green");
            }
            else{
              fill("red");
            }
          }
        }
      }


  
}