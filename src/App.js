import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import AddService from './Components/Dashboard/AddService/AddService';
import AddReviews from './Components/Dashboard/AddReviews/AddReviews';
import Book from './Components/Dashboard/Book/Book';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import ManageAdmin from './Components/Dashboard/ManageAdmin/ManageAdmin';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
             
              <PrivateRoute exact path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute exact path="/dashboard/addservice">
                <AddService />
              </PrivateRoute>
              <PrivateRoute exact path="/dashboard/addreviews">
                <AddReviews />
              </PrivateRoute>

              <PrivateRoute exact path="/dashboard/bookinglist">
                <BookingList />
              </PrivateRoute>

              <PrivateRoute exact path="/dashboard/manageadmin">
                <ManageAdmin />
              </PrivateRoute>

              <PrivateRoute exact path="/dashboard/addAdmin">
                <AddAdmin />
              </PrivateRoute>
              
              <PrivateRoute exact path="/dashboard/book/:_id">
                <Book/>
              </PrivateRoute>

              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
   
  );
}

export default App;
