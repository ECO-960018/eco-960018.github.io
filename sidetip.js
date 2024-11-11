//TOOLTIP

	//General
function showTipG(Tip) {
let text;
switch (Tip) {
	case "oSA0":
		text = "<h2>Neolítico</h2><span>10.000 a.C. – 5.000 a.C.</span>";
		break;
	case "oMesoS0":
		text = "<h2>SUMÉRIOS</h2><p>Cidade de Uruk</p><span>c. 5.000 a.C. – c. 700 d.C.</span>";
		break;
	case "oSA1":
		text = "<h2>Idade do Cobre</h2><span>5.000 a.C. – 3.300 a.C.</span>";
		break;
	case "oBA0":
		text = "<h2>Idade do Bronze</h2><span>3.300 a.C. – 1.200 a.C.</span>";
		break;
	case "oBA1":
		text = "<h2>Bronze Antigo</h2><span>3.300 a.C. – 2.100 a.C.</span>";
		break;
	case "oBA2":
		text = "<h2>Bronze Médio</h2><span>2.100 a.C. – 1.500 a.C.</span>";
		break;
	case "oBA3":
		text = "<h2>Bronze Recente</h2><span>1.500 a.C. – 1.200 a.C.</span>";
		break;
	case "o3200bc":
		text = "<h2>HIERÓGLIFOS EGÍPCIOS</h2><p>Língua egípcia</p><span>c. 3.250 a.C – c. 400 d.C</span>";
		break;
	case "o2600bc":
		text = "<h2>EGITO</h2><p>Necrópolis de Gizé</p><span>2.600 a.C. – 2.500 a.C.</span>";
		break;
	case "o2025bc":
		text = "<h2>ASSÍRIOS</h2><p>Fundação da cidade-estado de Assur</p><span>c. 2.025 a.C.</span>";
		break;
	case "o1792bc":
		text = "<h2>BABILÔNIA</h2><p>Reino de Hamurabi</p><span>1.792 a.C. – 1.750 a.C.</span>";
		break;
	case "o1650bc":
		text = "<h2>EGITO</h2><p>XV Dinastia do Egito</p><span>1.650 a.C. – 1.550 a.C.</span>";
		break;
	case "o1595bc":
		text = "<h2>BABILÔNIA</h2><p>Saque da Babilônia pelos Hititas</p><span>1.595 a.C.</span>";
		break;
	case "o1353bc":
		text = "<h2>EGITO</h2><p>Reino de Aquenáton</p><span>1.353 a.C. – 1.336 a.C.</span>";
		break;
	case "oBAC":
		text = "<h2>Colapso da Idade do Bronze</h2><span>1.200 a.C.</span>";
		break;
	case "oIA0":
		text = "<h2>Idade do Ferro</h2><span>1.200 a.C. – 800 a.C.</span>";
		break;
	case "o1100bc":
		text = "<h2>BABILÔNIA</h2><p>Criação do Enuma Elish</p><span>c. 1.100 a.C.</span>";
		break;
	case "oAA0":
		text = "<h2>Antiguidade Clássica</h2><span>800 a.C. – 300 a.C.</span>";
		break;
	case "oLevantA0":
		text = "<h2>ISRAEL</h2><p>Destruição do Reino de Israel por Sargão II da Assíria</p><span>c. 720 a.C.</span>";
		break;
	case "o605bc":
		text = "<h2>BABILÔNIA</h2><p>Reino de Nabucodonosor II</p><span>605 a.C. – 562 a.C.</span>";
		break;
	case "oLevantA1":
		text = "<h2>JUDÁ</h2><p>Cerco a Jerusalém por Nabucodonosor II da Babilônia</p><span>c. 597 a.C.</span>";
		break;
	case "oLevantA3":
		text = "<h2>JUDEIA</h2><p>Nascimento de Jesus de Nazaré</p><span>✱ c. 4-6 a.C<br>† c. 30-33 d.C.</span>";
		break;
	case "oLevantA4":
		text = "<h2>JUDEIA</h2><p>Destruição do Templo de Herodes</p><span>70 d.C.</span>";
		break;
	case "oRomeC0":
		text = "<h2>ROMA</h2><p>Reino de Constantino, O Grande</p><span>306 d.C. – 337 d.C.</span>";
		break;
	case "oRomeA3":
		text = `<div class="sidetip1"><h2>GREGOS</h2><p>Império Romano do Oriente<br>395 a.C. – 1.453 d.C.</p></div><div class="sidetip2"><h2>ROMANOS</h2><p>Império Romano do Ocidente<br>395 d.C. – 480 d.C.</p></div>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidetip").innerHTML=text;
	document.getElementById("sidetip").style.display='block';
}

	//Egypt
function showTipEgypt(Tip) {
let text;
switch (Tip) {
	case "oEgyptS0":
		text = "<h2>EGITO</h2><p>Período Pré-Histórico</p><span>???? a.C. – 3.150 a.C.</span>";
		break;
	case "oEgyptB1":
		text = "<h2>EGITO</h2><p>Época Tinita</p><span>3.150 a.C. – 2.686 a.C.</span>";
		break;
	case "oEgyptB2":
		text = "<h2>EGITO</h2><p>Império Antigo</p><span>2.700 a.C. – 2.200 a.C.</span>";
		break;
	case "oEgyptB3":
		text = "<h2>EGITO</h2><p>Primeiro Período Intermédio</p><span>2.181 a.C. – 2.055 a.C.</span>";
		break;
	case "oEgyptB4":
		text = "<h2>EGITO</h2><p>Império Médio</p><span>2.040 a.C. – 1.700 a.C.</span>";
		break;
	case "oEgyptB5":
		text = "<h2>EGITO</h2><p>Segundo Período Intermédio</p><span>1.700 a.C. – 1.550 a.C.</span>";
		break;
	case "oEgyptB6":
		text = "<h2>EGITO</h2><p>Império Novo</p><span>1.550 a.C. – 1.070 a.C.</span>";
		break;
	case "oEgyptI1":
		text = "<h2>EGITO</h2><p>Terceiro Período Intermédio</p><span>1.090 a.C. – 664 a.C.</span>";
		break;
	case "oEgyptA1":
		text = "<h2>EGITO</h2><p>Época Baixa</p><span>664 a.C. – 525 a.C.</span>";
		break;
	case "oEgyptA2":
		text = "<h2>EGITO</h2><p>Império Aquemênida</p><span>525 a.C. – 330 a.C.</span>";
		break;
	case "oEgyptA3":
		text = "<h2>GREGOS</h2><p>Império Macedônico</p><span>330 a.C. – 323 a.C.</span>";
		break;
	case "oEgyptA4":
		text = "<h2>EGITO</h2><p>Dinastia Ptolemaica</p><span>305 a.C. – 30 a.C.</span>";
		break;
	case "oEgyptA5":
		text = "<h2>EGITO</h2><p>Egito Romano</p><span>30 a.C. – 641 d.C.</span>";
		break;
	default:
		text = "";
}
	document.getElementById("sidetip").innerHTML=text;
	document.getElementById("sidetip").style.display='block';
}

	//Mesopotamia
function showTipMeso(Tip) {
let text;
switch (Tip) {
	case "oMesoS0":
		text = "<h2>SUMÉRIOS</h2><p>Pré-Civilização</p><span>5.500 a.C. – 4.000 a.C.</span>";
		break;
	case "oMesoS1":
		text = "<h2>SUMÉRIOS</h2><p>Período de Uruk</p><span>4.000 a.C. – 3.100 a.C.</span>";
		break;
	case "oMesoB1":
		text = "<h2>SUMÉRIOS</h2><p>Período Dinástico</p><span>2.900 a.C. – 2.400 a.C.</span>";
		break;
	case "oMesoB2":
		text = "<h2>ACADIANOS</h2><p>Império Acadiano</p><span>2.300 a.C. – 2.100 a.C.</span>";
		break;
	case "oMesoB3":
		text = "<h2>SUMÉRIOS</h2><p>Império Neo-Sumério</p><span>2.112 a.C. – 2.004 a.C.</span>";
		break;
	case "oMesoB4":
		text = "<h2>AMORITAS</h2><p>Império Babilônico</p><span>1.894 a.C. – 1.595 a.C.</span>";
		break;
	case "oMesoB5":
		text = "<h2>CASSITAS</h2><p>Dinastia Cassita da Babilônia</p><span>1.595 a.C. – 1.155 a.C.</span>";
		break;
	case "oMesoI1":
		text = "<h2>ASSÍRIOS</h2><p>Médio Império Assírio</p><span>1.363 a.C. – 912 a.C.</span>";
		break;
	case "oMesoI2":
		text = "<h2>ASSÍRIOS</h2><p>Império Neoassírio</p><span>911 a.C. – 609 a.C.</span>";
		break;
	case "oMesoA1":
		text = "<h2>CALDEUS</h2><p>Império Neobabilônico</p><span>626 a.C. – 539 d.C.</span>";
		break;
	case "oMesoA2":
		text = "<h2>IRANIANOS</h2><p>Império Aquemênida</p><span>550 a.C. – 330 a.C.</span>";
		break;
	case "oMesoA3":
		text = "<h2>GREGOS</h2><p>Império Macedônico</p><span>330 a.C. – 323 a.C.</span>";
		break;
	case "oMesoA4":
		text = "<h2>GREGOS</h2><p>Império Selêucida</p><span>312 a.C. – 63 a.C.</span>";
		break;
	case "oMesoA5":
		text = "<h2>IRANIANOS</h2><p>Império Parta</p><span>140 a.C. – 224 d.C.</span>";
		break;
	case "oMesoA6":
		text = "<h2>IRANIANOS</h2><p>Império Sassânida</p><span>224 d.C. – 651 d.C.</span>";
		break;
	default:
		text = "";
}
	document.getElementById("sidetip").innerHTML=text;
	document.getElementById("sidetip").style.display='block';
}

	//Levant
function showTipLevant(Tip) {
let text;
switch (Tip) {
	case "oLevantS0":
		text = "<h2>LEVANTE</h2><p>Neolítico</p><span>12.000 a.C. – 5.000 a.C.</span>";
		break;
	case "oLevantS1":
		text = "<h2>LEVANTE</h2><p>Calcolítico</p><span>5.000 a.C. – 3.300 a.C.</span>";
		break;
	case "oLevantB0":
		text = "<h2>LEVANTE</h2><p>Bronze Antigo</p><span>3.300 a.C. – 2.100 a.C.</span>";
		break;
	case "oLevantB1":
		text = "<h2>LEVANTE</h2><p>Bronze Médio</p><span>2.100 a.C. – 1.500 a.C.</span>";
		break;
	case "oLevantB2":
		text = "<h2>LEVANTE</h2><p>Bronze Recente</p><span>1.500 a.C. – 1.200 a.C.</span>";
		break;
	case "oLevantI0":
		text = "<h2>LEVANTE</h2><p>Idade do Ferro</p><span>1.200 a.C. – 800 a.C.</span>";
		break;
	case "oLevantA0":
		text = "<h2>HEBREUS</h2><p>Casa de Omri</p><span>c. 870 a.C. – 720 a.C.</span>";
		break;
	case "oLevantA1":
		text = "<h2>HEBREUS</h2><p>Império Neo-Assírio</p><span>720 a.C. – 597 d.C.</span>";
		break;
	case "oLevantA2":
		text = "<h2>HEBREUS</h2><p>Exílio Babilônico</p><span>597 a.C. – 516 a.C.</span>";
		break;
	case "oLevantA3":
		text = "<h2>HEBREUS</h2><p>Período do Segundo Templo</p><span>516 a.C. – 70 d.C.</span>";
		break;
	case "oLevantA4":
		text = "<h2>HEBREUS</h2><p>Período dos Asmoneus</p><span>140 a.C. – 37 a.C.</span>";
		break;
	case "oLevantA5":
		text = "<h2>HEBREUS</h2><p>Reino Herodiano</p><span>37 a.C. – 6 d.C.</span>";
		break;
	case "oLevantA6":
		text = "<h2>LEVANTE</h2><p>Período Romano</p><span>6 d.C. – 390 d.C.</span>";
		break;
	case "oLevantA7":
		text = "<h2>HEBREUS</h2><p>Período Bizantino</p><span>390 d.C. – 636 d.C.</span>";
		break;
	default:
		text = "";
}
	document.getElementById("sidetip").innerHTML=text;
	document.getElementById("sidetip").style.display='block';
}

	//Iran
function showTipIran(Tip) {
let text;
switch (Tip) {
	case "oIranS0":
		text = "<h2>PROTO-INDO EUROPEUS</h2><p>Migrações das culturas das estepes</p><span>5.000 a.C. – 800 a.C.</span>";
		break;
	case "oIranB0":
		text = "<h2>ELAMITAS</h2><p>Período Proto-Elamita</p><span>3.200 a.C. – 2.700 a.C.</span>";
		break;
	case "oIranB1":
		text = "<h2>ELAMITAS</h2><p>Período Elamita</p><span>2.700 a.C. – 1.500 a.C.</span>";
		break;
	case "oIranB2":
		text = "<h2>IRANIANOS</h2><p>Período Avéstico</p><span>1.500 a.C. – 500 a.C.</span>";
		break;
	case "oIranI0":
		text = "<h2>ELAMITES</h2><p>Período Neo-Elamita</p><span>xx a.C. – xx a.C.</span>";
		break;
	case "oIranA0":
		text = "<h2>IRANIANOS</h2><p>Período Avéstico</p><span>1.500 a.C. – 500 a.C.</span>";
		break;
	case "oIranA1":
		text = "<h2>IRANIANOS</h2><p>Império Medo</p><span>680 a.C. – 550 a.C.</span>";
		break;
	case "oIranA2":
		text = "<h2>IRANIANOS</h2><p>Império Aquemênida</p><span>550 a.C. – 330 a.C.</span>";
		break;
	case "oIranA3":
		text = "<h2>GREGOS</h2><p>Império Macedônico</p><span>330 a.C. – 323 a.C.</span>";
		break;
	case "oIranA4":
		text = "<h2>GREGOS</h2><p>Império Selêucida</p><span>312 a.C. – 63 a.C.</span>";
		break;
	case "oIranA5":
		text = "<h2>IRANIANOS</h2><p>Império Parta</p><span>247 a.C. – 224 d.C.</span>";
		break;
	case "oIranA6":
		text = "<h2>IRANIANOS</h2><p>Império Sassânida</p><span>224 d.C. – 651 d.C.</span>";
		break;
	default:
		text = "";
}
	document.getElementById("sidetip").innerHTML=text;
	document.getElementById("sidetip").style.display='block';
}

	//Greece
function showTipGreece(Tip) {
let text;
switch (Tip) {
	case "oGreeceB0":
		text = "<h2>CÍCLADES</h2><p>Civilização Cicládica</p><span>3.300 a.C. – 1.000 a.C.</span>";
		break;
	case "oGreeceB1":
		text = "<h2>CRETA</h2><p>Civilização Minóica</p><span>3.100 a.C. – 1.075 a.C.</span>";
		break;
	case "oGreeceB2":
		text = "<h2>MICÊNICOS</h2><p>Período Heládico</p><span>1.750 a.C. – 1.050 a.C.</span>";
		break;
	case "oGreeceI0":
		text = "<h2>GREGOS</h2><p>Idade das Trevas Grega</p><span>1.200 a.C. – 800 a.C.</span>";
		break;
	case "oGreeceA0":
		text = "<h2>GREGOS</h2><p>Período Arcaico</p><span>800 a.C. – 500 a.C.</span>";
		break;
	case "oGreeceA1":
		text = "<h2>GREGOS</h2><p>Período Clássico</p><span>500 a.C. – 300 a.C.</span>";
		break;
	case "oGreeceA2":
		text = "<h2>GREGOS</h2><p>Império Macedônico</p><span>330 a.C. – 323 a.C.</span>";
		break;
	case "oGreeceA3":
		text = "<h2>GREGOS</h2><p>Período Helenístico</p><span>300 a.C. – 30 a.C.</span>";
		break;
	case "oGreeceA4":
		text = "<h2>GREGOS</h2><p>Império Romano</p><span>37 a.C. – 395 d.C.</span>";
		break;
	case "oGreeceA5":
		text = "<h2>GREGOS</h2><p>Império Romano do Oriente</p><span>395 a.C. – 1.453 d.C.</span>";
		break;
	default:
		text = "";
}
	document.getElementById("sidetip").innerHTML=text;
	document.getElementById("sidetip").style.display='block';
}

	//Rome
function showTipRome(Tip) {
let text;
switch (Tip) {
	case "oRomeA0":
		text = "<h2>ROMANOS</h2><p>Reino de Roma</p><span>753 a.C. – 509 a.C.</span>";
		break;
	case "oRomeA1":
		text = "<h2>ROMANOS</h2><p>República de Roma</p><span>509 a.C. – 27 a.C.</span>";
		break;
	case "oRomeA2":
		text = "<h2>ROMANOS</h2><p>Império Romano</p><span>37 a.C. – 395 d.C.</span>";
		break;
	case "oRomeA3":
		text = "<h2>ROMANOS</h2><p>Império Romano do Ocidente</p><span>395 d.C. – 480 d.C.</span>";
		break;
	case "oRomeA4":
		text = "<h2>ROMANOS</h2><p>Reino da Itália</p><span>476 d.C. – 493 d.C.</span>";
		break;
	case "oRomeA5":
		text = "<h2>OSTROGODOS</h2><p>Reino Ostrogótico</p><span>493 d.C. – 552 d.C.</span>";
		break;
	case "oRomeA6":
		text = "<h2>BIZANTINOS</h2><p>Império Romano</p><span>552 d.C. – 602 d.C.</span>";
		break;
	default:
		text = "";
}
	document.getElementById("sidetip").innerHTML=text;
	document.getElementById("sidetip").style.display='block';
}

function hideTip() {
	document.getElementById("sidetip").style.display='none';
}

function showTipMap(Tip) {
	document.getElementById(Tip).style.display='block';
}

function hideTipMap(Tip) {
	document.getElementById(Tip).style.display='none';
}

function showChartLine(Line) {
	document.getElementById(Line).style.stroke='#ff0000';
}

function hideChartLine(Line) {
	document.getElementById(Line).style.stroke='none';
}