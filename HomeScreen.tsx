//HomeScreen.tsx
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MenuContext, MenuItem } from './MenuContext';

const CustomButton: React.FC<{ title: string; onPress: () => void }> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { menuItems, removeMenuItem } = useContext(MenuContext)!;
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [averagePrices, setAveragePrices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const calculateAveragePrices = () => {
      const courseGroups: { [key: string]: number[] } = {};

      menuItems.forEach(item => {
        if (!courseGroups[item.course]) {
          courseGroups[item.course] = [];
        }
        courseGroups[item.course].push(parseFloat(item.price));
      });

      const averages: { [key: string]: number } = {};
      for (const course in courseGroups) {
        const prices = courseGroups[course];
        averages[course] = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      }

      setAveragePrices(averages);
    };

    calculateAveragePrices();
  }, [menuItems]);

  const toggleItemSelection = (item: MenuItem) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isSelected = (item: MenuItem) => selectedItems.includes(item);

  const renderRightActions = (item: MenuItem) => {
    return (
      <TouchableOpacity onPress={() => removeMenuItem(item.dishName)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={require('./assets/homeBackground.jpg')} style={styles.container}>
      
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chef's Menu</Text>
      </View>

      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceTitle}>Average Prices by Course:</Text>
        {Object.entries(averagePrices).map(([course, avgPrice]) => (
          <Text key={course} style={styles.averagePriceText}>{course}: R{avgPrice.toFixed(2)}</Text>
        ))}
      </View>

      <View style={styles.totalItemsContainer}>
        <Text style={styles.totalItemsText}>Total Menu Items: {menuItems.length}</Text>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item)}>
            <TouchableOpacity 
              style={[styles.menuItem, isSelected(item) && styles.selectedMenuItem]}
              onPress={() => toggleItemSelection(item)}
            >
              <Text style={styles.dishName}>{item.dishName}</Text>
              <Text>{item.description}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Price: R{item.price}</Text>
            </TouchableOpacity>
          </Swipeable>
        )}
        showsVerticalScrollIndicator={true}
        style={styles.flatList}
      />
      
      <CustomButton title="Filter Menu by Course" onPress={() => navigation.navigate('Filter')} />
      <CustomButton title="Add Menu Item" onPress={() => navigation.navigate('AddMenu')} />
      <CustomButton 
        title="Proceed to Payment" 
        onPress={() => {
          if (selectedItems.length === 0) {
            alert('Please select at least one item before proceeding.');
          } else {
            navigation.navigate('Payment', { selectedItems });
          }
        }} 
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  averagePriceContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center'
  },
  averagePriceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  averagePriceText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  totalItemsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  totalItemsText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  menuItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  selectedMenuItem: {
    backgroundColor: '#d1e7dd',
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatList: {
    flexGrow: 1,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
