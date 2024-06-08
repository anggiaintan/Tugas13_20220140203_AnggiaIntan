import newLogo from './images/new-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={newLogo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <p>
          Ini adalah modifikasi dari React saya
        </p>
        <h2 className="App-subheader">Learn and Enjoy</h2>
        <a
          className="App-link btn btn-primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Kenapa kucing?</h2>
            <p>
            Kucing adalah hewan peliharaan yang sangat populer di seluruh dunia karena sifatnya yang lucu, penyayang, dan mandiri. Mereka juga dikenal dapat memberikan efek menenangkan bagi pemiliknya.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Keunggulan kucing</h2>
            <p>
            Kucing memiliki kemampuan adaptasi yang baik, mudah dilatih, dan dikenal sebagai hewan yang bersih. Mereka juga bisa menjadi teman yang baik bagi manusia, memberikan kasih sayang dan kehangatan.
            </p>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <p>© 2024 Copyright by Anggia Intan Widyaningrum</p>
      </footer>
    </div>
  );
}

export default App;
