const q1 = [
	{ id: 1, output: 1, text: "Élève / étudiant" },
	{ id: 2, output: 2, text: "Actif avec emploi" },
	{ id: 3, output: 3, text: "Sans emploi" },
	{ id: 4, output: 4, text: "Retraité" },
	{ id: 5, output: 5, text: "Autre" },
];	

const q2 = [
	{ id: 1, output: 1, text: "Je vis seul/seule sans enfant" },
	{ id: 2, output: 2, text: "Je vis seul/seule avec un ou plusieurs enfants" },
	{ id: 3, output: 3, text: "Je vis en couple sans enfant" },
	{ id: 4, output: 4, text: "Je vis en couple avec enfant" },
	{ id: 5, output: 5, text: "Autre configuration (colocation, etc.)" },
];

const q3 = [
	{ id: 1, output: 1, text: "Oui, une voiture" },
	{ id: 2, output: 2, text: "Oui, deux voitures (ou plus)" },
	{ id: 3, output: 3, text: "Non, pas de voiture" },
];

const q4 = [
	{ id: 1, output: 1, text: "Dans un parking réservé souterrain (j’ai une place réservée)" },
	{ id: 2, output: 2, text: "Dans un parking réservé de surface (j’ai une place réservée)" },
	{ id: 3, output: 3, text: "Dans un autre parking de surface du quartier" },
	{ id: 4, output: 4, text: "Dans une rue du quartier" },
	{ id: 5, output: 5, text: "Autre" },
];

const q5 = [
	{ id: 1, output: 1, text: "Oui, très facile" },
	{ id: 2, output: 2, text: "Oui, la plupart du temps" },
	{ id: 3, output: 3, text: "Non, pas trop" },
	{ id: 4, output: 4, text: "Non très difficile" },
];

const q6 = [
	{ id: 1, output: 1, text: "Oui, tous les jours" },
	{ id: 2, output: 2, text: "Oui, plusieurs fois par semaine" },
	{ id: 3, output: 3, text: "Non, rarement (seulement quelques fois par mois)" },
	{ id: 4, output: 4, text: "Non, très rarement" },
];

const q8 = [
	{ id: 1, output: 1, text: "Noisy-le-Sec" },
	{ id: 2, output: 2, text: "Bobigny" },
	{ id: 3, output: 3, text: "Bondy" },
	{ id: 4, output: 4, text: "Rosny-sous-Bois" },
	{ id: 5, output: 5, text: "Montreuil" },
	{ id: 6, output: 6, text: "Romainville" },
	{ id: 7, output: 7, text: "Autre commune (à renseigner)" },
];

const q9 = [
	{ id: 1, output: 1, text: "Oui, une moto ou un scooter" },
	{ id: 2, output: 2, text: "Oui, deux moto / scooter" },
	{ id: 3, output: 3, text: "Non, pas de moto / scooter" },
];

const q10 = [
	{ id: 1, output: 1, text: "Dans un parking réservé souterrain (j’ai une place réservée)" },
	{ id: 2, output: 2, text: "Dans un parking réservé de surface (j’ai une place réservée)" },
	{ id: 3, output: 3, text: "Dans un autre parking de surface du quartier" },
	{ id: 4, output: 4, text: "Dans une rue du quartier" },
	{ id: 5, output: 5, text: "Autre" },
];

const q11 = [
	{ id: 1, output: 1, text: "Oui, un vélo" },
	{ id: 2, output: 2, text: "Oui, deux vélos ou plus" },
	{ id: 3, output: 3, text: "Oui, une trottinette ou plus" },
	{ id: 4, output: 4, text: "Non, pas de vélo / trottinette" },
];

const q11bis = [
	{ id: 1, output: 1, text: "Oui, tous les jours" },
	{ id: 2, output: 2, text: "Oui, plusieurs fois par semaine" },
	{ id: 3, output: 3, text: "Non, rarement (seulement quelques fois par mois)" },
	{ id: 4, output: 4, text: "Non, très rarement" },
];

const q14 = [
	{ id: 1, output: 1, text: "Oui, je suis le seul du ménage à en avoir un" },
	{ id: 2, output: 2, text: "Oui, nous sommes plusieurs personnes du ménage à en avoir un" },
	{ id: 3, output: 3, text: "Non" },
];

const q15 = [
	{ id: 1, output: 1, text: "Oui, tous les jours" },
	{ id: 2, output: 2, text: "Oui, plusieurs fois par semaine" },
	{ id: 3, output: 3, text: "Non, rarement (seulement quelques fois par mois)" },
	{ id: 4, output: 4, text: "Non, très rarement" },
];

const q16 = [
	{ id: 1, output: 1, text: "Oui, tous les jours" },
	{ id: 2, output: 2, text: "Oui, plusieurs fois par semaine" },
	{ id: 3, output: 3, text: "Non, rarement (seulement quelques fois par mois)" },
	{ id: 4, output: 4, text: "Non, très rarement" },
];

const q17 = [
	{ id: 1, output: 1, text: "Oui, tous les jours" },
	{ id: 2, output: 2, text: "Oui, plusieurs fois par semaine" },
	{ id: 3, output: 3, text: "Non, rarement (seulement quelques fois par mois)" },
	{ id: 4, output: 4, text: "Non, très rarement" },
];

const q18 = [
	{ id: 1, output: 1, text: "Noisy-le-Sec (RER)" },
	{ id: 2, output: 2, text: "Bondy (RER)" },
	{ id: 3, output: 3, text: "Rosny Bois Perrier (RER)" },
	{ id: 4, output: 4, text: "Rosny-sous-Bois (RER)" },
	{ id: 5, output: 5, text: "Bobigny-Pantin Raymond Queneau (Métro)" },
	{ id: 6, output: 6, text: "Autre (à renseigner)" },
];

const q19 = [
	{ id: 1, output: 1, text: "A pied" },
	{ id: 2, output: 2, text: "En vélo ou trottinette" },
	{ id: 3, output: 3, text: "En bus" },
	{ id: 4, output: 4, text: "En tramway" },
	{ id: 5, output: 5, text: "En voiture (on me dépose)" },
	{ id: 6, output: 6, text: "En voiture (je conduis et me gare à côté de la gare / station)" },
	{ id: 7, output: 7, text: "Autre" },
];

const q20 = [
	{ id: 1, output: 1, text: "Oui, certainement" },
	{ id: 2, output: 2, text: "Peut-être, on verra" },
	{ id: 3, output: 3, text: "Non" },
	{ id: 4, output: 4, text: "Je ne suis pas au courant de l’ouverture de cette nouvelle station" },
];

const q21 = [
	{ id: 1, output: 1, text: "A" },
	{ id: 2, output: 2, text: "B" },
	{ id: 3, output: 3, text: "C" },
	{ id: 4, output: 4, text: "D" },
	{ id: 5, output: 5, text: "E" },
	{ id: 6, output: 6, text: "F" },
	{ id: 7, output: 7, text: "G" },
	{ id: 8, output: 8, text: "H" },
	{ id: 9, output: 9, text: "I" },
];

export { q1, q2, q3, q4, q5, q6, q8, q9, q10, q11, q11bis, q14, q15, q16, q17, q18, q19, q20, q21};
