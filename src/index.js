import React from 'react';
import ReactDOM from 'react-dom';
import ImageViewer from "./common/controller/Controller.js";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <ImageViewer/>
  </Router>,
  document.getElementById('root')
);

