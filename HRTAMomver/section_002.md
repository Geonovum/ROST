## Omgevingsverordening

initiële omgevingsverordening
wijzigingsbesluiten

hoofdregeling vs. tijdelijke regelingdelen, invloed voorbereidingsbesluit - geconsolideerde versie alleen mogelijk met heulp van STOP/ TPOD standaarden. 


### Technische uitgangspunten

De kern van het gebruik van TAM-omgevingsverordening is, dat vanaf inwerkingtreding van de Omgevingswet, de bestaande Wro planketen gebruikt kan worden voor het opstellen en publiceren van de omgevingsverordening. De RO Standaarden 2012 worden niet aangepast. Ook wordt op geen enkele manier iets aangepast aan de Wro plansoftware die wordt gebruikt voor digitale ruimtelijke plannen. Ook aan de manier van publiceren naar Ruimtelijkeplannen.nl verandert niets. Wel wordt de validator voor Ruimtelijkeplannen.nl aangevuld en enigszins aangepast om het overgangsrecht van Wro naar Omgevingswet te faciliteren, en de TAM-omgevingsverordening mogelijk te maken.

De validator moet een TAM-omgevingsverordening kunnen herkennen om een ontwerpversie wel door te laten ná inwerkingtreding. Daarom is in de werkafspraak bepaald dat de plannaam begint met “TAM-omgevingsverordening”, gevolgd door de naam van het plan. Hiermee wordt het onderscheid gemaakt tussen een Wro provinciale verordening en een nieuw omgevingswetbesluit op basis van TAM-omgevingsverordening. Om een omgevingswetbesluit te kunnen nemen met behulp van TAM-omgevingsverordening wordt uitsluitend gebruik gemaakt van de planfiguur ‘provinciale verordening’. 

De TAM-omgevingsverordening moet uiteindelijk door de provincie omgezet worden naar STOP/TPOD. Het gebruik van TAM-omgevingsverordening houdt dus altijd extra werk in de toekomst in. Dit gegeven moet mee worden genomen bij de afweging over het al dan niet gebruiken van TAM-omgevingsverordening.

### Gebruik IMRO 

Om een TAM-omgevingsverordening te maken kan binnen het planfiguur ‘provinciale verordening’ in principe gebruik worden gemaakt van alle objecten (besluitgebied, besluitvlak, besluitsubvlak) die beschikbaar zijn. Belangrijk is te bedenken dat een TAM-omgevingsverordening technisch moet voldoen aan IMRO2012 om door de validator te kunnen komen. Concreet betekent dat ook dat er een object ‘besluitgebied’ moet zijn met de gegevens van het besluit, ondanks dat de omgevingsverordening dit niet kent onder de Omgevingswet. 

In principe is een omgevingsverordening vormvrij. De provincie bepaalt binnen zekere grenzen hoe een omgevingsverordening wordt opgebouwd. Toch is het niet in lijn met de Omgevingswetgedachte om te blijven werken met de Wro-objecten besluitgebied, besluitvlak, besluitsubvlak, daar waar een TAM-omgevingsverordening objecten als activiteiten, functies, andere gebiedsaanwijzingen en omgevingsnormen verwacht. Daarnaast gaat de STOP/TPOD standaard uit van een koppeling van een werkingsgebied (locatie) aan elke regeltekst. Dit betekent dat conform IMRO2012 bij de objecten besluitgebied, besluitvlak, besluitsubvlak de verplicht te gebruiken attributen verwijzingNaarTekstInfo. 

Voor wijzigingsbesluiten van de omgevingsverordening, waarbij in het wijzigingsbesluit wordt aangegeven welke regelteksten en locaties zijn toegevoegd of komen te vervallen, wordt het object besluitsubvlak gebruikt. 

<figure> 
<img src='media/Koppeling_regeltekst_locatie.png' alt='Koppeling tussen regeltekst en Locatie (werkingsgebied) zoals deze wordt gebruik in de STOP/ TPOD standaard' style='width: 100%;'></img>
<figcaption>Koppeling tussen regeltekst en Locatie (werkingsgebied) zoals deze wordt gebruik in de STOP/ TPOD standaard</figcaption>
</figure>

Bij het object besluitgebied moet tevens het atribuut planStatusInfo worden ingevuld. Ten behoeve van de TAM-omgevingsverordening is de volgende planstatus toegestaan: ontwerp en vastgesteld. 
Gekoppeld met de dossierstatus in het manifest betekent dit:
- planstastus ontwerp met de dossierstatus in voorbereiding;
- planstastus vastgesteld met de dossierstatus vastgesteld dan wel geheel onroepelijk in werking. 


### TAM omgevingsverordening

Een omgevingsverordening opgesteld met behulp van TAM in plaats van de STOP/TPOD standaarden, moet herkenbaar zijn. Dit is belangrijk voor een goede validatie en ten behoeve van de overbruggingsfunctie naar de landelijke voorziening Digitaal Stelsel Omgevingswet. Daarom leggen we in deze werkafspraak de naamgeving vast: 

- het typePlan is provinciale verordening
- de naam van het plan is ‘TAM-omgevingsverordening[spatie][plannaam]’

Let op de bij naamgeving:
- TAM wordt geschreven in hoofdletters;
- omgevingsverordening wordt geschreven in kleine letters;
- er wordt geen gebruik gemaakt spaties tussen en TAM en omgevingsverordening, maar alleen een koppelteken.
