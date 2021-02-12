import { React, useState, useEffect } from 'react';

import EffectsChart from './effects/EffectsChart';
import DrugsHttpClient from '../clientapis/DrugsHttpClient';


const drugsHttpClient = new DrugsHttpClient();

export default function DrugOverview(props){

	const [state, setState] = useState({
		'effectsData': []
	});

	useEffect(() => {getEffectsData(props.selectedDrug)}, [props.selectedDrug]);

	const effectsToChartData = (effects) => {
		if (effects == null || effects == {}) {
			return undefined;
		}

		effects.sort((a, b) => {return b.no_effected - a.no_effected});
		var chartEffects = effects.slice(0, 5).map(effect => {
			return {
				"symptom": effect.name,
				"frequency": effect.percent_effected
			}
		});

		return {
			'chartData': chartEffects
		}
	}

	const getEffectsData = async (drug) => { //TODO have this set some kind of loading bar
		var data = drugsHttpClient.getEffects(drug).then((data) => {
			setState(prevState => ({
				...prevState,
				effectsData: data.message.effects
			}));
		}).catch((error) => {
			console.log(error);
		});
	}

	return (
		<div>
			<EffectsChart {...effectsToChartData(state.effectsData)}/>
		</div>
		)
}