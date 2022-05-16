
import {Logo,Menu,Button} from './component/navbar'
import './App.css'
const l2 = "Projects"
function App() {
  return (
    <div className="navbar">
     
        <Logo/>
        <Menu l1="Services" l2={l2} l3="About"/>
        <Button/>
    
    </div>
  );
}

export default App;
