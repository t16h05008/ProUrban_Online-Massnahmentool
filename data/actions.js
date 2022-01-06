// Diese Datei dient als Datengrundlage für das Online-Maßnahmentool:
// TODO Link hier einfügen sobald Tool online ist


// Die beiden Kostenarten lassen sich aus cost ableiten (Texterkennung)
// Ebenso wie die räumliche Reichweite aus area und die Zeit aus time.

// effects und challenges müssen unter iconsValuation quantifiziert werden, da die Beschreibung hier nicht standardisiert ist.
// Hierfür wäre diese Skala gut:
//	1	  =	ein Symbol ausgefüllt
//	1.5	=	ein Symbol ausgefüllt, das zweite zur Hälfte
//	2	  =	zwei Symbole ausgefüllt
//	2.5	=	zwei Symbole ausgefüllt, das dritte zur Hälfte
//	3	  =	alle Symbole Ausgefüllt

let actions = 
[{
  id: 411,
  number: "4.1.1",
  title: "Städtebauförderprogramm",
  description: `<p>Im Rahmen der Städtebauförderung von Bund und Land existiert eine Vielzahl an Programmzweigen und Ausschreibungen, die insbesondere strukturschwachen Kommunen wie Gelsenkirchen zugutekommen sollen. Daher bietet es sich insbesondere in diesen Konzepten an, Urbane Produktion von vorneherein als wichtigen Baustein bei der Aufstellung und Entwicklung mitzudenken.</p>`,
  targetgroups: `<p>Stadtverwaltung, Politik</p>`,
  actors: `<p>Stadtplanung, Wirtschaftsförderung, Quartiers- /Citymanagement</p>`,
  cost: `<p>Personal (mittel bis hoch), Sachkosten (keine, über Fördermittel gedeckt)</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>Mit dem Auslaufen des Forschungsprojektes steht innerhalb der Verwaltung keine Personalstelle mehr zur Verfügung, deren Schwerpunkt auf Urbaner Produktion liegt</p>`,
  solution: `<p>Urbane Produktion innerhalb der Verwaltung als Baustein etablieren, der auf allen Ebenen mitgedacht wird</p>`,
  effects: `<p>Umsetzung und Verstetigung der Ansätze des Forschungsprojektes UrbaneProduktion.Ruhr</p>`,
  challenges: `<p>Urbane Produktion wird von manchen Akteur*innen noch nicht als Option zur Aufwertung der Stadt gesehen. Urbane Produktion muss als neuer inhaltlichen Schwerpunkt etabliert werden und konzeptionell sowie strategisch in zukünftigen Entwicklungen mitgedacht werden</p>`,
  interactions: `<p>Je nach Förderprogramm kann die Gesamtheit der Maßnahmen mit dem jeweiligen Programm verknüpft werden</p>`,
  area: `<p>Stadtteil/Quartier , Gesamtstadt</p>`,
  examples: `<ul>
    <li> <a href="https://www.gelsenkirchen.de/de/infrastruktur/-stadtplanung/stadterneuerung_gelsenkirchen/_doc/Integriertes_-Entwicklungskonzept_Schalke_Nord_2020.pdf" target="_blank">Implementierung von Urbaner Produktion als Baustein im IEK Schalke-Nord</a></li></ul>`,
  image: "img/staedtebaufoerderprogramm.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 3,
    challenges: 1
  },
  theme: "Fördermittel und Förderprogramme",
},

// TODO 4.1.2 sobald fertig

{
  id: 421,
  number: "4.2.1",
  title: "Zechenstandorte / ehemalige Industrieflächen",
  description: `<p><b>Neue Zeche Westerholt:</b> Bei der neuen Zeche Westerholt handelt es sich um ein ehemaliges Zechengelände, dessen Geschichte bis in das 19. Jahrhundert reicht. Bereits seit Ende 2008 stehen auf der Zeche Westerholt die Räder still. Seit dieser Zeit arbeiten die Städte Gelsenkirchen und Herten für die auf der Stadtgrenze gelegene Anlage gemeinsam mit der RAG Montan Immobilien an Programmen und Plänen für die Nachnutzung der ehemaligen Zeche. In den Zielperspektiven des Masterplans heißt es, dass neben der „Eroberung“ des ehemaligen Zechengeländes für die Bevölkerung die wirtschaftlichen Aspekte im Vordergrund stehen und es darum geht, neue und zukunftssichere Arbeitsplätze zu schaffen, die in neue Wohn- und Lebenslagen eingebunden sind. Die Kreislaufwirtschaft wurde hierbei als „Zukunftsthema“ identifiziert. Damit ergibt sich eine konkrete Perspektive für urbane Produzent*innen, die künftig in Teilen der alten Zechenhallen produzieren, bzw. diese als Showrooms nutzen könnten. Bei der integrierten Entwicklung des Geländes, die durch die Entwicklungsgesellschaft Neue Zeche Westerholt mbH gewährleistet wird, sollten Anreize und Fördermöglichkeiten für urbane Produzent*innen mitgedacht werden.</p>
  <p><b>Zeche Hugo:</b> Das Gelände der Zeche Hugo in Gelsenkichen-Buer, in unmittelbarer Nähe zur Rungenberghalde, wird seitens des Referats Stadtplanung als „Suchraum für Transformation“ betrachtet. Während das Fördergerüst und die Fördermaschine von Schacht 2 heute von einem gemeinnützigen Verein als musealer Veranstaltungsort betrieben werden, steht der zusammenhängende und denkmalgeschützte Gebäudekomplex von Waschkaue und Verwaltung mit Außenanlagen leer. Alle anderen oberirdischen Anlagen wurden abgerissen. Eine mögliche Nutzung durch die angrenzende Fachhochschule / Westfälische Hochschule Gelsenkirchen wurde immer wieder diskutiert, bisher aber ohne Ergebnis. Heute befinden sich die Gebäude im Besitz eines Privateigentümers, der nach eigenem Bekunden Teile des Geländes zur Präsentation seiner Oldtimer nutzen möchte, aber auch offen ist für den Verkauf der Gebäude und des umliegenden Geländes. Für die Gebäudetrakte auf zwei Etagen existieren bisher keine tragfähigen Entwicklungskonzepte. Durch die räumliche Nähe zur Hochschule und dem dortigen Makerspace, die Historie und dem Gebäudezuschnitt ist die Zeche Hugo prädestiniert für eine zukünftige Entwicklung, die das Thema der urbanen Produktion einschließt. Das Gelände wäre aufgrund der Größe und den industriehistorischen Potenzialen ebenfalls interessant für eine Entwicklung durch eine der Stiftungen in NRW, welche sich der Nachnutzung geschichtsträchtiger Gebäude verschrieben haben.</p>`,
  targetgroups: `<p>Investor*innen, Stiftungen, Eigentümer*innen, Urban produzierende Betriebe</p>`,
  actors: `<p>Eigentümer*innen, Stadtverwaltung, Politik</p>`,
  cost: `<p>Personal (hoch), Sachkosten (hoch; 7-stelliger Bereich)</p>`,
  time: `<p>Langfristig</p>`,
  problem: `<p>Es fehlt an Entwicklungskonzepten und Folgenutzungen für ein denkmalgeschütztes altes Zechenareal, das zwischenzeitlich Vandalismus ausgesetzt war. Oft mangelt es bei den Eigentümern von Zechenstandorten / ehemaligen Industrieflächen an Ressourcen, diese adäquat zu entwickeln oder zu verwalten.</p>`,
  solution: `<p>Akquise von Investor*innen, Entwicklung von tragfähigen Perspektiven durch Politik & Verwaltung unter Einbeziehung einer hierauf spezialisierten Stiftung und Investor*innen sowie der Westfälischen Hochschule Gelsenkirchen, sodass die Standorte eine regionale Strahlkraft entfalten, ggf. Aufkauf des Geländes durch die Stadt</p>`,
  effects: `<p>"Räumlicher Brückenschlag" zwischen Hochschule und Stadtkern, Synergien. Die Etablierung Urbaner Produktion an derartigen historisch bedeutsamen Standorten erhöht durch die vorhandene Strahlkraft die öffentliche Wahrnehmung sowie die Relevanz der Thematik. Auch der Standort profitiert von den neuen funktionellen Nutzungen</p>`,
  challenges: `<p>Denkmalschutz, Bodenbelastung, Belastung der Gebäude, Kosten, Bauordnung, besondere Verkehrssituation</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  <li>Inkubator(en) und praktische Lernorte für die Stadtgesellschaft</li>
  <li>Zentrum für Urbane Produktion / Handwerkerhof</li>
  <li>Integriertes Wirtschaftsflächenkonzept</li>
  </ul>`,
  area: `<p>Grundstück/Immobilie</p>`,
  examples: `<ul>
  <li><a href="https://www.montag-stiftungen.de/default-title/urbane-nachbarschaft-samtweberei" target="_blank">Entwicklung der alten Samtweberei durch die Montag Stiftung</a></li>
  <li><a href="https://www.immobilienmanager.de/greyfield-erwirbt-ehemaliges-funke-druckhaus-in-essen-10052021" target="_blank">Innovatives Nachnutzungskonzept der Greyfield Stiftung</a></li>
  </ul>`,
  image: "img/zechenstandorte.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 3,
    challenges: 3
  },
  theme: "Immobilienkomplexe und Einzelstandorte mit Strahlkraft",
},

{
  id: 422,
  number: "4.2.2",
  title: "Produktive Kirchenimmobilien",
  description: `<p>In Gelsenkirchen ist ein Rückgang an aktiv genutzten Kirchenimmobilien zu verzeichnen. Daher besteht ein Handlungsbedarf, um diese Gemeinbedarfsflächen sowie die Baukultur zu erhalten. Vorreiter wie die Bäckerei Zipper im Stadtteil Erle haben ein Grundstück der Kirche erworben, um die Gemeindehausflächen als Büro und Veranstaltungsflächen weiter zu nutzen. In dem Kirchengebäude sollte die Backstube einziehen. Corona- und Altersbedingt konnte das geplante Vorhaben nicht umgesetzt werden.</p>
  <p>Ein Fonds für Kirchenimmobilien könnte Unternehmen und Initiativen dabei unterstützen, Kirchenimmobilien zu erhalten, um den Gebäuden neues Leben einzuhauchen. Aufgrund der hohen Investitionskosten und der steigenden Zahl an leerstehenden Kirchengebäuden erscheint es langfristig unabdingbar, auch private Investor*innen von den Chancen für urbane Produktionsbetriebe in Kirchenräumen zu überzeugen. In Gelsenkirchen, dem Ruhrgebiet sowie Deutschland insgesamt fehlt es hier noch an Leuchtturmprojekten, so dass die Erarbeitung von tragfähigen Nutzungskonzepten und die Implementierung solcher Projekte für risikofreudige Kapitalgeber*innen eine interessante Option darstellt.</p>`,
  targetgroups: `<p>Evangelische und katholische Kirche, Urban produzierende Betriebe, Gründer*innen</p>`,
  actors: `<p>Stadt, evangelische und katholische Kirche, Urban produzierende Betriebe, Investor*innen</p>`,
  cost: `<p>Personal (hoch), Sachkosten (hoch; Je nach Umsetzung und Gebäude, Sanierungs- und Umbaukosten)</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>Kirchengebäude fallen zunehmend leer oder werden abgerissen. Oft werden die Flächen veräußert. Damit fallen wichtige Flächen für den Gemeinbedarf in der Stadt weg.</p>`,
  solution: `<p>Erbbaurecht, lokale Unternehmen und Investor*innen zur Nutzung finden und bei Umnutzung unterstützen</p>`,
  effects: `<p>Erhaltung der Baukultur, Vermeidung von Leerständen, zunehmender Tourismus, Attraktivitätssteigerung, kurze Wege</p>`,
  challenges: `<p>Denkmalschutz, Brandschutz, Nutzungsänderungsanträge- und Genehmigungen, oft teure Instandhaltung des Gebäudes.</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Zwischennutzung</li>
  <li>Inkubator(en) und praktische Lernorte für die Stadtgesellschaft</li>
  <li>Zentrum für Urbane Produktion / Handwerkerhof</li>
  <li>Kurator zur Förderung von Bestandsunternehmen urban produzierender Unternehmen</li>
  <li>Integriertes Wirtschaftsflächenkonzept</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  </ul>`,
  area: `<p>Immobilie/Grundstück, positive Effekte auf Stadtteil/Quartier und gesamtstädtischer Ebene möglich </p>`,
  examples:`<ul>
  <li><a href="https://www.lutherlab.de/" target="_blank">LutherLAB</a></li>
  <li><a href="https://www.grubenhelden.de/de/" target="_blank">Grubenhelden Gladbeck</a></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/le-champignon-urbain/" target="_blank">Chapelle Martray Nantes</a></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/atelierguidettabrozzetti/" target="_blank">Atelier Guidetta Brozetti</a></li>
  </ul>`,
  image: "img/produktive_kirchenimmobilien.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 3,
    challenges:2.5
  },
  theme: "Immobilienkomplexe und Einzelstandorte mit Strahlkraft",
},

{
  id: 423,
  number: "4.2.3",
  title: "Einzelhandelsflächen",
  description: `<p>Im Zuge des strukturellen Wandels des Einzelhandels sind zunehmend Leerstände ehemaliger Einzelhandelsflächen zu beobachten. Die Auswirkungen von Leerstand können sich, je nach Ausmaß, negativ auf den Stadtteil auswirken. Zwar ist Leerstand zunächst nicht negativ zu bewerten - eine gewisse Reserve in Gewerbeflächenangeboten hilft, den Immobilienmarkt flexibel und attraktiv zu gestalten - wird dieser dann zu einer Herausforderung, wenn die Leerstandsquote eine "gesunde" Reserve von 3 % übersteigt, können unter anderem Trading-Down-Effekte die Folge sein. Um eine Nutzungsmischung und Attraktivierung der Orte weiterhin zu gewährleisten, bietet es sich an, ehemalige Einzelhandelsstandorte auf anderweitige Nutzungsmöglichkeiten zu prüfen. Insbesondere kleine Manufakturen benötigen in der Regel nicht viel Fläche und profitieren von Laufkundschaft. Es gilt somit, explizit auch vormals nicht für Produktion genutzte Flächen für Urbane Produktion in den Blick zu nehmen.</p>`,
  targetgroups: `<p>Urban produzierende Betriebe, Gründungsinteressierte</p>`,
  actors: `<p>Wirtschaftsförderung, Stadtplanung, Eigentümer*innen</p>`,
  cost: `<p>Personal (Mittel); Sachkosten (Mittel)</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>Der Einzelhandel trägt zu einer Multifunktionalität der Städte bei. Zuerkennen ist jedoch, dass die Funktion des Einzelhandels als stadtbildendes und standortprägendes Element vielerorts bedroht ist, was sich in einem ausgeprägten Leerstand widerspiegeln kann</p>`,
  solution: `<p>Explizit auch Einzelhandelsflächen als zukünftige Produktionsstandorte in den Blick nehmen, Bedarfe kleiner Manufakturen und Produzent*innen erheben. Hierzu ist es notwendig, die Rahmenbedingungen der Einzelhandelsflächen zu kennen.</p>`,
  effects: `<p>Sichtbarmachung von Produktion und Sensibilisierung im Hinblick auf lokale Produktion, Vermeidung von Leerstand und damit von möglichen Trading-Down-Effekten, Attraktivierung von Stadtteilen / Quartieren</p>`,
  challenges: `<p>Denkmalschutz, Brandschutz, Nutzungsänderungsanträge- und Genehmigungen, Logistik</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Sofortprogramm Innenstadt</li>
  <li>Zwischennutzung</li>
  <li>Inkubator(en) und praktische Lernorte für die Stadtgesellschaft</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  </ul>`,
  area: `<p>Immobilie/Grundstück, positive Effekte auf Stadtteil/Quartier</p>`,
  examples: `<ul>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/baeckerei-schmidt-karlsruhe/" target="_blank">Gläserne Produktion Karlsruhe</a></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/gemeinschaftsladen-schnickschnack-bochum/" target="_blank">Gemeinschaftsladen Schnickschnack</a></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/liebesgruss-wuppertal" target="_blank">Produktion und Verkauf</a></li>
  </ul>
  <p>Quartiersbeispiele:</p>
  <ul>
  <li><a href="https://urbaneproduktion.ruhr/-beispiel/elberfelder-nordstadt-wuppertal/" target="_blank">Elberfelder Nordstadt, Wuppertal</a></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/hoerder-zentrum-dortmund/" target="_blank">Zentrum Hörde, Dortmund</a></li>
  </ul>`,
  image: "img/einzelhandelsflaechen.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 2.5,
    challenges: 2
  },
  theme: "Immobilienkomplexe und Einzelstandorte mit Strahlkraft",
},

{
  id: 431,
  number: "4.3.1",
  title: "Zwischennutzung",
  description: `<p>Unter Zwischennutzung wird die zeitlich beschränkte Nutzung von Gebäuden und Flächen verstanden, weshalb oftmals auch von temporärer Nutzung gesprochen wird. Zwischennutzungen bieten eine Möglichkeit, Veränderungen bisheriger und/oder ursprünglich geplanter Nutzungen herbeizuführen. Bei einer erfolgreichen Zwischennutzung kann diese Ausgangspunkt für eine dauerhafte Nutzung sein. Zwischengenutzt werden können dabei beispielsweise ehemalige Bahnanlagen und Fabriken, Büros und andere Gebäude (z. B. nicht mehr genutzte Kirchen) aber auch leerstehende Wohnungen und Einzelhandelsflächen. Gelsenkirchen bietet viele dieser Flächen, deren Planung andauert und deren Nutzung in unmittelbarer Zukunft nicht abzusehen ist (siehe auch Kap. 3 Potenzialflächen). Zwischennutzungen können - neben der Behebung von Leerstand, der Möglichkeit zum Experimentieren mit Geschäftsmodellen und der Belebung von Quartieren - dazu beitragen, dass diese Flächen wieder wahrgenommen werden.</p>`,
  targetgroups: `<p>Unternehmer*innen, Gründungsinteressierte, Eigentümmer*innen</p>`,
  actors: `<p>Zwischennutzungsagenturen, Wirtschaftsförderung, Quartiersmanagement, Stadtplanung, Bauordnung</p>`,
  cost: `<p>Personal (mittel), Sachkosten (gering)</p>`,
  time: `<p>Kurz- bis mittelfristig</p>`,
  problem: `<p>Leerstehende Gebäude, Flächen und Räumlichkeiten werden nicht genutzt und können somit zu einer Trading-Down-Spirale im Quartier führen, in dem sie verfallen.</p>`,
  solution: `<p>Zwischennutzungskampagnen, Werbung, gezielte Ansprache von Produzent*innen und Immobilieneigentümer*innen, Zwischennutzung als Instrument in der Stadtplanung</p>`,
  effects: `<p>Leerstandsaktivierung, Experimentieren und Anpassen von Geschäftsmodellen und neuer Branchen am Standort, Aufmerksamkeit auf Flächen und Gebäude</p>`,
  challenges: `<p>Mangelnde Bereitschaft und fehlendes Interesse von Immobilieneigentümer*innen, Bisheriger Fokus ausschließlich auf Kunst- und Kreativwirtschaft, Handeln und Planen in kurzfristigen Zeiträumen</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Produktive Kirchenimmobilien</li>
  <li>Einzelhandelsflächen</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  <li>Mobilisierung der Eigentümer*innen und der Nachbarschaft</li>
  <li>Zusammenarbeit mit der Wohnungswirtschaft</li>
  <li>Urbane Logistik</li>
  <li>Gemeinschaftsgärten</li>
  </ul>`,
  area: `<p>Immobilie/Grundstück, positive Effekte auf Stadtteil/Quartier</p>`,
  examples: `<ul>
  <li><a href="https://www.tapetenwechsel-bochum.de/" target="_blank">Tapetenwechsel Bochum</a>
  <ul><li>PopUp-Store KulturUhle: ChargAire, Grubenholz, Sperling Bag, Kunstundkegel, Think<sup>2</sup></li>
  <li>PopUp-Store: ACERON UG, EssBo!, Foodsharing, Grubenholz, UrbaneProduktion.Ruhr</li></ul></li>
  <li><a href="https://www.gelsenkirchen.de/de/infrastruktur/stadtplanung/stadterneuerung_
  gelsenkirchen/bochumer_strasse/kutschenwerkstatt.aspx" target="_blank">Kutschenwerkstatt Gelsenkirchen</a></li>
  <li><a href="https://www.zzz-bremen.de/blog/zzz-und-zwischennutzung-in-bremen/" target="_blank">Zwischenzeitzentrale Bremen</a></li>
  <li><a href="https://www.nationalestadtentwicklungspolitik.de/NSP/SharedDocs/-Projekte/WSProjekte_DE/Wuppertal_Zwischennutzungsagentur.html" target="_blank">Zwischennutzungsagentur Wuppertal</a></li>
  </ul>`,
  image: "img/zwischennutzung.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 2.5,
    challenges: 1.5
  },
  theme: "Experimentelle Räume für Urbane Produktion",
},

{
  id: 432,
  number: "4.3.2",
  title: "Inkubator(en) und praktische Lernorte für die Stadtgesellschaft",
  description: `<p>Um Urbane Produktion ins Stadtbild zu integrieren, braucht es Möglichkeitsräume, in denen sich Produzent*innen ausprobieren und entfalten können. Solche Möglichkeitsräume können unter anderem von Kommunen, Wirtschaftsförderungen, Hochschulen oder auch zivilgesellschaftlichen Organisationen kostenlos oder kostengünstig zur Verfügung gestellt werden. Makerspaces bzw. FabLabs können hier als Innovations- und Partizipationsorte fungieren und stellen Inkubatoren Urbaner Produktion dar.</p>
  <p><b>Halle 1 der Westfälischen Hochschule / VHS:</b> Orte wie die Halle 1 der Westfälischen Hochschule Gelsenkirchen oder die VHS Gelsenkirchen bieten die Möglichkeit, Wissen von klassischen (z. B. Nähen, Stricken) bis zu neuen Produktionsformen (z. B. 3D-Druck, CNC-Technik) zu vermitteln und für die Zivilgesellschaft erfahr- sowie erlernbar zu machen. In diesen Räumen sind sowohl Ausstellungen als auch interaktive Workshop-Formate mit Produzierenden und Handwerker*innen denkbar. Über ein wechselndes Programm könnten unterschiedliche Angebote für Freizeitbesucher*innen, Schulen sowie Fachbesucher*innen bereitgestellt werden. Mit einer technischen Grundausstattung (u. a. Plotter, 3D-Drucker, Lasercutter, Haushalts- und Spezialwerkzeuge) sind darüber hinaus Service-, sowie ‚Do-it-yourself‘ (DIY)-Angebote realisierbar.</p>
  <p><b>Offene Werkstatt:</b> Eine Kooperation wäre auch mit den Akteuren „Freunde des Bahnbetriebswerks Bismarck e.V.“ denkbar, die bereits die Idee hatten am gleichnamigen Ort eine Offene Werkstatt zu errichten (isso Gelsenkirchen 11/2020: 26-27), oder der Materialverwaltung Ruhr, die einen langfristigen Standort sucht und sich in den Kulissen der Materialverwaltung weitere Angebote vorstellen kann wie bspw. Nähcafé, Siebdruckworkshops, oder ein Repair-Café mit regelmäßigen Öffnungszeiten.</p>
  <p><b>Textilhub:</b> Ein Zugang für eine experimentelle Nutzung könnte z. B. auch in Form eines Textilhubs über das Sofortprogramm Innenstadt erfolgen</p>`,
  targetgroups: `<p>Bürger*innen, Schüler*innen, Studierende</p>`,
  actors: `<p>Stadtverwaltung (Referate Erziehung und Bildung, Kultur, Stadtplanung, Umwelt, Wirtschaftsförderung), Urban produzierende Unternehmen, Westfälische Hochschule, VHS, Handwerkskammer, Vereine</p>`,
  cost: `<p>Personal (mittel), Sachkosten (gering bis mittel; je nach Material und Technik)</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>Fachkräfte und Betriebsnachfolger*innen fehlen im Handwerk und produzierendem Gewerbe auch aufgrund der unzureichenden Bewerbung dieser Berufe oder dem oftmals schlechten Image. Hinzu kommt die fehlende Akzeptanz von Circular-Economy-Ansätzen und damit einhergehend die Verschwendung von Ressourcen.</p>`,
  solution: `<p>Mit bestehenden Akteuren Lösungsstrategien entwickeln, Fördergelder für die Startinvestitionen beantragen</p>`,
  effects: `<p>Angebote zur selbständigen Reparatur und Bildung für die allgemeine Bevölkerung schaffen. Durch Erfahrung des Selbermachens Suffizienz im Rahmen der Nachhaltigkeit und Interesse für produzierende Berufe und das Handwerk wecken</p>`,
  challenges: `<p>Dauerhafte Finanzierung von Personal, bzw. Räumlichkeiten.</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Zechenstandorte / ehemalige Industrieflächen</li>
  <li>Produktive Kirchenimmobilien</li>
  <li>Einzelhandelsflächen</li>
  <li>Zentrum für Urbane Produktion / Handwerkerhof</li>
  <li>Integriertes Wirtschaftsflächenkonzept</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  <li>Zusammenarbeit mit der Wohnungswirtschaft</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  </ul>`,
  area: `<p>Immobilie/Grundstück, Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://kofabrik.de/" target="_blank">KoFabrik in Bochum</a></li>
  <li><p>Produktionsschule Berlin-Mitte</p>
  <div><a href="https://www.zukunftsbau.de/taetigkeitsfelder/statt-schule-move/produktionsschule-mitte-ps-m" target="_blank">https://www.zukunftsbau.de/taetigkeitsfelder/statt-schule-move/produktionsschule-mitte-ps-m</a></div>
  <div><a href="https://urbaneproduktion.ruhr/beispiel/produktionsschule-mitte/" target="_blank">https://urbaneproduktion.ruhr/beispiel/produktionsschule-mitte/</a></div></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/hei-haus-der-eigenarbeit/" target="_blank">Offene Werkstatt mit Bildungsangebot, wie z. B. Haus der Eigenarbeit in München</a></li>
  <li><a href="https://www.dasa-dortmund.de/" target="_blank">Deutsche Arbeitsschutzausstellung (DASA) Dortmund</a></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/halle-1/" target="_blank">Makerspace an der Westfälischen Hochschule, inkl. innovativer, nachhaltiger Produktentwicklung</a></li>
  <li><a href="https://dieurbanisten.de/offene-werkstatt-laedt-zum-selbermachen-ein/" target="_blank">Union Gewerbehof in Dortmund</a></li>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/schokofabrik/" target="_blank">Schokofabrik Berlin-Kreuzberg (Workshops gezielt für Frauen)</a></li>
  </ul>`,
  image: "img/inkubator(en)_und_praktische _lernorte_fuer_die_stadtgesellschaft.png",
  imageSrc: "",
  iconsValuation: {
    effects: 2,
    challenges: 1.5
  },
  theme: "Experimentelle Räume für Urbane Produktion",
},

{
  id: 433,
  number: "4.3.3",
  title: "Zentrum für Urbane Produktion / Handwerkerhof",
  description: `<p>Das „Manufakturenhaus“ als Ort, an dem mehrere Manufakturen/ produzierende Betriebe neben-, unter- und übereinander ‚werkeln‘, bietet sowohl für die Betriebe selbst als auch für deren Kund*innen die Möglichkeit, in kurzer räumlicher und zeitlicher Distanz verschiedene Anliegen miteinander zu verbinden. Betriebe können Infrastrukturen, Geräte und Maschinen gemeinschaftlich nutzen und damit verbundene Kosten teilen. Die konkrete Ausgestaltung und inhaltliche Ausrichtung kann je nach Lage in der Stadt und Eigenart der Immobilie unterschiedlich sein. Denkbar ist z. B. eine Art Shoppingmall mit regionalen Produkten, die direkt vor Ort in Manufakturräumen hergestellt, personalisiert und veredelt werden. Auch eine Markthalle mit eingebetteter Gastronomie und Verköstigung ist denkbar oder ein Handwerkerhof, in dem unterschiedliche Gewerke zu günstigen Mieten Räume beziehen und gemeinsam innerhalb eines Gebäudes Aufträge bearbeiten. Es soll eine Atmosphäre für unternehmerische Kooperationen geschaffen werden und ein Ort, der auch überregionale Strahlkraft entfalten kann. Voraussetzung sind geeignete und finanzierbare Immobilien sowie finanzielle Mittel bzw. ein/e Investor*in oder Initiativgruppe.</p>`,
  targetgroups: `<p>Urban produzierende Betriebe, produktionsnahe Dienstleister*innen</p>`,
  actors: `<p>Wirtschaftsförderung, Stadtplanung, Bauordnung, Handwerkskammer, Urban produzierende Betriebe, Investor*innen</p>`,
  cost: `<p>Personal (mittel), Sachkosten (mittel bis hoch)</p>`,
  time: `<p>Langfristig</p>`,
  problem: `<p>Leergefallene Großimmobilien in guten Lagen bieten ein hohes Potenzial, welches aktuell nicht genutzt wird </p>`,
  solution: `<p>Geeignete Immobilien identifizieren, Finanzierungsmöglichkeiten klären, Interessent*innen finden, inhaltliche Ausrichtung definieren, Konzept entwickeln</p>`,
  effects: `<p>Handwerkerhöfe und Zentren für Urbane Produktion bieten einen besonderen Ort für Arbeit, Kooperation und Konsum, Schaffung regionaler Produktionskreisläufe </p>`,
  challenges: `<p>Immobiliensuche, Investitionsbedarf, Konzeptentwicklung, Unternehmensakquise</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Sofortprogramm Innenstadt</li>
  <li>Zechenstandorte / ehemalige Industrieflächen</li>
  <li>Produktive Kirchenimmobilien</li>
  <li>Inkubator(en) und praktische Lernorte für die Stadtgesellschaft</li>
  <li>Integriertes Wirtschaftsflächenkonzept</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  <li>Nutzungsmischung / Planungsrecht / Bauordnungsrecht</li>
  </ul>`,
  area: `<p>Immobilie, Stadtteil/Quartier</p>`,
  examples: `<ul>
  <li><a href="https://www.handwerkerhof-ottensen.de/#" target="_blank">Handwerkerhof Ottensen</a></li>
  <li><a href="https://www.nuernberg.de/internet/handwerkerhof/" target="_blank">Handwerkerhof Nürnberg: eher touristisch angelehnt, mit Klein- und Kunsthandwerk</a></li>
  <li><a href="https://www.hwk-do.de/artikel/handwerkshof-viahome-37,0,544.html" target="_blank">Handwerkshof Viahome in Lünen</a></li>
  </ul>`,
  image: "img/zentrum_fuer_urbane_produktion.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Experimentelle Räume für Urbane Produktion",
},

{
  id: 441,
  number: "4.4.1",
  title: "Kurator zur Förderung von Bestandsunternehmen urban produzierender Unternehmen",
  description: `<p>Ein Kurator bzw. eine Kuratorin hilft bestehenden Unternehmen Urbaner Produktion und deren Nachbarschaften, durch Interessenabgleich, Aufbau von Partnerschaften, Bedarfsanalyse, Kommunikation von Neuigkeiten und Stützung der Interessen in der jeweiligen Gemeinschaft. Dabei eignet sich sowohl die Integration der Stelle im Quartiersmanagement als auch die Vergabe an eine externe Agentur bzw. Entwicklungsgesellschaft. Der Kurator bzw. die Kuratorin unterstützt ferner Unternehmen bei Subventionen und Förderungen, Fachkräftesicherung, Ausstattung, Räumlichkeiten und Ressourcen und verknüpft die jeweiligen Bedarfe auch mit denen, die im jeweiligen Stadtteil bzw. der Stadt entstehen. Dadurch besteht die Möglichkeit mit dieser Stelle eine Brücke zwischen öffentlicher Hand bzw. Kommune und lokalen Unternehmen bzw. der Zivilgesellschaft zu bilden.</p>`,
  targetgroups: `<p>Urban produzierende Betriebe</p>`,
  actors: `<p>Wirtschaftsförderung, u. U. Werbegemeinschaft</p>`,
  cost: `<p>Personalkosten (mittel), Sachkosten (keine)</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>V. a. KMU haben oft aufgrund von Zeit- und Personalmangel keine Möglichkeiten, sich über aktuelle Förderungen zu informieren oder gemeinschaftliche Netzwerke ins Leben zu rufen. Zwar haben urbane Produzent*innen häufig handwerkliche Fähigkeiten, jedoch bedarf es für den Betrieb eines Unternehmens weiterer Fähigkeiten, die über das technische Know-how hinausgehen. Angebote der Stadt kommen häufig nicht bei den Unternehmen an oder entsprechen nicht deren Bedürfnissen.</p>`,
  solution: `<p>Unternehmen können sich finanziell an der Stelle beteiligen, um Mitspracherecht über Aufgaben zu haben und diese gemeinsam zu definieren</p>`,
  effects: `<p>Aufbau eines Unternehmer*innennetzwerks, Potenzielle Schaffung neuer lokaler Wertschöpfungsketten</p>`,
  challenges: `<p>Unternehmen sehen Netzwerke als Zeitverschwendung an. Kurator*innenstelle ist nur befristet möglich – häufiger Wechsel der Person führt zum Verlust von Netzwerken und Wissen sowie Vertrauensverlust seitens der Unternehmen.</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  <li>Storytelling</li>
  <li>Netzwerk und Vernetzung</li>
  <li>Newsletter</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="http://www.wab-langendreer.de/" target="_blank">Langendreer hat’s / meine WAB (Werbegemeinschaft Alter Bahnhof)</a></li>
  </ul>`,
  image: "img/kurator_in_zur_foerderung_von_bestandsunternehmen.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Steuerungsstrukturen",
},

{
  id: 442,
  number: "4.4.2",
  title: "Integriertes Wirtschaftsflächenkonzept",
  description: `<p>Die Grundvoraussetzung, um mit diesem informellen Instrument praktische Handlungen anstoßen zu können, ist dessen politische Legitimation, sodass darin formulierte Planungsabsichten auch tatsächlich Gewicht in der Abwägung mit anderen Fachplanungen zukommen. Urbane Produktion ist hierbei ein Baustein innerhalb des Instruments sowie der städtischen Wirtschaftsstruktur, den es bestmöglich mit weiteren bedeutsamen Wirtschaftsbereichen abzustimmen gilt, um geeignete Handlungsstrategien für praktische Projekte, Flächen und Immobilien zu entwickeln. Denkbar ist ein modular aufgebautes Wirtschaftsflächenkonzept, das einen analytischen und einen konzeptionellen Teil umfasst.</p>
  <p>Das Integrierte Wirtschaftsflächenkonzept</p>
  <ul>
  <li>dient der Steuerung und Koordination gesamtstädtischer Planungen zur Entwicklung der städtischen Wirtschaft anhand eines räumlichen Leitbildes oder Rahmenplans;</li>
  <li>enthält Module zu unterschiedlichen Wirtschaftsbereichen oder -formen, d. h. inhaltlich wird neben den klassischen gewerblichen Bauflächen des Flächennutzungsplans in einem weiteren Modul insbesondere stadtaffines Gewerbe und Produktion in Mischgebieten oder kleinteiligen Gewerbelagen in Wohngebieten und urbanen Lagen fokussiert. Zusätzlich ist die Ausrichtung von Gewerbe- und Industriegebieten zu thematisieren. An welchen Standorten soll auch zukünftig Industrie und störendes Gewerbe erhalten bleiben? Wo soll eine stärke städtebauliche Verknüpfung mit dem Siedlungsraum geschaffen werden, indem eine Nutzungsmischung forciert und urbane Qualitäten entwickelt werden?</li>
  <li>nutzt Quartiere als räumliche Bezugsebene zur Analyse, räumlichen und inhaltlichen Standortprofilierung sowie zum Erhalt vorhandener Mischung, um Verdrängungstendenzen gewerblicher Nutzungen vorzubeugen;</li>
  <li>identifiziert und beschreibt langfristig optimaler Weise Potenzialflächen und Grundstücke sowie Immobilien und differenziert diese hinsichtlich ihrer zeitlichen Aktivierbarkeit (kurz-, mittel-, langfristig)</li>
  </ul>`,
  targetgroups: `<p>Stadtverwaltung</p>`,
  actors: `<p>Wirtschaftsförderung, Stadtplanung, Politik</p>`,
  cost: `<p>Personal (mittel), Sachkosten (keine)</p>`,
  time: `<p>Mittelfristig</p>`,
  problem: `<p>Planerische Handlungen bedürfen einer politischen Legitimation</p>`,
  solution: `<p>Anfertigen eines Wirtschaftsflächenkonzepts, in dem Urbane Produktion ein wesentlichen Baustein darstellt um gesamtstädtisch planen und Urbane Produktion forcieren zu können</p>`,
  effects: `<p>Planung wird strategisch ausgerichtet, Flächensicherung- und Entwicklung wird gesamtstädtisch sichergestellt</p>`,
  challenges: `<p>Verantwortlichkeiten und Zuständigkeiten müssen definiert werden</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Zechenstandorte / ehemalige Industrieflächen</li>
  <li>Inkubator(en) und praktische Lernorte für die Stadtgesellschaft</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  <li>Nutzungsmischung / Planungsrecht / Bauordnungsrecht</li>
  <li>Urbane Logistik</li>
  </ul>`,
  area: `<p>Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.heidelberg.de/site/Heidelberg_ROOT/get/documents_E-881126943/heidelberg/Objektdatenbank/80/PDF/80_pdf_
  wirtschaftsfl%C3%A4chenkonzept-cima_by_stadt_heidelberg_19.12.2012.pdf" target="_blank">Wirtschaftsflächenkonzept Heidelberg</a></li>
  <li><a href="https://www.stadtentwicklung.berlin.de/planen/stadtentwicklungsplanung/
  download/wirtschaft/2020_Leitfaden_SenSW_WiKo.pdf" target="_blank">Bezirkliche Wirtschaftsflächenkonzepte (WiKo) Berlin</a></li>
  <li><a href="https://www.muelheim-business.de/fileadmin/user_upload/PDF/2019/
  MH_Wirtschaftsflaechenkonzept_Final_09.10.2019.pdf" target="_blank">Wirtschaftsflächenkonzept Mülheim an der Ruhr </a></li>
  </ul>`,
  image: "img/integriertes_wirtschaftsflaechenkonzept.png",
  imageSrc: "https://www.nuernberg.de/imperia/md/wirtschaft/dokumente/gewerbeimmobilie/masterplan_gewerbeflaechen_nuernberg_2020.pdf",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Steuerungsstrukturen",
},

{
  id: 443,
  number: "4.4.3",
  title: "Leerstandserhebung / Gewerbliches Leerstandskataster",
  description: `<p>Bisher wird Leerstand in Gelsenkirchen nur in den beiden Hauptzentren Buer und City systematisch erfasst. Die Anlage eines Katasters in Form einer Datenbank mit Informationen zur Anzahl, Lage, Größe und Ausstattung der nicht, bzw. untergenutzten Immobilien sowie deren Eigentümer*innen ist auch für Stadterneuerungsgebiete, wie Schalke-Nord, sinnvoll. Die Erfassung des Status-Quos ermöglicht es, zu beurteilen, in welchen städtebaulichen Situationen der Erhalt von Gewerbeflächen sinnvoll erscheint und in welchen Fällen die Wohnnutzung priorisiert werden sollte. Auch für die Akquirierung von Fördermitteln oder Zuschüssen zur Leerstandsaktivierung ist ein Leerstandskataster nützlich. Ein Kataster stellt eine grundlegende Basis dar, um Kontakt zu Immobilieneigentümer*innen aufzunehmen und bspw. Start-ups und andere Gewerbetreibende mit diesen zu verknüpfen. Darüber hinaus kann dieser Ansatz genutzt werden, um eine standardisierte Datenbankstruktur zu entwickeln. Langfristig können sukzessive weitere Bereiche der Stadt Gelsenkirchen erfasst und ein gesamtstädtisches Kataster aufgebaut werden. Ob teilräumlich oder gesamtstädtisch, ein Leerstandskataster ist eine solide Grundlage für aktives Leerstandsmanagement und Vermarktung.</p>`,
  targetgroups: `<p>Urban produzierende Betriebe, Gründer*innen</p>`,
  actors: `<p>Stadtplanung, Wirtschaftsförderung, Quartiers- /Citymanagement</p>`,
  cost: `<p>Personal (mittel), Sachkosten (keine), Aktualisierung nach festgelegtem Turnus</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>Fehlender Gesamtüberblick über leerstehende Immobilien und Eigentümer*innen</p>`,
  solution: `<p>Aufbau einer GIS-gestützten Datenbank, die langfristig auch als Vermarktungsplattform genutzt werden kann</p>`,
  effects: `<p>Erhöhung der Handlungsfähigkeit, Vereinfachung von Vermarkung und Zusammenbringung, Prävention von strukturellem Leerstand, Schaffung von Belebungsimpulsen</p>`,
  challenges: `<p>Zeitliche und personelle Ressourcen</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Zechenstandorte / ehemalige Industrieflächen</li>
  <li>Produktive Kirchenimmobilien</li>
  <li>Einzelhandelsflächen</li>
  <li>Zwischennutzung</li>
  <li>Inkubator(en) und praktische Lernorte für die Stadtgesellschaft</li>
  <li>Kurator zur Förderung von Bestandsunternehmen urban produzierender Unternehmen</li>
  <li>Integriertes Wirtschaftsflächenkonzept</li>
  <li>Mobilisierung der Eigentümer*innen und der Nachbarschaft</li>
  <li>Zusammenarbeit mit der Wohnungswirtschaft</li>
  <li>Urbane Logistik</li>
  </ul>`,
  area: `<p>Zunächst Teilräume (Hauptzentren, Stadterneuerungsgebiete), langfristig Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://ruhrsite.business.ruhr/" target="_blank">Ruhrsite</a></li>
  <li><a href="https://www.immovativ.de/produkte/digitales-leerstandsmanagement/" target="_blank">Immovativ</a></li>
  <li><a href="https://www.kip.net/frankfurtrheinmain/gewerbe/gewerbeimmobilien" target="_blank">Kommunale Immobilienplattform Frankfurt</a></li>
  </ul>`,
  image: "img/leerstandserhebung _gewerbliches_leerstandskataster.jpg",
  imageSrc: "",
  iconsValuation: {
      effects: 1,
      challenges: 1
  },
  theme: "Steuerungsstrukturen",
},

{
  id: 444,
  number: "4.4.4",
  title: "Nutzungsmischung / Planungsrecht / Bauordnungsrecht",
  description: `<p>Nutzungsmischung ist eine relevante stadtplanerische Stellschraube, um die Voraussetzung für lebendige Quartiere zu schaffen, die es sowohl im Bestand als auch bei Planungs- und Entwicklungsabsichten konsequent mitzudenken gilt. Urbane Produktion kann ein Baustein der Nutzungsmischung sein und durch die Nähe von Wohnen und Arbeiten die Voraussetzungen für kurze Wege schaffen. Hier gilt es auf das vorhandene stadtplanerische Instrumentarium zurückzugreifen und dies gezielt einzusetzen. Entsprechend der Personal- und Ressourcensituation ist dies eher eine langfristig ausgerichtete Maßnahme. Zu berücksichtigen ist, dass die Reaktivierung altindustrieller Brachflächen oftmals enorme Kosten zur Dekontaminierung der Böden und Instandsetzung der Immobilien nach sich zieht. Gerade für Kommunen mit Haushaltsicherung- oder -sperre ist dies eine schwer zu bewältigende Aufgabe, bei der es umso mehr darauf ankommt, ein geeignetes Finanzierungskonzept aufzustellen bspw. anhand von Fördermitteln oder in der Kooperation mit Investor*innen. In dieser Maßnahme werden einige stadtplanerische Instrumente aufgeführt, die eine Förderung der Urbanen Produktion und somit der Nutzungsmischung in Quartieren ermöglichen können.</p>`,
  targetgroups: `<p>Verwaltung, Investor*innen, Gründungsinteressierte, Immobilieneigentümer</p>`,
  actors: `<p>Stadtplanung, Bauordnung, Wirtschaftsförderung</p>`,
  cost: `<p>Personal (mittel bis hoch), Sachkosten (hoch; ggf. Erwerb und Aufbereitung von Grundstücken/Immobilien)</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>Oftmals entmischte Quartiere sowie schlechte Bedingungen für urban produzierende Unternehmen</p>`,
  solution: `<p><b>Änderung oder Neuaufstellung eines Bebauungsplans:</b> Durch die Aufstellung bzw. Änderung eines Bebauungsplans legt eine Gemeinde die baurechtlichen Rahmenbedingungen für einen Teil ihres Gemeindegebiets fest und kann gewerbefördernde Festsetzungen treffen (vgl. Bathen et al. 2019: 50). Zu diesen zählt z. B. die Ausweisung angemessener Baugebietskategorien (z. B. Mischgebiete gem. § 6 BauNVO, Urbane Gebiete gem. § 6a BauNVO) sowie eine auch auf gewerbliche Nutzungen ausgerichtete Feinsteuerung dieser (vgl. ebd.). Eine explizite Steuerung der Urbanen Produktion ist im Rahmen von Bebauungsplänen jedoch in Folge des unpräzisen Gewerbebegriffs der Baunutzungsversordnung (BauNVO) nicht möglich. Hier wäre die Einführung eines präziseren Begriffes (z. B. ‚produzierendes Gewerbe‘) notwendig (vgl. Brandt et al. 2017: 153).</p>
  <p><b>Vorhabenbezogener Bebauungsplan und Durchführungsvertrag bzw. Städtebaulicher Vertrag:</b> Durch die Anwendung vorhabenbezogener Bebauungspläne gem. § 12 BauGB kann eine Gemeinde in Kombination mit einem Durchführungs- oder städtebaulichen Vertrag verschiedene Verbindlichkeiten zu Gunsten der Urbanen Produktion sichern, die über die Möglichkeiten üblicher Bebauungspläne hinausgehen (z. B. explizite Sicherung von Flächen für die Urbane Produktion) (vgl. Schmidt, Söfker-Rieniets, Nouri 2019: 54). Sie können allerdings nur unter bestimmten Voraussetzungen genutzt werden.</p>
  <p><b>Fremdkörperfestsetzung:</b> Die Fremdkörperfestsetzung gem. § 1 Abs. 10 BauNVO ermöglicht in einem Bebauungsplan den Erhalt, die Erweiterungen, die Änderungen und die Erneuerungen von bestehenden Betrieben der Urbanen Produktion in bebauten Gebieten, die durch die Festsetzung eines Baugebiets gem. §§ 2 bis 9 BauNVO eigentlich unzulässig wären. Entwicklungsmöglichkeiten für neue urban produzierende Betriebe werden durch sie aber nicht geschaffen (vgl. Kuschnerus 2010: 435).</p>
  <p><b>Vorkaufrecht seitens Stadt:</b> Einer Gemeinde stehen gem. den §§ 24 bis 28 BauGB unter bestimmten Voraussetzungen Vorkaufsrechte für den Erwerb von Grundstücken bzw. Immobilien zu, welche es ermöglichen Einfluss auf die zukünftige Ausrichtung der Standorte zu nehmen (z. B. mittels Mietpreisgestaltung). So können Standorte auf eine Förderung bzw. Sicherung der Urbanen Produktion ausgerichtet werden. Die potenziell hohen Kosten des Grundstücks- bzw. Immobilienkaufs können jedoch insb. für finanzschwache Kommunen eine Hürde darstellen (vgl. Brandt et al. 2017: 154).</p>
  <p><b>Konzeptvergaben:</b> Im Rahmen kommunaler Grundstücksverkäufe kann eine Gemeinde bei der Vergabe der Flächen neben dem höchsten monetären Gebot auch das zugrundeliegende Nutzungskonzept berücksichtigen und so Einfluss auf die zukünftige Ausgestaltung und Nutzung einer Fläche nehmen. So kann bspw. vorgegeben werden, dass ein bestimmter Flächenanteil für produzierende Unternehmen vorzuhalten ist und die Urbane Produktion so gefördert werden (vgl. Bathen et al. 2019: 52; Brandt et al. 2017: 158).</p>`,
  effects: `<p>Förderung der Urbanen Produktion, Durchmischung und Belebung von Quartieren sowie kurze Wege</p>`,
  challenges: `<p></p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Integriertes Wirtschaftsflächenkonzept</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier</p>`,
  examples: `<ul>
  <li><a href="https://urbaneproduktion.ruhr/wp-content/uploads/2019/12/Handbuch-Urbane-Produktion_2019_Web.pdf" target="_blank">Konzeptvergabe: Französisches Viertel Tübingen (Bathen et al. 2019, S. 42-53)</a></li>
  </ul>`,
  image: "img/nutzungsmischung_planungsrecht_bauordnungsrecht.jpg",
  imageSrc: "",
  iconsValuation: {
      effects: 1,
      challenges: 1
  },
  theme: "Steuerungsstrukturen",
},

{
  id: 451,
  number: "4.5.1",
  title: "Mobilisierung der Eigentümer*innen und der Nachbarschaft",
  description: `<p>Im Rahmen unterschiedlicher Formate wie Eigentümer*innenkonferenzen oder der Wanderausstellung Urbane Produktion werden Vorträge gehalten, um einer interessierten (Fach-)Öffentlichkeit einen Einblick in die Erkenntnisse des Projekts sowie insb. in die Inhalte und geplanten Maßnahmen des Strategie-Konzeptes zu gewähren. Auch gemeinsame Aktionen mit Baukultur NRW oder der Volkhochschule sind denkbar.</p>
  <p>Im Sinne Urbaner Produktion können so lokale Unternehmensnetzwerke oder Eigentümergemeinschaften/-genossenschaften entstehen, die sich z. B. gemeinsam auf eine Mietenminderung verständigen oder Aktionen vor Ort planen, um gezielt vorhandene Leerstände wieder – und vor allem auch für urbane Produzent*innen - nutzbar zu machen.</p>`,
  targetgroups: `<p>Eigentümer*innen; Bürger*innen</p>`,
  actors: `<p>UrbaneProduktion.Ruhr; Wirtschaftsförderung; Stadtplanung</p>`,
  cost: `<p>Personal (gering), Sachkosten (keine)</p>`,
  time: `<p>Mittelfristig</p>`,
  problem: `<p>Aktuell gibt es äußerst wenige Gründungen in Gelsenkirchen. Mögliche Nutzungskonflikte sowie etwaige Vorbehalte der Eigentümer*innen und der Nachbarschaft sind mögliche Hemmfaktoren für die Etablierung Urbaner Produktion</p>`,
  solution: `<p>Mit Hilfe von Informationsveranstaltungen oder Vorträgen werden Erkenntnisse des Projekts vorgestellt und potenziellen Vorbehalten seitens Eigentümer*innen oder der Nachbarschaft entgegengewirkt. Dazu ist es sinnvoll in einem Stadtteil zu beginnen, bei dem die Eigentümer*innen-Struktur bekannt und lokal ist.</p>`,
  effects: `<p>Aufmerksamkeit für das Thema, Informieren der Bevölkerung</p>`,
  challenges: `<p>Eigentümer*innen nicht lokal verankert, Immobilienfonds oder Investor*innen, die kein Interesse an der Entwicklung haben</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Zwischennutzung</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.wuppertal.de/microsite/WiFoe/aktuelles/inhaltsseiten-aktuelles/ausstellung-urbane-produktion-wuppertal-eroeffnet.php" target="_blank">Ausstellung: Urbane Produktion bei Wirtschaftsförderung Wuppertal</a></li>
  <li><a href="http://www.oelberg-eg.de/" target="_blank">Ölberg eG in Wuppertal</a></li>
  <li><a href="https://mission-bochum2030.de/bochum-kommunikativ-denken/" target="_blank">Eigentümer*innenkonferenz Bochum 2030 Mission Innenstadt</a></li>
  <li><a href="https://kofabrik.de/" target="_blank">Workshop mit KoFabrik</a></li>
  <li><a href="https://www.vhs-gelsenkirchen.de/programm/politik-und-gesellschaft.html" target="_blank">Vorträge in der VHS Gelsenkirchen</a></li>
  </ul>`,
  image: "img/mobilisierung_der_eigentuemerinnen_und_der_nachbarschaft.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Gezielte Zusammenarbeit mit lokalen Akteuren und Institutionen",
},

{
  id: 452,
  number: "4.5.2",
  title: "Zusammenarbeit mit der Wohnungswirtschaft",
  description: `<p>Im Kontext Urbaner Produktion ist eine Zusammenarbeit von Stadtplanung oder Quartiersmanager*innen mit Wohnungsunternehmen denkbar. Es zeigt sich, dass das Engagement der Wohnungswirtschaft für die Quartiersentwicklung über deren Kernleistungen hinausreicht und auch gesamtstädtische Wirkungen fokussiert werden. Von nicht zu unterschätzender Bedeutung sind hierbei u. a. die nicht monetären Nutzenfaktoren, die von den Betrieben beispielsweise in Form von gesellschaftlichem Austausch und Teilhabe ausgehen.</p>
  <p>Auch die Flächeninanspruchnahme steigt, weshalb versucht werden muss, die Pro-Kopf-Wohnfläche wieder zu reduzieren. Möglich kann dies werden, wenn die individuelle Wohnfläche reduziert wird, jedoch einige Funktionen wiederum in Gemeinschaftsräumen angeboten werden, z. B. eine Werkstatt oder Lagerflächen. In diesem Zuge kann Raum zum Ausprobieren und „Selbermachen“ geschaffen werden.</p>`,
  targetgroups: `<p>Stadtentwicklung, Wohnungswirtschaft</p>`,
  actors: `<p>Wohnungswirtschaft, Stadtplanung</p>`,
  cost: `<p>Personalkosten (keine), Sachkosten (gering bis mittel)</p>`,
  time: `<p>Mittelfristig</p>`,
  problem: `<p>Hohe Flächenversiegelung bei EFH-Siedlungen, isolierte Wohnquartiere, Wohnungen lassen keinen Platz für Werkstatt etc.</p>`,
  solution: `<p>Bereitstellung von flexiblen und gemeinschaftlich nutzbaren Räumlichkeiten als Produktions- und Experimentierräume</p>`,
  effects: `<p>lebendigere Quartiere, Durchmischung der Quartiere, mehr DIY, weniger Ressourcenverbrauch</p>`,
  challenges: `<p>TODO</p>`,
  interactions: `Städtebauförderprogramm
  Zwischennutzung
  Inkubator(en) und praktische Lernorte für die Stadtgesellschaft
  Leerstandserhebung / Gewerbliches Leerstandskataster
  `,
  area: `<p>Immobilie/Grundstück, Stadtteil/Quartier</p>`,
  examples: `<ul>
  <li><a href="https://urbaneproduktion.ruhr/beispiel/eltingviertel-essen/" target="_blank">Eltingviertel Essen </a></li>
  </ul>`,
  image: "img/zusammenarbeit_mit_der_wohnungswirtschaft.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Gezielte Zusammenarbeit mit lokalen Akteuren und Institutionen",
},

{
  id: 453,
  number: "4.5.3",
  title: "Einbindung von Universitäten / Hochschulen",
  description: `<p>Mit insgesamt 22 Hochschulen bildet das Ruhrgebiet die dichteste Hochschullandschaft in ganz Europa. Zu diesen zählt unter anderem die Westfälische Hochschule in Gelsenkirchen mit einem Fokus auf technisch-ökonomisch sowie medienbezogene Studiengänge. Die Zahl der Studierenden an dieser Hochschule sowie deutschlandweit nimmt zu, zugleich steigt jedoch auch die Anzahl der Studierenden, die ihr Studium aus unterschiedlichen Gründen abbrechen. So brach laut einer landesweiten Umfrage im Jahr 2018 jeder 3. Studierende sein Bachelor-Studium ab (27%) (vgl. Statista 2020). Hier gilt es anzusetzen und Studienaussteiger*innen über Aus- und Weiterbildungsmöglichkeiten beispielsweise im Handwerk zu informieren und somit bestenfalls in der jeweiligen Stadt zu halten.</p>`,
  targetgroups: `<p>Studienaussteiger*innen</p>`,
  actors: `<p>Handwerkskammer, Industrie- und Handelskammer, Wirtschaftsförderung, Universitäten & (Hoch-) Schulen, Urban produzierende Unternehmen</p>`,
  cost: `<p>Personal (mittel), Sachkosten (keine)</p>`,
  time: `<p>Mittelfristig</p>`,
  problem: `<p>Viele produzierende Betriebe sind auf der Suche nach Auszubildenden und Fachkräften, finden aber oftmals keine Nachfolge und müssen im schlimmsten Fall ihre Betriebe schließen. Zugleich ist die Anzahl der Studierenden, die ihr Studium abbrechen, hoch.</p>`,
  solution: `<p>Gezielte Informationskampagnen direkt an den Universitäten und (Fach-)Hochschulen, Vermittlung von Ausbildungsstellen, Erstellung einer Datenbank von Handwerksbetrieben und Ausbildungsinteressierten, Werbematerial, Berufsorientierungstage</p>`,
  effects: `<p>Erhalt der Personen in der Stadt, Öffentlichkeitsarbeit für Handwerk und Ausbildung, Sicherung der Betriebe am Standort, Zusammenführung von Betrieben und Studienabbrecher*innen</p>`,
  challenges: `<p>Schlechtes Image von Ausbildungsberufen</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  <li>Storytelling</li>
  <li>Tag der offenen Tür der innerstädtischen produzierenden Betriebe</li>
  <li>Solidarische Landwirtschaft</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.handwerk.de/studienaussteiger.html" target="_blank">"Das Handwerk"</a></li>
  <li><a href="" target="_blank"></a></li>
  </ul>`,
  image: "img/einbindung_von_universitaeten_hochschulen.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Gezielte Zusammenarbeit mit lokalen Akteuren und Institutionen",
},

{
  id: 461,
  number: "4.6.1",
  title: "Wissenstransfer in die Stadtgesellschaft",
  description: `<p>Im Rahmen unterschiedlicher Formate werden Erkenntnisse aus der Forschung vermittelt, diskutiert oder gemeinschaftlich erarbeitet. Der Fokus liegt dabei auf der Erläuterung von den Zusammenhängen Urbaner Produktion mit anderen Themen der Stadt- und Wirtschaftsentwicklung. Vor dem Hintergrund der „Stadtentwicklung der Zukunft“ soll das Thema so inhaltlich zugänglich gemacht werden die Potenziale und Mehrwerte urbaner Produktion zu vermitteln. Da Urbane Produktion in vielen Aspekten der Planung bisher nicht mitgedacht wird, gilt es hier die beteiligten Akteur*innen und Institutionen zu sensibilisieren.</p>`,
  targetgroups: `<p>Bürger*innen, Politik, Stadtverwaltung, Universitäten & (Hoch-) Schulen</p>`,
  actors: `<p>Wirtschaftsförderung, Universitäten & (Hoch-) Schulen</p>`,
  cost: `<p>Personal (gering), Sachkosten (keine)</p>`,
  time: `<p>Kurz- bis mittelfristig</p>`,
  problem: `<p>Bedeutung von Produktion für die Lebenswirklichkeit jedes Einzelnen ist aus dem Bewusstsein gerückt. Produktion und Gewerbe wird im Kontext der Stadtentwicklung oft vernachlässigt.</p>`,
  solution: `<p>Publikationen, Vorträge, Diskussionsveranstaltungen, Workshops, Ausstellungen, Reallabore</p>`,
  effects: `<p>Bewusstseinsbildung hinsichtlich Bedeutung und Mehrwerten Urbaner Produktion</p>`,
  challenges: `<p>Zentrale Erkenntnisse für die Allgemeinheit greifbar und verständlich aufbereiten</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Inkubator(en) und praktische Lernorte für die Stadtgesellschaft</li>
  <li>Zentrum für Urbane Produktion / Handwerkerhof</li>
  <li>Mobilisierung der Eigentümer*innen und der Nachbarschaft</li>
  <li>Einbindung von Universitäten / Hochschulen</li>
  <li>Made in Kampagne (Hidden Champions Kampagne)</li>
  <li>Storytelling</li>
  <li>Schaufensterwettbewerb</li>
  <li>Tag der offenen Tür der innerstädtischen produzierenden Betriebe</li>
  <li>Solidarische Landwirtschaft</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://urbaneproduktion.ruhr/" target="_blank">UrbaneProduktion.Ruhr</a></li>
  <li><a href="https://www.neue-urbane-produktion.de/" target="_blank">Neue Urbane Produktion</a></li>
  <li><a href="http://mia-projekt.de/" target="_blank">Made in Aachen (MiA)</a></li>
  </ul>`,
  image: "img/wissenstransfer_in_die_stadtgesellschaft.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Sensibilisierung der Stadtgesellschaft",
},

{
  id: 462,
  number: "4.6.2",
  title: "Made in Kampagne (Hidden Champions Kampagne)",
  description: `<p>Die Image- und Markenbildung rund um die Thematik der Urbanen Produktion ist notwendig, damit lokal und regional hergestellte Produkte stärker in der Lebenswirklichkeit der Bürger*innen ankommen und die Nachfrage nach diesen Produkten steigt. Ziel einer Branding- bzw. Marketing-Strategie sollte es u. a. sein, Vertrauen zu bilden und die regionale Identität und Verantwortung der Menschen zu stärken. Hierbei gilt es, die Vorteile von urban produzierten Gütern in den Vordergrund zu stellen. Branding und Marketing können, je nach Zielgruppe und Zielsetzung, auf verschiedenen räumlichen Ebenen vom Stadtteil (z. B. ‚Produziert in Schalke‘) über die Stadt (z. B. ‚Produziert in Gelsenkirchen‘) bis zur Region (z. B. ‚Produziert im Ruhrgebiet‘) erfolgen. Gelsenkirchen ist zudem 2021 Modellkommune der von der HWK Münster initiierten „Wertschätzungskampagne“, welche das Ziel verfolgt, Handwerk sichtbar zu machen und für die Branche zu sensibilisieren. Auch sogenannte „Hidden Champions“ bekommen so eine größere Aufmerksamkeit.</p>
  <p>Zur Durchführung der Maßnahme ist es zunächst notwendig, einen Überblick über die Unternehmen und die im städtischen Raum hergestellten Produkte zu schaffen. Dieses Wissen kann bspw. sukzessive auf einer Internet-Plattform/ Website gesammelt werden und bildet auch für weitere Maßnahmen eine wesentliche Handlungsgrundlage.</p>`,
  targetgroups: `<p>Bürger*innen, Urban produzierende Betriebe</p>`,
  actors: `<p>Urban produzierende Betriebe, Wirtschaftsförderung, Handwerkskammer, Industrie- und Handelskammer, Stadtmarketing, Business Metropole Ruhr</p>`,
  cost: `<p>Personal (mittel), Sachkosten (gering)</p>`,
  time: `<p>Kurz- bis mittelfristig</p>`,
  problem: `<p>Bedeutung von Produktion für die Lebenswirklichkeit jedes Einzelnen ist aus dem Bewusstsein gerückt. Die Menschen kommen insbesondere in städtischen Räumen oftmals nicht mehr mit Produktion in Kontakt.</p>`,
  solution: `<p>
  <b>Gemeinsamer Internet-Auftritt:</b> Eine gemeinsame Internet-Präsenz, welche bspw. urbane Manufakturen im Stadtraum verortet und entsprechende Unternehmensportraits enthält, kann ein erster Schritt zur stärkeren Sichtbarkeit der Produktion darstellen. Die jeweiligen Städte können sich hierdurch zudem in Form von individuellen Branchenschwerpunkten profilieren und ihre Alleinstellungsmerkmale hervorheben. Auch eine Einteilung der Betriebe in Kategorien ist hierdurch möglich.</p>
  <p><b>Produkt-Label:</b> Ein eigens für urban produzierte Produkte kreiertes Label (z. B. MADE IN SCHALKE) kann es Kund*innen erleichtern, lokal Produziertes auch schneller als solches zu erkennen. Dafür kann bei lokal produzierenden Betrieben z. B. ein Aufkleber am Schaufenster angebracht werden.</p>
  <p><b>Karte:</b> Eine Stadtkarte kann z. B. eine Route (oder mehrere) vorgeben, die an produzierenden Betrieben vorbeiführt sowie Zusatzinformationen bietet. So kann schnell und einfach kommuniziert werden, welche Betriebe über eine Schauproduktion, Führungen oder Workshops verfügen. Optional: Zusätzlich kann in die Karte ein Gewinnspiel oder eine Erlebnisroute integriert werden, wodurch z. B. ein Gutschein für einen Einkauf bei einem lokal produzierenden Betrieb verschenkt wird.</p>
  <p><b>Social Media:</b> Lokale Produzent*innen, anstehende Veranstaltungen und sonstige Neuigkeiten sollten über die sozialen Medien aktiv beworben werden, um eine möglichst große Reichweite zu erzielen. Auch kurzes Storytelling zu aufgelisteten Unternehmen, kann die Sichtbarkeit und Akzeptanz von Unternehmen erhöhen. Dabei können bestehende Kanäle genutzt werde, z. B. über den Instagram-Account der Stadt Gelsenkirchen oder Kanäle der Wirtschaftsförderung.</p>
  <p>Zur Etablierung dieser Lösungsvorschläge ist eine Akteurswerkstatt denkbar, bei der die Möglichkeiten dieser Kampagne erörtert, Maßnahmen gemeinsam weiterentwickelt und das grundsätzliche Interesse der lokal Produzierenden abgefragt werden kann.</p>`,
  effects: `<p>Bewusstseinsbildung hinsichtlich Bedeutung und Mehrwerten Urbaner Produktion, Vernetzung urbaner Produzenten, Werbung für urbane Betriebe</p>`,
  challenges: `<p>Insbesondere Kleinst-, Klein- und mittelständische Unternehmen weisen wenig Ressourcen auf, um neben dem täglichen Geschäft weitere Anstrengungen aufzunehmen. Gemeinsam mit den genannten Akteuren gilt es, diese so weit wie möglich zu entlasten und den Mehrwert zu verdeutlichen.</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  <li>Storytelling</li>
  <li>Tag der offenen Tür der innerstädtischen produzierenden Betriebe</li>
  <li>Netzwerk und Vernetzung</li>
  <li>Wochenmärkte / Feierabendmarkt</li>
  <li>Ausweitung des Stadtgutscheinsystems</li>
  <li>CrossMarketing-Formate</li>
  </ul>`,
  area: `<p>Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.gelsenkirchen.de/de/_meta/aktuelles/artikel/49922-gemeinsam-zukunft-gestalten@Ha?fbclid=IwAR21kadcWdK--AEkPX498t7Yt6vJPRQZ5zgFjUCjd5x5xqoQM3UdDY55JRQ" target="_blank">Wertschätzungskampagne Handwerk (HWK Münster) in Gelsenkirchen</a></li>
  <li><a href="https://www.wko.at/branchen/noe/handel/Regionalis_Projektbeschreibung.pdf" target="_blank">Regionalis-Marktplatz</a></li>
  <li><a href="https://bochumer-originale.de/" target="_blank">Bochumer Originale</a></li>
  </ul>`,
  image: "img/made_in_kampagne.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Sensibilisierung der Stadtgesellschaft",
},

{
  id: 463,
  number: "4.6.3",
  title: "Storytelling",
  description: `<p>Bürger*innen und weitere Akteure der Zivilgesellschaft sowie Wirtschaft und Wissenschaft sollen für die Vorteile des produzierenden Gewerbes sensibilisiert werden, um schließlich etwaige Nutzungskonflikte vorzubeugen und Vorbehalte der Anwohnerschaft abzubauen. Dabei können unterschiedliche Kommunikationsmittel genutzt werden, um das breite Themenfeld der Urbanen Produktion und damit zusammenhängende Anforderungen, Nutzungen, Bedarfe und Herausforderungen aufzuzeigen und schließlich die Wertschätzung gegenüber produzierendem Gewerbe zu stärken. In Form eines Storytellings über lokal produzierenden Unternehmen oder bestimmten Branchen, können diese in sozialen Medien und / oder der lokalen Presse vorgestellt werden. Ziel dabei ist es, ein lokales Bewusstsein für die Betriebe schaffen sowie deren Wertschätzung in der Öffentlichkeit zu erhöhen. Denkbar wäre eine Beitrags- oder Artikelserie, in der innerhalb eines Jahres jeweils ein oder mehrere produzierende Unternehmen vorgestellt werden. Hierbei sind thematische gebündelte Artikel ebenso denkbar wie die Bündelung von kooperierenden Unternehmen in einem Artikel oder eine räumliche Aufteilung nach Stadtteilen oder ähnlichem. Der Fokus liegt auf praxisnahen Themen und Beispielen.</p>`,
  targetgroups: `<p>Bürger*innen</p>`,
  actors: `<p>Urban produzierende Unternehmen, UrbaneProduktion.Ruhr, Handwerkskammer, Stadtmarketing, Presse</p>`,
  cost: `<p>Personal (gering), Sachkosten (keine)</p>`,
  time: `<p>Kurz- bis mittelfristig</p>`,
  problem: `<p>Fachkräftemangel, fehlende Wertschätzung für Urbane Produktion, fehlendes Bewusstsein für lokale Produkte</p>`,
  solution: `<p>Entwurf und anschließende Publikation von Geschichten zu urban produzierenden Unternehmen, Vernetzung lokaler Unternehmer unter Einbezug der Presse / Öffentlichkeit, Kooperation mit Wertschätzungskampagne der HWK Münster</p>`,
  effects: `<p>Sichtbarmachung, Aufmerksamkeit, Anstoß von Diskussionen</p>`,
  challenges: `<p>Steuerung der Kampagne als zeitaufwändige Aufgabe, die u. U. komplexe Absprachen erfordert, Publikum muss sich für die Thematik interessieren</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Kurator zur Förderung von Bestandsunternehmen urban produzierender Unternehmen</li>
  <li>Einbindung von Universitäten / Hochschulen</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  <li>Made in Kampagne (Hidden Champions Kampagne)</li>
  <li>Schaufensterwettbewerb</li>
  </ul>`,
  area: `<p>Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.senkrechtstarter.de/news/detail/bochum-eine-produktive-stadt/" target="_blank">Bochum - eine produktive Stadt?!</a></li>
  <li><a href="https://urbaneproduktion.ruhr/ausstellung/" target="_blank">Wanderausstellung „Urbane Produktion – Produktion zurück in die Stadt?!“</a></li>
  <li><a href="https://www.waz.de/staedte/bochum/wie-die-bochumer-jobschmiede-handwerk-in-corona-zeiten-tickt-id230917794.html" target="_blank">WAZ-Artikel “Handwerk in Corona Zeiten”</a></li>
  <li><a href="https://urbaneproduktion.ruhr" target="_blank">Blogbeiträge Urbane Produktion</a></li>
  <li><a href="https://walnussundgewebe.ruhr/" target="_blank">Blogbeiträge Walnuss und Gewebe</a></li>
  </ul>`,
  image: "img/storytelling.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Sensibilisierung der Stadtgesellschaft",
},

{
  id: 464,
  number: "4.6.4",
  title: "Schaufensterwettbewerb",
  description: `<p>Um die Akzeptanz für urbane Produktion zu erhöhen und gleichzeitig lokal und regional hergestellte Produkte stärker in der Lebenswirklichkeit der Konsument*innen zu verankern, ist es notwendig, Produktion sicht- und erlebbar zu machen. Hierzu kann ein Schaufensterwettbewerb von produzierenden Unternehmen innerhalb des Stadtgebietes oder eines Stadtteils wie Schalke-Nord ein probates Mittel sein. Unternehmen werden aufgefordert, ihre Schaufenster innerhalb eines festgeschriebenen Zeitraums kunstvoll zu dekorieren, häufig unter Vorgabe eines Mottos. Je nach Größe sowie Zentralität des Gebiets wäre auch eine zentrale Koordinierung des Schaufensterwettbewerbs über eine Internetplattform möglich, sodass Unternehmer*innen ein „digitales Schaufenster“ gestalten können.</p>
  <p>Die Aktion wird öffentlichkeitswirksam begleitet, eine Jury kürt anschließend die Gewinner*innen. Bei der Durchführung bietet sich eine Kooperation der Wirtschaftsförderung mit dem Stadtmarketing, IHK und/oder HWK an, um bei der Bewerbung und Durchführung das Netzwerk der Institutionen zu nutzen. Auch die lokalen Unternehmen können neben der steigenden öffentlichen Wahrnehmung auch von der daraus entstehenden Vernetzung profizieren um mögliche neue Kooperationen zu bilden oder Wertschöpfungsketten zu verbessern.</p>`,
  targetgroups: `<p>Urbane produzierende Betriebe, Eigentümer*innen, Bürger*innen</p>`,
  actors: `<p>Urbane produzierende Betriebe, Wirtschaftsförderung, Stadtmarketing, Stadtteilmanagements, Industrie und Handelskammer, Handwerkskammer</p>`,
  cost: `<p>Personal (gering); Sachkosten (gering)</p>`,
  time: `<p>Kurz- bis mittelfristig</p>`,
  problem: `<p>Fehlende Wahrnehmung urbaner Produktion in der Stadt. Zudem vermehrt Leerstand und unattraktive Innenstädte und Stadtteilzentren.</p>`,
  solution: `<p>Planung des organisatorischen Rahmens sowie anschließende Koordinierung des Wettbewerbs (Räumliche Ausdehnung, ggf. Bereitstellung der digitalen Infrastruktur), Zusammenarbeit mit Multiplikator*innen</p>`,
  effects: `<p>Verbesserung des Images, Außenwirkung, attraktives Stadtbild</p>`,
  challenges: `<p>Mehrsprachige Öffentlichkeitsarbeit, um alle Unternehmen und Eigentümer*innen zu erreichen, fehlende personelle und zeitliche Ressourcen der Unternehmer*innen, Mehrwehrt für Unternehmer*innen muss betont werden</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  <li>Made in Kampagne (Hidden Champions Kampagne)</li>
  <li>Storytelling</li>
  <li>Ausweitung des Stadtgutscheinsystems</li>
  <li>CrossMarketing-Formate</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.lokalkompass.de/tag/schaufensterwettbewerb" target="_blank">Schaufensterwettbewerb Hagen</a></li>
  <li><a href="https://www.wf-hamm.de/hamm-bietet/schaufensterwettbewerb/" target="_blank">Schaufensterwettbewerb Hamm</a></li>
  </ul>`,
  image: "img/schaufensterwettbewerb.png",
  imageSrc: "https://www.lokalkompass.de/hagen/c-ueberregionales/hagen-im-fluss-die-gewinner-des-hagen-schaufensterwettbewerbs_a710019#gallery=default&pid=8789757",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Sensibilisierung der Stadtgesellschaft",
},

{
  id: 465,
  number: "4.6.5",
  title: "Tag der offenen Tür der innerstädtischen produzierenden Betriebe",
  description: `<p>Durch einen gemeinsamen „Tag der offenen Tür“ kann die Produktionsvielfalt der in Gelsenkirchen angesiedelten produzierenden Betriebe aufgezeigt werden. Betriebe gewähren interessierten Menschen über Führungen, Mitmach-Workshops, Showproduktion o. ä. einen Einblick in ihre Produktionsweise und stehen für Rückfragen und persönliche Gespräche zur Verfügung. Eine entsprechende (Online-)Broschüre visualisiert das Angebot des Tags der offenen Tür. Dies kann in Kombination mit Kampagnen und weiteren öffentlichkeitswirksamen Maßnahmen geschehen. Als Tag dafür eignen sich z. B. die verkaufsoffenen Sonntage sowie der Abendbereich, da dort auch Räume oder Anlagen vorgestellt werden können, die während des Betriebs unzugänglich sind.</p>
  <p>Die produzierenden Betriebe profitieren dabei durch eine erhöhte Kundenakquise während die Bürger*innen einen Einblick in die Produktionsweise erhalten und gleichzeitig mit dem Thema der urbanen Produktion sensibilisiert werden.</p>`,
  targetgroups: `<p>Bürger*innen, Gründungsinteressierte</p>`,
  actors: `<p>Urban produzierende Betriebe, Wirtschaftsförderung, Industrie und Handelskammer, Handwerkskammer, Gewerbevereine, Einzelhandelsverbände</p>`,
  cost: `<p>Personal (Gering bis mittel), Sachkosten (keine)</p>`,
  time: `<p>Kurzfristig</p>`,
  problem: `<p>Fachkräftemangel, fehlende Wertschätzung für Urbane Produktion, fehlendes Bewusstsein für lokale Produkte </p>`,
  solution: `<p>Planung und Durchführung eines quartiers- oder stadtweiten Tags, an dem produzierende Unternehmen ihre Betriebe vorstellen. Die Planung und Beantragung kann beispielsweise durch den Einzelhandelsverband bei der Stadt stattfinden</p>`,
  effects: `<p>Sichtbarmachung bestehender Betriebe, Öffentlichkeitsarbeit, Einblicke in Betriebsstrukturen und Produktionsweisen, Weckung von Interesse bei potenziellen Konsument*innen, Steigerung der Wertschätzung</p>`,
  challenges: `<p>Mögliche Betriebsgeheimnisse der Unternehmen, Insbesondere Kleinst-, Klein- und mittelständische Unternehmen weisen wenig Ressourcen auf, um neben dem täglichen Geschäft weitere Anstrengungen aufzunehmen. Mehrwerte müssen verdeutlicht werden.</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Einbindung von Universitäten / Hochschulen</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  <li>Made in Kampagne (Hidden Champions Kampagne)</li>
  <li>Storytelling</li>
  <li>Netzwerk und Vernetzung</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.erzgebirge-tourismus.de/20-jahre-tag-des-handwerks/" target="_blank">Tag des traditionellen Handwerks Erzgebirge</a></li>
  <li><a href="https://www.hwk-duesseldorf.de/artikel/tag-des-handwerks-am-19-9-2020-31,0,4856.html" target="_blank">Tag des Handwerks (Das Handwerk)</a></li>
  <li><a href="https://www.nordschwarzwald.ihk24.de/blueprint/servlet/resource/blob/
  2604386/f926fcc859b3280081a12240ef419871/tipps-fuer-die-oeffentlichkeitsarbeit-tag-der-offenen-tuer-data.pd
  " target="_blank">Die IHK bietet Leitfäden für einen Tag der offenen Tür für Unternehmen an</a></li>
  <li><a href="https://glaserei-koch.com/2019/04/04/10-hoffest/" target="_blank">Hoffest der Glaserei Koch aus Neubrandenburg</a></li>
  </ul>`,
  image: "img/tag_der_offenen_tuer_der_innerstaedtischen_produzierenden_betriebe.jpg",
  imageSrc: "https://www.erzgebirge-tourismus.de/tag-des-handwerks/",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Sensibilisierung der Stadtgesellschaft",
},

{
  id: 471,
  number: "4.7.1",
  title: "Netzwerk und Vernetzung",
  description: `<p>Es gibt über 800 produzierende Betriebe in Gelsenkirchen, die vor unterschiedlichen Herausforderungen stehen. Eine Vernetzung dieser Betriebe untereinander sowie mit weiteren relevanten Akteuren (Wirtschaftsförderung, Stadtmarketing, Stadtplanung usw.), bietet Möglichkeiten zur frühzeitigen und bedarfsgerechten Unterstützung. Gleichzeitig bieten zielgerichtete Zusammenschlüsse Synergieeffekte, sodass bspw. neue Kooperationen und Lieferketten entstehen oder Ressourcen geteilt werden können. Für die Umsetzung der Maßnahme sollte zunächst geschaut werden, welche bestehenden Zusammenschlüsse von Betrieben bereits genutzt werden und wo es diesbezüglich noch Nachholbedarf gibt.</p>`,
  targetgroups: `<p>Urban produzierende Unternehmen</p>`,
  actors: `<p>Wirtschaftsförderung, Business Metropole Ruhr, Impact Hub, UrbaneProduktion.Ruhr,  Handwerkskammer, Industrie und Handelskammer</p>`,
  cost: `<p>Personal (Gering bis mittel), Sachkosten (keine)</p>`,
  time: `<p>Kurz- bis mittelfristig</p>`,
  problem: `<p>Potenzielle Wertschöpfungsketten werden nicht ausgeschöpft, fehlender lokaler Knowhow-Transfer, Fachkräftemangel</p>`,
  solution: `<p>Lobbyarbeit respektive Akquise und Vernetzung urbaner Produzenten sowie anschließende regelmäßige Netzwerktreffen zu unterschiedlichen inhaltlichen Themen, um Austausch und Kontakt zwischen den verschiedenen Unternehmen herzustellen.</p>`,
  effects: `<p>Kreislaufwirtschaft, Vermehrte Zusammenarbeit, Synergien</p>`,
  challenges: `<p>Insbesondere Kleinst-, Klein- und mittelständische Unternehmen weisen wenig Ressourcen auf, um neben dem täglichen Geschäft weitere Anstrengungen aufzunehmen. Möglicher Wettbewerb zwischen den Unternehmen (Konkurrenzgedanke)</p>`,
  interactions: `<ul><li>Städtebauförderprogramm</li><li></li></ul>`,
  area: `<p>Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="" target="_blank"></a></li>
  <li><a href="" target="_blank"></a></li>
  </ul>`,
  image: "img/netzwerk_und_vernetzung.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Netzwerk, Vernetzung und Information",
},

{
  id: 472,
  number: "4.7.2",
  title: "Newsletter",
  description: `<p>Ein Newsletter kann produzierende Unternehmen zum einen über bevorstehende Veranstaltungen z. B. zur Unternehmensentwicklung und Gründungsinitiativen informieren und zum anderen aktuelle Immobilien und Leerstände bewerben. Zusätzlich können in Form eines Newsletters Anknüpfungspunkte für Kooperations-potenziale aufgezeigt werden. 
  Für die Umsetzung bieten sich zunächst Rücksprachen mit relevanten Multiplikatoren (HWK, IHK, Wirtschaftsförderung etc.) zu bereits bestehenden Kanälen und Newslettern an. Anschließend kann bei Bedarf ein neues gemeinsames Format aufgesetzt oder ein bestehendes weiterentwickelt werden.</p>`,
  targetgroups: `<p>Urban produzierende Betriebe</p>`,
  actors: `<p>Wirtschaftsförderung, Handwerkskammer, Industrie und Handelskammer</p>`,
  cost: `<p>Personal (gering), Sachkosten (keine)</p>`,
  time: `<p>kurz- bis mittelfristig</p>`,
  problem: `<p>Informationen über lokal, benachbarte Unternehmen fehlen, potenzielle wichtige Neuigkeiten und Vernetzungsmöglichkeiten werden von vielen Unternehmen nicht wahrgenommen</p>`,
  solution: `<p>Aufbau eines Newsletters mit regelmäßigen Intervallen mit Informationen über einzelne Unternehmen, Veranstaltungen sowie aktuelle Trends urbaner Produktion</p>`,
  effects: `<p>Aufmerksamkeit auf Vernetzungs- und Kooperationsmöglichkeiten sowie Trends zur urbanen Produktion lenken</p>`,
  challenges: `<p>Fehlende personelle und zeitliche Ressourcen der Unternehmer*innen Mögliche Konkurrenzgedanken der Unternehmen, Großes bestehendes Angebot an Newslettern</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Kurator zur Förderung von Bestandsunternehmen urban produzierender Unternehmen</li>
  <li>Netzwerk und Vernetzung</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://metropole.ruhr/wir-fuer-die-wirtschaft" target="_blank">Metropole Ruhr: Wir für die Wirtschaft</a></li>
  <li><a href="https://www.bochum-wirtschaft.de/newsletter/anmeldung/" target="_blank">Bochum Wirtschaftsentwicklung: z.B. Newsletter für die Kreativwirtschaft mit Veranstaltungshinweisen, Suche und Finde-Nachrichten</a></li>
  </ul>`,
  image: "img/newsletter.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Netzwerk, Vernetzung und Information",
},

{
  id: 481,
  number: "4.8.1",
  title: "Wochenmärkte / Feierabendmarkt",
  description: `<p>In Gelsenkirchen gibt es bereits mehrere Wochenmärkte, sowie den Feierabendmarkt in der Altstadt. Dort können lokale Produkte (bisher überwiegend Lebensmittel) vermarktet werden. Diese können zukünftig auch genutzt werden, um lokal gefertigte Produkte abseits von Lebensmitteln anzubieten. Für ausgewählte Gelsenkirchener Produkte wäre auch ein Verkaufsraum in der Altstadt oder Buer denkbar, beispielsweise in der Touristen-Information.</p>`,
  targetgroups: `<p>Bürger*innen, Urban produzierende Unternehmen</p>`,
  actors: `<p>Urban produzierende Unternehmen, Stadtmarketing, Wirtschaftsförderung</p>`,
  cost: `<p>Personal (gering), Sachkosten (gering)</p>`,
  time: `<p>Mittelfristig</p>`,
  problem: `<p>Unbekanntheit der lokalen Betriebe und Produkte; Fehlende Produkte die „Echt Ruhrgebiet“ sind, abseits von Kohle</p>`,
  solution: `<p>Förderung der bestehenden Wochenmärkte, Erweiterung des Produktangebotes von Wochenmärkten, Etablierung neuer Formate wie Marktschwärmerei und Crossmarketing</p>`,
  effects: `<p>Aufmerksamkeit für die lokalen Produkte erzeugen; Bekanntheit steigern</p>`,
  challenges: `<p>Angebot an Wochenmärkten zu gering, Schaffung neuer Standorte schwierig oder sehr kostenintensiv (z. B. Markthalle)</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Made in Kampagne (Hidden Champions Kampagne)</li>
  <li>Ausweitung des Stadtgutscheinsystems</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier</p>`,
  examples: `<ul>
  <li><a href="https://moltkemarkt.de/" target="_blank">Moltkemarkt Bochum Springerplatz</a></li>
  <li><a href="https://markthalleneun.de/" target="_blank">Markhalle 9 Berlin Kreuzberg</a></li>
  </ul>`,
  image: "img/wochenmaerkte_feierabendmarkt.jpg",
  imageSrc: "https://www.visitberlin.de/de/markthalle-neun",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Marktplatz für Urban Produziertes etablieren",
},

{
  id: 482,
  number: "4.8.2",
  title: "Ausweitung des Stadtgutscheinsystems",
  description: `<p>In Gelsenkirchen existiert seit Sommer 2021 ein Stadtgutscheinsystem als zentraler Baustein des Programms "Gelsenkirchen startet durch". Die Gutscheine können sowohl online als auch in verschiedenen Verkaufsstellen im gesamten Stadtgebiet erworben und bei allen Unternehmen, die am Gutscheinsystem teilnehmen, eingelöst werden. Nach der Aktivierung ist der Gutschein 3 Jahre gültig. Er kann auch in Teilbeträgen eingelöst werden. Das besondere Angebot: Mit dem Erwerb der Gutscheine unterstützt man den lokalen Einzelhandel, die Gastronomie und Dienstleister in Gelsenkirchen, was wiederrum besonders attraktiv für Einwohner*innen und lokale Arbeitgeber*innen ist, da sie hierdurch ihre lokale Verankerung zum Ausdruck bringen.</p>
  <p>Perspektivisch ließe sich das Stadtgutscheinsystem explizit auf lokale, urban produzierende Unternehmen ausweiten - ggf. sogar dann, wenn sie - wie häufig der Fall - über keine eigene Verkaufsstelle in Gelsenkirchen verfügen (Versandoptionen, Abholung ab Lager)</p>`,
  targetgroups: `<p>Bürger*innen, Urban produzierende Unternehmen </p>`,
  actors: `<p>Verein "Stadtgutscheinsystem Gelsenkirchen", Wirtschaftsförderung, Urban produzierende Unternehmen</p>`,
  cost: `<p>Personal (gering), Sachkosten (keine)</p>`,
  time: `<p>Kurz- bis mittelfristig</p>`,
  problem: `<p>Gelsenkirchen weist zahlreiche Hidden Champions in der Produktion von insbesondere Lebensmitteln auf, die bei den Bürger*innen kaum bekannt sind</p>`,
  solution: `<p>Stadtgutscheinsystem um ein "Made in"-Segment erweitern und entsprechend vermarkten</p>`,
  effects: `<p>Aufmerksamkeit für lokale Erzeuger*innen und deren Produkte, potenzielle Möglichkeit zur Umsatzsteigerung für Unternehmen</p>`,
  challenges: `<p>Produzent*innen überzeugen, technische Rahmenbedingungen schaffen (Kassensystem, etc.)</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Made in Kampagne (Hidden Champions Kampagne)</li>
  <li>Schaufensterwettbewerb</li>
  <li>Wochenmärkte / Feierabendmarkt</li>
  </ul>`,
  area: `<p>Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://bochumer-originale.de/partner-service/" target="_blank">Stadtgutschein Bochumer Originale</a></li>
  <li><a href="https://www.gelsenkirchen.de/de/_meta/aktuelles/artikel/49777-premiere-fuer-den-stadtgutschein-in-gelsenkirchen" target="_blank">Stadtgutschein Gelsenkirchen</a></li>
  </ul>`,
  image: "img/ausweitung_des_stadtgutscheinsystems.jpg",
  imageSrc: "https://www.gelsenkirchen.de/de/_meta/aktuelles/artikel/49777-premiere-fuer-den-stadtgutschein-in-gelsenkirchen",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Marktplatz für Urban Produziertes etablieren",
},

{
  id: 483,
  number: "4.8.3",
  title: "Crossmarketing- Formate",
  description: `<p>Oftmals spielen lokale Produkte in der Lebenswirklichkeit der Bürger*innen nur eine vergleichsweise geringe Rolle und sind wenig bekannt. Um das Bewusstsein für Produkte und die Nachfrage nach diesen zu steigern, ist es daher sinnvoll eine größere Aufmerksamkeit für diese zu schaffen, indem z. B. Waren anderer Unternehmen in einem sogenannten CrossMarketing-Regal in einem Ladenlokal ausgestellt und beworben werden. So können sich lokale Unternehmen gegenseitig unterstützen und die Bevölkerung für andere lokale Waren und Güter sensibilisieren. Für das Crossmarketing bieten sich neben Regalen in einem Ladenlokal viele weitere verschiedene Formate, wie beispielsweise ein Stand in einer Markthalle oder einem Einkaufszentrum.</p>`,
  targetgroups: `<p>Bürger*innen, Urban produzierende Unternehmen</p>`,
  actors: `<p>Urban produzierende Unternehmen , Stadtmarketing, Wirtschaftsförderung</p>`,
  cost: `<p>Personal (gering), Sachkosten (gering)</p>`,
  time: `<p>Kurzfristig</p>`,
  problem: `<p>Unbekanntheit lokaler Unternehmen und Produkte</p>`,
  solution: `<p>Aufstellen von Regalen in Ladenlokalen, in denen Produkte anderer lokaler Unternehmen vorgestellt werden und gekauft werden können</p>`,
  effects: `<p>Aufmerksamkeit für lokale Unternehmen und Produkte, Werbung für lokale Produkte, Imagegewinne</p>`,
  challenges: `<p>Bereitschaft der Unternehmer*innen für gegenseitiges Marketing erzeugen (Konkurrenzgedanke), fehlende Netzwerke</p>`,
  interactions: `<ul>
  <li>Made in Kampagne (Hidden Champions Kampagne)</li>
  <li>Schaufensterwettbewerb</li>
  </ul>`,
  area: `<p>Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://glaserei-koch.com/2020/12/14/platz-ist-in-der-kleinsten-huette/" target="_blank">Aktion „Platz ist in der kleinsten Hütte“ der NordStartNB</a></li>
  </ul>`,
  image: "img/crossmarkteting-formate.jpg",
  imageSrc: "",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Marktplatz für Urban Produziertes etablieren",
},

{
  id: 491,
  number: "4.9.1",
  title: "Urbane Logistik",
  description: `<p>Ein allgemeingültiges Konzept für eine nachhaltige urbane Logistik existiert aufgrund der unterschiedlichen Bedürfnisse, Strukturen und Besonderheiten einer Stadt nicht. Daher ist es wichtig das Maßnahmen-Portfolio auf das Stadtgebiet Gelsenkirchen abzustimmen. Denkbar wäre in diesem Zusammenhang sowohl eine Kopplung mit dem in Aufstellung befindlichen Masterplan Mobilität als auch die Erarbeitung eines separaten Wirtschaftsverkehrskonzeptes. Hierdurch könnte das Verkehrssystem der Stadt Gelsenkirchen auf die logistischen Herausforderungen der Zukunft angepasst werden.</p>`,
  targetgroups: `<p>Speditionsfirmen, Verlader, Urban produzierende Unternehmen</p>`,
  actors: `<p>Verkehrsplanung, Stadtplanung,Wirtschaftsförderung</p>`,
  cost: `<p>Personal (mittel bis hoch), Sachkosten (hoch, je nach Maßnahme)</p>`,
  time: `<p>Mittelfristig</p>`,
  problem: `<p>Zunehmende Verkehrsbelastung in den Innenstädten</p>`,
  solution: `<p>Einbindung urbaner Logistik in das Mobilitätskonzeptes ggf. Aufstellung eines Wirtschaftsverkehrskonzeptes sowie die spätere Umsetzungsbegleitung</p>`,
  effects: `<p>Schaffung eines zukunftsfähigen, stadtverträglichen und nachhaltigen Logistiksystems, Entlastung des innerstädtischen Verkehrs</p>`,
  challenges: `<p>Koordinierung verschiedener Akteure (Speditionsfirmen, Einzelhändler, Verlader und Kommune) ist oftmals kompliziert, Aufstellung vollständig neuer Konzepte ist zeit- und ressourcenintensiv , fehlende Infrastruktur muss aufgebaut werden</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Zwischennutzung</li>
  <li>Integriertes Wirtschaftsflächenkonzept</li>
  <li>Leerstandserhebung / Gewerbliches Leerstandskataster</li>
  </ul>`,
  area: `<p>Stadtteil/Quartier, Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://useful.uni-hannover.de/" target="_blank">Initiative Urbane Logistik Hannover (USEfUL) </a></li>
  <li><a href="https://www.urbanelogistik.de/quartierslogistik/" target="_blank">Projekt Stadtquartier 4.0 / 4.1</a></li>
  </ul>`,
  image: "img/urbane_logistik.jpg",
  imageSrc: "https://www.urbanelogistik.de/quartierslogistik/",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Urbane Logistik und CityHubs",
},

{
  id: 4101,
  number: "4.10.1",
  title: "Gemeinschaftsgärten",
  description: `<p>Mit der Ausweisung von Flächen für Gemeinschaftsgärten in Gelsenkirchen können funktionslose Grünflächen zu einem Treffpunkt für Hobbygärtner*innen werden. Durch die gemeinschaftlichen und das freiwillige Engagement geschaffenen Gärten wird die Interaktion in der Stadt gestärkt, sodass eine vielfältige und offene Gemeinschaft rund um das Thema urbane Landwirtschaft entstehen kann. Auch als Zwischennutzung kann ein Gemeinschaftsgarten das lokale Quartier stärken</p>`,
  targetgroups: `<p>Bürger*innen</p>`,
  actors: `<p>Grünflächenamt Gelsenkirchen, Bürger*innen, Insane Urban Cowboys e.V., Eigentümer*innen, ggf. Quartiers-/Citymanagement</p>`,
  cost: `<p>Personal (gering), Sachkosten (mittel)</p>`,
  time: `<p>Mittel- bis langfristig</p>`,
  problem: `<p>Fehlendes Grün in den Zentren der Stadt und dadurch Entstehung von „Hitzeinseln“, fehlendes Wissen über Nahrungsmittel und deren Herkunft bei Stadtgesellschaft.</p>`,
  solution: `<p>Planung und Entwicklung eines weiteren Gemeinschaftsgartens in Gelsenkirchen</p>`,
  effects: `<p>Nahrungsmittelproduktion rückt in den Fokus der städtischen Bevölkerung, Positive mikroklimatische Effekte, Steigerung der Wertschätzung für Lebensmittel (Entgegenwirken von Lebensmittelverschwendung), Beitrag zur Müllvermeidung (unverpackt), Nutzung von Brachflächen
  </p>`,
  challenges: `<p>Vorbelastete Flächen (Beachtung der Schadstoffbelastung von Stadtgemüse und Stadtobst), Möglicher Vandalismus, Potenzielle (Brach-)Flächen in privatem Eigentum</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Zwischennutzung</li>
  <li>Essbare Stadt</li>
  <li>Gemeinschaftsgärten</li>
  <li>Walnussanbau in Gelsenkirchen</li>
  </ul>`,
  area: `<p>Immobilie/Grundstück, positive Effekte auf Stadtteil/Quartier</p>`,
  examples: `<ul>
  <li><a href="https://www.lokalkompass.de/gelsenkirchen/c-vereine-ehrenamt/es-blueht-und-gruent-bereits_a1103046" target="_blank">Gemeinschaftsgarten Gelsenkirchen</a></li>
  <li><a href="https://dieurbanisten.de/urbanisten-projekt/westgarten-dortmund/" target="_blank"Westgarten Dortmund</a></li>
  </ul>`,
  image: "img/gemeinschaftsgaerten.jpg",
  imageSrc: "https://dieurbanisten.de/urbanisten-projekt/westgarten-dortmund/",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Urbane Landwirtschaft",
},

{
  id: 4102,
  number: "4.10.2",
  title: "Solidarische Landwirtschaft",
  description: `<p>Durch die Förderung, Bekanntmachung und Verstetigung des Ansatzes der solidarischen Landwirtschaft (Solawi) in Gelsenkirchen können sowohl Bürger*innen, Landwirte*innen als auch die Region profitieren. Dabei beschreibt Solawi einen Ansatz, bei dem die Lebensmittel nicht mehr über einen Markt vertrieben werden, sondern in einen eigenen, transparenten Wirtschaftskreislauf einfließen, der von den Konsument*innen mit organisiert und finanziert wird. Dadurch können die Bewohner*innen Gelsenkirchens einerseits vielfältige, lokal produzierte Nahrungsmittel beziehen und genau nachvollziehen woher die Produkte stammen andererseits wird durch die Solawi die Sensibilität für das Thema der regionalen Landwirtschaft erhöht. Auch die lokale Landwirtschaft in Gelsenkirchen kann von dem Ansatz profitieren, indem das Produktionsrisiko auf die Gemeinschaft verteilt wird und so die Planungssicherheit für eine gesunde Form der Landwirtschaft gesteigert wird. Für die Stadt Gelsenkirchen könnte die Ausweitung und Bewerbung eines solchen Ansatzes vorteilhaft sein, da die Vielfalt der Landwirtschaft die Lebensqualität erhöht und vor allem die Wertschöpfung in der Region bleibt. In der Stadt gibt es mit dem Lindenhof bereits einen ersten Betrieb, der sich der solidarischen Landwirtschaft verschrieben hat. Die Bekanntheit solcher lokaler Betriebe sollte weiter gesteigert werden, um weitere regionale Landwirt*innen für das Thema der solidarischen Landwirtschaft zu gewinnen.</p>`,
  targetgroups: `<p>Bürger*innen, Produzent*innen aus der Landwirtschaft</p>`,
  actors: `<p>Solawi – Lindenhof Gelsenkirchen, Produzent*innen aus der Landwirtschaft, Wirtschaftsförderung</p>`,
  cost: `<p>Personal (gering), Sachkosten (gering)</p>`,
  time: `<p>Mittelfristig</p>`,
  problem: `<p>fehlendes Wissen über Nahrungsmittel und deren Herkunft bei Stadtgesellschaft; Landwirt*innen sind angesichts zunehmender Klimakatastrophen vermehrten Risiken ausgesetzt</p>`,
  solution: `<p>Förderung, Bekanntmachung und Verstetigung des Ansatzes der solidarischen Landwirtschaft (Solawi) in Gelsenkirchen</p>`,
  effects: `<p>Planungssicherheit für Landwirt*innen, Nahrungsmittelproduktion rückt in den Fokus der städtischen Bevölkerung, Steigerung der Wertschätzung für Lebensmittel (Entgegenwirken von Lebensmittelverschwendung), Beitrag zur Müllvermeidung (unverpackt), Förderung regionaler Nachhaltigkeit</p>`,
  challenges: `<p>Fehlende Bereitschaft der Landwirt*innen den Betrieb umzustrukturieren</p>`,
  interactions: `<ul>
  <li>Städtebauförderprogramm</li>
  <li>Wissenstransfer in die Stadtgesellschaft</li>
  </ul>`,
  area: `<p>Gesamtstadt</p>`,
  examples: `<ul>
  <li><a href="https://www.walnussmeisterei.de/" target="_blank">Walnussmeisterei Böllersen</a></li>
  </ul>`,
  image: "img/solidarische_landwirtschaft.jpg",
  imageSrc: "https://www.lindenhof-gelsenkirchen.de/kontakt/",
  iconsValuation: {
    effects: 1,
    challenges: 1
  },
  theme: "Urbane Landwirtschaft",
}]