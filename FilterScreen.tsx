//FilterScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { MenuContext, MenuItem } from './MenuContext';

const FilterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { menuItems } = useContext(MenuContext)!;
  const [selectedCourse, setSelectedCourse] = useState<string>('All');

  const filterMenuItems = (course: string) => {
    return course === 'All' ? menuItems : menuItems.filter(item => item.course === course);
  };

  const courses = ['All', 'Starters', 'Mains', 'Dessert'];

  return (
    <ImageBackground source={require('./assets/filterBackground.jpg')} style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>

      <View style={styles.filterContainer}>
        {courses.map(course => (
          <TouchableOpacity
            key={course}
            style={[styles.filterButton, selectedCourse === course && styles.selectedFilterButton]}
            onPress={() => setSelectedCourse(course)}
          >
            <Text style={styles.filterButtonText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filterMenuItems(selectedCourse)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={true}
      />

      {/* Back to Home button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  selectedFilterButton: {
    backgroundColor: '#007bff',
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterScreen;
