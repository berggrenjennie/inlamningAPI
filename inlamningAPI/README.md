# inlamningAPI

## Teoretisk del

Svara på följande frågor

 - Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar. Om du har svårt att bestämma dig för en url, ta ex. http://www.smp.se/kultur-noje/
 ```
 Metod --> GET
 Path --> kultur-noje
 URI --> http://www.smp.se/kultur-noje/
 Body --> HTML
 Respons kod --> 200

 ```
 - Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
 ```
 GET --> hämtar och visar upp data via URI
 POST --> skickar ny data till databasen och skapar ny grupp av uppgifter
 DELETE --> raderar begärda uppgifter
 PUT --> ändrar/lägger till uppgifter, hela gruppen av uppgifter skrivs om i databasen  (kan även skapa ny grupp)
 PATCH --> ändrar/uppdaterar befintliga uppgifter, räcker med att en uppgift i gruppen ändras.
 ```

 - "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas
 ```
 En textsträng för att komma åt specifik data. De två delarna kallas URL (Uniform Resource Locator) och URN (Uniform Recourse Name). URL definierar vart data kan hämtas, och URN hämtar specifik data som namngivits.

 Schema --> HTTP, identifierar syftet med anropet.

 Authority --> server som kan visa data.

 Path --> sökvägen till vad som ska hämtas.

 Query string --> följer sökvägen och ger en mängd information.

 ```
 - På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.
 ```
 curl -s "localhost:3000/someparam?keyWithoutValue&keyWithvalue=value" -H "some: header" | jq

 path parameter --> /:someparam,

 query parameter --> /someparam?keyWithoutValue&keyWithvalue=value

 header parameter --> /       -H "some: header"

 ```

## Feedback

feedback på kursen och övningsuppgiften ska lämnas i readmeuppgiften. Exempel på feedback kan vara

 - kursens takt
 ```
 Det känns som att kursens takt är bra, vi får det utrymme vi behöver för att lösa uppgifter men dock är det svårt att avgöra då vi inte i förväg vet vad det är vi ska lära oss under kursen.
 ```
 - kursmaterial
 ```
 Föreläsningsmaterialet kan utvecklas och förbättras. Det går inte att i efterhand förstå vad som menas eftersom det enbart innehåller stolpar och har man då missat en föreläsning är det svårt att läsa ikapp det. Vet att det ska kompletteras med videoinspelning men det är ändå inte bra enligt mitt tycke.

 Praktiska genomgångar på storskärm ger mig ingenting då jag uppfattar att det går alldeles för fort. När man är nybörjare så är det förvirrande att se en lång kod med massa nya termer och där läraren 'hoppar' med muspekaren och försöker visa kopplingarna i koden.
 Dessvärre kan jag inte just nu ge någon konstruktiv kritik för att jag inte kommer på något annat sätt att undervisa men jag är heller inte nöjd med den undervisning som visas på skärm.

 Exempel och övningsuppgifter är bra och det är tacksamt att lärare finns lättillgänglig.
 ```
 - format
 ```
 Det har tagit ganska lång tid för mig att få 'poletten att ramla ner', tror det beror lite på att jag upplevt inledningen av kursen som otydlig och ostrukturerad, jag upplevde att läraren inte alltid hade en röd tråd i det som lärdes ut utan att det blev ganska vida utläggningar vilket har gjort det svårt för mig att sortera ut vilket som är av vikt för att klara kursen och vilket som är "good to know". De som har lite förkunskaper i ämnet har mycket lättare för att sätta in saker i ett sammanhang och på så sätt ta till sig mer av det som egentligen ligger utanför kursen (eller uppgår till VG nivå).
 Självklart tycker jag att allas behov ska tillgodoses men någonstans måste man ändå utgå ifrån de förkunskaper som anges i kursen:
    -Förkunskapskrav: JavaScript med jQuery, React, Angular med minst betyget godkänt eller motsvarande
  Detta tolkar jag som att man inte ska behöva ha jobbat någonting med API sedan tidigare och då måste grunden vara att vi är nybörjare. Läraren bör då vara tydlig med att tala om vad som tillhör grunder och vad som är överkurs'.

 ```
 - övrigt
 ```
 Lärare är kunnig inom området och positiv till frågor även utanför "skoltid" vilket jag upplever som förtroendeingivande och professionellt. Inte för att det är ett krav vi kan ställa och vi ska heller inte dra fördel av den situationen men det känns ändå tryggt att veta att man har någonstans att vända sig om man fastnar när man jobbar hemifrån.
 ```
