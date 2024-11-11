	//General
function showSidebarG(Sidebar) {
let text;
switch (Sidebar) {
	case "eSA0":
		text = `<h1>Revolução do Neolítico</h1><img src=img/maps/Farming.png alt="Disseminação da agricultura no neolítico" onclick="showSidebar('meSA0')"><p class="legend"><i class="fa fa-map-o"></i> Mapa da disseminação da agricultura no neolítico</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eSA1":
		text = `<h1>Idade do Cobre</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eBA0":
		text = `<h1>Idade do Bronze</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eBA1":
		text = `<h1>Bronze Antigo</h1><img src=img/maps/Bronze1.png alt="Placeholder" onclick="showSidebar('meBA1')"><p class="legend"><i class="fa fa-map-o"></i> Mapa composto do período do Bronze Antigo.</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eBA2":
		text = `<h1>Bronze Médio</h1><img src=img/maps/Bronze2.png alt="Placeholder" onclick="showSidebar('meBA2')"><p class="legend"><i class="fa fa-map-o"></i> Mapa composto do período do Bronze Médio.</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eBA3":
		text = `<h1>Bronze Recente</h1><img src=img/maps/Bronze3.png alt="Placeholder" onclick="showSidebar('meBA3')"><p class="legend"><i class="fa fa-map-o"></i> Mapa composto do período do Bronze Recente.</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "e42ka":
		text = `<h1>Mudança Climática de 4200 ap</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eBAC":
		text = `<h1>Colapso da Idade do Bronze</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Event Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eIA0":
		text = `<h1>Idade do Ferro</h1><img src=img/maps/IronAge.png alt="Mapa composto das principais regiões da Idade do Ferro" onclick="showSidebar('meIA0')"><p class="legend"><i class="fa fa-map-o"></i> Mapa composto das principais regiões da Idade do Ferro</p><p class="text">O Levante após o Colapso da Idade do Bronze<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "eAA0":
		text = `<h1>Antiguidade Clássica</h1><img src=img/maps/Ancient2.png alt="Placeholder" onclick="showSidebar('meAA1')"><p class="legend"><i class="fa fa-map-o"></i> Mapa composto das principais regiões da Antiguidade Clássica</p><p class="text">800 a.C. – 300 a.C.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbe3200bc":
		text = `<h1>Hieróglifos Egípcios</h1><img src=img/charts/Alphabet.png alt="Placeholder" onclick="showSidebar('cAlphabet')"><p class="legend"><i class="fa fa-sitemap"></i> Fluxograma dos principais sistemas de escrita descendentes do sistema egípcio</p><p class="text">Escrita do Antigo Egito<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sb1050bc":
		text = `<h1>Alfabeto Fenício</h1><img src=img/charts/Alphabet.png alt="Placeholder" onclick="showSidebar('cAlphabet')"><p class="legend"><i class="fa fa-sitemap"></i> Fluxograma dos principais sistemas de escrita descendentes do sistema egípcio</p><p class="text">Escrita dos Antigos Fenícios<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

	//Egypt
function showSidebarEgypt(Sidebar) {
let text;
switch (Sidebar) {
	case "sbEgyptB0":
		text = `<h1>Período Pré-Histórico</h1><img src=img/maps/EgyptS0.png alt="Mapa do Alto e Baixo Egito" onclick="showSidebar('mEgyptS0')"><p class="legend">Mapa do Alto e Baixo Egito</p><p class="text">Período Pré-Histórico Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB1":
		text = `<h1>Época Tinita</h1><img src=img/maps/EgyptB1.png alt="Mapa do Egito unificado" onclick="showSidebar('mEgyptB1')"><p class="legend">Mapa do Egito unificado</p><p class="text">Período Arcaico Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB2":
		text = `<h1>Império Antigo</h1><img src=img/EgyptB2.png alt="Complexo de pirâmides de Gizé"><p class="legend">Complexo de pirâmides de Gizé</p><p class="text">Império Antigo Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB3":
		text = `<h1>Primeiro Período Intermédio</h1><img src=img/EgyptB3.png alt="Placeholder"><p class="legend">Faraó Mentuotep II recebe uma oferenda</p><p class="text">Idade das Trevas Egípcia<br>Um período de fragmentação política vê o Egito dividido em pequenos reinos locais que competem por poder, com centros maiores de poder em Heracleópolis no Baixo Egito e Tebas no Alto Egito, marcado pelo declínio na autoridade central e da antiga ordem.</p><p class="text">Apesar da instabilidade política, a arte, literatura e práticas religiosas continuam se desenvolvendo, preparando o palco para a renascença cultural do Império Médio, que se inicia com a reunificação do Egito pelo faraó Mentuotepe II, terceiro faraó da 11ª dinastia, de Tebas.</p>`;
		break;
	case "sbEgyptB4":
		text = `<h1>Império Médio</h1><img src=img/maps/EgyptB4.png alt="Mapa do Egito durante o Império Médio" onclick="showSidebar('mEgyptB4')"><p class="legend">Mapa do Egito durante o Império Médio</p><p class="text">Império Médio Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB5":
		text = `<h1>Segundo Período Intermédio</h1><img src=img/EgyptB5.png alt="Placeholder"><p class="legend">Povos semitas do Levante introduzem o cavalo ao egito</p><p class="text">Idade das Trevas Egípcia<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB6":
		text = `<h1>Império Novo</h1><img src=img/maps/EgyptB6.png alt="Mapa do Egito durante o Império Novo, século 15 a.C." onclick="showSidebar('mEgyptB6')"><p class="legend">Mapa do Egito durante o Império Novo, século 15 a.C.</p><p class="text">Império Novo Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptI1":
		text = `<h1>Terceiro Período Intermédio</h1><img src=img/maps/EgyptI1.png alt="Mapa do Reino de Cuxe" onclick="showSidebar('mEgyptI1')"><p class="legend">Mapa do Reino de Cuxe</p><p class="text">Idade das Trevas Egípcia<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptA1":
		text = `<h1>Época Baixa</h1><img src=img/maps/EgyptA1.png alt="Mapa do Oriente Próximo, século 6 a.C." onclick="showSidebar('mEgyptA1')"><p class="legend">Mapa do Oriente Próximo, século 6 a.C.</p><p class="text">Idade das Trevas Egípcia<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptA2":
		text = `<h1>Império Aquemênida</h1><img src=img/maps/IranA2.png alt="Mapa do Império Aquemênida em sua maior extensão, 500 a.C." onclick="showSidebar('mIranA2')"><p class="legend"><i class="fa fa-map-o"></i> Mapa do Império Aquemênida em sua maior extensão, 500 a.C.</p><p class="text">Egito sob domínio persa<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptA3":
		text = `<h1>Império Macedônico</h1><img src=img/maps/GreeceA2.png alt="Mapa do Império Macedônico em sua maior extensão" onclick="showSidebar('mGreeceA2')"><p class="legend">Mapa do Império Macedônico em sua maior extensão</p><p class="text">Egito sob domínio macedônico<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptA4":
		text = `<h1>Dinastia Ptolemaica</h1><img src=img/maps/EgyptA4.png alt="Mapa do Egito Ptolemaico, 235 A.D." onclick="showSidebar('mEgyptA4')"><p class="legend">Mapa do Egito Ptolemaico, 235 A.D.</p><p class="text">Reino Ptolemaica<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptA5":
		text = `<h1>Egito Romano</h1><img src=img/maps/EgyptA5.png alt="Provincia Aegypti dentro do Império Romano" onclick="showSidebar('mEgyptA5')"><p class="legend"><i>Provincia Aegypti</i> dentro do Império Romano</p><p class="text">Egito Romano<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

	//Mesopotamia
function showSidebarMeso(Sidebar) {
let text;
switch (Sidebar) {
	case "sbMesoS0":
		text = `<h1>Período Pré-Civilização</h1><img src=img/maps/MesoS0.png alt="Mapa do Crescente Fértil com algumas das primeiras cidades, c. 9.000 a.C."><p class="legend">Mapa do Crescente Fértil com algumas das primeiras cidades, c. 9.000 a.C.</p><p class="text">Período Pré-Civilização Mesopotâmico<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoS1":
		text = `<h1>Período de Uruque</h1><img src=img/maps/MesoS1.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoB1":
		text = `<h1>Período Dinástico</h1><img src=img/MesoB1.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Período Dinástico Arcaico da Mesopotâmia<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoB2":
		text = `<h1>Império Acadiano</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Unificação da Mesopotâmia por Sargão da Acádia<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoB3":
		text = `<h1>Império Neossumério</h1><img src=img/MesoB3.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Terceira Dinastia de Ur<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoB4":
		text = `<h1>Império Babilônico</h1><img src=img/MesoB4.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoB5":
		text = `<h1>Dinastia Cassita</h1><img src=img/maps/MesoB5.png alt="Placeholder" onclick="showSidebar('mMesoB5')"><p class="legend">Mapa da Babilônia no período Cassita</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoI1":
		text = `<h1>Médio Império Assírio</h1><img src=img/MesoI1.png alt="Placeholder"><p class="legend">Grifo sendo atacado por herói, selo do século 12-11 a.C.</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoI2":
		text = `<h1>Império Neoassírio</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoA1":
		text = `<h1>Império Neobabilônico</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoA2":
		text = `<h1>Império Aquemênida</h1><img src=img/maps/IranA2.png alt="Mapa do Império Aquemênida em sua maior extensão, 500 a.C." onclick="showSidebar('mIranA2')"><p class="legend"><i class="fa fa-map-o"></i> Mapa do Império Aquemênida em sua maior extensão, 500 a.C.</p><p class="text">Mesopotâmia sob domínio persa<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoA3":
		text = `<h1>Império Macedônico</h1><img src=img/maps/GreeceA2.png alt="Mapa do Império Macedônico em sua maior extensão" onclick="showSidebar('mGreeceA2')"><p class="legend">Mapa do Império Macedônico em sua maior extensão</p><p class="text">Mesopotâmia sob domínio macedônico<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoA4":
		text = `<h1>Império Selêucida</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoA5":
		text = `<h1>Império Parta</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbMesoA6":
		text = `<h1>Império Sassânida</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder text<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

//Levant
function showSidebarLevant(Sidebar) {
let text;
switch (Sidebar) {
	case "sbLevantS0":
		text = `<h1>Levante no Neolítico</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantS1":
		text = `<h1>Levante no Calcolítico</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantB0":
		text = `<h1>Levante no Bronze Antigo</h1><img src=img/maps/LevantB0.png alt="Placeholder" onclick="showSidebar('meBA1')"><p class="legend"><i class="fa fa-map-o"></i> Mapa composto dos principais estados durante o período do Bronze Antigo</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantB1":
		text = `<h1>Levante no Bronze Médio</h1><img src=img/maps/LevantB1.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantB2":
		text = `<h1>Levante no Bronze Recente</h1><img src=img/maps/LevantB2.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantI0":
		text = `<h1>Levante durante a Idade do Ferro</h1><img src=img/LevantI0.png alt="Delegação de Israelitas trazem tributo ao rei Salmanaser III, cena do Obelisco Negro, c. 825 a.C." onclick="showSidebar('meIA0')"><p class="legend">Delegação de Israelitas trazem tributo ao rei Salmanaser III, cena do Obelisco Negro, c. 825 a.C.</p><p class="text">O Levante após o Colapso da Idade do Bronze<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA0":
		text = `<h1>Levant Placeholder</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA1":
		text = `<h1>Levant Placeholder</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA2":
		text = `<h1>Levant Placeholder</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA3":
		text = `<h1>Período do Segundo Templo</h1><img src=img/LevantA3.png alt="Pedra de Magdala"><p class="legend"><i class="fa fa-image"></i> Representação do Segundo Templo de Jerusalém encontrado na Pedra de Magdala</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA4":
		text = `<h1>Dinastia dos Asmoneus</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA5":
		text = `<h1>Reino Herodiano</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA6":
		text = `<h1>Período Romano</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbLevantA7":
		text = `<h1>Período Bizantino</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Levant Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

//Iran
function showSidebarIran(Sidebar) {
let text;
switch (Sidebar) {
	case "sbIranS0":
		text = `<h1>Migrações Indo-Européias</h1><img src=img/maps/IndoEuro.png alt="Placeholder" onclick="showSidebar('mIndoEuro')"><p class="legend"><i class="fa fa-map-o"></i> Mapa das migrações dos povos indo-europeus de acordo com a hipótese Kurgan</p><p class="text">Os povos proto-indo-europeus<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbIranB2":
		text = `<h1>Período Avéstico</h1><img src=img/IranB2.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Migração dos povos iranianos<br>Por volta de 2.500 a.C., o ramo indo-iraniano dos proto-indo-europeus começa a se separar de outros grupos indo-europeus. Eles migram para o sul, eventualmente se estabelecendo nas regiões que se tornariam o Irã e o norte da Índia. Este grupo é o ancestral comum dos antigos iranianos e dos indo-arianos da Índia.<br>Os proto-indo-iranianos entram em contato com a civilização Transoxiana na Ásia Central. Essa interação influencia sua cultura, particularmente em termos de práticas religiosas e organização social.<br>Por volta de 1.500 a.C., povos de língua indo-iraniana começaram a se estabelecer no planalto iraniano, estabelecendo as bases para o desenvolvimento posterior de culturas iranianas distintas, incluindo os persas e os medos.<br><br>Desenvolvimento das primeiras sociedades iranianas.<br>Os grupos indo-iranianos gradualmente se dividiram em diferentes tribos, com os medos e persas emergindo como grupos significativos. Os medos se estabelecem no noroeste do planalto, enquanto os persas se estabelecem no sudoeste, na região conhecida como Parsa (atual Fars).<br>Durante este período, o zoroastrismo, uma das religiões monoteístas mais antigas do mundo, começa a tomar forma. Tradicionalmente atribuído ao profeta Zoroastro (ou Zaratustra), o zoroastrismo influencia profundamente a cultura, a lei e a governança persas. Ele enfatiza a dualidade do bem e do mal e a importância da escolha individual.</p>`;
		break;
	case "sbIranA1":
		text = `<h1>Império Medo</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Egito sob domínio persa<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbIranA2":
		text = `<h1>Império Aquemênida</h1><img src=img/maps/IranA2.png alt="Mapa do Império Aquemênida em sua maior extensão, 500 a.C." onclick="showSidebar('mIranA2')"><p class="legend"><i class="fa fa-map-o"></i> Mapa do Império Aquemênida em sua maior extensão, 500 a.C.</p><p class="text">Mesopotâmia sob domínio persa<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbIranA3":
		text = `<h1>Império Macedônico</h1><img src=img/maps/GreeceA2.png alt="Mapa do Império Macedônico em sua maior extensão" onclick="showSidebar('mGreeceA2')"><p class="legend">Mapa do Império Macedônico em sua maior extensão</p><p class="text">Mesopotâmia sob domínio macedônico<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbIranA4":
		text = `<h1>Império Selêucida</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Egito Romano<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbIranA5":
		text = `<h1>Império Parta</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Egito Romano<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbIranA6":
		text = `<h1>Império Sassânida</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Egito Romano<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

	//Greece
function showSidebarGreece(Sidebar) {
let text;
switch (Sidebar) {
	case "sbGreeceB1":
		text = `<h1>Minoanos</h1><img src=img/GreeceB0.png alt="Placeholder"><p class="legend">Afresco da taurocatapsia - salto sobre touros - do palácio de Cnossos, Creta. C. 1600 - 1450 a.C.</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbGreeceA0":
		text = `<h1>Período Arcaico</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbGreeceA1":
		text = `<h1>Período Clássico</h1><img src=img/Placeholder.png alt="Placeholder"><p class="legend">Placeholder</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbGreeceA2":
		text = `<h1>Império Macedônico</h1><img src=img/maps/GreeceA2.png alt="Mapa do Império Macedônico em sua maior extensão" onclick="showSidebar('mGreeceA2')"><p class="legend">Mapa do Império Macedônico em sua maior extensão</p><p class="text">Mesopotâmia sob domínio macedônico<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbGreeceA3":
		text = `<h1>Período Helenístico</h1><img src=img/maps/GreeceA30.png alt="Mapa dos reinos helenísticos após a guerra dos Diadochi, 301 d.C." onclick="showSidebar('meAA2')"><p class="legend"><i class="fa fa-map-o"></i> Mapa dos reinos helenísticos após a guerra dos Diadochi, 301 d.C.</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbGreeceA4":
		text = `<h1>Império Romano</h1><img src=img/maps/RomeA20.png alt="Mapa das províncias do Império Romano, AD 117" onclick="showSidebar('mRomeA2')"><p class="legend">Mapa das províncias do Império Romano, AD 117</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbGreeceA5":
		text = `<h1>Império Romano do Oriente</h1><img src=img/maps/RomeA3.png alt="Mapa das províncias do Império Romano, AD 117" onclick="showSidebar('mRomeA2')"><p class="legend">Mapa das províncias do Império Romano, AD 117</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

	//Rome
function showSidebarRome(Sidebar) {
let text;
switch (Sidebar) {
	case "sbRomeA0":
		text = `<h1>Reino de Roma</h1><img src=img/RomeA0.png alt="Placeholder"><p class="legend">A loba amamenta os gêmeos Rômulo e Remo.</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbRomeA1":
		text = `<h1>República de Roma</h1><img src=img/maps/Ancient2.png alt="Placeholder" onclick="showSidebar('meAA1')"><p class="legend">Placeholder</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbRomeA2":
		text = `<h1>Império Romano</h1><img src=img/maps/RomeA2.png alt="Mapa das províncias do Império Romano, AD 117" onclick="showSidebar('mRomeA2')"><p class="legend"><i class="fa fa-map-o"></i> Mapa das províncias do Império Romano, AD 117</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbRomeA3":
		text = `<h1>Império Romano do Ocidente</h1><img src=img/maps/RomeA3.png alt="Divisão do Império Romano em Ocidente e Oriente, AD 395" onclick="showSidebar('mRomeA3')"><p class="legend">Divisão do Império Romano em Ocidente e Oriente, AD 395</p><p class="text">Placeholder<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

	//Ancient
function showSidebarAA(Sidebar) {
let text;
switch (Sidebar) {
	case "sbEgyptB0":
		text = `<h1>Período Pré-Histórico</h1><img src=img/maps/EgyptS0.png alt="Mapa do Alto e Baixo Egito" onclick="showSidebar('mEgyptS0')"><p class="legend">Mapa do Alto e Baixo Egito</p><p class="text">Período Pré-Histórico Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB1":
		text = `<h1>Época Tinita</h1><img src=img/maps/EgyptB1.png alt="Mapa do Egito unificado" onclick="showSidebar('mEgyptB1')"><p class="legend">Mapa do Egito unificado</p><p class="text">Período Arcaico Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB2":
		text = `<h1>Império Antigo</h1><img src=img/EgyptB2.png alt="Complexo de pirâmides de Gizé"><p class="legend">Complexo de pirâmides de Gizé</p><p class="text">Império Antigo Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB4":
		text = `<h1>Império Médio</h1><img src=img/maps/EgyptB4.png alt="Mapa do Egito durante o Império Médio" onclick="showSidebar('mEgyptB4')"><p class="legend">Mapa do Egito durante o Império Médio</p><p class="text">Império Médio Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	case "sbEgyptB6":
		text = `<h1>Império Novo</h1><img src=img/maps/EgyptB6.png alt="Mapa do Egito durante o Império Novo, século 15 a.C." onclick="showSidebar('mEgyptB6')"><p class="legend">Mapa do Egito durante o Império Novo, século 15 a.C.</p><p class="text">Império Novo Egípcio<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
		break;
	default:
		text = "";
}
	document.getElementById("sidebarModal").style.display='block';
	document.getElementById("info").innerHTML=text;
}

function showSidebar(Sidebar) {
	var x = document.getElementById(Sidebar);
	if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
		x.style.display = "none";
    }
});

  
}