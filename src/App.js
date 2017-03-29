import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	componentWillMount() {
		const config = {
		    apiKey: "AIzaSyC4aBbPWyFF-UnysnmEpEaw4aFkC0HC5lM",
		    authDomain: "manager-2d1e8.firebaseapp.com",
		    databaseURL: "https://manager-2d1e8.firebaseio.com",
		    storageBucket: "manager-2d1e8.appspot.com",
		    messagingSenderId: "741983650253"
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;