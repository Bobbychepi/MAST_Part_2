import { registerRootComponent } from 'expo';
import Navigation from './navigation'; 

const App = () => {
  return (
    <Navigation />
    
  );
};

// Register the main component
registerRootComponent(App);
