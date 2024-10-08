import { registerRootComponent } from 'expo'; //(ChatGPT, OpenAI, 2024)
import Navigation from './navigation'; 

const App = () => {
  return (
    <Navigation />
    
  );
};

// Register the main component. (ChatGPT, OpenAI, 2024) - installation didnt inclue the app.js file, it was on Index.tsx which i didnt like.
registerRootComponent(App);
