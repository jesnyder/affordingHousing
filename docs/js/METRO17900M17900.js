var METRO17900M17900 = {
    "labels": [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
    ],
    "datasets": [
        {
            "data": [
                592,
                605,
                671,
                706,
                782,
                834
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                759,
                776,
                838,
                818,
                845,
                869
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                876,
                891,
                959,
                931,
                963,
                990
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1159,
                1173,
                1255,
                1204,
                1236,
                1268
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1436,
                1456,
                1571,
                1491,
                1527,
                1531
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17900M17900_plot"),{
    "type": "line",
    "data": {
        "labels": [
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
        ],
        "datasets": [
            {
                "data": [
                    592,
                    605,
                    671,
                    706,
                    782,
                    834
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    759,
                    776,
                    838,
                    818,
                    845,
                    869
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    876,
                    891,
                    959,
                    931,
                    963,
                    990
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1159,
                    1173,
                    1255,
                    1204,
                    1236,
                    1268
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1436,
                    1456,
                    1571,
                    1491,
                    1527,
                    1531
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17900M17900: Columbia, SC HUD Metro FMR Area"
        }
    }
});