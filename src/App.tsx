import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://electronjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Electron
          </a>
        </header>
      </div>
    );
  }
}

export default App;
