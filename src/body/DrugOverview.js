import React from 'react';
import axios from 'axios';

import API_BASE_URL from '../constants/apiconstants';
import DrugsHttpClient from '../clientapis/DrugsHttpClient';


const drugsHttpClient = new DrugsHttpClient();

export default function DrugOverview(props){

	const getEffectsData = (drug) => {
		drugsHttpClient.getEffects(drug).then((data) => {
			console.log(data);
		})
	}
}