import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Menu } from "antd";
import { Home } from "./components/Home";
import { Camera } from "./components/Camera";
import { FileUpload } from "./components/FileUpload";
import { FileDownload } from "./components/FileDownload";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/camera">Camera</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/file-upload">File upload</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/file-download">File download</Link>
            </Menu.Item>
          </Menu>

          <Switch>
            <Route path="/camera">
              <Camera />
            </Route>
            <Route path="/file-upload">
              <FileUpload />
            </Route>
            <Route path="/file-download">
              <FileDownload />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
