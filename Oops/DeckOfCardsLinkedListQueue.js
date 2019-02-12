/**************************************************************************
 * Execution        : Default node             cmd> node deckOfCardsQueue.js
 * @file            : deckOfCardsQueue.js
 * @overview        : To to create a Player Object having Deck of Cards, and
                      having ability to Sort by Rank and maintain the cards in a Queue implemented using
                      Linked List. Do not use any Collection Library. Further the Player are also arranged
                      in Queue. Finally Print the Player and the Cards received by each Player
 * @author          : Shreenidhi Sharma N  <shreenidhisharma7@gmail.com>
 * @version         : 1.0.
 * @since           : 09/02/2019
 ***************************************************************************/
var utilityOops = require("../Utility/UtilityOops");
var accessPlayer = require("../Utility/UtilityOops");
var utilityDs = require("../Utility/UtilityDS");

function main() 
{
  try 
  {
    var totalCards = utilityOops.deckOfCards();
    var player1Cards = [];
    var player2Cards = [];
    var player3Cards = [];
    var player4Cards = [];
    /**
     * Loop to distribute 13 cards from the total cards.
     */
    for (let player1 = 0; player1 < totalCards.length; player1++) 
    {
      if (player1 >= 0 && player1 < 13) 
       {
        player1Cards[player1] = totalCards[player1];
        }
       else if (player1 >= 13 && player1 < 26) 
       {
        player2Cards[player1 - 13] = totalCards[player1];
       } 
      else if (player1 >= 26 && player1 < 39) 
       {
        player3Cards[player1 - 26] = totalCards[player1];
       } 
      else 
       {
        player4Cards[player1 - 39] = totalCards[player1];
       }
    }
    /**
     * Create 4 player objects by passing 13 cards to each of them.
     */
    playerOne = new accessPlayer.Player(player1Cards);
    playerTwo = new accessPlayer.Player(player2Cards);
    playerThree = new accessPlayer.Player(player3Cards);
    playerFour = new accessPlayer.Player(player4Cards);
    /**
     * Invoke sortedCards function to get the sortedcards.
     */
    var sortedCards1 = playerOne.sortedCards();
    var sortedCards2 = playerTwo.sortedCards();
    var sortedCards3 = playerThree.sortedCards();
    var sortedCards4 = playerFour.sortedCards();
    /**
     * Create a new queue object which implements LinkedList.
     */
    var Queue = new utilityDs.Queue1();
    /**
     * Enqueue each set of sortedCards to the queue
     */
    Queue.enqueue(sortedCards1);
    Queue.enqueue(sortedCards2);
    Queue.enqueue(sortedCards3);
    Queue.enqueue(sortedCards4);
    /**
     * Dequeue the cards and print it to the console.
     */
    console.log("\nCards recieved by player 1 :" + Queue.dequeue());
    console.log("Cards recieved by player 2 :" + Queue.dequeue());
    console.log("Cards recieved by player 3 :" + Queue.dequeue());
    console.log("Cards recieved by player 4 :" + Queue.dequeue());
    console.log();
  } catch (error) 
  {
    console.log(error.message);
  }
}
main();