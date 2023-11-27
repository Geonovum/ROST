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
  pubDomain: "ro",
  specStatus: "GN-WV",
//  specStatus: "GN-DEF",
  specType: "HR",
  license: "cc-by-nd",
 publishDate: "2022-12-16",
  authors: [
    {
      name: "Beheerteam DRO",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
  ],
  editors: [
    {
      name: "Beheerteam DRO",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/geo-standaarden/ro-standaarden-ruimtelijke-ordening/"
    }
  ],
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository
  shortName: "doo",
  format: "markdown",
  github: "https://github.com/geonovum/ROST",
  issueBase: "https://github.com/geonovum/ROST/issues/",
  edDraftURI: "https://Geonovum.github.io/ROST/",
  publishISODate: "2022-12-15T00:00:00.000Z",
  generatedSubtitle: "Vastgestelde versie 15 december 2022",
  previousPublishDate: "2019-08-14",
  previousMaturity: "GN-DEF",
}
