# Inleiding

**De Praktijkrichtlijn Provinciale Verordening is een toelichting op het
Informatiemodel Ruimtelijke Ordening voor wat betreft provinciale verordeningen.
In dit hoofdstuk wordt de achtergrond van de praktijkrichtlijn aangegeven,
evenals de strekking van de standaard.**

## Aanleiding

In de <a href='http://wetten.overheid.nl/BWBR0020449' target='_blank'>Wet ruimtelijke ordening</a> (Wro) en het <a href='http://wetten.overheid.nl/BWBR0023798' target='_blank'>Besluit ruimtelijke ordening</a> (Bro) is vastgelegd dat planologische visies, plannen, besluiten, verordeningen en
algemene maatregelen van bestuur digitaal vervaardigd en op elektronische wijze
beschikbaar gesteld moeten worden. Om dit mogelijk te maken zijn de RO
standaarden ontwikkeld. Deze verplichte RO Standaarden, vastgelegd met de <a href='http://wetten.overheid.nl/BWBR0031829' target='_blank'>Regeling
standaarden ruimtelijke ordening</a>, zijn:

<ul><li><a href='https://docs.geostandaarden.nl/ro/imro' target='_blank'> Informatiemodel Ruimtelijke Ordening Planteksten (IMRO2012)</a> 
<li><a href='https://docs.geostandaarden.nl/ro/stri' target='_blank'>Standaard Toegankelijkheid Ruimtelijke Instrumenten (STRI2012)</a> 
<li><a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>Standaard Vergelijkbare Bestemmingsplannen (SVBP2012)</a>
<li><a href='https://docs.geostandaarden.nl/ro/imropt' target='_blank'> Informatiemodel Ruimtelijke Ordening Planteksten (IMROPT2012)</a> .</li>
</ul>
<br/>

IMRO2012 is normstellend voor de codering van ruimtelijke instrumenten. IMRO2012
is van belang voor applicatiebouwers en als referentie voor andere IMRO2012
gerelateerde documenten. IMRO2012 wordt beschreven zonder in te gaan op de
praktische toepassing van het model voor het coderen van digitale ruimtelijke
instrumenten. Alle voor dit toepassingsdoel benodigde informatie is opgenomen in
toelichtingen, de zogenoemde praktijkrichtlijnen:

<ul><li><a href='https://docs.geostandaarden.nl/ro/bp2012/' target='_blank'>Praktijkrichtlijn Bestemmingsplannen (PRBP2012)</a>;</li>
<ul><a href='https://docs.geostandaarden.nl/ro/abpk2012/' target='_blank'>Praktijkrichtlijn Analoge Bestemmingsplan Kaart (PRABPK2012)</a>;</li>
<li><a href='https://docs.geostandaarden.nl/ro/sv2012/' target='_blank'>Praktijkrichtlijn Structuurvisies (PRSV2012)</a>;</li>
<li><a href='https://docs.geostandaarden.nl/ro/gb2012/' target='_blank'>Praktijkrichtlijn Gebiedsgerichte Besluiten (PRGB2012)</a>;</li>
<li><a href='https://docs.geostandaarden.nl/ro/pv2012/' target='_blank'>Praktijkrichtlijn Provinciale Verordening (PRPV2012)</a>;</li>
<li><a href='https://docs.geostandaarden.nl/ro/amvb2012/' target='_blank'>Praktijkrichtlijn Algemene Maatregel van Bestuur (PRAMvB2012)</a>;</li>
</ul><br/>

De STRI2012 is ook in praktijkrichtlijn nader toegelicht:
<ul><a href='https://docs.geostandaarden.nl/ro/tri2012' target='_blank'>Praktijkrichtlijn Toegankelijkheid Ruimtelijke Instrumenten (PRTRI2012)</a>.
</ul><br/>

De standaard voor planteksten (IMROPT2012) is onder voorwaarde verplicht.
Toepassing van IMROPT2012 is verplicht wanneer de bronhouder ervoor kiest de
planteksten in objectgerichte vorm (XML) beschikbaar te stellen. Dit is nader toegelicht in de:  
<ul><a href='https://docs.geostandaarden.nl/ro/pt2012/' target='_blank'>Praktijkrichtlijn voor Planteksten (PRPT2012)</a>.</li>
</ul><br/>

Als uitgangspunt voor deze Praktijkrichtlijn Provinciale Verordening worden alle gegevens
beschouwd die in de vorm van een provinciale verordening worden vastgesteld. Op
basis van deze praktijkrichtlijn kan te allen tijde vanuit de gegevensset de
inhoud van de oorspronkelijke provinciale verordening worden geraadpleegd.
Daarmee wordt de volledige digitale representatie van een provinciale
verordening vastgelegd.

Context

Naast de voorliggende praktijkrichtlijn is sprake van andere praktijkrichtlijnen
en standaarden die in samenhang zijn ontwikkeld in de context van de Wro. De
praktijkrichtlijnen voor de gebiedsgerichte besluiten (PRGB2012) en de algemene
maatregel van bestuur (PRAMvB2012) zijn onderdelen van de RO Standaarden die
nauw aansluiten op deze praktijkrichtlijn. Alle drie zijn een toelichting op het
Informatie Model Ruimtelijke Ordening (IMRO2012).

Hieronder wordt een aantal relevante aspecten genoemd en daarvan de globale
context in relatie tot praktijkrichtlijnen, de voorliggende in het bijzonder,
genoemd.

**Wet ruimtelijke ordening (Wro)**  
In de Wro wordt aangegeven dat nadere regels kunnen worden gesteld omtrent de
vormgeving en inrichting van een provinciale verordening. In het Besluit
ruimtelijke ordening zijn die uitgewerkt.

**Besluit ruimtelijke ordening (Bro)**  
Het Bro legt vast dat een provinciale verordening in elk geval bevat een
geometrische plaatsbepaling van het gebied waarop de visie betrekking heeft.
Daarmee wordt het belang van de voorliggende praktijkrichtlijn, die de wijze van
elektronisch (digitaal) vastleggen bepaalt, evident.

**Regeling standaarden ruimtelijke ordening (Rsro)**  
Deze ministeriële regeling noemt de feitelijke standaarden die basis moeten zijn
voor het vormgeven, inrichten en beschikbaar stellen van ruimtelijke
instrumenten. Dit zijn de RO standaarden 2012.

**Informatiemodel Ruimtelijke Ordening (IMRO2012)**  
In de Rsro is bepaald dat bij de digitalisering van ruimtelijke instrumenten
gebruik moet worden gemaakt van IMRO2012. Dit informatiemodel is de standaard
voor de beschrijving en codering van ruimtelijke instrumenten. IMRO2012 is
gebaseerd op het Basis­model Geo-Informatie (NEN 3610: 2011). Dit Basismodel
kent een aantal objectklassen en at­tributen waarmee aan het aardoppervlak
gerelateerde ruimtelijke objecten kunnen worden ge­codeerd. IMRO2012 gebruikt
slechts één van deze objectklassen, namelijk PlanologischGe­bied.  
Met IMRO wordt de inhoud (representatie van de werkelijkheid) digitaal
vastgelegd. De gebruiker van het bestand bouwt zelf de door hem gewenste
verbeelding op. Deze verbeelding kan dus een andere presentatie zijn van
dezelfde gegevens. De bronhouder kan door middel van een symboolcodelijst die
bij de RO Standaarden 2012 beschikbaar is wel aangeven hoe de provinciale
verordening en andere vormvrije plannen digitaal kan worden weergegeven. Voor de
analoge verbeelding is geen standaard of richtlijn binnen de RO Standaarden
aanwezig.

**Standaard Toegankelijkheid Ruimtelijke Instrumenten (STRI2012)**  
Conform Wro en Bro wordt een provinciale verordening met de daarbij behorende
toelichting in digitale geautoriseerde bronbestanden vastgelegd en in die vorm
vastgesteld. De STRI2012 beschrijft hoe de beschikbaarstelling van ruimtelijke
instrumenten gerealiseerd dient te worden en gaat onder meer in op
naamconventies en het digitaal waarmerken van de elektronisch te publiceren
dataset. Bij de STRI2012 behoort de toelichting Praktijkrichtlijn
Toegankelijkheid Ruimtelijke Instrumenten (PRTRI2012).

**Standaard voor planteksten (IMROPT)**  
De standaard voor planteksten moet onder voorwaarde verplicht worden gebruikt.
Toepassing van IMROPT2012 is verplicht wanneer de bronhouder ervoor kiest de
planteksten in objectgerichte vorm (XML) beschikbaar te stellen. De bronhouder
mag er ook voor kiezen de planteksten in de vorm van HTML en PDF bestanden
beschikbaar te stellen. IMROPT is in dit geval dan niet van toepassing.
IMROPT2012 wordt toegelicht in de Praktijkrichtlijn voor Planteksten (PRPT2012).

**Gebruik van PDF-bestanden**  
Indien er PDF-bestanden worden gebruikt in een planset dan is het beter om PDF-
bestanden te gebruiken die geen flashcomponenten bevatten. Bestanden met
flashcomponenten kunnen om veiligheidsredenen niet meer in een webbrowser worden
geopend waardoor de PDF-bestanden bij raadpleging van Ruimtelijkeplannen.nl geen
inhoud bevatten.  
Controleer daarom vóór publicatie dat uw PDF-documenten geen Flashcomponenten
bevatten.

**Styled Layer Descriptor (SLD)**  
Een Styled Layer Descriptor beschrijft in een xml structuur de vormgeving van de
symbolen zoals die toegepast kan worden bij geografische data. Voor de
provinciale verordening en andere vormvrije plannen is een bij de RO Standaarden
2012 behorende symboolcodelijst (in SLD formaat) beschikbaar die aangeeft op
welke wijze een digitale verbeelding kan worden weergegeven.

**Praktijkrichtlijn**  
In een praktijkrichtlijn wordt de methode van digitalisering van ruimtelijke
instrumenten beschreven. De praktijkrichtlijn stoelt geheel op de in de Regeling
standaarden ruimtelijke ordening vastgelegde RO standaarden. De
praktijkrichtlijn is te beschouwen als een toelichting op en nadere uitwerking
van de RO standaarden. Voor de provinciale verordening is dit deze
Praktijkrichtlijn Provinciale Verordening (PRPV2012).

**de provinciale verordening: artikel 4.1 Wro**  
Betreft een door de provincie op te stellen instrument, zijnde een verordening
waarin re­gels worden gesteld omtrent de inhoud van bestemmingsplannen,
beheersverordeningen en van omgevingsvergunningen waarbij met toepassing van
artikel 2.12, eerste lid, onderdeel a, onder 3<sup>0</sup>, van de <a href='http://wetten.overheid.nl/BWBR0024779' target='_blank'>Wet algemene bepalingen omgevingsrecht</a>
 (Wabo) van het bestemmingsplan of de beheersverordening wordt afgeweken, al
dan niet voor een daarbij aangegeven gedeelte van het grondgebied van de
provincie.

Leeswijzer

De voorliggende praktijkrichtlijn gaat in [Hoofdstuk 2](#H02) in op aard en karakter van
de provinciale verordening in de context van het informatiemodel. [Hoofdstuk 3](#H03)
beschrijft alle objecten en de bijbehorende attributen. [Hoofdstuk 4](#H04) gaat in op
gedeeltelijke herzieningen en de versie geconsolideerd. [Hoofdstuk 5](#H05) gaat in op het gebruik
van de symboolcodelijst voor vormvrije plannen. In [Bijlage 1](#B1) en [Bijlage 2](#B2) is een
voorbeeld verordening in tekst en conform IMRO opgenomen.
