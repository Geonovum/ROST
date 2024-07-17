# De planobjecten met attributen

**In dit hoofdstuk worden de klassen (objecttypen) met bijbehorende attributen
beschreven. Elk object binnen een klasse kent eigenschappen die als attribuut
daaraan worden toegekend. In IMRO2012 is in een zogenoemd UML-schema weergegeven
hoe de objecten (klassen) samenhangen en welke attributen mogelijk zijn.**

## Klasse Besluitgebied_A

Het object van de klasse *Besluitgebied_A* is het object dat de grenzen van het
gebied, of de gebieden, waarover het besluit uitspraken doet geometrisch
vastlegt. Aan dit object worden de algemene eigenschappen van de amvb als
attribuut gekoppeld. Hieronder valt ook een verwijzing naar de volledige tekst
van de amvb en eventuele bijlagen.

Een amvb volgens IMRO2012 bevat altijd precies één Besluitgebied. Sommige amvb’s
refereren niet expliciet aan een geografisch toepassingsgebied, maar kennen een
meer thematisch toepassingsgebied (zoals bijvoorbeeld in het Besluit externe
veiligheid Inrichtingen). In dat geval is heel Nederland het werkingsgebied, en
wordt de kaart van Nederland als geometrie opgenomen. Het wordt hierbij
aanbevolen om tot standaardisatie te komen.

In Tabel 2 zijn de attributen behorend bij de klasse *Besluitgebied_A* benoemd,
de waarden aangegeven die deze attributen moeten bevatten en is aangegeven of
het gebruik van het attribuut verplicht is en of het attribuut meerdere malen
mag worden gebruikt. Ook is aangegeven of attributen in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven.

**Tabel 2 Klasse Besluitgebied_A 1\***

![](media/d7b84bf41b9ea2b6ff8e2912f23dfd11.png)

***identificatie*** (verplicht):  
Ieder ruimtelijk instrument kent een eigen identificatienummer (idn). Deze
identificatie maakt het mogelijk dat op landelijk niveau een uniek onderscheid
voor ieder instrument aanwezig is. Voor het geval het werkingsgebied bestaat uit
meerdere ruimtelijk gescheiden gebieden kent het totaal van die gebieden één
identificatienummer. De geometrie van het object *Besluitgebied_A* is hierbij
een multipolygoon.
Het samengestelde attribuut verwijst naar het object NEN3610ID bestaande uit de
attributen *namespace, lokaalID* en *versie*.

- **namespace:** (verplicht)
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten is dat ‘NL.IMRO’.

- **lokaalID:** (verplicht)
Unieke identificatiecode binnen de registratie van ruimtelijke plannen.
Bestaande uit een bronhouderscode van 4 cijfers (voor het Rijk 0000, voor
gemeente het CBS-nummer) gevolgd door een punt (.) en maximaal door de
bronhouder te bepalen 18 alfanumerieke tekens. Er geldt de volgende
reguliere expressie: [0-9]{4}\\.[A-Za-z0-9]{1,18}

- **Versie:** (verplicht)
Versie-aanduiding van het plangebied bestaande uit 4 alfanumerieke tekens
door de bronhouder te bepalen. Er geldt de volgende reguliere expressie:
[A-Za-z0-9]{4}
Uit de waarden van de attributen *namespace, lokaalID* en *versie* wordt de
bestandsnaam van het plan opgebouwd conform STRI2012:
namespace.lokaalID-versie. De samengestelde reguliere expressie is:
NL\\.IMRO\\.[0-9]{4}\\.[A-Za-z0-9]{1,18}-[A-Za-z0-9]{4}

**typePlan** (verplicht):  
Voor het attribuut *typePlan* wordt het domein *RuimtelijkPlanOfBesluit_AMB*
gebruikt. Hier wordt de waarde *amvb* of *regeling* ingevuld.

**beleidsmatigVerantwoordelijkeOverheid**  (verplicht):
Hier wordt de overheid die beleidsmatig verantwoordelijk is voor het opstellen
van het plan opgenomen uit het domein *Overheden_R*. In dit geval de vaste
waarden: nationale overheid.

**naamOverheid** (verplicht):  
Hier wordt de naam van de beleidsmatig verantwoordelijke overheid opgenomen, in
de vorm van de tekst “ministerie …….”. In het geval er meerdere
verantwoordelijke ministeries zijn, wordt naamOverheid evenzoveel ingevuld.

**overheidsCode** (verplicht):  
Teneinde kenbaar te maken van welke beleidsmatig verantwoordelijke overheid de
amvb is, wordt hier het CBS-nummer van die overheid opgenomen. Hier wordt voor
de nationale overheid de vaste waarde "0000" opgenomen.

**naam** (verplicht):  
In het waardeveld van het attribuut *naam* dient de naam van het besluit (de
amvb of mr) te worden opgenomen zoals deze volgens de (aanhaal)titel daarvan
wordt genoemd.

**normadressant**  (verplicht, zo vaak als gewenst):  
Het attribuut *normadressant* biedt de mogelijkheid aan te geven tot welke
instantie/ overheid/ maatschappelijke partij het besluit zich richt. Daartoe
dienen er één of meer te worden gekozen uit de lijst van het domein
*Normadressant_AMB*.

**locatieNaam** (indien gewenst):  
Indien gewenst kan de naam van de locatie waarop de amvb betrekking heeft hier
worden opgenomen.

***planstatusInfo*** (verplicht):  
Dit attribuut is noodzakelijk om de plangegevens te kunnen plaatsen naar tijd en
belang. Het samengesteld attribuut *planstatus* verwijst naar het object
*PlanstatusEnDatum*, bestaande uit de attributen *planstatus* en *datum*.  
- **planstatus** (verplicht) 
Het domein *Planstatus* geeft de toegestane waarden voor het attribuut *planstatus* waaruit er één moet worden gekozen. De waarde van dit attribuut
geeft de planstatus weer.  

- **datum** (verplicht)
Het attribuut datum is bedoeld om de proceduredatum van het plan op te
nemen. De in het waardeveld op te nemen datum dient overeenkomstig het
binnen het IMRO afgesproken datumformaat te worden genoteerd: jjjj-mm-dd.

**besluitnummer** (onder voorwaarde verplicht):  
Nummer toegekend aan de amvb na vaststelling in het Staatsblad of plaatsing van
een mr in de Staatcourant. Het besluitnummer is alleen toegestaan en dan
verplicht indien de planstatus *vastgesteld* is.
Elk nieuw besluit met een nieuw besluitnummer dient derhalve te worden opgesteld
en digitaal te worden vastgelegd als een nieuw besluit.

**verwijzingNaarVaststellingsbesluit** (onder voorwaarde verplicht):  
Hierin wordt een link opgenomen naar het document met het vaststellingsbesluit.
In het format conform de bestandsnaamconventie *vaststellingsbesluit* volgens de
STRI2012. Dit attribuut is alleen verplicht indien de planstatus vastgesteld is.
Aan het bestand kunnen ook eventueel bij het vaststellingsbesluit behorende
bijlagen worden toegevoegd.

***verwijzingNaarTekstInfo*** (verplicht):  
Dit attribuut verwijst naar het samengestelde attribuut *TekstReferentieBG_AMB*,
bestaande uit de attributen *verwijzingNaarTekst* en *typeTekst*. Attribuut
wordt met de volgende cardinaliteit opgenomen:  
\- 1 verwijzing naar het volledige besluitdocument (de volledige amvb), en/of  
\- 1 verwijzing naar volledige toelichting.  
\- 1 verwijzing naar eventuele volledige regels.  
\- 0..1 verwijzing naar elk typeTekst volledige bijlagen.  

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
binnen de amvb. Daarnaast wordt de keuze vastgelegd met behulp van het attribuut
*verwijzingNorm* bij BesluitGebied_A van deze amvb. Het format dient
overeen­komstig de afspraak over de bestandsnaamconventies conform de STRI2012
te zijn.

- **verwijzingNaarTekst** (verplicht)
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut*typeTekst* te worden opgenomen. Het format dient overeen­komstig de
afspraak over de bestandsnaamconventies voor het bestandstype *besluitdocument*, *toelichting*, *regels* of *bijlagen* conform de
STRI2012 te zijn.
- **typeTekst** (verplicht)
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *TeksttypeBG_AMB*:
	-   besluitdocument;
	-   regels;
	-   toelichting;
	-   bijlage bij besluitdocument;
	-   bijlage bij regels;
	-   bijlage bij toelichting.


***ondergrondInfo*** (verplicht, zo vaak als gewenst):  
Dit attribuut verwijst naar het samengestelde attribuut *Ondergrondreferentie*,
bestaande uit de attributen *ondergrondType* en *ondergrondDatum.* Met dit
attribuut wordt, conform artikel 1.2.4 Bro, aangegeven welke ondergrond bij het
vaststellen van het besluit is gebruikt.
Er zijn meerdere waarden mogelijk.  
-	**ondergrondType** (verplicht)  
Het type van de gebruikte ondergrond volgens het domein Ondergronden. Op
grond van de Wet basisregistratie grootschalige topografie (BGT) is het per
1 juli 2017 voor bestuursorganen verplicht om gebruik te maken van de
-	**Basisregistratie Grootschalige Topografie (BGT).** Een bestuursorgaan kan
daar indien nodig gemotiveerd van afwijken. Bij afwijking kan het
bestuursorgaan gebruik maken van:  
	-   basisregistratie topografie (BRT)  
	-   basisregistratie kadaster (BRK)  
Indien geen gebruik is gemaakt van een ondergrond uit het domein Ondergronden, dan wordt de naam van het bestand van de gebruikte
ondergrond(en) als vrije tekst opgegeven. In de PRTRI2012, hoofdstuk 7, is
toegelicht welke bestandformaten voor de ondergrond kunnen worden gebruikt.

**ondergrondDatum** (verplicht)  
De datum van de gebruikte ondergrond.

***verwijzingNaarIllustratieInfo*** (indien gewenst, zo vaak als gewenst):  
Dit attribuut is bedoeld om de verbeelding van de verordening (het kaartbeeld of
de kaartbeelden ingeval dit er meer zijn, op te nemen. Het betreft
kaarten/afbeeldingen op het niveau van het "plangebied" en niet op het niveau
van onderliggende objecten; illustraties die bij onderliggende objecten behoren
worden bij die objecten opgenomen. Het attribuut verwijst naar het samengestelde
attribuut *IllustratieReferentiePG*, bestaande uit de attributen:  
-	**verwijzingNaarIllustratie** (verplicht)
Dit attribuut is exclusief bedoeld om hyperlinks te kunnen opnemen. Hier
dient een hyperlink naar de illustratie waarbij het object behoort te worden
opgenomen. Het format dient overeenkomstig de afspraak over de
bestandsnaamconventie voor het bestandstype *illustraties* conform de
STRI2012 te zijn.   
-	**typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Er dient gekozen te worden uit één van de waarden
(afbeelding of kaart) volgens het domein *Illustratie*.

***verwijzingNaarExternPlanInfo*** (zo vaak als gewenst):  
Dit attribuut wordt gebruikt om de relatie met een ander instrument vast te
leggen. Bij een mr dient altijd naar de bovenliggende AMvB verwezen te worden.
In [Hoofdstuk 4](#H04) is dit met betrekking tot herzieningen toegelicht. Dit attribuut
verwijst naar het samengestelde attribuut *ExternPlanReferentie_AMB*, bestaande
uit de volgende attributen *naamExternPlan*, *idnExternPlan* en *rolExternPlan*.  
-	**naamExternPlan** (verplicht)  
Hier wordt de naam van het externe plan of in voorkomend geval besluit
waarnaar verwezen wordt opgegeven. Dit kan een specifieke naam zijn indien
deze bekend is, maar ook een algemene benaming.  
-	**idnExternPlan** (indien gewenst)  
In het geval een identificatie (idn) van het externe plan waarnaar verwezen
wordt, bekend is, kan deze idn hier worden opgenomen.  
-	**rolExternPlan** (verplicht)
Hierin wordt de betekenis van het externe plan/besluit ten opzichte van de
amvb vastgelegd. Het betreft hier een van de volgende vaste waarden uit het
domein *RolExternPlan_AMB*:  
	-   *ten gevolge van extern plan/besluit* in geval het plan een gevolg is van
    een ander plan of besluit, zoals een mr die naar amvb verwijst;  
	-   *in extern plan/besluit uit te werken* in geval de amvb dat als gevolg dient
    te hebben;  
	-   *informatie in extern plan/besluit* in geval (nadere) informatie in een
    extern plan of besluit staat;  
	-   *ter vervanging van extern plan* ingeval daarvan sprake is, een en ander als
    uiteengezet in hoofdstuk [4.1](#gedeeltelijke-herziening) van deze praktijkrichtlijn;  
	-   *als mutatie opgenomen* voor het geval er sprake is van een mutatieplan, een
    en ander als uiteengezet in hoofdstuk [4.1](#gedeeltelijke-herziening) van deze praktijkrichtlijn.

**verwijzingNorm** (verplicht):  
Teneinde de zekerheid te hebben welke technische status de data hebben, is het
noodzakelijk dat wordt aangegeven aan welke IMRO versie de gegevensset voldoet.
Tevens moet een verwijzing worden opgenomen naar de gebruikte versie van de
praktijkrichtlijn. In het geval objectgerichte planteksten (XML) onderdeel zijn
van de AmvB, dan wordt ook de verwijzing naar de standaard voor planteksten
opgenomen.

Het attribuut *verwijzingNorm* dient minimaal twee keer te wor­den opgeno­men
met de verwijzing naar de betreffende versies in het waardeveld: IMRO2012 en
PRBP2012. Bij het gebruik van objectgerichte planteksten in dit ruimtelijk plan
moet ook worden opgenomen: IMROPT2012.

***begrenzing*** (verplicht): 
Dit attribuut verwijst naar het samengestelde attribuut *GeometriePlangebied*,
bestaande uit de attributen *geometrie* en *idealisatie*.  
-	**geometrie** (verplicht)  
Het object *Besluitgebied_A* kent uitsluitend de geometrie van een vlak of
multivlak (multipolygoon). Dit attribuut legt de coördinaten in een
vastgesteld format (gml) vast. De coördinaten worden door de applicatie
automatisch gegenereerd.  
-	**idealisatie** (verplicht)  
Met het attribuut *idealisatie* kan de nauwkeurigheid van de begrenzing van
een object worden aangegeven. Dit attribuut heeft de vaste waarde exact
volgens het domein *Idealisatie_1*. De vaste waarde exact geeft aan dat de
geometrie van het object opgenomen is met de nauwkeurigheid die behoort bij
de dataset.

## Klasse Besluitvlak_A

De objecten van de klasse *Besluitvlak_A* zijn de belangrijkste objecten binnen
het besluitgebied. De verplicht opgenomen geometrie is altijd exact of
indicatief. De eigenschappen van dit object worden bepaald door een aantal
attributen dat aan dat object wordt gekoppeld. Indien er slechts één object
*Besluitvlak_A* wordt gebruikt bij het coderen van de amvb, dan is de geometrie
gelijk aan die van het object *Besluitgebied_A*.

In Tabel 3 zijn de attributen behorend bij de klasse *Besluitvlak_A* benoemd, de
waarden aangegeven die deze attributen moeten bevatten en is aangegeven of het
gebruik van het attribuut verplicht is en of het attribuut meerdere malen mag
worden gebruikt. Ook is aangegeven of attributen in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven.

**Tabel 3 Klasse Besluitvlak_A 1..n\***

![](media/faafefaeb029af24df53f33b623b72a7.png)

***identificatie (idn)*** (verplicht):  
Elk object *Besluitvlak_A* krijgt een eigen unieke identificatie binnen de amvb.
Het samengestelde attribuut *identificatie* verwijst naar het object NEN3610ID
bestaande uit de attributen *namespace* en *lokaalID*.
-	**namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
-	**lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject** (verplicht):  
Het attribuut *typePlanobject* maakt het via het bijbehorende domein
*RuimtelijkPlanobject* mogelijk aan te geven welk object het betreft. Hier wordt
de vaste waarde *Besluitvlak_A* ingevuld.

**besluitgebied** (verplicht):  
Voor elk object is een verwijzing noodzakelijk naar het object *Besluitgebied_A*
waar het object deel van uitmaakt. Dit attribuut verwijst daartoe naar het
attribuut *identificatie* van het bijbehorende object *Besluitgebied_A*. Dit zal
automatisch binnen een applicatie gestalte kunnen krijgen.

**naam** (verplicht):  
Aan het attribuut *naam* wordt als waarde een (beleid of voorschrift)
representerende naam van het object meegegeven, mogelijk zoals deze in de tekst
die ernaar verwijst is opgenomen. Niet altijd zal dit het geval zijn. In dat
geval zal een zinvolle onderscheidende naam moeten worden ingevuld, zodat het
object voor gebruikers herkenbaar is en de gebruiker hierop desgewenst kan
classificeren.

**thema** (verplicht, zo vaak als gewenst):  
Met dit attribuut wordt het thema van het object opgenomen. Het thema wordt
gekozen uit de waarden volgens het voorlopige domein *Thema*. Indien geen
bruikbare waarde wordt gevonden kan een vrije tekst worden opgenomen. Dit
attribuut kan meerdere keren worden opgenomen.

***verwijzingNaarTekstInfo*** (verplicht, zo vaak als gewenst):  
Het attribuut is bedoeld voor het verwijzen naar specifieke tekst die behoort
bij het betreffende object *Besluitvlak_A*. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_AMB*, bestaande uit de attributen
*verwijzingNaarTekst, typeTekst* en *normadressant*.
De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Besluitgebied_A*: objectgericht in XML of niet-objectgericht in HTML formaat.
Het format dient overeen­komstig de afspraak over de bestandsnaamconventies
conform de STRI2012 te zijn. De keuze van de bronhouder wordt vastgelegd in de
*verwijzingNorm* bij deze amvb.  
-	**verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgenomen.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directorystructuur/pad mogen worden opgenomen. Wel moet
een nadere precisering naar de plaats binnen een document te worden
opgenomen met behulp van een fragmentidentifier. Het fragment in de
hyperlink is de locatie in de plantekst (XML of HTML) waar het van
toepassing zijnde attribuut *typeTekst* betrekking op heeft. Een hyperlink
krijgt dan de vorm: <u>bestandsnaam.xml­\#fragment</u>  of <u>bestandsnaam.htm­\#fragment</u>.  
-	**typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *Teksttype_AMB*:  
	-   besluittekst;  
	-   regels;  
	-   toelichting;  
	-   bijlage bij besluittekst;  
	-   bijlage bij regels of  
	-   bijlage bij toelichting.

**normadressant** (zo vaak als gewenst)  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_AMB* geeft de toegestane waarden aan waaruit
één of meerdere kunnen worden gekozen. Indien deze waarde hier wordt opgegeven
treedt deze waarde in de plaats van de waarde die bij het object
*Besluitgebied_A* is opgegeven.

***verwijzingNaarIllustratieInfo*** (zo vaak als gewenst):  
Dit attribuut is bedoeld om een specifieke afbeelding of illustratie behorende
bij het object op te nemen. Het attribuut verwijst naar het samengestelde
attribuut *IllustratieReferentie*, bestaande uit de attributen
*verwijzingNaarIllustratie* en *typeIllustratie*.  
-	**verwijzingNaarIllustratie** (verplicht)  
Dit attribuut is exclusief bedoeld om links te kunnen opnemen. Hier dient
een link naar de illustratie waarbij het object behoort te worden opgenomen.
Het format dient overeenkomstig de afspraak over de bestandsnaamconventie
voor het bestandstype *illustratie* conform de STRI2012 te zijn.  
-	**typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Er dient gekozen te worden uit één van de waarden *afbeelding of kaart* volgens het domein *Illustratie*.  
-	**legendanaam** (indien gewenst)  
Indien het object in de legenda van de illustratie is opgenomen kan hier de
naam van de legenda-eenheid worden opgenomen teneinde duidelijk te maken
welk deel van de illustratie bij het object behoort.

**cartografieInfo** (zo vaak als gewenst):  
Geen of foutief gebruik van het attribuut *cartografieInfo* resulteert in een
grijze of andere objectweergave in een interactieve raadpleegomgeving. Daarnaast
word het attribuut *cartografieInfo* gebruikt om verschillende kaarten in de
amvb zichtbaar en presenteerbaar te maken. De structuur van de kaartopbouw staat
echter (gedeeltelijk) los van de planstructuur. Een object kan in meerdere
kaarten voorkomen. Daarvoor moeten dan meerdere attributen *cartografieInfo* met
waarden toegevoegd worden om dit te realiseren.

Het attribuut verwijst naar het samengestelde attribuut *cartografieInfo*
bestaande uit de attributen *kaartnummer, kaartnaam en symboolcode.*  
-	**kaartnummer** (verplicht)
Het nummer van de kaart van de amvb waartoe dit object behoort. Het
kaartnummer is door de bronhouder te bepalen. Kaarten kunnen in een
interactieve raadpleegomgeving worden geprioriteerd op basis van
kaartnummer. De kaart met nummer 1 wordt als hoofdkaart gezien en moet
altijd voorkomen, kaartnummer 0 niet mag voorkomen. Voorloopnullen worden
genegeerd (001 wordt bijvoorbeeld 1). Het kaartnummer is een uniek nummer
gekoppeld aan een kaartnaam.  
-	**kaartnaam** (verplicht)  
De naam van de kaart van de amvb waartoe dit object behoort. De kaartnaam is
door de bronhouder te bepalen.
-	**symboolcode** (zo vaak als gewenst)  
De symboolcode uit de symboolcodelijst voor vormvrije plannen (onderdeel van
de RO Standaarden 2012). De symboolcode geeft de kleur en patroon aan voor
de wijze waarop het object *Besluitgebied_A* in de interactieve
raadpleegomgeving wordt weergegeven.

Een symboolcode die aan een object wordt toegevoegd geldt deze alleen voor
dit object zelf en niet voor de onderliggende objecten. Er vindt dus geen
overerving van symboolcode plaats.

***begrenzing*** (verplicht, zo vaak als gewenst):  
Het attribuut verwijst naar het samengestelde attribuut
*GeometrieBesluitObject_A*, bestaande uit de attributen:  
-	**geometrie** (verplicht)  
Het object *Besluitvlak_A* kent uitsluitend de geometrie van een
beschrijving van punt, lijn, vlak of meervoudige versies daarvan (multipunt,
multilijn, multivlak). Dit attribuut legt de coördinaten in een vastgesteld
format (gml) vast. De coördinaten kunnen door een applicatie automatisch
worden gegenereerd.  
-	**idealisatie** (verplicht)  
Met het attribuut *idealisatie* kan de nauwkeurigheid van de begrenzing van
een object worden aangegeven. Er dient een keuze gemaakt te worden volgens
het domein *Idealisatie_2*. De nauwkeurigheid van de begrenzing van een
object neemt af in de keuzes *exact* of *indicatief*.  
	-   Exact geeft aan dat de geometrie van het object opgenomen is met de
    nauwkeurigheid die behoort bij de dataset, waarmee de begrenzing als exact
    wordt beschouwd;  
	-   Indicatief betekent dat de geometrie indicatief geïnterpreteerd moet worden;
    waarmee de begrenzing niet is vastgelegd.

## Klasse Besluitsubvlak_A

Naast de objecten *Besluitvlak_A* kunnen ook objecten van het type
*Besluitsubvlak_A* voorkomen. Deze geven een nadere betekenis aan een gedeelte
van een object Besluitvlak_A of aan een ander object *Besluitsubvlak_A*. De
verplicht opgenomen geometrie is altijd exact of indicatief. De eigenschappen
van dit object worden bepaald door een aantal attributen dat aan dat object
wordt gekoppeld.

In Tabel 4 zijn de attributen behorend bij de klasse *Besluitsubvlak_A* benoemd,
de waarden aangegeven die deze attributen moeten bevatten en is aangegeven of
het gebruik van het attribuut verplicht is en of het attribuut meerdere malen
mag worden gebruikt. Ook is aangegeven of attributen in samenhang moeten worden
gebruikt. Na de tabel is per attribuut een nadere toelichting gegeven.

**Tabel 4 Klasse Besluitsubvlak_A 0..n\***

![](media/dfd14fce2476626608dbb356b0adc08d.png)


***identificatie (idn)*** (verplicht):  
Elk object *Besluitsubvlak_A* krijgt een eigen unieke identificatie binnen de
amvb. Het samengestelde attribuut *identificatie* verwijst naar het object
NEN3610ID bestaande uit de attributen *namespace* en *lokaalID*.  
-	**namespace:** (verplicht)  
Een unieke verwijzing naar een registratie van objecten. Voor IMRO objecten
is dat ‘NL.IMRO’.  
-	**lokaalID:** (verplicht)  
Door de bronhouder te bepalen unieke identificatiecode binnen de context van
het bestand bestaande uit maximaal 32 alfanumerieke tekens. Toegestane
tekens: {”A”…”Z”, “a”…”z”, ”0”…”9”, “_”, “- “, “,”, ”.”}.

**typePlanobject** (verplicht):  
Het attribuut *typePlanobject* maakt het via het bijbehorende domein
*RuimtelijkPlanobject* mogelijk aan te geven welk object het betreft. Hier wordt
de vaste waarde *Besluitsubvlak_A* ingevuld.

**besluitgebied** (verplicht):  
Voor elk object is een verwijzing noodzakelijk naar het object *Besluitgebied_A*
waar het object deel van uitmaakt. Dit attribuut verwijst daartoe naar het
attribuut identificatie van het bijbehorende object *Besluitgebied_A*. Dit zal
automatisch binnen een applicatie gestalte kunnen krijgen.

**besluitvlak** (onder voorwaarde verplicht):  
Een object *Besluitsubvlak_A* heeft op grond van een inhoudelijke relatie altijd
betrekking op minimaal één object Besluitvlak_A of op minimaal één ander object
*Besluitsubvlak_A*. Indien dit object *Besluitsubvlak_A* geen betrekking heeft
op een ander object *Besluitsubvlak_A*, dan dient met dit attribuut het idn van
het onderliggende object *Besluitvlak_A* waar dit object *Besluitsubvlak_A*
betrekking op heeft, te worden ingevuld. Dit attribuut moet meerdere keren
worden gebruikt als het object betrekking heeft op meerdere onderliggende
objecten *Besluitvlak_A*.

**besluitsubvlak** (onder voorwaarde verplicht):  
Objecten van het type *Besluitsubvlak_A* kunnen op grond van een inhoudelijke
relatie betrekking hebben op andere onderliggende objecten *Besluitsubvlak_A*.
Indien dat het geval is, dient met dit attribuut het idn van deze onderliggende
objecten *Besluitsubvlak_A* te worden opgenomen.

**naam** (verplicht):  
Aan het attribuut *naam* wordt als waarde een (beleid of voorschrift)
representerende naam van het object meegegeven, mogelijk zoals deze in de tekst
die ernaar verwijst is opgenomen. Niet altijd zal dit het geval zijn. In dat
geval zal een zinvolle onderscheidende naam moeten worden ingevuld, zodat het
object voor gebruikers herkenbaar is en de gebruiker hierop desgewenst kan
classificeren.

**thema** (verplicht, zo vaak als gewenst):  
Met dit attribuut wordt het thema van het object opgenomen. Het thema wordt
gekozen uit de waarden volgens het voorlopige domein *Thema*. Indien geen
bruikbare waarde wordt gevonden kan een vrije tekst worden opgenomen. Dit
attribuut kan meerdere keren worden opgenomen.

***verwijzingNaarTekstInfo*** (verplicht, zo vaak als gewenst):  
Dit attribuut is bedoeld voor het verwijzen naar specifieke tekst die behoort
bij het betreffende object *Besluitvlak_A*. Het attribuut verwijst naar het
samengestelde attribuut *TekstReferentie_AMB*, bestaande uit de attributen *verwijzingNaarTekst, typeTekst* en *normadressant*.

De bronhouder kiest voor dezelfde vorm van planteksten als bij het object
*Besluitgebied_P*: objectgericht in XML of niet-objectgericht in HTML formaat.
Het format dient overeen­komstig de afspraak over de bestandsnaamconventies
conform de STRI2012 te zijn. De keuze van de bronhouder wordt vastgelegd in de
*verwijzingNorm* bij deze amvb.  
-	**verwijzingNaarTekst** (verplicht)  
Dit attribuut is bedoeld om (hyper)links te kunnen opnemen. Hier dient een
(hy­per)­link naar het soort document dat is aangegeven bij het attribuut *typeTekst* te worden opgeno­men.
Voor de waarde van het attribuut *verwijzingNaarTekst* geldt dat geen
elementen van een directorystructuur/pad mogen worden opgenomen. Wel kan een
nadere precisering naar de plaats binnen een document te worden opgenomen
met behulp van een fragmentidentifier. Het fragment in de hyperlink is de
locatie in de plantekst (XML of HTML) waar het van toepassing zijnde
attribuut *typeTekst* betrekking op heeft. Een hyperlink krijgt dan de vorm:
<u>bestandsnaam.xml­\#fragment</u> of <u>bestandsnaam.htm­\#fragment</u>.  
-	**typeTekst** (verplicht)  
Hiermee wordt aangegeven om wat voor type tekst het gaat. Per verwijzing
naar tekst dient gekozen te worden uit een van de volgende waarden van het
domein *Teksttype_AMB*:
	-   beleidstekst;  
	-   regels;  
	-   toelichting;  
	-   bijlage bij beleidstekst; 
	-   bijlage bij regels of  
	-   bijlage bij toelichting.

**normadressant** (zo vaak als gewenst)  
Dit attribuut geeft aan op welke organen of rechtspersonen de regeling zich
richt. Het domein *Normadressant_AMB* geeft de toegestane waarden aan waaruit
één of meerdere kunnen worden gekozen. Indien deze waarde hier wordt opgegeven
treedt deze waarde in de plaats van de waarde die bij het object *Besluitgebied_A* is opgegeven.

***verwijzingNaarIllustratieInfo*** (zo vaak als gewenst):  
Dit attribuut is bedoeld om een specifieke verbeelding of illustratie behorende
bij het object op te nemen. Het attribuut verwijst naar het samengestelde
attribuut *IllustratieReferentie*, bestaande uit de attributen *verwijzingNaarIllustratie, typeIllustratie* en *legendanaam.*  
-	**verwijzingNaarIllustratie** (verplicht)  
Dit attribuut is exclusief bedoeld om links te kunnen opnemen. Hier dient
een link naar de illustratie waarbij het object behoort te worden opgenomen.
Het format dient overeenkomstig de afspraak over de bestandsnaamconventie
voor het bestandstype *illustratie* conform de STRI2012 te zijn.  
-	**typeIllustratie** (verplicht)  
Hierin wordt het type van de illustratie vastgelegd: om wat voor soort
illustratie het gaat. Er dient gekozen te worden uit één van de waarden *afbeelding* of *kaart* volgens het domein *Illustratie*.  
-	**legendanaam** (indien gewenst)  
Indien het object in de legenda van de illustratie is opgenomen kan hier de
naam van de legenda-eenheid worden opgenomen teneinde duidelijk te maken
welk deel van de illustratie bij het object behoort.

***cartografieInfo*** (zo vaak als gewenst):  
Geen of foutief gebruik van het attribuut *cartografieInfo* resulteert in een
grijze of andere objectweergave in een interactieve raadpleegomgeving. Daarnaast
word het attribuut *cartografieInfo* gebruikt om verschillende kaarten in de
amvb zichtbaar en presenteerbaar te maken. De structuur van de kaartopbouw staat
echter (gedeeltelijk) los van de planstructuur. Een object kan in meerdere
kaarten voorkomen. Daarvoor moeten dan meerdere attributen *cartografieInfo* met
waarden toegevoegd worden om dit te realiseren.  
Het attribuut verwijst naar het samengestelde attribuut *cartografieInfo*
bestaande uit de attributen *kaartnummer, kaartnaam en symboolcode.*  
-	**kaartnummer** (verplicht)  
Het nummer van de kaart van de amvb waartoe dit object behoort. Het
kaartnummer is door de bronhouder te bepalen. Kaarten kunnen in een
interactieve raadpleegomgeving worden geprioriteerd op basis van
kaartnummer. De kaart met nummer 1 wordt als hoofdkaart gezien en moet
altijd voorkomen, kaartnummer 0 niet mag voorkomen. Voorloopnullen worden
genegeerd (001 wordt bijvoorbeeld 1). Het kaartnummer is een uniek nummer
gekoppeld aan een kaartnaam.  
-	**kaartnaam** (verplicht)  
De naam van de kaart van de amvb waartoe dit object behoort. De kaartnaam is
door de bronhouder te bepalen. 
-	**symboolcode** (zo vaak als gewenst)  
De symboolcode uit de symboolcodelijst voor vormvrije plannen (onderdeel van
de RO Standaarden 2012). De symboolcode geeft de kleur en patroon aan voor
de wijze waarop het object *Besluitgebied_A* in de interactieve
raadpleegomgeving wordt weergegeven.

Een symboolcode die aan een object wordt toegevoegd geldt deze alleen voor
dit object zelf en niet voor de onderliggende objecten. Er vindt dus geen
overerving van symboolcode plaats.

***begrenzing*** (verplicht, zo vaak als gewenst):  
Het attribuut verwijst naar het samengestelde attribuut *GeometrieBesluitObject_A*, bestaande uit de attributen:  
-	**geometrie** (verplicht)  
Het object *Besluitvlak_A* kent uitsluitend de geometrie van een
beschrijving van punt, lijn, vlak of meervoudige versies daarvan (multipunt,
multilijn, multivlak). Dit attribuut legt de coördinaten in een vastgesteld
format (gml) vast. De coördinaten kunnen door een applicatie automatisch
worden gegenereerd.  
-	**idealisatie** (verplicht)  
Met het attribuut *idealisatie* kan de nauwkeurigheid van de begrenzing van
een object worden aangegeven. Er dient een keuze gemaakt te worden volgens
het domein *Idealisatie_2*. De nauwkeurigheid van de begrenzing van een
object neemt af in de keuzes *exact* of *indicatief*.  
	-   Exact geeft aan dat de geometrie van het object opgenomen is met de
    nauwkeurigheid die behoort bij de dataset, waarmee de begrenzing als exact
    wordt beschouwd;  
	-   Indicatief betekent dat de geometrie indicatief geïnterpreteerd moet worden;
    waarmee de begrenzing niet is vastgelegd.