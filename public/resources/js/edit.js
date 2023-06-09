let points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
let riichi = document.querySelectorAll('#riichiE, #riichiS, #riichiW, #riichiN');
let tenpai = document.querySelectorAll('#tenpaiE, #tenpaiS, #tenpaiW, #tenpaiN');
let waits = document.querySelectorAll('#waitsE, #waitsS, #waitsW, #waitsN');
let playerName = document.querySelectorAll('#nameE, #nameS, #nameW, #nameN');
let kyotaku = document.querySelector('#kyotaku');
let honba = document.querySelector('#honba');
let honbaPoints = document.querySelector('#honbaPoints');
let dora = document.querySelector('#dora');
let ryukyokuButton = document.querySelector('#ryukyoku')
let clearButton = document.querySelector('#clear');
let tPointsText = document.querySelector('#totalPoints');
let oyaMarker = document.querySelectorAll('#oyaE, #oyaS, #oyaW, #oyaN');
let wind = document.querySelector('#wind');
let round = document.querySelectorAll('#round');
let updateApply = document.querySelector('#updateApply');
let form = document.querySelector('#matchinfo');

let agari = document.querySelector('#agari');
let houju = document.querySelector('#houju');
let han = document.querySelector('#han');
let fu = document.querySelector('#fu');
let calc = document.querySelector('#calc');
let applyButton = document.querySelector('#apply');
let shortcut = document.querySelector('#shortcut');

let winningHandButton = document.querySelector('#winningHandButton');
let winningHandPage = document.querySelector('#winningHandPage');
let winningPlayer = document.querySelector('#winningPlayer');
let winningPlayerArr = Array.from(winningPlayer.options);
let winCalc = document.querySelector('#winCalc');

let teamE = document.querySelector('#teamE');
let teamS = document.querySelector('#teamS');
let teamW = document.querySelector('#teamW');
let teamN = document.querySelector('#teamN');

let nameE = document.querySelector('#nameE');
let nameS = document.querySelector('#nameS');
let nameW = document.querySelector('#nameW');
let nameN = document.querySelector('#nameN');

$(teamE).on('change', function () {
    for (let i = 0; i < nameE.options.length; i++) {
        if (i == (3 * (teamE.selectedIndex)) || i == ((3 * (teamE.selectedIndex)) + 1) || i == ((3 * (teamE.selectedIndex)) + 2)) {
            nameE.options[i].hidden = false;
        } else {
            nameE.options[i].hidden = true;
        }
    }
})

$(teamS).on('change', function () {
    for (let i = 0; i < nameS.options.length; i++) {
        if (i == (3 * (teamS.selectedIndex)) || i == ((3 * (teamS.selectedIndex)) + 1) || i == ((3 * (teamS.selectedIndex)) + 2)) {
            nameS.options[i].hidden = false;
        } else {
            nameS.options[i].hidden = true;
        }
    }
})

$(teamW).on('change', function () {
    for (let i = 0; i < nameW.options.length; i++) {
        if (i == (3 * (teamW.selectedIndex)) || i == ((3 * (teamW.selectedIndex)) + 1) || i == ((3 * (teamW.selectedIndex)) + 2)) {
            nameW.options[i].hidden = false;
        } else {
            nameW.options[i].hidden = true;
        }
    }
})

$(teamN).on('change', function () {
    for (let i = 0; i < nameN.options.length; i++) {
        if (i == (3 * (teamN.selectedIndex)) || i == ((3 * (teamN.selectedIndex)) + 1) || i == ((3 * (teamN.selectedIndex)) + 2)) {
            nameN.options[i].hidden = false;
        } else {
            nameN.options[i].hidden = true;
        }
    }
})

let calcOyaPoint = (calc, han, fu, houju) => {
    if (houju.value == "Tsumo") {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '500 all';
                    return 1500;
                case 40:
                    calc.innerHTML = '700 all';
                    return 2000;
                case 50:
                    calc.innerHTML = '800 all';
                    return 2400;
                case 60:
                    calc.innerHTML = '1000 all';
                    return 2900;
                case 70:
                    calc.innerHTML = '1200 all';
                    return 3400;
                case 80:
                    calc.innerHTML = '1300 all';
                    return 3900;
                case 90:
                    calc.innerHTML = '1500 all';
                    return 4400;
                case 100:
                    calc.innerHTML = '1600 all';
                    return 4800;
                case 110:
                    calc.innerHTML = '1800 all';
                    return 5300;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '700 all';
                    return 2100;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '1000 all';
                    return 2900;
                case 40:
                    calc.innerHTML = '1300 all';
                    return 3900;
                case 50:
                    calc.innerHTML = '1600 all';
                    return 4800;
                case 60:
                    calc.innerHTML = '2000 all';
                    return 5800;
                case 70:
                    calc.innerHTML = '2300 all';
                    return 6800;
                case 80:
                    calc.innerHTML = '2600 all';
                    return 7700;
                case 90:
                    calc.innerHTML = '2900 all';
                    return 8700;
                case 100:
                    calc.innerHTML = '3200 all';
                    return 9600;
                case 110:
                    calc.innerHTML = '3600 all';
                    return 10600;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '1300 all';
                    return 3900;
                case 25:
                    calc.innerHTML = '1600 all';
                    return 4800;
                case 30:
                    calc.innerHTML = '2000 all';
                    return 5800;
                case 40:
                    calc.innerHTML = '2600 all';
                    return 7700;
                case 50:
                    calc.innerHTML = '3200 all';
                    return 9600;
                case 60:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 4000 all';
                        return 12000;
                    } else {
                        calc.innerHTML = '3900 all';
                        return 11600;
                    }
                case 70:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '2600 all';
                    return 7800;
                case 25:
                    calc.innerHTML = '3200 all';
                    return 9600;
                case 30:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 4000 all';
                        return 12000;
                    } else {
                        calc.innerHTML = '3900 all';
                        return 11600;
                    }
                case 40:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 50:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 60:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 70:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 4000 all';
            return 12000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 6000 all';
            return 18000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 6000 all';
            return 18000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 8000 all';
            return 24000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 8000 all';
            return 24000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 8000 all';
            return 24000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 12000 all';
            return 36000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 12000 all';
            return 36000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 16000 all';
            return 48000;
        }
    } else {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '1500';
                    return 1500;
                case 40:
                    calc.innerHTML = '2000';
                    return 2000;
                case 50:
                    calc.innerHTML = '2400';
                    return 2400;
                case 60:
                    calc.innerHTML = '2900';
                    return 2900;
                case 70:
                    calc.innerHTML = '3400';
                    return 3400;
                case 80:
                    calc.innerHTML = '3900';
                    return 3900;
                case 90:
                    calc.innerHTML = '4400';
                    return 4400;
                case 100:
                    calc.innerHTML = '4800';
                    return 4800;
                case 110:
                    calc.innerHTML = '5300';
                    return 5300;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '2400';
                    return 2400;
                case 30:
                    calc.innerHTML = '2900';
                    return 2900;
                case 40:
                    calc.innerHTML = '3900';
                    return 3900;
                case 50:
                    calc.innerHTML = '4800';
                    return 4800;
                case 60:
                    calc.innerHTML = '5800';
                    return 5800;
                case 70:
                    calc.innerHTML = '6800';
                    return 6800;
                case 80:
                    calc.innerHTML = '7700';
                    return 7700;
                case 90:
                    calc.innerHTML = '8700';
                    return 8700;
                case 100:
                    calc.innerHTML = '9600';
                    return 9600;
                case 110:
                    calc.innerHTML = '10600';
                    return 10600;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '4800';
                    return 4800;
                case 30:
                    calc.innerHTML = '5800';
                    return 5800;
                case 40:
                    calc.innerHTML = '7700';
                    return 7700;
                case 50:
                    calc.innerHTML = '9600';
                    return 9600;
                case 60:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 12000';
                        return 12000;
                    } else {
                        calc.innerHTML = '11600';
                        return 11600;
                    }
                case 70:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '9600';
                    return 9600;
                case 30:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 12000';
                        return 12000;
                    } else {
                        calc.innerHTML = '11600';
                        return 11600;
                    }
                case 40:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 50:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 60:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 70:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 12000';
            return 12000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 18000';
            return 18000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 18000';
            return 18000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 24000';
            return 24000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 24000';
            return 24000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 24000';
            return 24000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 36000';
            return 36000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 36000';
            return 36000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 48000';
            return 48000;
        }
    }
}


let calcKoPoint = (calc, han, fu, houju) => {
    if (houju.value == "Tsumo") {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '300/500';
                    return 1000;
                case 40:
                    calc.innerHTML = '400/700';
                    return 1300;
                case 50:
                    calc.innerHTML = '400/800';
                    return 1600;
                case 60:
                    calc.innerHTML = '500/1000';
                    return 2000;
                case 70:
                    calc.innerHTML = '600/1200';
                    return 2300;
                case 80:
                    calc.innerHTML = '700/1300';
                    return 2600;
                case 90:
                    calc.innerHTML = '800/1500';
                    return 2900;
                case 100:
                    calc.innerHTML = '800/1600';
                    return 3200;
                case 110:
                    calc.innerHTML = '900/1800';
                    return 3600;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '400/700';
                    return 1400;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '500/1000';
                    return 2000;
                case 40:
                    calc.innerHTML = '700/1300';
                    return 2600;
                case 50:
                    calc.innerHTML = '800/1600';
                    return 3200;
                case 60:
                    calc.innerHTML = '1000/2000';
                    return 3900;
                case 70:
                    calc.innerHTML = '1200/2300';
                    return 4500;
                case 80:
                    calc.innerHTML = '1300/2600';
                    return 5200;
                case 90:
                    calc.innerHTML = '1500/2900';
                    return 5800;
                case 100:
                    calc.innerHTML = '1600/3200';
                    return 6400;
                case 110:
                    calc.innerHTML = '1800/3600';
                    return 7100;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '700/1300';
                    return 2600;
                case 25:
                    calc.innerHTML = '800/1600';
                    return 3200;
                case 30:
                    calc.innerHTML = '1000/2000';
                    return 3900;
                case 40:
                    calc.innerHTML = '1300/2600';
                    return 5200;
                case 50:
                    calc.innerHTML = '1600/3200';
                    return 6400;
                case 60:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 2000/4000';
                        return 8000;
                    } else {
                        calc.innerHTML = '2000/3900';
                        return 7700;
                    }
                case 70:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '1300/2600';
                    return 5200;
                case 25:
                    calc.innerHTML = '1600/3200';
                    return 6400;
                case 30:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 2000/4000';
                        return 8000;
                    } else {
                        calc.innerHTML = '2000/3900';
                        return 7700;
                    }
                case 40:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 50:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 60:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 70:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 2000/4000';
            return 8000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 3000/6000';
            return 12000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 3000/6000';
            return 12000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 4000/8000';
            return 16000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 4000/8000';
            return 16000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 4000/8000';
            return 16000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 6000/12000';
            return 24000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 6000/12000';
            return 24000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 8000/16000';
            return 32000;
        }
    } else {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '1000';
                    return 1000;
                case 40:
                    calc.innerHTML = '1300';
                    return 1300;
                case 50:
                    calc.innerHTML = '1600';
                    return 1600;
                case 60:
                    calc.innerHTML = '2000';
                    return 2000;
                case 70:
                    calc.innerHTML = '2300';
                    return 2300;
                case 80:
                    calc.innerHTML = '2600';
                    return 2600;
                case 90:
                    calc.innerHTML = '2900';
                    return 2900;
                case 100:
                    calc.innerHTML = '3200';
                    return 3200;
                case 110:
                    calc.innerHTML = '3600';
                    return 3600;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '1600';
                    return 1600;
                case 30:
                    calc.innerHTML = '2000';
                    return 2000;
                case 40:
                    calc.innerHTML = '2600';
                    return 2600;
                case 50:
                    calc.innerHTML = '3200';
                    return 3200;
                case 60:
                    calc.innerHTML = '3900';
                    return 3900;
                case 70:
                    calc.innerHTML = '4500';
                    return 4500;
                case 80:
                    calc.innerHTML = '5200';
                    return 5200;
                case 90:
                    calc.innerHTML = '5800';
                    return 5800;
                case 100:
                    calc.innerHTML = '6400';
                    return 6400;
                case 110:
                    calc.innerHTML = '7100';
                    return 7100;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '3200';
                    return 3200;
                case 30:
                    calc.innerHTML = '3900';
                    return 3900;
                case 40:
                    calc.innerHTML = '5200';
                    return 5200;
                case 50:
                    calc.innerHTML = '6400';
                    return 6400;
                case 60:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 8000';
                        return 8000;
                    } else {
                        calc.innerHTML = '7700';
                        return 7700;
                    }
                case 70:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '6400';
                    return 6400;
                case 30:
                    if (kiriage.value == 'true') {
                        calc.innerHTML = 'Mangan 8000';
                        return 8000;
                    } else {
                        calc.innerHTML = '7700';
                        return 7700;
                    }
                case 40:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 50:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 60:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 70:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 8000';
            return 8000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 12000';
            return 12000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 12000';
            return 12000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 16000';
            return 16000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 16000';
            return 16000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 16000';
            return 16000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 24000';
            return 24000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 24000';
            return 24000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 32000';
            return 32000;
        }
    }
}

// let updateCalc = () => {
//     calc.innerHTML = calcPoint();
// }

let updateApplyActivate = () => {
    if (updateApply.checked) {
        document.getElementById('updateApplyHidden').disabled = true;
        if (document.getElementById('hidePlayerInfo').checked) {
            document.getElementById('hidePlayerInfoHidden').disabled = true;
        }
        if (document.getElementById('hideMatchInfo').checked) {
            document.getElementById('hideMatchInfoHidden').disabled = true;
        }
        document.getElementById('matchinfo').submit();
    }
}

let updateRiichiActivate = () => {
    if (updateRiichi.checked) {
        document.getElementById('updateRiichiHidden').disabled = true;
        if (document.getElementById('hidePlayerInfo').checked) {
            document.getElementById('hidePlayerInfoHidden').disabled = true;
        }
        if (document.getElementById('hideMatchInfo').checked) {
            document.getElementById('hideMatchInfoHidden').disabled = true;
        }
        document.getElementById('matchinfo').submit();
    }
}

let oyaChecker = () => {
    for (let n of playerName) {
        if (agari.value == n.value) {
            return n.parentElement.parentElement.parentElement.children[4].children[0].children[0].children[0].checked;
        }
    }
}

let nameErrorShown = false;
let pointsErrorShown = false;
let toolContainer = document.querySelector('.toolContainer');
let errorDiv = document.createElement('div');
errorDiv.classList.add('errorMessage');

let applyPoints = () => {
    if (agari.value == '') {
        if (!nameErrorShown) {
            let errorMessage = "Name not selected";
            errorDiv.innerHTML = errorMessage;
            toolContainer.append(errorDiv);
            nameErrorShown = true;
        }
    } else if (calc.innerHTML == 'n/a') {
        if (!pointsErrorShown) {
            let pointsErrorMessage = "Points invalid";
            errorDiv.innerHTML = pointsErrorMessage;
            toolContainer.append(errorDiv);
            pointsErrorShown = true;
        }
    } else {
        for (let n of playerName) {
            let target = n.parentElement.parentElement.nextElementSibling.childNodes[1].childNodes[1];
            // let riichiCheck = n.parentElement.parentElement.parentElement.children[4].children[1].children[0].children[0].checked;
            if (houju.value == "Tsumo") {
                if (oyaChecker()) {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + Math.ceil(calcOyaPoint(calc, han, fu, houju) / 3 / 100) * 300 + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    } else {
                        let value = parseInt(target.value.replace(',', '')) - Math.ceil(calcOyaPoint(calc, han, fu, houju) / 3 / 100) * 100 - honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    }
                } else {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + Math.ceil(calcKoPoint(calc, han, fu, houju) / 2 / 100) * 100 + Math.ceil(calcKoPoint(calc, han, fu, houju) / 4 / 100) * 100 * 2 + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    } else if (n.parentElement.parentElement.parentElement.children[4].children[0].children[0].children[0].checked) {
                        let value = parseInt(target.value.replace(',', '')) - Math.ceil(calcKoPoint(calc, han, fu, houju) / 2 / 100) * 100 - honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    } else {
                        let value = parseInt(target.value.replace(',', '')) - Math.ceil(calcKoPoint(calc, han, fu, houju) / 4 / 100) * 100 - honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    }
                }
            } else {
                if (oyaChecker()) {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + calcOyaPoint(calc, han, fu, houju) + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    } else if (houju.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) - calcOyaPoint(calc, han, fu, houju) - honba.valueAsNumber * parseInt(honbaPoints.value);
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    } else {
                        let value = parseInt(target.value.replace(',', ''));
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    }
                } else {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + calcKoPoint(calc, han, fu, houju) + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    } else if (houju.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) - calcKoPoint(calc, han, fu, houju) - honba.valueAsNumber * parseInt(honbaPoints.value);
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    } else {
                        let value = parseInt(target.value.replace(',', ''));
                        // if (riichiCheck) {
                        //     value -= 1000;
                        // }
                        target.value = value.toLocaleString();
                    }
                }
            }
        }
        kyotaku.value = 0;
        if (oyaChecker()) {
            honba.valueAsNumber++;
        } else {
            honba.value = 0;
            for (let i = 0; i < oyaMarker.length; i++) {
                if (oyaMarker[i].checked) {
                    if (i == 3) {
                        oyaMarker[0].checked = true;
                        if (wind.value == 'EAST' && round[3].checked) {
                            wind.value = 'SOUTH'
                            round[0].checked = true;
                        } else if (wind.value == 'SOUTH' && round[3].checked) {
                            break;
                        } else {
                            let arr = Array.from(round);
                            let current = arr.indexOf(arr.find(x => x.checked == true));
                            arr[current + 1].checked = true;
                        }
                        break;
                    } else {
                        oyaMarker[i + 1].checked = true;
                        if (wind.value == 'EAST' && round[3].checked) {
                            wind.value = 'SOUTH'
                            round[0].checked = true;
                        } else if (wind.value == 'SOUTH' && round[3].checked) {
                            break;
                        } else {
                            let arr = Array.from(round);
                            let current = arr.indexOf(arr.find(x => x.checked == true));
                            arr[current + 1].checked = true;
                        }
                        break;
                    }
                }
            }
        }
        let arr = Array.from(riichi);
        for (let r of arr) {
            if (r.checked) {
                r.checked = false;
            }
        }
        let tenpaiArr = Array.from(tenpai);
        for (let t of tenpaiArr) {
            if (t.checked) {
                t.checked = false;
            }
        }
        for (w of waits) {
            w.value = "";
        }
        dora.value = "";
        if (updateRiichi.checked) {
            document.getElementById('updateRiichiHidden').disabled = true;
        }
        if (document.getElementById('updateRyukyoku').checked) {
            document.getElementById('updateRyukyokuHidden').disabled = true;
        }
        if (document.getElementById('mute').checked) {
            document.getElementById('muteHidden').disabled = true;
        }
        updateApplyActivate();
    }
}

applyButton.addEventListener('click', applyPoints);

let showPointMove = () => {
    for (let n of playerName) {
        let target = n.parentElement.parentElement.nextElementSibling.childNodes[1].childNodes[1];
        let riichiCheck = n.parentElement.parentElement.parentElement.children[4].children[1].children[0].children[0].checked;
        if (houju.value == "Tsumo") {
            if (oyaChecker()) {
                if (agari.value == '') {
                    break;
                } else if (agari.value == n.value) {
                    let value = Math.ceil(calcOyaPoint(calc, han, fu, houju) / 3 / 100) * 300 + honba.valueAsNumber * parseInt(honbaPoints.value);
                    let bonus = kyotaku.valueAsNumber * 1000;
                    if (target.nextSibling.className !== 'pointsEarned') {
                        if (target.nextSibling.className == 'pointsLost') {
                            target.nextSibling.remove();
                        };
                        let pointsEarned = document.createElement('div');
                        pointsEarned.classList.add('pointsEarned');
                        target.insertAdjacentElement('afterend', pointsEarned);
                        // if (riichiCheck) {
                        //     bonus -= 1000;
                        // }
                        if (bonus !== 0) {
                            pointsEarned.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            pointsEarned.innerHTML = '+' + value.toLocaleString();
                        }
                    } else {
                        if (bonus !== 0) {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString();
                        }
                    }
                } else {
                    let value = Math.ceil(calcOyaPoint(calc, han, fu, houju) / 3 / 100) * 100 + honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                    let riichiStick = 1000;
                    if (target.nextSibling.className !== 'pointsLost') {
                        if (target.nextSibling.className == 'pointsEarned') {
                            target.nextSibling.remove();
                        };
                        let pointsLost = document.createElement('div');
                        pointsLost.classList.add('pointsLost');
                        target.insertAdjacentElement('afterend', pointsLost);
                        // if (riichiCheck) {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString();
                        // }
                        pointsLost.innerHTML = '-' + value.toLocaleString();
                    } else {
                        // if (riichiCheck) {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // }
                        target.nextSibling.innerHTML = '-' + value.toLocaleString();
                    }
                }
            } else {
                if (agari.value == '') {
                    break;
                } else if (agari.value == n.value) {
                    let value = Math.ceil(calcKoPoint(calc, han, fu, houju) / 2 / 100) * 100 + Math.ceil(calcKoPoint(calc, han, fu, houju) / 4 / 100) * 100 * 2 + honba.valueAsNumber * parseInt(honbaPoints.value);
                    let bonus = kyotaku.valueAsNumber * 1000;
                    if (target.nextSibling.className !== 'pointsEarned') {
                        if (target.nextSibling.className == 'pointsLost') {
                            target.nextSibling.remove();
                        };
                        let pointsEarned = document.createElement('div');
                        pointsEarned.classList.add('pointsEarned');
                        target.insertAdjacentElement('afterend', pointsEarned);
                        // if (riichiCheck) {
                        //     bonus -= 1000;
                        // }
                        if (bonus !== 0) {
                            pointsEarned.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            pointsEarned.innerHTML = '+' + value.toLocaleString();
                        }
                    } else {
                        if (bonus !== 0) {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString();
                        }
                    }
                } else if (n.parentElement.parentElement.parentElement.children[4].children[0].children[0].children[0].checked) {
                    let value = Math.ceil(calcKoPoint(calc, han, fu, houju) / 2 / 100) * 100 + honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                    let riichiStick = 1000;
                    if (target.nextSibling.className !== 'pointsLost') {
                        if (target.nextSibling.className == 'pointsEarned') {
                            target.nextSibling.remove();
                        };
                        let pointsLost = document.createElement('div');
                        pointsLost.classList.add('pointsLost');
                        target.insertAdjacentElement('afterend', pointsLost);
                        // if (riichiCheck) {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString();
                        // }
                        pointsLost.innerHTML = '-' + value.toLocaleString();
                    } else {
                        // if (riichiCheck) {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // }
                        target.nextSibling.innerHTML = '-' + value.toLocaleString();
                    }
                } else {
                    let value = Math.ceil(calcKoPoint(calc, han, fu, houju) / 4 / 100) * 100 + honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                    let riichiStick = 1000;
                    if (target.nextSibling.className !== 'pointsLost') {
                        if (target.nextSibling.className == 'pointsEarned') {
                            target.nextSibling.remove();
                        };
                        let pointsLost = document.createElement('div');
                        pointsLost.classList.add('pointsLost');
                        target.insertAdjacentElement('afterend', pointsLost);
                        // if (riichiCheck) {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString();
                        // }
                        pointsLost.innerHTML = '-' + value.toLocaleString();
                    } else {
                        // if (riichiCheck) {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString();
                        // }
                        target.nextSibling.innerHTML = '-' + value.toLocaleString();
                    }
                }
            }
        } else {
            if (oyaChecker()) {
                if (agari.value == '') {
                    break;
                } else if (agari.value == n.value) {
                    let value = calcOyaPoint(calc, han, fu, houju) + honba.valueAsNumber * parseInt(honbaPoints.value);
                    let bonus = kyotaku.valueAsNumber * 1000;
                    if (target.nextSibling.className !== 'pointsEarned') {
                        if (target.nextSibling.className == 'pointsLost') {
                            target.nextSibling.remove();
                        };
                        let pointsEarned = document.createElement('div');
                        pointsEarned.classList.add('pointsEarned');
                        target.insertAdjacentElement('afterend', pointsEarned);
                        // if (riichiCheck) {
                        //     bonus -= 1000;
                        // }
                        if (bonus !== 0) {
                            pointsEarned.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            pointsEarned.innerHTML = '+' + value.toLocaleString();
                        }
                    } else {
                        if (bonus !== 0) {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString();
                        }
                    }
                } else if (houju.value == n.value) {
                    let value = calcOyaPoint(calc, han, fu, houju) + honba.valueAsNumber * parseInt(honbaPoints.value);
                    let riichiStick = 1000;
                    if (target.nextSibling.className !== 'pointsLost') {
                        if (target.nextSibling.className == 'pointsEarned') {
                            target.nextSibling.remove();
                        };
                        let pointsLost = document.createElement('div');
                        pointsLost.classList.add('pointsLost');
                        target.insertAdjacentElement('afterend', pointsLost);
                        // if (riichiCheck) {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString();
                        // }
                        pointsLost.innerHTML = '-' + value.toLocaleString();
                    } else {
                        // if (riichiCheck) {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString();
                        // }
                        target.nextSibling.innerHTML = '-' + value.toLocaleString();
                    }
                } else {
                    if (target.nextSibling.className == 'pointsEarned') {
                        target.nextSibling.remove();
                        // if (riichiCheck) {
                        //     let riichiStick = 1000;
                        //     let pointsLost = document.createElement('div');
                        //     pointsLost.classList.add('pointsLost');
                        //     target.insertAdjacentElement('afterend', pointsLost);
                        //     pointsLost.innerHTML = '-' + riichiStick.toLocaleString();
                        // }
                    } else if (target.nextSibling.className == 'pointsLost') {
                        // if (riichiCheck) {
                        //     let riichiStick = 1000;
                        //     target.nextSibling.innerHTML = '-' + riichiStick.toLocaleString();
                        // } else {
                        //     target.nextSibling.remove();
                        // }
                        target.nextSibling.remove();
                    }
                }
            } else {
                if (agari.value == '') {
                    break;
                } else if (agari.value == n.value) {
                    let value = calcKoPoint(calc, han, fu, houju) + honba.valueAsNumber * parseInt(honbaPoints.value)
                    let bonus = kyotaku.valueAsNumber * 1000;
                    if (target.nextSibling.className !== 'pointsEarned') {
                        if (target.nextSibling.className == 'pointsLost') {
                            target.nextSibling.remove();
                        };
                        let pointsEarned = document.createElement('div');
                        pointsEarned.classList.add('pointsEarned');
                        target.insertAdjacentElement('afterend', pointsEarned);
                        // if (riichiCheck) {
                        //     bonus -= 1000;
                        // }
                        if (bonus !== 0) {
                            pointsEarned.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            pointsEarned.innerHTML = '+' + value.toLocaleString();
                        }
                    } else {
                        if (bonus !== 0) {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString() + ' (+' + bonus.toLocaleString() + ')';
                        } else {
                            target.nextSibling.innerHTML = '+' + value.toLocaleString();
                        }
                    }
                } else if (houju.value == n.value) {
                    let value = calcKoPoint(calc, han, fu, houju) + honba.valueAsNumber * parseInt(honbaPoints.value);
                    let riichiStick = 1000;
                    if (target.nextSibling.className !== 'pointsLost') {
                        if (target.nextSibling.className == 'pointsEarned') {
                            target.nextSibling.remove();
                        };
                        let pointsLost = document.createElement('div');
                        pointsLost.classList.add('pointsLost');
                        target.insertAdjacentElement('afterend', pointsLost);
                        // if (riichiCheck) {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     pointsLost.innerHTML = '-' + value.toLocaleString();
                        // }
                        pointsLost.innerHTML = '-' + value.toLocaleString();
                    } else {
                        // if (riichiCheck) {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString() + ' (-' + riichiStick.toLocaleString() + ')';
                        // } else {
                        //     target.nextSibling.innerHTML = '-' + value.toLocaleString();
                        // }
                        target.nextSibling.innerHTML = '-' + value.toLocaleString();
                    }
                } else {
                    if (target.nextSibling.className == 'pointsEarned') {
                        target.nextSibling.remove();
                        // if (riichiCheck) {
                        //     let riichiStick = 1000;
                        //     let pointsLost = document.createElement('div');
                        //     pointsLost.classList.add('pointsLost');
                        //     target.insertAdjacentElement('afterend', pointsLost);
                        //     pointsLost.innerHTML = '-' + riichiStick.toLocaleString();
                        // }
                    } else if (target.nextSibling.className == 'pointsLost') {
                        // if (riichiCheck) {
                        //     let riichiStick = 1000;
                        //     target.nextSibling.innerHTML = '-' + riichiStick.toLocaleString();
                        // } else {
                        //     target.nextSibling.remove();
                        // }
                        target.nextSibling.remove();
                    }
                }
            }
        }
    }
}



let updatePoints = (arr) => {
    let totalPoints = 0;
    for (p of arr) {
        totalPoints += parseInt(p.value.replace(',', ''));
    }
    totalPoints = totalPoints + kyotaku.valueAsNumber * 1000
    tPointsText.innerHTML = 'Total Points: ' + totalPoints.toLocaleString();
}
updatePoints(points);

function updateTextView(_obj) {
    let num = getNumber(_obj.val());
    $(_obj.val(num.toLocaleString()));
}

function getNumber(_str) {
    let arr = _str.replace(',', '').split('');
    let out = new Array();
    for (let i = 0; i < arr.length; i++) {
        out.push(arr[i]);
    }
    return Number(out.join(''));
}




let incrementOne = (e) => {
    console.log(e);
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value += 100;
    target.value = value.toLocaleString();
    updatePoints(points);
}

let decrementOne = (e) => {
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value -= 100;
    target.value = value.toLocaleString();
    updatePoints(points);
}
let incrementOneK = (e) => {
    console.log(e);
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value += 1000;
    target.value = value.toLocaleString();
    updatePoints(points);
}

let decrementOneK = (e) => {
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value -= 1000;
    target.value = value.toLocaleString();
    updatePoints(points);
}
let incrementTenK = (e) => {
    console.log(e);
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value += 10000;
    target.value = value.toLocaleString();
    updatePoints(points);
}

let decrementTenK = (e) => {
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value -= 10000;
    target.value = value.toLocaleString();
    updatePoints(points);
}

let ryukyoku = () => {
    let count = 0;
    let arr = Array.from(riichi);
    console.log(arr);
    for (let r of arr) {
        if (r.checked) {
            count++
            r.checked = false;
            // let target = r.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0];
            // let value = parseInt(target.value.replace(',', '')) - 1000;
            // target.value = value.toLocaleString();
        }
    }
    let tenpaiCount = 0;
    let tenpaiArr = Array.from(tenpai);
    let oyaTenpai = false;
    for (let t of tenpaiArr) {
        if (t.checked) {
            tenpaiCount++
            if (t.parentNode.parentNode.parentNode.parentNode.children[4].children[0].children[0].children[0].checked) {
                oyaTenpai = true;
            }
        }
    }
    for (let t of tenpaiArr) {
        let target = t.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0];
        if (tenpaiCount == 1) {
            if (t.checked) {
                let value = parseInt(target.value.replace(',', '')) + 3000;
                target.value = value.toLocaleString();
                t.checked = false;
            } else {
                let value = parseInt(target.value.replace(',', '')) - 1000;
                target.value = value.toLocaleString();
            }
        } else if (tenpaiCount == 2) {
            if (t.checked) {
                let value = parseInt(target.value.replace(',', '')) + 1500;
                target.value = value.toLocaleString();
                t.checked = false;
            } else {
                let value = parseInt(target.value.replace(',', '')) - 1500;
                target.value = value.toLocaleString();
            }
        } else if (tenpaiCount == 3) {
            if (t.checked) {
                let value = parseInt(target.value.replace(',', '')) + 1000;
                target.value = value.toLocaleString();
                t.checked = false;
            } else {
                let value = parseInt(target.value.replace(',', '')) - 3000;
                target.value = value.toLocaleString();
            }
        } else {
            t.checked = false;
        }
    }
    console.log(count);
    // kyotaku.valueAsNumber = kyotaku.valueAsNumber + count;
    honba.valueAsNumber++;
    updatePoints(points);
    for (w of waits) {
        w.value = "";
    }
    dora.value = "";
    if (!oyaTenpai) {
        for (let i = 0; i < oyaMarker.length; i++) {
            if (oyaMarker[i].checked) {
                if (i == 3) {
                    oyaMarker[0].checked = true;
                    if (wind.value == 'EAST' && round[3].checked) {
                        wind.value = 'SOUTH'
                        round[0].checked = true;
                    } else if (wind.value == 'SOUTH' && round[3].checked) {
                        break;
                    } else {
                        let arr = Array.from(round);
                        let current = arr.indexOf(arr.find(x => x.checked == true));
                        arr[current + 1].checked = true;
                    }
                    break;
                } else {
                    oyaMarker[i + 1].checked = true;
                    if (wind.value == 'EAST' && round[3].checked) {
                        wind.value = 'SOUTH'
                        round[0].checked = true;
                    } else if (wind.value == 'SOUTH' && round[3].checked) {
                        break;
                    } else {
                        let arr = Array.from(round);
                        let current = arr.indexOf(arr.find(x => x.checked == true));
                        arr[current + 1].checked = true;
                    }
                    break;
                }
            }
        }
    }
    if (updateRyukyoku.checked) {
        hiddenButtonDeactivatedSubmit();
    }
}

ryukyokuButton.addEventListener('click', ryukyoku);

let clear = () => {
    let arr = Array.from(riichi);
    for (let r of arr) {
        if (r.checked) {
            r.checked = false;
            let target = r.parentElement.parentElement.parentElement.parentElement.children[2].children[0].children[0];
            let value = parseInt(target.value.replace(',', '')) + 1000;
            target.value = value.toLocaleString();
        }
    }
    let tenpaiArr = Array.from(tenpai);
    for (let t of tenpaiArr) {
        t.checked = false;
    }
    kyotaku.valueAsNumber = 0;
    honba.valueAsNumber = 0;
    updatePoints(points);
    for (w of waits) {
        w.value = "";
    }
    dora.value = "";
}

clearButton.addEventListener('click', clear);

$(document).ready(function () {
    $('input[inputmode=numeric]').on('change', function () {
        updateTextView($(this));
        updatePoints(points);
    });
    $('input[type=text].waitBox').on('keyup', function () {
        if (this.value !== '') {
            this.parentNode.parentNode.parentNode.children[1].children[0].children[0].checked = true;
        } else {
            this.parentNode.parentNode.parentNode.children[1].children[0].children[0].checked = false;
        }
    });
    $('.lowerContainer input[type=checkbox].riichi').on('change', function () {
        if (this.checked == true) {
            let target = document.getElementById($(this)[0].value);
            let value = parseInt(target.value.replace(',', ''));
            kyotaku.valueAsNumber++
            value -= 1000;
            target.value = value.toLocaleString();
            this.parentNode.parentNode.parentNode.parentNode.children[3].children[1].children[0].children[0].checked = true;
            updatePoints(points);
        } else {
            this.parentNode.parentNode.parentNode.parentNode.children[3].children[1].children[0].children[0].checked = false;
        }
        if (document.getElementById('updateApply').checked) {
            document.getElementById('updateApplyHidden').disabled = true;
        }
        if (document.getElementById('updateRyukyoku').checked) {
            document.getElementById('updateRyukyokuHidden').disabled = true;
        }
        if (document.getElementById('mute').checked) {
            document.getElementById('muteHidden').disabled = true;
        }
        updateRiichiActivate();
        // else {
        //     let target = document.getElementById($(this)[0].value);
        //     let value = parseInt(target.value.replace(',', ''));
        //     value += 1000;
        //     target.value = value.toLocaleString();
        //     updatePoints(points);
        // }
    });
    $('#kyotaku').on('change', function () {
        updatePoints(points);
        showPointMove();
    });
    $('#honba').on('change', function () {
        showPointMove();
    });
    $('#kiriage').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint(calc, han, fu, houju);
        } else {
            calcKoPoint(calc, han, fu, houju);
        }
        showPointMove();
    });
    $('#han').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint(calc, han, fu, houju);
        } else {
            calcKoPoint(calc, han, fu, houju);
        }
        showPointMove();
        winHan.value = han.value;
    });
    $('#fu').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint(calc, han, fu, houju);
        } else {
            calcKoPoint(calc, han, fu, houju);
        }
        showPointMove();
        winFu.value = fu.value;
    });
    $('#agari').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint(calc, han, fu, houju);
        } else {
            calcKoPoint(calc, han, fu, houju);
        }
        for (let i = 0; i < houju.options.length; i++) {
            if (agari.value == houju.options[i].value) {
                houju.options[i].hidden = true;
            } else {
                houju.options[i].hidden = false;
            }
        }
        showPointMove();
        for (let p of winningPlayerArr) {
            if (p.value == agari.value) {
                p.selected = true;
            }
        }
    });
    $('#houju').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint(calc, han, fu, houju);
        } else {
            calcKoPoint(calc, han, fu, houju);
        }
        for (let i = 1; i < agari.options.length; i++) {
            if (houju.value == agari.options[i].value) {
                agari.options[i].hidden = true;
            } else {
                agari.options[i].hidden = false;
            }
        }
        showPointMove();
    });
    $(oyaMarker).on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint(calc, han, fu, houju);
        } else {
            calcKoPoint(calc, han, fu, houju);
        }
        showPointMove();
    });
    $('#winHan, #winFu, #winOya, #winTsumo').on('change', function () {
        if (winOya.checked) {
            if (winTsumo.checked) {
                winTsumo.value = "Tsumo";
                tsumo.checked = true;
                calcOyaPoint(winCalc, winHan, winFu, winTsumo);
            } else {
                winTsumo.value = "Ron";
                tsumo.checked = false;
                calcOyaPoint(winCalc, winHan, winFu, winTsumo);
            }
        } else {
            if (winTsumo.checked) {
                winTsumo.value = "Tsumo";
                tsumo.checked = true;
                calcKoPoint(winCalc, winHan, winFu, winTsumo);
            } else {
                winTsumo.value = "Ron";
                tsumo.checked = false;
                calcKoPoint(winCalc, winHan, winFu, winTsumo);
            }
        }
        winPoint.value = winCalc.innerHTML;
    })
});


let hiddenButtonDeactivatedSubmit = () => {
    if (document.getElementById('updateApply').checked) {
        document.getElementById('updateApplyHidden').disabled = true;
    }
    if (document.getElementById('updateRiichi').checked) {
        document.getElementById('updateRiichiHidden').disabled = true;
    }
    if (document.getElementById('updateRyukyoku').checked) {
        document.getElementById('updateRyukyokuHidden').disabled = true;
    }
    if (document.getElementById('hidePlayerInfo').checked) {
        document.getElementById('hidePlayerInfoHidden').disabled = true;
    }
    if (document.getElementById('hideMatchInfo').checked) {
        document.getElementById('hideMatchInfoHidden').disabled = true;
    }
    if (document.getElementById('mute').checked) {
        document.getElementById('muteHidden').disabled = true;
    }
    document.getElementById('matchinfo').submit();
}

let twentyFiveButton = document.querySelector('#twentyFive');
let thirtyButton = document.querySelector('#thirty');
let resetAllButton = document.querySelector('#resetAll');

let setTwentyFive = () => {
    if (confirm('Are you sure you want to set all points to 25,000?')) {
        let arr = Array.from(points);
        for (let p of arr) {
            p.value = '25,000';
        }
        updatePoints(points);
        hiddenButtonDeactivatedSubmit();
    }
}

let setThirty = () => {
    if (confirm('Are you sure you want to set all points to 30,000?')) {
        let arr = Array.from(points);
        for (let p of arr) {
            p.value = '30,000';
        }
        updatePoints(points);
        hiddenButtonDeactivatedSubmit();
    }
}

let resetAll = () => {
    if (confirm('Are you sure you want to reset the game? (25,000 points All)')) {
        let arr = Array.from(points);
        for (let p of arr) {
            p.value = '25,000';
        }
        updatePoints(points);
        let riichiArr = Array.from(riichi);
        for (let r of riichiArr) {
            r.checked = false;
        }
        let tenpaiArr = Array.from(tenpai);
        for (let t of tenpaiArr) {
            t.checked = false;
        }
        wind.value = 'EAST';
        round[0].checked = true;
        kyotaku.value = 0;
        honba.value = 0;
        oyaMarker[0].checked = true
        for (w of waits) {
            w.value = "";
        }
        dora.value = "";
        hiddenButtonDeactivatedSubmit();
    }
}

twentyFiveButton.addEventListener('click', setTwentyFive);
thirtyButton.addEventListener('click', setThirty);
resetAllButton.addEventListener('click', resetAll);


let cover = document.querySelector('.cover')

let showWinningHandPage = () => {
    winningHandPage.classList.toggle('showPage')
    winningHandButton.classList.toggle('showPage');
    cover.classList.toggle('activateCover');
    document.body.classList.toggle('moveMain');
}

let hideWinningHandPage = () => {
    winningHandPage.classList.remove('showPage')
    winningHandButton.classList.remove('showPage');
    cover.classList.remove('activateCover');
    document.body.classList.remove('moveMain');
}

winningHandButton.addEventListener('click', showWinningHandPage);
showHand.addEventListener('click', hiddenButtonDeactivatedSubmit);
cover.addEventListener('click', hideWinningHandPage);

form.addEventListener('submit', () => {
    if (document.getElementById('updateApply').checked) {
        document.getElementById('updateApplyHidden').disabled = true;
    }
    if (document.getElementById('updateRiichi').checked) {
        document.getElementById('updateRiichiHidden').disabled = true;
    }
    if (document.getElementById('updateRyukyoku').checked) {
        document.getElementById('updateRyukyokuHidden').disabled = true;
    }
    if (document.getElementById('hidePlayerInfo').checked) {
        document.getElementById('hidePlayerInfoHidden').disabled = true;
    }
    if (document.getElementById('hideMatchInfo').checked) {
        document.getElementById('hideMatchInfoHidden').disabled = true;
    }
    if (document.getElementById('mute').checked) {
        document.getElementById('muteHidden').disabled = true;
    }
});

