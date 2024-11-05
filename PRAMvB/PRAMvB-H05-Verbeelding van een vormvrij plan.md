# Verbeelding van een vormvrij plan

**Met het gebruik van de symboolcodelijst voor vormvrije plannen is het mogelijk
verbeeldingsaspecten aan de objecten in de AMvB of Ministeriële Regeling toe te
kennen. In dit hoofdstuk wordt nader ingegaan op de werkwijze.**

## Toelichting

Voor bestemmingsplannen geldt er een standaard voor verbeelding bij de officiële
publicatie door de bronhouder: de Standaard Vergelijkbare Bestemmingsplannen
(SVBP2012). Ontvangende partijen hanteren in de regel ook deze standaard. Er is
echter geen standaard vastgesteld voor verbeelden van AMvB of andere vormvrije
plannen. In een AMvB kan daarom sinds IMRO2012 informatie over de kleur, patroon
en de opbouw van de verbeelding (kaart) worden opgenomen. De ontvanger van de
digitale AMvB kan daardoor uit het IMRO-gecodeerde ruimtelijke plan opmaken in
welke kleuren en/of patronen of in hoeveel kaarten de AMvB moet worden
weergeven.

Het attribuut dat hiervoor door de bronhouder moeten worden gebruikt is
*cartografieInfo*. Dit is een samengesteld attribuut bestaande uit de attributen
*kaartnummer, kaartnaam* en *symboolcode*. In de volgende paragrafen volgt de
werkwijze voor het gebruik van de symboolcodelijst. De symboolcodelijst is beschikbaar via de 
<a href='https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening' target='_blank'>Geonovum website, dossier RO Standaarden</a>.

## CartografieInfo

Per object wordt de symboliek gecodeerd en gerelateerd aan het kaartbeeld waarin
het object moet voorkomen. Ieder object dat binnen een verbeelding moet worden
gesymboliseerd moet een *kaartnummer*, *kaartnaam* en *symboolcode* krijgen, de
onderdelen van et attribuut *cartografieInfo*. De structuur van de kaartopbouw
staat hiermee los van de planstructuur. Dit biedt volledige vrijheid van
kaartsamenstelling, maar kan ook inconsequente verbeeldingen opleveren. De
verantwoordelijkheid hiervoor ligt bij de bronhouder die dit ruimtelijke plan
maakt (of laat maken). Een foutieve symboolcode resulteert in een niet
gedefinieerde weergave in de interactieve raadpleegomgeving: het object in een
grijstint.

De symboolcode bepaalt alleen het uiterlijk van het symbool (kleur, arcering, vorm, etc.) en zegt niets over de betekenis. Dit is een zogenaamde
enkelvoudige code, dat wil zeggen: geen aparte aanduiding voor vlakkleur,
vulling en lijnstructuur en lijnkleur, maar 1 code voor de complete symboliek.
Degene die het ruimtelijk plan codeert bepaalt zelf welk symbool voor een
bepaald beleid gebruikt wordt.

De verbeelding kent door het gebruik van symboolcodes (refereren naar kaarten)
een structuurweergave die gebruikt kan worden in de interactieve
raadpleegomgeving waardoor de verschillende kaarten binnen de het ruimtelijke
plan interactief worden.

De symboolcodelijst beschikbaar als implementatiebestand van <a href='https://docs.geostandaarden.nl/ro/imro' target='_blank'>IMRO2012</a>. Het bestand is te downloaden via de <a href='https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening' target='_blank'>Geonovum website, dossier RO Standaarden</a>.

## Gebruik van symboolcode

Ieder planobject in het ruimtelijk plan heeft ten behoeve van de juiste
verbeelding op de kaart een symboolcode nodig. Met behulp van het attribuut
*symboolcode* wordt een waarde uit de symboolcodelijst gebruikt.</br>

In het geval *kaartnummer* en *kaartnaam* ontbreken bij een planobject in een
plan waar andere planobjecten wel van *kaartnummer* en *kaartnaam* zijn
voorzien, dan wordt het planobject zonder *kaartnummer* en *kaartnaam* in het
geheel niet weergegeven in de interactieve raadpleegomgeving.</br>

In het geval *symboolcode* niet is opgegeven, dient het planobject wel
weergegeven te worden in de structuurweergave, maar niet in de kaart. De
*symboolcode* is daarom optioneel.</br>

Bij het gebruik van een planobject met geometrieën van verschillende typen
(punt, lijn, vlak) moet voor ieder geometrietype een bijpassend symbool worden
opgenomen. In het geval van drie geometrietypen, komt het samengestelde
attribuut *cartografieInfo* driemaal voor.</br>

De beginletter van de symboolcode specificeert het type geometrie waar het
symbool betrekking heeft. Dit bepaalt tevens welke volgorde het object getekend
moet worden. Om objecten in de juiste volgorde te kunnen tekenen is de prefix
van de symboolcode bepalend. Op de volgende wijze dient het type symbool
gepositioneerd te worden in de verbeelding van het plan, volgorde van onder naar
boven:

- Dicht vlaksymbool: 	S\<nr\>
- Semi-transparant vlaksymbool met 50% / zonder vulling: ES\<nr\>
- Gearceerd vlaksymbool: AS\<nr\>
- Lijnsymbool: L\<nr\>
- Puntsymbool: P\<nr\>
</br>

De gebruikte objectenstructuur in het ruimtelijk plan dient de volgorde tussen
de elementen binnen een symboolprefix te bepalen: kindelementen liggen boven de
moederelementen. Binnen een kaartnummer/kaartnaam worden objecten in een
structuur geplaatst conform de relatie van de objecten binnen een plan.
Elementen op hetzelfde niveau worden gesorteerd op alfabet.

Planobjecten zonder geometrie maar met symboolcode worden wel in de weergegeven
structuur getoond.
</br>

Wanneer symboolcodes worden toegevoegd aan een bovenliggend complex dienen de
geometrieën van de onderliggende objecten binnen dit complex te worden verbeeld
conform deze symboliek. Hierdoor kan bijvoorbeeld een contourkleur aan alle
onderliggende objecten (gebieden of complexen) onder een complex worden gegeven.
</br>

Bij selectie van een onderliggend object moet deze niet verbeeld worden met de
symboolcode van het bovenliggende complex. Er vindt dus geen overerving van
symboolcode plaats. In Figuur **3** een voorbeeld van de weergave in niveaus.
</br>

![](media/27b978278da93c40c5103f33869e9c1f.png)
**Figuur 3 Weergave van een structuur met onderliggende objecten**
</br>

Deze volgorde heeft als resultaat dat de verbeelding verandert bij selectie van
bovenliggend (Figuur **4**) en onderliggend object (Figuur 5).
</br>

![](media/bc68b6d41ba587289322f39a912eab68.png)
**Figuur 4 Weergave in de verbeelding bij selectie van bovenliggend object**
</br>

![](media/48cf48a478df77dcfc7813a1b5b0b3a8.png)
**Figuur 5 Weergave in de verbeelding bij selectie van een onderliggend object**
</br>

Planobjecten die niet zichtbaar, maar wel opvraagbaar moeten zijn in het
kaartbeeld (verborgen objecten) worden gecodeerd met een symboolcode met een
100% transparante vulling. Als er geen symboolcode aan toe wordt gevoegd komt
het object niet in de kaart (opvraagbaar) voor, maar alleen in de weergave van
de structuur. In het Tabel 6 is aangeduid hoe de objecten moeten worden
verbeeld.

Planobjecten zonder geometrie worden wel in de structuurboom getoond via welke
de detailinformatie is op te vragen. Wanneer er symboolcodes aan worden
toegevoegd gelden deze voor de onderliggende objecten. Hierdoor kan bijvoorbeeld
een contourkleur aan alle elementen van 1 complex worden gegeven.

<table id="d4e3813" style="width: 100%;"><caption>Relatie objecten en verbeelding</caption><colgroup><col id="col1" style="width: 23.406961952122124%;"></col><col id="col2" style="width: 28.402914305539497%;"></col><col id="col3" style="width: 23.383832543078526%;"></col><col id="col4" style="width: 24.80629119925986%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="472D8293">Geometrie aanwezig</p></th><th align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="37F71B18">Symboolcode aanwezig</p></th><th align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="1DD72B75">Weergave in kaart</p></th><th align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="62AAE2C5">In structuurweergave</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="0685CF95">Ja</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="56792F97">Ja</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="022390FF">Ja</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="297E31A6">Ja</p></td></tr><tr><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="5A65F000">Ja</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="13B5178E">Nee</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="2555571D">Nee</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="55FBB3AC">Ja</p></td></tr><tr><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="1970CCC1">Nee</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="176BC8EE">Ja</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="1D080A82">Ja</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="5887F1F8">Ja</p></td></tr><tr><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="19F7F5A9">Nee</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="58980938">Nee</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="5BA6855B">Nee</p></td><td align="left" style="border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;"><p id="1E56CFFF">Ja</p></td></tr></tbody></table>

De plangrens van het ruimtelijke plan krijgt geen symboolcode, de plangrens
wordt standaard afgebeeld conform de plangrens in de SVBP2012.

Cartografische symbolen als grote pijlen moeten volgens de praktijkrichtlijn als
geometrisch object worden ingetekend en gecodeerd met behulp van de waarde
“cartografisch figuur” bij het attribuut *idealisatie*. Er komen in de
symboolcodelijst daarom geen figuratieve symbolen voor, maar alleen met
abstracte symbolen.

## Kaartnummer en kaartnaam

*Kaartnummer* en *kaartnaam* zijn vrij te kiezen. De kaarten dienen in oplopende
volgorde van *kaartnummer* te worden getoond in de structuurweergave. De kaart
met nummer 1 wordt als hoofdkaart gezien en moet altijd voorkomen. Het
kaartnummer moet een uniek nummer zijn gekoppeld aan een kaartnaam. Het
kaartnummer maakt geen deel uit van de verbeelding, maar alleen dient ten
behoeve van de presentatiestructuur en dient niet te worden getoond.
</br>

Een object kan in meerdere kaarten voorkomen met verschillende symboliek. Om
hetzelfde planobject op verschillende kaarten met een ander symbool weer te
geven moeten meerdere symboolcodes toegekend worden, voor iedere kaart een
betreffende *cartografieInfo*. De naam van het object kan niet verschillen per
kaart; dan zou er feitelijk ook sprake zijn van een ander object. Wanneer dit
wel gewenst is, zal het object meerdere keren moeten worden gecodeerd.  
