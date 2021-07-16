class DonutMaker {
    constructor(numDonuts, numAutoClickers, costOfAutoClicker, costOfMultiplier, numMultipliers) {
        this.numDonuts = 0;
        this.numAutoClickers = 0;;
        this.costOfAutoClicker = 33;
        this.costOfMultiplier = 10;
        this.numMultipliers = 0;
    }
        clickDonutButton() {
        this.numDonuts += 1 * this.getNumMultipliers();
    }
        buyAutoClicker() {
            this.numAutoClickers += 1;  
            this.subtractDonutsToBuyAutoClicker();
            this.increaseAutoClickerCost();
  
        }
    }
   
        buyDonutMultiplier() 
        {
            this.numMultipliers += 1; 
            this.subtractDonutsToBuyDonutMultiplier();
            this.increaseCostOfDonutMultiplier();
        }
        ;
   
    
export default DonutMaker;