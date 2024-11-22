export const calculateAveragePrice = (menuItems) => {
  if (menuItems.length === 0) return 0;

  const total = menuItems.reduce((sum, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('R', '').replace(',', '')) 
      : item.price; 

    return sum + price;
  }, 0);

  return (total / menuItems.length).toFixed(2);
};


const MainMenu = [
  { name: "Beef Wellington", price: "R400" },
  { name: "Chicken Cordon Bleu", price: "R220" },
  { name: "Filet Mignon with Peppercorn Sauce", price: "R380" },
  { name: "Lobster Tail with Garlic Butter", price: "R450" },
  { name: "Duck Breast with Orange Glaze", price: "R300" },
  { name: "Roast Chicken with Lemon and Thyme", price: "R180" },
  { name: "Braised Short Ribs", price: "R320" },
  { name: "Vegetable Ratatouille", price: "R150" },
  { name: "Pan-Seared Sea Bass", price: "R290" },
  { name: "Pasta Primavera", price: "R170" },
  { name: "Osso Buco", price: "R350" },
  { name: "Mushroom-Stuffed Chicken Breast", price: "R240" },
  { name: "Shrimp Scampi", price: "R280" },
  { name: "Ribeye Steak with Chimichurri", price: "R360" },
  { name: "Spaghetti Carbonara", price: "R160" },
  { name: "Grilled Pork Chops with Apple Compote", price: "R220" },
  { name: "Roast Duck with Cherry Sauce", price: "R310" },
  { name: "Seafood Paella", price: "R320" },
  { name: "Eggplant Parmesan", price: "R160" },
  { name: "Moroccan Lamb Tagine", price: "R280" },
  { name: "Chicken Marsala", price: "R210" },
  { name: "Veal Piccata", price: "R320" },
  { name: "Stuffed Bell Peppers", price: "R180" },
  { name: "Salmon en Croûte", price: "R280" },
  { name: "Beef Stroganoff", price: "R230" },
  { name: "Peking Duck", price: "R400" },
  { name: "Lamb Shank with Rosemary", price: "R330" },
  { name: "Quinoa Salad with Roasted Vegetables", price: "R140" },
  { name: "Grilled Vegetable Skewers", price: "R130" },
  { name: "Wild Mushroom Risotto", price: "R180" },
  { name: "Spinach and Ricotta Stuffed Shells", price: "R170" }
];

const SidesMenu = [
  { name: "French Fries", price: "R25" },
  { name: "Garlic Mashed Potatoes", price: "R35" },
  { name: "Steamed Vegetables", price: "R30" },
  { name: "Coleslaw", price: "R20" },
  { name: "Onion Rings", price: "R30" },
  { name: "Caesar Salad", price: "R40" },
  { name: "Macaroni and Cheese", price: "R45" },
  { name: "Grilled Asparagus", price: "R35" },
  { name: "Sweet Potato Fries", price: "R30" },
  { name: "Garlic Bread", price: "R25" },
  { name: "Bruschetta", price: "R30" },
  { name: "Baked Potato with Sour Cream", price: "R40" },
  { name: "Spinach Salad", price: "R35" },
  { name: "Roasted Brussels Sprouts", price: "R45" },
  { name: "Corn on the Cob", price: "R25" },
  { name: "Rice Pilaf", price: "R30" },
];

const SpecialsMenu = [
  { name: "Grilled Lobster Tail", price: "R550" },
  { name: "Truffle Risotto", price: "R420" },
  { name: "Wagyu Steak", price: "R680" },
  { name: "Foie Gras", price: "R360" },
  { name: "Black Truffle Pasta", price: "R460" },
  { name: "Caviar Platter", price: "R800" },
  { name: "Gourmet Sushi", price: "R350" },
  { name: "Seared Ahi Tuna", price: "R310" },
  { name: "Filet Mignon with Truffle Butter", price: "R450" },
];

const StartersMenu = [
  { name: "Seared Scallops with Lemon Butter Sauce", price: 150 },
  { name: "Caprese Salad", price: 85 },
  { name: "Tomato Bruschetta", price: 65 },
  { name: "Garlic Shrimp", price: 120 },
  { name: "Stuffed Mushrooms", price: 90 },
  { name: "Beef Carpaccio", price: 140 },
  { name: "Baked Brie with Cranberry Chutney", price: 110 },
  { name: "Smoked Salmon Crostini", price: 135 },
  { name: "Fried Calamari", price: 130 },
  { name: "Mini Crab Cakes", price: 145 },
  { name: "Bacon-Wrapped Dates", price: 100 },
  { name: "Spinach and Artichoke Dip", price: 95 },
  { name: "Avocado Toast with Poached Egg", price: 75 },
  { name: "French Onion Soup", price: 85 },
  { name: "Deviled Eggs", price: 55 },
  { name: "Buffalo Chicken Wings", price: 105 },
  { name: "Prosciutto-Wrapped Asparagus", price: 125 },
  { name: "Hummus and Pita Platter", price: 80 },
  { name: "Charcuterie Board", price: 180 },
  { name: "Antipasto Skewers", price: 100 },
  { name: "Grilled Octopus", price: 155 },
  { name: "Tempura Vegetables", price: 70 },
  { name: "Mini Quiche Lorraine", price: 95 },
];

const DessertMenu = [
  { name: "Chocolate Lava Cake", price: "R100" },
  { name: "Cheesecake with Berry Sauce", price: "R120" },
  { name: "Tiramisu", price: "R90" },
  { name: "Panna Cotta with Caramel Sauce", price: "R85" },
  { name: "Crème Brûlée", price: "R110" },
  { name: "Apple Tart Tatin", price: "R95" },
  { name: "Vanilla Bean Ice Cream", price: "R60" },
  { name: "Lemon Meringue Pie", price: "R80" },
  { name: "Baklava", price: "75" },
  { name: "Chocolate Mousse", price: "R90" },
  { name: "Raspberry Sorbet", price: "R70" },
  { name: "Carrot Cake", price: "R85" },
  { name: "Fruit Tart", price: "R95" },
  { name: "Pavlova with Fresh Fruits", price: "R120" },
  { name: "Red Velvet Cupcake", price: "R60" },
  { name: "Peach Melba", price: "R90" },
  { name: "Mango Sticky Rice", price: "R80" },
  { name: "Coconut Pudding", price: "R70" },
  { name: "Brownie Sundae", price: "R100" },
  { name: "Profiteroles with Chocolate Sauce", price: "R110" }
];

const DrinksMenu = [
  { name: "Lemonade", price: "R20" },
  { name: "Iced Tea", price: "R25" },
  { name: "Coca-Cola", price: "R15" },
  { name: "Sparkling Water", price: "R30" },
  { name: "Fresh Orange Juice", price: "R35" },
  { name: "Apple Cider", price: "R40" },
  { name: "Craft Beer", price: "R50" },
  { name: "Red Wine", price: "R60" },
  { name: "White Wine", price: "R55" },
  { name: "Espresso", price: "R30" },
  { name: "Cappuccino", price: "R35" },
  { name: "Latte", price: "R40" },
  { name: "Hot Chocolate", price: "R45" },
  { name: "Smoothie", price: "R50" },
  { name: "Iced Coffee", price: "R40" }
];

const averageMainMenuPrice = calculateAveragePrice(MainMenu);
const averageSidesPrice = calculateAveragePrice(SidesMenu);
const averageSpecialsPrice = calculateAveragePrice(SpecialsMenu);
const averageStartersPrice = calculateAveragePrice(StartersMenu);
const averageDessertsPrice = calculateAveragePrice(DessertMenu);
const averageDrinksPrice = calculateAveragePrice(DrinksMenu);

console.log("Average Main Menu Price:", averageMainMenuPrice);
console.log("Average Sides Price:", averageSidesPrice);
console.log("Average Specials Price:", averageSpecialsPrice);
console.log("Average Starters Price:", averageStartersPrice);
console.log("Average Desserts Price:", averageDessertsPrice);
console.log("Average Drinks Price:", averageDrinksPrice);
