import React, { useState } from 'react';
import { View } from 'react-native';
import Landing from './src/components/Landing/Landing';
import SignUp from './src/components/SignUp/SignUp';
import Login from './src/components/Login/Login';
import SignedIn from './src/components/SignedIn/SignedIn';

const App = () => { 
  const [mode, setMode] = useState('Landing');
  const [isSignedIn, setIsSignedIn ] = useState({
    firstname: '',
    signedIn: false
  });
    return (
    <View style={{backgroundColor: '#f6f6f6'}}>
      {mode === 'Landing' && <Landing setMode={setMode}/>}
      {mode === 'Sign Up' && <SignUp setMode={setMode} />}
      {mode === 'Log In' && 
      <Login 
      setMode={setMode} 
      isSignedIn={isSignedIn}
      setIsSignedIn={setIsSignedIn}
      />}
      {mode === 'SignedIn' && 
      <SignedIn 
      setMode={setMode} 
      isSignedIn={isSignedIn} 
      setIsSignedIn={setIsSignedIn}
      />}
    </View>
    );
}

export default App;
