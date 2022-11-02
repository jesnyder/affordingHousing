var METRO10900M10900 = {
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
                659,
                668,
                737,
                694,
                788,
                834
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                815,
                824,
                887,
                804,
                891,
                939
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1038,
                1048,
                1129,
                1026,
                1139,
                1196
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1332,
                1352,
                1464,
                1327,
                1474,
                1542
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1431,
                1427,
                1526,
                1390,
                1545,
                1622
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10900M10900_plot"),{
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
                    659,
                    668,
                    737,
                    694,
                    788,
                    834
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    815,
                    824,
                    887,
                    804,
                    891,
                    939
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1038,
                    1048,
                    1129,
                    1026,
                    1139,
                    1196
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1332,
                    1352,
                    1464,
                    1327,
                    1474,
                    1542
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1431,
                    1427,
                    1526,
                    1390,
                    1545,
                    1622
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10900M10900: Allentown-Bethlehem-Easton, PA HUD Metro FMR Area"
        }
    }
});