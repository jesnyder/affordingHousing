var METRO14460MM1200 = {
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
                826,
                980,
                1027,
                1064,
                1029,
                1145
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                904,
                1064,
                1136,
                1160,
                1184,
                1309
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1158,
                1365,
                1475,
                1528,
                1560,
                1723
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1497,
                1726,
                1853,
                1918,
                1971,
                2181
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1600,
                1947,
                2155,
                2240,
                2292,
                2505
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14460MM1200_plot"),{
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
                    826,
                    980,
                    1027,
                    1064,
                    1029,
                    1145
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    904,
                    1064,
                    1136,
                    1160,
                    1184,
                    1309
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1158,
                    1365,
                    1475,
                    1528,
                    1560,
                    1723
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1497,
                    1726,
                    1853,
                    1918,
                    1971,
                    2181
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1600,
                    1947,
                    2155,
                    2240,
                    2292,
                    2505
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14460MM1200: Brockton, MA HUD Metro FMR Area"
        }
    }
});