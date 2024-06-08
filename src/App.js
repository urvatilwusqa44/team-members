
import './App.css';
import Header from './components/Header';
import Teammember from './components/Teammember';
import teamMembers from './components/TeammemberData';
function App() {
  
  return (
    <><Header />
    <Teammember teamMembers={teamMembers} /></>
  );
}

export default App;
