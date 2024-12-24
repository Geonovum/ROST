# De planobjecten met attributen
**Een klasse, te beschouwen als een objecttype, kent attributen die de
eigenschappen van dat objecttype geven. In dit hoofdstuk worden de
(sub)klassen (objecttypen) met bijbehorende attributen beschreven.**

## Klasse Bestemmingsplangebied
Het object (de klasse) *Bestemmingsplangebied* is het object dat het gebied, of
de gebieden, binnen de plangrenzen geometrisch representeert. Aan dit object
worden de algemene eigenschappen van het plangebied als attribuut gekoppeld.

In Tabel 2 zijn de attributen benoemd, de waarden aangegeven die deze attributen
kunnen bevatten en wordt aangegeven of het gebruik van het attribuut verplicht
is en of het attribuut meerdere malen mag worden gebruikt (multipliciteit). Ook
is aangegeven of het samengestelde attributen betreffen, dat wil zeggen altijd
in samenhang moeten worden gebruikt. Na de tabel is per attribuut een nadere
toelichting gegeven.

<table id="d4e612" style="width: 100%;"><caption>Klasse Bestemmingsplangebied 1*</caption><colgroup><col id="col1" style="width: 5.657835653345308%;"></col><col id="col2" style="width: 0.60619667714414%;"></col><col id="col3" style="width: 26.87471935339021%;"></col><col id="col4" style="width: 28.01975752132914%;"></col><col id="col5" style="width: 8.834755276156264%;"></col><col id="col6" style="width: 30.006735518634937%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="3A3DF3F8">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="75C53F51">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2B1AF88B">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="44BDB88C">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="4FD0A884"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5C350903"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79A7A3D5"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2F452A3A"><i>samengesteld attribuut.</i></p><p id="0B71B2B0"><i>Uit  de combinatie hiervan wordt de bestandsnaam van het plan opgebouwd conform STRI2012: namespace.lokaalID-versie</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="3"><p id="0108AF16" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="1B67E4C7">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7BC056EB">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1CD37128">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="431BFCBE">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="2E304AF8">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0DB8E39D">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0900B782">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="602BBAFB">Unieke identificatiecode binnen een registratie. Bestaande uit een bronhouderscode van 4 cijfers gevolgd door een punt (.) en maximaal 18 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="33F62A99">versie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="05CD0B60">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="263A028C">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1A806FD5">Versie-aanduiding van het plangebied bestaande uit 4 alfanumerieke tekens </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="7CE3C98E">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2851067F">bestemmingsplan, inpassingsplan, rijksbestemmingsplan, uitwerkingsplan, wijzigingsplan </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="47730D94">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="23DCBFA2">één van de waarden volgens domein RuimtelijkPlanOfBesluit_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="4BC0FA72">beleidsmatigVerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3C786830">gemeentelijke overheid, deelgemeente/stadsdeel,</p><p id="3B30071F">provinciale overheid of nationale overheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3C8E0289">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2F04062E">één van de waarden volgens domein Overheden_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="59260BA8">naamOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="239A0187">naam van de overheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6639552F">1..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4085CE4E">volgens format in de vorm: gemeente …., deelgemeente/ stadsdeel …., provincie …. of ministerie …. In het geval er meerdere verantwoordelijke ministeries zijn, wordt naamOverheid evenzoveel ingevuld.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="3C5F075B">overheidsCode    </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="24A9FFE2">CBS-nummer van de beleidsmatig verantwoordelijke overheid </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="28CA4211">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="72554C28">4 cijfers; ingeval Rijk: "0000"; ingeval provincie: CBS-nummer provincie, met voorafgaand 2 voorloopnegens; ingeval deelgemeente/stadsdeel: CBS-nummer gemeente</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="2E2B15D1">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45F0C712">naam van het plan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4111D6B4">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="64669712">volgens de aanhaaltitel conform SVBP2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="66859991">locatieNaam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2E613BCC">naam van de locatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="633FDF11">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="245D86D7">iedere gewenste naam; verplicht ingeval naamOverheid anders dan gemeente</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="64FC1961"><i>planstatusInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="36667BD3"><i>PlanstatusEnDatum</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="14A92279"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="379C471C"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="7C367379" style="writing-mode: vertical-rl; rotate: 180deg;"><i>PlanstatusEnDatum</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5830A549">planstatus</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5D41BE0E">waarde van de planstatus</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E250570">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2D4E782C">één van de waarden volgens domein Planstatus</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="253019CB">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="415A412F">datum van de planstatus</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E838A02">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="575231B6">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="12B34C89">besluitnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="038BE8C9">nummer van het besluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="296E0ACD">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7DA116E6">het besluitnummer van het vaststellingsbesluit; alleen toegestaan en verplicht voor planstatus vastgesteld</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="01C055A5">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4AA23983">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4C8534A0">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2D40CD65">naar tekst vaststellingsbesluit; in format bestandsnaamconventie conform STRI2012; alleen toegestaan en verplicht voor planstatus vastgesteld</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="2C00656B"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="263F7C09"><i>TekstReferentiePG_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C8627A7"><i>2..4</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="71AC2F52"><i>samengesteld attribuut:</i></p><p id="75A04E27"><i>1 verwijzing naar volledige toelichting (verplicht), 1 naar volledige regels (verplicht) en max. 1 van elk typeTekst naar volledige bijlage(n)</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="22740FE6" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentiePG_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5992BE2C">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6D969318">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4495FC40">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="48FAF8E5">in format bestandsnaamconventie toelichting, regels of bijlage, conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45D88489">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1E6166D8">regels</p><p id="19B3359A">toelichting</p><p id="0B1C1337">bijlage bij regels</p><p id="4F19D648">bijlage bij toelichting</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2D3E75ED">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="503EE2E8">één van de waarden volgens domein TeksttypePG_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="1B6CB385"><i>ondergrondInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="342FB109"><i>OndergrondReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="24A77732"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4794733C"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="48235405" style="writing-mode: vertical-rl; rotate: 180deg;"><i>OndergrondReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5601050F">ondergrondtype</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="002BF89B">naam van de ondergrond</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="31ECF1DB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2F008429">één van de waarden volgens domein Ondergronden Ingeval geen gebruik is gemaakt van een ondergrond uit het domein Ondergronden wordt een eenduidige referentie naar de gebruikte ondergrond(en) gegeven</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5CA28DE7">ondergronddatum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="632AC6A2">datum van de gebruikte ondergrond</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B132E62">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="29E75745">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="7C0532B2"><i>verwijzingNaarExternPlanInfo: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E5D6892"><i>ExternPlanReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4081802E"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="431F4811"><i>samengesteld attribuut</i></p><p id="221C8879"><i>Verplicht bij een uitwerkingsplan, wijzigingsplan </i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="3"><p id="5BBA661B" style="writing-mode: vertical-rl; rotate: 180deg;"><i>ExternPlan-Referentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="2EC99AA9">naamExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="073F07A3">naam van extern plan/ besluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="18149B36">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6993136C">de naam van het plan/besluit waarnaar wordt verwezen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="42016487">idnExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4A7A5A6C">idn van plan/ besluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="52EBB0BC">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="36E7EB6C">idn van het plan/ besluit waarnaar wordt verwezen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="31C9C853">rolExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3F389237">ten gevolge van extern plan/ besluit, ter vervanging van extern plan of als mutatie opgenomen</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="784E1886">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="65B7DA76">één van de waarden volgens domein RolExternPlan_BP.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="6253B46C">verwijzingNorm</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5CE36ADF">IMRO2012 en PRBP2012 optioneel IMROPT2012 optioneel PRABPK2012</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B87D71D">2..4</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45542ECE">verwijzing naar gebruikte versie IMRO en naar gebruikte versie praktijkrichtlijn bestemmingsplannen: vaste waarden.</p><p id="49946250">verplicht bij gebruik objectgerichte planteksten: IMROPT2012.</p><p id="5C8C69DB">verplicht bij gebruik praktijkrichtlijn analoge bestemmingsplankaart: PRABPK2012.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="097F750E">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79BA57C0">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7CC54D65">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="38370438">beschrijving van vlak of multivlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="52A4AF18"><b>*</b>  multipliciteit:</p><p id="12DE18E4">0..1:   komt 0 of 1 keer voor          0..n:   komt zo vaak voor als gewenst</p><p id="6D6DAF41">1/2:   komt 1 resp. 2 keer voor      1/2..n:   komt tenminste 1 resp. 2 keer voor</p></td></tr></tbody></table>

***identificatie*** (verplicht):  
Ieder ruimtelijk instrument kent een eigen identificatienummer (idn). Deze
identificatie maakt het mogelijk dat op landelijk niveau een uniek onderscheid
voor ieder instrument aanwezig is. Voor het geval het werkingsgebied bestaat uit
meerdere ruimtelijk gescheiden gebieden kent het totaal van die gebieden één
identificatienummer. De geometrie van het object *Bestemmingsplangebied* is
hierbij een multipolygoon.
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
Voor het attribuut *typePlan* wordt het domein *RuimtelijkPlanOfBesluit_BP*
gebruikt. Voor de waarde zijn er vijf mogelijkheden waaruit er één moet worden
gekozen. De mogelijkheden zijn opgenomen in Tabel 3.

<table id="d4e1758" style="width: 100%;"><caption>Type plan</caption><colgroup><col id="col1" style="width: 28.220244716351502%;"></col><col id="col2" style="width: 71.7797552836485%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1F8AB61F">type plan</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27799469">omschrijving</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5DCB1CF8">bestemmingsplan:</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="542345A9">voor een bestemmingsplan dat wordt opgesteld overeenkomstig artikel 3.1 van de Wet ruimtelijke ordening (Wro)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="39ED96D2">inpassingsplan:</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6ABFBE11">voor een bestemmingsplan (inpassingsplan) dat wordt opgesteld overeenkomstig artikel 3.26 of 3.28 van de Wet ruimtelijke ordening (Wro)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="42E19361">rijksbestemmingsplan:</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62DFC0B6">voor een (rijks)bestemmingsplan dat wordt opgesteld overeenkomstig artikel 10.1 van de Wet ruimtelijke ordening (Wro)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7CA4A4A4">uitwerkingsplan:</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="534D2BE7">voor een uitwerkingsplan dat wordt opgesteld overeenkomstig artikel 3.6, 3.26, 3.28 of 10.3, lid 2 van de Wet ruimtelijke ordening (Wro)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7D48180F">wijzigingsplan:</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="51CFE8AA">voor een wijzigingsplan dat wordt opgesteld overeenkomstig artikel 3.6, 3.26, 3.28 of 10.3, lid 2 van de Wet ruimtelijke ordening (Wro)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="7D8D6FBB">N.B.    artikelnummers overeenkomstig het staatsblad nr. 566, jaargang 2006</p></td></tr></tbody></table>

**beleidsmatigVerantwoordelijkeOverheid** (verplicht):  
Hier wordt de overheid die beleidsmatig verantwoordelijk is voor het opstellen
van het plan opgeno­men uit het domein *Overheden_BP.* In dit geval een van de
volgende vaste waarden:  
-   gemeentelijke overheid;
-   deelgemeente/stadsdeel;
-   provinciale overheid of
-   nationale overheid.
<br/><br/>

**naamOverheid** (verplicht):  
Hier wordt de naam van de beleidsmatig verantwoordelijke overheid opgenomen, in
de vorm van de tekst “gemeente …….”, “deelgemeente ……”, "stadsdeel ……",
“provincie …….” of “ministerie …….”. In het geval er meerdere verantwoordelijke
ministeries zijn, wordt naamOverheid evenzoveel ingevuld,
<br/><br/>

**overheidsCode** (verplicht):  
Om inzichtelijk te maken van welke beleidsmatig verantwoordelijke overheid het
bestemmingsplan is, wordt hier het viercijferige CBS-nummer van die overheid
opgenomen. Voor deelgemeenten/stadsdelen wordt het nummer gebruikt van de
gemeente waartoe zij behoren. Voor de provincies worden, voorafgaand aan het
CBS-nummer van de provincie, twee voorloopnegens geplaatst, zodat de totale
lengte 4 posities bedraagt. Voor het Rijk wordt het nummer "0000" gebruikt.
<br/><br/>

**naam** (verplicht):  
In het waardeveld van het attribuut *naam* dient de volledig naam van het
bestemmingsplan te worden opgenomen zoals deze in de Slotregel in de planregels
is opgenomen. De volledige naam is gelijk aan de aanhaaltitel in de planregels,
conform <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a>.

**locatieNaam** (indien gewenst / voorwaardelijk verplicht):  
Het kan gewenst zijn om de geografische naam van de locatie waarbinnen het
bestemmingsplan zich bevindt kenbaar te maken. De naam (namen) van die locatie
kan bij dit attribuut worden ingevuld. Bij een bestemmingsplan buitengebied zal
bijvoorbeeld veelal geen locatienaam behoren, bij een bestemmingsplan voor
stedelijk gebied mogelijk wel.  
Het is noodzakelijk (verplicht) het attribuut *locatieNaam* te gebruiken voor
zover het een inpassingsplan betreft dat door een provincie of door het Rijk
wordt opgesteld. In dat geval worden bij dit attribuut alle provincienamen en
gemeentenamen opgenomen waarbinnen het bestemmingsplan valt.
<br/><br/>

***planstatusInfo*** (verplicht):
Dit attribuut is noodzakelijk om de plangegevens te kunnen plaatsen naar tijd en
belang. Het samengesteld attribuut *planstatusInfo* verwijst naar het object
*PlanstatusEnDatum*, bestaande uit de attributen:
<br/>
- **planstatus** (verplicht)  
Het domein *Planstatus* geeft de toegestane waarden voor het attribuut *planstatus* waaruit er één moet worden gekozen. De waarde van dit attribuut
geeft de planstatus weer.
<br/>
- **datum** (verplicht)  
Het attribuut *datum* is bedoeld om de proceduredatum van het plan op te
nemen. De in het waardeveld op te nemen datum dient overeenkomstig het in
IMRO2012 afgesproken datumformaat te worden genoteerd: jjjj-mm-dd.
<br/><br/>

**besluitnummer** (onder voorwaarde verplicht):  
Nummer van het vaststellingsbesluit van het plan. Het besluitnummer is alleen
toegestaan en verplicht indien de planstatus *vastgesteld*.
<br/><br/>

**verwijzingNaarVaststellingsbesluit** (onder voorwaarde verplicht):  
Hierin wordt een link opgenomen naar de tekst van het vaststellingsbesluit. In
het format volgens de bestandsnaamconventie *vaststellingsbesluit* conform de
STRI2012. De link is alleen verplicht bij de planstatus *vastgesteld*. Bij een
andere (eerdere) planstatus is dit attribuut niet toegestaan. Aan het bestand
kunnen indien gewenst ook door de bronhouder andere relevant geachte stukken,
die voor een goed begrip nodig kunnen zijn, zoals het raadsvoorstel, worden
toegevoegd.
<br/><br/>

***verwijzingNaarTekstInfo*** (verplicht):  
Dit attribuut verwijst naar het samengestelde attribuut *TekstReferentiePG_BP*,
bestaande uit de attributen *verwijzingNaarTekst* en *typeTekst*.  
Het attribuut wordt met de volgende cardinaliteit opgenomen:  
\- 1 verwijzing naar volledige toelichting.
\- 1 verwijzing naar volledige regels.
\- 0..2 verwijzing naar elk typeTekst volledige bijlagen.  
<br/><br/>
Teneinde een zo beperkt mogelijk aantal verwijzingen naar teksten te verkrijgen
is het aantal keren dat het attribuut *verwijzingNaarTekstInfo* mag worden
gebruikt beperkt. De raadpleger van de plannen heeft daar baat bij, omdat hij
dan niet direct geconfronteerd wordt met een mogelijk lange lijst van
verwijzingen. Daarom moet er maximaal één verwijzing zijn naar de volledige
toelichting en maximaal één naar de volledige regels. Daarnaast mag er maximaal
één verwijzing zijn naar alle eventuele bijlagen, gegroe­peerd naar bijlage(n)
bij toelichting en bijlage(n) bij regels. Er mag worden verwezen naar een
inhoudsop­gave of index, waardoor indirect meer mogelijkheden aanwezig zijn.
<br/>
De bronhouder kiest voor het al dan niet gebruik van objectgerichte planteksten.
In beide gevallen wordt dit attribuut *verwijzingNaarTekstInfo* gebruikt. De
keuze voor XML of HTML/PDF planteksten geldt niet alleen voor het
bestemmingsplangebied, de keuze geldt ook voor de andere objecten (bestemmingen/
aanduidingen) binnen het bestemmingsplan. Daarnaast wordt de keuze vastgelegd
met behulp van het attribuut *verwijzingNorm* bij Bestemmingsplangebied van dit
bestemmingsplan. Het format dient overeenkomstig de afspraak over de
bestandsnaamconventies conform de STRI2012 te zijn.
<br/>
- **verwijzingNaarTekst** (verplicht)  
De waarde van dit attribuut is een (hyper)link naar het soort document dat
is aangegeven bij het attribuut *typeTekst*. Er wordt in de waarde geen
elementen van een directory structuur/pad opgenomen.
<br/>
- **typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *TeksttypePG_BP*:  
	-	regels  
	-	toelichting  
	-	bijlage bij regels  
	-	bijlage bij toelichting
<br/><br/>

***ondergrondInfo*** (verplicht, zo vaak als gewenst):  
Dit attribuut verwijst naar het samengestelde attribuut *Ondergrondreferentie*,
bestaande uit de attributen *ondergrondtype* en *ondergronddatum.* Met dit
attribuut wordt, conform artikel 1.2.4 Bro, aangegeven welke ondergrond bij het
vaststellen van het bestemmingsplan is gebruikt.
Er zijn meerdere waarden mogelijk.
<br/>
- **ondergrondtype** (verplicht)  
	-	Het type van de gebruikte ondergrond volgens het domein *Ondergronden*. Op
    grond van de Wet basisregistratie grootschalige topografie (BGT) is het per
    1 juli 2017 voor bestuursorganen verplicht om gebruik te maken van de **Basisregistratie Grootschalige Topografie (BGT).** Een bestuursorgaan kan
    daar indien nodig gemotiveerd van afwijken. Bij afwijking kan het
    bestuursorgaan gebruik maken van: basisregistratie topografie (BRT)  
	-	basisregistratie kadaster (BRK)  
Indien geen gebruik is gemaakt van een ondergrond uit het domein
Ondergronden, dan wordt de naam van het bestand van de gebruikte
ondergrond(en) als vrije tekst opgegeven. In hoofdstuk 7 van de <a href='https://docs.geostandaarden.nl/ro/tri2012' target='_blank'>PRTRI2012</a> is
toegelicht welke bestandformaten voor de ondergrond kunnen worden gebruikt.
<br/>
- **ondergronddatum** (verplicht)  
De datum van de gebruikte ondergrond.
<br/><br/>

***verwijzingNaarExternPlanInfo*** (onder voorwaarde verplicht):  
Dit attribuut betreft een verwijzing naar het externe plan waar het type plan
een gevolg van is. De verwijzing naar het externe plan wordt verplicht opgenomen
bij het *typePlan*:  
-   uitwerkingsplan;  
-   wijzigingsplan.
<br/>
Bij de waarde van het typePlan bestemmingsplan, inpassingsplan en
rijksbestemmingsplan mag het attribuut *verwijzingNaarExternPlanInfo* worden
gebruikt. Een ander ruimtelijk plan of besluit, zoals een aanwijzingsbesluit,
kan juist de aanleiding zijn voor dit nieuwe bestemmingsplan, inpassingsplan of
rijksbestemmingsplan. In dat geval kan de bronhouder dit aan de informatie van
het plan toevoegen met behulp van het attribuut *verwijzingNaarExternPlanInfo*.  
Het attribuut verwijst naar het samengestelde attribuut *ExternPlanReferentie*,
bestaande uit de attributen *naamExternPlan*, *idnExternPlan* en *rolExternPlan.*
<br/>
- **naamExternPlan** (verplicht)  
Hier wordt de naam van het externe plan waarnaar verwezen wordt opgegeven.
In het geval een *typePlan* uitwerkingsplan of wijzigingsplan is, wordt de
naam van het bestemmingsplan opgenomen waarvan dit een uitwerking of
wijziging.
<br/>
- **idnExternPlan** (indien bekend)  
Met dit attribuut wordt de identificatie (idn) van het externe plan waarnaar
wordt verwezen opgenomen.
<br/>
- **rolExternPlan** (verplicht)  
Hierin wordt de betekenis van het externe plan ten opzichte van het hier
betreffende plan vastgelegd. Het betreft hier een van de volgende vaste
waarden uit het domein *RolExternPlan_BP*:  
	-	*ten gevolge van extern plan* in geval van bijvoorbeeld een uitwerkings- of
    wijzigingsplan, of in geval van een aanwijzingsbesluit, en dergelijke;  
	-	*ter vervanging van extern plan* voor het geval het een gedeeltelijke
    herziening van een bestemmingsplan betreft, als uiteengezet in [Hoofdstuk 4](#H04)
    van deze praktijkrichtlijn;  
	-	*als mutatie opgenomen* voor het geval er sprake is van een"geconsolideerd
    plan ", als uiteengezet in Hoofdstuk 4 van deze praktijkrichtlijn.
<br/><br/>

**verwijzingNorm** (verplicht):  
Teneinde de zekerheid te hebben welke technische status de data hebben, is het
noodzakelijk dat wordt aangegeven aan welke IMRO versie de gegevensset voldoet.
Tevens moet een verwijzing worden opgenomen naar de gebruikte versie van de
praktijkrichtlijn. In het geval objectgerichte planteksten (XML) onderdeel zijn
van het bestemmingsplan, dan wordt ook de verwijzing naar de standaard voor
planteksten opgenomen.
<br/>
Het attribuut *verwijzingNorm* dient minimaal twee keer te worden opgenomen
met de verwijzing naar de betreffende versies in het waardeveld: IMRO2012 en
PRBP2012. Bij het gebruik van objectgerichte planteksten in dit ruimtelijk plan
moet ook worden opgenomen: IMROPT2012. Indien gebruik wordt gemaakt van een
vaste weergave voor de analoge bestemmingsplankaart wordt ook de verwijzing naar
de PRABPK2012 opgenomen bij het bestemmingsplangebied: PRABPK2012. In dat geval
geldt het gebruik van de opmaak van de analoge bestemmingsplan kaartconform
PRABPK2012 voor dit gehele bestemmingsplan.
<br/><br/>
**geometrie** (verplicht):  
Het object *Bestemmingsplangebied* kent uitsluitend de geometrie van een vlak of
multivlak (multipolygoon). Dit attribuut kent coördinaten in een vastgesteld
format (GML).

## Klasse Bestemmingsvlak

Het bestemmingsvlak is het belangrijkste object (klasse) binnen het
bestemmingsplangebied. De eigenschappen van dit object worden bepaald door een
aantal attributen dat aan dat object wordt gekoppeld.

In Tabel 4 zijn de attributen benoemd, waarbij per attribuut is aangegeven
welke waarde gewenst is, welke dit moet zijn, of het gebruik van het attribuut
verplicht is, of het attribuut meerdere keren mag voorkomen en hoe de waarde,
al dan niet automatisch, wordt ingevoerd. Het object Bestemmingsvlak is niet
verplicht indien het *typePlan* een inpassingsplan of wijzigingsplan betreft.
Ook is aangegeven of attributen gekoppeld zijn, dat wil zeggen altijd in
samenhang moeten worden gebruikt. Na de tabel is per attribuut een toelichting
gegeven.

**Tabel 4 Klasse Bestemmingsvlak 1..n\***

<table id="d4e1897" style="width: 100%;"><caption>Klasse Bestemmingsvlak 1..n*</caption><colgroup><col id="col1" style="width: 5.641083267782896%;"></col><col id="col2" style="width: 5.641083267782896%;"></col><col id="col3" style="width: 17.428924598269468%;"></col><col id="col4" style="width: 27.04798291942915%;"></col><col id="col5" style="width: 9.203281267558152%;"></col><col id="col6" style="width: 35.03764467917744%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="328FC264">Attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="50214214">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="26F0EB9C">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="038B7A32">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="3789E56F"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1750AF69"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0D660865"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1E5CB57A"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="6638A051" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="1C8D4601">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="72C345AA">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="48547887">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0EB064CB">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="2940172E">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1AC612A9">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3BC693CB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4C20A7A4">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 32 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="7EA97FDC">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="24BA08F5">enkelbestemming of dubbelbestemming</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0FF663CB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7A5F0C7A">één van de hier genoemde waarden volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="539F785A">plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27D90444">idn Bestemmingsplangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4B8569F0">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="583DEFBB">identificatienummer van het plangebied </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="7E5330B3">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5880506A">naam bestemming</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4D99E96B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="249C91D4">volgens de bestemmingsregel (het artikel)</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="77825D86">bestemmingshoofdgroep</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5F4AE719">waarde hoofdgroep</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="57908904">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5EE53D9C">één van de waarden volgens domein Bestemmingshoofdgroep_E ingeval het attribuut typePlanobject de waarde enkelbestemming heeft en volgens domein Bestemmingshoofdgroep_D ingeval het attribuut typePlanobject de waarde dubbelbestemming heeft</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="189D2B77">artikelnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="60992C20">artikelnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F3EB4CB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="53AAC289">alleen het nummer in het format conform SVBP2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="65E60F0D"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45DC421C"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2DE10497"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2C79D538"><i>samengesteld attribuut:</i></p><p id="58F5A04E"><i>verwijzend naar specifieke regel</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="2A657023" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="7896C31C">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4AC80627">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="76A0DF1B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="149BFFF4">in format bestandsnaamconventie conform STRI2012; link naar een  specifieke positie binnen de regels</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="38DD3553">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1953964F">regels</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="36BA106B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B14A9CC">vaste waarde volgens domein Teksttype_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="3"><p id="54BBA107"><i>labelinfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3D1D695F"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2C603FEC"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0381157B"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" rowspan="5"><p id="4EC9D0BA" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="0F92F09F">tekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="1325BD76">letter-/tekencombinatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="29E2061A">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="5F10C9B1">lettercode conform PRABPK2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="65CECA05"><i>positie:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="49291907"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="48B1FB02"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6EF750EB"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" rowspan="3"><p id="41E2C2DC" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2BF6740C">plaatsingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="28CEA9D5">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="1B561012">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4FB34526">beschrijving van het plaatsingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="1D58B1D0">aanpijlingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6EAA2DD6">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="11AD4A34">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="40047040">beschrijving van het aanpijlingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2AC19C32">hoek</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6091F22B">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="5A044AD0">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="71B6FCAE">beschrijving van de hoek in graden waaronder de letter-/tekencombinatie geplaatst wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="2A1BF1F1">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0D1D6B5E">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3CACAD32">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="477D2BE8">beschrijving van vlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="2E58A318"><b>*</b>  multipliciteit:</p><p id="1975AAD6">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="5227826C">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="6"><p id="6EDF96D6">in de lichtgrijze cellen zijn die attributen weergegeven die uitsluitend voor de opbouw van de analoge bestemmingsplankaart kunnen worden gebruikt.</p></td></tr></tbody></table>

**identificatie (idn)** (verplicht):  
Elk object *Bestemmingsvlak* krijgt een eigen unieke identificatie binnen het
bestemmingsplan. Het samengestelde attribuut *identificatie* verwijst naar het
object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject** (verplicht):  
Het attribuut *typePlanobject* maakt het via het bijbehorende domein
*RuimtelijkPlanobject* mogelijk aan te geven welk object het betreft. Dit
domein kent daarvoor twee waarden: enkelbestemming en dubbelbestemming. Daaruit
moet worden gekozen.
"Enkel"bestemmingen zijn te allen tijde tezamen vlakdekkend binnen het
plangebied. Bij inpassingsplannen, bestemmingsplanherzieningen die alleen iets
toevoegen aan of verwijderen uit de vigerende bestemmingen en/of bijbehorende
regels is de vereiste van een door enkelbestemming vlakdekkend plangebied niet
van toepassing. Ook bij een wijzigingsplan hoeft het plangebied niet volledig te
worden bedekt door enkelbestemmingen. Conform IMRO is het toegestaan in deze
situaties de bestemming achterwege te laten. Doorgaans heeft het de voorkeur wel
een bestemming op te nemen, die van toepassing wordt verklaard in de planregels,
waar vervolgens wordt verwezen (met identificatienummer) naar het oorspronkelijk
plan. De volledige regels hoeven daardoor niet te worden overgenomen. Of
bestemmingen met bijbehorende regels wel/ niet worden opgenomen is aan de
bronhouder te bepalen en in de planregels te verantwoorden.
Bestemmingen kunnen ook de vorm van een zogenoemde dubbelbestemming hebben.
Onder een dubbelbestemming wordt een aparte bestemming verstaan die (een)
andere bestemming(en) willekeurig overlapt. Een voorbeeld kan de bestemming
"Leiding - Gas” zijn, die andere bestemmingen overlapt. In geval van
bijvoorbeeld de bestemming "Gemengd" is evenwel geen sprake van een
dubbelbestemming maar van meerdere bestemmingsfuncties binnen één bestemming.
Uit overweging van herkenbaarheid van een dubbelbestemming ten opzichte van de
enkelbestemming is het gewenst om deze als apart object te kunnen onderscheiden.
Voor dubbelbestemmingen geldt dat deze op gelijke wijze worden gecodeerd als
een enkelbestemming.

**plangebied** (verplicht):  
Voor elk object is een verwijzing noodzakelijk naar het object
*Bestemmingsplangebied* waar het object deel van uitmaakt. Dit attribuut
verwijst daartoe naar het attribuut *identificatie* van het bijbehorende object
*Bestemmingsplan­gebied*.

**naam** (verplicht):  
Iedere bestemming heeft een naam. Aan het attribuut *naam* wordt als waarde de
volledige naam van de bestemming, zoals deze luidt in de bestemmingsregel die
ernaar verwijst, meegegeven. De wijze waarop de naam van een bestemming tot
stand komt, is bepaald in de SVBP2012. Voor de naam van een bestemming zijn vier
varianten mogelijk:  
1.  Naam van de hoofdgroep hanteren. *Voorbeeld: Agrarisch*  
2.  Specifieke bestemmingsbenaming gebruiken. *Voorbeeld: Agrarisch - Akkerbouw*  
3.  Bestemming splitsen. *Voorbeeld : Gemengd - 1*  
4.  Bestemming onder de hoofdgroep Overig. *Voorbeeld: Enclave*

De systematiek van hoofdgroepen van bestemmingen in de <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> laat het toe een
bestemming te specificeren en slechts één of enkele functies van een hoofdgroep
binnen een bestemming mogelijk te maken.
Indien een functie niet in de lijst van de SVBP2012 voorkomt, dan dient
aansluiting te worden gezocht bij de meest passende hoofdgroep. Selectiviteit
kan gewenst zijn, zeker in geval van hoofdgroepen waarbij een veelheid aan
uiteenlopende hoofdfuncties aan de orde is. Denk hierbij aan hoofdgroepen zoals
Cultuur en Ontspanning en Maatschappelijk.
In de hoofdgroep Leiding komt zowel hoogspanning als hoogspanningsverbinding
voor. Het verschil tussen deze dubbelbestemmingen is dat een Leiding –
Hoogspanning een ondergrondse leiding betreft. Een Leiding -
Hoogspanningsverbinding betreft een bovengronds leiding.
Tot slot komen binnen veel hoofdgroepen ondergeschikte functies voor, zoals
groen, wegen, paden en water. Deze zijn niet bepalend voor de keuze van de
hoofdgroep. Bepalend voor die keuze zijn de genoemde hoofdfunctie(s).
Ondergeschikte, bij de hoofdfunctie(s) behorende functies kunnen altijd, naar
gelang de behoefte, aan de bestemmingsomschrijving worden toegevoegd, ook als
zij niet bij de betrokken hoofdgroep worden vermeld. Hetzelfde geldt voor
functies die ten dienste staan van de functie op basis waarvan de bestemming is
gekozen. Hierbij kan worden gedacht aan de combinatie sport en daaraan
ondergeschikte horeca en de combinatie bedrijf en daaraan ondergeschikte
detailhandel (bijvoorbeeld in ter plaatse vervaardigde goederen).
Een (dubbel)bestemming geeft aan waarvoor de gronden mogen worden gebruikt. Het
zijn zaken die men aan kan raken, in de grond aanwezig zijn of zichtbaar zijn.

**bestemmingshoofdgroep** (verplicht):  
Bij de <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> is een functielijst opgenomen. Bij de functies zijn hoofdgroepen
vermeld waarmee functies worden gekoppeld aan een hoofdgroep waaronder deze
bestemming moet worden gerangschikt. Daarbij wordt onderscheid gemaakt in
(enkel)bestemmingen en dubbelbestemmingen. Deze lijsten zijn tevens in het
IMRO2012 opgenomen als domeinlijsten.
Het attribuut *bestemmingshoofdgroep* is bedoeld om de gebruikte bestemming te
relateren aan de betreffende hoofdgroep. Dit geschiedt door in het waardeveld de
naam van de betreffende hoofdgroep op te nemen. Het domein *Bestemmingshoofdgroep_E* geeft de mogelijke waarden weer voor
(enkel)bestemmingen waaruit moet worden gekozen. Het domein *Bestemmingshoofdgroep_D* geeft de mogelijke waarden weer voor
dubbelbestemmingen waaruit moet worden gekozen. In het attribuut *typePlanobject* is opgenomen of het een enkelbestemming dan wel een
dubbelbestemming betreft.
Voor het geval de bestemming een voorlopige bestemming betreft, wordt alleen de
voorlopige bestemming gebruikt om de bijbehorende hoofdgroep te bepalen.

**artikelnummer** (verplicht):  
Het artikelnummer wordt als waarde bij het attribuut *artikelnummer*
meegegeven. Het format van het artikelnummer is voorgeschreven in de SVBP2012.

***verwijzingNaarTekstInfo*** (verplicht):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het betreffende object *Bestemmingsvlak*. Het attribuut verwijst
naar het samengestelde attribuut *TekstReferentie_BP*, bestaande uit de
attributen *verwijzingNaarTekst* en *typeTekst*.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object *Bestemmingsplangebied*: objectgericht in XML of niet-objectgericht in HTML
formaat. Het format dient overeenkomstig de afspraak over de
bestandsnaamconventies conform de STRI2012 te zijn. De keuze van de bronhouder
wordt vastgelegd in de *verwijzingNorm* bij dit bestemmingsplan.  
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hyper)link naar het soort document dat is aangegeven bij het attribuut*typeTekst* te worden opgenomen.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directorystructuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml\#fragment</u> of <u>bestandsnaam.htm\#fragment</u>.  
- **typeTekst** (verplicht)  
Hiermee wordt met de vaste waarde *regels* volgens het domein *Teksttype_BP*
aangegeven dat de tekst waarnaar verwezen wordt een regel betreft.

***labelInfo*** (facultatief):  
Dit attribuut, dat uitsluitend bedoeld is voor de analoge bestemmingsplankaart,
verwijst naar het samengestelde attribuut *Label*, bestaande uit de attributen *tekst* en het samengestelde attribuut *positie.*  
- **tekst** (verplicht)  
In het waardeveld van dit attribuut wordt de lettercode
(letter-/tekencombinaties) van de gebruikte bestemmingsnaam opgenomen.
In de Praktijkrichtlijn Analoge Bestemmingsplan Kaart (PRABPK2012) is
aangegeven welke lettercodes in de waarde van dit attribuut worden opgenomen
die (de hoofdgroep van) de bestemming aangegeven. Deze lettercode is een
verbeeldingsmiddel ten behoeve van de leesbaarheid van de analoge
bestemmingsplankaart. De lettercode bestaat uit hoofdletters. Bij de
digitale verbeelding worden deze lettercodes niet getoond, maar de waarde
van het attribuut *naam* wordt getoond na interactie met de digitale
verbeelding.  
- **positie** (verplicht, zo vaak als gewenst):  
Soms bestaat er aanleiding de letter-/tekencombinatie van het attribuut *tekst* meerdere keren binnen één bestemming op de analoge
bestemmingsplankaart te laten voorkomen. In dat geval worden meerdere
attributen *positie* meegegeven. Het attribuut *positie* verwijst naar het
samengestelde attribuut *Labelpositie*, bestaande uit de attributen *plaatsingspunt, aanpijlingspunt* en *hoek*.  
- **plaatsingspunt** (verplicht)  
Het is nodig dat een plaatsingspunt voor de lettercode wordt opgenomen. Het
plaatsingspunt van het label staat links beneden ten opzichte van de
labeltekst.
In het geval het bij de analoge bestemmingsplankaart gewenst is meerdere
dezelfde letter-/tekencombinaties binnen één bestemmingsvlak te plaatsen,
dan worden meerdere plaatsingspunten opgenomen.  
- **aanpijlingspunt** (indien gewenst)  
Soms kan een lettercode niet binnen het bijbehorende vlak op de analoge
bestemmingsplankaart worden geplaatst omdat de schaal van de analoge
bestemmingsplankaart dat niet toelaat. In dat geval wordt de lettercode
buiten dat vlak geplaatst. Er is dan een aanpijling naar dat vlak
noodzakelijk zodat duidelijk is waar de lettercode bij behoort. Voor dit
doel is het aanpijlingspunt noodzakelijk.  
- **hoek** (indien gewenst)  
Soms is het gewenst dat een lettercode onder een bepaalde hoek wordt
geplaatst. Voor dit doel is invullen van de waarde van die hoek
noodzakelijk.

**geometrie** (verplicht):  
Het object *Bestemmingsvlak* kent uitsluitend de geometrie van een vlak. Dit
attribuut kent daarom coördinaten in een vastgesteld format (GML).

## Klasse Aanduiding

### Algemeen  
Naast bestemmingsvlakken komen aanduidingen voor waarnaar de regels verwijzen.
De <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> geeft een zestal te onderscheiden typen aanduidingen aan. Deze
aanduidingen worden gerepresenteerd onder de Klasse *Aanduiding* in zes
(sub)klassen:  
-   *Bouwvlak;*  
-   *Functieaanduiding;*  
-   *Bouwaanduiding;*  
-   *Maatvoering;*  
-   *Figuur;*  
-   *Gebiedsaanduiding.*

De objecten uit de zes (sub)klassen *Aanduiding* hebben alle een relatie met een
object *Bestemmingsplangebied*. Aanduidingen kunnen daarnaast ook een relatie
hebben met een object *Bestemmingsvlak* of met andere aanduidingen. Voor een
eenvoudig hanteerbaar model, maar ook om een begrijpelijk toepasbaar model te
hebben, zijn niet alle relaties zinvol. Uitgesloten zijn daarom verwijzingen
naar andere aanduidingen van hetzelfde type en naar aanduidingen die zelf geen
gebied representeren. Daarnaast geldt dat de klasse *Bouwvlak* alleen een
relatie heeft met het object *Bestemmingsvlak* en de klasse *Gebiedsaanduiding* een relatie kan hebben met het object *Bestemmingsvlak.*
Daardoor resteren uiteindelijk alleen de relaties die in Figuur 5 in groen zijn
aangegeven. Het attribuut *aanduiding* bij de klassen *Functieaanduiding,
Bouwaanduiding, Maatvoering* en *Figuur* geeft deze mogelijke relaties van het
betreffende object aan. In de volgende subparagrafen wordt hier nader op
ingegaan.

Voor het coderen dient eerst de vraag gesteld te worden welke van de zes
(sub)klassen het betreft. In dat geval is het overzicht in Figuur 5 van
toepassing. Hierin wordt nader ingegaan op de onderscheiden (sub)klassen. De
(sub)klassen zelf worden ook object genoemd.

![](media/55ae7ea54729f3612c0ab14e69648d17.png)  

**Figuur 5 Relatiediagram aanduidingen**

### Klasse Bouwvlak  
Een bouwvlak is een gebied waarbinnen volgens de regels de mogelijkheden voor
bouwen nader worden benoemd. Bijna ieder bestemmingsplan kent bouwvlak­ken. Het
bouwvlak is meestal kleiner dan het bestemmingsvlak, maar kan ook even groot
zijn. Het bouw­vlak kent daarmee de geometrie van een vlak en wordt beschouwd
als een object. Het is mogelijk meerdere objecten *Bouwvlak* binnen het
bestemmingsplan toe te passen.

Bouwvlakken behoren altijd bij een bestemming, waardoor te allen tijde een
directe relatie aanwezig is tussen het object *Bouwvlak* en het object
*Bestemmingsvlak*. Wanneer een bouw­vlak, visueel be­schouwd, zich uitstrekt
over meerdere bestemmingen is des­ondanks sprake van meerdere bouwvlak­ken,
namelijk per onderscheiden bestemming op­ge­deeld in aparte objecten.

Sporadisch kan het voorkomen dat twee aparte bouwvlakken binnen één bestemming
in juridi­sche zin tezamen één bouwvlak moeten vormen. Bijvoorbeeld in geval van
twee bij elkaar be­horende agrari­sche bouw­percelen. In het geval beide
bouwvlakken binnen hetzelfde bijbehorende bestemmingsvlak liggen, zal de
geometrie van deze bouwvlakken een multivlak (multipoly­goon) zijn, waar­door
zij als één object worden beschouwd. In het andere geval zijn het twee aparte
objecten die elk behoren bij het bijbehorende bestemmingsvlak. In beide gevallen
zal (mogelijk) het object *Figuur*, nader aangewezen met de domeinwaarde *relatie* gebruikt worden om de relatie in de verbeelding zichtbaar te maken.

In Tabel 5 zijn de attributen benoemd, de waarden aangegeven die deze attributen
moeten bevatten en wordt aangegeven of het gebruik van het attribuut ver­plicht
is en of het attribuut meerdere malen mag worden gebruikt. Na de tabel is per
attri­buut een nadere toelichting gegeven.

**Tabel 5 Klasse Bouwvlak 0..n\***

<table id="d4e2691" style="width: 100%;"><caption>Klasse Bouwvlak 0..n*</caption><colgroup><col id="col1" style="width: 5.550651070403885%;"></col><col id="col2" style="width: 21.088060030898255%;"></col><col id="col3" style="width: 27.06907967336129%;"></col><col id="col4" style="width: 10.814389759435002%;"></col><col id="col5" style="width: 35.47781946590157%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="2A3C75ED">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C84D532">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3EF3BFAC">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="280D0187">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="26D382AB"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4C16399A"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0BACB718"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7BF8C7A4"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="052D587B" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="459918BB">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1D56A7BC">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="206D9D0F">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="282F000C" class="space-after">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="07EB9B46">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="74B07AF5">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="316A017D">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4AC7F53F">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 32 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="636B8CC0">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="30037F09">bouwvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="112D5B95">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="141F1868">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="395A497F">plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="57C25118">idn Bestemmingsplangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="54ADFC41">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="31B33117">identificatienummer van het plangebied</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="433C91C5">bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="05B10990">idn Bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="73C8885D">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F245AAF">identificatienummer van het bestemmingsvlak (enkel- of dubbelbestemming) waarbij het bouwvlak behoort</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="2D2C2C9B">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="12B7F2A1">bouwvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="35E3C66F">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7E404FC9">vaste, unieke waarde</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="101596CB">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27469309">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="598376F7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2377D280">beschrijving van vlak of multivlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="306A2F0D"><b>*</b>  multipliciteit:</p><p id="749BD37F">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="190D9DCF">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr></tbody></table>

**identificatie (idn)** (verplicht):  
Elk object *Bouwvlak* krijgt een eigen unieke identificatie binnen het
bestemmingsplan. Het samengestelde attribuut *identificatie* verwijst naar het
object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject** (verplicht):  
Een aanduiding is te beschouwen als een object waarvoor het domein
*RuimtelijkPlanobject* van toepassing is. Dit domein kent daarvoor de waarde
*bouwvlak* die als vaste waarde (au­tomatisch) wordt ingevuld.

**plangebied** (verplicht):  
Binnen elk object *Bouwvlak* is een verwijzing noodzakelijk naar het object *Bestemmingsplangebied* waar dit object deel van uitmaakt. Dit attribuut
krijgt daartoe de waarde van het attribuut *identificatie* van het bijbehorende
object *Bestemmingsplangebied*.

**bestemmingsvlak** (onder voorwaarde verplicht):    
Een bouwvlak heeft altijd een relatie met een bestemmingsvlak, behoudens enkele
uitzonderingen die hier onder worden toegelicht. De waarde van het attribuut
*identificatie* van het bijbehorende bestemmingsvlak wordt aan het bouwvlak
onder het attribuut *bestemmingsvlak* toegevoegd. Bij het plantype
inpassingsplan of wijzigingsplan, of indien bij het plangebied het attribuut de
waarde ‘ter vervanging van extern plan’ is opgenomen, is het mogelijk om geen
verwijzing van het bouwvlak naar de bestemming op te nemen. In deze situaties is
het namelijk toegestaan een bestemmingsplan te maken zonder bestemmingsvlakken.
Een nadere toelichting op de werkwijze is gegeven in Hoofdstuk 4 van deze
praktijkrichtlijn.

**naam** (verplicht):  
Aan het attribuut *naam* wordt als waarde de naam van de aanduiding, zoals deze
in de regels wordt gebruikt, meegegeven. Dit is hier de vaste waarde *bouwvlak*
aangezien slechts één type mogelijk is.

**geometrie** (verplicht):  
Het object *Bouwvlak* kent uitsluitend de geometrie van een vlak of multivlak.
Dit attribuut kent daarom coördinaten in een vastgesteld format (GML).

### Klasse Functieaanduiding  
De <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> geeft aan dat een functieaanduiding wordt gebruikt om de
gebruiksmogelijkheden binnen een bestemming of een gedeelte daarvan nader te
specificeren. De SVBP2012 geeft tevens aan welke aanduidingen mogen worden
gebruikt en hoe daarmee in relatie tot de planregels moet worden omgegaan.

De functieaanduiding slaat of op het gehele bestemmingsvlak of op een gedeelte
daarvan. De functieaanduiding wordt daarom gerepresenteerd door het gebied
waarop deze van toepassing is. Dit gebied heeft een eigen geometrie als vlak en
wordt daarmee beschouwd als het object *Functieaanduiding*. Het is mogelijk
meerdere objecten *Functieaanduiding* binnen het bestemmingsplan toe te passen.

Het object *Functieaanduiding* heeft altijd een relatie met een onderliggend
object. Dit kan zijn een *Bestemmingsvlak* of een *Gebiedsaanduiding*.
Indien het object *Functieaanduiding* behoort bij een bestemmingsvlak, wordt met
het attribuut *bestemmingsvlak* naar de identificatie (idn) van het object *Bestemmingsvlak,* waarbij het behoort, verwezen.

Indien het object *Functieaanduiding* behoort bij een gebiedsaanduiding wordt
met het attribuut *aanduiding* naar de idn van het object *Gebiedsaanduiding,*
waarbij het behoort, verwezen.
Het object *Functieaanduiding* verwijst met het attribuut *plangebied* altijd
naar de idn van het object *Bestemmingsplangebied*.

Het kan ook voorkomen dat meerdere, verschillende functieaanduidingen binnen
één bestemming noodzakelijk zijn omdat de regels dat vereisen. In dat geval
komt het object *Functieaanduiding* meerdere keren voor.

In Tabel 6 zijn de attributen benoemd, de waarden aangegeven die deze
attributen moeten bevatten en is aangegeven of het gebruik van het attribuut
verplicht is en of het attribuut meerdere malen mag worden gebruikt. Ook is
aangegeven of attributen gekoppeld worden, dat wil zeggen altijd in samenhang
moeten worden gebruikt. Na de tabel is per attribuut een nadere toe­lichting
gegeven.

**Tabel 6 Klasse functieaanduiding 0..n\***

<table id="d4e3025" style="width: 100%;"><caption>Klasse functieaanduiding 0..n*</caption><colgroup><col id="col1" style="width: 4.403231311867107%;"></col><col id="col2" style="width: 0.3868471953578337%;"></col><col id="col3" style="width: 0.8192058254636477%;"></col><col id="col4" style="width: 6.39435658209125%;"></col><col id="col5" style="width: 17.032654454431675%;"></col><col id="col6" style="width: 30.640573444077823%;"></col><col id="col7" style="width: 6.451245875526227%;"></col><col id="col8" style="width: 33.871885311184435%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="799A910E">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="39BBBEDF">Waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7296435B">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09A2EBCE">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="1D7B6D53"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4A49D696"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0DBA16D5"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="370A90CB"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="5713CB6D" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="3AD30815">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4CE9EBD0">Waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="450870C4">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3AC6ACB4">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="53B9BFF0">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="180529B0">Waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="191D1411">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0B977C76">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 32 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="6E2E807D">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09043266">Functieaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="010E379E">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="19786398">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="6C5B87F8">plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0E7C2604">idn Bestemmingsplangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4BCB10BD">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="484DFFB9">identificatienummer van het plangebied</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="5848A2D1">bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="759B2010">idn Bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B29F47B">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7394F776">identificatienummer van het bestemmingsvlak, indien de functieaanduiding behoort bij een bestemmingsvlak; anders attribuut aanduiding gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="0CD647D3">aanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="138E25FA">idn Gebiedsaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4F539465">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5470B434">identificatienummer van de aanduiding, indien de functieaanduiding behoort bij een gebiedsaanduiding; anders attribuut bestemmingsvlak gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="022410A3">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3C9EF8C9">naam Functieaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="39BAFA02">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5515F80A">de<i> </i>volledige naam van de functieaanduiding volgens de in de SVBP2012 opgenomen regel </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="5"><p id="3E392D03"><i>labelinfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3280B07F"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0DFFBAE7"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="26B1DD54"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="3" rowspan="5"><p id="49752708" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="48487244">tekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="1E547A17">letter-/tekencombinatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="29DC8099">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0B3E48EC">als op analoge bestemmingsplankaart verbeeld conform PRABPK2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="24FCC51F"><i>positie:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="10230803"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2AF71516"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="63F0B718"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" rowspan="3"><p id="0E2CBB2F" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0B2B91D9">plaatsingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2186E29D">Coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4EB05E07">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="5F1406D6">beschrijving van het plaatsingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="7B100CA7">aanpijlingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="31C25263">Coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="06DF7337">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4553B0E3">beschrijving van het aanpijlingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0B841FA5">hoek</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="66BEB5F6">Waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3D5780F9">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="60FBABCB">beschrijving van de hoek in graden waaronder de letter-/tekencombinatie geplaatst wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="06BD3325"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="235FBE20"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2B0DA77F"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45DF6CC2"><i>samengesteld attribuut:</i></p><p id="275C1C1B"><i>verwijzend naar specifieke regel</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="398D954B" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="5A3A2A3E">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="04736EFC">Link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B756095">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="41072652">in format bestandsnaamconventie conform STRI2012; link naar een  specifieke positie binnen de regels</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="1F88F432">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="640CD7BC">Regels</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5BBD42A1">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="06B1F395">vaste waarde volgens domein Teksttype_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="2EC97F4A">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="03250976">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3EE8A399">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7DD8F31B">beschrijving van vlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="8"><p id="3F880EA1">multipliciteit:</p><p id="61A60144">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="388B722F">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="8"><p id="497E347C">in de lichtgrijze cellen zijn die attributen weergegeven die uitsluitend voor de opbouw van de analoge bestemmingsplankaart kunnen worden gebruikt.</p></td></tr></tbody></table>

**identificatie (idn)** (verplicht):  
Elk object *Functieaanduiding* krijgt een eigen unieke identificatie binnen het
bestemmingsplan. Het samengestelde attribuut *identificatie* verwijst naar het
object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject** (verplicht):  
Een aanduiding is te beschouwen als een object waarvoor het domein
*RuimtelijkPlanobject* van toe­passing is. Dit domein kent daarvoor de waarde
*functieaanduiding* die als vaste waarde wordt ingevuld.

**plangebied** (verplicht):  
Binnen elk object *Functieaanduiding* is een verwijzing noodzakelijk naar het
object *Bestemmingsplangebied* waar dit object deel van uitmaakt. Dit attribuut
krijgt daartoe de waarde van het attri­buut *identificatie* van het bijbehorende
object *Bestemmingsplan­gebied*.

**bestemmingsvlak** (onder voorwaarde verplicht) **:**  
Aangezien er (meestal) een directe relatie aanwezig is tussen een
functieaanduiding en een onder­liggend bestemmingsvlak is dit attribuut hier
onder voorwaarde als verplicht opgenomen. Het attribuut kent als waarde de
inhoud van het attribuut *identificatie* van het bijbehorende be­stemmingsvlak.
In­dien de functieaanduiding evenwel behoort bij een gebiedsaanduiding dient dit
attribuut niet te worden gebruikt, maar het hierna volgende attribuut
*aanduiding*.
Bij het plantype inpassingsplan of wijzigingsplan, of indien bij het plangebied
het attribuut de waarde ‘ter vervanging van extern plan’ is opgenomen, is het
mogelijk om geen verwijzing van de functieaanduiding naar de bestemming op te
nemen. In deze situaties is het namelijk toegestaan een bestemmingsplan te maken
zonder bestemmingsvlakken. Een nadere toelichting op de werkwijze is gegeven in
Hoofdstuk 4 van deze praktijkrichtlijn.

**aanduiding** (onder voorwaarde verplicht):  
Indien de functieaanduiding behoort bij een gebiedsaanduiding dient als waarde
van dit attri­buut de identificatie (idn) van het bijbehorende attribuut
*gebiedsaanduiding* te worden opge­nomen.
Het attribuut is facultatief bij de plantypen inpassingsplan, wijzigingsplan of
bij het gedeeltelijk herzien van een bestemmingsplan.

**naam** (verplicht):  
De werkwijze om te komen tot de naam van een functieaanduiding is bepaald in de
SVBP2012. De waarde van het attribuut *naam* kan door de bronhouder gekozen
worden uit de lijst van functies die is opgenomen als bijlage van de SVBP2012.
In het geval de gewenste functie niet in de functielijst voorkomt, is de naam
van de gebruikte functieaanduiding door de bronhouder te bepalen conform
‘variant 2 – specifieke functie opnemen’ van de SVBP2012 onder
functieaanduidingen. Deze variant bepaalt dat er ook gewerkt kan worden met
specifieke functies. De naam van een specifieke functie wordt geheel met kleine
letters geschreven en wordt als volgt opgenomen:  
[specifieke vorm van] [spatie] \<\<hoofdgroep \>\> [spatie] [-] [spatie]
\<specificatie\>.  
In het geval dat een specifieke functie niet is toegestaan op een locatie in het
bestemmingsplan, wordt deze uitgesloten functie als volgt opgenomen:  
[specifieke vorm van] [spatie] \<\<hoofdgroep\>\> [spatie] [uitgesloten]
[spatie] [-] [spatie] \<specificatie\>  
Het attribuut *naam* is essentieel voor een juist juridisch gebruik van het
bestemmingsplan. Bij het raadplegen van een bestemmingsplan zal de waarde van
het attribuut *naam* getoond worden. De waarde van het attribuut *naam* moet
daartoe identiek zijn aan de functie die in de planregel wordt genoemd.

***labelInfo*** (facultatief):  
De waarde van dit attribuut is uitsluitend bedoeld voor de weergave op de
analoge bestemmingsplankaart volgens de PRABPK2012. Het kan zijn dat vanuit de
regels meer­dere verschillende functieaanduidingen binnen één bestemmingsvlak
moeten worden opgenomen. In dat geval komt het object *Functieaan­duiding*
meerdere keren voor. Het attri­buut *labelInfo* verwijst naar het samengestelde
attri­buut *Label*, bestaande uit de attributen *tekst* en *positie.*  
- **tekst** (verplicht)  
Het attribuut *tekst* bevat de exacte en complete weergave van de
functieaanduiding zoals die op de analoge bestemmingsplankaart moet worden
weergegeven. Voor het gewenste format van de weergave, bestaande uit een
letter-/tekencombinatie tussen haakjes "(…)", wordt verwezen naar de
PRABPK2012. Bij de digitale verbeelding wordt deze letter-/tekencombinatie
niet getoond, maar in plaats daarvan de waarde van het attri­buut *naam*.  
- **positie** (verplicht, zo vaak als gewenst):  
Soms bestaat er aanleiding de letter-/tekencombinatie van het attri­buut *tekst* meerdere keren binnen één bestemming op de analoge bestemmingsplan
kaart te laten voorkomen. In dat geval worden meerdere attributen *positie*
meegegeven. Het attribuut *positie* verwijst naar het samengestelde
attri­buut *Labelpositie*, bestaande uit de attributen *plaatsingspunt,
aanpijlingspunt* en *hoek*.  
- **plaatsingspunt** (verplicht)  
Het is nodig dat een plaatsingspunt voor de letter-/tekencombinatie wordt
opgenomen. Het plaatsingspunt van het label links beneden ten opzichte van
de labeltekst.
In het geval het bij de analoge bestemmingsplankaart ge­wenst is meerdere
dezelfde letter-/tekencombinaties binnen één bestemmingsvlak of
gebiedsaanduiding te plaatsen, dan worden meerdere plaatsingspunten
opgenomen.  
- **aanpijlingspunt** (indien gewenst)  
Soms kan de letter-/tekencombinatie niet binnen het bijbehorende vlak op de
analoge bestemmingsplankaart worden geplaatst omdat de schaal van de analoge
bestemmingsplankaart dat niet toelaat. In dat geval wordt de
letter-/tekencombinatie buiten dat vlak geplaatst. Er is dan een aanpijling
naar dat vlak noodzakelijk zodat duidelijk is waar de
letter-/tekencombinatie bij behoort.  
- **hoek** (indien gewenst)  
Soms is het gewenst dat de letter-/tekencombinatie onder een bepaalde hoek
op de analoge bestemmingsplankaart wordt geplaatst. Voor dit doel is de
waarde van die hoek noodzakelijk en dient te worden ingevuld.

***verwijzingNaarTekstInfo*** (facultatief):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het bijbehorende object. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_BP*, bestaande uit de attributen
*verwijzingNaarTekst* en *typeTekst*.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Bestemmingsplangebied*: objectgericht in XML of niet-objectgericht in HTML
formaat. Het format dient overeen­komstig de afspraak over de
bestandsnaamconventies conform de STRI2012 te zijn. De keuze van de bronhouder
wordt vastgelegd in de *verwijzingNorm* bij dit bestemmingsplan.  
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgeno­men.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directory­structuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml­\#fragment</u> of ,<u>bestandsnaam.htm­\#fragment</u>.  
- **typeTekst** (verplicht)  
Hiermee wordt met de vaste waarde *regels* volgens het domein *Teksttype_BP*
aangegeven dat de tekst waarnaar verwezen wordt een regel betreft.

**geometrie** (verplicht):  
Het object *Functieaanduiding* kent uitsluitend de geometrie van een vlak. Dit
attribuut kent daarom coördinaten in een vastgesteld format (GML).

### Klasse Bouwaanduiding  
De <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> geeft aan dat een bouwaanduiding wordt gebruikt als aanduiding met
betrekking tot de wijze van bouwen, dan wel de verschijningsvorm van bouwwerken.
De SVBP2012 geeft tevens aan welke aanduidingen mogen worden gebruikt en hoe
daarmee in relatie tot de regels moet worden omgegaan.
De bouwaanduiding slaat of op het gehele bestemmingsvlak of op een gedeelte
daarvan. De bouwaanduiding wordt daarom gerepresenteerd door het gebied waarop
deze van toepassing is. Dit gebied heeft een eigen geometrie als vlak en wordt
daarmee beschouwd als het object *Bouwaanduiding*.

Het object *Bouwaanduiding* heeft altijd een relatie met een onderliggend
object. Dit kan zijn een *Bestemmingsvlak*, *Bouwvlak* of een
*Gebiedsaanduiding* (zie Figuur 5 en Tabel 7).

Indien het object *Bouwaanduiding* behoort bij een bestemmingsvlak, wordt met
het attribuut *bestemmingsvlak* naar de identificatie (idn) van het object
*Bestemmingsvlak,* waarbij het behoort, verwezen.
Indien het object *Bouwaanduiding* behoort bij een gebiedsaanduiding wordt met
het attribuut *aanduiding* naar de idn van het object *Gebiedsaanduiding,*
waarbij het behoort, verwezen.
Het object *Bouwaanduiding* verwijst met het attribuut *plangebied* altijd naar
de idn van het object *Bestemmingsplangebied*. Het is mogelijk meerdere
objecten *Bouwaanduiding* binnen het bestemmingsplan toe te passen.

Het kan ook voorkomen dat meerdere, verschillende bouwaanduidingen binnen één
bestemming noodzakelijk zijn omdat de regels dat vereisen. In dat geval komt
het object *Bouwaanduiding* meerdere keren voor. In het geval het voor de
leesbaarheid van de analoge bestemmingsplankaart gewenst is dezelfde lettercode
voor de bouwaanduiding binnen één bestemmingsvlak, bouwvlak of
gebiedsaanduiding een of meerdere keren te herhalen, dan dient dit te
geschieden door meerdere plaatsingspunten aan te geven.

In Tabel 7 zijn de attributen benoemd, de waarden aangegeven die deze
attri­buten moeten bevatten en is aangegeven of het gebruik van het attribuut
verplicht is en of het attribuut meerdere malen mag worden gebruikt. Ook is
aangegeven of attributen gekoppeld worden, dat wil zeggen altijd in samenhang
moeten worden gebruikt. Na de tabel is per attribuut een nadere toelichting
gegeven.

**Tabel 7 Klasse Bouwaanduiding 0..n\***

<table id="d4e3818" style="width: 100%;"><caption>Klasse Bouwaanduiding 0..n*</caption><colgroup><col id="col1" style="width: 4.3919664533215625%;"></col><col id="col2" style="width: 0.5958949459280511%;"></col><col id="col3" style="width: 5.462370337673803%;"></col><col id="col4" style="width: 15.316707128669169%;"></col><col id="col5" style="width: 25.744868682410065%;"></col><col id="col6" style="width: 12.82277642904436%;"></col><col id="col7" style="width: 35.66541602295299%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="6C8E8DD9">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="33E4A23D">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6530C0EB">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1A65F182">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="0910F527"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1F2B6DD3"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6020F0AC"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6ABDD916"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="3AC5CA40" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="277F35A2">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="563959E6">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="713AA26B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5380D70B">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="5ED9B77E">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="61614C31">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6CB4D175">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6FD477A7">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 32 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="0CC03A18">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45815F2B">bouwaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0F2CD428">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45D3CCB6">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="1C7A4714">plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1A059D24">idn Bestemmingsplangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="646A1D81">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="55FADD3E">identificatienummer van het plangebied</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="314C67B4">bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B333084">idn Bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="55D926C5">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="06B14636">identificatienummer van bestemmingsvlak, indien de bouwaanduiding behoort bij een bestemmingsvlak; anders attribuut aanduiding gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="738011BF">aanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0DA3E079">idn Bouwvlak of idn Gebiedsaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62E72A44">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="594D6844">identificatienummer van aanduiding, indien bouwaanduiding behoort bij een bouwvlak of een gebiedsaanduiding; anders attribuut bestemmingsvlak gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="57593D56">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1592FFB6">naam Bouwaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="43689912">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1EC52AF9">één van de waarden uit domein Bouwaanduidingen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="4"><p id="2735C473"><i>labelinfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="54BE451F"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="226E8BD5"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="05F72E7E"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2" rowspan="5"><p id="245A808D" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="5C746F47">tekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="79DDDBDE">letter-/tekencombinatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4F48D520">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="382501AB">als op analoge bestemmingsplankaart verbeeld conform PRABPK2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="66557F1A"><i>positie:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="78FA050C"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2AA0A030"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6F2E0A9B"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" rowspan="3"><p id="7575B352" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="5C92D702">plaatsingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="084F3D73">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="62F51075">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6E8554BC">beschrijving van het plaatsingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="621A76BB">aanpijlingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2C49D141">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="26ED84FB">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="011346E9">beschrijving van het aanpijlingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="7A8DC1EC">hoek</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2B558068">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0A2BF16C">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="52D97554">beschrijving van de hoek in graden waaronder de letter-/tekencombinatie geplaatst wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="6610195C"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="12A9D4F6"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="185BA27C"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0E751C9B"><i>samengesteld attribuut:</i></p><p id="3DD72A92"><i>verwijzend naar specifieke regel</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="5954D833" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="00F9736E">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7CCDFBE7">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0545CEEC">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="621FF871">in format bestandsnaamconventie conform STRI2012; link naar een  specifieke positie binnen de regels</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="798B305E">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6BCB703F">regels</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="769E0284">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="26D375DE">vaste waarde volgens domein Teksttype_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="4E590F05">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="49A2010B">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="670ECEBF">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E1E67BA">beschrijving van vlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="7"><p id="1655D5AA"><b>*</b>  multipliciteit:</p><p id="75F28A09">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="74A66CB5">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="7"><p id="75D1173B">in de lichtgrijze cellen zijn die attributen weergegeven die uitsluitend voor de opbouw van de analoge bestemmingsplankaart kunnen worden gebruikt.</p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):  
Elk object *Bouwaanduiding* krijgt een eigen unieke identificatie binnen het
bestemmingsplan. Het samengestelde attribuut *identificatie* verwijst naar het
object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.
 
**typePlanobject** (verplicht):  
Een aanduiding is te beschouwen als een object waarvoor het domein
*RuimtelijkPlanobject* van toe­passing is. Dit domein geeft daarvoor de waarde
*bouwaanduiding* die als vaste waarde wordt ingevuld.

**plangebied** (verplicht):  
Binnen elk object *Bouwaanduiding* is een verwijzing noodzakelijk naar het
object *Bestem­mings­plan­gebied* waar dit object deel van uitmaakt. Dit
attribuut krijgt daartoe de waarde van het attri­buut *identi­ficatie* van het
bijbehorende object *Bestemmingsplan­gebied*.

**bestemmingsvlak** (onder voorwaarde verplicht) **:**  
Aangezien er (meestal) een directe relatie aanwezig is tussen een bouwaanduiding
en een onder­liggend bestemmingsvlak is dit attribuut hier als verplicht
opgenomen. Het attribuut kent als waarde de inhoud van het attribuut
*identificatie* van het bijbehorende bestemmingsvlak. In­dien de bouwaandui­ding
evenwel behoort bij een gebiedsaanduiding dient dit attribuut niet te worden
gebruikt, maar het hierna volgende attribuut *aanduiding*.
Bij het plantype inpassingsplan of wijzigingsplan, of indien bij het plangebied
het attribuut de waarde ‘ter vervanging van extern plan’ is opgenomen, is het
mogelijk om geen verwijzing van de bouwaanduiding naar de bestemming op te
nemen. In deze situaties is het namelijk toegestaan een bestemmingsplan te maken
zonder bestemmingsvlakken. Een nadere toelichting op de werkwijze is gegeven in
Hoofdstuk 4 van deze praktijkrichtlijn.

**aanduiding** (onder voorwaarde verplicht):  
Indien de bouwaanduiding behoort bij een bouwvlak of een gebiedsaanduiding dient
als waarde van dit attri­buut de identificatie (idn) van het bijbehorende
attribuut *bouwvlak* respectievelijk *gebiedsaan­duiding* te worden opge­nomen.

Het attribuut is facultatief bij de plantypen inpassingsplan, wijzigingsplan of
bij het gedeeltelijk herzien van een bestemmingsplan.

**naam** (verplicht):  
De waarde van het attribuut *naam* is een van de vaste waarden uit de lijst van
bouwaanduidingen die wordt voorgeschreven door de SVBP2012 en die is opgenomen
in IMRO2012 als domein *Bouwaanduidin­gen.*
In het geval de gewenste bouwaanduiding niet voorkomt in de lijst van
bouwaanduidingen, kan er gewerkt worden met specifieke aanduidingen. Dit conform
‘variant 2- verzamelaanduiding opnemen’ onder bouwaanduidingen in de SVBP2012.
De naam van een specifieke aanduiding wordt met kleine letters geschreven en
wordt als volgt opgenomen:  
[specifieke bouwaanduiding] [spatie] [-] [spatie] \<specificatie\>  
Overeenkomstig de SVBP2012 kent het domein *Bouwaanduidingen* ook waarden die
kunnen worden uitgesloten. Er wordt dan gebruik gemaakt van een negatieve
specifieke aanduiding. De naam van de negatieve verzamelaanduiding wordt met
kleine letters geschreven en wordt als volgt opgenomen:  
[specifieke bouwaanduiding uitgesloten] [spatie] [-] [spatie] \<specificatie\>  
Het attribuut *naam* is essentieel voor een juist juridisch gebruik van het
bestemmingsplan. Bij de digi­tale raadpleging van een bestemmingsplan zal de
waarde van het attribuut *naam* getoond worden. De waarde van het attribuut
*naam* moet daartoe identiek zijn aan de bouwaanduiding die in de planregel
wordt genoemd.

***labelInfo*** (faculatief):  
De waarde van dit attribuut is uitsluitend bedoeld voor de weergave op de
analoge bestemmingsplankaart volgens de PRABPK2012. Het kan zijn dat vanuit de
regels meer­dere verschillende bouwaanduidingen binnen één bestemmingsvlak
moeten worden opgenomen. In dat geval komt het object *Bouwaan­duiding* meerdere
keren voor. Het attri­buut *labelInfo* verwijst naar het samengestelde
attri­buut *Label*, bestaande uit de attributen *tekst* en *positie.*  
- **tekst** (verplicht)  
Het attribuut *tekst* bevat de exacte en complete weergave van de
bouwaanduiding zoals die op de analoge bestemmingsplankaart moet worden
verbeeld. Voor het gewenste format van de weergave, bestaande uit een
letter-/tekencombinatie tussen cursieve blokhaken "*[…]*", wordt verwezen
naar de PRABPK2012. Bij de digitale verbeelding wordt deze
letter-/tekencombinatie niet getoond, maar in plaats daarvan de waarde van
het attri­buut *naam*.  
- **positie** (verplicht, zo vaak als gewenst): 
Soms bestaat er aanleiding de letter-/tekencombinatie van het attri­buut *tekst* meerdere keren binnen één bestemming op de analoge
bestemmingsplankaart te laten voorkomen. In dat geval worden meerdere
attributen *positie* meegegeven. Het attribuut *positie* verwijst naar het
samengestelde attri­buut *Labelpositie*, bestaande uit de attributen *plaatsingspunt, aanpijlingspunt* en *hoek*.  
- **plaatsingspunt** (verplicht)  
Het is nodig dat een plaatsingspunt voor de letter-/tekencombinatie wordt
opgenomen. Het plaatsingspunt van het label links beneden ten opzichte van
de labeltekst.
In het geval het bij de analoge bestemmingsplankaart ge­wenst is meerdere
dezelfde letter-/tekencombinaties binnen één bestemmingsvlak of
gebiedsaanduiding te plaatsen, dan worden meerdere plaatsingspunten
opgenomen.  
- **aanpijlingspunt** (indien gewenst)  
Soms kan de letter-/tekencombinatie niet binnen het bijbehorende vlak op de
analoge bestemmingsplankaart worden geplaatst omdat de schaal van de analoge
bestemmingsplankaart dat niet toelaat. In dat geval wordt de
letter-/tekencombinatie buiten dat vlak geplaatst. Er is dan een aanpijling
naar dat vlak noodzakelijk zodat duidelijk is waar de
letter-/tekencombinatie bij behoort.  
- **hoek** (indien gewenst)  
Soms is het gewenst dat de letter-/tekencombinatie onder een bepaalde hoek
op de analoge bestemmingsplankaart wordt geplaatst. Voor dit doel is de
waarde van die hoek noodzakelijk en dient te worden ingevuld.

***verwijzingNaarTekstInfo*** (facultatief):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het bijbehorende object. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_BP*, bestaande uit de attributen *verwijzingNaarTekst* en *typeTekst*.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Bestemmingsplangebied*: objectgericht in XML of niet-objectgericht in HTML
formaat. Het format dient overeen­komstig de afspraak over de
bestandsnaamconventies conform de STRI2012 te zijn. De keuze van de bronhouder
wordt vastgelegd in de *verwijzingNorm* bij dit bestemmingsplan.  
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgeno­men.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directory­structuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml­\#fragment</U> of <u>bestandsnaam.htm­\#fragment</u>.  
- **typeTekst** (verplicht)  
Hiermee wordt met de vaste waarde *regels* volgens het domein *Teksttype_BP*
aangegeven dat de tekst waarnaar verwezen wordt een regel betreft.

**geometrie** (verplicht):  
Het object *Bouwaanduiding* kent uitsluitend de geometrie van een vlak. Dit
attribuut kent daarom coördinaten in een vastgesteld format (GML).

### Klasse Maatvoering  
De <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> geeft aan dat alle aanduidingen die betrekking hebben op de
afmetingen, percentages, oppervlakten, hellingshoeken en aantallen ten aanzien
van het bouwen en het gebruik maatvoeringsaanduidingen zijn. De SVBP2012 geeft
tevens aan welke aanduidingen mogen worden gebruikt en hoe daarmee in relatie
tot de regels moet worden omgegaan.

Het object *Maatvoering* heeft altijd een relatie met een onderliggend object.
Dit kan zijn een *Bestemmingsvlak*, een *Bouwvlak* of een *Gebiedsaanduiding*.
Indien het object *Maatvoering* behoort bij een bestemmingsvlak, wordt met het
attribuut *bestemmingsvlak* naar de identificatie (idn) van het object
*Bestemmingsvlak,* waarbij het behoort, verwezen.
Indien het object *Maatvoering* behoort bij een bouwvlak of bij een
gebiedsaanduiding wordt met het attribuut *aanduiding* naar respectievelijk de
idn van het object *Bouwvlak* of van het object *Gebiedsaanduiding,* waarbij het
behoort, verwezen.

Het object *Maatvoering* verwijst met het attribuut *plangebied* altijd naar de
idn van het object *Bestemmingsplangebied*.

Het object *Maatvoering* wordt gerepresenteerd door het gebied waarop deze van
toepassing is. Dit gebied heeft een eigen geometrie als vlak en wordt daarmee
beschouwd als het object *Maatvoering*.
Binnen het object *Maatvoering* kunnen meerdere waarden voorkomen die op de
analoge bestemmingsplankaart in de vorm van een maatvoeringsymbool (ook wel
matrix of matrixsymbool genoemd)worden weergegeven. Dit maatvoeringsymbool bevat
een of meerdere waarden waarnaar vanuit de regels wordt verwezen. Het kan ook
voorkomen dat meerdere, verschillende maatvoeringen binnen één bestemming
noodzakelijk zijn omdat de regels dat vereisen. In dat geval komt het object
*Maatvoering* meerdere keren voor.

In Tabel 8 zijn de attributen benoemd, de waarden aangegeven die deze attributen
moeten bevatten en is aangegeven of het gebruik van het attribuut verplicht is
en of het attribuut meerdere malen maal worden gebruikt. Ook is aangegeven of
attributen gekoppeld worden, dat wil zeggen altijd in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven.

**Tabel 8 Klasse Maatvoering 0..n\***

<table id="d4e4612" style="width: 100%;"><caption>Klasse Maatvoering 0..n*</caption><colgroup><col id="col1" style="width: 4.403001544912823%;"></col><col id="col2" style="width: 1.004193334804679%;"></col><col id="col3" style="width: 8.761862723460604%;"></col><col id="col4" style="width: 19.67556830721695%;"></col><col id="col5" style="width: 25.755903774001325%;"></col><col id="col6" style="width: 6.819686603398808%;"></col><col id="col7" style="width: 33.579783712204815%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="40102926">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="470775BD">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="043CB2D3">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27A4EFFE">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="3D92DD7F"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5A5202BB"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="173FAE9B"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="011A2EA7"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="159F04D7" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="03832D84">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5A75E0CA">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="773D9C4A">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11A1CD34" class="space-after">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="6584AF7A">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2E4CD00F">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="53D6A923">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6D238DD0">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 32 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="2705B9B7">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="21B27B3F">maatvoering</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="572EEA97">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DEA805E">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="7D7E1502">plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="68F8F319">idn Bestemmingsplangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3192EC36">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C7C9D32">identificatienummer van het plangebied</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="03E1EAC2">bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0CF7D90A">idn Bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B4E0FD4">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1CC1FE87">identificatienummer van bestemmingsvlak, indien de maatvoering behoort bij een bestemmingsvlak; anders attribuut aanduiding gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="2C82D891">aanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="48EDE2E4">idn Bouwvlak of idn Gebiedsaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="69260EC8">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7411F335">identificatienummer van aanduiding, indien de maatvoering behoort bij een bouwvlak of een gebiedsaanduiding; anders attribuut bestemmingsvlak gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="70FFCEE8">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="20B1904C">naam maatvoeringaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="56F96A62">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="397302F9">opsomming van alle waardetypen die in dit maatvoeringsobject voorkomen. Elk van elkaar gescheiden door een komma en een spatie.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="4"><p id="1BD055E6"><i>symboolInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="227C0C55"><i>SymboolEnPositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0BF1E010"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="592D8EB7"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2" rowspan="5"><p id="0FF4B6B5" style="writing-mode: vertical-rl; rotate: 180deg;"><i>SymboolEnPositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="6031B5A5">symboolcode</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6E1255C1">code</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="5070ACA5">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0D9C2690">als op analoge bestemmingsplankaart verbeeld conform PRABPK2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="03166928"><i>positie:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0DCCE4B9"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="086F41BD"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2F39A071"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" rowspan="3"><p id="6CDE7BFB" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="7FEE47D9">plaatsingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="734740F9">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0F947517">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4D5CA4BC">beschrijving van het plaatsingspunt van het symbool</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0383ECB6">aanpijlingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="771CAEEC">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="226F8567">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2B5D8906">beschrijving van het aanpijlingspunt van het symbool</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4F481FA0">hoek</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="1CF2152B">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0E22D682">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="698C026E">beschrijving van de hoek in graden waaronder het symbool geplaatst wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="7BA455EA"><i>maatvoeringInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6A80F2A8"><i>WaardeEnType</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6FEA1296"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="01D7F27E"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="3"><p id="11DF2335" style="writing-mode: vertical-rl; rotate: 180deg;"><i>WaardeEnType</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="6399CBA6">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1E267FF7">getal</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4607E658">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="381C9FFA">alleen het getal van de waarde</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="007110C0">waardeType</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0C9C3AEB">naam van het type</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="608D0071" class="space-after">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4D075F1D">één van de waarden volgens domein OmvangWaarde of vrije tekst ingeval de waarde niet voorkomt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="3"><p id="0906EC74">verwijzingNaarSymboolcode</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="69A9C34E">code</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="30B664C6">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6044C6CF">gebruikte symboolcode behorende bij waardeType</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="789B2125"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7253832C"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="08DC1D35"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7F593538"><i>samengesteld attribuut:</i></p><p id="1C5BA3AD"><i>verwijzend naar specifieke regel</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="3D9B4C45" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="7BA6A5FC">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="433AB14D">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DB0C172">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40FA1086">in format bestandsnaamconventie conform STRI2012; link naar een  specifieke positie binnen de regels</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="19CECEB9">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2DDD3D4B">regels</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B852590">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5DFECB72">vaste waarde volgens domein Teksttype_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="283CAA09">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3A53EC7E">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40A473B7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7FF81A6E">beschrijving van vlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="7"><p id="5DBCEF32"><b>*</b>  multipliciteit:</p><p id="343141A2">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="60AFAFFA">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="7"><p id="269577DB">in de lichtgrijze cellen zijn die attributen weergegeven die uitsluitend voor de opbouw van de analoge bestemmingsplankaart kunnen worden gebruikt.</p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):
Elk object *Maatvoering* krijgt een eigen unieke identificatie binnen het
bestemmingsplan. Het samengestelde attribuut *identificatie* verwijst naar het
object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject** (verplicht):  
Een aanduiding is te beschouwen als een object waarvoor het domein
*RuimtelijkPlanobject* van toe­passing is. Dit domein geeft daarvoor de waarde
*maatvoering* die als vaste waarde wordt ingevuld.

**plangebied** (verplicht):  
Binnen elk object *Maatvoering* is een verwijzing noodzakelijk naar het object
*Bestem­mings­plan­gebied* waar dit object deel van uitmaakt. Dit attribuut
krijgt daartoe de waarde van het at­tri­buut *identificatie* van het
bijbehorende object *Bestemmingsplan­gebied*.

**bestemmingsvlak** (onder voorwaarde verplicht) **:**  
Aangezien er (meestal) een directe relatie aanwezig is tussen een
maatvoeringaanduiding en een onderliggend bestemmingsvlak is dit attribuut hier
als verplicht opgenomen. Het attribuut kent als waarde de inhoud van het
attribuut *identificatie* van het bijbehorende bestemmings­vlak. Indien de
maatvoeringaanduiding evenwel behoort bij een bouwvlak of een gebiedsaan­duiding
dient dit attribuut niet te worden gebruikt, maar het hierna volgende attribuut
*aandui­ding*.
Bij het plantype inpassingsplan of wijzigingsplan, of indien bij het plangebied
het attribuut de waarde ‘ter vervanging van extern plan’ is opgenomen, is het
mogelijk om geen verwijzing van de maatvoering naar de bestemming op te nemen.
In deze situaties is het namelijk toegestaan een bestemmingsplan te maken zonder
bestemmingsvlakken. Een nadere toelichting op de werkwijze is gegeven in
Hoofdstuk 4 van deze praktijkrichtlijn.

**aanduiding** (onder voorwaarde verplicht):  
Indien de maatvoeringaanduiding behoort bij een gebiedsaanduiding of bouwvlak
dient als waarde van dit attribuut de identificatie (idn) van het bijbehorende
attribuut *gebiedsaanduiding* of *bouwvlak* te worden opgenomen.
Het attribuut is facultatief bij de plantypen inpassingsplan en wijzigingsplan,
of bij het gedeeltelijk herzien van een bestemmingsplan.

**naam** (verplicht):  
De waarde van het attribuut *naam* wordt bepaald door het attribuut
*maatvoeringInfo*. Met behulp van het samengestelde attribuut kunnen 1 of
meerdere *waardeType*(n) aan het object *Maatvoering* worden gekoppeld. De
waarden hiervan worden gekozen uit het domein OmvangWaarde conform IMRO2012.
De onder *waardeType* ingevulde waarden, worden vervolgens als waarde bij het
attribuut *naam* ingevuld, gescheiden door een komma en een spatie wanneer
sprake is van meerdere *waardeTypen*.
Hieronder wordt met behulp van een voorbeeld aangegeven hoe de naam van het
object *Maatvoering* tot stand komt. Doordat het object *Maatvoering* zowel een
maximum goothoogte (m) als een maximum bouwhoogte (m) kent, wordt de *naam* van
het object *Maatvoering*: maximum goothoogte (m), maximum bouwhoogte (m).

![](media/ac466fb9a54f52c68d32425099ab234e.png)

Het attribuut *naam* is essentieel voor een juist juridisch gebruik van het
bestemmingsplan. Bij de digi­tale raadpleging van een bestemmingsplan zal de
waarde van het attribuut *naam* getoond worden. De waarde van het attribuut
*naam* moet daartoe identiek zijn aan de maatvoeringsaanduiding die in de
planregel wordt genoemd.

***symboolInfo*** (facultatief):  
Dit attribuut is bedoeld voor het weergeven van maatvoeringsaanduidingen met
behulp van maatvoeringsymbolen op de analoge bestemmingsplankaart conform de
PRABPK2012. De lijst met maatvoeringsymbolen in de PRABPK2012 bestaat uit
ge­num­merde symbolen met een beschrijving van de daarin voorkomende
maatvoeringen. Een maatvoeringsymbool kan een of meer waarden bevatten. Naar
deze waarde(n) wordt vanuit de regels verwezen.
Bij het gebruik van een maatvoeringsymbool op de analoge bestemmingsplankaart is
het verplicht de code van het symbool op te nemen als waarde van het attribuut
*symboolCode*. De getallen ingevuld als waarde(n) van het attribuut *waarde*,
dat is gekoppeld aan het attribuut *waardeType,* wordt opgenomen in het
maatvoeringsymbool.
Het attribuut *symboolInfo* verwijst naar het samengestelde attri­buut
*SymboolEnPositie*, be­staande uit de attributen symboolCode en positie:  
- **symboolCode** (verplicht)  
Als waarde voor het attribuut *symboolCode* wordt een van de codes ingevuld
over­eenkomstig het domein *SymboolCodeMatrix* die overeenkomt met de
betreffende lijst uit de PRABPK2012. Bij de digitale verbeelding wordt de
code van het maatvoeringsymbool niet getoond, maar in plaats daarvan de
waarden van het attri­buut *naam* en attribuut *maatvoeringInfo*.  
- **positie** (verplicht, zo vaak als gewenst):  
Soms bestaat er aanleiding dezelfde maatvoeringsymbool meerdere keren binnen
één bestemming op de analoge bestemmingsplankaart te laten voorkomen. In dat
geval worden meerdere attributen *positie* meegegeven. Het attribuut *positie* verwijst naar het samengestelde attri­buut *Labelpositie*,
bestaande uit de attributen *plaatsingspunt, aanpijlingspunt* en *hoek*.  
- **plaatsingspunt** (verplicht)  
Het is nodig dat een plaatsingspunt van het maatvoeringsymbool wordt
opgenomen.
In het geval het bij de analoge bestemmingsplankaart ge­wenst is meerdere
dezelfde maatvoeringsymbolen binnen één bestemmingsvlak of gebiedsaanduiding
te plaatsen, dan worden meerdere plaatsingspunten opgenomen.  
- **aanpijlingspunt** (indien gewenst)  
Soms kan een maatvoeringsymbool niet binnen het bijbehorende vlak op de
analoge bestemmingsplankaart worden geplaatst omdat de schaal van de analoge
bestemmingsplankaart dat niet toelaat. In dat geval wordt het
maatvoeringsymbool buiten dat vlak geplaatst. Er is dan een aanpijling naar
dat vlak noodzakelijk zodat duidelijk is waar het maatvoeringsymbool bij
behoort.  
- **hoek** (indien gewenst)  
Soms is het gewenst dat het maatvoeringsymbool onder een bepaalde hoek op de
analoge bestemmingsplankaart wordt geplaatst. Voor dit doel is de waarde van
die hoek noodzakelijk en dient te worden ingevuld.  

**maatvoeringInfo** (verplicht zo vaak als gewenst):  
Met behulp van het attribuut *maatvoeringInfo* wordt de afmeting, percentage,
oppervlakte, hellingshoek of aantal van de maatvoeringaanduiding aangegeven.
Dit attribuut verwijst naar het samengestelde attri­buut *WaardeEnType_BP*,
bestaande uit de attributen *waarde* en *waardeType.*  
- **waarde** (verplicht)  
Het attribuut waarde bevat de feitelijke waarde als getal behorend bij het
attribuut *waarde­Type*. De waarde wordt als getal, dus zonder "m", "m2",
"%", etc., in het waar­develd opgenomen. Indien het niet-gehele getallen
be­treft dient een komma als decimaal scheidings­teken te worden gebruikt.
In geval een hel­lings­hoek wordt aangeduid, dient deze te worden uitgedrukt
in graden met een decimale nota­tie. Het is daarbij niet toege­staan de
centesimale verdeling (bijvoor­beeld niet 100o in plaats van 90o) te
gebrui­ken.  
- **waardeType** (verplicht)  
De waarde van het attribuut *waardeType* wordt ingevuld met behulp van
do­mein *OmvangWaarde* in IMRO2012. Het attribuut *waarde* is altijd
gekoppeld aan het attribuut *waardeType*. Het kan gewenst zijn meerdere
items uit het domein *OmvangWaarde* te kiezen, bijvoorbeeld maximum
goothoogte (m), maximum bouwhoogte (m) en dakhelling (graden). Deze worden
allen onder het samengestelde attribuut *maatvoeringInfo* geplaatst:

![](media/5ce9b0e819116d4dd251955909b7bbf0.png)

Indien gewenst kunnen van bovenstaande gegevens ook 3 apart objecten
*Maatvoering* worden gemaakt.

**verwijzingNaarSymboolcode** (facultatief)  
Met behulp van een of meer maatvoeringsymbolen wordt de waarde of worden de
waarden van het attribuut *waardeType* op de analoge bestemmingsplankaart
weergegeven. De waarde bij het attribuut *verwijzingNaarSymboolcode* is de code
van het gebruikte symbool op de analoge bestemmingsplankaart dat wordt gebruikt
om deze waarde weer te geven. De hier gespecificeerde code is een verwijzing
naar de *symboolCode* bij het attribuut *symboolInfo* en dient dus aanwezig te
zijn in dat attribuut.
Het attribuut *symboolInfo* wordt door de bronhouder gebruikt om de gebruikte
maatvoeringsymbool voor op de analoge bestemmingsplankaart in het digitale
bestemmingsplan op te nemen. Met behulp van het attribuut
*verwijzingNaarSymboolcode* wordt de relatie gelegd tussen het
maatvoeringsymbool bij *symboolInfo* en de waarde bij *waardeType.*
In het geval gebruik wordt gemaakt van de lijst met maatvoeringsymbolen uit de
PRABKP2012, wordt in bij *verwijzingNorm* bij *Bestemmingsplangebied* de waarde
PRABKP2012 opgenomen. In dat geval geldt het gebruik van de opmaak van de
analoge bestemmingsplankaart conform PRABPK2012 voor dit gehele bestemmingsplan.
Bovenstaand voorbeeld kan er nu als volgt uit zien:

![](media/67029f9c80f83d3aa5838e2075061785.png)

![](media/263912421ba9cbd0728868b9555e1193.png)

***verwijzingNaarTekstInfo*** (facultatief):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het bijbehorende object. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_BP*, bestaande uit de attributen
verwijzingNaarTekst en typeTekst.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Bestemmingsplangebied*: objectgericht in XML of niet-objectgericht in HTML
formaat. Het format dient overeen­komstig de afspraak over de
bestandsnaamconventies conform de STRI2012 te zijn. De keuze van de bronhouder
wordt vastgelegd in de *verwijzingNorm* bij dit bestemmingsplan.  
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgeno­men.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directory­structuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml­\#fragment</u> of
<u>bestandsnaam.htm\#fragment</u>.  
- **typeTekst** (verplicht)  
Hiermee wordt met de vaste waarde *regels* volgens het domein *Teksttype_BP*
aangegeven dat de tekst waarnaar verwezen wordt een regel betreft.

**geometrie** (verplicht):  
Het object *Maatvoering* kent uitsluitend de geometrie van een vlak. Dit
attribuut kent daarom coördinaten in een vastgesteld format (GML).

### Klasse Figuur  
De <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> geeft aan dat in de praktijk aanduidingen worden gebruikt welke
niet zijn aan te merken als de overige voorkomende aanduidingen, welke toch
nodig zijn voor een goede planologische regeling. Dit zijn figuren. Hiervoor is
in de SVBP2012 een limitatieve lijst opgenomen.

Het object *Figuur* betreft zelfstandig getekende elementen met een eigen
geometrie als samenstel van vlakken, lijnen en punten. Deze aanduidingen in de
vorm van losse figuren staan op een specifieke plek op het kaartbeeld,
gerelateerd aan de bestemming(en), doch niet noodzakelijkerwijs altijd
gerelateerd aan één bestemmingsvlak. De aanduidingen zijn essentieel om de
regels te kunnen hanteren en dienen daarom als object digitaal te worden
vastgelegd. Teneinde aan te geven welke figuren uit de lijst het betreft is het
attribuut *naam* opgenomen.

Het object *Figuur* heeft altijd een relatie met een onderliggend object. Dit
kan zijn een *Bestemmingsvlak*, een *Bouwvlak* of een *Gebiedsaanduiding*.
Indien het object *Figuur* behoort bij een bestemmingsvlak, wordt met het
attribuut *bestemmingsvlak* naar de identificatie (idn) van het object
*Bestemmingsvlak,* waarbij het behoort, verwezen.
Indien het object *Figuur* behoort bij een bouwvlak of bij een gebiedsaanduiding
wordt met het attribuut *aanduiding* naar respectievelijk de idn van het object
*Bouwvlak* of van het object *Gebiedsaanduiding,* waarbij het behoort,
verwezen.
Het object *Figuur* verwijst met het attribuut *plangebied* altijd naar de idn
van het object *Bestemmingsplangebied*. Het is mogelijk meerdere objecten
*Figuur* binnen het bestemmingsplan toe te passen.

In Tabel 9 zijn de attributen benoemd, de waarden aangegeven die deze
attributen moeten bevatten en wordt aangegeven of het gebruik van het attribuut
verplicht is en of het attribuut meerdere malen mag worden gebruikt. Ook is
aangegeven of attributen ge­koppeld worden, dat wil zeggen altijd in samenhang
moeten worden gebruikt. Na de tabel is per attribuut een nadere toe­lichting
gegeven.

**Tabel 9 Klasse Figuur 0..n\***

<table id="d4e5560" style="width: 100%;"><caption>Klasse Figuur 0..n*</caption><colgroup><col id="col1" style="width: 5.550651070403885%;"></col><col id="col2" style="width: 0.26484219819024496%;"></col><col id="col3" style="width: 0.7614213197969544%;"></col><col id="col4" style="width: 1.2469653498124034%;"></col><col id="col5" style="width: 4.3478260869565215%;"></col><col id="col6" style="width: 17.11542705804458%;"></col><col id="col7" style="width: 28.426395939086298%;"></col><col id="col8" style="width: 6.069300375193114%;"></col><col id="col9" style="width: 36.217170602516%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="6E69112F">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4FC53C52">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5CA8068E">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="35105D96">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="57958FCA"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4379026D"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="145EEE3C"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="18E63716"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="5CCB57C3" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="20590BB5">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1322DE39">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3BB3DE6A">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="046C8F33">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="24F7B4F2">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4DE5632F">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="741ACF8C">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="43992705">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 32 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="30338596">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="439898BE">figuur</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="50289547">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3FF39FFB">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="7CC18869">plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="279B31FC">idn Bestemmingsplangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="07D9648C">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="39F2F3BA">identificatienummer van het plangebied</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="43805FBE">bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2EE5C3F5">idn Bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3F9B4FDE">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4453C486">identificatienummer van bestemmingsvlak, indien figuur behoort bij een bestemmingsvlak; anders attribuut aanduiding gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="72EEC7F6">aanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5FA77B10">idn Bouwvlak of idn Gebiedsaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3728F279">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="38EAE7BF">identificatienummer van aanduiding, indien figuur behoort bij een bouwvlak of een gebiedsaanduiding; anders attribuut bestemmingsvlak gebruiken</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="432F3DDB">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0664DDD8">naam figuur</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="669F4E6E">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0890BD30">één van de waarden volgens domein Figuren; in met name genoemde gevallen aangevuld met vrije tekst; conform SVBP2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="3A586DA6"><i>verwijzingNaarIllustratie-Info:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6D7339AA"><i>IllustratieReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="78783015"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="35D98340"><i>samengesteld attribuut; alleen gebruiken bij het figuur dwarsprofiel</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4" rowspan="2"><p id="6000BD19" style="writing-mode: vertical-rl; rotate: 180deg;"><i>IllustratieReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="56E1C106">verwijzingNaarIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2DB6F18D">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E5D770D">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="42AD1CD7">in format bestandsnaamconventie illustratie conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="2E6BEED3">typeIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7DB5D10B">afbeelding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="43217C45">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="76A944D8">vaste waarde volgens domein Illustratie_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="6"><p id="4FE1E1A0"><i>labelinfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="27998D38"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="48CB6BDE"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3EF60B46"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="3" rowspan="5"><p id="34FCF8E7" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="3"><p id="69E06707">tekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="60DD6BAE">letter-/tekencombinatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2978E0E2">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="1D57FC72">als op analoge bestemmingsplankaart verbeeld conform PRABPK2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="3"><p id="14ED1109"><i>positie:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="65B33074"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="2656B619"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="67949C65"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2" rowspan="3"><p id="4FFA466E" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="1B5E189D">plaatsingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="03E2EE9E">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="33E8E3FD">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="087F2A6B">beschrijving van het plaatsingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="31B55F27">aanpijlingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="16102354">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0427FDEC">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0D450740">beschrijving van het aanpijlingspunt van de letter-/tekencombinatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4A2CBACB">hoek</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3106D244">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6DBD5058">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="12C0316A">beschrijving van de hoek in graden waaronder de letter-/tekencombinatie geplaatst wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="2D27F872"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="71730B12"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="657CB3B0"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7C065468"><i>samengesteld attribuut:</i></p><p id="19E10216"><i>verwijzend naar specifieke regel</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="3D070C9D" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="0FB0B426">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="08FBE0A9">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="41E6787B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="41A8CC4B">in format bestandsnaamconventie conform STRI2012; link naar een  specifieke positie binnen de regels</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="70CFA851">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="69792BA0">regels</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="688B913C">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4D4F8B27">vaste waarde volgens domein Teksttype_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="0DA26C6E">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2B265DE0">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79EC30C4">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7517B999">beschrijving van lijn of multilijn</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="9"><p id="4633CF6C"><b>*</b>  multipliciteit:</p><p id="4CA93D7F">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="13A9141F">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="9"><p id="32BD33D3">in de lichtgrijze cellen zijn die attributen weergegeven die uitsluitend voor de opbouw van de analoge bestemmingsplankaart kunnen worden gebruikt.</p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):  
Elk object *Figuur* krijgt een eigen unieke identificatie binnen het
bestemmingsplan. Het samengestelde attribuut *identificatie* verwijst naar het
object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject** (verplicht):  
Een aanduiding is te beschouwen als een object waarvoor het domein
*RuimtelijkPlanobject* van toe­passing is. Dit domein geeft daarvoor de waarde
*figuur* die als vaste waarde wordt in­gevuld.

**plangebied** (verplicht):  
Binnen elk object *Figuur* is een verwijzing noodzakelijk naar het object
*Bestem­mings­plan­ge­bied* waar dit object deel van uitmaakt. Dit attribuut
krijgt daartoe de waarde van het attri­buut *identificatie* van het bijbehorende
object *Bestemmingsplan­gebied*.

**bestemmingsvlak** (onder voorwaarde verplicht) **:**  
Aangezien er (meestal) een directe relatie aanwezig is tussen een figuur en een
onder­liggend bestemmingsvlak is dit attribuut hier als verplicht opgenomen. Het
attribuut kent als waarde de inhoud van het attribuut *identificatie* van het
bijbehorende bestemmingsvlak. Wanneer een figuur een relatie heeft met meerdere
bestemmingsvlakken, dat is bijvoorbeeld het geval bij het figuur *relatie*, dan
dient het attribuut meerdere keren te worden ingevuld.
Indien het figuur be­hoort bij een bouwvlak of een gebiedsaanduiding dient dit
attribuut niet te worden gebruikt, maar het hierna volgende attribuut
*aanduiding*.
Bij het plantype inpassingsplan of wijzigingsplan, of indien bij het plangebied
het attribuut de waarde ‘ter vervanging van extern plan’ is opgenomen, is het
mogelijk om geen verwijzing van de figuur naar de bestemming op te nemen. In
deze situaties is het namelijk toegestaan een bestemmingsplan te maken zonder
bestemmingsvlakken. Een nadere toelichting op de werkwijze is gegeven in
Hoofdstuk 4 van deze praktijkrichtlijn.

**aanduiding** (onder voorwaarde verplicht):  
Indien de figuur behoort bij een gebiedsaanduiding of bouwvlak dient als waarde
van dit attribuut de identificatie (idn) van het bijbehorende attribuut
*gebiedsaanduiding* of *bouwvlak* te worden opgenomen. Wanneer een figuur een
relatie heeft met meerdere aanduidingen, dat is bijvoorbeeld het geval bij het
figuur *relatie*, dan dient het attribuut meerdere keren te worden ingevuld.
Het attribuut is facultatief bij de plantypen inpassingsplan en wijzigingsplan,
of bij het gedeeltelijk herzien van een bestemmingsplan.

**naam** (verplicht):  
De waarde van het attribuut *naam* wordt bepaald door de lijst van figuren die
wordt voorge­schreven door de SVBP2012 en die is opge­nomen als domein *Figuren*
van het IMRO2012. De waarde van het attribuut *naam* is der­halve een van de
vaste waarden uit de do­mein lijst *Figuren.*
Het attribuut *naam* is essentieel voor een juist juridisch gebruik van het
bestemmingsplan. Bij de digi­tale raadpleging van een bestemmingsplan zal de
waarde van het attribuut *naam* getoond worden. De waarde van het attribuut
*naam* moet daartoe identiek zijn aan de benaming van het figuur die in de
planregel wordt genoemd.

***verwijzingNaarIllustratieInfo*** (indien een dwarsprofiel voorkomt):  
Dit attribuut is bedoeld om de verbeelding van het feitelijke dwarsprofiel
waarnaar het figuur *dwars­profiel* verwijst, mogelijk te maken. Het attribuut
verwijst naar het samengestelde attri­buut *IllustratieReferentie_BP*, bestaande
uit de attributen:  
- **verwijzingNaarIllustratie** (verplicht)  
Dit attribuut is bedoeld om een (hy­per)­link naar de illustratie waarbij
het object behoort op te nemen. Het format dient over­een­komstig de
afspraak over de bestandsnaamconventie voor het bestandstype *Illustratie*
conform de STRI2012 te zijn.  
- **typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Hier is uitsluitend de vaste waarde *afbeelding*
volgens het domein *Illustratie_BP* toegestaan.

***labelInfo*** (facultatief):  
De waarde van dit attribuut is uitsluitend bedoeld voor de weergave op de
analoge bestemmingsplankaart volgens de PRABPK2012. Het kan zijn dat vanuit de
regels meer­dere verschillende figuren binnen één bestemmingsvlak moeten worden
opgenomen. In dat geval komt het object *Figuur* meerdere keren voor. Het
attri­buut *labelInfo* verwijst naar het samengestelde attri­buut *Label*,
bestaande uit de attributen *tekst* en *positie.*  
- **tekst** (verplicht)  
Het attribuut *tekst* geeft de mogelijkheid om de voorkomende figuren op de
analoge bestemmingsplankaart te onderscheiden, zoals een nummering voor het
figuur "dwarsprofiel" en de letters die behoren bij het figuur "hartlijn
leiding". Bij de digitale verbeelding wordt deze letter-/tekencombinatie
niet getoond, maar in plaats daarvan wordt, in dit voorbeeld, het
bijbehorende figuur "dwars­pro­fiel", respectievelijk de waarde van het
attribuut *naam*, tezamen met het figuur "hartlijn leiding" getoond.  
- **positie** (verplicht, zo vaak als gewenst):  
Soms bestaat er aanleiding de letter-/tekencombinatie van het attri­buut *tekst* meerdere keren binnen één bestemming op de analoge
bestemmingsplan­kaart te laten voorkomen. In dat geval worden meerdere
attributen *positie* meegegeven. Het attribuut *positie* verwijst naar het
samengestelde attri­buut *Labelpositie*, bestaande uit de attributen *plaatsingspunt, aanpijlingspunt* en *hoek*.  
- **plaatsingspunt** (verplicht)  
Het is nodig dat een plaatsingspunt voor de letter-/tekencombinatie wordt
opgenomen. Het plaatsingspunt van het label links beneden ten opzichte van
de labeltekst.
In het geval het bij de analoge bestemmingsplankaart ge­wenst is meerdere
dezelfde letter-/tekencombinaties binnen één bestemmingsvlak of
gebiedsaanduiding te plaatsen, dan worden meerdere plaatsingspunten
opgenomen.  
- **aanpijlingspunt** (indien gewenst)  
Soms kan de letter-/tekencombinatie niet binnen het bijbehorende vlak op de
analoge bestemmingsplankaart worden geplaatst omdat de schaal van de analoge
bestemmingsplankaart dat niet toelaat. In dat geval wordt de
letter-/tekencombinatie buiten dat vlak geplaatst. Er is dan een aanpijling
naar dat vlak noodzakelijk zodat duidelijk is waar de
letter-/tekencombinatie bij behoort.  
- **hoek** (indien gewenst)  
Soms is het gewenst dat de letter-/tekencombinatie onder een bepaalde hoek
op de analoge bestemmingsplankaart wordt geplaatst. Voor dit doel is de
waarde van die hoek noodzakelijk en dient te worden ingevuld.

***verwijzingNaarTekstInfo*** (facultatief):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het bijbehorende object. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_BP*, bestaande uit de attributen
verwijzingNaarTekst en typeTekst.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Bestemmingsplangebied*: objectgericht in XML of niet-objectgericht in HTML
formaat. Het format dient overeen­komstig de afspraak de bestandsnaamconventies
conform de STRI2012 te zijn. De keuze van de bronhouder wordt ook vastgelegd in
de *verwijzingNorm* bij dit bestemmingsplan.  
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgeno­men.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directory­structuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml­\#fragment</u> of
<u>bestandsnaam.htm­\#fragment</u>.  
- **typeTekst** (verplicht)  
Hiermee wordt met de vaste waarde *regels* volgens het domein *Teksttype_BP*
aangegeven dat de tekst waarnaar verwezen wordt een regel betreft.

**geometrie** (verplicht):  
Het object *Figuur* kent de geometrie van een lijn of multi-lijn. Dit attribuut
kent daarom coördinaten in een vastgesteld format (GML). De geometrie betreft
niet de verbeelding zoals deze in de SVBP2012 is opgenomen. De geometrie betreft
uitsluitend de lijn die de verbeelding representeert. In het geval van het
figuur *dwarsprofiel* betreft dit de lijn die het complete figuur *dwarsprofiel*
representeert, inclusief het pijltje.

### Klasse Gebiedsaanduiding  
Bij gebiedsaanduidingen gaat het veelal om zones en gebieden die aan sectorale
regelgeving zijn ontleend. Met een gebiedsaanduiding kan een bestemming van
bijzondere regels worden voorzien, hetzij ter beperking van de
gebruiksmogelijkheden hetzij ter verruiming daarvan. Met het oog hierop kunnen
aan een gebiedsaanduiding specifieke bouw- of gebruiksregels worden gekoppeld.
Om belangen nader te kunnen afwegen kan een gebiedsaanduiding ook vergezeld gaan
van afwijkingsbevoegdheden, regelingen voor de omgevingsvergunning voor het
uitvoeren van een werk, geen bouwwerk zijnde, of van werkzaamheden en de
omgevingsvergunning voor het slopen van een bouwwerk- en wijzigingsbevoegdheden.

Er is geen rangorde maar nevenschikking, regels van de gebiedsaanduiding gelden
naast, aanvullend op de regels van de enkelbestemming.
*Voorbeeld: bestemming Agrarisch laat agrarisch gebruik toe, geen
afwijkingsbevoegdheden. Over delen van het bestemmingsvlak Agrarisch ligt de
gebiedsaanduiding open landschap. Doel van de gebiedsaanduiding is
instandhouding open landschap. Daarvoor zijn afwijkingsbevoegdheden regelingen
voor de omgevingsvergunning voor het uitvoeren van een werk, geen bouwwerk
zijnde, of van werkzaamheden, en de omgevingsvergunning voor het slopen van een
bouwwerk- en wijzigingsbevoegdheden opgenomen.*

In de <a href='https://docs.geostandaarden.nl/ro/svbp' target='_blank'>SVBP2012</a> zijn de gebiedsaanduidinggroepen in een bindende lijst benoemd,
die kunnen worden gespecificeerd. In de hoofdgroepen van gebiedsaanduidingen is
wetgevingzone opgenomen. Alle zones die in een bestemmingsplan moeten worden
opgenomen die gerelateerd zijn aan wetgeving worden met behulp van deze
hoofdgroep opgenomen. Wat betreft wetgeving kan worden gedacht aan de Wro, maar
ook aan de Wet geluidhinder of Waterwet. Een inrichting die valt onder het
Besluit externe veiligheid inrichtingen (bevi) echter, wordt de hoofdgroep
veiligheidszone geplaatst.
Indien een gebiedsaanduiding echt niet onder de nader genoemde hoofdgroepen van
gebiedsaanduidingen te plaatsen is, dient gebruik te worden gemaakt van de
gebiedsaanduiding overige zone.  
*Voorbeeld:*  
*overige zone - ecologische verbindingszone*

De gebiedsaanduiding overlapt meestal meerdere bestemmingen. Het object
*Gebiedsaanduiding* is meestal gerelateerd aan een gedeelte van het
plangebied, soms uitsluitend aan een gedeelte binnen een bestemmingsvlak.
Daarom heeft het object *Gebiedsaanduiding* altijd een relatie met een
onderliggend object. Dit kan zijn het *Bestemmingsplangebied* of een
*Bestemmingsvlak*. Het is mogelijk meerdere objecten *Gebiedsaanduiding* binnen
het bestemmingsplan toe te passen.

In Tabel 10 zijn de attributen benoemd, de waarden aangegeven die deze
attributen moeten bevatten en is aangegeven of het gebruik van het attribuut
verplicht is en of het attribuut meerdere malen mag worden gebruikt. Ook is
aangegeven of attributen gekoppeld worden, dat wil zeggen altijd in samenhang
moeten worden gebruikt. Na de tabel is per attribuut een nadere toelichting
gegeven.

**Tabel 10 Klasse gebiedsaanduiding 0..n\***

<table id="d4e6499" style="width: 100%;"><caption>Klasse gebiedsaanduiding 0..n*</caption><colgroup><col id="col1" style="width: 5.539615978812624%;"></col><col id="col2" style="width: 0.5738247627455307%;"></col><col id="col3" style="width: 6.157581107923195%;"></col><col id="col4" style="width: 17.11542705804458%;"></col><col id="col5" style="width: 28.856764511145442%;"></col><col id="col6" style="width: 6.598984771573605%;"></col><col id="col7" style="width: 35.15780180975502%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="1E4F9201">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6DA0E26A">Waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="501AE33C">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="328C4FD6">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="5B10401B"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="30718CAD"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0F2EA46A"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0B6628A3"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="341B1DB4" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="6FD1D4CA">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5FDD2EFC">Waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="43605F13">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="632C3A76" class="space-after">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="3B0FB502">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="649FF187">Waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6701C625">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4A1B6E2E">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 32 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="613B9727">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="462294CD">Gebiedsaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="37B349F3">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7428C212">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="6DCD2620">plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="723C7D80">idn Bestemmingsplangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="15A79CA7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5A315D9A">identificatienummer van het plangebied</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="25746B36">bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7E41ADFC">idn Bestemmingsvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="38BCA5AB">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="382C542F">identificatienummer van bestemmingvlak alleen indien gebiedsaanduiding behoort bij één bestemming</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="68BE44C3">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6660DB5B">naam gebiedsaanduiding</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2CCC2F31">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="303B2B51">één van de waarden volgens domein Gebiedsaanduidingen of vrije tekst ingeval de waarde niet voorkomt; conform SVBP2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="476EB698">gebiedsaanduidinggroep</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7D5FCE44">Waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5F78F9DE">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3F169A88">één van de waarden volgens domein Gebiedsaanduidinggroep</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="56E4381A">artikelnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0C491771">Artikelnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6B14F3EF">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1DDF0645">alleen het nummer in het format conform de SVBP2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="26F9BF77"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5632FB71"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7CE4F544"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="76A21C06"><i>samengesteld attribuut:</i></p><p id="441A08CB"><i>verwijzend naar specifieke regel</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="0BCB43B0" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_BP</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="431A5513">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="643EA2F3">Link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="51FE3771">1..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="20A1CADC">in format bestandsnaamconventie conform STRI2012; link naar een  specifieke positie binnen de regels</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="11A4E12B">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7D5ED847">Regels</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3A9C1BB2">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11DF57E7">vaste waarde volgens domein Teksttype_BP</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="4"><p id="1933B59C"><i>labelinfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6FCAEFD2"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="575F366F"><i>0..1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="7AB836EF"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2" rowspan="5"><p id="5CA6F003" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Label</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="7B387276">tekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3F8C025E">letter-/tekencombinatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="7943A065">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="326D3123">als op analoge bestemmingsplankaart verbeeld conform PRABPK2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="2"><p id="6C434C9B"><i>positie:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6CDECCEB"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3A6841E4"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="4CB49EAB"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" rowspan="3"><p id="340673D5" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Labelpositie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="048EC00F">plaatsingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="736ABBEA">Coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="60B7F040">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="0B88A4FD">beschrijving van het plaatsingspunt van het attribuut tekst</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6A8D926E">aanpijlingspunt</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="54377B86">Coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6F8A9D4B">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="33C12961">beschrijving van het aanpijlingspunt van het attribuut tekst</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="6BDCFC9D">hoek</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="17D41124">Waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="3DA26087">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;"><p id="195DFBB4">beschrijving van de hoek in graden waaronder het attribuut tekst geplaatst wordt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="56BA1677">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3BFCB7DC">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="69264A96">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7D084A42">beschrijving van vlak of multivlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="7"><p id="58F8FD87"><b>*</b>  multipliciteit:</p><p id="63230932">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="5224A53F">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: #D0CECE;" colspan="7"><p id="677E0FA1">in de lichtgrijze cellen zijn die attributen weergegeven die uitsluitend voor de opbouw van de analoge bestemmingsplankaart kunnen worden gebruikt.</p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):  
Elk object *Gebiedsaanduiding* krijgt een eigen unieke identificatie binnen het
bestemmingsplan. Het samengestelde attribuut *identificatie* verwijst naar het
object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
- **namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
- **lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject (verplicht):**  
Een gebiedsaanduiding is te beschouwen als een object waarvoor het domein
*RuimtelijkPlan­ob­ject* van toepassing is. Dit domein geeft daarvoor de waarde
*gebiedsaanduiding* die als vaste waarde wordt ingevuld.

**plangebied** (verplicht):  
Binnen elk object *Gebiedsaanduiding* is een verwijzing noodzakelijk naar het
object *Bestemmingsplangebied* waar dit object deel van uitmaakt. Dit attribuut
krijgt daartoe de waarde van het attri­buut *identificatie* van het bijbehorende
object *Bestemmingsplan­gebied*.

**bestemmingsvlak** (onder voorwaarde verplicht)**:**  
Aangezien er soms een directe relatie aanwezig is tussen een gebiedsaanduiding
en een on­der­lig­gend bestemmingsvlak doordat de gebiedsaanduiding alleen bij
die bestemming be­hoort, is dit attri­buut in dat geval als verplicht opgenomen.
Het attribuut kent als waarde de in­houd van het attribuut *identificatie* van
het bijbehorende bestemmingsvlak. Een voorbeeld hiervan is een
wijzigingsbevoegdheid die niet is opgenomen als een algemene aanduidingsregel,
maar als onderdeel van een bestemmingsartikel.

**naam** (verplicht):  
De waarde van het attribuut *naam* wordt bepaald door de lijst van
gebiedsaanduidingen die wordt voorgeschreven door de SVBP2012 en die is
opgenomen als domein *Gebiedsaandui­dingen* in IMRO2012. Deze waarde is derhalve
een van de waarden uit de domeinlijst *Gebiedsaan­duidingen.*
Het is mogelijk de gebiedsaanduiding verder te specificeren of een nadere
tekstuele aanduiding te geven. Dit is uitgelegd onder varianten 1 en 2 van
gebiedsaanduidingen in de SVBP2012.
Het attribuut *naam* is essentieel voor een juist juridisch gebruik van het
bestemmingsplan. Bij de digi­tale raadpleging van een bestemmingsplan zal de
waarde van het attribuut *naam* getoond worden. De waarde van het attribuut
*naam* moet daartoe identiek zijn aan de naam van de gebiedsaanduiding die in de
planregel wordt genoemd.

**gebiedsaanduidinggroep** (verplicht):  
In de SVBP2012 zijn de gebiedsaanduidingen in groepen gerangschikt. De
rangschikking is opgenomen in de naamgeving van de gebiedsaanduidingen. Het
attribuut gebiedsaanduidinggroep is bedoeld om de gebruikte gebiedsaanduiding
digitaal te verbeelden. Gekozen moet worden uit het domein
Gebiedsaanduidinggroep. De waarde "overige zone" is voor gebiedsaanduidingen
die, overeenkomstig de SVBP2012, niet met één van de andere groepen
gebiedsaanduidingen getypeerd kan worden.

**artikelnummer** (verplicht):  
Een wijzigingsbe­voegdheid is een voorbeeld van een gebiedsaanduiding die n de
regels is opgenomen.
Het artikelnummer waarin de verwijzing naar deze gebiedsaanduiding staat wordt
als waarde bij het attribuut *artikelnummer* meegegeven. Het format van het
artikelnummer is voorgeschreven in de SVBP2012.

***verwijzingNaarTekstInfo*** (verplicht):  
Het attribuut is bedoeld voor het verwijzen naar het specifieke artikel dat
behoort bij het betreffende object *Bestemmingsvlak* of naar het artikel in
hoofdstuk 3 van de planregels dat hoort bij de gebiedsaanduiding. Het attribuut
verwijst naar het samengestelde attribuut *TekstReferentie_BP*, bestaande uit de
attributen verwijzingNaarTekst en typeTekst.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Bestemmingsplangebied*: objectgericht in XML of niet-objectgericht in HTML
formaat. Het format dient overeen­komstig de afspraak over de
bestandsnaamconventies conform de STRI2012 te zijn. De keuze van de bronhouder
wordt vastgelegd in de *verwijzingNorm* bij dit bestemmingsplan.

- **Links verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgeno­men.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directory­structuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml­\#fragment</u> of
<u>bestandsnaam.htm­\#fragment</u>.  
- **typeTekst** (verplicht)  
Hiermee wordt met de vaste waarde *regels* volgens het domein *Teksttype_BP*
aangegeven dat de tekst waarnaar verwezen wordt een regel betreft.

***labelInfo*** (facultatief):
De waarde van dit attribuut is uitsluitend bedoeld voor de weergave op de
analoge bestemmingsplankaart volgens de PRABPK2012. Het attri­buut *labelInfo*
verwijst naar het samengestelde attri­buut *Label*, bestaande uit de attributen
*tekst* en *positie.*  
- **tekst** (verplicht)  
Het attribuut *tekst* geeft de mogelijkheid om de voorkomende
gebiedsaanduidingen op de analoge bestemmingsplankaart te onderscheiden,
zoals een nummering voor verschillende gebieden met een
wijzigingsbe­voegdheid. Bij de digitale verbeelding wordt deze
letter-/tekencombinatie niet getoond, maar in plaats daarvan de waarde van
het attribuut *naam*.  
- **positie** (verplicht, zo vaak als gewenst):  
Soms bestaat er aanleiding de letter-/tekencombinatie van het attri­buut *tekst* meerdere keren binnen één bestemming op de analoge
bestemmingsplan­kaart te laten voorkomen. In dat geval worden meerdere
attributen *positie* meegegeven. Het attribuut *positie* verwijst naar het
samengestelde attri­buut *Labelpositie*, bestaande uit de attributen *plaatsingspunt, aanpijlingspunt* en *hoek*.  
- **plaatsingspunt** (verplicht)  
Het is nodig dat een plaatsingspunt voor de letter-/tekencombinatie wordt
opgenomen. Het plaatsingspunt van het label links beneden ten opzichte van
de labeltekst.
In het geval het bij de analoge bestemmingsplankaart ge­wenst is meerdere
dezelfde letter-/tekencombinaties binnen een gebiedsaanduiding te plaatsen,
dan worden meerdere plaatsingspunten opgenomen.  
- **aanpijlingspunt** (indien gewenst)  
Soms kan de letter-/tekencombinatie niet binnen het bijbehorende vlak op de
analoge bestemmingsplankaart worden geplaatst omdat de schaal van de analoge
bestemmingsplankaart dat niet toelaat. In dat geval wordt de
letter-/tekencombinatie buiten dat vlak geplaatst. Er is dan een aanpijling
naar dat vlak noodzakelijk zodat duidelijk is waar de
letter-/tekencombinatie bij behoort.  
- **hoek** (indien gewenst)  
Soms is het gewenst dat de letter-/tekencombinatie onder een bepaalde hoek
op de analoge bestemmingsplankaart wordt geplaatst. Voor dit doel is de
waarde van die hoek noodzakelijk en dient te worden ingevuld.

**geometrie** (verplicht):  
Het object *Gebiedsaanduiding* kent uitsluitend de geometrie van een vlak of
multivlak. Dit at­tribuut kent daarom coördinaten in een vastgesteld format
(GML).
