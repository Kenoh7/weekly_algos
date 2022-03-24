/*
Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

function webMD(ailments, meds) { 
    output = [];
    for(obj of meds){ //loop through objects in meds array
        count = 0; 
        for(ill of ailments) { // loop through illness in array of illnesses
            if(obj.treatableSymptoms.includes(ill)){ //check if illness is in treatableSymptoms of current obj
                count ++  
            }
        }
        if(count == ailments.length){ //if count of treatableSymptoms equals ailments add the meds name to output
            output.push(obj.name)
        }
    }
    return output
}
console.log(webMD(["pain"], medications));
// console.log(webMD(["pain", "inflammation", "depression"], medications));
// console.log(webMD(["existential dread"], medications));