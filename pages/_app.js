import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr';
const App = (props) => {
   const {Component, pageProps, store} = props;
   return (
    <Provider store={store}>
       <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      position="top-left"
      getState={(state) => state.toastr}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
       >
       </ReduxToastr>
       <Component {...pageProps}></Component>
    </Provider>
   )
}

export default withRedux(initStore)(App);