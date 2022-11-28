// Write your code here

/*In this lab, we are going to practice creating Object-Oriented classes and instances using JavaScript's class keyword. 
We are also going to use JavaScript's class constructor to instantiate data into a class. 
In other words, we're going to create a class, and then put some data in it. */

// 1 - Create a class for Breakfast. Breakfast will have a constructor with a food and a drink.
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  // 2 - Create a class for Lunch. Lunch will have a constructor with a salad, a soup, and a drink.
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  
  // 3 - Create a class for Dinner. Since dinner is a little bit fancier, Dinner will have a constructor with salad, soup, entree, and dessert. 
  //Initialize dessert as a private property by prefixing its name with the hash symbol (#).

  class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
      
    }
  }