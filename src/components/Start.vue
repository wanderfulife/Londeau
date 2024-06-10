<template>
	<div class="container">

		<div id="enqueteur" v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="ENQUETEUR" />
			<button v-if="ENQUETEUR" @click="next" class="btn-next">Suivant</button>
		</div>

		<div v-if="level === 1">
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>

		<div id="q1" v-if="level === 2">
			<h1> Vous êtes : </h1>
			<select v-model="Q1" class="form-control">
				<option v-for="option in q1" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q1" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q2" v-if="level === 3">
			<h1> Combien de personnes constituent votre ménage ? </h1>
			<select v-model="Q2" class="form-control">
				<option v-for="option in q2" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q2" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q3" v-if="level === 4">
			<h1> Votre ménage dispose-t-il d’une voiture ? </h1>
			<select v-model="Q3" class="form-control">
				<option v-for="option in q3" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q3" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q4" v-if="level === 5 && Q3 <= 2">
			<h1> Où garez-vous votre voiture en général dans le quartier ? </h1>
			<select v-model="Q4" class="form-control">
				<option v-for="option in q4" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q4" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q5" v-if="level === 6 && Q3 <= 2">
			<h1> Est-il facile de se garer dans le quartier ? </h1>
			<select v-model="Q5" class="form-control">
				<option v-for="option in q5" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q5" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q6" v-if="level === 7 && Q3 <= 2">
			<h1> Utilisez-vous régulièrement votre véhicule ? </h1>
			<select v-model="Q6" class="form-control">
				<option v-for="option in q6" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q6" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q7" v-if="level === 8 && Q3 <= 2">
			<h1> Pour quel(s) motif(s) utilisez-vous principalement votre voiture ?
				(plusieurs réponses possibles)</h1>
			<br>
			<label for="1">Pour aller au travail</label>
			<input type="checkbox" id="1" value="1" v-model="Q7">
			<br>
			<label for="2">Pour aller faire des courses</label>
			<input type="checkbox" id="2" value="2" v-model="Q7">
			<br>
			<label for="3">Pour un motif de loisirs (sport, etc.)</label>
			<input type="checkbox" id="3" value="3" v-model="Q7">
			<br>
			<label for="4">Pour rendre visite à de la famille / des amis</label>
			<input type="checkbox" id="4" value="4" v-model="Q7">
			<br>
			<label for="5">Pour accompagner mes enfants ou des proches (activités, rdv médicaux…)</label>
			<input type="checkbox" id="5" value="5" v-model="Q7">
			<br>
			<label for="6">Autre</label>
			<input type="checkbox" id="6" value="6" v-model="Q7">
			<br>
			<button v-if="Q7.length > 0" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="q8" v-if="level === 9 && Q3 <= 2">
			<h1> Dans quelle ville vous déplacez-vous principalement en voiture ? </h1>
			<select v-model="Q8" class="form-control">
				<option v-for="option in q8" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q8 === 7" class="form-control" type="text" v-model="Q8_DETAIL" placeholder="Precisions">
			<button v-if="Q8" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q9" v-if="level === 10 && Q3 <= 2 || level === 5 && Q3 === 3">
			<h1> Votre ménage dispose-t-il d’une moto ou d’un scooter ? </h1>
			<select v-model="Q9" class="form-control">
				<option v-for="option in q9" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q9" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q10" v-if="(level === 11 && Q3 <= 2 || level === 6 && Q3 === 3) && Q9 <= 2">
			<h1> Où garez-vous votre moto / scooter en général dans le quartier ?</h1>
			<select v-model="Q10" class="form-control">
				<option v-for="option in q10" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q10" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q11"
			v-if="((level === 12 && Q3 <= 2 || level === 7 && Q3 === 3) && Q9 <= 2) || ((level === 11 && Q3 <= 2 || level === 6 && Q3 === 3) && Q9 === 3)">
			<h1>Votre ménage dispose-t-il d’un vélo ou d’une trottinette ? (plusieurs réponses possibles)</h1>
			<br>
			<label for="1">Oui, un vélo</label>
			<input type="checkbox" id="1" value="1" v-model="Q11">
			<br>
			<label for="2">Oui, deux vélos ou plus</label>
			<input type="checkbox" id="2" value="2" v-model="Q11">
			<br>
			<label for="3">Oui, une trottinette ou plus</label>
			<input type="checkbox" id="3" value="3" v-model="Q11">
			<br>
			<label for="4">Non, pas de vélo / trottinette</label>
			<input type="checkbox" id="4" value="4" v-model="Q11">
			<br>
			<br>
			<br>
			<br>
			<div id="q11bis" v-if="Q11.includes('1') || Q11.includes('2') || Q11.includes('3')">
				<h1>Ce vélo / trottinette est-il/elle utilisé(e) régulièrement ?</h1>
				<select v-model="Q11bis" class="form-control">
					<option v-for="option in q11bis" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
				<br>
				<br>
				<br>
				<br>
				<h1 id="q12">Pour quel(s) motif(s) utilisez-vous principalement ce vélo / trottinette ? (plusieurs
					réponses
					possibles)</h1>
				<br>
				<label for="1">Pour aller au travail</label>
				<input type="checkbox" id="1" value="1" v-model="Q12">
				<br>
				<label for="2">Pour aller faire des courses</label>
				<input type="checkbox" id="2" value="2" v-model="Q12">
				<br>
				<label for="3">Pour un motif de loisirs (sport, etc.)</label>
				<input type="checkbox" id="3" value="3" v-model="Q12">
				<br>
				<label for="4">Pour rendre visite à de la famille / des amis</label>
				<input type="checkbox" id="4" value="4" v-model="Q12">
				<br>
				<label for="5">Pour accompagner mes enfants ou des proches (activités, rdv médicaux…)</label>
				<input type="checkbox" id="5" value="5" v-model="Q12">
				<br>
				<label for="6">Autre</label>
				<input type="checkbox" id="6" value="6" v-model="Q12">
			</div>
			<button v-if="Q11.length > 0 && Q11.includes('4') || Q11.length > 0 && Q12.length > 0" @click="next"
				class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>



		<div id="q13"
			v-if="((level === 13 && Q3 <= 2 || level === 8 && Q3 === 3) && Q9 <= 2) || ((level === 12 && Q3 <= 2 || level === 7 && Q3 === 3) && Q9 === 3)">
			<h1> Si vous ne faites pas ou peu de vélo, quels aménagements pourraient vous y encourager ? </h1>
			<br>
			<label for="1">Des pistes cyclables sécurisées</label>
			<input type="checkbox" id="1" value="1" v-model="Q13">
			<br>
			<label for="2">Des arceaux à vélo</label>
			<input type="checkbox" id="2" value="2" v-model="Q13">
			<br>
			<label for="3">Des parkings à vélo sécurisés en extérieur</label>
			<input type="checkbox" id="3" value="3" v-model="Q13">
			<br>
			<label for="4">Des locaux à vélo sécurisés en intérieur</label>
			<input type="checkbox" id="4" value="4" v-model="Q13">
			<br>
			<label for="5">Une pompe à air en accès libre</label>
			<input type="checkbox" id="5" value="5" v-model="Q13">
			<br>
			<label for="6">Une station de réparation en accès libre</label>
			<input type="checkbox" id="6" value="6" v-model="Q13">
			<br>
			<label for="7">rien</label>
			<input type="checkbox" id="7" value="7" v-model="Q13">
			<button v-if="Q13.length > 0" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>



		<div id="q14"
			v-if="((level === 14 && Q3 <= 2 || level === 9 && Q3 === 3) && Q9 <= 2) || ((level === 13 && Q3 <= 2 || level === 8 && Q3 === 3) && Q9 === 3)">
			<h1> Avez-vous un abonnement Navigo (transport en commun) ? </h1>
			<select v-model="Q14" class="form-control">
				<option v-for="option in q14" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q14" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="q15"
			v-if="((level === 15 && Q3 <= 2 || level === 10 && Q3 === 3) && Q9 <= 2) || ((level === 14 && Q3 <= 2 || level === 9 && Q3 === 3) && Q9 === 3)">
			<h1> Prenez-vous régulièrement le bus ?</h1>
			<select v-model="Q15" class="form-control">
				<option v-for="option in q15" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q15" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q16"
			v-if="((level === 16 && Q3 <= 2 || level === 11 && Q3 === 3) && Q9 <= 2) || ((level === 15 && Q3 <= 2 || level === 10 && Q3 === 3) && Q9 === 3)">
			<h1> Prenez-vous régulièrement le tramway ?</h1>
			<select v-model="Q16" class="form-control">
				<option v-for="option in q16" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q16" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q17"
			v-if="((level === 17 && Q3 <= 2 || level === 12 && Q3 === 3) && Q9 <= 2) || ((level === 16 && Q3 <= 2 || level === 11 && Q3 === 3) && Q9 === 3)">
			<h1>Prenez-vous régulièrement le métro / RER / Transilien ?</h1>
			<select v-model="Q17" class="form-control">
				<option v-for="option in q17" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q17" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q18"
			v-if="((((level === 18 && Q3 <= 2 || level === 13 && Q3 === 3) && Q9 <= 2) || ((level === 17 && Q3 <= 2 || level === 12 && Q3 === 3) && Q9 === 3)) && Q17 <= 3)">
			<h1>A quelle gare / station prenez-vous le métro / RER / Transilien ?</h1>
			<select v-model="Q18" class="form-control">
				<option v-for="option in q18" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q18 === 6" class="form-control" type="text" v-model="Q18_DETAIL" placeholder="Precisions">
			<button v-if="Q18" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="q19"
			v-if="((((level === 19 && Q3 <= 2 || level === 14 && Q3 === 3) && Q9 <= 2) || ((level === 18 && Q3 <= 2 || level === 13 && Q3 === 3) && Q9 === 3)) && Q17 <= 3)">
			<h1>Comment vous rendez-vous à la gare / station ?</h1>
			<select v-model="Q19" class="form-control">
				<option v-for="option in q19" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q19" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q20"
			v-if="(((level === 20 && Q3 <= 2 || level === 15 && Q3 === 3) && Q9 <= 2) || ((level === 19 && Q3 <= 2 || level === 14 && Q3 === 3) && Q9 === 3) && Q17 <= 3) ||
				((((level === 18 && Q3 <= 2 || level === 13 && Q3 === 3) && Q9 <= 2) || ((level === 17 && Q3 <= 2 || level === 12 && Q3 === 3) && Q9 === 3)) && Q17 === 4)">
			<h1> Pensez-vous utiliser la nouvelle station de la ligne métro 11 « Coteaux Beauclair » ? </h1>
			<select v-model="Q20" class="form-control">
				<option v-for="option in q20" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q20" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q21"
			v-if="(((level === 21 && Q3 <= 2 || level === 16 && Q3 === 3) && Q9 <= 2) || ((level === 20 && Q3 <= 2 || level === 15 && Q3 === 3) && Q9 === 3) && Q17 <= 3) ||
				((((level === 19 && Q3 <= 2 || level === 14 && Q3 === 3) && Q9 <= 2) || ((level === 18 && Q3 <= 2 || level === 13 && Q3 === 3) && Q9 === 3)) && Q17 === 4)">
			<h1>Numéro du bâtiment ?</h1>
			<select v-model="Q21" class="form-control">
				<option v-for="option in q21" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q21" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="end"
			v-if="(((level === 22 && Q3 <= 2 || level === 17 && Q3 === 3) && Q9 <= 2) || ((level === 21 && Q3 <= 2 || level === 16 && Q3 === 3) && Q9 === 3) && Q17 <= 3 )||
				(((level === 20 && Q3 <= 2 || level === 15 && Q3 === 3) && Q9 <= 2) || ((level === 19 && Q3 <= 2 || level === 14 && Q3 === 3) && Q9 === 3) && Q17 === 4)">
			<button @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">

		<button class="btn-fin" @click="downloadData">download DATA</button>

	</div>
	<div>
		<span style="margin-left: 10px;">Nombre de questionnaires : {{ docCount }}</span>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { q1, q2, q3, q4, q5, q6, q8, q9, q10, q11, q11bis, q14, q15, q16, q17, q18, q19, q20, q21 } from "./reponses";
import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const docCount = ref(0);
const surveyCollectionRef = collection(db, "Londeau");
const level = ref(0);
const startDate = ref('');
const ENQUETEUR = ref('');
const Q1 = ref('');
const Q2 = ref('');
const Q3 = ref('');
const Q4 = ref('');
const Q5 = ref('');
const Q6 = ref('');
const Q7 = ref([]);
const Q8 = ref('');
const Q8_DETAIL = ref('');
const Q9 = ref('');
const Q10 = ref('');
const Q11 = ref([]);
const Q11bis = ref('');
const Q12 = ref([]);
const Q13 = ref([]);
const Q14 = ref('');
const Q15 = ref('');
const Q16 = ref('');
const Q17 = ref('');
const Q18 = ref('');
const Q18_DETAIL = ref('');
const Q19 = ref('');
const Q20 = ref('');
const Q21 = ref('');




const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;
	console.log("Q11:", Q2.value);

}

const back = () => {
	level.value--;
}


const getDocCount = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		docCount.value = querySnapshot.size;
	} catch (error) {
		console.error("Error getting document count:", error);
	}
};

onMounted(getDocCount);

const submitSurvey = async () => {
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: ENQUETEUR.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		Q1: Q1.value,
		Q2: Q2.value,
		Q3: Q3.value,
		Q4: Q4.value,
		Q5: Q5.value,
		Q6: Q6.value,
		Q7: Q7.value,
		Q8: Q8.value,
		Q8_DETAIL: Q8_DETAIL.value,
		Q9: Q9.value,
		Q10: Q10.value,
		Q11: Q11.value,
		Q11bis: Q11bis.value,
		Q12: Q12.value,
		Q13: Q13.value,
		Q14: Q14.value,
		Q15: Q15.value,
		Q16: Q16.value,
		Q17: Q17.value,
		Q18: Q18.value,
		Q18_DETAIL: Q18_DETAIL.value,
		Q19: Q19.value,
		Q20: Q20.value,
		Q21: Q21.value,
	});
	level.value = 1;
	startDate.value = "";
	getDocCount();
	Q1.value = "";
	Q2.value = "";
	Q3.value = "";
	Q4.value = "";
	Q5.value = "";
	Q6.value = "";
	Q7.value = [];
	Q8.value = "";
	Q8_DETAIL.value = "";
	Q9.value = "";
	Q10.value = "";
	Q11.value = [];
	Q11bis.value = "";
	Q12.value = [];
	Q13.value = [];
	Q14.value = "";
	Q15.value = "";
	Q16.value = "";
	Q17.value = "";
	Q18.value = "";
	Q18_DETAIL.value = "";
	Q19.value = "";
	Q20.value = "";
	Q21.value = "";
};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers // MODIFICATION SUR L'EXCEL
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			ENQUETEUR: "ENQUETEUR",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE_DEBUT: "HEURE_DEBUT",
			HEURE_FIN: "HEURE_FIN",
			Q1: "Q1",
			Q2: "Q2",
			Q3: "Q3",
			Q4: "Q4",
			Q5: "Q5",
			Q6: "Q6",
			Q7: "Q7",
			Q8: "Q8",
			Q8_DETAIL: "Q8_DETAIL",
			Q9: "Q9",
			Q10: "Q10",
			Q11: "Q11",
			Q11bis: "Q11bis",
			Q12: "Q12",
			Q13: "Q13",
			Q14: "Q14",
			Q15: "Q15",
			Q16: "Q16",
			Q17: "Q17",
			Q18: "Q18",
			Q18_DETAIL: "Q18_DETAIL",
			Q19: "Q19",
			Q20: "Q20",
			Q21: "Q21",
		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				ENQUETEUR: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE_DEBUT: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				Q1: docData.Q1 || "",
				Q2: docData.Q2 || "",
				Q3: docData.Q3 || "",
				Q4: docData.Q4 || "",
				Q5: docData.Q5 || "",
				Q6: docData.Q6 || "",
				Q7: docData.Q7 || "",
				Q8: docData.Q8 || "",
				Q8_DETAIL: docData.Q8_DETAIL || "",
				Q9: docData.Q9 || "",
				Q10: docData.Q10 || "",
				Q11: docData.Q11 || "",
				Q11bis: docData.Q11bis || "",
				Q12: docData.Q12 || "",
				Q13: docData.Q13 || "",
				Q14: docData.Q14 || "",
				Q15: docData.Q15 || "",
				Q16: docData.Q16 || "",
				Q17: docData.Q17 || "",
				Q18: docData.Q18 || "",
				Q18_DETAIL: docData.Q18_DETAIL || "",
				Q19: docData.Q19 || "",
				Q20: docData.Q20 || "",
				Q21: docData.Q21 || "",
			};

			if (docData.Q7) {
				let Q7String = "";
				for (const key in docData.Q7) {
					const value = docData.Q7[key];
					// You can customize the separator here (e.g., comma, semicolon)
					Q7String += `${value}, `;
				}
				// Remove the trailing comma and space from the string
				mappedData.Q7 = Q7String.slice(0, -2);
			}


			if (docData.Q11) {
				let Q11String = "";
				for (const key in docData.Q11) {
					const value = docData.Q11[key];
					// You can customize the separator here (e.g., comma, semicolon)
					Q11String += `${value}, `;
				}
				// Remove the trailing comma and space from the string
				mappedData.Q11 = Q11String.slice(0, -2);
			}


			if (docData.Q12) {
				let Q12String = "";
				for (const key in docData.Q12) {
					const value = docData.Q12[key];
					// You can customize the separator here (e.g., comma, semicolon)
					Q12String += `${value}, `;
				}
				// Remove the trailing comma and space from the string
				mappedData.Q12 = Q12String.slice(0, -2);
			}

			if (docData.Q13) {
				let Q13String = "";
				for (const key in docData.Q13) {
					const value = docData.Q13[key];
					// You can customize the separator here (e.g., comma, semicolon)
					Q13String += `${value}, `;
				}
				// Remove the trailing comma and space from the string
				mappedData.Q13 = Q13String.slice(0, -2);
			}


			data.push(mappedData);
			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});
		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});
		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data"); ``
		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "Londeau.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>

<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
	font-size: 18px;
}

h2 {
	color: white;
	font-size: 16px;
}

.english {
	color: cyan;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}


.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>
