var METRO11180M11180 = {
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
                526,
                607,
                669,
                684,
                749,
                787
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                663,
                735,
                760,
                706,
                752,
                798
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                805,
                887,
                917,
                857,
                903,
                943
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1106,
                1209,
                1248,
                1191,
                1282,
                1340
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1329,
                1495,
                1528,
                1417,
                1481,
                1581
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO11180M11180_plot"),{
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
                    526,
                    607,
                    669,
                    684,
                    749,
                    787
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    663,
                    735,
                    760,
                    706,
                    752,
                    798
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    805,
                    887,
                    917,
                    857,
                    903,
                    943
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1106,
                    1209,
                    1248,
                    1191,
                    1282,
                    1340
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1329,
                    1495,
                    1528,
                    1417,
                    1481,
                    1581
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO11180M11180: Ames, IA HUD Metro FMR Area"
        }
    }
});