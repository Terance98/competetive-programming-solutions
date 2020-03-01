//Date: 01/03/2020

const str1 = "koko";
const str2 = "okok";


function createMap(str) {
    const tempMap = new Map();
    const strArray = str.split('');
    strArray.forEach(element => {
        // tempMap.set(element, strArray.filter(x => x === element).length)
        let value = tempMap.get(element);
        if(!value){
            tempMap.set(element, 1);
        }else{
            tempMap.set(element, ++value)
        }
    });
    return tempMap
}


function check(map1,map2){
    console.log(map1, map2);
    for(let item of map1){
        if(map2.get(item[0]) !== item[1]){
            return false;
        }
    }
    for (let item of map2) {
        if (map1.get(item[0]) !== item[1]) {
            return false;
        }
    }
    return true;
}

function balance(map1, map2){

    for(let item of map1){
        if(item[1] % 2 == 0){
            // console.log(item)
            tempvalue=map2.get(item[0])
            if (!tempvalue) {
                map2.set(item[0], item[1] / 2);
                map1.set(item[0], item[1] / 2);
            }else{
                if(map1.get(item[0]) % 2 !== 0 ){
                    map2.set(item[0], tempvalue + item[1] / 2)
                    map1.set(item[0], item[1] / 2);

                }

            }
        }
    }
    return [map1, map2]
}

// if(str1.length > str2.length){
//     const strMap1 = createMap(str1);
//     const strMap2 = createMap(str2);
//     let tempresults = balance(strMap1, strMap2);
//     let finalresults = balance(tempresults[1],tempresults[0])
//     // console.log(results)
//     console.log(check(finalresults[0],finalresults[1]));
// }else{
    const strMap1 = createMap(str1);
    const strMap2 = createMap(str2);
    let tempresults = balance(strMap1, strMap2);
    let finalresults = balance(tempresults[1], tempresults[0])
    console.log(check(finalresults[0], finalresults[1]));

    // let results = balance(strMap1, strMap2);
    // console.log(check(results[0], results[1]));

    // console.log(check(strMap2, strMap1));
// }

