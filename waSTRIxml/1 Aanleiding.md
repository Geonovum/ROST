## Aanleiding

Er is een discrepantie geconstateerd tussen de [STRI2012 norm](http://ro-standaarden.geonovum.nl/2012/STRI/1.1/STRI2012-v1.1.pdf) en het bijbehorende [XML Schema](http://ro-standaarden.geonovum.nl/2012/STRI/1.0/STRI2012-v1.0.zip). In de norm wordt in paragraaf 5.3 de opbouw van een geleideformulier beschreven. Het geleideformulier beschrijft de eigenschappen en bestandsmatige opbouw van een ruimtelijk instrument en is daar ook een verplicht onderdeel van. In het geleideformulier wordt een aantal eigenschappen van het instrument opgenomen. De verplichte eigenschappen zijn de naam, het type, de status, de datum, de IMRO-versie en de versie van de praktijkrichtlijn die is gehanteerd bij het coderen. Verder is er een optionele eigenschap “versiePlantekst”. Het was de bedoeling om deze eigenschap toe te voegen als de planteksten zijn gecodeerd conform [IMROPT](http://ro-standaarden.geonovum.nl/2012/IMROPT/1.1/IMROPT2012-v1.1.pdf) (objectgerichte planteksten). De “versiePlantekst” zou in dat geval het versienummer van het IMROPT normdocument moeten geven, vergelijkbaar met de IMRO verwijzingnorm in het GML bestand, die bij de RO Standaarden 2012 de vaste waarde “IMRO2012” heeft. In het STRI2012 XML Schema ontbreekt dit element echter, zodat het niet mogelijk is om deze eigenschap op te nemen in het geleideformulier.
