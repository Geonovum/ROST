# De planobjecten met attributen
**In dit hoofdstuk worden de klassen (objecttypen) met bijbehorende attributen
beschreven. Elk object binnen een klasse kent eigenschappen die als attribuut
daaraan worden toegekend. In IMRO2012 wordt in een zogenoemd UML-schema
weergegeven hoe de objecten (klassen) samenhangen en welke attributen mogelijk
zijn. Dit UML-schema is opgenomen in de bijlage.**

## Klasse Besluitgebied_P
Een verordening stelt regels die gemeenten moeten verwerken in
bestemmingsplannen, projectbesluiten en beheersverordeningen. In principe moet
dat binnen 1 jaar, tenzij in de verordening een andere termijn is gegeven.

Het gaat om regels voor de inhoud van bestemmingsplannen, maar ook van
omgevingsvergunningen waarbij met toepassing van artikel 2.12, eerste lid, onderdeel a, onder 3<sup>0</sup>, van de <a href='http://wetten.overheid.nl/BWBR0024779' target='_blank'>Wet algemene bepalingen omgevingsrecht</a>
 (Wabo) van het
bestemmingsplan of de beheersverordening wordt afgeweken en
beheersverordeningen. Om te voorkomen dat gronden minder geschikt worden voor de
beoogde bestemmingen, kan de provincie in de verordening ook regelen dat, zolang
een gemeente een en ander nog niet heeft vertaald in een bestemmingsplan, een
omgevingsvergunning voor bijvoorbeeld bouwen rechtstreeks aan de verordening
moeten worden getoetst. Dit moet dan expliciet in de verordening worden
aangegeven. In de voorbeeldverordening in Bijlage 1 van deze praktijkrichtlijn
is dit opgenomen in artikel 2, lid 3 en artikel 3, lid 2. In Bijlage 2 is nader
uitgelegd op welke wijze dit gecodeerd dient te worden.
Deze beschermende regels hebben dan dus een algemene bindende werking, óók naar
burgers.

Omdat een verordening binnen een bepaalde termijn in een bestemmingsplanregeling
moet worden vertaald, moet hetgeen in de verordening wordt opgenomen een zekere
mate van concreetheid hebben.

![](media/Figuur5Doorwerking.png)
**Figuur 5 Doorwerking**
<br/><br/>

In essentie bestaat de verordening uit een set regels (de eigenlijke
verordening) met eventueel daarbij behorende illustraties. De verordening gaat
vergezeld van een toelichting.

Binnen een verordening kunnen ook mogelijkheden worden opgenomen om af te wijken
van de algemene regels. Hiertoe kunnen ontheffingen in de verordening worden
opgenomen.

In een verordening kan worden bepaald dat een regel slechts geldt voor een
daarbij aangegeven gedeelte van het grondgebied van de provincie. Bepaalde
regels in de verordening kunnen dus gelden voor de hele provincie, andere voor
slechts een deelgebied binnen de provincie.

Bij de verordening kunnen in beginsel ook regels gesteld worden aan de
toelichting op een bestemmingsplan. Die mogelijkheid wordt gecreëerd door middel
van een expliciete bepaling in het Bro ter zake.

In Tabel 2 zijn de attributen behorend bij de klasse *Besluitgebied_P* benoemd,
de waarden aangegeven die deze attributen moeten bevatten en is aangegeven of
het gebruik van het attribuut verplicht is en of het attribuut meerdere malen
mag worden gebruikt. Ook is aangegeven of attributen in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven.

<table id="d4e355" style="width: 100%;"><caption>Klasse Besluitgebied_P 1*</caption><colgroup><col id="col1" style="width: 4.843661171119955%;"></col><col id="col2" style="width: 3.2404775440591247%;"></col><col id="col3" style="width: 0.1023308698123934%;"></col><col id="col4" style="width: 22.51279135872655%;"></col><col id="col5" style="width: 29.016486640136442%;"></col><col id="col6" style="width: 6.446844798180784%;"></col><col id="col7" style="width: 33.83740761796476%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="620D832C">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3B6E109E">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="08804AE1">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3CC5462C">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="67EDE655"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1ACD44CA"><i>NEN3610ID</i></p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4FD4AD9B"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2D15044D"><i>samengesteld attribuut.</i></p><p id="1A52D484"><i>Uit  de combinatie hiervan wordt de bestandsnaam van het plan opgebouwd conform STRI2012: </i><i>namespace.lokaalID-versie</i></p></td></tr><tr><td align="center" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="3"><p id="4A4A5BFF" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="31290B25">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0E9D6A94">waarde</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="480E64F7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="31FAC20A">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="6BF61C97">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5BB3D081">waarde</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C52C440">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="563DC81C">Unieke identificatiecode binnen een registratie. Bestaande uit een bronhouderscode van 4 cijfers gevolgd door een punt (.) en maximaal 18 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="425D7341">versie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="161B5A7C">waarde</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="326B00AB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4E056DBF">Versie-aanduiding van het plangebied bestaande uit 4 alfanumerieke tekens </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="17BBBC5B">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1835B964">provinciale verordening </p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6015EBFF">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="440B7818">één van de waarden volgens domein RuimtelijkPlanOfBesluit_PV</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="4BC3B717">beleidsmatigVerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2E53C04D">provinciale overheid</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E0526BB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="06ABCF32">één van de waarden volgens domein Overheden_P</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="58700AE6">naamOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5D5F0E11">naam van de overheid</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="22AB8D53">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2A597941">volgens format in de vorm: provincie ..</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="5D922684">overheidsCode</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4ADC8033">CBS-nummer van de beleidsmatig verantwoordelijke overheid </p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="082F1419">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1122C852">4 cijfers: CBS-nummer provincie, met voorafgaand 2 voorloopnegens </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="03FDC49A">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="396C04A4">naam van het besluit</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7FFAD6FD">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5516AD82">volgens de (aanhaal)titel</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="7A9924A7">normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="60201C24">naam van de normadressant</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4AE48C7C">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3CEE511B">geen, één of meer van de waarden volgens domein Normadressant_PV</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="202D0ADE">locatieNaam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B069AA5">naam van de locatie</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4767AE64">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F9A154E">iedere gewenste naam </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="7B80492D"><i>planstatusInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="03842DD3"><i>PlanstatusEnDatum</i></p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="00DEAF7A"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79FE9B28"><i>samengesteld attribuut</i></p></td></tr><tr><td align="center" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="2"><p id="27B5929F" style="writing-mode: vertical-rl; rotate: 180deg;"><i>PlanstatusEnDatum</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="42A9A6EE">planstatus</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="05477783">waarde van de planstatus</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="21C08EAE">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="59FA903E">één van de waarden volgens domein Planstatus</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2A0081C7">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09D819A9">datum van de planstatus</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="425D1101">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6E58918D">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="065929A2">besluitnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="259EEB65">nummer van het besluit</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5CB9365D">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="48678239">het besluitnummer zoals dat is toegekend; alleen toegestaan en verplicht bij de planstatus vastgesteld</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="628AE0AF">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="04DA79B6">link</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4C7BF051">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="49BF2BEA">naar tekst vaststellingsbesluit; in format bestandsnaamconventie vaststellingsbesluit conform STRI2012; alleen toegestaan en verplicht, ingeval dit een apart document is, bij de planstatus vastgesteld</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="65F49A47"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="73CF7A92"><i>TekstReferentieBG_PV</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="799E18A3"><i>1..6</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4124311B"><i>samengesteld attribuut</i></p><p id="247CB772"><i>1 verwijzing naar volledige besluitdocument (verplicht), 1 naar regels (verplicht), 1 naar volledige toelichting (verplicht) en max. 1 van elk typeTekst naar volledige bijlage(n)</i></p></td></tr><tr><td align="center" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="2"><p id="2515D837" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentieBG_PV</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="75F8C9D6">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6463FAB2">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6A95647D">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="003D09D9">in format bestandsnaamconventie besluitdocument, regels, toelichting of bijlage, conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="615D58A1">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B4F0EE3">besluitdocument, regels, toelichting, bijlage bij besluitdocument, bijlage bij regels of bijlage bij toelichting</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="02FAF701">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="70E2A159">één van de hier genoemde waarden volgens domein TeksttypeBG_PV</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="6EF64F6C">    <i>ondergrondInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7A51E5F5">    <i>OndergrondReferentie</i></p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="32EFCE6F"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="34CF377D"><i>samengesteld attribuut</i></p></td></tr><tr><td align="center" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="21AFD0C7" style="writing-mode: vertical-rl; rotate: 180deg;"><i>OndergrondReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="3A39C9A0">        ondergrondType</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="55F8D345">    naam van de ondergrond</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45CDD73B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5A77A103">één van de waarden volgens domein Ondergronden Ingeval geen gebruik is gemaakt van een ondergrond uit het domein Ondergronden wordt een eenduidige referentie naar de gebruikte ondergrond(en) gegeven</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="4392DCA1">    ondergrondDatum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7426DC82">datum van de gebruikte ondergrond</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11E66722">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4F0F3939">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="793A59D3"><i>verwijzingNaarIllustratieInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4E94F43B"><i>IllustratieReferentiePG</i></p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="436A4995"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5F95C446"><i>samengesteld attribuut:</i></p><p id="0F97A7E5"><i>alleen verwijzen naar illustratie(s) op het niveau "plangebied"</i></p></td></tr><tr><td align="center" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="442FD948" style="writing-mode: vertical-rl; rotate: 180deg;"><i>IllustratieReferentiePG</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="3B3723FD">verwijzingNaarIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4D6C6638">link </p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="529A4CDB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="04835796">in format bestandsnaamconventie illustratie conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="76F06A39">typeIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="19F76A3E">afbeelding of kaart</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="43B37FC7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5839C06D">één van de waarden volgens domein Illustratie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="7408537E"><i>verwijzingNaarExternPlanInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7E77F5F1"><i>ExternPlanReferentie_PV</i></p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B23116A"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6B5FFAE1"><i>samengesteld attribuut</i></p></td></tr><tr><td align="center" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="3"><p id="162D432C" style="writing-mode: vertical-rl; rotate: 180deg;"><i>ExternPlan-Referentie_PV</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1F297BB5">naamExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="157B8082">naam van extern plan/besluit</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DFDC615">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0E1AAA18">het externe plan/besluit in relatie waarmee het besluit is genomen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0C59882B">idnExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="61C98DEB">idn van extern plan/besluit</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0C566856">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="513AF751">het idn van het plan/besluit in relatie waarmee het besluit is genomen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="592FE59C">rolExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0C90220D">ten gevolge van extern plan/besluit, ter vervanging van extern plan/besluit of als mutatie opgenomen</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="107711A9">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="42ED3811">één van de waarden volgens domein RolExternPlan_PV</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="62D4024F">verwijzingNorm</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="028751D4">IMRO2012 en PRPV2012 optioneel IMROPT2012</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C5AD323">2..3</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6362A421">verwijzing naar gebruikte versie IMRO en naar gebruikte versie praktijkrichtlijn provinciale verordening: vaste waarden.</p><p id="5A3F8298">verplicht bij gebruik objectgerichte planteksten: IMROPT2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="7E223B97" class="space-after"><i>begrenzing:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="15A631FE"><i>GeometriePlangebied</i></p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="23D8A0DD"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="48A0029F"><i>samengesteld attribuut</i></p></td></tr><tr><td align="center" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="2"><p id="0C466762" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Geometrie-Plangebied</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0664C87C">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3FF40AF9">coördinaten</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1055BA77">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="43DF3010">beschrijving van vlak of multivlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="406316E8">idealisatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="34729FF1">exact</p></td><td align="center" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2C6EBC57">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2F3C1CA4">vaste waarde volgens domein Idealisatie_1</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="7"><p id="5C2124D3">*  multipliciteit:</p><p id="7E8E95EE">0..1:   komt 0 of 1 keer voor         0..n:   komt zo vaak voor als gewenst</p><p id="3F1ABF27">1/2:    komt 1 resp. 2 keer voor    1..n:   komt tenminste 1 keer voor</p></td></tr></tbody></table>

***identificatie*** (verplicht):  
Ieder ruimtelijk instrument kent een eigen identificatienummer (idn). Deze
identificatie maakt het mogelijk dat op landelijk niveau een uniek onderscheid
voor ieder instrument aanwezig is. Voor het geval het werkingsgebied bestaat uit
meerdere ruimtelijk gescheiden gebieden kent het totaal van die gebieden één
identificatienummer. De geometrie van het object *Besluitgebied_P* is hierbij
een multipolygoon.
Het samengestelde attribuut verwijst naar het object NEN3610ID bestaande uit de
attributen *namespace, lokaalID* en *versie*.
<br/>
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.
<br/>
- **lokaalID:** (verplicht)  
Unieke identificatiecode binnen de registratie van ruimtelijke plannen.
Bestaande uit een bronhouderscode van 4 cijfers (voor het Rijk 0000, voor
gemeente het CBS-nummer) gevolgd door een punt (.) en maximaal door de
bronhouder te bepalen 18 alfanumerieke tekens. Er geldt de volgende
reguliere expressie: [0-9]{4}\\.[A-Za-z0-9]{1,18}
<br/>
- **Versie:** (verplicht)  
Versie-aanduiding van het plangebied bestaande uit 4 alfanumerieke tekens
door de bronhouder te bepalen. Er geldt de volgende reguliere expressie:
[A-Za-z0-9]{4}
Uit de waarden van de attributen *namespace, lokaalID* en *versie* wordt de
bestandsnaam van het plan opgebouwd conform STRI2012:
namespace.lokaalID-versie. De samengestelde reguliere expressie is:
NL\\.IMRO\\.[0-9]{4}\\.[A-Za-z0-9]{1,18}-[A-Za-z0-9]{4}
<br/><br/>

**typePlan** (verplicht):  
Voor het attribuut *typePlan* wordt het domein *RuimtelijkPlanOfBesluit_PV*
gebruikt. Hier wordt de vaste waarde *provinciale verordening* ingevuld.
<br/><br/>

**beleidsmatigVerantwoordelijkeOverheid** (verplicht):  
Hier wordt de overheid die beleidsmatig verantwoordelijk is voor het opstellen
van het plan opgenomen uit het domein Overheden_P. In dit geval de vaste
waarden: provinciale overheid.
<br/><br/>

**naamOverheid** (verplicht):  
Hier wordt de naam van de beleidsmatig verantwoordelijke overheid opgenomen, in
de vorm van de tekst “provincie …….”.
<br/><br/>

**overheidscode** (verplicht):  
Teneinde kenbaar te maken van welke beleidsmatig verantwoordelijke overheid de
provinciale verordening is, wordt hier het CBS-nummer van die overheid
opgenomen. Hier worden, voorafgaand aan het CBS-nummer van de provincie, twee
voorloopnegens geplaatst, zodat de totale lengte 4 posities bedraagt.
<br/><br/>

**naam** (verplicht):  
In het waardeveld van het attribuut naam dient de naam van de provinciale
verordening te worden op­genomen. Het gaat daarbij om de volledige naam. Indien
er sprake is van een aanhaaltitel in het plan dan wordt deze gebruikt.
<br/><br/>

**normadressant** (zo vaak als gewenst):  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_PV* geeft de toegestane waarden aan waaruit
eventueel meerdere kunnen worden gekozen.
<br/><br/>

**locatieNaam** (zo vaak als gewenst):  
Indien gewenst kan de naam van de locatie waarop de verordening betrekking heeft
hier worden opgenomen.
<br/><br/>

***planstatusInfo*** (verplicht):  
Dit attribuut is noodzakelijk om de plangegevens te kunnen plaatsen naar tijd en
belang. Het samengesteld attribuut planstatusInfo verwijst naar het object
*PlanstatusEnDatum*, bestaande uit de attributen *planstatus* en *datum*.
- **planstatus** (verplicht)  
Het domein *Planstatus* geeft de toegestane waarden voor het attribuut
planstatus waaruit er één moet worden gekozen. De waarde van dit attribuut
geeft de planstatus weer.
<br/>
- **datum** (verplicht)  
Het attribuut datum is bedoeld om de proceduredatum van het plan op te
nemen. De in het waardeveld op te nemen datum dient overeenkomstig het
binnen het IMRO afgesproken datumformaat te worden genoteerd: jjjj-mm-dd.
<br/><br/>

**besluitnummer** (onder voorwaarde verplicht):  
Nummer van het vaststellingsbesluit van de verordening. Het besluitnummer is
alleen toegestaan en dan verplicht indien de planstatus vastgesteld is. Bij
een andere planstatus is dit attribuut niet toegestaan.
<br/><br/>

**verwijzingNaarVaststellingsbesluit** (onder voorwaarde verplicht):  
Hierin wordt een link opgenomen naar de tekst van het vaststellingsbesluit. In
het format conform de bestandsnaamconventie *vaststellingsbesluit* volgens de
STRI2012. De link is alleen verplicht indien de planstatus vastgesteld is. Bij
een andere planstatus is dit attribuut niet toegestaan. Aan het bestand kunnen
ook eventueel bij het vaststellingsbesluit behorende bijlagen worden toegevoegd.
<br/><br/>

***verwijzingNaarTekstInfo*** (onder voorwaarde verplicht):  
Dit attribuut verwijst naar het samengestelde attribuut *TekstReferentieBG_PV*,
bestaande uit de attributen *verwijzingNaarTekst* en *typeTekst*.  
Attribuut wordt met de volgende cardinaliteit opgenomen:
\- 1 verwijzing naar het volledige besluitdocument (de volledige provinciale
verordening), en/of  
\- 1 verwijzing naar volledige toelichting.  
\- 1 verwijzing naar eventuele volledige regels.  
\- 0..1 verwijzing naar elk typeTekst volledige bijlagen.
<br/><br/>

Het aantal verwijzingen naar teksten is beperkt. De raadpleger van de plannen
heeft daar baat bij, omdat hij dan niet direct geconfronteerd wordt met een
mogelijk lange lijst van verwijzingen. Daarom moet er maximaal één verwijzing
zijn naar het volledige besluitdocument, maximaal één verwijzing naar de
volledige toelichting en maximaal één naar de volledige regels. Daarnaast mag er
maximaal één verwijzing zijn naar alle eventuele bijlagen, gegroe­peerd naar
bijlage bij besluitdocument, toelichting en/of regels. Er mag worden verwezen
naar een inhoudsop­gave of index, waardoor indirect meer mogelijkheden aanwezig
zijn.  

De bronhouder kiest voor het al dan niet gebruik van objectgerichte planteksten.
In beide gevallen wordt dit attribuut *verwijzingNaarTekstInfo* gebruikt. De
keuze voor XML of HTML/PDF planteksten geldt niet alleen voor het plangebied, de
keuze geldt ook voor de andere objecten (besluitvlakken/ besluitsubvlakken)
binnen de provinciale verordening. Daarnaast wordt de keuze vastgelegd met
behulp van het attribuut *verwijzingNorm* bij BesluitGebied_P van deze
verordening. Het format dient overeen­komstig de afspraak over de
bestandsnaamconventies conform de STRI2012 te zijn.
</br>
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hyper)link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgenomen. Het format dient overeenkomstig de afspraak
over de bestandsnaamconventies voor het bestandstype *besluitdocument*, *toelichting*, *regels* of *bijlagen* conform de STRI2012 te zijn.
</br>
- **typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *TeksttypeBG_PV*:  
	-   besluitdocument;
	-   regels;
	-   toelichting;
	-   bijlage bij besluitdocument;
	-   bijlage bij regels;
	-   bijlage bij toelichting.
</br></br>

***ondergrondInfo*** (verplicht, zo vaak als gewenst):  
Dit attribuut verwijst naar het samengestelde attribuut *Ondergrondreferentie*,
bestaande uit de attributen *ondergrondType* en *ondergrondDatum.* Met dit
attribuut wordt, conform artikel 1.2.4 Bro, aangegeven welke ondergrond bij het
vaststellen van de provinciale verordening is gebruikt.
Er zijn meerdere waarden mogelijk.
</br>
- **ondergrondType** (verplicht)  
Het type van de gebruikte ondergrond volgens het domein Ondergronden. Op
grond van de Wet basisregistratie grootschalige topografie (BGT) is het per
1 juli 2017 voor bestuursorganen verplicht om gebruik te maken van de Basisregistratie Grootschalige Topografie (BGT). Een bestuursorgaan kan
daar indien nodig gemotiveerd van afwijken. Bij afwijking kan het bestuursorgaan gebruik maken van:  
	-   basisregistratie topografie (BRT)  
	-   basisregistratie kadaster (BRK)  
Indien geen gebruik is gemaakt van een ondergrond uit het domein
Ondergronden wordt de naam van het bestand van de gebruikte ondergrond(en)
als vrije tekst opgegeven. In de <a href='https://docs.geostandaarden.nl/ro/tri2012/#H07' target='_blank'>PRTRI2012, hoofdstuk 7</a> is toegelicht welke
bestandformaten voor de ondergrond kunnen worden gebruikt.
</br>
- **ondergrondDatum** (verplicht)  
De datum van de gebruikte ondergrond.
</br></br>

***verwijzingNaarIllustratieInfo*** (zo vaak als gewenst):  
Dit attribuut is bedoeld om de verbeelding van de verordening (het kaartbeeld of
de kaartbeelden ingeval dit er meer zijn, op te nemen. Het betreft
kaarten/afbeeldingen op het niveau van het "plangebied" en niet op het niveau
van onderliggende objecten; illustraties die bij onderliggende objecten behoren
worden bij die objecten opgenomen. Het attribuut verwijst naar het samengestelde
attribuut *IllustratieReferentiePG*, bestaande uit de attributen *verwijzingNaarIllustratie* en *typeIllustratie*.
</br>
- **verwijzingNaarIllustratie** (verplicht) 
Dit attribuut is exclusief bedoeld om hyperlinks te kunnen opnemen. Hier
dient een hyperlink naar de illustratie waarbij het object behoort te worden
opgenomen. Het format dient overeenkomstig de afspraak over de
bestandsnaamconventie voor het bestandstype *illustraties* conform de
STRI2012 te zijn.  
</br>
- **typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Er dient gekozen te worden uit één van de waarden
(afbeelding of kaart) volgens het domein *Illustratie*.
</br></br>

***verwijzingNaarExternPlanInfo*** (zo vaak als gewenst):  
Een verordening zal meestal gebaseerd zijn op een Provinciale Structuurvisie,
maar kan ook gebaseerd zijn op een ander beleidsdocument. Ook kan er sprake zijn
van het doorwerken van een AMvB naar een provinciale verordening. In [hoofdstuk 4](#H04)
is dit met betrekking tot herzieningen toegelicht. Daarnaast kan een extern plan
ook relevante informatie bevatten. Het attribuut verwijst naar het samengestelde
attribuut *ExternPlanReferentie_PV*, bestaande uit de volgende attributen *naamExternPlan*, *idnExternPlan* en *rolExternPlan*.
</br>
- **naamExternPlan** (verplicht)  
Hier wordt de naam van het externe plan of in voorkomend geval besluit
waarnaar verwezen wordt opgegeven. Dit kan een specifieke naam zijn indien
deze bekend is, maar ook een algemene benaming.  
</br>
- **idnExternPlan** (indien gewenst)  
In het geval een identificatie (idn) van het externe plan waarnaar verwezen
wordt, bekend is, kan deze idn hier worden opgenomen.  
</br>
- **rolExternPlan** (verplicht)  
Hierin wordt de betekenis van het externe plan/besluit ten opzichte van de
provinciale verordening vastgelegd. Het betreft hier een van de volgende
vaste waarden uit het domein *RolExternPlan_PV*:  
	-   *ten gevolge van extern plan/besluit* in geval de verordening een gevolg is van een ander plan of besluit;  
	-   *ter vervanging van extern plan* ingeval daarvan sprake is, een en ander als uiteengezet in hoofdstuk 4.1 van deze praktijkrichtlijn;  
	-   *als mutatie opgenomen* voor het geval er sprake is van een mutatieplan, een en ander als uiteengezet in hoofdstuk 4.1 van deze praktijkrichtlijn.
</br></br>

**verwijzingNorm** (verplicht):  
Teneinde de zekerheid te hebben welke technische status de data hebben, is het
noodzakelijk dat wordt aangegeven aan welke IMRO versie de gegevensset voldoet.
Tevens moet een verwijzing worden opgenomen naar de gebruikte versie van de
praktijkrichtlijn. In het geval objectgerichte planteksten (XML) onderdeel zijn
van de provinciale verordening, dan wordt ook de verwijzing naar de standaard
voor planteksten opgenomen.  
Het attribuut *verwijzingNorm* dient minimaal twee keer te worden opgenomen
met de verwijzing naar de betreffende versies in het waardeveld: IMRO2012 en
PRPV2012. Bij het gebruik van objectgerichte planteksten in dit ruimtelijk plan
moet ook worden opgenomen: IMROPT2012.
</br></br>

***begrenzing*** (verplicht):  
Dit attribuut verwijst naar het samengestelde attribuut *GeometriePlangebied*, bestaande uit de attributen *geometrie* en *idealisatie*.
</br>
- **geometrie** (verplicht)  
Het object *Besluitgebied_P* kent uitsluitend de geometrie van een vlak of
multivlak (multipolygoon). Dit attribuut legt de coördinaten in een
vastgesteld format (gml) vast. De coördinaten worden door de applicatie
automatisch gegenereerd.  
</br>
- **idealisatie** (verplicht)  
Met het attribuut *idealisatie* kan de nauwkeurigheid van de begrenzing van
een object worden aangegeven. Dit attribuut heeft de vaste waarde exact
volgens het domein *Idealisatie_1*. De vaste waarde exact geeft aan dat de
geometrie van het object opgenomen is met de nauwkeurigheid die behoort bij
de dataset.
</br>

## Klasse Besluitvlak_P
In Tabel 3 zijn de attributen behorend bij de klasse *Besluitvlak_P* benoemd, de
waarden aangegeven die deze attributen moeten bevatten en is aangegeven of het
gebruik van het attribuut verplicht is en of het attribuut meerdere malen mag
worden gebruikt. Ook is aangegeven of attributen in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven.

<table id="d4e3217" style="width: 100%;"><caption>Klasse besluitvlak_P 1..n*</caption><colgroup><col id="col1" style="width: 4.414609170554102%;"></col><col id="col2" style="width: 3.67504835589942%;"></col><col id="col3" style="width: 0.10240072818295597%;"></col><col id="col4" style="width: 20.844237114575037%;"></col><col id="col5" style="width: 30.640573444077823%;"></col><col id="col6" style="width: 6.451245875526227%;"></col><col id="col7" style="width: 33.871885311184435%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="576A8C79">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2D9BE25D">Waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5047CC8C">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6D7EEAA0">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="36792F59"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="25111AD7"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C3F6381"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="46D90495"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="06E23788" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="5493A98E">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3FDC8800">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A5A328F">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0B9A97FE">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="784C06BB">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="17AB20BB">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B1375E2">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="549E31AC">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 24 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="14793CA4">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A1827BD">besluitvlak_P</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5BB92E10">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6A2902B0">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="73680324">besluitgebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="784D6F64">idn Besluitgebied_P</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4DB73E26">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09D80429">automatisch uitlezen door applicatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="4A851753">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6EDCAAFC">naam besluitvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="22986B9A">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4C64B5B5">volgens tekst van besluit</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="51FCC513">thema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="69214025">naam thema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3BA6A7E7">1..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0384284E">vrij in te vullen, desgewenst één van de waarden volgens voorlopig domein Thema</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="54DEA865"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7CEF0C05"><i>TekstReferentie_PV</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79AD1A24"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="00D0E0E0"><i>samengesteld attribuut</i></p><p id="684FA659"><i>verwijzend naar specifieke tekst</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="3"><p id="67383F50" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_PV</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3993B754">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="72ECD3F9">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="028CFC16">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="75AF7895">in format bestandsnaamconventie voorschriften/regels, toelichting of bijlage conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1FCF1A04">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6725D900">regel zonder voorbereidingsbescherming,  </p><p id="3202D521">regel met voorbereidingsbescherming, </p><p id="31B71DB1">toelichting,</p><p id="58FAECCF">bijlage bij regel zonder voorbereidingsbescherming,</p><p id="2D5BB56A">bijlage bij regel met voorbereidingsbescherming of </p><p id="324B72C8">bijlage bij toelichting</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="137F433E">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="14435A2C">één van de waarden volgens domein Teksttype_PV</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2BDF7FE7">normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="37A6C04F">naam van de normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="132C70D7">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2AF1AF4A">geen, één of meer van de waarden volgens domein Normadressant_PV; alleen indien anders dan bij object Besluitgebied_P</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="34E67F1C"><i>verwijzingNaarIllustratieInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09A712D7"><i>IllustratieReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="698A8863"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2E8EB26C"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="3"><p id="748080F6" style="writing-mode: vertical-rl; rotate: 180deg;"><i>IllustratieReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="00E04DC4">verwijzingNaarIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3813F700">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="70F78793">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="63191021">in format bestandsnaamconventie illustratie conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="65AB2DB7">typeIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DA91154">afbeelding of kaart</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1A0A8A2D">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="21639ED7">één van de waarden volgens domein Illustratie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="68570487">legendanaam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6D558E33">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="063D2E98">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="74313EA1">volgens legenda van de illustratie waarnaar verwezen wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="4F5E224B"><i>cartografieInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="695684CA"><i>CartografieInfo</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="373128A7"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="73F15E64"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="3"><p id="7463BDC7" style="writing-mode: vertical-rl; rotate: 180deg;"><i>CartografieInfo</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="5A2BC60E">kaartnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5C59F4EE">nummer van de kaart waartoe dit object behoort</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0216333E">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="28B890C4">nummer van de kaart waartoe dit object behoort</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="0B90F511">kaartnaam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="53164CA4">naam van de kaart waartoe dit object behoort</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="198703A6">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6BA3C980">naam van de kaart waartoe dit object behoort</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="050317CE">symboolcode</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62B4F51A">code van de gebruikte verbeelding voor weergave van het object. </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="532BDA49">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5461F550">één van de waarden uit SLD Symboolcodelijst vormvrije plannen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="230D9657"><i>begrenzing:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B4D451F"><i>GeometrieBesluitobject_P1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E6194F9"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="409CDEB6"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="2"><p id="1A77B94A" style="writing-mode: vertical-rl; rotate: 180deg;"><i>GeometrieBesluitobject_P1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5966CD69">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E0A5C7A">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2E8A8445">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="13011DA4">beschrijving van vlak of multivlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B7625DC">idealisatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E9753EB">exact</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6E7B46E5">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A5BA7F2">de hier genoemde vaste waarde volgens domein Idealisatie_1</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="7"><p id="2574AC24">*  multipliciteit:</p><p id="07FCA50B">0..1:   komt 0 of 1 keer voor           0..n:   komt zo vaak voor als gewenst</p><p id="025440CF">1:       komt 1 keer voor                 1..n:   komt tenminste 1 keer voor</p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):  
Elk object *Besluitvlak_P* krijgt een eigen unieke identificatie binnen de
provinciale verordening. Het samengestelde attribuut *identificatie* verwijst
naar het object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.
<br/>
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
<br/>
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.
<br/><br/>

**typePlanobject** (verplicht):  
Het attribuut *typePlanobject* maakt het via het bijbehorende domein
*RuimtelijkPlanobject* mogelijk aan te geven welk object het betreft. Hier wordt
de vaste waarde *besluitvlak_P* ingevuld.
<br/><br/>

**besluitgebied** (verplicht):  
Voor elk object is een verwijzing noodzakelijk naar het object *Besluitgebied_P*
waar het object deel van uitmaakt. Dit attribuut verwijst daartoe naar het
attribuut *identificatie* van het bijbehorende object *Besluitgebied_P*. Dit zal
automatisch binnen een applicatie gestalte kunnen krijgen.
<br/><br/>

**naam** (verplicht):  
Aan het attribuut *naam* wordt als waarde een representerende naam van het
object meegegeven, mogelijk zoals deze in de tekst die ernaar verwijst is
opgenomen. Niet altijd zal dit het geval zijn. In dat geval zal een zinvolle
onderscheidende naam moeten worden ingevuld, zodat het object voor gebruikers
herkenbaar is en de gebruiker hierop desgewenst kan classificeren.
<br/><br/>

**thema** (verplicht, zo vaak als gewenst):  
Met dit attribuut wordt het thema van het object opgenomen. Het thema wordt
gekozen uit de waarden volgens het voorlopige domein *Thema*. Indien geen
bruikbare waarde wordt gevonden kan een vrije tekst worden opgenomen. Dit
attribuut kan meerdere keren worden opgenomen.
<br/><br/>

***verwijzingNaarTekstInfo*** (onder voorwaarde verplicht):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het betreffende object *Besluitvlak_P*. Het attribuut verwijst naar
het samengestelde attribuut *TekstReferentie_PV*, bestaande uit de attributen *verwijzingNaarTekst, typeTekst* en *normadressant*.  
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object *Besluitgebied_P*: objectgericht in XML of niet-objectgericht in HTML formaat.
Het format dient overeen­komstig de afspraak over de bestandsnaamconventies
conform de STRI2012 te zijn. De keuze van de bronhouder wordt vastgelegd in de *verwijzingNorm* bij deze provinciale verordening.
<br/>
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgenomen.  
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directorystructuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: *bestandsnaam.xml­\#fragment* of *bestandsnaam.htm­\#fragment*.
<br/>
- **typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *Teksttype_PV*:  
	-   regel zonder voorbereidingsbescherming;  
	-   regel met voorbereidingsbescherming;  
	-   toelichting;  
	-   bijlage bij regel zonder voorbereidingsbescherming;  
	-   bijlage bij regel met voorbereidingsbescherming;  
	-   bijlage bij toelichting.
<br/><br/>

**normadressant** (zo vaak als gewenst)  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_PV* geeft de toegestane waarden aan waaruit één
of meerdere kunnen worden gekozen. Indien deze waarde hier wordt opgegeven
treedt deze waarde in de plaats van de waarde die bij het object *Besluitgebied_P* is opgegeven.
<br/><br/>

***verwijzingNaarIllustratieInfo*** (zo vaak als gewenst):  
Dit attribuut is bedoeld om een specifieke afbeelding of illustratie behorende
bij het object op te nemen. Het attribuut verwijst naar het samengestelde
attribuut *IllustratieReferentie*, bestaande uit de attributen *verwijzingNaarIllustratie, typeIllustratie* en *legendanaam*.
<br/>
- **verwijzingNaarIllustratie** (verplicht)  
Dit attribuut is exclusief bedoeld om links te kunnen opnemen. Hier dient
een link naar de illustratie waarbij het object behoort te worden opgenomen.
Het format dient overeenkomstig de afspraak over de bestandsnaamconventie
voor het bestandstype *illustratie* conform de STRI2012 te zijn.  
<br/>
- **typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Er dient gekozen te worden uit één van de waarden *afbeelding* of *kaart* volgens het domein *Illustratie*.
<br/>
- **legendanaam** (indien gewenst)  
De op te nemen / opgenomen naam voor de legenda van het kaartbeeld waarnaar
verwezen wordt.
<br/><br/>

***cartografieInfo*** (zo vaak als gewenst):  
Het attribuut *cartografieInfo* wordt gebruikt om verschillende kaarten in de
structuurvisie zichtbaar en presenteerbaar te maken. De structuur van de
kaartopbouw staat echter los van de planstructuur. Geen of foutief gebruik van
het attribuut *cartografieInfo* resulteert in een grijze of andere
objectweergave in een interactieve raadpleegomgeving. Een object kan in meerdere
kaarten voorkomen. Er moeten meerdere attributen *cartografieInfo* met waarden
toegevoegd worden om dit te realiseren.  
Het attribuut verwijst naar het samengestelde attribuut *cartografieInfo*
bestaande uit de attributen *kaartnummer, kaartnaam en symboolcode.*
<br/>
- **kaartnummer** (verplicht) 
Het nummer van de kaart van de provinciale verordening waartoe dit object
behoort. Het kaartnummer is door de bronhouder te bepalen. Kaarten kunnen in
een interactieve raadpleegomgeving worden geprioriteerd op basis van
kaartnummer. De kaart met nummer 1 wordt als hoofdkaart gezien en moet
altijd voorkomen, kaartnummer 0 niet mag voorkomen. Voorloopnullen worden
genegeerd (001 wordt bijvoorbeeld 1). Het kaartnummer is een uniek nummer
gekoppeld aan een kaartnaam.
<br/>
- **kaartnaam** (verplicht)  
De naam van de kaart van de provinciale verordening waartoe dit object
behoort. De kaartnaam is door de bronhouder te bepalen.
<br/>
- **symboolcode** (zo vaak als gewenst)  
De symboolcode uit de symboolcodelijst voor vormvrije plannen (onderdeel van
de RO Standaarden 2012). De symboolcode geeft de kleur en patroon aan voor
de wijze waarop het object *Besluitgebied_P* in de interactieve
raadpleegomgeving wordt weergegeven.  
Een symboolcode die aan een object wordt toegevoegd geldt deze alleen voor
dit object zelf en niet voor de onderliggende objecten. Er vindt dus geen
overerving van symboolcode plaats.
<br/><br/>

***begrenzing*** (verplicht, zo vaak als gewenst):  
Het attribuut verwijst naar het samengestelde attribuut *GeometrieBesluitObject_P1*, bestaande uit de attributen:
<br/>
- **geometrie** (verplicht)  
Het object *Besluitvlak_P* kent uitsluitend de geometrie van een vlak of
multivlak (multipolygoon). Dit attribuut legt de coördinaten in een
vastgesteld format (gml) vast. De coördinaten kunnen door een applicatie
automatisch worden gegenereerd.
<br/>
- **idealisatie** (verplicht)  
De waarde van dit attribuut is voor het object *Besluitvlak_P* altijd exact.
Hiermee wordt bedoeld dat de geometrie van het object opgenomen is met de
nauwkeurigheid die behoort bij de dataset, waarmee de begrenzing als exact
wordt beschouwd.
<br/>

## Klasse Besluitsubvlak_P

In Tabel 4 zijn de attributen behorend bij de klasse *Besluitsubvlak_P* benoemd,
de waarden aangegeven die deze attributen moeten bevatten en is aangegeven of
het gebruik van het attribuut verplicht is en of het attribuut meerdere malen
mag worden gebruikt. Ook is aangegeven of attributen gekoppeld worden, dat wil
zeggen altijd in samenhang moeten worden gebruikt. Na de tabel is per attribuut
een nadere toelichting gegeven.

<table id="d4e4162" style="width: 100%;"><caption>Klasse Besluitsubvlak_P 0..n*</caption><colgroup><col id="col1" style="width: 4.414609170554102%;"></col><col id="col2" style="width: 3.67504835589942%;"></col><col id="col3" style="width: 0.10240072818295597%;"></col><col id="col4" style="width: 20.844237114575037%;"></col><col id="col5" style="width: 30.640573444077823%;"></col><col id="col6" style="width: 6.451245875526227%;"></col><col id="col7" style="width: 33.871885311184435%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="1A463D14">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="13A1EBA1">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45D93E47">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3A370BE0">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="6AD4810A"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1813DE7E"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4D4B5387"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5DD02E05"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="2144E58C" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="52717CF1">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="66D303B0">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4841647C">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0FB8B1F5" class="space-after">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="498A044D">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4ED3DD81">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="30E58E68">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7194FEE0">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 24 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="67B35D88">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6718072A">besluitsubvlak_P</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1FD7D184">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="358D8713">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="5B1C58AE">besluitgebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6982E86B">idn Besluitgebied_P</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E1B4F93">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="58C89A29">automatisch uitlezen door applicatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="618F50D4">besluitvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="521CBD8A">idn bijbehorend Besluitvlak_P</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="33A03FE2">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="25BF9865">alleen verplicht indien behoort bij een besluitvlak op grond van een inhoudelijke relatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="5477E36A">besluitsubvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="165C29E9">idn bijbehorend Besluitsubvlak_P</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="68C07F4C">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3BE07488">alleen verplicht indien behoort bij een ander besluitsubvlak op grond van een inhoudelijke relatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="2395EC31">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4992C87A">naam besluitsubvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1F21BE66">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C920CDE">volgens tekst besluit</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="443CC43D">thema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6A4130A6">naam thema</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="61F43DFF">1..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="71FB5CD7">vrij in te vullen, desgewenst één van de waarden volgens voorlopig domein Thema</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="01444A6F"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="33E83B3F"><i>TekstReferentie_PV</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F35BF32"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7BF4C84D"><i>samengesteld attribuut</i></p><p id="78B52030"><i>verwijzend naar specifieke tekst</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="3"><p id="50B6C564" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_PV</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0EBF7794">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="625B31F8">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5F98E2B0">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="073D73DA">in format bestandsnaamconventie voorschriften/regels, toelichting of bijlage conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="486E6D45">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4F62D718">regel zonder voorbereidingsbescherming,  </p><p id="1DE28432">regel met voorbereidingsbescherming, </p><p id="15F628CA">toelichting,</p><p id="1F8790D2">bijlage bij regel zonder voorbereidingsbescherming,</p><p id="2ECB8E0C">bijlage bij regel met voorbereidingsbescherming of </p><p id="52154052">bijlage bij toelichting</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="14515B17">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="102037E8">één van de waarden volgens domein Teksttype_PV</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4CC3A1B9">normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0820185E">naam van de normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="52537FAD">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6855EC28">geen, één of meer van de waarden volgens domein Normadressant_PV; alleen indien anders dan bij object Besluitgebied_P</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="4752A2BB"><i>verwijzingNaarIllustratieInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4839AA90"><i>IllustratieReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="67512CDA"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="30329F88"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="3"><p id="3B68DB71" style="writing-mode: vertical-rl; rotate: 180deg;"><i>IllustratieReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40B74B4D">verwijzingNaarIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="52D0AD3A">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2A926542">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4D4370FD">in format bestandsnaamconventie illustratie conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="08F9C391">typeIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="00CE9CC9">afbeelding of kaart</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11616F37">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="61F43A31">één van de waarden volgens domein Illustratie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="593FFC42">legendanaam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="06BD4FD0">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27AB9E41">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7DE2E639">volgens legenda van de illustratie waarnaar verwezen wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="1673F6D9"><i>cartografieInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79D1B001"><i>CartografieInfo</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7C5A1A02"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27A4C47A"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="3"><p id="1113A786" style="writing-mode: vertical-rl; rotate: 180deg;"><i>CartografieInfo</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="59308282">kaartnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="350BADCA">nummer van de kaart waartoe dit object behoort</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C16DBD4">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="33FC0565">nummer van de kaart waartoe dit object behoort</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="3D42903C">kaartnaam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DA41B59">naam van de kaart waartoe dit object behoort</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5BB9FF18">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="097C2CCA">naam van de kaart waartoe dit object behoort</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="555E5D6D">symboolcode</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2033130A">code van de gebruikte verbeelding voor weergave van het object. </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="626E2472">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="367923FF">één van de waarden uit SLD Symboolcodelijst vormvrije plannen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="4CECFC7A"><i>begrenzing:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3A9EC204"><i>GeometrieBesluitobject_P3</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7785EA4B"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="677A2D17"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="2"><p id="6217ADB2" style="writing-mode: vertical-rl; rotate: 180deg;"><i>GeometrieBesluitobject_P3</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B004A72">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="68A82133">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="150E92D2">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6B234E57">beschrijving van punt, lijn, vlak of meervoudige versies daarvan (multipunt, multilijn, multivlak)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0147052E">idealisatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1EE0EE31">exact, indicatief of cartografisch figuur</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="361E874F">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4C39B80E">één van de waarden volgens domein Idealisatie_3</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="7"><p id="64CAE23E"><b>*</b>  multipliciteit:</p><p id="565658D0">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="4999F9CE">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor </p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):  
Elk object *Besluitsubvlak_P* krijgt een eigen unieke identificatie binnen deze
provinciale verordening. Het samengestelde attribuut *identificatie* verwijst
naar het object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.
<br/>
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
<br/>
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.
<br/><br/>

**typePlanobject** (verplicht):  
Het attribuut *typePlanobject* maakt het via het bijbehorende domein
*RuimtelijkPlanobject* mogelijk aan te geven welk object het betreft. Hier wordt
de vaste waarde *besluitsubvlak_P* ingevuld.
<br/><br/>

**besluitgebied** (verplicht):  
Voor elk object is een verwijzing noodzakelijk naar het object *Besluitgebied_P*
waar het object deel van uitmaakt. Dit attribuut verwijst daartoe naar het
attribuut *identificatie* van het bijbehorende object *Besluitgebied_P*. Dit zal
automatisch binnen een applicatie gestalte kunnen krijgen.
<br/><br/>

**besluitvlak** (onder voorwaarde verplicht):  
Een object *Besluitsubvlak_P* heeft op grond van een inhoudelijke relatie altijd
betrekking op minimaal één object Besluitvlak_P of op minimaal één ander object *Besluitsubvlak_P*. Indien dit object *Besluitsubvlak_P* geen betrekking heeft
op een ander object Besluitsubvlak_P, dan dient met dit attribuut het idn van
het onderliggende object *Besluitvlak_P* waar dit object *Besluitsubvlak_P*
betrekking op heeft, te worden ingevuld. Dit attribuut moet meerdere keren
worden gebruikt als het object betrekking heeft op meerdere onderliggende
objecten *Besluitvlak_P*.
<br/><br/>

**besluitsubvlak** (onder voorwaarde verplicht):  
Objecten van het type *Besluitsubvlak_P* kunnen op grond van een inhoudelijke
relatie betrekking hebben op andere onderliggende objecten *Besluitsubvlak_P*.
Indien dat het geval is, dient met dit attribuut het idn van deze onderliggende
objecten *Besluitsubvlak_P* te worden opgenomen.
<br/><br/>

**naam** (verplicht):  
Aan het attribuut *naam* wordt als waarde een representerende naam van het
object meegegeven, mogelijk zoals deze in de tekst die ernaar verwijst is
opgenomen. Niet altijd zal dit het geval zijn. In dat geval zal een zinvolle
onderscheidende naam moeten worden ingevuld, zodat het object voor gebruikers
herkenbaar is en de gebruiker hierop desgewenst kan classificeren.
<br/><br/>

**thema** (verplicht, zo vaak als gewenst):  
Met dit attribuut wordt het thema van het object opgenomen. Het thema wordt
gekozen uit de waarden volgens het voorlopige domein *Thema*. Indien geen
bruikbare waarde wordt gevonden kan een vrije tekst worden opgenomen. Dit
attribuut kan meerdere keren worden opgenomen.
<br/><br/>

***verwijzingNaarTekstInfo*** (onder voorwaarde verplicht):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het betreffende object *Besluitsubvlak_P*. Het attribuut verwijst
naar het samengestelde attribuut *TekstReferentie_PV*, bestaande uit de
attributen *verwijzingNaarTekst, typeTekst* en *normadressant*.  
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Besluitgebied_P*: objectgericht in XML of niet-objectgericht in HTML formaat.
Het format dient overeen­komstig de afspraak over de bestandsnaamconventies
conform de STRI2012 te zijn. De keuze van de bronhouder wordt vastgelegd in de
*verwijzingNorm* bij deze provinciale verordening.
<br/>
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgeno­men.  
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directorystructuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: *bestandsnaam.xml­\#fragment,* of *bestandsnaam.htm­\#fragment*.
<br/>
- **typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *Teksttype_PV*:  
	-   regel zonder voorbereidingsbescherming;  
	-   regel met voorbereidingsbescherming;  
	-   toelichting;  
	-   bijlage bij regel zonder voorbereidingsbescherming;  
	-   bijlage bij regel met voorbereidingsbescherming;  
	-   bijlage bij toelichting.
<br/>
- **normadressant** (zo vaak als gewenst)  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_PV* geeft de toegestane waarden aan waaruit één
of meerdere kunnen worden gekozen. Indien deze waarde hier wordt opgegeven
treedt deze waarde in de plaats van de waarde die bij het object *Besluitgebied_P* is opgegeven.
<br/><br/>

***verwijzingNaarIllustratieInfo*** (optioneel):  
Dit attribuut is bedoeld om een specifieke verbeelding of illustratie behorende
bij het object op te nemen. Het attribuut verwijst naar het samengestelde
attribuut *IllustratieReferentie*, bestaande uit de attributen *verwijzingNaarIllustratie, typeIllustratie* en *legendanaam*.
<br/>
- **verwijzingNaarIllustratie** (verplicht)  
Dit attribuut is exclusief bedoeld om links te kunnen opnemen. Hier dient
een link naar de illustratie waarbij het object behoort te worden opgenomen.
Het format dient overeenkomstig de afspraak over de bestandsnaamconventie
voor het bestandstype *illustratie* conform de STRI2012 te zijn.
<br/>
- **typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Er dient gekozen te worden uit één van de waarden *afbeelding* of *kaart* volgens het domein *Illustratie*.
<br/>
- **legendanaam** (indien gewenst)  
De op te nemen / opgenomen naam voor de legenda van het kaartbeeld waarnaar
verwezen wordt.
<br/><br/>

***cartografieInfo*** (zo vaak als gewenst):  
Het attribuut *cartografieInfo* wordt gebruikt om verschillende kaarten in de
structuurvisie zichtbaar en presenteerbaar te maken. De structuur van de
kaartopbouw staat echter los van de planstructuur. Geen of foutief gebruik van
het attribuut *cartografieInfo* resulteert in een grijze of andere
objectweergave in een interactieve raadpleegomgeving. Een object kan in meerdere
kaarten voorkomen. Er moeten meerdere attributen *cartografieInfo* met waarden
toegevoegd worden om dit te realiseren.  
Het attribuut verwijst naar het samengestelde attribuut *cartografieInfo*
bestaande uit de attributen *kaartnummer, kaartnaam en symboolcode.*
<br/>
- **kaartnummer** (verplicht)  
Het nummer van de kaart van de provinciale verordening waartoe dit object
behoort. Het kaartnummer is door de bronhouder te bepalen. Kaarten kunnen in
een interactieve raadpleegomgeving worden geprioriteerd op basis van
kaartnummer. De kaart met nummer 1 wordt als hoofdkaart gezien en moet
altijd voorkomen, kaartnummer 0 niet mag voorkomen. Voorloopnullen worden
genegeerd (001 wordt bijvoorbeeld 1). Het kaartnummer is een uniek nummer
gekoppeld aan een kaartnaam.
<br/>
- **kaartnaam** (verplicht)  
De naam van de kaart van de provinciale verordening waartoe dit object
behoort. De kaartnaam is door de bronhouder te bepalen.
<br/>
- **symboolcode** (zo vaak als gewenst)  
De symboolcode uit de symboolcodelijst voor vormvrije plannen (onderdeel van
de RO Standaarden 2012). De symboolcode geeft de kleur en patroon aan voor
de wijze waarop het object *Besluitgebied_P* in de interactieve
raadpleegomgeving wordt weergegeven.  
Een symboolcode die aan een object wordt toegevoegd geldt deze alleen voor
dit object zelf en niet voor de onderliggende objecten. Er vindt dus geen
overerving van symboolcode plaats.
<br/><br/>

***begrenzing*** (verplicht, zo vaak als gewenst):  
Dit attribuut verwijst naar het samengestelde attribuut *GeometrieBesluitobject_P3*, bestaande uit de attributen *geometrie* en *idealisatie*.
<br/>
- **geometrie** (verplicht)  
De geometrie van het object *Besluitsubvlak_P* kan een beschrijving van
punt, lijn, vlak of meervoudige versies daarvan (multipunt, multilijn,
multivlak) zijn, tezamen de geometrie van het object vormend. Dit attribuut
legt de coördinaten in een vastgesteld format (gml) vast. De coördinaten
kunnen door een applicatie automatisch worden gegenereerd.
<br/>
- **idealisatie** (verplicht)  
Met het attribuut idealisatie kan de nauwkeurigheid van de begrenzing van
een object worden aangegeven. Er dient een keuze gemaakt te worden volgens
het domein *Idealisatie_3*. De nauwkeurigheid van de begrenzing van een
object neemt af in de keuzes, van *exact*, via *indicatief* naar *cartografisch figuur*:  
	-   *Exact* geeft aan dat de geometrie van het object opgenomen is met de
nauwkeurigheid die behoort bij de dataset, waarmee de begrenzing als exact
wordt beschouwd;  
	-   *Indicatief* betekent dat de geometrie indicatief geïnterpreteerd moet
worden; waarmee de begrenzing niet is vastgelegd;  
	-   *Cartografisch figuur* betekent dat de geometrie (het figuur) als symbool
geïnterpreteerd moet worden en geen relatie heeft met de begrenzing van het
object in de werkelijkheid; waardoor slechts de locatie zonder een
aangegeven begrenzing is vastgelegd.
