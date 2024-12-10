# De planobjecten met attributen
**Een klasse, te beschouwen als een objecttype, kent attributen die de
eigen­schappen van dat object­type geven. In dit hoofdstuk worden de klassen
(objec­ttypen) met bijbe­horende attributen be­schreven.**

## Klasse TekstObject
Het object (de klasse) *TekstObject* is het object dat een individueel
tekstonderdeel represen­teert. Ieder TekstObject is een zelfstandig leesbaar
stuk, heeft een titel, begint met een hoofdletter en eindigt met een punt. Een
TekstObject kan bijvoorbeeld zijn een hoofdstuk, paragraaf, of een sublid. Aan
dit object worden de algemene ei­gen­schappen van het tekstonderdeel als
attribuut ge­koppeld.

In Tabel 1 zijn de attributen benoemd, de waarden aangegeven die deze attributen
kunnen bevatten en wordt aangegeven of het gebruik van het attribuut ver­plicht
is en of het attribuut meerdere malen mag worden gebruikt (multipliciteit). Ook
is aangege­ven of het sa­mengestelde attributen betreffen, dat wil zeggen altijd
in samenhang moeten worden gebruikt. Na de tabel is per attribuut een nadere
toelichting gegeven.

**Tabel 1 Klasse TekstObject 1..n\***  

<table id="d4e41" style="width: 100%;"><caption>Klasse TekstObject 1..n*</caption><colgroup><col id="col1" style="width: 27.87093789753672%;"></col><col id="col2" style="width: 21.31375043367642%;"></col><col id="col3" style="width: 6.557187463860298%;"></col><col id="col4" style="width: 44.25812420492656%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7183C7F6">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="679B1BAE">waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4481D108">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="433CEC2F">nadere omschrijving waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3DCEC8A1">identificatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40F39FA1">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5D3FC6D7">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="72BC20C3">eigen identificatie (idn) van het TekstObject. De code moet uniek zijn binnen het plantekstenbestand. De identificatie begint met "NL.IMRO.PT." en wordt gevolgd door max. 32 alfanumerieke tekens. </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="136D57FF">verwijzingNaarPlangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="64D58423">idn plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6E3B1CE3">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6CD01910">identificatie (idn) van het IMRO Plangebied waar dit TekstObject bij hoort.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6F29B6A6">volgnummer</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2E50F6F1">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="731E401B">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6A8E53BA">een oplopend volgnummer 1, 2, 3, ... dat de volgorde van de tekstobjecten aangeeft. Deze waarde wordt veelal automatisch gegenereerd.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3143CCB6">niveau</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1111287A">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5A4A994D">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7AE7F5A9">een oplopende waarde 0, 1, 2, ... dat het hiërarchische niveau van het object aangeeft. Het object met niveau 0 heeft het hoogste niveau. Deze waarde wordt veelal automatisch gegenereerd.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="344B18C8">ouderId</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="40026F26">idn tekstobject</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="386ECB03">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0D6F1380">identificatie (idn) van het bovenliggend TekstObject. Deze waarde wordt veelal automatisch gegenereerd.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6C2D67B2">type</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="24F00BE1">waarde </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="28048617">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5098E18B">één van de waarden volgens domein ObjecttypePlan, ObjecttypeVisie of ObjecttypeBesluit </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7B77D21A">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3EC41BDE">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="046DE733">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="074B30F3">aanduiding van het type tekst waarnaar verwezen wordt. Domein: Teksttype.</p></td></tr></tbody></table>

**identificatie** (verplicht)  
Ieder TekstObject behoeft een eigen identificatie. Deze identificatie bestaat
uit een binnen het plantekstenbestand uniek nummer per object. Dit nummer begint
met “NL.IMRO.PT.” gevolgd door maximaal 32 vrij te gebruiken alfanumerieke
tekens. De lengte van de identificatie is daardoor maximaal 43 alfanumerieke
tekens. Samen met het attribuut verwijzingNaarPlangebied levert dit een unieke
identificatie op.

**verwijzingNaarPlangebied** (verplicht)  
Voor elk object is een verwijzing noodzakelijk naar het IMRO Plangebied waar het
object bij hoort. Dit attribuut verwijst daarom naar het attribuut identificatie
van het bijbehorende IMRO Plangebied object.

**volgnummer** (verplicht)  
Het volgnummer geeft de volgorde binnen de tekst aan. Het eerste TekstObject
krijgt volgnummer 1, het tweede TekstObject krijgt volgnummer 2, enzovoort tot
aan het laatste TekstObject. Dit nummer mag niet verward worden met de
identificatie of het nummer.

**niveau** (verplicht)  
Alle TekstObjecten krijgen een niveau aanduiding mee. Hiermee is het mogelijk
een tekst netjes op te bouwen en opmaakkenmerken voor een hele tekst in één keer
te regelen. Er is slechts één TekstObject met niveau nul. Verder mogen er geen
tussenliggende niveaus ontbreken. Dit betekent dat het niveau van het
bovenliggend TekstObject waar via het ouderId attribuut naar wordt verwezen
altijd precies één niveau hoger is (numerieke waarde 1 lager) dan het niveau van
het actuele TekstObject, met uitzondering van het TekstObject met niveau nul,
dat naar zichzelf verwijst.

**ouderId** (verplicht)  
Elk TekstObject verwijst naar het TekstObject waar het bij hoort (een paragraaf
is onderdeel van een hoofdstuk bijvoorbeeld). Bij een TekstObject met niveau nul
wordt de identificatie (idn) van het actuele TekstObject ingevuld, waarmee het
naar zichzelf verwijst. Het ligt voor de hand dat deze attribuutwaarde
automatisch wordt gegenereerd. Uiteraard moet de ingevulde waarde bestaan binnen
het plantekstenbestand.

**type** (verplicht)  
Bepaalde onderdelen van het plantekstenbestand hebben een vaste functie. Denk
hierbij aan de hoofdstukindeling en de vaste onderdelen van het
bestemmingsartikel zoals in de SVBP is geregeld. De lijst die daarin is
opgenomen is voor het domein ObjecttypePlan gebruikt. Voor andere plantypen zijn
meer algemene termen als “hoofdstuk” en “paragraaf” beschikbaar in
ObjecttypePlan, ObjecttypeVisie en ObjecttypeBesluit. De toepassing hiervan is
beschreven in Hoofdstuk 3 van IMROPT. Met het gebruik van dit attribuut wordt
duidelijk wat het doel is van een bepaald stuk tekst.

**typeTekst** (facultatief)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing naar
tekst dient gekozen te worden uit een van de volgende waarden van het domein
Teksttype.

***titelInfo*** (verplicht)  
Dit attribuut bepaalt de aanhef van een TekstObject. Het samengesteld attribuut
*titelInfo* verwijst naar het object *TitelInfo*. De TitelInfo bestaat uit drie
onderliggende attributen die allemaal afzonderlijk leeg gelaten mogen worden,
maar waarvoor verder geldt dat tenminste één van de drie met een niet-lege
waarde moet zijn gevuld, zodat er nooit een lege titel ontstaat. Verder kunnen
er vanuit de SVBP eisen worden gesteld aan de waarden voor dit attribuut. De
titel is opgebouwd uit de volgende attributen:  
**label** (facultatief)  
De tekstobjecten worden voorzien van een soortnaam van het object. Dit kan
bijvoorbeeld zijn "hoofdstuk"of "artikel". Deze labels kunnen in een koptekst
worden opgenomen. Vaak zal het label overeen komen met het type. Het label is
echter gericht op de verschijningsvorm/verbeelding van de tekst, terwijl het
type naar de functie van een tekst verwijst.  
**nummer** (facultatief)  
Een nummer is meestal een opvolgende reeks. (1,2,3 of A,B,C). In principe wordt
er een doornummerende reeks opgebouwd. Het kan nodig zijn hiervan af te wijken
en een nummering zoals "2a" toe te passen.  
**naam** (facultatief)  
Elk tekstobject heeft een titel. Deze werkwijze maakt leesbare teksten en
transparante verwijzingsmechanismes mogelijk.  

**interneVerwijzing** (facultatief)  
Een interne verwijzing kan objecten binnen de tekst met elkaar verbinden. In een
vieweromgeving kan dit bijvoorbeeld opleveren dat de specifieke toelichting bij
een bepaalde regel direct bij de regel benaderbaar is. Interne verwijzingen
worden gelegd vanuit het object waar ze bij horen. De toelichting bij het
bestemmingsartikel wonen wordt dus gekoppeld vanuit de regel. Het is wel
toegestaan ook in de toelichting een verwijzing te maken. Dan is er ook vanuit
de toelichting een rechtstreekse toegang tot het artikel te realiseren.  
De interneVerwijzing kan als attribuut bij een object worden opgenomen of in de
tekst worden opgenomen. Een verwijzing in de tekst werkt als een hyperlink. Een
verwijzing als attribuut kan door viewers worden geïnterpreteerd om categorieën
als “zie ook” of “zie verder” te vullen.

**externeVerwijzing** (facultatief)  
Vanuit de planteksten kan worden verwezen naar andere bronbestanden waaruit het
instrument is opgebouwd. Dit wordt gedaan door de bestandsnaam van het
gerefereerde bronbestand op te nemen. Zo kan er vanuit de planteksten eenvoudig
worden verwezen naar bijlagen en illustraties. Er kan niet worden verwezen naar
bronnen die geen onderdeel zijn van het instrument. De waarde van dit attribuut
moet voldoen aan de vereisten die in de <a href='https://docs.geostandaarden.nl/ro/stri/#3B7E85C8' target='_blank'>STRI2012, paragraaf 4.2</a>
 worden gesteld aan de bestandsnaam van een bronbestand, eventueel gevolgd door een
“fragment identifier” \#. In de <li><a href='https://docs.geostandaarden.nl/ro/imropt/#6CD31BFC' target='_blank'>IMROPT2012, paragraaf 2.3</a> wordt dit nader gespecificeerd.  
De externeVerwijzing kan als attribuut bij een object worden opgenomen of in de
tekst worden opgenomen. Een verwijzing in de tekst werkt als een hyperlink. Een
verwijzing als attribuut kan door viewers worden geïnterpreteerd om categorieën
als “zie ook” of “zie verder” te vullen.  

*Voorbeeld: In de toelichting van een bestemmingsplan kan bijvoorbeeld worden
verwezen naar een Notitie van uitgangspunten, die als bijlage bronbestand in PDF
formaat is toegevoegd aan het plan. Op de plek in de toelichting waar dit
relevant is, kan een hyperlink worden opgenomen zodat in een vieweromgeving
direct naar dit stuk kan worden verwezen.*

**tekstMetadata** (conditioneel)  
Verwijzing naar de metadata van dit bestand. Hiermee is een link opgenomen naar
de algemene gegevens die van toepassing zijn op de hele tekst. Deze verwijzing
mag maar 1 keer opgenomen worden en komt daarom alleen, verplicht, voor bij de
teksttypen document en besluitdocument

**tekst** (facultatief)  
dit attribuut bevat de daadwerkelijke tekstinhoud. Hier vinden de cijfer- en
lettertekens die samen een tekst vormen hun plek.  
Deze tekst mag worden opgemaakt met een beperkte set van XHTML coderingen,
aangevuld met enkele specifieke codes. Wat er in de tekst mag worden opgenomen
staat beschreven in de <li><a href='https://docs.geostandaarden.nl/ro/imropt/#6CD31BFC' target='_blank'>IMROPT2012, paragraaf 2.3</a>.

## Klasse TekstMetaData
Gegevens over gegevens worden metadata genoemd. In IMROPT2012 zijn bij de klasse
*TekstMetadata* regels opgenomen over de in het tekstbestand op te nemen
metadata. In Tabel 2 wordt klasse *TekstMetadata* toegelicht.

**Tabel 2 Klasse TekstMetadata 1\***

<table id="d4e287" style="width: 100%;"><caption>Klasse TekstMetadata 1*</caption><colgroup><col id="col1" style="width: 23.009360915289495%;"></col><col id="col2" style="width: 31.12215416618514%;"></col><col id="col3" style="width: 6.552640702646481%;"></col><col id="col4" style="width: 39.31584421587889%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="74BB00BD">Attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="45185722">Waarde</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="51D39296">*</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3CAB5929">Opmerking</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4E76D428">identificatie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3FB5DD45">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3EF678A2">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="107EAD28">eigen identificatie (idn) van de TekstMetadata . De code moet uniek zijn binnen het plantekstenbestand. De identificatie begint met "NL.IMRO.PT." en wordt gevolgd door max. 32 alfanumerieke tekens. </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="426189AF">verwijzingNaarPlangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="32EBDFD5">idn plangebied</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1DF6BF61">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1E18AD47">identificatie (idn) van het IMRO Plangebied waar het plantekstenbestand bij hoort.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="363906E0">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="44C999E3">waarde</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0521837E">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="71BE2D12">de waarde van het attribuut typePlan van het Plangebied waar het plantekstenbestand bij hoort.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E806AF4">naam</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5F93D9E5">naam van het plan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="461B1C6E">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="191E7391">volgens de (aanhaal)titel</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5535E9F3">beleidsmatigVerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="595CBED5">gemeentelijke overheid, deelgemeente/stadsdeel, provinciale overheid of nationale overheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5611D0C3">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="23F80FC1">de waarde van het attribuut beleidsmatigVerantwoordelijkeOverheid van het Plangebied waar het plantekstenbestand bij hoort.</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62B18F00">naamOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="50C7CC04">naam van de overheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1BEA8734">0..n</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0F518FE3">volgens format in de vorm: gemeente …., deelgemeente/ stadsdeel …., provincie …. of ministerie ….; alleen bij meerdere verantwoordelijke ministeries wordt naamOverheid evenzoveel ingevuld</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5C53CA2A">overheidsCode    </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="157F9C14">CBS-nummer van de beleidsmatig verantwoordelijke overheid </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5B93778B">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="435DE5E3">4 cijfers; ingeval Rijk: "0000"; ingeval provincie: CBS-nummer provincie, met voorafgaand 2 voorloopnegens; indien deelgemeente/stadsdeel: CBS-nummer gemeente</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="477990F4">creatiedatum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1DBAB4F0">datum waarop het bestand gemaakt is</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1EBC1BEE">0..1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="31882A8A">in de vorm: jjjj-mm-dd</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="113795CD">naamPraktijkrichtlijn</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1C7AA2D4">gebruikte praktijkrichtlijn</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="27C57230">1</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5CBA66BD">de vaste waarde PRPT2012</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;" colspan="4"><p id="1E6CCDD5">* multipliciteit:</p><p id="4F2136B9">1 = komt 1 keer voor        1..n = komt tenminste 1 keer voor</p><p id="483D48F3">0..1 = komt 0 of 1 keer voor    0..n = komt zo vaak voor als gewenst</p></td></tr></tbody></table>

**identificatie** (verplicht)  
Elke object binnen het plantekstenbestand behoeft een eigen identificatie. Deze
identificatie bestaat uit een binnen het plantekstenbestand uniek nummer per
object. Dit nummer begint met “NL.IMRO.PT.” en wordt gevolgd door maximaal 32
vrij te gebruiken alfanumerieke tekens. De lengte van de identificatie is
daardoor maximaal 43 alfanumerieke tekens. Samen met het attribuut
verwijzingNaarPlangebied levert dit een unieke identificatie op.

**verwijzingNaarPlangebied** (verplicht)  
Voor elk object is een verwijzing noodzakelijk naar het IMRO Plangebied waar het
object bij hoort. Dit attribuut verwijst daarom naar het attribuut identificatie
van het bijbehorende IMRO Plangebied object.

**typePlan** (facultatief)  
Voor dit attribuut wordt de waarde van typePlan behorende bij het IMRO
plangebied gespecificeerd.

**naam** (facultatief)  
In het waardeveld van het attribuut *naam* dient de naam van het ruimtelijk
instrument te worden op­genomen. Het gaat daarbij om de volledige naam. Indien
er sprake is van een aanhaaltitel dan wordt deze gebruikt.

**beleidsmatigVerantwoordelijkeOverheid** (facultatief)  
Hier wordt de overheid die beleidsmatig verantwoordelijk is voor het opstellen
van het plan opgeno­men*.* In dit geval een van de volgende vaste waarden:  
-   gemeentelijke overheid
-   deelgemeente/stadsdeel
-   provinciale overheid
-   nationale overheid.

**naamOverheid** (facultatief)  
Hier wordt de naam van de beleidsmatig verantwoordelijke overheid opgenomen, in
de vorm van de tekst “gemeente …….”, “deelgemeente ……”, "stadsdeel ……",
“provincie …….” of “ministerie …….”. In het geval er meerdere verantwoordelijke
ministeries zijn, wordt naamOverheid evenzoveel ingevuld,

**overheidsCode** (facultatief)  
Teneinde kenbaar te maken van welke beleidsmatig verantwoordelijke overheid het
ruimtelijk instrument is, wordt hier het viercijferige CBS-nummer van die
overheid opgenomen. Voor deelgemeen­ten/­stadsdelen wordt het nummer gebruikt
van de gemeente waartoe zij behoren. Voor de provincies worden, voorafgaand aan
het CBS-nummer van de provincie, twee voorloop negens geplaatst, zodat de totale
lengte 4 posities bedraagt. Voor het Rijk wordt het nummer "0000" gebruikt.

**creatiedatum** (facultatief)  
Datum waarop de plantekst is gemaakt. Formaat in de in de vorm: jjjj-mm-dd.

**naamPraktijkrichtlijn** (verplicht)  
Om de ontvanger duidelijk te maken welke gegevens hij ontvangt en welke status
aan deze gegevens mag worden toegekend is het noodzakelijk om aan te geven dat
de gegevensset voldoet aan de betreffende praktijkrichtlijn, inclusief de versie
daarvan, in dit geval PRPT2012.
