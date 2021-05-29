import React from 'react';
import ReactDOM from 'react-dom';
import ImageViewer from "./common/controller/Controller.js";
import { BrowserRouter as Router} from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <Router>
    <ImageViewer/>
  </Router>,
  document.getElementById('root')
);

