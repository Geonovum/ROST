# Identificatienummer en bestandsnaam
**Ieder ruimtelijk instrument kent een eigen identificatienummer (idn). In dit
hoofdstuk is toegelicht hoe de opbouw van dit idn is. Tevens zijn in dit
hoofdstuk de eisen voor de bestandsnamen toegelicht.**

## Identificatienummer
Ieder ruimtelijk instrument kent een eigen identificatienummer (idn). Deze
identificatie maakt het mogelijk dat op landelijk niveau een uniek onderscheid
voor ieder instrument aanwezig is. Voor de invulling hiervan wordt eerst
vermeld: "NL.IMRO.", vervolgens wordt het CBS-nummer van de bronhouder opgenomen (voor het Rijk:
0000), gevolgd door een punt (.) en aansluitend een unieke naam van maximaal 18
tekens, een koppelteken, ASCII 45 (-) en een versiecode van maximaal 4
alfanumeriek tekens, beide laatstgenoemde door de bronhouder te bepalen. De
versiecode is uniek voor alle versies die extern gepubliceerd zijn. De
versiecode wordt altijd aangepast indien er sprake is van een nieuwe planstatus,
bijvoorbeeld van voorontwerp naar ontwerp of van ontwerp naar vastgesteld, maar
ook als er binnen één planstatus meerdere versies extern worden gepubliceerd.
</br></br>
De totale lengte van het idn bedraagt maximaal 36 tekens. Voor het geval het
werkingsgebied bestaat uit meerdere ruimtelijk gescheiden gebieden kent het
totaal van die gebieden één identificatienummer. De geometrie van het object is
hierbij een multipolygoon.
</br></br>
Voorbeelden van geldige (maar wel fictieve) idn's:  
NL.IMRO.1234.A-0001  
NL.IMRO.5678.centrumgebied-0012  
NL.IMRO.1111.structuurvisie2012-AD12  

Het gedeelte van het identificatienummer tot aan het liggend streepje wordt het
dossiernummer genoemd. Dit wordt van belang in [Hoofdstuk 5](#H05).
</br></br>
Voorbeelden van geldige (maar wel fictieve) dossiernummers:  
NL.IMRO.1234.A  
NL.IMRO.5678.centrumgebied  
NL.IMRO.1111.structuurvisie2012  

## Bestandsnaam vereisten
Voor ieder onderdeel van ieder ruimtelijk instrument worden eisen gesteld aan de
bestandsnaam van het bronbestand. De bestandsnaam kent de volgende opbouw:

-   Voor alle onderdelen behalve het IMRO-GML begint de bestandsnaam met
    een aanduiding van het type onderdeel als één of twee karakters zoals
    gegeven in tabel 1 en tabel 2 van de STRI2012, gevolgd door een underscore
    (_);
-   Vervolgens het identificatienummer van het instrument;
-   Voor bijlagen en illustraties vervolgens een underscore (_) gevolgd door een
    nadere tekstuele extensie van maximaal 20 alfanumerieke tekens, te bepalen
    door de bronhouder;
-   Tot slot een punt (.) en de bestandsnaamextensie zoals gegeven in tabel 3
    van de STRI2012.
</br></br>
De totale maximale lengte bedraagt daarmee 65 karakters. Bijlagen en
illustraties zijn voorzien van een nadere tekstuele extensie, omdat er bij deze
onderdelen meerdere bestanden kunnen worden geleverd, conform tabel 1 en tabel 2
van de STRI2012. Omwille van de eenduidigheid is er voor gekozen om deze
tekstuele extensie altijd toe te voegen, ook als er slechts één illustratie of
bijlage beschikbaar wordt gesteld.
</br></br>
Voorbeelden van geldige (maar wel fictieve) bestandsnamen:  
NL.IMRO.1234.A-0001.gml  
vb_NL.IMRO.5678.centrumgebied-0012.html  
b_NL.IMRO.1111.structuurvisie2012-AD12_bijlage.pdf  
