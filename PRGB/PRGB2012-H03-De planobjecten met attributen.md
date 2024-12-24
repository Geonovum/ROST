# De planobjecten met attributen
**In dit hoofdstuk worden de klassen (objecttypen) met bijbehorende attributen
beschreven. Elk object binnen een klasse kent eigenschappen die als attribuut
daaraan worden toegekend. In IMRO2012 is in het UML-schema weergegeven hoe de
objecten (klassen) samenhangen en welke attributen mogelijk zijn.**

## Klasse Besluitgebied_X
Het object *Besluitgebied_X* is het object dat de grenzen van het gebied, of de
gebieden, waarover het besluit uitspraken doet geometrisch vastlegt. De
geometrie daarvan is altijd een vlak of multivlak en altijd exact. Aan dit
object worden de algemene eigenschappen van het gebiedsgericht besluit als
attribuut gekoppeld.

In tabel Besluitgebied_X zijn de attributen behorend bij de klasse *Besluitgebied_X* benoemd,
de waarden aangegeven die deze attributen moeten bevatten en is aangegeven of
het gebruik van het attribuut verplicht is en of het attribuut meerdere malen
mag worden gebruikt. Ook is aangegeven of attributen in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven. 
In [hoofdstuk 5](#H05) is voor per type gebiedsgerichte besluit een nadere uitwerking
gegeven van onderstaande tabel

<table id="d4e703" style="width: 100%;"><caption>Klasse Besluitgebied_X 1*</caption><colgroup><col id="col1" style="width: 4.812152133580705%;"></col><col id="col2" style="width: 0.5565862708719851%;"></col><col id="col3" style="width: 1.1595547309833023%;"></col><col id="col4" style="width: 1.6001855287569575%;"></col><col id="col5" style="width: 22.5765306122449%;"></col><col id="col6" style="width: 29.035250463821892%;"></col><col id="col7" style="width: 6.4355287569573285%;"></col><col id="col8" style="width: 33.82421150278293%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="7251AD06">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4267AA1A">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1DF58914">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F9891BD">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="0B255F31"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2505D9C0"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C7F58A3"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C7866C3"><i>samengesteld attribuut.</i></p><p id="620B494A"><i>Uit  de combinatie hiervan wordt de bestandsnaam van het plan opgebouwd conform STRI2012: namespace.lokaalID-versie</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="3"><p id="489ABC1A" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="6E2448F3">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="010F7CE8">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4A376FAD">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DB86AF6">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="2E7E1441">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="35DBCF9D">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4CB8973F">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6E6DA4D3">Unieke identificatiecode binnen een registratie. Bestaande uit een bronhouderscode van 4 cijfers gevolgd door een punt (.) en maximaal 18 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="064E89D6">versie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0E0A8E6B">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="460650C6">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B5594B7">Versie-aanduiding van het plangebied bestaande uit 4 alfanumerieke tekens </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="1B0DAD9D">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40E29FB2">exploitatieplan, voorbereidingsbesluit, gerechtelijke uitspraak, beheersverordening, aanwijzingsbesluit, reactieve aanwijzing of omgevingsvergunning </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="51153652">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="35D1CCA5">één van de waarden volgens domein RuimtelijkPlanOfBesluit_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="6076D561">beleidsmatigVerantwoor-delijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0FA6570A">gemeentelijke overheid, deelgemeente/stadsdeel, provinciale overheid of nationale overheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B65C20B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09D20EAB">één van de waarden volgens domein Overheden_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="08FDCF0B">naamOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0BFC9132">naam van de overheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="735AE77B">1..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="016F3BFE">volgens format in de vorm: gemeente …., deelgemeente/stadsdeel …., provincie …. of ministerie …. In het geval er meerdere verantwoordelijke ministeries zijn, wordt naamOverheid evenzoveel ingevuld.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="4B3CACBB">overheidsCode    </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="71BB5FA1">CBS-nummer van de beleidsmatig verantwoordelijke overheid </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3C5095FB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7A9686A3">4 cijfers; ingeval Rijk: "0000"; ingeval provincie: CBS-nummer provincie, met voorafgaand 2 voorloopnegens; ingeval deelgemeente of stadsdeel: CBS-nummer gemeente</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="79B1F47D">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3AFD5BA4">naam van het besluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="24B182B7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="48F05BAE">volgens de (aanhaal)titel</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="75F09A0C">normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2A52AC35">naam van de normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40A52BD2">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B8EE478">geen, één of meer van de waarden volgens domein Normadressant_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="292BC6FB">locatieNaam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0F7D4448">naam van de locatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="53B1415E">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="52258A5D">iedere gewenste naam; verplicht ingeval naamOverheid anders dan gemeente</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="6426AD71"><i>planstatusInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3AD8C256"><i>PlanstatusEnDatum</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="28A42181"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3BA6178C"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="18DF7C9E" style="writing-mode: vertical-rl; rotate: 180deg;"><i>PlanstatusEnDatum</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="732E4CCF">planstatus</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5245A346">waarde van de planstatus</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="54959ADB">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A62A904">één van de waarden volgens domein Planstatus</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="1D7FF6CE">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="512C090A">datum van de planstatus</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2163940F">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0433CB9C">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="0EAE3308">besluitnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4BE87C98">nummer van het besluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3100A006">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0007C0A1">het besluitnummer zoals dat is toegekend; alleen toegestaan en verplicht bij de planstatus vastgesteld</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="6BE2D19C">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="77904C5F">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="75CEDEB5">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C42ABE2">naar tekst vaststellingsbesluit; in format bestandsnaamconventie vaststellingsbesluit conform STRI2012; alleen toegestaan en verplicht, ingeval dit een apart document is, bij de planstatus vastgesteld</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="259AE4B7"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="42450A83"><i>TekstReferentieBG_XGB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6DB108BF"><i>1..6</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3BA97A54"><i>samengesteld attribuut</i></p><p id="6FC6B491"><i>max. 1 verwijzing naar volledige besluitdocument, max. 1 naar regels, max. 1 naar volledige toelichting en max. 1 van elk typeTekst naar volledige bijlage(n)</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="2"><p id="5CA93997" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentieBG_XGB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="739D9FE0">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="010B40E0">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27C48574">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="39406FD6">in format bestandsnaamconventie besluitdocument, voorschriften/regels, toelichting of bijlage, conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="5A9E6E38">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="77A63900">besluitdocument, voorschriften/regels, toelichting, bijlage bij besluitdocument, bijlage bij voorschriften/regels of bijlage bij toelichting</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3EE5B055">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0CAA861F">één van de waarden volgens domein TeksttypeBG_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="5642DC37"><i>ondergrondInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E071B92"><i>OndergrondReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="51B997F7"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5807B619"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3" rowspan="2"><p id="7F029B1C" style="writing-mode: vertical-rl; rotate: 180deg;"><i>OndergrondReferentie</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="4A68F8CA">ondergrondType</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="381D4C21">naam van de ondergrond</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="56FE534C">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A0A404A">één van de waarden volgens domein Ondergronden. Ingeval geen gebruik is gemaakt van een ondergrond uit het domein Ondergronden wordt een eenduidige referentie naar de gebruikte ondergrond(en) gegeven</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="120C91CD">ondergrondDatum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="074211D6">datum van de gebruikte ondergrond</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0CB2E03D">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45513F0E">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="0F848609"><i>verwijzingNaarIllustratieInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6A16ADDB"><i>IllustratieReferentiePG</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0318994F"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="61BE0AA5"><i>samengesteld attribuut:</i></p><p id="52AB3675"><i>alleen verwijzen naar illustratie(s) op het niveau “plangebied”</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4" rowspan="2"><p id="111AA039" style="writing-mode: vertical-rl; rotate: 180deg;"><i>Illustratie-ReferentiePG</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0DEA6F8D">verwijzingNaarIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="75C63F99">link </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5182C672">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2103D29E">format bestandsnaamconventie illustratie conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7EE06976">typeIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="023ADDAA">kaart</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="275677BC">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3B3C2AE3">één van de waarden volgens domein Illustratie_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="30192720"><i>verwijzingNaarExternPlanInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4FFEC97F"><i>ExternPlanReferentie_GB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7C84E2ED"><i>0..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11029D7B"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4" rowspan="3"><p id="7F2E2388" style="writing-mode: vertical-rl; rotate: 180deg;"><i>ExternPlan-Referentie_AMB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="705F4593">NaamExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11FD0E31">naam van extern plan/besluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="341635F5">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5320CEC5">het externe plan/besluit in relatie waarmee het besluit is genomen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="09CB09FE">IdnExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4D4B02AE">idn van extern plan/besluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="51B2A9E5">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4E2CAA7B">het idn van het plan/besluit in relatie waarmee het besluit is genomen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4972167C">rolExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3FD53C46">ter vervanging van extern plan/besluit, informatie in extern plan/besluit, in extern plan/besluit uit te werken, ten gevolge van extern plan/besluit of als mutatie opgenomen</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="72761B2C">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="37FD6DB5">één van de waarden volgens domein RolExternPlan_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="2EC9D4F6">verwijzingNorm</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4832EF2F">IMRO2012 en PRGB2012 optioneel IMROPT2012</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="650EB8F6">2..3</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="00DA9BE0">verwijzing naar gebruikte versie IMRO en naar gebruikte versie praktijkrichtlijn algemene maatregel van bestuur: vaste waarden.</p><p id="5D9A8011">Verplicht bij gebruik objectgerichte planteksten: IMROPT2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="5"><p id="1D67858B"><i>begrenzing:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="277AE988"><i>GeometriePlangebied</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="315DDD8D"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79092736"><i>samengesteld attribuut</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4" rowspan="2"><p id="75658D9A" style="writing-mode: vertical-rl; rotate: 180deg;"><i>GeometriePlangebied</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B96B2CE">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2B740DCE">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1E4254E8">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="71BFFD2E">beschrijving van vlak of multivlak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5A0030EC">idealisatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5461A8B2">exact</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4191A222">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0B05DAA8">vaste waarde volgens domein Idealisatie_1</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="8"><p id="35C6E13F">* multipliciteit:</p><p id="29BBF7D8">0..1:   komt 0 of 1 keer voor        0..n:   komt zo vaak voor als gewenst</p><p id="2B1FD7A9">1..6:   komt 1,2,3,4,5 of 6 keer voor    1..n:   komt tenminste 1 keer voor</p></td></tr></tbody></table>

***identificatie*** (verplicht):  
Ieder ruimtelijk instrument kent een eigen identificatienummer (idn). Deze
identificatie maakt het mogelijk dat op landelijk niveau een uniek onderscheid
voor ieder instrument aanwezig is. Voor het geval het werkingsgebied bestaat uit
meerdere ruimtelijk gescheiden gebieden kent het totaal van die gebieden één
identificatienummer. De geometrie van het object *Besluitgebied_X* is hierbij
een multipolygoon.
Het samengestelde attribuut verwijst naar het object NEN3610ID bestaande uit de
attributen *namespace, lokaalID* en *versie*. 
<br/>
- **Namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’.
<br/>
- **lokaalID:** (verplicht)  
Unieke identificatiecode binnen de registratie van ruimtelijke plannen. Bestaande uit een bronhouderscode van 4 cijfers (voor het Rijk 0000, voor gemeente het CBS-nummer) gevolgd door een punt (.) en maximaal door de bronhouder te bepalen 18 alfanumerieke tekens. Er geldt de volgende
reguliere expressie: [0-9]{4}\\.[A-Za-z0-9]{1,18}
<br/>
- **Versie:** (verplicht)
Versie-aanduiding van het plangebied bestaande uit 4 alfanumerieke tekens door de bronhouder te bepalen. Er geldt de volgende reguliere expressie:
[A-Za-z0-9]{4}
Uit de waarden van de attributen *namespace, lokaalID* en *versie* wordt de
bestandsnaam van het plan opgebouwd conform STRI2012:
namespace.lokaalID-versie. De samengestelde reguliere expressie is:
NL\\.IMRO\\.[0-9]{4}\\.[A-Za-z0-9]{1,18}-[A-Za-z0-9]{4}
<br/><br/>

**typePlan** (verplicht):  
Voor het attribuut *typePlan* wordt het domein *RuimtelijkPlanOfBesluit_XGB*
gebruikt. Hier wordt een van de volgende waarden ingevuld:  
- aanwijzingsbesluit;
- beheersverordening;
- exploitatieplan;
- gerechtelijke uitspraak;
- omgevingsvergunning (voormalig Wro projectbesluit);
- reactieve aanwijzing;
- voorbereidingsbesluit.
<br/><br/>

**beleidsmatigVerantwoordelijkeOverheid** (verplicht):  
Hier wordt de overheid die beleidsmatig verantwoordelijk is voor het opstellen
van het plan opgenomen uit het domein *Overheden_XGB.* In dit geval een van de
volgende vaste waarden:  
- gemeentelijke overheid;
- deelgemeente/stadsdeel;
- provinciale overheid of;
- nationale overheid.
<br/><br/>

**naamOverheid** (verplicht):  
Hier wordt de naam van de beleidsmatig verantwoordelijke overheid opgenomen, in
de vorm van de tekst “gemeente …….”, “deelgemeente ……”, “stadsdeel ……”,
“provincie …….” Of “ministerie …….”. In het geval er meerdere verantwoordelijke
ministeries zijn, wordt *naamOverheid* evenzoveel ingevuld.
<br/><br/>

**overheidsCode** (verplicht):  
Teneinde kenbaar te maken van welke beleidsmatig verantwoordelijke overheid het
gebiedsgerichte besluit is, wordt hier het viercijferige CBS-nummer van die
overheid opgenomen. Voor deelgemeenten/stadsdelen wordt het nummer gebruikt van
de gemeente waartoe zij behoren. Voor de provincies worden, voorafgaand aan het
CBS-nummer van de provincie, twee voorloopnegens geplaatst, zodat de totale
lengte 4 posities bedraagt. Voor het Rijk wordt het nummer “0000” gebruikt.
<br/><br/>

**Naam** (verplicht):  
In het waardeveld van het attribuut *naam* dient de volledige naam van het
gebiedsgerichte besluit te worden opgenomen zoals deze volgens de
(aanhaal)titel daarvan wordt genoemd. De volledige naam wordt ge­bruikt. Indien
er sprake is van een aanhaaltitel in het besluit dan wordt deze gebruikt.
<br/><br/>

**Normadressant** (indien gewenst):  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_XGB* geeft de toegestane waarden aan waaruit
eventueel meerdere kunnen worden gekozen.
<br/><br/>

**locatieNaam** (indien gewenst/voorwaardelijk verplicht):  
Het kan gewenst zijn om de geografische naam van de locatie waarbinnen de
gebiedsgericht besluit zich bevindt kenbaar te maken. De naam (namen) van die
relevante locatie (bv. Groene Hart) kan bij dit attribuut worden ingevuld. Het
is verplicht het attribuut *locatieNaam* te gebruiken voor zover het een
plan/besluit betreft dat door een provincie wordt opgesteld of voor zover het
plan / besluit door het Rijk wordt opgesteld.
<br/><br/>

***planstatusInfo*** (verplicht):  
Dit attribuut is noodzakelijk om de plangegevens te kunnen plaatsen naar tijd en
belang. Het samengesteld attribuut *planstatus* verwijst naar het object *Planstatus­En­Datum*, bestaande uit de attributen planstatus en datum. In
[hoofdstuk 5](#H05) is per gebiedsgericht besluit aangegeven welke status een instrument
kent. Dit kan in het geval van een gerechtelijke uitspraak bijvoorbeeld alleen *vastgesteld* zijn.
<br/>
- **Planstatus** (verplicht)
Het domein *Planstatus* geeft de toegestane waarden voor het attribuut *planstatus* waaruit er één moet worden gekozen. De waarde van dit attribuut geeft de planstatus weer.
<br/>
- **Datum**- (verplicht)
Het attribuut *datum* is bedoeld om de proceduredatum van het plan op te nemen. De in het waardeveld op te nemen datum dient overeenkomstig het binnen het IMRO afgesproken datumformaat te worden genoteerd: jjjj-mm-dd.
<br/><br/>

**besluitnummer** (onder voorwaarde verplicht):  
Nummer van het vaststellingsbesluit van het besluit / plan. Het besluitnummer is
alleen toegestaan en dan verplicht indien de planstatus *vastgesteld* is.
<br/><br/>

**verwijzingNaarVaststellingsbesluit** (onder voorwaarde verplicht):  
Hierin wordt een link opgenomen naar de tekst van het vaststellingsbesluit. In
het format conform de bestandsnaamconventie *vaststellingsbesluit* volgens de
STRI2012.
Het vaststellingsbesluit betreft de tekst waarin is aangegeven door wie, op welk
moment welk besluit is vastgesteld. Het vaststellingsbesluit wordt aan het
*Besluitgebied_X* gekoppeld wanneer het besluit de status *vastgesteld* heeft.
Bij een andere (eerdere) planstatus is dit attribuut niet toegestaan.
Aan het bestand kunnen ook eventueel bij het vaststellingsbesluit behorende
bijlagen worden toegevoegd.
<br/><br/>

***verwijzingNaarTekstInfo*** (verplicht):  
Dit attribuut verwijst naar het samengestelde attribuut *TekstReferentieBG_XGB*,
bestaande uit de attributen *verwijzingNaarTekst* en *typeTekst*. Attribuut
wordt met de volgende cardinaliteit opgenomen:
<br/>
-   Maximaal 1 verwijzing naar het volledige besluitdocument en/of;
-   Maximaal 1 verwijzing naar volledige toelichting en/of;
-   Maximaal 1 verwijzing naar eventuele volledige regels;
-   0..1 verwijzing naar de volledige bijlagen van elk typeTekst:
	-   De volledige bijlage bij de regels;
	-   De volledige bijlage bij het besluitdocument;
	-   De volledige bijlage bij de toelichting.  
<br/>
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
Uit de waarde van het attribuut *typeTekst* (onderdeel van het attribuut
*verwijzingNaarTekstInfo*) blijkt wat voor tekst het betreft. Voor zowel
niet-objectgerichte als objectgerichte planteksten wordt dit attribuut
*verwijzingNaarTekstInfo* gebruikt. De keuze voor XML of HTML/PDF planteksten
geldt niet alleen voor het besluitgebied, de keuze geldt ook voor de andere
objecten (besluitvlakken/ besluitsubvlakken) binnen het gebiedsgericht besluit.
De keuze wordt vastgelegd met behulp van het attribuut *verwijzingNorm* bij
BesluitGebied_X van dit gebiedsgericht besluit. Het format dient overeenkomstig
de afspraak over de bestandsnaamconventies conform de STRI2012 te zijn.
<br/>
- **verwijzingNaarTekst** (verplicht)
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een (hyper)link naar het soort document dat is aangegeven bij het attribuut.
<br/>
- **typeTekst** te worden opgenomen. Het format dient overeen­komstig deafspraak over de bestandsnaamconventies voor het bestandstype *besluitdocument*, *toelichting*, *regels* of *bijlagen* conform de STRI2012 te zijn.
<br/>
- **typeTekst** (verplicht)
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing naar tekst dient gekozen te worden uit een van de volgende waarden van het domein *TeksttypeBG_XGB*:  
	- besluitdocument;
	- voorschriften/regels;
	- toelichting;
	- bijlage bij besluitdocument;
	- bijlage bij voorschriften/regels;
	- bijlage bij toelichting.
<br/>
De regels voorzien (bijvoorbeeld bij een beheersverordening) in aanvullende gebruiks-, dan wel bouwregels voor het betreffende object. Regels kunnen voorkomen bij een beheersverordening, exploitatieplan en een voorbereidingsbesluit.
Het besluitdocument is het totaal document aan tekst bij het besluit en
heeft betrekking op het volledige besluit. Het besluitdocument wordt
gekoppeld aan aanwijzingsbesluit (proactieve aanwijzing), reactieve
aanwijzing, gerechtelijke uitspraak, voorbereidingsbesluit en
omgevingsvergunning. Wanneer een besluitdocument is gekoppeld aan het *Besluitgebied_X*, wordt een deel van het besluitdocument, de besluittekst,
gekoppeld aan het *Besluitvlak_X* en *Besluitsubvlak_X* (zover deze voorkomt).
De toelichting is de onderbouwing van het besluit en kan als zelfstandige
tekst (de toelichting) worden gekoppeld aan het object of als onderdeel van
het besluitdocument (d_[idn]) gekoppeld worden aan het object *Besluitgebied_X.*
<br/><br/>

***ondergrondInfo*** (verplicht, zo vaak als gewenst):  
Dit attribuut verwijst naar het samengestelde attribuut *Ondergrondreferentie*,
bestaande uit de attributen *ondergrondType* en *ondergrondDatum.* Met dit
attribuut wordt, conform artikel 1.2.4 Bro, aangegeven welke ondergrond bij het
vaststellen van het besluit is gebruikt.  
Er zijn meerdere waarden mogelijk.
<br/>
- **ondergrondType** (verplicht)  
Het type van de gebruikte ondergrond volgens het domein Ondergronden. Op
grond van de Wet basisregistratie grootschalige topografie (BGT) is het per
1 juli 2017 voor bestuursorganen verplicht om gebruik te maken van de Basisregistratie Grootschalige Topografie (BGT). Een bestuursorgaan kan
daar indien nodig gemotiveerd van afwijken. Bij afwijking kan het
bestuursorgaan gebruik maken van:  
	- basisregistratie topografie (BRT)
	- basisregistratie kadaster (BRK)  
Indien geen gebruik is gemaakt van een ondergrond uit het domein
Ondergronden, dan wordt de naam van het bestand van de gebruikte
ondergrond(en) als vrije tekst opgegeven. In de PRTRI2012, hoofdstuk 7, is
toegelicht welke bestandformaten voor de ondergrond kunnen worden gebruikt.
<br/>
- **ondergrondDatum** (verplicht)  
De datum van de gebruikte ondergrond.
<br/><br/>

***verwijzingNaarIllustratieInfo*** (zo vaak als gewenst):  
Dit attribuut is bedoeld om de verbeelding van het gebiedsgerichte besluit (het
kaartbeeld, de kaartbeelden ingeval dit er meer zijn) zoals deze is vastgesteld,
op te nemen. Het attribuut verwijst naar het samengestelde attribuut
*IllustratieReferentie_XGB*, bestaande uit de attributen:
<br/>
- **verwijzingNaarIllustratie** (verplicht)  
Dit attribuut is exclusief bedoeld om hyperlinks te kunnen opnemen. Hier
dient een hyperlink naar de illustratie waarbij het object behoort te
worden opgenomen. Het format dient overeenkomstig de bestandsnaamconventie
voor het bestandstype *illustratie* conform de STRI2012 te zijn.
<br/>
- **typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Hier is uitsluitend de vaste waarde *kaart* volgens
het domein *Illustratie_XGB* toegestaan.
<br/><br/>

***verwijzingNaarExternPlanInfo*** (zo vaak als gewenst):  
Dit attribuut wordt gebruikt om de relatie met een ander instrument of
bijvoorbeeld uitspraak vast te leggen. In Hoofdstuk 5 is dit per gebiedsgericht
besluit toegelicht.  
Dit attribuut verwijst naar het samengestelde attribuut *ExternPlanReferentie*,
bestaande uit de attributen:
<br/>
- **naamExternPlan** (verplicht)  
Hier wordt de naam van het externe plan (besluit) waarnaar verwezen wordt
opgegeven. Dit kan een specifieke naam zijn indien deze bekend is, maar ook
een algemene benaming.
<br/>
- **idnExternPlan** (indien aanwezig)  
In het geval een identificatie (idn) van het externe plan (besluit) waarnaar
verwezen wordt bekend is, wordt deze idn hier worden opgenomen.
<br/>
- **rolExternPlan** (verplicht)  
Hierin wordt de betekenis van het externe plan (besluit) ten opzichte van
het hier betreffende gebiedsgerichte besluit vastgelegd. Het betreft hier
een van de volgende vaste waarden uit het domein *RolExternPlan_XGB:*  
	- *als mutatie opgenomen* in het geval er sprake is van een mutatieplan van
    een beheersverordening, een en ander als uiteengezet in hoofdstuk 4.1 van
    deze praktijkrichtlijn;  
	- *ter vervanging van extern plan/besluit* in het geval het een gedeeltelijke
    herziening van een beheersverordening betreft, een en ander als uiteengezet
    in paragraaf 4.1 van deze praktijkrichtlijn;  
	- *informatie in extern plan/ besluit* in het geval de aanleiding voor dit
    nieuwe besluit is gegeven in een ander plan, besluit, visie of bijvoorbeeld
    een rapport;  
	- *in extern plan/besluit uit te werken* in geval het gebiedsgerichte besluit
    dat als gevolg dient te hebben;  
	- *ten gevolge van extern plan/besluit* in geval het gebiedsgerichte besluit
    een gevolg is van een ander plan (besluit).
<br/><br/>

**verwijzingNorm** (verplicht):  
Teneinde de zekerheid te hebben welke technische status de data hebben, is het
noodzakelijk dat wordt aangegeven aan welke IMRO versie de gegevensset voldoet.
Tevens moet een verwijzing worden opgenomen naar de gebruikte versie van de
praktijkrichtlijn. In het geval objectgerichte planteksten (XML) onderdeel zijn
van de het gebiedsgericht besluit, dan wordt ook de verwijzing naar de standaard
voor planteksten opgenomen.
Het attribuut *verwijzingNorm* dient minimaal twee keer te wor­den opgeno­men
met de verwijzing naar de betreffende versies in het waardeveld: IMRO2012 en
PRGB2012. Bij het gebruik van objectgerichte planteksten in dit ruimtelijk plan
moet ook worden opgenomen: IMROPT2012.
<br/><br/>

**Geometrie** (verplicht):  
Het object *Besluitgebied* kent uitsluitend de geometrie van een vlak of
multivlak (multipolygoon). Dit attribuut kent daarom coördinaten in een
vastgesteld format (gml) en kan door een applicatie automatisch worden
gegenereerd.


## Klasse Besluitvlak_X
Het besluitvlak is het belangrijkste object (klasse) binnen het besluitgebied.
Er komt altijd tenminste één object *Besluitvlak_X* voor, die in dat geval
dezelfde geometrie zal hebben als het object *Besluitgebied_X*. De geometrie van
een object *Besluitvlak_X* is altijd een vlak of multivlak en altijd exact. De
eigenschappen van dit object worden bepaald door een aantal attributen dat aan
dat object wordt gekoppeld.

In Tabel 4 zijn de attributen behorend bij de klasse *Besluitvlak_X* benoemd, de
waarden aangegeven die deze attributen moeten bevatten en is aangegeven of het
gebruik van het attribuut verplicht is en of het attribuut meerdere malen mag
worden gebruikt. Ook is aangegeven of attributen in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven.

**Tabel 4 Klasse besluitvlak_X 1..n\***

<table id="d4e2097" style="width: 100%;"><caption>Klasse besluitvlak_X 1..n*</caption><colgroup><col id="col1" style="width: 5.861746847267632%;"></col><col id="col2" style="width: 2.136851938346567%;"></col><col id="col3" style="width: 21.438580102755722%;"></col><col id="col4" style="width: 28.561419897244278%;"></col><col id="col5" style="width: 6.4222326015880435%;"></col><col id="col6" style="width: 35.57916861279776%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="49CE4054">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0886A9C4">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="312B701D">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6A78CCF1">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="40D4DD85"><i>identificatie: </i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4469238A"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="108548A4"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="64407772"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="7EA9689E" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="04BBD475">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="34D2527D">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="03B351EA">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4EC6F596">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="2D8DBA01">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="31258158">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="06DFE3AA">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="562DAA4D">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 24 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="4AF64D20">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="65F9B132">besluitvlak_X</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="370FAC92">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F5C3BF8">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="7B52E13F" class="space-after">besluitgebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2897AC6A">idn Besluitgebied_X</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5DBE2517">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62A1C13D">automatisch uitlezen door applicatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="1973E89B">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0EAF3051">naam besluitvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="71DD5B21">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="53FDFAAC">volgens tekst van besluit</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="138547EB"><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B24CD99"><i>TekstReferentie_XGB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4DF04E82"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1700A8AC"><i>samengesteld attribuut</i></p><p id="0F5380FD"><i>verwijzend naar specifieke tekst</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="3"><p id="304ED472" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_XGB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B38E2C4">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="306072BD">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7F1E87F6">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5152D743">in format bestandsnaamconventie besluittekst, voorschriften/regels, toelichting of bijlage conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40F777C3">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2996E2A9">besluittekst, voorschriften/regels, toelichting, bijlage bij besluittekst, bijlage bij voorschriften/regels of bijlage bij toelichting</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C822585">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="47E614AA">één van de waarden volgens domein Teksttype_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="514E5BA7">normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="461EF799">naam van de normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2D0D91EF">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7CA44022">geen, één of meer van de waarden volgens domein Normadressant_XGB; alleen indien anders dan bij object Besluitgebied_X</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="57636240">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1ABD1CC6">coördinaten </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6405A481">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4784DB21">beschrijving van vlak of multivlak </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="36C7288F"><b>*</b>  multipliciteit:</p><p id="116BCB39">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="6F5FF1F1">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):  
Elk object *Besluitvlak_X* krijgt een eigen unieke identificatie binnen het
gebiedsgerichte besluit. Het samengestelde attribuut *identificatie* verwijst
naar het object NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.
<br/>
- **Namespace:** (verplicht)  
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
*RuimtelijkPlanobject* mogelijk aan te geven welk object het betreft. Hier
wordt de vaste waarde *besluitvlak_X* ingevuld.
<br/><br/>

**besluitgebied** (verplicht):  
Voor elk object is een verwijzing noodzakelijk naar het object *Besluitgebied_X*
waar het object deel van uitmaakt. Dit attribuut verwijst daartoe naar het
attribuut *identificatie* van het bijbehorende object *Besluitgebied_X.* Dit zal
automatisch binnen een applicatie ge­stalte kunnen krijgen.
<br/><br/>

**naam** (verplicht):  
Aan het attribuut *naam* wordt als waarde een representerende naam van het
object meegegeven, mogelijk zoals deze in de tekst die ernaar verwijst is
opgenomen. Niet altijd zal dit het geval zijn. In dat geval zal een zinvolle
onder­scheidende naam moeten worden ingevuld, zodat het object voor gebruikers
herkenbaar is en de gebruiker hierop desgewenst kan classificeren.
<br/><br/>

***verwijzingNaarTekstInfo*** (verplicht, zo vaak als gewenst):  
Het attribuut is bedoeld voor het verwijzen naar specifieke tekst die behoort
bij het betreffende object *Besluitvlak_X*. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_XGB*, bestaande uit de attributen
*verwijzingNaarTekst, typeTekst* en *normadressant*.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Besluitgebied_X*: objectgericht in XML of niet-objectgericht in HTML formaat.
Het format dient overeenkomstig de afspraak over de bestandsnaamconventies
conform de STRI2012 te zijn. De keuze van de bonhouder wordt vastgelegd in de
*verwijzingNorm* bij dit gebiedsgericht besluit.
<br/>
- **verwijzingNaarTekst** (verplicht)
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hyper)link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgenomen.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directorystructuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml\#fragment</u> of
<u>bestandsnaam.htm­\#fragment</u>.
<br/>
- **typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *Teksttype_XGB*:
	-   besluittekst;
	-   voorschriften/regels;
	-   toelichting;
	-   bijlage bij besluittekst;
	-   bijlage bij voorschriften/regels;
	-   bijlage bij toelichting.  
Wanneer een besluitdocument is gekoppeld aan het *Besluitgebied_X*, wordt
een deel van het besluitdocument, de besluittekst, gekoppeld aan het *Besluitvlak_X* en *Besluitsubvlak_X* (zover deze voorkomt).
<br/><br/>

**normadressant** (zo vaak als gewenst)  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_XGB* geeft de toegestane waarden aan waaruit
één of meerdere kunnen worden gekozen. Indien deze waarde hier wordt opgegeven
treedt deze waarde in de plaats van de waarde die bij het object
*Besluitgebied_X* is opgegeven.
<br/><br/>

**geometrie** (verplicht)  
Het object *Besluitvlak_X* kent uitsluitend de geometrie van een vlak of
multivlak (multipoly­goon). Dit attribuut kent daarom coördinaten in een
vastgesteld format (gml) en kan door een applicatie automatisch worden
gegenereerd.

## Klasse Besluitsubvlak_X
Naast objecten van het type *Besluitvlak_X* kunnen ook objecten van het type
*Besluitsubvlak_X* voorkomen. Deze geven een nadere betekenis aan een gedeelte
van een of meer objecten *Besluitvlak_X* of aan een of meer andere objecten
*Besluitsubvlak_X*. Het object *Besluitsubvlak_X* kan zo vaak voorkomen als
gewenst. De geometrie daarvan is altijd een vlak of multivlak en altijd exact.
De eigenschappen van dit object worden bepaald door een aantal attributen dat
aan dat object wordt gekoppeld.

In Tabel 5 zijn de attributen behorend bij de klasse *Besluitsubvlak_X* benoemd,
de waarden aangegeven die deze attributen moeten bevatten en is aangegeven of
het gebruik van het attribuut verplicht is en of het attribuut meerdere malen
mag worden gebruikt. Ook is aangegeven of attributen gekoppeld worden, dat wil
zeggen altijd in samenhang moeten worden gebruikt. Na de tabel is per attribuut
een nadere toelichting

<table id="d4e2585" style="width: 100%;"><caption>Klasse Besluitsubvlak_X 0..n*</caption><colgroup><col id="col1" style="width: 5.825693396773819%;"></col><col id="col2" style="width: 1.9728443773935245%;"></col><col id="col3" style="width: 22.095857026807472%;"></col><col id="col4" style="width: 30.346988511082746%;"></col><col id="col5" style="width: 6.382731809214344%;"></col><col id="col6" style="width: 33.375884878728094%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="326EC46C">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E7227F1">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5C73380B">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4B39E2A0">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="58DD9227"><i>identificatie:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="009DC38C"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3F6390A6"><i>1</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="69B11263"><i>samengesteld attribuut.</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" rowspan="2"><p id="34E7211D" style="writing-mode: vertical-rl; rotate: 180deg;"><i>NEN3610ID</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="45CAF385">namespace</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="15ECFC6D">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3F9CA389">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1D1774B1">Unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2"><p id="03598553">lokaalID</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C5C68DE">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="202FCA77">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="64770B73">Unieke identificatiecode binnen dit bestand. Bestaande uit max. 24 alfanumerieke tekens.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="66B83834">typePlanobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="445121BF">besluitsubvlak_X</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="778863B7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="466660B0">vaste waarde volgens domein RuimtelijkPlanObject</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="7BA4C7CB">besluitgebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B91C302">idn Besluitgebied_X</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="21F32521">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="07E43124">automatisch uitlezen door applicatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="5D632C1C">besluitvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40A00637">idn bijbehorend Besluitvlak_X</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="561B2FDD">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C0820DA">alleen verplicht indien behoort bij een besluitvlak op grond van een inhoudelijke relatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="22D94E08">besluitsubvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="05933CFC">idn bijbehorend Besluitsubvlak_X</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7C974C3C">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="53549EF2">alleen verplicht indien behoort bij een ander besluitsubvlak op grond van een inhoudelijke relatie</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="451754E0">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2B1FDF42">naam besluitsubvlak</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="00C49E34">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="11F5DF59">volgens tekst van besluit</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="109E6001"><br/><i>verwijzingNaarTekstInfo:</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="26D5B1F9"><i>TekstReferentie_XGB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F196C5B"><i>1..n</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3D5EC32A"><i>samengesteld attribuut</i></p><p id="7771EF81"><i>verwijzend naar specifieke tekst</i></p></td></tr><tr><td align="left" style="padding-top: 0.5em; border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="2" rowspan="3"><p id="7AE37405" style="writing-mode: vertical-rl; rotate: 180deg;"><i>TekstReferentie_XGB</i></p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="02E6CDC5">verwijzingNaarTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6B70AC0C">link</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5C852C04">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7BF67655">in format bestandsnaamconventie besluittekst, voorschriften/regels, toelichting of bijlage conform STRI2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DC67320">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0BD537CE">besluittekst, voorschriften/regels, toelichting, bijlage bij besluittekst bijlage bij voorschriften/regels of bijlage bij toelichting</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0DCA9243">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2F59BF33">één van de waarden volgens domein Teksttype_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6864C7F7">normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7D583F1F">naam van de normadressant</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3D7A73C9">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1DB8B2AC">geen, één of meer van de waarden volgens domein Normadressant_XGB; alleen indien anders dan bij object Besluitgebied_X</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="3"><p id="6E89B735">geometrie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3446645D">coördinaten</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0B852439">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0DCB496B">beschrijving van vlak of multivlak </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="6"><p id="1C076192"><b>*</b>  multipliciteit:</p><p id="6236E6CB">0..1:   komt 0 of 1 keer voor               0..n:   komt zo vaak voor als gewenst</p><p id="6F40E1E5">1:       komt 1 keer voor                      1..n:   komt tenminste 1 keer voor</p></td></tr></tbody></table>

***identificatie (idn)*** (verplicht):  
Elk object *Besluitsubvlak_X* krijgt een eigen unieke identificatie binnen het
gebiedsgerichte besluit. Het samengestelde attribuut *identificatie* verwijst
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
*RuimtelijkPlanobject* mogelijk aan te geven welk object het betreft. Hier
wordt de vaste waarde *Besluitsubvlak_X* ingevuld.
<br/><br/>

**besluitgebied** (verplicht):  
Voor elk object is een verwijzing noodzakelijk naar het object *Besluitgebied_X*
waar het object deel van uitmaakt. Dit attribuut verwijst daartoe naar het
attribuut *identificatie* van het bijbehorende object *Besluitgebied_X.* Dit zal
automatisch binnen een applicatie ge­stalte kunnen krijgen.
<br/><br/>

**besluitvlak** (onder voorwaarde verplicht):  
Een object *Besluitsubvlak_X* heeft op grond van een inhoudelijke relatie altijd
betrekking op minimaal één object *Besluitvlak_X* of op minimaal één ander
object *Besluitsubvlak_X*. Indien dit object *Besluitsubvlak_X* geen betrekking
heeft op een ander object *Besluitsubvlak_X*, dan dient met dit attribuut het
idn van het onderliggende object *Besluitvlak_X* waar dit object
*Besluitsubvlak_X* betrekking op heeft, te worden ingevuld. Dit attribuut moet
meerdere keren worden gebruikt als het object betrekking heeft op meerdere
onderliggende objecten *Besluitvlak_X*.
<br/><br/>

**besluitsubvlak** (onder voorwaarde verplicht):  
Objecten van het type *Besluitsubvlak_X* kunnen op grond van een inhoudelijke
relatie betrekking hebben op andere onderliggende objecten *Besluitsubvlak_X*.
Indien dat het geval is, dient met dit attribuut het idn van deze onderliggende
objecten *Besluitsubvlak_X* te worden opgenomen.
<br/><br/>

**naam** (verplicht):  
Aan het attribuut *naam* wordt als waarde een representerende naam van het
object meegegeven, mogelijk zoals deze in de tekst die ernaar verwijst is
opgenomen. Niet altijd zal dit het geval zijn. In dat geval zal een zinvolle
onder­scheidende naam moeten worden ingevuld, zodat het object voor gebruikers
herkenbaar is en de gebruiker hierop desgewenst kan classificeren.
<br/><br/>

***verwijzingNaarTekstInfo*** (verplicht, zo vaak als gewenst):  
Het attribuut is bedoeld voor het verwijzen naar specifieke tekst die behoort
bij het betreffende object *Besluitsubvlak_X*. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_XGB*, bestaande uit de attributen
*verwijzingNaarTekst, typeTekst* en *normadressant*.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Besluitgebied_X*: objectgericht in XML of niet-objectgericht in HTML formaat.
Het format dient overeen­komstig de afspraak over de bestandsnaamconventies
conform de STRI2012 te zijn. De keuze van de bonhouder wordt vastgelegd in de
*verwijzingNorm* bij dit gebiedsgericht besluit.
<br/>
- **verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hyper)link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgenomen.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directorystructuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml­\#fragment</u> of
<u>bestandsnaam.htm\#fragment</u>.
<br/>
- **typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *Teksttype_XGB*:  
	-   besluittekst;
	-   voorschriften/regels;
	-   toelichting;
	-   bijlage bij besluittekst;
	-   bijlage bij voorschriften/regels;
	-   bijlage bij toelichting.  
Wanneer een besluitdocument is gekoppeld aan het *Besluitgebied_X*, wordt
een deel van het besluitdocument, de besluittekst, gekoppeld aan het *Besluitvlak_X* en *Besluitsubvlak_X* (zover deze voorkomt).
<br/><br/>

**normadressant** (zo vaak als gewenst)  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_XGB* geeft de toegestane waarden aan waaruit
één of meerdere kunnen worden gekozen. Indien deze waarde hier wordt opgegeven
treedt deze waarde in de plaats van de waarde die bij het object
*Besluitgebied_X* is opgegeven.
<br/><br/>

**geometrie** (verplicht)  
Het object *Besluitsubvlak_X* kent uitsluitend de geometrie van een vlak of
multivlak (multipolygoon). Dit attribuut kent daarom coördinaten in een
vastgesteld format (gml) en kan door een applicatie automatisch worden
gegenereerd.
