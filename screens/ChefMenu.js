import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, SafeAreaView, StatusBar, TextInput,} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const startersMenu = [
  { name: "Seared Scallops with Lemon Butter Sauce", price: 150, description: "Tender scallops seared to perfection, served with a rich lemon butter sauce and a touch of garlic." },
  { name: "Caprese Salad", price: 85, description: "Fresh mozzarella, ripe tomatoes, and fragrant basil drizzled with a balsamic glaze." },
  { name: "Tomato Bruschetta", price: 65, description: "Crisp toasted bread topped with marinated tomatoes, garlic, and basil, finished with a drizzle of olive oil." },
  { name: "Garlic Shrimp", price: 120, description: "Succulent shrimp sautéed in garlic butter with a hint of white wine and lemon for a zesty finish." },
  { name: "Stuffed Mushrooms", price: 90, description: "Baked mushrooms stuffed with breadcrumbs, herbs, and parmesan, topped with melted mozzarella." },
  { name: "Beef Carpaccio", price: 140, description: "Thinly sliced beef drizzled with olive oil, lemon, and capers, served with arugula and parmesan." },
  { name: "Baked Brie with Cranberry Chutney", price: 110, description: "Warm, creamy brie paired with sweet and tart cranberry chutney, served with toasted bread." },
  { name: "Smoked Salmon Crostini", price: 135, description: "Crispy crostini topped with silky smoked salmon, cream cheese, and a sprinkle of fresh dill." },
  { name: "Fried Calamari", price: 130, description: "Lightly battered and fried calamari served with a zesty marinara dipping sauce." },
  { name: "Mini Crab Cakes", price: 145, description: "Crispy crab cakes packed with lump crabmeat, served with a tangy remoulade sauce." },
  { name: "Bacon-Wrapped Dates", price: 100, description: "Sweet dates wrapped in smoky bacon, offering a perfect balance of savory and sweet." },
  { name: "Spinach and Artichoke Dip", price: 95, description: "Creamy spinach and artichoke dip served with warm pita bread for dipping." },
  { name: "Avocado Toast with Poached Egg", price: 75, description: "Creamy avocado spread on toasted bread, topped with a perfectly poached egg." },
  { name: "French Onion Soup", price: 85, description: "Rich beef broth with caramelized onions, topped with a crusty bread and melted cheese." },
  { name: "Deviled Eggs", price: 55, description: "Classic deviled eggs with a smooth, tangy filling, garnished with paprika." },
  { name: "Buffalo Chicken Wings", price: 105, description: "Crispy wings tossed in spicy buffalo sauce, served with celery sticks and blue cheese dip." },
  { name: "Prosciutto-Wrapped Asparagus", price: 125, description: "Tender asparagus spears wrapped in salty prosciutto and lightly grilled." },
  { name: "Hummus and Pita Platter", price: 80, description: "Smooth and creamy hummus served with warm, fluffy pita bread." },
  { name: "Charcuterie Board", price: 180, description: "An assortment of cured meats, cheeses, olives, and crackers for a perfect sharing platter." },
  { name: "Antipasto Skewers", price: 100, description: "A delightful mix of olives, mozzarella, tomatoes, and cured meats on skewers." },
  { name: "Grilled Octopus", price: 155, description: "Char-grilled octopus served with a citrus-herb dressing and roasted potatoes." },
  { name: "Tempura Vegetables", price: 70, description: "Crispy tempura-battered vegetables served with a light soy dipping sauce." },
  { name: "Mini Quiche Lorraine", price: 95, description: "Flaky pastry filled with a savory custard of bacon, cheese, and onions." }
];
//23 items

const MainMenu = [
  { name: "Beef Wellington", price: 400, description: "A succulent beef tenderloin wrapped in puff pastry, served with a rich mushroom duxelles and red wine sauce." },
  { name: "Chicken Cordon Bleu", price: 220, description: "Crispy breaded chicken stuffed with ham and Swiss cheese, topped with a creamy mustard sauce." },
  { name: "Filet Mignon with Peppercorn Sauce", price: 380, description: "Tender filet mignon cooked to perfection, served with a flavorful green peppercorn sauce." },
  { name: "Lobster Tail with Garlic Butter", price: 450, description: "Juicy lobster tails brushed with garlic butter and grilled to golden perfection." },
  { name: "Duck Breast with Orange Glaze", price: 300, description: "Seared duck breast with a zesty orange glaze, served with roasted vegetables." },
  { name: "Roast Chicken with Lemon and Thyme", price: 180, description: "Juicy roast chicken infused with lemon and fresh thyme, served with pan gravy." },
  { name: "Braised Short Ribs", price: 320, description: "Slow-cooked short ribs, fall-off-the-bone tender, in a rich red wine reduction." },
  { name: "Vegetable Ratatouille", price: 150, description: "A medley of fresh vegetables, slow-cooked in tomato sauce, topped with herbs." },
  { name: "Pan-Seared Sea Bass", price: 290, description: "Delicate sea bass seared to golden perfection, served with a lemon caper sauce." },
  { name: "Pasta Primavera", price: 170, description: "A vibrant pasta dish tossed with fresh seasonal vegetables in a light olive oil sauce." },
  { name: "Osso Buco", price: 350, description: "Braised veal shanks cooked with tomatoes and white wine, served with gremolata." },
  { name: "Mushroom-Stuffed Chicken Breast", price: 240, description: "Juicy chicken breast stuffed with sautéed mushrooms and herbs, served with creamy sauce." },
  { name: "Shrimp Scampi", price: 280, description: "Succulent shrimp sautéed in garlic, lemon, and butter, served over linguine." },
  { name: "Ribeye Steak with Chimichurri", price: 360, description: "Grilled ribeye steak topped with a vibrant chimichurri sauce, served with roasted potatoes." },
  { name: "Spaghetti Carbonara", price: 160, description: "Classic Italian pasta dish with creamy egg sauce, pancetta, and Parmesan cheese." },
  { name: "Grilled Pork Chops with Apple Compote", price: 220, description: "Juicy pork chops grilled and topped with a sweet and savory apple compote." },
  { name: "Roast Duck with Cherry Sauce", price: 310, description: "Roasted duck breast paired with a rich cherry sauce, served with root vegetables." },
  { name: "Seafood Paella", price: 320, description: "A Spanish classic with saffron rice, shrimp, mussels, and calamari." },
  { name: "Eggplant Parmesan", price: 160, description: "Layers of breaded eggplant, marinara sauce, and mozzarella cheese, baked to perfection." },
  { name: "Moroccan Lamb Tagine", price: 280, description: "Slow-cooked lamb simmered with apricots, almonds, and aromatic Moroccan spices." },
  { name: "Chicken Marsala", price: 210, description: "Pan-seared chicken breast in a rich Marsala wine and mushroom sauce." },
  { name: "Veal Piccata", price: 320, description: "Tender veal scallopini served with a tangy lemon and caper sauce." },
  { name: "Stuffed Bell Peppers", price: 180, description: "Bell peppers stuffed with a hearty mix of rice, ground beef, and herbs." },
  { name: "Salmon en Croûte", price: 280, description: "Salmon fillet wrapped in puff pastry, baked with a spinach and cream cheese filling." },
  { name: "Beef Stroganoff", price: 230, description: "Sliced beef simmered in a creamy mushroom sauce, served over egg noodles." },
  { name: "Peking Duck", price: 400, description: "Crispy roasted duck served with pancakes, hoisin sauce, and sliced scallions." },
  { name: "Lamb Shank with Rosemary", price: 330, description: "Braised lamb shank with rosemary and red wine, served with mashed potatoes." },
  { name: "Quinoa Salad with Roasted Vegetables", price: 150, description: "Nutritious quinoa tossed with roasted seasonal vegetables and a light vinaigrette." }
];
//28 Items

const DessertMenu = [
  { name: "Chocolate Lava Cake", price: 85, description: "Decadent molten chocolate cake served with vanilla ice cream." },
  { name: "Tiramisu", price: 80, description: "Classic Italian dessert layered with coffee-soaked ladyfingers and mascarpone cheese." },
  { name: "New York Cheesecake", price: 90, description: "Creamy cheesecake with a graham cracker crust, served with fresh berries." },
  { name: "Panna Cotta", price: 70, description: "Silky smooth Italian custard topped with berry compote." },
  { name: "Fruit Tart", price: 75, description: "Crispy tart shell filled with pastry cream and topped with fresh seasonal fruits." },
  { name: "Crème Brûlée", price: 80, description: "Rich custard dessert with a caramelized sugar crust." },
  { name: "Apple Pie à la Mode", price: 75, description: "Warm apple pie served with a scoop of vanilla ice cream." },
  { name: "Lemon Meringue Pie", price: 70, description: "Tangy lemon filling topped with fluffy meringue." },
  { name: "Banoffee Pie", price: 85, description: "Delicious dessert with layers of banana, toffee, and whipped cream." },
  { name: "Chocolate Mousse", price: 80, description: "Light and airy chocolate mousse served with whipped cream." },
  { name: "Carrot Cake", price: 70, description: "Moist carrot cake topped with cream cheese frosting." },
  { name: "Profiteroles", price: 75, description: "Choux pastry filled with cream and topped with chocolate sauce." },
  { name: "Pavlova", price: 80, description: "Crispy meringue topped with whipped cream and fresh fruits." },
  { name: "Baked Alaska", price: 95, description: "Ice cream cake covered with meringue and baked to perfection." },
  { name: "Raspberry Sorbet", price: 65, description: "Refreshing raspberry sorbet served in a chilled glass." },
  { name: "Sticky Toffee Pudding", price: 80, description: "Warm pudding served with rich toffee sauce and vanilla ice cream." },
  { name: "Cheese Plate", price: 90, description: "Assortment of fine cheeses served with crackers and fruits." },
  { name: "Mango Sticky Rice", price: 75, description: "Sweet sticky rice topped with fresh mango slices and coconut milk." },
  { name: "Chocolate Covered Strawberries", price: 60, description: "Fresh strawberries dipped in rich chocolate." },
  { name: "Churros with Chocolate Sauce", price: 70, description: "Crispy churros dusted with sugar and served with chocolate dipping sauce." },
  { name: "Zuccotto", price: 85, description: "Italian cake filled with chocolate and whipped cream, shaped like a dome." },
  { name: "Key Lime Pie", price: 75, description: "Tangy key lime filling in a graham cracker crust topped with whipped cream." }
];
//23 items

const ChefsMenuScreen = ({ navigation }) => {
  const [starters, setStarters] = useState([]);
  const [mains, setMains] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCourse, setCurrentCourse] = useState('Starters');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddItem = () => {
    if (selectedItem) {
      // Ran into a lot of errors while making this part.. Had to ask A.i to assist with the error handling
      const existingItems = currentCourse === 'Starters' ? starters : currentCourse === 'Main' ? mains : desserts;
      const itemExists = existingItems.some(item => item.name === selectedItem.name);

      if (!itemExists) {
        switch (currentCourse) {
          case 'Starters':
            setStarters([...starters, selectedItem]);
            console.log(`Added Starter: ${selectedItem.name}`);
            break;
          case 'Main':
            setMains([...mains, selectedItem]);
            console.log(`Added Main: ${selectedItem.name}`);
            break;
          case 'Dessert':
            setDesserts([...desserts, selectedItem]);
            console.log(`Added Dessert: ${selectedItem.name}`);
            break;
        }
      } else {
        console.log(`${selectedItem.name} is already in the selected ${currentCourse}.`);
      }
    }
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleClearAll = () => {
    setStarters([]);
    setMains([]);
    setDesserts([]);
    setSearchQuery('');
    console.log("Cleared all selections."); //AI helped me with a new concept called logging that i just learnt
  };

  // Function to reset all state variables and navigate to home
  const handleAddToCart = () => {
    const total = calculateTotal();
    console.log(`Total to add to cart: R${total}`);
    setStarters([]);
    setMains([]);
    setDesserts([]);
    setSearchQuery('');
    navigation.navigate('Home');
  };

  const calculateTotal = () => {
    const totalStarters = starters.reduce((sum, item) => sum + item.price, 0);
    const totalMains = mains.reduce((sum, item) => sum + item.price, 0);
    const totalDesserts = desserts.reduce((sum, item) => sum + item.price, 0);
    return totalStarters + totalMains + totalDesserts;
  };

  const filteredMenu = (menu) => {
    return menu.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const renderMenuSection = (title, items, course) => (
    <View style={styles.section}>
      <Text style={styles.courseHeader}>{title}</Text>
      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noItemsText}>No {title.toLowerCase()} selected.</Text>
      )}
      <TouchableOpacity style={styles.addButton} onPress={() => { setCurrentCourse(course); setModalVisible(true); }}>
        <Text style={styles.addButtonText}>Add {title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Chef's Menu</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search meals..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[
          { title: 'Starters', items: filteredMenu(starters), course: 'Starters' },
          { title: 'Main Courses', items: filteredMenu(mains), course: 'Main' },
          { title: 'Desserts', items: filteredMenu(desserts), course: 'Dessert' },
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => renderMenuSection(item.title, item.items, item.course)}
        ListFooterComponent={<Text style={styles.total}>Total: R{calculateTotal()}</Text>}
      />

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Select {currentCourse}</Text>
          <Picker
            selectedValue={selectedItem}
            onValueChange={(itemValue) => setSelectedItem(itemValue)}
            style={styles.picker}
          >
            {(currentCourse === 'Starters' ? startersMenu : currentCourse === 'Main' ? MainMenu : DessertMenu)
              .map((item, index) => (
                <Picker.Item key={index} label={`${item.name} - R${item.price}`} value={item} />
              ))}
          </Picker>
          {selectedItem && (
            <Text style={styles.itemDescription}>{selectedItem.description}</Text>
          )}
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={handleAddItem}>
              <Text style={styles.modalButtonText}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
  },
  noItemsText: {
    color: '#777',
    textAlign: 'center',
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 20,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  picker: {
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  itemDescription: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ChefsMenuScreen;
