import React from 'react';

import EffectsChart from './effects/EffectsChart';

export default function DrugOverview(props){

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

	return (
		<div>
			<EffectsChart {...effectsToChartData(props.effectsData.effects)}/>
		</div>
		)
}