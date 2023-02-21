import classes from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import MyFriendsContainer from './components/MyFriends/MyFriendsСontainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
      <div className={classes.wrapper}>
        <Header />
        <Navigation />
        <MyFriendsContainer />
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer/>} />
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/users' element={<UsersContainer/>} />
        </Routes>
      </div>
  );
}

export default App;
