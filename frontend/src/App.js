import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleEdit from './components/ArticleEdit';
import Article from "./components/Article";
import storeFactory from './store';
import { Provider } from 'react-redux';

const initialState = {};
const store = storeFactory(initialState);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <div>
              <ArticleList />
            </div>
          </Route>
          <Route exact path={'/addArticle'}>
            <div>
              <Article />
            </div>
          </Route>
          <Route exact path={'/articles/:articleId'}>
            <div>
              <ArticleEdit />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
