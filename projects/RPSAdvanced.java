/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rps.advanced;

/**
 *
 * @author paulj
 */
public class RPSAdvanced {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int computer_score = 0;
       int user_score = 0;
       int input_value=4;
        int game_size = scanner.nextInt();
       System.out.println("Please enter an odd number for the game size:"); 
       while(user_score <(game_size/2)+1 || computer_score<(game_size/2)+1){
            System.out.println("Please type rock, paper, or scissors. And press enter. Chose wisely.");
            int computer_input = rnd.nextInt(3);
            String user_input = scanner.next();
            if(computer_input==0){
                System.out.println("Computer Chooses: Scissors!!!");
                if (user_input=="rock"){
                    input_value = 1;
                }
                    else if (user_input=="scissors"){
                    input_value=0;
                    }
                    else if (user_input=="paper"){
                    input_value=2;
                    }
                    else if(computer_input==input_value){
                    System.out.println("Draw! Here we go again: enter rock, paper, or scissors:");   
                    }
                    else if(computer_input==0 && input_value==2 || computer_input==1 && input_value==0 || computer_input==2 && input_value==1){
                    computer_score++;
                    System.out.println("Score: computer " + computer_score + ", you " + user_score);
                    }
                    else if(computer_input==2 && input_value==0 || computer_input==0 && input_value==1 || computer_input==1 && input_value==2){
                    user_score++;
                    System.out.println("Score: computer " + computer_score + ", you " + user_score);
                    }
                }
                else if(computer_input==1){
                    System.out.println("Computer Chooses: Rock!!!");
                    if (user_input=="rock"){
                    input_value = 1;
                }
                    else if (user_input=="scissors"){
                    input_value=0;
                    }
                    else if (user_input=="paper"){
                    input_value=2;
                    }
                if(computer_input==input_value){
                    System.out.println("Draw! Here we go again: enter rock, paper, or scissors:");   
                    }
                    else if(computer_input==0 && input_value==2 || computer_input==1 && input_value==0 || computer_input==2 && input_value==1){
                    computer_score++;
                    System.out.println("Score: computer " + computer_score + ", you " + user_score);
                    }
                    else if(computer_input==2 && input_value==0 || computer_input==0 && input_value==1 || computer_input==1 && input_value==2){
                    user_score++;
                    System.out.println("Score: computer " + computer_score + ", you " + user_score);
                    }
                }
                else if(computer_input==2){
                System.out.println("Computer Chooses: Paper!!!");
                if (user_input=="rock"){
                    input_value = 1;
                }
                    else if (user_input=="scissors"){
                    input_value=0;
                    }
                    else if (user_input=="paper"){
                    input_value=2;
                    }
                    if(computer_input==input_value){
                    System.out.println("Draw! Here we go again: enter rock, paper, or scissors:");   
                    }
                    else if(computer_input==0 && input_value==2 || computer_input==1 && input_value==0 || computer_input==2 && input_value==1){
                    computer_score++;
                    System.out.println("Score: computer " + computer_score + ", you " + user_score);
                    }
                    else if(computer_input==2 && input_value==0 || computer_input==0 && input_value==1 || computer_input==1 && input_value==2){
                    user_score++;
                    System.out.println("Score: computer " + computer_score + ", you " + user_score);
                    }
                }
                
               
            
                /*else{
                    System.out.println("Alright, it's either you don't know how to spell corectly, you are testing how smart this code is, or you are simply incompetent.");
                    System.out.println("Whatever it is, you need to put in another answer because I can't figure out what you are saying.");
                
                    System.out.println("Alright you caught me, this is just a simple program that doesn't know how to do autocorrect or anything really.");
                    System.out.println("I only know simple responses. So just enter in rock, paper, scissors so we can move on with our lives.");
                    System.out.println("Just kidding, neither of us have a life. I'm a computer so I don't have a life. ");
                    System.out.println("And for you, well, you are a human and you are playing this dumb rock, paper, scissors game.");
                    System.out.println("So why don't you go outside and lift a weight or something.");
                    System.out.println("Or just enter the correct answer. So here's you opportunity (don't dissapoint me):");
                }*/

    }
    
}
