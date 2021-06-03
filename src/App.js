import Shortcut from "./components/Shortcut";
import '../src/styles/Shortcut.css'
import Web from "./components/Web";
import netflix from '../src/assets/netflix.png'
import Clock from "./components/Clock";
import Twitch from "./components/Twitch";

function App() {
  return (
    <div className="App">
      <main className="main_app">
        <Clock></Clock>
        <section className="web_container">
          <Web></Web>
        </section>
        <section className="shortcut_container">
          <Shortcut link="https://twitter.com/home?lang=fr" color="#1DA1F2" logo={<i className="fab fa-twitter"></i>} name="Twitter"></Shortcut>
          <Shortcut link="https://www.youtube.com/feed/subscriptions" color="#FF0000" logo={<i className="fab fa-youtube"></i>} name="Youtube"></Shortcut>
          <Shortcut link="https://www.twitch.tv/directory/following" color="#9147FF" logo={<i className="fab fa-twitch"></i>} name="Twitch"></Shortcut>
          <Shortcut link="https://www.oxtorrent.co/" color="#fff" logo={<i className="fas fa-stop-circle"></i>} name="OxTorrent"></Shortcut>
          <Shortcut link="https://www.facebook.com/" color="#1877F2" logo={<i className="fab fa-facebook"></i>} name="Facebook"></Shortcut>
          <Shortcut link="https://www.netflix.com/browse" color="#fff" logo={<img className="shortcut_image" src={netflix}></img>} name="Netflix"></Shortcut>
        </section>
        <Twitch></Twitch>
      </main>
    </div>
  );
}

export default App;
