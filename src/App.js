import { useEffect } from 'react'
import './App.css';
import './custom.css';
import {useContext} from 'react';
import {ThemeContext} from './theme'



const App = () => {

  useEffect(() => {
    document.title = "Home | anetaBTC"
  }, [])
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (



      <header className="App-header" style = {{backgroundImage: theme.backgroundImage, color: theme.color, transition: theme.trans}}>
      <div className="nav1">
    <a href="/"><img className="logonav" src={theme.logo} /></a>
<img className="icontheme" onClick={toggleTheme} src={theme.sun} />
</div>
      <div className="grid_label">
    <div className="box1"><h1> Decentralized,<br /> On-Chain Wrapped Bitcoin.</h1>
    <p style = {{color: theme.label}}>Fully On-chain Bitcoin on Ergo and Cardano.</p>
    <div className="imgSet">
    <a href="https://discord.com/invite/ScXG76dJXM" class="active" style = {{filter: theme.imgconf1}}><img src={require("./static/imgphoto/discord.png")} /></a>
    <a href="https://twitter.com/anetaBTC" class="active" style = {{filter: theme.imgconf1}}><img src={require('./static/imgphoto/twitter.png')} /></a>
    <a href="https://medium.com/@anetaBTC" class="active" style = {{filter: theme.imgconf1}}><img src={require('./static/imgphoto/medium.png')} /></a>
    <a href="https://t.me/anetaBTC" class="active" style = {{filter: theme.imgconf1}}><img src={require('./static/imgphoto/telegram.png')} /></a>
    </div>

    </div>
    <div className="box2"><img src={require("./static/img/angel3.svg").default} /></div>
      </div>

      </header>


  );
}

export default App;
