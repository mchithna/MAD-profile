import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Top Header Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.content}>
        
        {/* Profile Picture Section */}
        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('./assets/avatar.png')}
              style={styles.avatar}
            />
            {/* Green Checkmark Badge */}
            <View style={styles.badgeContainer}>
              <Ionicons name="checkmark" size={22} color="#FFFFFF" />
            </View>
          </View>
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* User Information Details */}
        <View style={styles.detailsContainer}>
          
          {/* Name Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Name</Text>
            <Text style={styles.fieldValueText}>Diluka</Text>
          </View>

          {/* Email Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Email</Text>
            <View style={styles.iconRow}>
              <Ionicons name="mail" size={20} color="#000000" style={styles.fieldIcon} />
              <Text style={styles.fieldValueText}>mchithna@gmail.com</Text>
            </View>
          </View>

          {/* Points Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Points</Text>
            <View style={styles.iconRow}>
              <Ionicons name="star" size={20} color="#000000" style={styles.fieldIcon} />
              <Text style={styles.fieldValueText}>0</Text>
            </View>
          </View>

        </View>
      </View>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#000000',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  avatarWrapper: {
    position: 'relative',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#00E676', // Vibrant green color matching the UI badge
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  divider: {
    height: 1.5,
    backgroundColor: '#333333',
    marginVertical: 15,
    width: '100%',
  },
  detailsContainer: {
    marginTop: 10,
  },
  fieldGroup: {
    marginBottom: 24,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  fieldValueText: {
    fontSize: 15,
    color: '#333333',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldIcon: {
    marginRight: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    backgroundColor: '#000000',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // Android shadow
    shadowColor: '#000000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
