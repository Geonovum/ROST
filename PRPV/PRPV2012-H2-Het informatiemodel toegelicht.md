Het informatiemodel toegelicht
==============================

**In de een provinciale verordening zijn naast het werkingsgebied van de
verordening, alle eenheden die in de verordening geometrisch vastgelegd, met een
verwijzing naar de bijbehorende regeling. Objecten die niet geometrisch zijn
vastgelegd in de verordening, worden niet gecodeerd. In dit hoofdstuk zijn de
objecten toegelicht.**

De objectbenadering van een provinciale verordening
---------------------------------------------------

In de IMRO-systematiek wordt voor objecten met gelijke eigenschappen de term
“klasse” gebruikt. Voor een Provinciale Verordening worden de volgende klassen
onderscheiden:

-   Besluitgebied;

-   Besluitvlak;

-   Besluitsubvlak.

In Figuur 1 is dit schematisch weergegeven:

![](media/49ff6829521f34dc5f87f1a9cf346c4e.png)

**Figuur 1 Objectstructuur**

Een Provinciale Verordening bestaat altijd uit:

-   één besluitgebied;

-   één of meer besluitvlakken die elkaar (deels) kunnen overlappen.

Daarnaast kan een Verordening één of meerdere besluitsubvlakken bevatten. Zo’n
besluitsubvlak heeft altijd een inhoudelijke relatie met één of meerdere
onderliggende besluitvlakken of met één of meerdere andere onderliggende
besluitsubvlakken.

**Besluitgebied**  
Het Besluitgebied is het werkingsgebied van de Provinciale Verordening. Veelal
zal dit de gehele provincie zijn, maar dat hoeft niet. Wanneer het besluitgebied
de vorm heeft van meerdere niet aan elkaar grenzende vlakken, dan wordt dit ook
beschouwd als één besluitgebied. Het object komt altijd één keer voor.

**Besluitvlak**  
Het object Besluitvlak is een gebied, geometrisch vastgelegd binnen een object
Besluitgebied, dat zelfstandige eigenschappen heeft (bijvoorbeeld een daaraan
gekoppeld voorschrift). In het geval de verordening uitsluitend inhoudelijke
bepalingen kent die betrekking hebben op het hele werkingsgebied van de
verordening wordt het werkingsgebied altijd tevens aangeduid als object
Besluitvlak. Er is dus altijd tenminste één besluitvlak die in dat geval
dezelfde geometrie kent als het object Besluitgebied. Meerdere objecten
Besluitvlak dekken tezamen het gehele object Besluitgebied af en kunnen elkaar
overlappen. Het object komt altijd tenminste één keer voor (1..n).

**Besluitsubvlak**  
Het object Besluitsubvlak is een gebied, geometrisch vastgelegd binnen een
object Besluitgebied, met een inhoudelijke relatie met een of meer bovenliggende
geometrisch vastgelegde objecten Besluitvlak of andere objecten Besluitsubvlak
en heeft geen directe inhoudelijke relatie met het hele werkingsgebied van de
verordening (het object Besluitgebied). Een object Besluitsubvlak kan een object
Besluitvlak of een ander object Besluitsubvlak willekeurig overlappen. Het
object komt zo vaak voor als gewenst (0..n).

Structuur
---------

Wanneer een Provinciale Verordening deel uitmaakt van een geïntegreerde
verordening dan dient deze als volgt te worden opgebouwd:

-   als Besluitgebied geldt het werkingsgebied van de geïntegreerde verordening;

-   het is verder verplicht om Besluit(Sub)vlakken te gebruiken voor het coderen
    van die delen uit het besluit die voortkomen uit de Wro.

-   het is niet toegestaan om Besluit(Sub)vlakken te gebruiken voor het coderen
    van die gebiedsgerichte delen uit het besluit die niet voortkomen uit de
    Wro.

Het planologisch besluit Provinciale Verordening vertoont gelijkenissen met de
Algemene maatregel van bestuur (AMvB) op Rijksniveau en met een aantal
gebiedsgerichte besluiten (o.a. de beheersverordening) op gemeentelijk niveau
(zie Figuur 2). Ook voor deze planologische besluiten zijn Praktijkrichtlijnen
opgesteld. Bij het opstellen van deze Praktijkrichtlijn Provinciale Verordening
is geprobeerd waar mogelijk aan te sluiten bij de Praktijkrichtlijnen voor
AMvB’s ([PRAMvB2012](https://docs.geostandaarden.nl/ro/amvb2012/)) en voor gebiedsgerichte besluiten ([PRGB2012](https://docs.geostandaarden.nl/ro/gb2012/)).

![](media/ddfedb79a97a91612a53100c8d345966.jpg)

**Figuur 2 Verticale afstemming**

Vaak zal een Provinciale Verordening gebaseerd zijn op beleid dat is verwoord in
een Provinciale Structuurvisie. Ook voor dit planologisch besluit is een
praktijkrichtlijn opgesteld. Bij het opstellen van deze Praktijkrichtlijn
Provinciale Verordening is geprobeerd waar mogelijk aan te sluiten bij de
Praktijkrichtlijn Structuurvisies 2012 ([PRSV2012](https://docs.geostandaarden.nl/ro/sv2012/)).

![](media/42ea13b272bd2375308ff05ac57ae70d.jpg)

**Figuur 3 Horizontale afstemming**

Digitale verbeelding van het besluit
------------------------------------

De provinciale verordening wordt opgebouwd uit planobjecten. Deze planobjecten
dienen zo gekozen te worden dat een ontvanger een heldere representatie van het
plan krijgt met een duidelijke structuur die het plan onderverdeelt in
consistente onderdelen.

Afbeeldingen van kaarten kunnen in het besluit worden opgenomen, maar kennen de
status van illustratie. De geometrie die in het besluit wordt opgenomen in de
vorm van GML-geometrie elementen is leidend of bindend voor de locatie van de
objecten.

De bronhouder dient een digitale verbeelding van het besluit ter beschikking te
stellen. Met behulp van een symboolcodelijst die bij de RO Standaarden 2012
beschikbaar is[^1], kan de bronhouder aangeven hoe de provinciale verordening
kan worden weergegeven in een interactieve raadpleegomgeving.

[^1]: Zie Geonovum website onder het kopje:
['Implementatiebestanden’](https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening/informatiemodel-ruimtelijke-ordening-imro2012)

De symboolcodelijst beschrijft de vormgeving van de symbolen, kleuren en
patronen. Bij het opstellen van een provinciale verordening kan de bronhouder
aan een object een symboolcode toekennen. Deze wordt met de rest van de
informatie in de dataset van de provinciale verordening opgeslagen. De ontvanger
van de dataset leest de gegevens, waaronder de symboolcodes, uit en kan daardoor
de verordening weergeven zoals de bronhouder dit bedoeld heeft. In Figuur 4 is
een detail van de symboolcodelijst voor vormvrije plannen opgenomen die
onderdeel is van de RO Standaarden 2012.

![](media/3996da701001c9222ae1e68603b121c6.png)

**Figuur 4 Detail van de symboolcodelijst voor vormvrije plannen**

In [Hoofdstuk 3](#H03) wordt per object uitgelegd hoe een symboolcode aan een object
wordt toegevoegd. 0 gaat dieper in op het gebruik van de symboolcodelijst voor
vormvrije plannen.

Geometrie en/of tekst als ingang voor beleid
--------------------------------------------

De voorliggende praktijkrichtlijn is gericht op de geometrie en opbouw van de
provinciale verordeningen. De geometrie (locatie) vormt hierbij de ingang voor
het raadplegen van het ruimtelijke plan.

Binnen de RO Standaarden 2012 is het gebruik van objectgerichte planteksten
(XML) facultatief. De bronhouder mag er ook voor kiezen de planteksten in de
vorm van HTML en/of PDF bestanden (ofwel niet-objectgericht) beschikbaar te
stellen. Bij het gebruik van objectgerichte planteksten wordt het in de toekomst
mogelijk om de tekst te laten fungeren als ingang voor het raadplegen van het
ruimtelijk plan binnen een interactieve raadpleegomgeving.

Voor toelichting op het gebruik van de standaard voor planteksten (IMROPT2012)
wordt verwezen naar de toelichting Praktijkrichtlijn voor Planteksten
([PRPT2012](https://docs.geostandaarden.nl/ro/pt2012/)).

Metadata
--------

In de voorgaande paragrafen is het IMRO met betrekking tot de provinciale
verordening toegelicht. Wanneer de verordening digitaal wordt vastgelegd bestaat
deze uit een set van verschillende bestanden: de dataset. STRI2012 geeft regels
met betrekking tot deze bestanden.

In het GML bestand is ook bepaalde informatie over de verordening opgenomen. Ook
in het geleideformulier en manifest is bepaalde informatie over de verordening
opgenomen. Gegevens over gegevens wordt metadata genoemd. In IMRO2012 zijn bij
de klasse *MetadataIMRObestand* regels opgenomen over de in het GML bestand
op te nemen metadata. In Tabel 1 wordt klasse *MetadataIMRObestand*
toegelicht.

**Tabel 1 KlasseMetadataIMRObestand 1\***

<table id="d4e41" style="width: 100%;"><caption>KlasseMetadataIMRObestand 1*</caption><colgroup><col id="col1" style="width: 28.57142857142857%;"></col><col id="col2" style="width: 38.775510204081634%;"></col><col id="col3" style="width: 4.081632653061225%;"></col><col id="col4" style="width: 28.57142857142857%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="694FBA07">Metadata attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="32A08D37">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="54563552">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A48696D">opmerking</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="25AFE54A">datasetTitel</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="67FC07B8">naam van de dataset of dataset serie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4AC114C1">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C461411">dit komt overeen met de naam van het plan/besluit</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0CAF389D">creatiedatum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="391B979B">datum waarop het bestand gemaakt is</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7293F477">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="31166D4C">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7465B59B">bronbeheerder</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7CF4FBCF">partij die verantwoordelijkheid heeft geaccepteerd en zorg draagt voor het beheer van de data</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5D6D21D1">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="17E807BC">naam van provincie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="368322EF">codeerVerantwoordelijke</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5FDFF2E7">diegene die verantwoordelijk is voor de IMRO-codering</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2D767E15">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="35CFB044">naam van organisatie, afdeling, bedrijf</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="720D2DB5">naamApplicatieschema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7E9F77FB">gebruikt applicatieschema / informatiemodel</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="46CAC282">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6B94C579">in dit geval IMRO2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="02BB34B9">codeReferentiesysteem</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62E25720">alfanumerieke waarde die het gebruikte referentiesysteem van de dataset aangeeft</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="20355021">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="384FC2E1">hier wordt een code ingevuld afkomstig van de EPSG (European Petrol Survey Group): RD is het verplichte referentiesysteem met de code: 28992</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3767ECBD">toepassingsschaal</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="28F1D339">de beoogde maximale schaal waarop het bestand waarheidsgetrouw gebruikt mag worden; dit moet een positief numeriek getal zijn</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6040ECE6">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="35CD206D">bijvoorbeeld: 500 voor een bestand dat maximaal op schaal 1 : 500 gebruikt mag worden</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="57EFB267">applicatieIdentificatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="219BFA14">aanduiding van applicatie en versienummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="77D590E0">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5723E9BE">waarmee het bestand gecodeerd is</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="63F20428">versieXMLschema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="56966997">versie van het XML schema definitiebestand (XSD)</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="635DB7BF">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1D5EF7D3">in het XSD vastgelegd als &lt;version="versiecode"&gt;</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="062AFB2B">*  multipliciteit:</p><p id="39F25A77">0:   komt niet voor     0..1:   komt 0 of 1 keer voor            0..n:   komt zo vaak voor als gewenst</p><p id="218569C3">1:   komt 1 keer voor        1..n:   komt tenminste 1 keer voor    </p></td></tr></tbody></table>

**toepassingsschaal**

Verordeningen worden vastgelegd in besluitvlakken en besluitsubvlakken die
geometrisch zijn bepaald op basis van het Rijksdriehoekstelsel (RD-coördinaten).
Daarvoor is de schaal in principe niet van belang. Bij de digitale en analoge
verbeelding is de schaal waarop (gedeelten van) de verordening zinvol kunnen
worden weergegeven wel van belang. Daarom wordt in de metadata van de dataset de
maximale schaal meegegeven waarop het plan zinvol verbeeld mag worden.
