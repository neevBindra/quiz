class Que{
    constructor(){
        this.input = createInput("NAME");
        this.input2 = createInput("ENTER YOUR ANSWER");
        this.button = createButton('Submit');
         this.title = createElement('h1')
         // questions
         this.que1 = createElement('h3')
     
         // options
         this.option1 = createElement('h3')
         this.option2= createElement('h3')
         this.option3 = createElement('h3')
         this.option4 = createElement('h3')
    }

    hide(){
        this.input.hide();
        this.input2.hide();
    }

    display(){

        this.title.html("QUIZ");
        this.title.position(250,20);

        this.que1.html("Question: Which starts and end with the letter 'E' but has only one letter ");
        this.que1.position(150,80);

        this.option1.html("1: Everyone");
        this.option1.position(150,100);

        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.option3.html("3: Estimate");
        this.option3.position(150,140);

        this.option4.html("4: Example");
        this.option4.position(150,160);

        this.input.position(160,230)
        this.button.position(240,280);
        this.input2.position(390,230);

        this.button.mousePressed(()=>{
        this.input.hide();
        this.input2.hide();
        this.button.hide(); 
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index =  contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        })

    }
}