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
      {mode === 'Sign Up' && <SignUp />}
      {mode === 'Log In' && <Login />}
    </View>
    );
}

export default App;
