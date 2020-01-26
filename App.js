import React, { useState } from 'react';
import { View } from 'react-native';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

const App = () => { 
  const [mode, setMode] = useState('Landing');
    return (
    <View>
      {mode === 'Landing' && <Landing setMode={setMode}/>}
      {mode === 'Sign Up' && <SignUp setMode={setMode} />}
      {mode === 'Log In' && <Login setMode={setMode} />}
    </View>
    );
}

export default App;
