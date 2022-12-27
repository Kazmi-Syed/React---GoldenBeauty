import { Route, Routes} from 'react-router-dom';
import { useState , useEffect } from 'react';
import HomePage from "./Pages/HomePage";
import RelaxationPage from "./Pages/RelaxationPage";
import NailsPage from "./Pages/NailsPage";
import WaxingPage from "./Pages/WaxingPage";
import ErrorPage from "./Pages/ErrorPage";
import ContactPage from "./Pages/ContactPage";
import SignUpForm from './Pages/SignUpPage';
import SignInForm from './Pages/SignInPage';
import Home from './Pages/LoggedinPage';

import getFirebase from './Services/Firebase';
import './assets/css/style.css'


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);


  return (
    <Routes>        
      <Route exact path='/' element= {<SignInForm />}/>
      <Route exact path='/home' element= {<Home currentUser={currentUser}/>}/>
      <Route exact path='/home2' element= {<HomePage />}/>
      <Route exact path='/contact' element= {<ContactPage />}/>
      <Route exact path='/relaxation' element= {<RelaxationPage />}/>
      <Route exact path='/waxing' element= {<WaxingPage />}/>
      <Route exact path='/nails' element= {<NailsPage />}/>
      <Route exact path='/signup' element= {<SignUpForm />}/>
      <Route exact path='*' element= {<ErrorPage />}/>
    
    </Routes>
  );
}

export default App;
