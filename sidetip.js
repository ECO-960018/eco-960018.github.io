//TOOLTIP

	//Egypt
function showTipEgypt(Tip) {
let text;
switch (Tip) {
	case "oEgyptS0":
		text = "<h2>EGITO</h2><p>Período Pré-Histórico</p><span>???? a.C. – 3150 a.C.</span>";
		break;
	case "oEgyptB1":
		text = "<h2>EGITO</h2><p>Época Tinita</p><span>3150 a.C. – 2686 a.C.</span>";
		break;
	case "oEgyptB2":
		text = "<h2>EGITO</h2><p>Império Antigo</p><span>2700 a.C. – 2200 a.C.</span>";
		break;
	case "oEgyptB3":
		text = "<h2>EGITO</h2><p>Primeiro Período Intermédio</p><span>2181 a.C. – 2055 a.C.</span>";
		break;
	case "oEgyptB4":
		text = "<h2>EGITO</h2><p>Império Médio</p><span>2040 a.C. – 1700 a.C.</span>";
		break;
	case "oEgyptB5":
		text = "<h2>EGITO</h2><p>Segundo Período Intermédio</p><span>1700 a.C. – 1550 a.C.</span>";
		break;
	case "oEgyptB6":
		text = "<h2>EGITO</h2><p>Império Novo</p><span>1550 a.C. – 1070 a.C.</span>";
		break;
	case "oEgyptI1":
		text = "<h2>EGITO</h2><p>Terceiro Período Intermédio</p><span>1090 a.C. – 664 a.C.</span>";
		break;
	case "oEgyptA1":
		text = "<h2>EGITO</h2><p>Época Baixa</p><span>664 a.C. – 525 a.C.</span>";
		break;
	case "oEgyptA2":
		text = "<h2>EGITO</h2><p>Império Aquemênida</p><span>525 a.C. – 330 a.C.</span>";
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
		text = "<h2>SUMÉRIOS</h2><p>Pré-Civilização</p><span>5500 a.C. – 4000 a.C.</span>";
		break;
	case "oMesoS1":
		text = "<h2>SUMÉRIOS</h2><p>Período de Uruk</p><span>4000 a.C. – 3100 a.C.</span>";
		break;
	case "oMesoB1":
		text = "<h2>SUMÉRIOS</h2><p>Período Dinástico</p><span>2900 a.C. – 2400 a.C.</span>";
		break;
	case "oMesoB2":
		text = "<h2>ACADIANOS</h2><p>Império Acadiano</p><span>2300 a.C. – 2100 a.C.</span>";
		break;
	case "oMesoB3":
		text = "<h2>SUMÉRIOS</h2><p>Império Neo-Sumério</p><span>2112 a.C. – 2004 a.C.</span>";
		break;
	case "oMesoB4":
		text = "<h2>AMORITAS</h2><p>Império Babilônico</p><span>1894 a.C. – 1595 a.C.</span>";
		break;
	case "oMesoB5":
		text = "<h2>CASSITAS</h2><p>Dinastia Cassita da Babilônia</p><span>1595 a.C. – 1155 a.C.</span>";
		break;
	case "oMesoI1":
		text = "<h2>ASSÍRIOS</h2><p>Médio Império Assírio</p><span>1363 a.C. – 912 a.C.</span>";
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
		text = "<h2>LEVANTE</h2><p>Idade do Ferro</p><span>1200 a.C. – 800 a.C.</span>";
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
		text = "<h2>PROTO-INDO EUROPEUS</h2><p>Migrações das culturas das estepes</p><span>5000 a.C. – 800 a.C.</span>";
		break;
	case "oIranB0":
		text = "<h2>ELAMITAS</h2><p>Período Proto-Elamita</p><span>3200 a.C. – 2700 a.C.</span>";
		break;
	case "oIranB1":
		text = "<h2>ELAMITAS</h2><p>Período Elamita</p><span>2700 a.C. – 1500 a.C.</span>";
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
		text = "<h2>MINOANOS</h2><p>Cultura Palacial<br>2200 a.C. – 1900 a.C.</p>";
		break;
	case "oGreeceB1":
		text = "<h2>MICÊNICOS</h2><p>Período Heládico<br>1750 a.C. – 1050 a.C.</p>";
		break;
	case "oGreeceI0":
		text = "<h2>GREGOS</h2><p>Idade das Trevas Grega<br>1200 a.C. – 800 a.C.</p></p>";
		break;
	case "oGreeceA0":
		text = "<h2>GREGOS</h2><p>Período Arcaico<br>800 a.C. – 500 a.C.</p></p>";
		break;
	case "oGreeceA1":
		text = "<h2>GREGOS</h2><p>Período Clássico<br>500 a.C. – 300 a.C.</p></p>";
		break;
	case "oGreeceA2":
		text = "<h2>GREGOS</h2><p>Império Macedônico<br>330 a.C. – 323 a.C.</p>";
		break;
	case "oGreeceA3":
		text = "<h2>GREGOS</h2><p>Período Helenístico<br>300 a.C. – 30 a.C.</p></p>";
		break;
	case "oGreeceA4":
		text = "<h2>GREGOS</h2><p>Império Romano<br>37 a.C. – 395 d.C.</p>";
		break;
	case "oGreeceA5":
		text = "<h2>GREGOS</h2><p>Império Romano do Oriente<br>37 a.C. – 1453 d.C.</p>";
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
		text = "<h2>ROMANOS</h2><p>Reino de Roma<br>753 a.C. – 509 a.C.</p>";
		break;
	case "oRomeA1":
		text = "<h2>ROMANOS</h2><p>República de Roma<br>509 a.C. – 27 a.C.</p>";
		break;
	case "oRomeA2":
		text = "<h2>ROMANOS</h2><p>Império Romano<br>37 a.C. – 395 d.C.</p>";
		break;
	case "oRomeA3":
		text = "<h2>ROMANOS</h2><p>Império Romano do Ocidente<br>395 d.C. – 480 d.C.</p>";
		break;
	case "oRomeA4":
		text = "<h2>ROMANOS</h2><p>Reino da Itália<br>476 d.C. – 493 d.C.</p>";
		break;
	case "oRomeA5":
		text = "<h2>OSTROGODOS</h2><p>Reino Ostrogótico<br>493 d.C. – 552 d.C.</p>";
		break;
	case "oRomeA6":
		text = "<h2>BIZANTINOS</h2><p>Império Romano<br>552 d.C. – 602 d.C.</p>";
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