let db = {
    svk: [
        {
            id: '0',
            name: 'Bratislava',
            avgprice: 2399.99,
            plotprice: 144,
        },
        {
            id: '1',
            name: 'Trnava',
            avgprice: 1739.20,
            plotprice: 64,
        },
        {
            id: '2',
            name: 'Nitra',
            avgprice: 1604.80,
            plotprice: 76,
        },
        {
            id: '3',
            name: 'Kosice',
            avgprice: 1634.74,
            plotprice: 112,
        },
        {
            id: '4',
            name: 'Trencin',
            avgprice: 1456,
            plotprice: 60,
        },
        {
            id: '5',
            name: 'Piestany',
            avgprice: 1584,
            plotprice: 68,
        },
        {
            id: '6',
            name: 'Presov',
            avgprice: 1356.80,
            plotprice: 44.80,
        },
        {
            id: '7',
            name: 'Vysoke Tatry',
            avgprice: 1584,
            plotprice: 52,
        },
        {
            id: '8',
            name: 'Poprad',
            avgprice: 1640,
            plotprice: 68,
        },
        {
            id: '9',
            name: 'Banska Bystrica',
            avgprice: 1720,
            plotprice: 68,
        },
        {
            id: '10',
            name: 'Zvolen',
            avgprice: 1584,
            plotprice: 60,
        },
        {
            id: '11',
            name: 'Zilina',
            avgprice: 1550.94,
            plotprice: 81.60,
        },
        {
            id: '12',
            name: 'Liptovsky Mikulas',
            avgprice: 1468.97,
            plotprice: 69.60,
        },],
    cz: [
        {
            id: '0',
            name: 'Karlove Vary',
            avgprice: 1381.7818,
            plotprice: 59.20,
        },
        {
            id: '1',
            name: 'Cheb',
            avgprice: 1934.7449,
            plotprice: 84.36,
        },
        {
            id: '2',
            name: 'Liberec',
            avgprice: 1666.1100,
            plotprice: 73.26,
        },
        {
            id: '3',
            name: 'Hradec Kralove',
            avgprice: 1907.3814,
            plotprice: 79.92,
        },
        {
            id: '4',
            name: 'Kladno',
            avgprice: 1960.4775,
            plotprice: 66.60,
        },
        {
            id: '5',
            name: 'Mlada Boleslav',
            avgprice: 1525.7451,
            plotprice: 44.40,
        },
        {
            id: '6',
            name: 'Praha okolie',
            avgprice: 2731.9611,
            plotprice: 203.50,
        },
        {
            id: '7',
            name: 'Plzen',
            avgprice: 1587.8435,
            plotprice: 46.25,
        },
        {
            id: '8',
            name: 'Ceske Budejovice',
            avgprice: 1357.1071,
            plotprice: 47.36,
        },
        {
            id: '9',
            name: 'Jihlava',
            avgprice: 1433.3942,
            plotprice: 35,
        },
        {
            id: '10',
            name: 'Pardubice',
            avgprice: 1612.8696,
            plotprice: 29.60,
        },
        {
            id: '11',
            name: 'Brno',
            avgprice: 1838.0220,
            plotprice: 118.40,
        },
        {
            id: '12',
            name: 'Breclav',
            avgprice: 1727.7472,
            plotprice: 46.95,
        },
        {
            id: '13',
            name: 'Zlin',
            avgprice: 1737.3807,
            plotprice: 66.60,
        },
        {
            id: '14',
            name: 'Uherske Hradiste',
            avgprice: 1492.60,
            plotprice: 62.90,
        },
        {
            id: '15',
            name: 'Olomouc',
            avgprice: 1469.2142,
            plotprice: 70.15,
        },
        {
            id: '16',
            name: 'Ostrava',
            avgprice: 1789.6635,
            plotprice: 111,
        },]
}

// VSTUPNE UDAJE NA VYPOCET
//rozloha jedneho viladomu
const rjd = 2332;
//rozloha parkovacieho miesta
const rpm = 14;
//cena parkovacieho miesta
const cpm = 5900;
//predajna plocha 1 viladomu
const ppjv = 1591;

// VSTUPNE UDAJE NAKLADY NA 1 VILADOM
const njd = 1776448.94;

// ZBIERANIE UDAJOV
// rozloha pozemku
function checkRP(element) {
    let rp = element.value;
    return rp;
}

// nacitanie lokalit po zvoleni statu
let stateAndLoc = {};
stateAndLoc['svk'] = ['Bratislava', "Trnava", 'Nitra', 'Kosice', 'Trencin', 'Piestany', 'Presov', 'Vysoke Tatry', 'Poprad', 'Zvolen', 'Banska Bystrica', 'Zilina', 'Liptovsky Mikulas'];
stateAndLoc['cz'] = ['Karlove Vary', 'Cheb', 'Liberec', 'Hradec Kralove', 'Kladno', 'Mlada Boleslav', 'Praha okolie', 'Plzen', 'Ceske Budejovice', 'Jihlava', 'Pardubice', 'Brno', 'Breclav', 'Zlin', 'Uherske Hradiste', 'Olomouc', 'Ostrava'];
stateAndLoc['at'] = ['M6', 'X5', 'Z3'];

let stateList, locationList, selState;
function changeLocationList() {
    stateList = document.getElementById("stat");
    locationList = document.getElementById("lp");
    selState = stateList.options[stateList.selectedIndex].value;
    while (locationList.options.length) {
        locationList.remove(0);
    }
    let states = stateAndLoc[selState];
    if (states) {
        var i;
        for (i = 0; i < states.length; i++) {
            var state = new Option(states[i], i);
            locationList.options.add(state);
        }
    }
}


// hladanie lokality v db
let el, selOpt, selObj, plot;
function findObjectByKey() {
    stateList = document.getElementById("stat")
    el = document.getElementById("lp");
    selOpt = el.options[el.selectedIndex].value;
    selState = stateList.options[stateList.selectedIndex].value;
    let o = 0;
    while (o <= db.length) {
        if (db[o] === selState) {
            selObj = db[o];
        } else {
            o++
        }
        selObj;
    }
    for (o = 0; o < selObj.length; o++) {
        if (selObj[o].id === selopt) {
            plot = selObj[o].plotprice;
        }
    }
    return selObj;
}

// VYPOCET NAKLADOV NA POZEMOK
findObjectByKey()
var nnp;

document.getElementById("naklady").innerHTML = "naklady na pozemok su" + nnp;
// POCET VILADOMOV NA POZEMOK
