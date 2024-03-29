//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

var respecConfig =
{
//  subtitle: "PRPCP2008",
  pubDomain: "ro",
  specStatus: "GN-WV",
  //specStatus: "GN-DEF",
  specType: "PR",
  license: "cc-by-nd",
  //publishDate: "2023-12-20",
  previousPublishDate: "2023-12-20",
  previousMaturity: "GN-DEF",
  authors: [
    {
      name: "Beheerteam DRO",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
  ],
  editors: [
    {
      name: "Beheerder RO Standaarden",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
  ],
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository
  shortName: "PRPCP2008",
  format: "markdown",
  github: "https://github.com/Geonovum/ROST/",
  issueBase: "https://github.com/Geonovum/ROST/issues/",
  edDraftURI: "https://Geonovum.github.io/ROST/",
  //publishISODate: "2023-12-20T00:00:00.000Z",
  //generatedSubtitle: "Vastgestelde versie 20 december 2023"
}
