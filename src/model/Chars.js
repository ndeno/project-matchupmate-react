const Kazuya = {
    charName : 'Kazuya',
    moves : [
        {
            index : 1,
            notation: '1', 
            speed : 'i10',
            onHit: '+3',
            onBlock: '-0',
            hitLevel: 'hhh',
            topMove: false
        },
        {
            index : 2,
            notation: '11', 
            speed : 'i10',
            onHit: '+3',
            onBlock: '-0',
            hitLevel: 'hhh',
            topMove: false
        },
        {
            index : 3,
            notation: '13', 
            speed : 'i10',
            onHit: '+3',
            onBlock: '-0',
            hitLevel: 'hhh',
            topMove: false
        },
        {
            index : 4,
            notation: '122', 
            speed : 'i10',
            onHit: '+3',
            onBlock: '-0',
            hitLevel: 'hhh',
            topMove: false
        },
        {
            index : 5,
            notation: 'ff2', 
            speed : 'i10',
            onHit: '+3',
            onBlock: '-0',
            hitLevel: 'hhh',
            topMove: true
        }
    ]
}

const paul = {
    charName: 'Paul', 
    moves: [
        {
          "Index": 1,
          "notation": "in rage 1+2",
          "hitLevel": "m",
          "Damage": "55(10,45)",
          "speed": "20 pc8~17",
          "onBlock": "-22",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 2,
          "notation": "in rage 1+2, b",
          "hitLevel": "m",
          "Damage": "20",
          "speed": "20",
          "onBlock": "-22",
          "onHit": "TSU",
          "topMove": "false"
        },
        {
          "Index": 3,
          "notation": "in rage qcf+1+2",
          "hitLevel": "m",
          "Damage": "40(60)",
          "speed": "12(14~)",
          "onBlock": "+3(wl+9)",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 4,
          "notation": "1",
          "hitLevel": "h",
          "Damage": "7",
          "speed": "10",
          "onBlock": "1",
          "onHit": "8",
          "topMove": "false"
        },
        {
          "Index": 5,
          "notation": "1, 2",
          "hitLevel": "h, h",
          "Damage": "7,12",
          "speed": "10",
          "onBlock": "-1",
          "onHit": "6",
          "topMove": "false"
        },
        {
          "Index": 6,
          "notation": "1, 2, 3",
          "hitLevel": "h, h, m",
          "Damage": "7,12,7",
          "speed": "10",
          "onBlock": "-25~-24",
          "onHit": "-14~-13",
          "topMove": "false"
        },
        {
          "Index": 7,
          "notation": "1, 4",
          "hitLevel": "h, l (TC)",
          "Damage": "7,8",
          "speed": "s cs10~",
          "onBlock": "-11",
          "onHit": "1",
          "topMove": "false"
        },
        {
          "Index": 8,
          "notation": "2",
          "hitLevel": "h",
          "Damage": "10(12)",
          "speed": "10",
          "onBlock": "0",
          "onHit": "6",
          "topMove": "false"
        },
        {
          "Index": 9,
          "notation": "2, 3",
          "hitLevel": "h, h",
          "Damage": "12,21",
          "speed": "10",
          "onBlock": "-12~-11",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 10,
          "notation": "2, d+3",
          "hitLevel": "h, l (TC)",
          "Damage": "10,11",
          "speed": "s cs10~",
          "onBlock": "-12",
          "onHit": "-1",
          "topMove": "false"
        },
        {
          "Index": 11,
          "notation": "3",
          "hitLevel": "m",
          "Damage": "14",
          "speed": "15~16",
          "onBlock": "-7~-6",
          "onHit": "+4~+5",
          "topMove": "false"
        },
        {
          "Index": 12,
          "notation": "3, 2",
          "hitLevel": "m, h",
          "Damage": "14,17",
          "speed": "15~16",
          "onBlock": "-3",
          "onHit": "7",
          "topMove": "false"
        },
        {
          "Index": 13,
          "notation": "4",
          "hitLevel": "h",
          "Damage": "17",
          "speed": "12",
          "onBlock": "-7",
          "onHit": "7",
          "topMove": "false"
        },
        {
          "Index": 14,
          "notation": "f+2",
          "hitLevel": "h",
          "Damage": "10",
          "speed": "12",
          "onBlock": "0",
          "onHit": "6",
          "topMove": "false"
        },
        {
          "Index": 15,
          "notation": "f+2, 3",
          "hitLevel": "h, h",
          "Damage": "10,16",
          "speed": "12",
          "onBlock": "-11~-10",
          "onHit": "+5~+6",
          "topMove": "false"
        },
        {
          "Index": 16,
          "notation": "f+2, 3, 1",
          "hitLevel": "h, h, m",
          "Damage": "10,16,22",
          "speed": "12",
          "onBlock": "-12",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 17,
          "notation": "f+1+2",
          "hitLevel": "m",
          "Damage": "22",
          "speed": "20~21",
          "onBlock": "+3~+4s",
          "onHit": "+8~+9s",
          "topMove": "true"
        },
        {
          "Index": 18,
          "notation": "f+1+4",
          "hitLevel": "m",
          "Damage": "21",
          "speed": "21~23",
          "onBlock": "-14~-12",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 19,
          "notation": "d/f+1",
          "hitLevel": "m",
          "Damage": "13",
          "speed": "14",
          "onBlock": "-2",
          "onHit": "4",
          "topMove": "true"
        },
        {
          "Index": 20,
          "notation": "d/f+1, 1",
          "hitLevel": "m, h",
          "Damage": "13,9",
          "speed": "14",
          "onBlock": "-5~-4",
          "onHit": "+5~+6",
          "topMove": "false"
        },
        {
          "Index": 21,
          "notation": "d/f+1, 1, 2",
          "hitLevel": "m, h, m",
          "Damage": "13,9,22",
          "speed": "14",
          "onBlock": "-9~-8",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 22,
          "notation": "d/f+1, b",
          "hitLevel": "m, (Special)",
          "Damage": "13",
          "speed": "14",
          "onBlock": "3",
          "onHit": "9",
          "topMove": "false"
        },
        {
          "Index": 23,
          "notation": "d/f+2",
          "hitLevel": "m",
          "Damage": "13",
          "speed": "15~16",
          "onBlock": "-8~-7",
          "onHit": "Launch (JG?) (+3a)",
          "topMove": "true"
        },
        {
          "Index": 24,
          "notation": "d/f+3",
          "hitLevel": "m",
          "Damage": "14",
          "speed": "16",
          "onBlock": "-9",
          "onHit": "2",
          "topMove": "false"
        },
        {
          "Index": 25,
          "notation": "d/f+3, 4",
          "hitLevel": "m, m",
          "Damage": "14,17",
          "speed": "16",
          "onBlock": "-10~-9",
          "onHit": "+6~+7",
          "topMove": "false"
        },
        {
          "Index": 26,
          "notation": "d/f+3, 4*",
          "hitLevel": "m, m",
          "Damage": "14,25",
          "speed": "16",
          "onBlock": "-6~-5",
          "onHit": "FS (+6~+7)",
          "topMove": "false"
        },
        {
          "Index": 27,
          "notation": "d/f+4",
          "hitLevel": "m",
          "Damage": "21",
          "speed": "19~20",
          "onBlock": "-1~0",
          "onHit": "+9~+10",
          "topMove": "false"
        },
        {
          "Index": 28,
          "notation": "d+1",
          "hitLevel": "m",
          "Damage": "16",
          "speed": "14~15",
          "onBlock": "-9~-8",
          "onHit": "+2~+3",
          "topMove": "false"
        },
        {
          "Index": 29,
          "notation": "d+1, D",
          "hitLevel": "m",
          "Damage": "16",
          "speed": "14~15s",
          "onBlock": "-9~-8",
          "onHit": "+2~+3",
          "topMove": "false"
        },
        {
          "Index": 30,
          "notation": "d+1, 2",
          "hitLevel": "m, m",
          "Damage": "16,26",
          "speed": "14~15",
          "onBlock": "-17",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 31,
          "notation": "d+1, 2 (Hold)",
          "hitLevel": "m, m",
          "Damage": "16,39",
          "speed": "14~15",
          "onBlock": "+20g",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 32,
          "notation": "d+1, 4",
          "hitLevel": "m, l",
          "Damage": "16,15",
          "speed": "14~15",
          "onBlock": "-31",
          "onHit": "-17",
          "topMove": "false"
        },
        {
          "Index": 33,
          "notation": "d+1, 4, 2",
          "hitLevel": "m, l, m",
          "Damage": "16,15,21",
          "speed": "14~15",
          "onBlock": "-14",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 34,
          "notation": "d+4 (Close)",
          "hitLevel": "l",
          "Damage": "13",
          "speed": "15",
          "onBlock": "-31",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 35,
          "notation": "d+4",
          "hitLevel": "l",
          "Damage": "9",
          "speed": "15",
          "onBlock": "-31",
          "onHit": "-17",
          "topMove": "false"
        },
        {
          "Index": 36,
          "notation": "d+4, 2",
          "hitLevel": "l, m",
          "Damage": "9,23",
          "speed": "15",
          "onBlock": "-18",
          "onHit": "-9",
          "topMove": "false"
        },
        {
          "Index": 37,
          "notation": "d+4:2:1+2",
          "hitLevel": "l, m, m",
          "Damage": "9,23,22",
          "speed": "15",
          "onBlock": "-17~-16",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 38,
          "notation": "d+4, 2:1+2",
          "hitLevel": "l, m, m",
          "Damage": "9,23,25",
          "speed": "15",
          "onBlock": "-17~-16",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 39,
          "notation": "d+1+2",
          "hitLevel": "m?",
          "Damage": "30",
          "speed": "12~13",
          "onBlock": "-16~-15",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 40,
          "notation": "d/b+2",
          "hitLevel": "m?",
          "Damage": "21",
          "speed": "19~20",
          "onBlock": "-11~-10",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 41,
          "notation": "b+1",
          "hitLevel": "h",
          "Damage": "12",
          "speed": "12~13",
          "onBlock": "-9~-8",
          "onHit": "+2~+3",
          "topMove": "false"
        },
        {
          "Index": 42,
          "notation": "b+1, 2",
          "hitLevel": "h, h",
          "Damage": "12,21",
          "speed": "12~13",
          "onBlock": "-5~-4",
          "onHit": "+8k~+9k",
          "topMove": "false"
        },
        {
          "Index": 43,
          "notation": "b+2",
          "hitLevel": "m",
          "Damage": "22",
          "speed": "18",
          "onBlock": "-5s",
          "onHit": "+4s",
          "topMove": "false"
        },
        {
          "Index": 44,
          "notation": "b+2, 1",
          "hitLevel": "m, m",
          "Damage": "22,22",
          "speed": "18",
          "onBlock": "-12",
          "onHit": "0s",
          "topMove": "false"
        },
        {
          "Index": 45,
          "notation": "b+2, 1*",
          "hitLevel": "m, m",
          "Damage": "22,35",
          "speed": "18",
          "onBlock": "+8~+9s",
          "onHit": "+8~+9s",
          "topMove": "true"
        },
        {
          "Index": 46,
          "notation": "b+3",
          "hitLevel": "h",
          "Damage": "16",
          "speed": "14~15",
          "onBlock": "-6~-5",
          "onHit": "CS",
          "topMove": "true"
        },
        {
          "Index": 47,
          "notation": "b+4",
          "hitLevel": "l",
          "Damage": "14",
          "speed": "20~21",
          "onBlock": "-13~-12",
          "onHit": "+3~+4",
          "topMove": "false"
        },
        {
          "Index": 48,
          "notation": "b+1+2",
          "hitLevel": "h",
          "Damage": "28",
          "speed": "24 pc8~23",
          "onBlock": "0",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 49,
          "notation": "u/b+2",
          "hitLevel": "m",
          "Damage": "22",
          "speed": "20~21",
          "onBlock": "-9~-8",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 50,
          "notation": "u/f+2",
          "hitLevel": "m (TJ)",
          "Damage": "35",
          "speed": "34a js8",
          "onBlock": "9",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 51,
          "notation": "u/b+3",
          "hitLevel": "m (TJ)",
          "Damage": "12",
          "speed": "15~16 js10~",
          "onBlock": "-16~-15",
          "onHit": "Launch (JG?)",
          "topMove": "false"
        },
        {
          "Index": 52,
          "notation": "u+3",
          "hitLevel": "m (TJ)",
          "Damage": "13",
          "speed": "15~16 js9~",
          "onBlock": "-16~-15",
          "onHit": "Launch (JG?)",
          "topMove": "false"
        },
        {
          "Index": 53,
          "notation": "u/f+3",
          "hitLevel": "m (TJ)",
          "Damage": "14",
          "speed": "15~16 js9~",
          "onBlock": "-16~-15",
          "onHit": "Launch (JG?)",
          "topMove": "false"
        },
        {
          "Index": 54,
          "notation": "u/b or u or u/f+3, 4",
          "hitLevel": "m (TJ), m (TJ)",
          "Damage": "14,20",
          "speed": "js1~",
          "onBlock": "-13~-12",
          "onHit": "Launch (JG?)",
          "topMove": "false"
        },
        {
          "Index": 55,
          "notation": "u/f+4",
          "hitLevel": "m (TJ)",
          "Damage": "13",
          "speed": "15~17 js9~",
          "onBlock": "-13~-11",
          "onHit": "Launch (JG?)",
          "topMove": "false"
        },
        {
          "Index": 56,
          "notation": "f, F+2",
          "hitLevel": "m",
          "Damage": "14",
          "speed": "15~17 (16~)",
          "onBlock": "-17~-15",
          "onHit": "-7~-5",
          "topMove": "true"
        },
        {
          "Index": 57,
          "notation": "f, F+2, 1",
          "hitLevel": "m, m",
          "Damage": "14,20",
          "speed": "15~17 (16~)",
          "onBlock": "-12",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 58,
          "notation": "f, F+2, 1, B (Cancel)",
          "hitLevel": "m, (Special)",
          "Damage": "14",
          "speed": "15~17 (16~)",
          "onBlock": "-21~-19",
          "onHit": "-11~-9",
          "topMove": "false"
        },
        {
          "Index": 59,
          "notation": "f, F+2, 2",
          "hitLevel": "m, l (TC)",
          "Damage": "14,21",
          "speed": "cs15~",
          "onBlock": "-19~-17",
          "onHit": "Launch",
          "topMove": "false"
        },
        {
          "Index": 60,
          "notation": "f, F+2, 2, B (Cancel)",
          "hitLevel": "m, (Special) (TC)",
          "Damage": "14",
          "speed": "15~s",
          "onBlock": "-28~-26",
          "onHit": "-18~-16",
          "topMove": "false"
        },
        {
          "Index": 61,
          "notation": "f, F+2:1",
          "hitLevel": "m, h",
          "Damage": "14,24",
          "speed": "15~",
          "onBlock": "-4",
          "onHit": "KMeD",
          "topMove": "false"
        },
        {
          "Index": 62,
          "notation": "f, F+3",
          "hitLevel": "m (TJ)",
          "Damage": "14",
          "speed": "15~16a (16~) js9~",
          "onBlock": "-17~-16",
          "onHit": "Launch (JG?)",
          "topMove": "false"
        },
        {
          "Index": 63,
          "notation": "f, F+3, 4",
          "hitLevel": "m (TJ), m (TJ)",
          "Damage": "14,15",
          "speed": "js1~",
          "onBlock": "-16~-15",
          "onHit": "Launch (JG?)",
          "topMove": "false"
        },
        {
          "Index": 64,
          "notation": "f, F+3, 4, 4",
          "hitLevel": "m (TJ), m (TJ), h",
          "Damage": "14,15,25",
          "speed": "1~",
          "onBlock": "-5~-3",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 65,
          "notation": "f, F+3, 4, f or d/f+4",
          "hitLevel": "m (TJ), m (TJ), m",
          "Damage": "14,15,18",
          "speed": "1~",
          "onBlock": "-14~-12",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 66,
          "notation": "f, F+3, 4, d or d/b+4",
          "hitLevel": "m (TJ), m (TJ), l (TC)",
          "Damage": "14,15,15",
          "speed": "s cs20~",
          "onBlock": "-17~-16",
          "onHit": "-6~-5",
          "topMove": "false"
        },
        {
          "Index": 67,
          "notation": "f, F+4",
          "hitLevel": "m (TJ)",
          "Damage": "20",
          "speed": "23~34as (27~) js13~",
          "onBlock": "-5~+6",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 68,
          "notation": "b, f+1",
          "hitLevel": "h",
          "Damage": "22",
          "speed": "28~31 (28~)",
          "onBlock": "-6~-3",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 69,
          "notation": "b, B+1+2",
          "hitLevel": "!",
          "Damage": "80",
          "speed": "63~64 (64~)",
          "onBlock": "KND",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 70,
          "notation": "WS+2",
          "hitLevel": "m",
          "Damage": "20",
          "speed": "15~16",
          "onBlock": "-14~-13",
          "onHit": "Launch",
          "topMove": "false"
        },
        {
          "Index": 71,
          "notation": "WS+3",
          "hitLevel": "m",
          "Damage": "16",
          "speed": "13~14",
          "onBlock": "-8~-7",
          "onHit": "+3~+4",
          "topMove": "false"
        },
        {
          "Index": 72,
          "notation": "WS+3, 2",
          "hitLevel": "m, h",
          "Damage": "16,21",
          "speed": "13~14",
          "onBlock": "-9~-8",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 73,
          "notation": "WS+4",
          "hitLevel": "m",
          "Damage": "18",
          "speed": "11~12",
          "onBlock": "-6~-5",
          "onHit": "+5~+6",
          "topMove": "false"
        },
        {
          "Index": 74,
          "notation": "FC+d/f+2",
          "hitLevel": "m",
          "Damage": "14",
          "speed": "14~16",
          "onBlock": "-17~-16",
          "onHit": "-7~-6",
          "topMove": "false"
        },
        {
          "Index": 75,
          "notation": "FC+d/f+1+2",
          "hitLevel": "l (TC)",
          "Damage": "20",
          "speed": "32~33s cs1~",
          "onBlock": "-12~-11",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 77,
          "notation": "D(Hundred and sixty frames)n, u+3+4 (On the way up)",
          "hitLevel": "m (TJ), m",
          "Damage": "48",
          "speed": "13~18d js9~",
          "onBlock": "-49~-44",
          "onHit": "Launch",
          "topMove": "false"
        },
        {
          "Index": 78,
          "notation": "D(Hundred and sixty frames)n, u+3+4 (On the way down)",
          "hitLevel": "m (TJ), m",
          "Damage": "48",
          "speed": "46~56d js1~",
          "onBlock": "-21~-11",
          "onHit": "-10~0s",
          "topMove": "false"
        },
        {
          "Index": 79,
          "notation": "SS+1",
          "hitLevel": "h",
          "Damage": "23",
          "speed": "20(30~)",
          "onBlock": "8",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 80,
          "notation": "SS+3",
          "hitLevel": "l",
          "Damage": "18",
          "speed": "19(29~)",
          "onBlock": "-12",
          "onHit": "4",
          "topMove": "true"
        },
        {
          "Index": 81,
          "notation": "Opponent Down, d+2",
          "hitLevel": "l(On grounded opponent)",
          "Damage": "16",
          "speed": "18",
          "onBlock": "-12",
          "onHit": "4",
          "topMove": "false"
        },
        {
          "Index": 82,
          "notation": "qcf",
          "hitLevel": "(Special)",
          "Damage": "",
          "speed": "18",
          "onBlock": "",
          "onHit": "",
          "topMove": "false"
        },
        {
          "Index": 83,
          "notation": "qcf+1",
          "hitLevel": "h",
          "Damage": "21",
          "speed": "16~17 (18~)",
          "onBlock": "-4~-3",
          "onHit": "YKU",
          "topMove": "false"
        },
        {
          "Index": 84,
          "notation": "qcf+2 (Close)",
          "hitLevel": "m",
          "Damage": "54",
          "speed": "13~14 (15~)",
          "onBlock": "-17~-16",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 85,
          "notation": "qcf+2",
          "hitLevel": "m",
          "Damage": "36",
          "speed": "13~14 (15~)",
          "onBlock": "-17~-16",
          "onHit": "KND",
          "topMove": "false"
        },
        {
          "Index": 86,
          "notation": "qcf+3",
          "hitLevel": "l (TC)",
          "Damage": "17",
          "speed": "18~19 (20~) cs6~",
          "onBlock": "-14~-13",
          "onHit": "0~+1",
          "topMove": "false"
        },
        {
          "Index": 87,
          "notation": "qcf+3+4",
          "hitLevel": "m (TJ)",
          "Damage": "40",
          "speed": "19~20a (21~) js18~",
          "onBlock": "-9~-8",
          "onHit": "Launch",
          "topMove": "false"
        },
        {
          "Index": 88,
          "notation": "qcf, or d, d/f, n",
          "hitLevel": "",
          "Damage": "",
          "speed": "19~20 (21~) 18~",
          "onBlock": "",
          "onHit": "",
          "topMove": "false"
        },
        {
          "Index": 89,
          "notation": "qcb",
          "hitLevel": "(Special)",
          "Damage": "",
          "speed": "19~20 (21~) 18~",
          "onBlock": "",
          "onHit": "",
          "topMove": "false"
        },
        {
          "Index": 90,
          "notation": "qcb+1",
          "hitLevel": "m",
          "Damage": "24",
          "speed": "21~22 (23~)",
          "onBlock": "0~+1s",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 91,
          "notation": "qcb+2",
          "hitLevel": "m",
          "Damage": "21(31)",
          "speed": "15(17~)",
          "onBlock": "-8",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 92,
          "notation": "qcb+3",
          "hitLevel": "l (TC)",
          "Damage": "14",
          "speed": "18~19s (20~) cs1~",
          "onBlock": "-21~-20",
          "onHit": "-9~-8",
          "topMove": "false"
        },
        {
          "Index": 93,
          "notation": "qcb+3, 2",
          "hitLevel": "l, m",
          "Damage": "14,20",
          "speed": "18~19 (20~) 1~",
          "onBlock": "-10~-9",
          "onHit": "+6~+7",
          "topMove": "false"
        },
        {
          "Index": 94,
          "notation": "qcb+3, 2, 1",
          "hitLevel": "l, m, h",
          "Damage": "14,20,25",
          "speed": "18~19 (20~) 1~",
          "onBlock": "-10~-9",
          "onHit": "KMeD",
          "topMove": "false"
        },
        {
          "Index": 95,
          "notation": "qcb+3, 2, 3",
          "hitLevel": "l, m, l",
          "Damage": "14,20,14",
          "speed": "18~19 (20~) 1~",
          "onBlock": "-13~-12",
          "onHit": "0~+1",
          "topMove": "false"
        },
        {
          "Index": 96,
          "notation": "qcb+4",
          "hitLevel": "h",
          "Damage": "28",
          "speed": "15~16 (17~)",
          "onBlock": "+1~+2",
          "onHit": "KND",
          "topMove": "true"
        },
        {
          "Index": 97,
          "notation": "qcb+1+2",
          "hitLevel": "m?",
          "Damage": "22",
          "speed": "18~19 (20~)",
          "onBlock": "-14~-13",
          "onHit": "Launch",
          "topMove": "false"
        }
       ]
}

const chars = [Kazuya, paul];

export default chars;