# Het informatiemodel toegelicht

**In dit hoofdstuk wordt ingegaan op de wijze waarop in IMRO2012 modelmatig de
objecten en attributen van een amvb zijn opgenomen. Daarnaast worden belangrijke
uitgangspunten van digitale uitwisseling en IMRO2012 toegelicht.**

## De objectbenadering van een amvb

Conform IMRO2012 is een object altijd een ruimtelijke object dat een ruimtelijke
eenheid representeert waar tekst (besluittekst, toelichting, voorschriften of
regelen, etc.) betrekking op heeft.

In een amvb kunnen deze ruimtelijke eenheden geometrisch worden vastgelegd of
worden aangeduid aan de hand van eenduidige en objectieve criteria in de
regeling op basis waarvan de gebieden kunnen worden bepaald. In een amvb is een
object pas een object als het geometrisch is vastgelegd.

Een amvb bestaat uit drie typen objecten (klassen):

-   Besluitgebied; 
-   Besluitvlak; 
-   Besluitsubvlak.  

In Figuur 1 is het complete schema weergegeven met alle onderscheiden objecten.

![](media/99198463f25b2203e13d8c4c5a61f87b.jpg)

**Figuur 1 Objectenstructuur**

**Besluitgebied**  
Het Besluitgebied is het werkingsgebied van de amvb. De klasse Besluitgebied
representeert het hele besluit. Onder andere is het werkingsgebied als geometrie
opgenomen en is er een verwijzing naar de gehele tekst van het besluit. Een amvb
volgens IMRO2012 bevat dus altijd precies één Besluitgebied.

Sommige amvb’s refereren niet expliciet aan een geografisch toepassingsgebied,
maar kennen een meer thematisch toepassingsgebied (zoals bijvoorbeeld in het
Besluit externe veiligheid Inrichtingen). In zo’n geval is heel Nederland het
werkingsgebied, en wordt de kaart van Nederland als geometrie opgenomen. Het
verdient aanbeveling om hierbij tot standaardisatie te komen. Zo’n
standaardisatie maakt geen onderdeel uit van deze praktijkrichtlijn.

Verder dient bij het coderen van een amvb gebruik te worden gemaakt van de
objectklassen Besluitvlak en Besluitsubvlak, waarbij Besluitvlakken en
Besluitsubvlakken elkaar mogen overlappen:

**Besluitvlak**  
Een besluitvlak is een gebied, geometrisch vastgelegd in de amvb, dat
zelfstandige eigenschappen heeft (bijvoorbeeld een daaraan gekoppeld
voorschrift). Daarnaast voldoet het gebied niet aan de definitie van een
Besluitsubvlak.
Een amvb bestaat altijd uit tenminste één Besluitvlak.

**Besluitsubvlak**  
Een besluitsubvlak is een gebied, geometrisch vastgelegd in de amvb, met een
inhoudelijke relatie met een of meer in de amvb geometrisch vastgelegde gebieden
(Besluitvlakken of Besluitsubvlakken). Besluitsubvlakken komen zo vaak voor als
gewenst.

## Structuur

Een amvb bestaat altijd uit precies één object van de klasse Besluitgebied en
één of meer objecten van de klasse Besluitvlak die elkaar (deels) kunnen
overlappen. Daarnaast kan een amvb één of meerdere objecten van de klasse
Besluitsubvlak bevatten. Zo’n Besluitsubvlak heeft altijd een inhoudelijke
relatie met één of meerdere onderliggende Besluitvlakken of met één of meerdere
andere onderliggende Besluitsubvlakken. In Figuur 1 is dit schematisch
weergegeven.

Er zijn daarmee twee geldige manieren om een amvb volgens IMRO2012 beschikbaar
te stellen:  
-   Minimaal variant;  
-   Gestructureerde variant.

In de minimaal variant bestaat de gecodeerde amvb uit één object van de klasse
Besluitgebied en één object van de klasse Besluitvlak. In de gestructureerde
variant worden er nog objecten aan de minimaal variant toegevoegd. Deze objecten
zijn van de klasse Besluitvlak en/ of van de klasse Besluitsubvlak.

Het streven is om zoveel mogelijk het gebruik van de minimaal variant te
vermijden. Indien het mogelijk is om een structuur met toegevoegde waarde voor
de afnemer op te bouwen door het gebruik van meerder objecten, dan dient dit ook
te gebeuren.

## Digitale verbeelding van het besluit

De amvb wordt opgebouwd uit planobjecten. Deze planobjecten dienen zo gekozen te
worden dat een ontvanger een heldere representatie van het plan krijgt met een
duidelijke structuur die het plan onderverdeeld in consistente onderdelen.

Afbeeldingen van kaarten kunnen in het besluit worden opgenomen, maar kennen de
status van illustratie. De geometrie die in het besluit wordt opgenomen in de
vorm van GML-geometrie elementen is leidend of bindend voor de locatie van de
objecten.

De bronhouder dient een digitale verbeelding van het besluit ter beschikking te
stellen. Met behulp van een symboolcodelijst te vinden onder [IMRO2012](https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening/informatiemodel-ruimtelijke-ordening-imro2012) die bij de [RO Standaarden 2012](https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening)
beschikbaar is, kan de bronhouder aangeven hoe de amvb worden weergegeven in een
interactieve raadpleegomgeving.

![](media/3996da701001c9222ae1e68603b121c6.png)

De symboolcodelijst beschrijft de vormgeving van de symbolen, kleuren en
patronen. Bij het opstellen van een amvb kan de bronhouder aan een object een
symboolcode toekennen. Deze wordt met de rest van de informatie in de dataset
van de amvb opgeslagen. De ontvanger van de dataset leest de gegevens, waaronder
de symboolcodes, uit en kan daardoor de amvb weergeven zoals de bronhouder dit
bedoeld heeft. In Figuur 2 is een detail van de symboolcodelijst voor vormvrije
plannen opgenomen die onderdeel is van de RO Standaarden 2012.

**Figuur 2 Detail van de symboolcodelijst voor vormvrije plannen**

In [Hoofdstuk 3](#H03) wordt per object uitgelegd hoe een symboolcode aan een object
wordt toegevoegd. [Hoofdstuk 5](#H05) gaat dieper in op het gebruik van de
symboolcodelijst voor vormvrije plannen.

## Geometrie en/of tekst als ingang voor beleid

De voorliggende praktijkrichtlijn is gericht op de geometrie en opbouw van de
amvb. De geometrie (locatie) vormt hierbij de ingang voor het raadplegen van het
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

In de voorgaande paragrafen is het IMRO met betrekking tot de amvb toegelicht.
Wanneer de amvb digitaal wordt vastgelegd bestaat deze uit een set van
verschillende bestanden: de dataset. STRI2012 geeft regels met betrekking tot
deze bestanden.

In het GML bestand is ook bepaalde informatie over de amvb opgenomen. Ook in het
geleideformulier en manifest is bepaalde informatie over de amvb opgenomen.
Gegevens over gegevens wordt metadata genoemd. In IMRO2012 zijn bij de klasse
*MetadataIMRObestand* regels opgenomen over de in het GML bestand op te
nemen metadata. In Tabel 1 wordt klasse *MetadataIMRObestand* toegelicht.

![](media/3fa0c726a6294a11599bb5b0b06663fc.png)

**toepassingsschaal**  
Amvb´s worden vastgelegd in besluitvlakken en besluitsubvlakken die geometrisch
zijn bepaald op basis van het Rijksdriehoekstelsel (RD-coördinaten). Daarvoor is
de schaal in principe niet van belang. Bij de digitale en analoge verbeelding is
de schaal waarop (gedeelten van) de amvb zinvol kunnen worden weergegeven wel
van belang. Daarom wordt in de metadata van de dataset de maximale schaal
meegegeven waarop het plan zinvol ver­beeld mag worden.
