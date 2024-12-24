# Inleiding
**De Praktijkrichtlijn Bestemmingsplannen is een toelichting op het
Informatiemodel Ruimtelijke Ordening, voor wat betreft bestemmingsplannen, en de
Standaard Vergelijkbare Bestemmingsplannen. In dit hoofdstuk wordt de
achtergrond van de praktijkrichtlijn gegeven evenals de strekking van de
standaard.**

## Aanleiding
In <a href='http://wetten.overheid.nl/BWBR0020449' target='_blank'>Wet ruimtelijke ordening</a> (Wro) en het <a href='http://wetten.overheid.nl/BWBR0023798' target='_blank'>Besluit ruimtelijke ordening</a> (Bro)
is vastgelegd dat planologische visies, plannen, besluiten, verordeningen en
algemene maatregelen van bestuur en onderliggende ministeriële regelingen
digitaal vervaardigd en op elektronische wijze beschikbaar gesteld moeten
worden. Om dit mogelijk te maken zijn de RO Standaarden ontwikkeld. Deze verplichte RO Standaarden, vastgelegd met de <a href='http://wetten.overheid.nl/BWBR0031829' target='_blank'>Regeling
standaarden ruimtelijke ordening</a>, zijn:  

<ul><li><a href='https://docs.geostandaarden.nl/ro/imro' target='_blank'> Informatiemodel Ruimtelijke Ordening Planteksten (IMRO2012)</a></li> 
<li><a href='https://docs.geostandaarden.nl/ro/stri' target='_blank'>Standaard Toegankelijkheid Ruimtelijke Instrumenten (STRI2012)</a></li> 
<li><a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>Standaard Vergelijkbare Bestemmingsplannen (SVBP2012)</a></li>
<li><a href='https://docs.geostandaarden.nl/ro/imropt' target='_blank'> Informatiemodel Ruimtelijke Ordening Planteksten (IMROPT2012)</a></li>
</ul><br/>

IMRO2012 is normstellend voor de codering van ruimtelijke instrumenten. IMRO2012
is van belang voor applicatiebouwers en als referentie voor andere IMRO2012
gerelateerde documenten. IMRO2012 wordt beschreven zonder in te gaan op de
praktische toepassing van het model voor het coderen van digitale ruimtelijke
instrumenten. Alle voor dit toepassingsdoel benodigde informatie is opgenomen in
toelichtingen, deze praktijkrichtlijnen:  

<ul><li><a href='https://docs.geostandaarden.nl/ro/bp2012/' target='_blank'>Praktijkrichtlijn Bestemmingsplannen (PRBP2012)</a></li>
<li><a href='https://docs.geostandaarden.nl/ro/abpk2012/' target='_blank'>Praktijkrichtlijn Analoge Bestemmingsplan Kaart (PRABPK2012)</a></li>
<li><a href='https://docs.geostandaarden.nl/ro/sv2012/' target='_blank'>Praktijkrichtlijn Structuurvisies (PRSV2012)</a></li>
<li><a href='https://docs.geostandaarden.nl/ro/gb2012/' target='_blank'>Praktijkrichtlijn Gebiedsgerichte Besluiten (PRGB2012)</a></li>
<li><a href='https://docs.geostandaarden.nl/ro/pv2012/' target='_blank'>Praktijkrichtlijn Provinciale Verordening (PRPV2012)</a></li>
<li><a href='https://docs.geostandaarden.nl/ro/amvb2012/' target='_blank'>Praktijkrichtlijn Algemene Maatregel van Bestuur (PRAMvB2012)</a></li>
</ul><br/>

De STRI2012 is ook in praktijkrichtlijn nader toegelicht:<br/>
<a href='https://docs.geostandaarden.nl/ro/tri2012' target='_blank'>Praktijkrichtlijn Toegankelijkheid Ruimtelijke Instrumenten (PRTRI2012)</a>.
<br/><br/>

De standaard voor planteksten (IMROPT2012) is onder voorwaarde verplicht.
Toepassing van IMROPT2012 is verplicht wanneer de bronhouder ervoor kiest de
planteksten in objectgerichte vorm (XML) beschikbaar te stellen. Dit is nader toegelicht: 
<a href='https://docs.geostandaarden.nl/ro/pt2012/' target='_blank'>Praktijkrichtlijn voor Planteksten (PRPT2012)</a>.
<br/><br/>

Als uitgangspunt voor deze Praktijkrichtlijn Bestemmingsplannen worden alle gegevens
beschouwd die behoren tot het bestemmingsplan. Er is daardoor sprake van een,
binnen de juridische context, complete gegevensset. Daarmee wordt de volledige
digitale representatie van een bestemmingsplan beschreven. Deze
praktijkrichtlijn is naast toelichting op IMRO2012, ook een toelichting op de
SVBP2012.

## Context

Deze praktijkrichtlijn is een toelichting op het Informatie Model Ruimtelijke
Ordening (IMRO2012) en de Standaard Vergelijkbare Bestemmingsplannen (SVBP2012)
en is een uitwerking voor het bestemmingsplan, inpassingsplan (voor provincie en
Rijk) en Rijksbestemmingsplan. Dit omdat deze instrumenten in de Wro aan elkaar
gelijkgesteld zijn. Onder het hierna genoemde bestemmingsplan worden dan ook
deze instrumenten bedoeld.

In deze paragraaf wordt een aantal relevante aspecten genoemd die relatie hebben
met deze praktijkrichtlijn.
<br/><br/>

**Wet ruimtelijke ordening (Wro)**  
In de Wro wordt aangegeven dat nadere regels kunnen worden gesteld omtrent de
vormgeving en inrichting van bestemmingsplannen. In het Besluit ruimtelijke
ordening zijn die uitgewerkt.
<br/><br/>

**Besluit ruimtelijke ordening (Bro)**  
Het Bro legt vast dat een bestemmingsplan in elk geval bevat een geometrische
plaatsbepaling van het plangebied en van de daarin aangewezen bestemmingen.
Voorts wordt ingevolge het bepaalde in het Bro een bestemmingsplan met de
daarbij behorende toelichting elektronisch vastgesteld. Van het plan wordt
tevens een papieren versie gemaakt. Indien de inhoud van het elektronische
bestemmingsplan na vaststellingtot een andere uitleg aanleiding geeft dan de
papieren versie, is het eerstgenoemdeplan beslissend. Daarmee wordt het belang
van de voorliggende praktijkrichtlijn, die de wijze van elektronisch vastleggen
bepaalt, evident.
<br/><br/>

**Regeling standaarden ruimtelijke ordening (Rsro)**  
Deze ministeriële regeling noemt de feitelijke standaarden die basis moeten zijn
voor het vormgeven, inrichten en beschikbaar stellen van ruimtelijke
instrumenten. Dit zijn de RO standaarden 2012.
<br/><br/>

**Informatiemodel Ruimtelijke Ordening (IMRO2012)**  
In de Rsro is bepaald dat bij de digitalisering van ruimtelijke instrumenten
gebruik moet worden gemaakt van IMRO2012. Dit informatiemodel is de standaard
voor de beschrijving en codering van ruimtelijke instrumenten. IMRO2012 is
gebaseerd op het Basismodel Geo-Informatie (NEN 3610:2011). Dit Basismodel
kent een aantal objectklassen en attributen waarmee aan het aardoppervlak
gerelateerde ruimtelijke objecten kunnen worden gecodeerd. IMRO2012 gebruikt
slechts één van deze objectklassen, namelijk PlanologischGebied.
Met IMRO wordt de inhoud (representatie van de werkelijkheid) digitaal
vastgelegd. De gebruiker van het bestand bouwt zelf de door hem gewenste
verbeelding op. Deze verbeelding kan dus een andere presentatie zijn van
dezelfde gegevens. Afspraken over de digitale verbeelding van het
bestemmingsplan zijn vastgelegd in de Standaard Vergelijkbare Bestemmingsplannen
(SVBP2012).
<br/><br/>

**Standaard Toegankelijkheid Ruimtelijke Instrumenten (STRI2012)**  
Conform Wro en Bro wordt een bestemmingsplan met de daarbij behorende
toelichting in digitale geautoriseerde bronbestanden vastgelegd en in die vorm
vastgesteld. De STRI2012 beschrijft hoe de beschikbaarstelling van ruimtelijke
instrumenten gerealiseerd dient te worden en gaat onder meer in op
naamconventies en het digitaal waarmerken van de elektronisch te publiceren
dataset. Bij de STRI2012 behoort de toelichting Praktijkrichtlijn
Toegankelijkheid Ruimtelijke Instrumenten (PRTRI2012).
<br/><br/>

**Standaard Vergelijkbare Bestemmingsplannen (SVBP2012)**  
De SVBP2012 bevat de normen die van toepassing zijn op de vormgeving en
inrichting van bestemmingsplannen, inpassingsplannen en rijksbestemmingsplannen,
met het doel om deze op vergelijkbare wijze op te bouwen en weer te geven. De
SVBP2012 geeft daartoe normen voor de opbouw van de regels en voor de digitale
verbeelding van het bestemmingsplan.
De informatie die is vastgelegd in het plan moet in elektronische vorm volledig
toegankelijk en raadpleegbaar zijn. Dit wordt de digitale verbeelding genoemd.
In de digitale verbeelding wordt alle relevante bestemmingsplaninformatie in een
interactieve raadpleegomgeving getoond. Een raadpleger van het bestemmingsplan
moet alle relevante bestemmingsplaninformatie op eenvoudige wijze voor ogen
kunnen krijgen.
Voor de verbeelding van de analoge bestemmingsplankaart zijn in het IMRO ook
attributen opgenomen. Die worden in deze praktijkrichtlijn toegelicht. Voor meer
informatie over de verbeeldingsaspecten van de analoge bestemmingsplankaart
wordt verwezen naar de (facultatief te gebruiken) Praktijkrichtlijn Analoge
Bestemmingsplan Kaart (PRABPK2012).
<br/><br/>

**Standaard voor planteksten (IMROPT)**  
De standaard voor planteksten moet onder voorwaarde verplicht worden gebruikt.
Toepassing van IMROPT2012 is verplicht wanneer de bronhouder ervoor kiest de
planteksten in objectgerichte vorm (XML) beschikbaar te stellen. De bronhouder
mag er ook voor kiezen de planteksten in de vorm van HTML en PDF bestanden
beschikbaar te stellen. IMROPT is in dit geval dan niet van toepassing.
IMROPT2012 wordt toegelicht in de Praktijkrichtlijn voor Planteksten (PRPT2012).
<br/><br/>

**Gebruik van PDF-bestanden**  
Indien er PDF-bestanden worden gebruikt in een planset dan is het beter om PDF-
bestanden te gebruiken die geen flashcomponenten bevatten. Bestanden met
flashcomponenten kunnen om veiligheidsredenen niet meer in een webbrowser worden
geopend waardoor de PDF-bestanden bij raadpleging van Ruimtelijkeplannen.nl geen
inhoud bevatten.
Controleer daarom vóór publicatie dat uw PDF-documenten geen Flashcomponenten
bevatten.
<br/><br/>

**Praktijkrichtlijn**  
In een praktijkrichtlijn wordt de methode van digitalisering van ruimtelijke
instrumenten beschreven. De praktijkrichtlijn stoelt geheel op de in de Rsro
vastgelegde RO standaarden. De praktijkrichtlijn is te beschouwen als een
toelichting op en nadere uitwerking van de RO standaarden. Voor
bestemmingsplannen, inpassingsplannen en het Rijksbestemmingsplan is dit de
voorliggende Praktijkrichtlijn Bestemmingsplannen (PRBP2012).
<br/><br/>

**Het bestemmingsplan en het inpassingsplan: artikel 3.1, 3.26 en 3.28 Wro**  
Het bestemmingsplan betreft het gelijknamige bestaande plantype op gemeentelijk
niveau. Het inpassingsplan is door de Wro daaraan geheel gelijkgesteld, maar
wordt onder die naam door provincie of Rijk opgesteld. Bestemmingsplan en
inpassingsplan kennen beiden de mogelijkheid van uitwerkings- en
wijzigingsplannen.
<br/><br/>

**Het rijksbestemmingsplan: artikel 10.3 Wro**  
Dit betreft een (rijks)bestemmingsplan voor gronden die geen deel uitmaken van
een gemeente of een provincie (bijvoorbeeld de territoriale wateren).
<br/><br/>

**Omgevingsvergunning om af te wijken van het bestemmingsplan**  
Naast de Wro kent ook de Wet algemene bepalingen omgevingsrecht (Wabo) een
verplichte elektronische beschikbaarstelling: artikel 2.12, eerste lid,
onderdeel a, onder 3 van de Wabo. De Praktijkrichtlijn Gebiedsgerichte Besluiten
(PRGB2012) licht deze verplichting toe.

## Leeswijzer
De voorliggende praktijkrichtlijn gaat in [Hoofdstuk 2](#H02) eerst in op de relatie met
IMRO2012 en beschrijft de globale opzet van de modelmatige grondslag. [Hoofdstuk
3](#H03) beschrijft alle objecten en de bijbehorende attributen. [Hoofdstuk 4](#H04) gaat in
op gedeeltelijke herzieningen, uitwerkingsplannen, wijzigingsplannen,
parapluplannen. [Hoofdstuk 5](#H05) gaat in op de relaties tussen ruimtelijke besluiten
en een geconsolideerd plan.

Waar in dit document wordt gesproken over een bestemmingsplan worden altijd het
inpassingsplan en het Rijksbestemmingsplan daaronder mede begrepen.

Deze praktijkrichtlijn en alle andere onderdelen van de RO Standaarden zijn vindbaar en raadpleegbaar via de <a href='https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening' target='_blank'>Geonovum website, dossier RO Standaarden</a>. 
