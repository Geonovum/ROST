## Impact werkafspraak

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 24.388092613009924%;'
<col id='col2' style='width: 75.61190738699007%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>RO Standaarden

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Uiteindelijk zal deze werkafspraak mogelijk leiden tot aanpassing van het Schema behorende bij STRI2012. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Wet- en regelgeving

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het betreft geen aanpassing van norm STRI2012. Doordat de norm niet wordt aangepast, is het ook niet nodig dat wet- en regelgeving (Regeling standaarden ruimtelijke ordening) wordt aangepast. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Validator

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Er is een mogelijke impact met betrekking tot de detectie van de gehanteerde IMROPT versie van het plantekstenbestand<a name='_Ref352055971'></a><span class='noot'>[*]<span class='noottekst'> Dit versienummer kan niet bepaald worden aan de hand van het geleideformulier, maar dient uit de XML Namespace van het plantekstenbestand zelf bepaald te worden.<br/></span></span> bij validatie vanuit het manifest. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>RO-Online

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Er is een mogelijke impact met betrekking tot de detectie van de gehanteerde IMROPT versie van het plantekstenbestand<sup></sup><sup></sup><sup></sup><sup></sup><sup>5</sup><sup></sup>.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bronhouders software

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Mogelijk aanpassen van de software die geleideformulieren produceert. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Afnemers software

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Er is een mogelijke impact met betrekking tot de detectie van de gehanteerde IMROPT versie van het plantekstenbestand<sup></sup><sup></sup><sup></sup><sup></sup><sup>5</sup><sup></sup>.

</td>
</tr>
</tbody>
</table>

N.B. Er is hier boven op een aantal plaatsen sprake van “mogelijke” impact, omdat deze afhankelijk is van de wijze waarop de detectie van de versie van de planteksten is geïmplementeerd. Mogelijk wordt de versie bepaald aan de hand van de XML namespace van het plantekstenbestand zelf, al dan niet in combinatie met de constatering (door de software) of er in het geleideformulier een element <PlanTeksten> voorkomt. In dat geval is de impact nul. Maar er is toch “mogelijk” impact, namelijk in het geval dat er software is gebouwd die het normdocument leidend heeft genomen en er op dit moment al vanuit gaat dat er mogelijk geleideformulieren zullen worden gepubliceerd met dit element. In dat geval zal het detectiemechanisme moeten worden gewijzigd. 

