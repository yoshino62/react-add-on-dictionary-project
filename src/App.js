import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This is coded by{" "}
          <a
            href="https://github.com/yoshino62"
            target="_blank"
            rel="noreferrer"
          >
            Yoshino Andrews
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yoshino62/react-add-on-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://dictionary-project-react-add-on.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
