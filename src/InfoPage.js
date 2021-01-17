import { React, useState } from 'react';
import Header from './header/Header';
import DisplayBody from './body/DisplayBody';

export default function InfoPage(){

	const [state, setState] = useState({
		selectedDrug: undefined
	});

	const setSelectedDrug = (drug) => {
		setState(prevState => ({
			...prevState,
			selectedDrug: drug
		}));
  }

	return (
			<div>
				<Header {...{setSelectedDrug}}/>
				<DisplayBody {...state}/>
			</div>
		)
}