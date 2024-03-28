import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};

const StudentDashboard: React.FC = () => {
  const [userName, setUserName] = useState('John Doe');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentGreeting = getGreeting();
    setGreeting(currentGreeting);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{greeting}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>Hello, {userName}!</Text>
      {/* Other dashboard content */}
    </View>
  );
};

export default StudentDashboard;
