# Find Store by giving customer latitude and longitude

# Prerequisites
* npm 6+
* node.js 10+
* Google Maps Key for place API to get latitude and longitude

# Getting started
1. ```npm install```
2. ```npm run dev```
3. Browse ```http://localhost:3000/```

# Below Test Cases has been passed
1. “Stumpergasse 51, 1060 Vienna” 		    Output: au_vienna_schoenbrunnerstr
2. “Ungargasse 17, Vienna, Austria” 		Output: au_vienna_landstrasserhauptstr
3. “Linzer Straße 7, Vienna, Austria” 		Output: au_vienna_dreyhausenstr
4. “Maurer Hauptplatz 7, 1230 Wien, Austria” 	Output: au_vienna_maurerhauptplatz
5. “Bahnhofplatz 1, Linz, Austria”			Output: not found
6. “Quadenstraße 5, 1200 Vienna”		    Output: not found