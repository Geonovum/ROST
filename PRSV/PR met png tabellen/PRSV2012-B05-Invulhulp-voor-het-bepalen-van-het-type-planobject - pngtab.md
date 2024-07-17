# Bijlage 5 – Invulhulp voor het bepalen van het type planobject

**Deze bijlage kan worden gebruikt bij het maken van een objectgericht
structuurvisie, maar is *niet* verplicht. De voor ingevulde varianten van
klassen die in deze bijlage worden beschreven, zijn niets meer dan mogelijke
manieren waarop de klassen uit het IMRO2012, zoals beschreven in Hoofdstuk 5,
kunnen worden ingevuld en dienen ook als zodanig te worden beschouwd. De
volgende attributen worden niet genoemd in deze bijlage omdat ervan uitgegaan is
dat de software dit automatisch invult: identificatie, plangebied, planobject.**

## Bepalen van het type planobject (klasse)

Het eerste planobject in de objectenstructuur is altijd het plangebied. Dit
planobject heeft als naam de aanhaaltitel van de structuurvisie, als tekst de
gehele plantekst en als geografische aanduiding de buitenste grens van het
gebied waar de structuurvisie over gaat. Dit planobject behoort tot de klasse
‘Structuurvisieplangebied’. In paragraaf 5.2 wordt voor deze klasse nader
toegelicht welke eigenschappen moeten/mogen worden ingevuld.  
Voor de overige planobjecten in de objectenstructuur dient eerst nader te worden
bepaald tot welke klasse deze behoren voordat de bijbehorende eigenschappen
kunnen worden ingevuld. In deze paragraaf is een vragenlijst opgenomen, waarmee
per planobject kan worden bepaald tot welk type deze behoort. Aan het eind van
deze paragraaf is een voorbeeld opgenomen ter verduidelijking.

*Vraag 1. Is er beleid gekoppeld aan dit planobject?*  
JA: ga naar vraag 2  
NEE: ga naar vraag 7

*Vraag 2. Wordt dit planobject verder onderverdeeld?*  
JA: ga naar vraag 3  
NEE: ga naar vraag 5

*Vraag 3. Wordt dit planobject geografisch aangeduid?*  
JA: [Structuurvisiecomplex, invulvariant A](#structuurvisiecomplex-invulvariant-a)  
NEE: ga naar vraag 4

*Vraag 4. Dient dit planobject als kopje in de legenda te worden opgenomen?*  
JA: [Structuurvisiecomplex, invulvariant B](#structuurvisiecomplex-invulvariant-b)  
NEE: [Structuurvisiecomplex, invulvariant C](#structuurvisiecomplex-invulvariant-c)

*Vraag 5. Wordt dit planobject geografisch aangeduid?*  
JA: [Structuurvisiegebied, invulvariant A](#structuurvisiegebied-invulvariant-a)  
NEE: ga naar vraag 6

*Vraag 6. Betreft het een Structuurvisie van het Rijk?*  
JA: [Structuurvisiegebied, invulvariant B](#structuurvisiegebied-invulvariant-b)  
NEE: het planobject is niet te coderen

*Vraag 7. Wordt dit planobject verder onderverdeeld?*  
JA: ga naar vraag 8  
NEE: ga naar vraag 10

*Vraag 8. Wordt dit planobject geografisch aangeduid?*  
JA: [Structuurvisiecomplex, invulvariant D](#structuurvisiecomplex-invulvariant-d)  
NEE: ga naar vraag 9

*Vraag 9. Dient dit planobject als kopje in de legenda te worden opgenomen?*  
JA: [Structuurvisiecomplex, invulvariant E](#structuurvisiecomplex-invulvariant-e)  
NEE: [Structuurvisiecomplex, invulvariant F](#structuurvisiecomplex-invulvariant-f)*

*Vraag 10. Betreft het een Structuurvisie van het Rijk?*  
JA: het planobject is niet te coderen  
NEE: ga naar vraag 11

*Vraag 11. Betreft het een Structuurvisie van de provincie?*  
JA: [Structuurvisieverklaring, invulvariant A](#structuurvisieverklaring-invulvariant-a)  
NEE: [Structuurvisiegebied, invulvariant C](#structuurvisiegebied-invulvariant-c)

**Figuur 22 Voorbeeld planstructuur**

![](media/631b14e6799ecfa0c4a9b3c9892a9235.png)

**Tabel 13 Vragenlijst toegepast op voorbeeld uit Figuur 22**

| **Planobject**      | **Toelichting**                                                                                                      | **Vragenlijst**                                   | **Type (klasse)**                                            |
|---------------------|----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------|
| Natuur              | Betreft beleidstekst. Het planobject wordt niet geografisch aangeduid, maar wel als kopje in de legenda opgenomen.   | vraag 1: JA                                       | [Structuurvisiecomplex. invulvariant B](#structuurvisiecomplex-invulvariant-b)                         |
|                     |                                                                                                                      | vraag 2: JA                                       |                                                              |
|                     |                                                                                                                      | vraag 3: NEE                                      |                                                              |
|                     |                                                                                                                      | vraag 3: JA                                       |                                                              |
|                     |                                                                                                                      |                                                   |                                                              |
| Water               | Betreft beleidstekst. Het planobject wordt niet geografisch aangeduid en ook niet als kopje in de legenda opgenomen. | vraag 1: JA                                       | [Structuurvisiecomplex, invulvariant C](#structuurvisiecomplex-invulvariant-c)                        |
|                     |                                                                                                                      | vraag 2: JA                                       |                                           |
|                     |                                                                                                                      | vraag 3: NEE                                      |                                                              |
|                     |                                                                                                                      | vraag 4: NEE                                      |                                                              |
|                     |                                                                                                                      |                                                   |                                                              |
| EHS                 | Betreft beleidstekst. Het planobject wordt geografisch aangeduid.                                                    | vraag 1: JA                                       | [Structuurvisiecomplex, invulvariant A](#structuurvisiecomplex-invulvariant-a)                        |
|                     |                                                                                                                      | vraag 2: JA                                       |                                           |
|                     |                                                                                                                      | vraag 3: JA                                       |                                                              |
|                     |                                                                                                                      |                                                   |                                                              |
| Waterbergingsgebied | Betreft beleidstekst. Het planobject wordt geografisch aangeduid.                                                    | vraag 1: JA                                       | [Structuurvisiegebied, invulvariant A](#structuurvisiegebied-invulvariant-a)                         |
|                     |                                                                                                                      | vraag 2: NEE                                      |                                           |
|                     |                                                                                                                      | vraag 5: JA                                       |                                                              |
|                     |                                                                                                                      |                                                   |                                                              |
| Waterschappen       | Betreft een toelichtende tekst. Het planobject wordt geografisch aangeduid.                                          | vraag 1: NEE                                      | [Structuurvisieverklaring, invulvariant A](#structuurvisieverklaring-invulvariant-a)                     |
|                     |                                                                                                                      | vraag 7: NEE                                      |                                          |
|                     |                                                                                                                      | vraag 10: NEE                                     |                                                              |
|                     |                                                                                                                      | vraag 11: JA                                      |                                                              |
|                     |                                                                                                                      |                                                   |                                                              |
| EHS-land            | Betreft beleidstekst. Het planobject wordt geografisch aangeduid.                                                    | vraag 1: JA                                       | [Structuurvisiegebied, invulvariant A](#structuurvisiegebied-invulvariant-a)                         |
|                     |                                                                                                                      | vraag 2: NEE                                      |                                           |
|                     |                                                                                                                      | vraag 5: JA                                       |                                                              |
|                     |                                                                                                                      |                                                   |                                                              |
| EHS-water           | Betreft beleidstekst. Het planobject wordt geografisch aangeduid.                                                    | vraag 1: JA                                       | [Structuurvisiegebied, invulvariant A](#structuurvisiegebied-invulvariant-a)                         |
|                     |                                                                                                                      | vraag 2: NEE                                      |                                           |
|                     |                                                                                                                      | vraag 5: JA                                       |                                                              |

## Structuurvisiegebied, invulvariant A

*Beleid, geografisch aangeduid*  
Als een planobject behoort tot de klasse Structuurvisiegebied met verwijzingen
naar één of meerdere beleidsteksten en verwijzingen naar één of meerdere
kaarten, dan kan volstaan met het invullen van de in Tabel 14 aangegeven
attributen. Voor een toelichting op alle attributen zie [paragraaf 5.2](#klasse-structuurvisiegebied).

**Tabel 14 Klasse Structuurvisiegebied, invulvariant A**

![](media/bb15372d05fb97dd6a68d6b9b8c22435.png)

## Structuurvisiegebied, invulvariant B

*Beleid, niet geografisch aangeduid*  
Als een planobject behoort tot de klasse Structuurvisiegebied met verwijzingen
naar één of meerdere beleidsteksten maar zonder verwijzing naar een kaart, dan
kan volstaan met het invullen van de in Tabel 15 aangegeven attributen. Voor een
toelichting op alle attributen zie [paragraaf 5.2](#klasse-structuurvisiegebied).

**Tabel 15 Klasse Structuurvisiegebied, invulvariant B**

![](media/a45aa953b8967e7c84016060c9ba18c0.png)


## Structuurvisiegebied, invulvariant C

*Geen beleid, geografisch aangeduid*  
Als een planobject behoort tot de klasse Structuurvisiegebied met verwijzingen
naar uitsluitend toelichtende teksten en verwijzingen naar één of meerdere
kaarten, dan kan volstaan met het invullen van de in Tabel 16 aangegeven
attributen. Voor een toelichting op alle attributen zie [paragraaf 5.2](#klasse-structuurvisiegebied).

**Tabel 16 Klasse Structuurvisiegebied, invulvariant C**

![](media/f29e93ca2d863caa08a1be92ba133eea.png)

## Structuurvisiecomplex, invulvariant A

*Beleid, geografisch aangeduid*  
Als een planobject behoort tot de klasse Structuurvisiecomplex met verwijzingen
naar één of meerdere beleidsteksten en verwijzingen naar één of meerdere
kaarten, dan kan volstaan met het invullen van de in Tabel 17 aangegeven
attributen. Indien gewenst, mogen de grijs gemarkeerde attributen worden
overgeslagen. Voor een toelichting op alle attributen zie [paragraaf 5.3](#klasse-structuurvisiecomplex).

**Tabel 17 Klasse Structuurvisiecomplex, invulvariant A**

![](media/921eddebe0902a07ce92cb7d35feba27.png)

## Structuurvisiecomplex, invulvariant B

*Beleid, niet geografisch aangeduid, als kopje in legenda*  
Als een planobject behoort tot de klasse Structuurvisiecomplex met verwijzingen
naar één of meerdere beleidsteksten en als legenda-kopje is opgenomen maar niet
op de kaart zelf, dan kan volstaan met het invullen van de in Tabel 18
aangegeven attributen. Indien gewenst, mogen de grijs gemarkeerde attributen
worden overgeslagen. Voor een toelichting op alle attributen zie [paragraaf 5.3](#klasse-structuurvisiecomplex).

**Tabel 18 Klasse Structuurvisiecomplex, invulvariant B**

![](media/dddc853439e2cbaddadfeb26617081d2.png)

## Structuurvisiecomplex, invulvariant C

*Beleid, niet geografisch aangeduid, niet als kopje in legenda*  
Als een planobject behoort tot de klasse Structuurvisiecomplex met verwijzingen
naar één of meerdere beleidsteksten en geen verwijzing naar een kaart, dan kan
volstaan met het invullen van de in Tabel 19 aangegeven attributen. Indien
gewenst, mogen de grijs gemarkeerde attributen worden overgeslagen. Voor een
toelichting op alle attributen zie [paragraaf 5.3](#klasse-structuurvisiecomplex).


**Tabel 19 Klasse Structuurvisiecomplex, invulvariant C**

![](media/d40fa6493f8aa5323bbc58072e9b86cd.png)

## Structuurvisiecomplex, invulvariant D

*Geen beleid, geografisch aangeduid*  
Als een planobject behoort tot de klasse Structuurvisiecomplex met verwijzingen
naar uitsluitend toelichtende teksten en verwijzingen naar één of meerdere
kaarten, dan kan volstaan met het invullen van de in Tabel 20 aangegeven
attributen. Indien gewenst, mag het grijs gemarkeerde attribuut worden
overgeslagen. Voor een toelichting op alle attributen zie [paragraaf 5.3](#klasse-structuurvisiecomplex).

**Tabel 20 Klasse Structuurvisiecomplex, invulvariant D**

![](media/35b2d7993f7804744185d0bfc9cb583b.png)

## Structuurvisiecomplex, invulvariant E

*Geen beleid, niet geografisch aangeduid, als kopje in de legenda*  
Als een planobject behoort tot de klasse Structuurvisiecomplex met verwijzingen
naar uitsluitend toelichtende teksten en als legenda-kopje is opgenomen maar
niet op de kaart zelf, dan kan volstaan met het invullen van de in Tabel 21
aangegeven attributen. Indien gewenst, het grijs gemarkeerde attribuut worden
overgeslagen. Voor een toelichting op alle attributen zie [paragraaf 5.3](#klasse-structuurvisiecomplex).

**Tabel 21 Klasse Structuurvisiecomplex, invulvariant E**

![](media/e2d372455396d9355789011d3ec44c17.png)

## Structuurvisiecomplex, invulvariant F

*Geen beleid, niet geografisch aangeduid, niet als kopje in de legenda*  
Als een planobject behoort tot de klasse Structuurvisiecomplex met verwijzingen
naar uitsluitend toelichtende teksten en geen verwijzing naar een kaart, dan kan
volstaan met het invullen van de in Tabel 22 aangegeven attributen. Indien
gewenst, het grijs gemarkeerde attribuut worden overgeslagen. Voor een
toelichting op alle attributen zie [paragraaf 5.3](#klasse-structuurvisiecomplex).

**Tabel 22 Klasse Structuurvisiecomplex, invulvariant F**

![](media/94effd91e53bfedee52ca0d99a76fc26.png)

## Structuurvisieverklaring, invulvariant A

*Geen beleid, geografisch aangeduid*  
Als een planobject behoort tot de klasse Structuurvisieverklaring dan kan
volstaan met het invullen van de in Tabel 23 aangegeven attributen. Indien
gewenst, mogen de grijs gemarkeerde attributen worden overgeslagen. Voor een
toelichting op alle attributen zie [paragraaf 5.4](#klasse-structuurvisieverklaring-alleen-voor-provincies).

**Tabel 23 Klasse Structuurvisieverklaring invulvariant A**

![](media/f3b4ea86145f2927e1f5fd95282f0660.png)

