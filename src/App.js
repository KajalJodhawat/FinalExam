import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Addmoreinput from './components/Form';
import DataList from './components/DataList/Index';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/Addmoreinput" exact component={Addmoreinput} />
            <Route path="/DataList" exact component={DataList} />

          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
