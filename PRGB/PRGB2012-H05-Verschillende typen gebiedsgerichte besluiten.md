# Verschillende typen gebiedsgerichte besluiten

**In deze praktijkrichtlijn is in het algemeen aangegeven hoe voor de
verschillende gebiedsgerichte besluiten het informatiemodel voor de ruimtelijke
ordening moet worden toegepast. De gebiedsgerichte besluiten kunnen worden
verdeeld in 2 categorieën: een type besluiten waarvan de volledige inhoud in het
instrument zit en een type besluiten waarvan alleen een kennisgeving
gepubliceerd dient te worden met behulp van de RO Standaarden. De
verbijzondering van ieder type gebiedsgericht besluit met betrekking tot het
informatiemodel wordt in dit hoofdstuk toegelicht.**

## Algemeen

Met behulp van IMRO is een zestal gebiedsgerichte besluiten te maken (coderen)
die allemaal op dezelfde manier te maken zijn. Deze gebiedsgerichte besluiten
verschillen echter onderling. De verschillen zorgen er bijvoorbeeld voor dat de
waarden van bepaalde attributen anders worden ingevuld, of dat er andere
informatie nodig is. Algemeen geldt dat [Hoofdstuk 3](#H03) van deze praktijkrichtlijn
moet worden gebruikt bij het maken van het instrument.

In dit hoofdstuk worden de attributen toegelicht die zijn gekoppeld aan het
plangebied van een bepaald gebiedsgericht besluit en die zorgen voor de
onderlinge verschillen tussen deze gebiedsgerichte besluiten. Attributen die in
dit hoofdstuk niet zijn genoemd maar conform IMRO wel verplicht zijn, moeten
evenwel van waarden worden voorzien. Dit hoofdstuk voorziet in een richtlijn de
gebiedsgerichte besluiten met deze attributen op deze wijze te maken (coderen).
Per gebiedsgericht besluit is aangegeven of de tekst bij dat instrument een
beleids-/besluitdocument betreft of dat de type tekst voorschriften/regels zijn.
Dit type tekst is aangeven in dit hoofdstuk voor *Besluitgebied_X*. De voorwaarden hiervoor zijn opgenomen in hoofdstuk 8 OCL Model
Contraints van het <li><a href='https://docs.geostandaarden.nl/ro/imro' target='_blank'>IMRO2012</a>. 
Bij de besluitvlakken en besluitsubvlakken wordt vervolgens verwezen naar delen van
deze tekst. In het geval regels zijn gekoppeld aan het *Besluitgebied_X,* dan
worden wordt bij de besluit(sub)vlakken alleen naar delen van deze type tekst
(regels)verwezen.

## Gebiedsgerichte besluiten: inhoud

De gebiedsgerichte besluiten in deze paragraaf zijn besluiten die naast een
contour van het plangebied verschillende planobjecten kennen. De planobjecten
zijn besluitvlakken en besluitsubvlakken in verschillende grootten en
hoeveelheden, verschillend per besluit. Juist deze planobjecten geven de
ruimtelijke inhoud van dit type besluit weer in geometrie en tekst.  
Deze inhoudelijke gebiedsgerichte besluiten zijn:  
-   Aanwijzing;
-   Beheersverordening;
-   Exploitatieplan.  
De besluiten worden achtereenvolgens in de paragraaf behandeld.

### Aanwijzing  
Er zijn twee besluittypen binnen de aanwijzingen: een aanwijzingsbesluit
(proactieve aanwijzing) en reactieve aanwijzing. Een aanwijzing wordt als
gebiedsgericht besluit beschikbaar gesteld door de bronhouder: provincie of het
rijk.

**Aanwijzingsbesluit (proactieve aanwijzing)**  
Gedeputeerde staten of de Minister van IenM kunnen een aanwijzing geven aan een
gemeente respectievelijk gemeente of provincie, tot aanpassing van een
bestemmingsplan, inpassingsplan of verordening, of kunnen een aanwijzing geven
in het kader van concrete situaties.

**Reactieve aanwijzing**  
Wanneer de ingediende zienswijze van gedeputeerde staten of de Minister niet
volledig is overgenomen, of indien de gemeenteraad bij de vaststelling van het
bestemmingsplan wijzigingen heeft aangebracht ten aanzien van het
ontwerpbestemmingsplan anders dan naar aanleiding van een zienswijze van
gedeputeerde staten of de Minister, kan de Minister of Gedeputeerde Staten een
reactieve aanwijzing geven. De reactieve aanwijzing heeft als doel dat het
onderdeel waar de reactieve aanwijzing betrekking op heeft, geen deel blijft
uitmaken van het bestemmingsplan zoals het is vastgesteld.

Attributen en waarden  
Van het *typeTekst* attribuut wordt het besluitdocument bij een aanwijzing
gekoppeld. Eventueel kunnen ook worden gekoppeld: toelichting, bijlage bij
besluitdocument en/of bijlage bij toelichting.
Het besluitdocument wordt gekoppeld aan het object *Besluitgebied_X*. Bij een
besluitvlak en besluitsubvlak wordt verwezen naar (een deel van) het
besluitdocument: de besluittekst.
Bij een aanwijzing dient het attribuut *verwijzingNaarExternPlanInfo* verplicht
te worden ingevuld en te verwijzen naar het plan of besluit waar de aanwijzing
betrekking op heeft.
In Tabel 7 is een samenvatting van de attributen die een bepaalde waarde hebben
bij een aanwijzing weergegeven.

**Tabel 7 Specifieke waarden Besluitgebied_X bij een aanwijzing**

<table id="d4e3320" style="width: 100%;"><caption>Specifieke waarden Besluitgebied_X bij een aanwijzing</caption><colgroup><col id="col1" style="width: 49.484416637701315%;"></col><col id="col2" style="width: 50.515583362298685%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="019BB1C6">Attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4CFFB09A">Waarde</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="55DAE7DF">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="49FE3133">Keuze uit:</p><p id="37B24D8A">aanwijzingsbesluit</p><p id="4E558312">reactieve aanwijzing</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1DA93A52">beleidsmatig VerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="002F0E25">één van de waarden volgens domein <i>Overheden_XGB</i>:</p><p id="283E5751">provinciale of nationale overheid</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2E990346"><i>planstatusInfo;</i></p><p id="3F1F69EC">planstatus</p><p id="332F663E">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7F851F2F">één van de waarden volgens domein <i>Planstatus</i></p><p id="310A4CA1">datum van de planstatus</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="42A533E5">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="56C4C06A">alleen opgenomen wanneer de status is vastgesteld. </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5E7BA829"><i>verwijzingNaarTekstInfo:</i></p><p id="48EF1CB0">verwijzingNaarTekst</p><p id="182C6614">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="236708AF">bestandsnaam conform naamconventie</p><p id="42C4F15F">besluitdocument</p><p id="113AF57A">eventueel:</p><ul><li><p id="1D55C7C1">toelichting</p></li><li><p id="7EDCF97F">bijlage bij besluitdocument</p></li><li><p id="7E5C7ACA">bijlage bij toelichting</p></li></ul></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="49FFDB32"><i>verwijzingNaarExternPlanInfo:</i>  </p><p id="12A3105B" class="space-after">naamExternPlan  </p><p id="2AED7E57">idnExternPlan </p><p id="112D6AA4">rolExternPlan   </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1955F80A">de naam van het bestemmingsplan waarop deze aanwijzing van toepassing is</p><p id="0CE5CB78">het [idn] van het betreffende bestemmingsplan.</p><p id="6E9A0BE5">ten gevolge van extern plan/besluit</p></td></tr></tbody></table>

### Beheersverordening  
De beheersverordening is een instrument dat in plaats van een bestemmingsplan
door gemeenten kan worden ingezet. In tegenstelling tot het bestemmingsplan is
de verbeelding van beheersverordening vormvrij. Dit betekent dat er geen
afspraken zijn gemaakt voor de benaming en kleuren van objecten, en de op te
stellen regels zoals in de Standaard Vergelijkbare Bestemmingsplannen
(SVBP2012). De bronhouder bepaalt hoe de verbeelding in kleuren en symboliek
wordt weergegeven.
Er is bij de ontwikkeling van de RO Standaarden 2012 bewust gekozen om de
beheersverordening vormvrij te houden en geen regels voor verbeelding te
hanteren.
De Vereniging Nederlandse Gemeenten (VNG) heeft in 2011 de handreiking
Beheersverordening Wro <a href='https://vng.nl/artikelen/factsheet-ruimtelijke-ordening
' target='_blank'>geactualiseerd</a>. 

Attributen en waarden  
Een van de waarden van *typeTekst* is regels. De regels worden gekoppeld aan het
object *Besluitgebied_X*. Bij een besluitvlak en besluitsubvlak wordt verwezen
naar (een deel van) de regels. Eventueel kunnen ook worden gekoppeld:
toelichting, bijlage bij regels en/of bijlage bij toelichting.
Beheersverordeningen kennen geen standaard voor vergelijkbaarheid of afgesproken
kleuren voor de verbeelding. Hierdoor zal de ontvanger zelf moeten bepalen hoe
de beheersverordening wordt weergegeven. Ruimtelijkeplannen.nl geeft dit
gebiedsgerichte besluit in grijstinten weer. De bronhouder kan de plankaart als
PDF koppelen aan het plangebied met behulp van het attribuut
*verwijzingNaarIllustratieInfo.* Het‘gekleurde plaatje’ is daardoor alleen te
bekijken via de gekoppelde PDF en niet interactief zoals een bestemmingsplan. De
objecten zijn wel raadpleegbaar in de interactieve raadpleegomgeving.
In het geval een bronhouder in een beheersverordening wel gebruik wil maken van
afspraken over vergelijkbaarheid en kleuren conform de SVBP2012 en/of
PRABPBK2012 dan is dit mogelijk door middel van een gekoppelde PDF (gebruik van
het attribuut *verwijzingNaarIllustratieInfo*). De verbeelding kan grofweg op
dezelfde manier worden opgebouwd als bij bestemmingsplan waarbij de
besluitvlakken vergelijkbaar zijn met bestemmingen, besluitsubvlakken met
aanduidingen.

In Tabel 8 is een samenvatting van de attributen die een bepaalde waarde hebben
bij een beheersverordening weggegeven.

**Tabel 8 Specifieke waarden Besluitgebied_X bij een beheersverordening**

<table id="d4e3539" style="width: 100%;"><caption>Specifieke waarden Besluitgebied_X bij een beheersverordening</caption><colgroup><col id="col1" style="width: 49.461244351755305%;"></col><col id="col2" style="width: 50.5387556482447%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="02BCC530">Attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1EE583C7">waarde – toelichting</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3C848060">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="423DC6FB">beheersverordening</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4FD87E94">beleidsmatig VerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3F7CCEF4">Eén van de waarden volgens domein <i>Overheden_XGB</i></p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0135DC9C"><i>planstatusInfo;</i></p><p id="0A5CFB48">planstatus</p><p id="2C20ABE3">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="44C6CB50">één van de waarden volgens domein <i>Planstatus</i></p><p id="19728712">datum van de planstatus</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="795AE3E4">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2EE598F7">alleen opgenomen wanneer de status is vastgesteld. </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1D766021"><i>verwijzingNaarTekstInfo:</i></p><p id="61529100">verwijzingNaarTekst</p><p id="3791A3FD">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="460C0E26">bestandsnaam conform naamconventie</p><p id="5787B4AD">voorschriften/regels</p><p id="67B59AFD">eventueel:</p><ul><li><p id="6EA158A7">toelichting</p></li><li><p id="3ED2DF53">bijlage bij voorschriften/regels</p></li><li><p id="3ACE5948">bijlage bij toelichting</p></li></ul></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5D445C5F"><i>verwijzingNaarIllustratieInfo:</i></p><p id="22988DD1">verwijzingNaarIllustratie</p><p id="51855494">typeIllustratie   </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="49C80662">bestandsnaam conform naamconventie</p><p id="19A9A7A3">vaste waarde: kaart</p></td></tr></tbody></table>

### Exploitatieplan  
Het exploitatieplan kent pas sinds de wijziging van het Bro (1 oktober 2012) en RO
Standaarden 2012 een verplichte elektronische beschikbaarstelling. Dit wil
zeggen dat tot de inwerkingtreding van de RO Standaarden 2012 het
exploitatieplan niet was opgenomen in de lijst van instrumenten in artikel 1.2.1
Bro die elektronisch beschikbaar gesteld moeten worden. Vanaf 1 oktober 2012 kan
het exploitatieplan alleen met behulp van de RO Standaarden 2012 beschikbaar
gesteld worden. Aangezien er een overgangsperiode is tot 1 juli 2013, betekent
dit dat het exploitatieplan verplicht conform de RO Standaarden 2012 vanaf 1
juli 2013 beschikbaar moet worden gesteld. Een exploitatieplan kan alleen in een
2012 manifest beschikbaar gesteld worden door de bronhouder.

De Vereniging Nederlandse Gemeenten (VNG) heeft eind 2010 een handreiking voor
het exploitatieplan <a href='https://vng.nl/artikelen/factsheet-ruimtelijke-ordening
' target='_blank'>opgesteld</a>. Op basis hiervan zijn de specifieke waarden
voor het besluitgebied in Tabel 9 opgesteld. In deze uitwerking is voor het
overzicht niet gebruik gemaakt van objectgerichte planteksten, maar dit is
natuurlijk wel mogelijk.

Attributen en waarden  
Een van de waarden van *typeTekst* is regels. De regels worden gekoppeld aan het
object *Besluitgebied_X*. Bij een besluitvlak en besluitsubvlak wordt verwezen
naar (een deel van) de regels. Eventueel kunnen ook worden gekoppeld:
toelichting, bijlage bij regels en/of bijlage bij toelichting.
Het exploitatieplan moet jaarlijks worden herzien. In dat geval zal het
exploitatieplan los van het bestemmingsplan waar het oorspronkelijk samen mee is
vastgesteld, opnieuw worden vastgesteld. De *planstatusInfo* zal dan afwijken
van de *planstatusInfo* van het bestemmingsplan waar het exploitatieplan bij
hoort. Er wordt in dit besluit met behulp van het attribuut
*verwijzingNaarExternPlanInfo* dan nog steeds verwezen naar het betreffende
bestemmingsplan. Ook kan het voorgaande exploitatieplan als verwijzing worden
opgenomen.
Het kaartmateriaal (zie attribuut *verwijzingNaarIllustratieInfo*) dat bij dit
gebiedsgerichte besluit wordt opgenomen is ter illustratie. Het ‘gekleurde
plaatje’ is alleen te bekijken via de gekoppelde PDF en niet interactief zoals
bijvoorbeeld een bestemmingsplan. Hiermee geeft de bronhouder aan hoe het
besluit met de objecten besluitgebied, besluitvlakken en besluitsubvlakken door
de bronhouder is bedoeld.
Gebiedsgerichte besluiten kennen geen standaard voor vergelijkbaarheid of
afgesproken kleuren voor de verbeelding. Hierdoor zal de ontvanger, waaronder
ruimtelijkeplannen.nl dit gebiedsgerichte besluit in grijstinten weergeven.

In Tabel 9 is een samenvatting van de attributen die een bepaalde waarde hebben
bij een exploitatieplan weergegeven.

**Tabel 9 Specifieke waarden Besluitgebied_X bij een exploitatieplan**

<table id="d4e3744" style="width: 100%;"><caption>Specifieke waarden Besluitgebied_X bij een exploitatieplan</caption><colgroup><col id="col1" style="width: 49.461244351755305%;"></col><col id="col2" style="width: 50.5387556482447%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="499E8E58">Attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="62C7A61A">waarde - toelichting</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3B189838">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="399463AD">exploitatieplan</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="58C6DFC8">beleidsmatig VerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6083E06F">Eén van de waarden volgens domein Overheden_XGB</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1ADF54A1"><i>planstatusInfo:</i></p><p id="04BE5CB0" class="space-after">planstatus</p><p id="2DD607EC">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4127C4AC">gelijk aan de status van het bestemmingsplan waar dit exploitatieplan bij hoort</p><p id="59138098">gelijk aan de datum van het bestemmingsplan waar dit exploitatieplan bij hoort</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B50991A">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7E0E2BD2">alleen opgenomen wanneer de status is vastgesteld. Dit kan hetzelfde vaststellingsbesluit zijn dat gekoppeld is aan het bestemmingsplan waar dit exploitatieplan bij hoort</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="163E4263"><i>verwijzingNaarTekstInfo:</i></p><p id="6D857B46">verwijzingNaarTekst</p><p id="34D71152">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="225ABCBB">bestandsnaam conform naamconventie</p><p id="0E0717B2">voorschriften/regels</p><p id="0094AF48">eventueel:</p><ul><li><p id="39CA3EA3">toelichting</p></li><li><p id="1ED1D021">bijlage bij voorschriften/regels</p></li><li><p id="722A3E74">bijlage bij toelichting</p></li></ul></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0A3C0557"><i>verwijzingNaarIllustratieInfo:</i></p><p id="3BA59700">verwijzingNaarIllustratie</p><p id="5A9E9DE9">typeIllustratie   </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7731B223">bestandsnaam conform naamconventie</p><p id="488BDDC1">vaste waarde: kaart</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6109FCC0"><i>verwijzingNaarExternPlanInfo:</i>  </p><p id="20ACCB1D" class="space-after">naamExternPlan  </p><p id="66DF49DD">idnExternPlan </p><p id="228B6612">rolExternPlan   </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5F958C13">de naam van het bestemmingsplan waar dit exploitatie plan bij hoort</p><p id="5029D8EE">het [idn] van het betreffende bestemmingsplan.</p><p id="321A86A1">ten gevolge van extern plan/besluit</p></td></tr></tbody></table>

## Gebiedsgerichte besluiten: kennisgeving

De gebiedsgerichte besluiten in deze paragraaf zijn besluiten die slechts met de
contour van het besluitgebied worden weergegeven. Het betreft een mededeling
c.q. kennisgeving van de bronhouder gebonden aan een bepaalde locatie.

Deze kennisgeving gebiedsgerichte besluiten zijn:  
-   Gerechtelijke uitspraak
-   Omgevingsvergunning;
-   Voorbereidingsbesluit.

De besluiten worden achtereenvolgens in de paragraaf behandeld.

### Gerechtelijke uitspraak  
In de PRTRI is een uitbreide toelichting op de werkwijze van gerechtelijke
uitspraken opgenomen. In deze paragraaf is toegelicht hoe dit gebiedsgericht
wordt gemaakt en welke informatie erin wordt opgenomen.
Met het inwerkingtreden van de wijziging van het Bro en de RO Standaarden
2012 is de gerechtelijke uitspraak als zelfstandig instrument opgenomen. De basis hiervoor is gelegd in het Bro artikel 1.2.1 lid 3 met de daarbij
behorende toelichting op de pagina 6 en 9 van Nota van Toelichting.

Wanneer zich een van de volgende situaties voordoet, beïnvloedt dit de
inwerkingtreding van een ruimtelijk plan:  
-   Een verzoek om een voorlopige voorziening;
-   Een uitspraak van de rechter daaromtrent;
-   Een uitspraak in beroep tegen een bestemmingsplan;
-   Een aanwijzing van GS of de minister.  
Uitspraak wordt gedaan door de Afdeling bestuursrechtspraak van de Raad van
State (AbRS) of bestuursrechter. Een verzoek om voorlopige voorziening schort de
werking van het besluit mogelijk geheel of gedeeltelijk op, op grond van artikel 8.4 van de Wro. Dit moet dan net als de andere punten zichtbaar gemaakt worden
in combinatie met het betreffende ruimtelijke plan.
De bronhouder van het ruimtelijke plan stelt de gerechtelijke uitspraak (als
kopie van de authentieke informatie van de rechter) als gebiedsgericht besluit
beschikbaar. Op deze wijze kan het in samenhang met, maar tegelijk los van, het
plan worden ontsloten. Het resultaat van de uitspraak zelf is dat het
betreffende ruimtelijke plan niet, deels of geheel onherroepelijk in werking
treedt. Deze informatie wordt als dossierstatus in het manifest opgenomen, zie de toelichting in paragraaf 5.8 van de <a href='https://docs.geostandaarden.nl/ro/tri2012' target='_blank'>Praktijkrichtlijn
Toegankelijkheid Ruimtelijke Instrumenten (PRTRI2012)</a>.

Attributen en waarden  
De *typeTekst* bij een gerechtelijke uitspraak is het besluitdocument. Het
besluitdocument wordt gekoppeld aan het object *Besluitgebied_X*. Eventueel
kunnen ook worden gekoppeld: toelichting, bijlage bij besluitdocument en/of
bijlage bij toelichting.
De status van het gebiedsgerichte besluit *gerechtelijk uitspraak* heeft altijd
de status vastgesteld. De gerechtelijke uitspraak is een document waarin het
besluit en onderbouwing, motivering met betrekking tot deze uitspraak(dictum) is
opgenomen. De tekst die bronhouder opstelt voor de kennisgeving via lokale
bekendmaking en via de Staatscourant kan hiervoor worden gebruikt.
Met behulp van het attribuut *verwijzingNaarExternPlanInfo* kan de relatie met
het bijbehorende plan worden gelegd. Bij een gerechtelijk uitspraak worden 2
verwijzingen opgenomen:  
-   Verwijzing naar het ruimtelijk plan of besluit waar de uitspraak betrekking
    op heeft;
-   Verwijzing naar de uitspraak zelf.

De verwijzing naar de uitspraak kan op verschillende wijzen worden opgenomen.
Dit kan met behulp van het ECLI (European Case Law Identifier) dat het AbRS
gebruikt. Wanneer de AbRS uitspraak doet, staat dit dezelfde dag op website van
AbRS onder vermelding van het nummer.

<p class="note">
Het ECLI (European Case Law Identifier is per eind juni 2013 de opvolger
van LJN nummer: het nummer waaronder de uitspraak op rechtspraak.nl is
opgenomen. Per juli 2013 worden geen LJN-nummers meer uitgegeven en alle al
uitgegeven LJN nummers zijn vanaf dan omgezet naar de ECLI.</p>

In Tabel 10 is een samenvatting van de attributen die een bepaalde waarde hebben
bij een gerechtelijke uitspraak weergegeven.

De planstatus van het betreffende ruimtelijke plan is en blijft vastgesteld. De
inhoud van de uitspraak bepaalt de dossierstatus van het dossier waarin het
betreffende plan en de gerechtelijke uitspraak in het manifest zijn geplaatst.

**Tabel 10 Specifieke waarden Besluitgebied_X bij een gerechtelijk uitspraak**

<table id="d4e3977" style="width: 100%;"><caption>Specifieke waarden Besluitgebied_X bij een gerechtelijk uitspraak</caption><colgroup><col id="col1" style="width: 49.484416637701315%;"></col><col id="col2" style="width: 50.515583362298685%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2BC85963">Attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="401A02C8">waarde - toelichting</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5A133D91">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2F2DCE26">gerechtelijke uitspraak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="4034A13E">beleidsmatig VerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E1A9C31">Eén van de waarden volgens domein <i>Overheden_XGB</i></p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E475D70"><i>planststatusInfo:</i></p><p id="52D86C6D">planstatus</p><p id="53C46A29">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="24418FAC">vastgesteld</p><p id="02318158">datum van de uitspraak</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="506F3A49">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="561BDA8F">de uitspraak zelf wordt als vaststellingsbesluit gekoppeld aan het plangebied</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="616E8FBB"><i>verwijzingNaarTekstInfo:</i></p><p id="698CE487">verwijzingNaarTekst</p><p id="5D2808F3">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79704985">bestandsnaam conform naamconventie</p><p id="63C16ECC">besluitdocument</p><p id="4CD361A1">eventueel:</p><ul><li><p id="20E86231">toelichting</p></li><li><p id="0E0BA86D">bijlage bij besluitdocument</p></li><li><p id="70492108">bijlage bij toelichting</p></li></ul></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3E879F84"><i>verwijzingNaarExternPlanInfo:</i>  </p><p id="2C1EAF91" class="space-after">naamExternPlan  </p><p id="33CB12AC">idnExternPlan </p><p id="368734C1" class="space-after">rolExternPlan  </p><p id="1D4E4258">naamExternPlan  </p><p id="3E8D6870">idnExternPlan </p><p id="10BDFC64">rolExternPlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7D905250">de naam van het ruimtelijke instrument waar deze uitspraak betrekking op heeft</p><p id="17E8C808">het [idn] van het betreffende bestemmingsplan</p><p id="79C14B61" class="space-after">ten gevolge van extern plan/besluit</p><p id="496FAD36">titel van de uitspraak</p><p id="5C54DF0F">nummer van de uitspraak</p><p id="3EFE389D">ten gevolge van extern plan/besluit</p></td></tr></tbody></table>

### Omgevingsvergunning  
De bronhouder is verplicht om de mededeling (kennisgeving in de Staatscourant)
van een met artikel 2.12, eerste lid, onderdeel a, onder 3 van de Wabo verleende
omgevingsvergunning met behulp van de RO Standaarden beschikbaar te stellen. In
het Besluit Omgevingsrecht (Bor) artikel 6.14 is aangegeven dat bij ministeriële
regeling nadere regels worden gesteld over de wijze waarop de mededeling
elektronisch wordt gedaan en beschikbaar gesteld. Dit betreft de ministeriële
Regeling standaarden ruimtelijke ordening 2012. In IMRO2012 en STRI2012 is de
dit type omgevingsvergunning daarom opgenomen. In deze paragraaf van de
toelichting op de RO Standaarden (deze praktijkrichtlijn) lichten we de
werkwijze toe voor de ennisgeving van een omgevingsvergunning
om af te wijken van het bestemmingsplan.

In het Besluit Omgevingsrecht (Bor) artikel 6.14 is aangegeven dat bij
ministeriële regeling nadere regels worden gesteld over de wijze waarop de
mededeling van een met artikel 2.12, eerste lid, onderdeel a, onder 3 van de
Wabo *verleende* omgevingsvergunning elektronisch wordt gedaan en beschikbaar
gesteld. De nadere regels zijn gegeven in de ministeriële Regeling standaarden
ruimtelijke ordening 2012: het gebruik van het Informatiemodel Ruimtelijke
Ordening (IMRO) en Standaard Toegankelijkheid Ruimtelijke Instrumenten (STRI) is
daardoor verplicht. Deze praktijkrichtlijn (PRGB2012) is een toelichting op het
IMRO2010 voor de toepassing in de praktijk.
De kennisgeving van de omgevingsvergunning is de tekst die de bronhouder opstelt
en bekendmaakt via de Staatscourant. De bronhouder koppelt de kennisgeving aan
een contour van de betreffende locatie. Het is geheel vrijblijvend en aan de
bronhouder te bepalen of meer informatie dan de kennisgeving, zoals de
ruimtelijke onderbouwing, aan dit gebiedsgericht besluit wordt gekoppeld. In de
praktijk wordt de ruimtelijke onderbouwing vaak aan de kennisgeving toegevoegd.
De omgevingsvergunning om af te wijken van een bestemmingsplan wordt als een
gebiedsgericht besluit beschikbaar gesteld door de bronhouder. Doordat de
bronhouder de kennisgeving conform de RO Standaarden beschikbaar stelt op haar
weblocatie, wordt deze opgehaald door de landelijke voorziening Ruimtlijkeplannen.nl en is te
raadplegen via https://www.ruimtelijkeplannen.nl/. Voor andere onderdelen dan het
hier genoemde type omgevingsvergunning kent de Wabo geen verplichting tot
elektronische beschikbaarstelling van een omgevingsvergunning.

<p class="note">
Voor inwerking treden van de Wabo was deze vorm van de
omgevingsvergunning in de Wro opgenomen als projectbesluit. Vanaf 1 oktober 2010
was het al verplicht de kennisgeving digitaal beschikbaar te stellen conform de
RO Standaarden 2008. Dit is toegelicht in de werkafspraak *Elektronisch
publiceren kennisgeving omgevingsvergunning*. Met het in gebruik nemen van de RO
Standaarden 2012 komt deze werkafspraak te vervallen.</p>

Attributen en waarden  
De kennisgeving betreft de mededeling dat de omgevingsvergunning is verleend.
Deze tekst wordt opgenomen als *besluitdocument*. Het besluitdocument wordt
gekoppeld aan het object *Besluitgebied_X*. De tekst van de kennisgeving wordt
eveneens opgenomen als *vaststellingsbesluit*. In het geval de bronhouder
redenen heeft om de ruimtelijke onderbouwing aan het besluit toe te voegen, dan
kan deze worden opgenomen als toelichting of als onderdeel van het
besluitdocument. Eventueel kunnen ook worden gekoppeld: toelichting, bijlage bij
besluitdocument en/of bijlage bij toelichting. Het vaststellingsbesluit is
verplicht bij de planstatus *vastgesteld*.
De kennisgeving van de omgevingsvergunning is het type gebiedsgerichte besluit
dat door de bronhouder met de planstatus *vastgesteld* beschikbaar wordt
gesteld. De reden hiervoor is dat de kennisgeving pas beschikbaar wordt gesteld
(conform wet- en regelgeving) als de omgevingsvergunning *is verleend*. De
bronhouder kan er voor kiezen om een concept of ontwerp omgevingsvergunning te
publiceren, dit is niet verplicht en wijkt daarmee af van de voorgeschreven wet-
en regelgeving.

In Tabel 11 is een samenvatting weergegeven van de attributen die een bepaalde
waarde hebben bij een omgevingsvergunning. In de werkafspraak RO Standaarden vs.
Wabo is aangegeven dat de naam dient te beginnen met ‘omgevingsvergunning’. Bij
het gebruik van de RO Standaarden 2012 is dit niet meer nodig omdat dit nu met
het *typePlan* is aan te geven.

**Tabel 11 Specifieke waarden Besluitgebied_X bij een omgevingsvergunning**

<table id="d4e4197" style="width: 100%;"><caption>Specifieke waarden Besluitgebied_X bij een omgevingsvergunning</caption><colgroup><col id="col1" style="width: 49.484416637701315%;"></col><col id="col2" style="width: 50.515583362298685%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7FF02848">Attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="3B465CC6">waarde – toelichting</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="69BE61A6">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="47B5175D">Omgevingsvergunning</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1541C6EA">beleidsmatig VerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1778AE84">één van de waarden volgens domein <i>Overheden_XGB</i></p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="214E5008"><i>planststatusInfo:</i></p><p id="5460FD46">planstatus</p><p id="27E15361">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="16C16E2C">vastgesteld</p><p id="15AC48A8">datum waarop de omgevingsvergunning is verleend</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="05D9C608">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0E8EC660">het besluit van de bronhouder tot het verlenen van de vergunning </p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="08744E45"><i>verwijzingNaarTekstInfo:</i></p><p id="70EB5B98">verwijzingNaarTekst</p><p id="1025CEB5">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2B1708EF">bestandsnaam conform naamconventie</p><p id="2DBE86D3">besluitdocument</p><p id="7930B626">eventueel:</p><ul><li><p id="221DDBA1">toelichting</p></li><li><p id="6E7F68E2">bijlage bij besluitdocument</p></li><li><p id="28E790B0">bijlage bij toelichting</p></li></ul></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="6FC7123B"><i>verwijzingNaarExternPlanInfo</i>: </p><p id="2ABDD090" class="space-after">naamExternPlan  </p><p id="4583B16D">idnExternPlan </p><p id="27CE7DAA">rolExternPlan   </p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1B10B631">de naam van het bestemmingsplan waarvan met deze omgevingsvergunning wordt afgeweken</p><p id="0624F624">het [idn] van het betreffende bestemmingsplan.</p><p id="4F3E6F45">ten gevolge van extern plan/besluit</p></td></tr></tbody></table>

### Voorbereidingsbesluit  
Met dit instrument geeft een bronhouder aan voornemens te zijn een ruimtelijk
plan als een bestemmingsplan, inpassingsplan, provinciale verordening of AMvB op
te stellen. Om inzicht te geven voor welk deel van het grondgebied dit voornemen
geldt, volgt het besluitgebied de grens van het gebied waarop dit
voorbereidingsbesluit betrekking heeft. Het voorbereidingsbesluit kent een eigen
begrenzing die niet dezelfde hoeft te zijn als de begrenzing van het te zijner
tijd op te stellen ruimtelijk plan. Het besluit tot dit voornemen wordt
opgenomen in het vaststellingsbesluit.

Attributen en waarden  
Nadere regels met betrekking tot het voorbereidingsbesluit worden opgenomen in
de regels bij een voorbereidingsbesluit. De regels worden gekoppeld aan het
object *Besluitgebied_X*. Eventueel kunnen ook worden gekoppeld: toelichting,
bijlage bij besluitdocument en/of bijlage bij toelichting.
De regels kunnen echter een deel van het gebied bestrijken waarover het
voorbereidingsbesluit zich uitstrekt. Zowel gebruiksregels als regels ten
aanzien van werken, geen bouwwerken zijnde, kunnen worden toegevoegd aan
besluitvlak(ken). Elk zo nodig met een eigen werkingsgebied binnen het
besluitgebied.

In Tabel 12 is een samenvatting van de attributen die een bepaalde waarde hebben
bij een voorbereidingsbesluit weergegeven.

**Tabel 12 Specifieke waarden Besluitgebied_X bij een voorbereidingsbesluit**

<table id="d4e4401" style="width: 100%;"><caption>Specifieke waarden Besluitgebied_X bij een voorbereidingsbesluit</caption><colgroup><col id="col1" style="width: 49.484416637701315%;"></col><col id="col2" style="width: 50.515583362298685%;"></col></colgroup><thead valign="top"><tr><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="2BD4A0CC">attribuut</p></th><th align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="1729825C">waarde - toelichting</p></th></tr></thead><tbody valign="top"><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="37DDE3AA">typePlan</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="5673B564">voorbereidingsbesluit</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="70A184F1">beleidsmatig VerantwoordelijkeOverheid</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="7F760F34">Eén van de waarden volgens domein <i>Overheden_XGB</i></p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="734BCA12"><i>planststatusInfo:</i></p><p id="3D93FF50">planstatus</p><p id="71B673C1">datum</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="79E4E335">vastgesteld</p><p id="5CED648F">datum dat het voorbereidingsbesluit in werking treedt</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="645A4F4B">verwijzingNaarVaststellingsbesluit</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="77A0CD3B">het besluit tot dit voornemen</p></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="443CD58E"><i>verwijzingNaarTekstInfo:</i></p><p id="6CD9869E">verwijzingNaarTekst</p><p id="700E5A06">typeTekst</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="38E03AE7">bestandsnaam conform naamconventie</p><p id="0D407515">besluitdocument</p><p id="7CD84CD7">eventueel:</p><ul><li><p id="695F975C">toelichting</p></li><li><p id="18AF0481">bijlage bij besluitdocument</p></li><li><p id="0D4C821D">bijlage bij toelichting</p></li></ul></td></tr><tr><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="61C541C3"><i>verwijzingNaarIllustratieInfo:</i></p><p id="6778C0E9">verwijzingNaarIllustratie</p><p id="1E8D9A24">typeIllustratie</p></td><td align="left" style="border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;"><p id="0FC2A8A3">bestandsnaam conform naamconventie</p><p id="39CC3C9F">vaste waarde: kaart</p></td></tr></tbody></table>
