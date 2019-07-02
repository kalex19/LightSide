import './App.css';
import Header from '../Header/Header';
import ScrollText from '../ScrollText/ScrollText';
import React from 'react';

export default function App(){
	return (
		<div className="App">
			<Header />;
			<ScrollText />
		</div>
	);
}
