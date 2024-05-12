import React from 'react';
import { useEffect } from "react";
import BootSplash from "react-native-bootsplash";
import Dsa from './src/Screens/Dsa';

function App() {
  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);



  return (
    <Dsa />
  );
}

export default App;
