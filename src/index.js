import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NewTrackerPage from './components/NewTrackerPage/NewTrackerPage';
import TrackerPage from './components/TrackerPage/TrackerPage';
import ErrorPage from './ErrorPage';
import { Provider } from 'react-redux';
import store from './reducers/store';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <NewTrackerPage />
      }, {
        path: '/tracker',
        element: <TrackerPage />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);


