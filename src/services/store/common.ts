import * as fs from "fs";
import * as path from "path";
import * as convert from "xml-js";
var classifyPoint = require("robust-point-in-polygon")

/**
	description : controller function to find whether customer lat long lien in kml or not and return the store name.
**/
export const addressReader = (address:any) => {

	let FILE = path.join(__dirname, '../../../FullStackTest_DeliveryAreas.kml');
	const xmlFile = fs.readFileSync(FILE, 'utf8');
	let result = JSON.parse(convert.xml2json(xmlFile, {compact: true, spaces: 4}));
	let placemark = result.kml.Document.Placemark;
	let storeText = "";

	for(let k=0; k<placemark.length; k++){
		if(placemark[k].Polygon && placemark[k].Polygon.outerBoundaryIs 
			&& placemark[k].Polygon.outerBoundaryIs.LinearRing 
			&& placemark[k].Polygon.outerBoundaryIs.LinearRing.coordinates
			&& placemark[k].Polygon.outerBoundaryIs.LinearRing.coordinates._text){
				let delPoly = new Array();
				let coorTemp = placemark[k].Polygon.outerBoundaryIs.LinearRing.coordinates._text.split(',');
				for(let i=0; i<coorTemp.length; i+=2){
					let longTemp = coorTemp[i].replace("0\n              ","")
					longTemp = longTemp.replace("\n              ","")
					delPoly.push([parseFloat(coorTemp[i+1]),parseFloat(longTemp)]);
				}
				if(classifyPoint(delPoly, [parseFloat(address.lat), parseFloat(address.lng)])===-1){
					storeText = placemark[k].name._text;
					break;
				}
		}
	}

    return storeText;
    
}