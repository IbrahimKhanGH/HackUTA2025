import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Expo icons

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>USER NAME</Text>
        <Text style={styles.subText}>EMERGENCY ALERTS HERE</Text>
      </View>
      
      <View style={styles.alertCard}>
        <Text style={styles.alertText}>15 % chance of <Text style={styles.highlight}>Thunderstorm</Text></Text>
        <Text style={styles.alertText}>20 % chance of <Text style={styles.highlight}>Flood</Text></Text>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={20} color="#fff" />
          <Text style={styles.locationText}>LOCATION HERE</Text>
          <Text style={styles.tempText}>TEMPRATURE°</Text>
        </View>
      </View>

      <View style={styles.searchSection}>
        <Text style={styles.sectionTitle}>Are you facing an emergency?</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search disaster"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Thunderstorm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Flood</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.createSection}>
        <Text style={styles.sectionTitle}>Create your own</Text>
        <View style={styles.createButtons}>
          <TouchableOpacity style={styles.createButton}>
            <Ionicons name="briefcase-outline" size={30} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton}>
            <Ionicons name="map-outline" size={30} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  header: {
    marginVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  alertCard: {
    backgroundColor: '#2c3e50',
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
  },
  alertText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  highlight: {
    color: '#f1c40f',
    fontWeight: 'bold',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
  },
  tempText: {
    color: '#fff',
    fontSize: 14,
  },
  searchSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#dfe6e9',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
  createSection: {
    marginVertical: 20,
  },
  createButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createButton: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default HomePage;
