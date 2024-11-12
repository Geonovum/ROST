# Het informatiemodel toegelicht

**In dit hoofdstuk wordt ingegaan op de wijze waarop in IMRO2012 modelmatig de
objecten en attributen van een AMvB zijn opgenomen. Daarnaast worden belangrijke
uitgangspunten van digitale uitwisseling en IMRO2012 toegelicht.**

## De objectbenadering van een AMvB

Conform IMRO2012 is een object altijd een ruimtelijke object dat een ruimtelijke
eenheid representeert waar tekst (besluittekst, toelichting, voorschriften of
regelen, etc.) betrekking op heeft.

In een AMvB kunnen deze ruimtelijke eenheden geometrisch worden vastgelegd of
worden aangeduid aan de hand van eenduidige en objectieve criteria in de
regeling op basis waarvan de gebieden kunnen worden bepaald. In een AMvB is een
object pas een object als het geometrisch is vastgelegd.

Een AMvB bestaat uit drie typen objecten (klassen):

-   Besluitgebied; 
-   Besluitvlak; 
-   Besluitsubvlak.  
<br/><br/>

In Figuur 1 is het complete schema weergegeven met alle onderscheiden objecten.

![](media/99198463f25b2203e13d8c4c5a61f87b.jpg)

**Figuur 1 Objectenstructuur**
</br></br>

**Besluitgebied**  
Het Besluitgebied is het werkingsgebied van de AMvB. De klasse Besluitgebied
representeert het hele besluit. Onder andere is het werkingsgebied als geometrie
opgenomen en is er een verwijzing naar de gehele tekst van het besluit. Een AMvB
volgens IMRO2012 bevat dus altijd precies één Besluitgebied.

Sommige AMvB’s refereren niet expliciet aan een geografisch toepassingsgebied,
maar kennen een meer thematisch toepassingsgebied (zoals bijvoorbeeld in het
Besluit externe veiligheid Inrichtingen). In zo’n geval is heel Nederland het
werkingsgebied, en wordt de kaart van Nederland als geometrie opgenomen. Het
verdient aanbeveling om hierbij tot standaardisatie te komen. Zo’n
standaardisatie maakt geen onderdeel uit van deze praktijkrichtlijn.

Verder dient bij het coderen van een AMvB gebruik te worden gemaakt van de
objectklassen Besluitvlak en Besluitsubvlak, waarbij Besluitvlakken en
Besluitsubvlakken elkaar mogen overlappen.
<br/><br/>

**Besluitvlak**  
Een besluitvlak is een gebied, geometrisch vastgelegd in de AMvB, dat
zelfstandige eigenschappen heeft (bijvoorbeeld een daaraan gekoppeld
voorschrift). Daarnaast voldoet het gebied niet aan de definitie van een
Besluitsubvlak.
Een AMvB bestaat altijd uit tenminste één Besluitvlak.
<br/><br/>

**Besluitsubvlak**  
Een besluitsubvlak is een gebied, geometrisch vastgelegd in de AMvB, met een
inhoudelijke relatie met een of meer in de AMvB geometrisch vastgelegde gebieden
(Besluitvlakken of Besluitsubvlakken). Besluitsubvlakken komen zo vaak voor als
gewenst.

## Structuur

Een AMvB bestaat altijd uit precies één object van de klasse Besluitgebied en
één of meer objecten van de klasse Besluitvlak die elkaar (deels) kunnen
overlappen. Daarnaast kan een AMvB één of meerdere objecten van de klasse
Besluitsubvlak bevatten. Zo’n Besluitsubvlak heeft altijd een inhoudelijke
relatie met één of meerdere onderliggende Besluitvlakken of met één of meerdere
andere onderliggende Besluitsubvlakken. In Figuur 1 is dit schematisch
weergegeven.

Er zijn daarmee twee geldige manieren om een AMvB volgens IMRO2012 beschikbaar
te stellen:  
-   Minimaal variant;  
-   Gestructureerde variant.

In de minimaal variant bestaat de gecodeerde AMvB uit één object van de klasse
Besluitgebied en één object van de klasse Besluitvlak. In de gestructureerde
variant worden er nog objecten aan de minimaal variant toegevoegd. Deze objecten
zijn van de klasse Besluitvlak en/ of van de klasse Besluitsubvlak.

Het streven is om zoveel mogelijk het gebruik van de minimaal variant te
vermijden. Indien het mogelijk is om een structuur met toegevoegde waarde voor
de afnemer op te bouwen door het gebruik van meerder objecten, dan dient dit ook
te gebeuren.

## Digitale verbeelding van het besluit

De AMvB wordt opgebouwd uit planobjecten. Deze planobjecten dienen zo gekozen te
worden dat een ontvanger een heldere representatie van het plan krijgt met een
duidelijke structuur die het plan onderverdeeld in consistente onderdelen.

Afbeeldingen van kaarten kunnen in het besluit worden opgenomen, maar kennen de
status van illustratie. De geometrie die in het besluit wordt opgenomen in de
vorm van GML-geometrie elementen is leidend of bindend voor de locatie van de
objecten.

De bronhouder dient een digitale verbeelding van het besluit ter beschikking te
stellen. Met behulp van een symboolcodelijst te vinden onder [IMRO2012](https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening/informatiemodel-ruimtelijke-ordening-imro2012) die bij de [RO Standaarden 2012](https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening)
beschikbaar is, kan de bronhouder aangeven hoe de AMvB worden weergegeven in een
interactieve raadpleegomgeving.

De symboolcodelijst beschrijft de vormgeving van de symbolen, kleuren en
patronen. Bij het opstellen van een AMvB kan de bronhouder aan een object een
symboolcode toekennen. Deze wordt met de rest van de informatie in de dataset
van de AMvB opgeslagen. De ontvanger van de dataset leest de gegevens, waaronder
de symboolcodes, uit en kan daardoor de AMvB weergeven zoals de bronhouder dit
bedoeld heeft. In Figuur 2 is een detail van de symboolcodelijst voor vormvrije
plannen opgenomen die onderdeel is van de RO Standaarden 2012.</br>

![](media/3996da701001c9222ae1e68603b121c6.png)
**Figuur 2 Detail van de symboolcodelijst voor vormvrije plannen**
</br></br>

In [Hoofdstuk 3](#H03) wordt per object uitgelegd hoe een symboolcode aan een object
wordt toegevoegd. [Hoofdstuk 5](#H05) gaat dieper in op het gebruik van de
symboolcodelijst voor vormvrije plannen.

## Geometrie en/of tekst als ingang voor beleid

De voorliggende praktijkrichtlijn is gericht op de geometrie en opbouw van de
AMvB. De geometrie (locatie) vormt hierbij de ingang voor het raadplegen van het
ruimtelijke plan.

Binnen de RO Standaarden 2012 is het gebruik van objectgerichte planteksten
(XML) onder voorwaarde verplicht. Bij het gebruik van objectgerichte planteksten
wordt het mogelijk om de tekst te laten fungeren als ingang voor het raadplegen
van het ruimtelijk plan binnen een interactieve raadpleegomgeving.

In [Hoofdstuk 3](#H03) van deze praktijkrichtlijn worden de attributen voor planteksten
benoemd. Voor toelichting op het gebruik van de standaard voor planteksten
(IMROPT2012) wordt verwezen naar de toelichting Praktijkrichtlijn voor
Planteksten (PRPT2012).

## Metadata

In de voorgaande paragrafen is het IMRO met betrekking tot de AMvB toegelicht.
Wanneer de AMvB digitaal wordt vastgelegd bestaat deze uit een set van
verschillende bestanden: de dataset. STRI2012 geeft regels met betrekking tot
deze bestanden.

In het GML bestand is ook bepaalde informatie over de AMvB opgenomen. Ook in het
geleideformulier en manifest is bepaalde informatie over de AMvB opgenomen.
Gegevens over gegevens wordt metadata genoemd. In IMRO2012 zijn bij de klasse
*MetadataIMRObestand* regels opgenomen over de in het GML bestand op te
nemen metadata. In Tabel 1 wordt klasse *MetadataIMRObestand* toegelicht.

<table id="d4e32" style="width: 100%;"><caption>Klasse MetadataIMRObestand</caption><colgroup><col id="col1" style="width: 28.57142857142857%;"></col><col id="col2" style="width: 38.775510204081634%;"></col><col id="col3" style="width: 4.081632653061225%;"></col><col id="col4" style="width: 28.57142857142857%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="205C449E">Metadata attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0EC1224A">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="224D2FE6">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="06335B2E">opmerking</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09D310A0">datasetTitel</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="013190C9">naam van de dataset of dataset serie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="658C2D82">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4DBAC0CC">dit komt overeen met de naam van het plan/besluit</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="176E85E6">creatiedatum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="061382DA">datum waarop het bestand gemaakt is</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="358FA4CF">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62B27B34">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0D5057D0">bronbeheerder</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E45710C">partij die verantwoordelijkheid heeft geaccepteerd en zorg draagt voor het beheer van de data</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="290EB2D3">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="33EF1DD9">naam van ministerie(s)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3629EB91">codeerVerantwoordelijke</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="013EE090">diegene die verantwoordelijk is voor de IMRO-codering</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6439A158">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11EF8D2E">naam van organisatie, afdeling, bedrijf</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="22358027">naamApplicatieschema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7982183A">gebruikt applicatieschema / informatiemodel</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0EE874E4">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="06D90036">in dit geval IMRO2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="34287172">codeReferentiesysteem</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0E95040D">alfanumerieke waarde die het gebruikte referentiesysteem van de dataset aangeeft</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="05C90DD7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0D249D8B">hier wordt een code ingevuld afkomstig van de EPSG (European Petrol Survey Group): RD is het verplichte referentiesysteem met de code: 28992</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6B6BE523">toepassingsschaal</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="25426774">de beoogde maximale schaal waarop het bestand waarheidsgetrouw gebruikt mag worden; dit moet een positief numeriek getal zijn</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7F878ACE">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0DE4ED7C">bijvoorbeeld: 500 voor een bestand dat maximaal op schaal 1 : 500 gebruikt mag worden</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B188A01">applicatieIdentificatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="57731FA7">aanduiding van applicatie en versienummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="76923AF5">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62ECBB6B">waarmee het bestand gecodeerd is</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="373C6C7A">versieXMLschema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="241A5638">versie van het XML schema definitiebestand (XSD)</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="216A6A47">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A7BE7A9">in het XSD vastgelegd als &lt;version="versiecode"&gt;</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="28C4800F">*  multipliciteit:</p><p id="157188E2">0: komt niet voor, 0..1: komt 0 of 1 keer voor, 0..n: komt zo vaak voor als gewenst,</p><p id="3F9CF9E1">1: komt 1 keer voor, 1..n: komt tenminste 1 keer voor.</p></td></tr></tbody></table>

**Toepassingsschaal**  
AMvB´s worden vastgelegd in besluitvlakken en besluitsubvlakken die geometrisch
zijn bepaald op basis van het Rijksdriehoekstelsel (RD-coördinaten). Daarvoor is
de schaal in principe niet van belang. Bij de digitale en analoge verbeelding is
de schaal waarop (gedeelten van) de AMvB zinvol kunnen worden weergegeven wel
van belang. Daarom wordt in de metadata van de dataset de maximale schaal
meegegeven waarop het plan zinvol ver­beeld mag worden.
