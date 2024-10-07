import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation'; 

const App = () => {
  return (
      <Navigation />
  );
};

// Register the main component
registerRootComponent(App);
