var METRO17140M17140 = {
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
                527,
                556,
                584,
                568,
                604,
                643
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                613,
                643,
                670,
                658,
                698,
                742
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                806,
                845,
                884,
                865,
                916,
                968
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1125,
                1178,
                1223,
                1185,
                1244,
                1302
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1316,
                1370,
                1414,
                1362,
                1425,
                1483
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17140M17140_plot"),{
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
                    527,
                    556,
                    584,
                    568,
                    604,
                    643
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    613,
                    643,
                    670,
                    658,
                    698,
                    742
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    806,
                    845,
                    884,
                    865,
                    916,
                    968
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1125,
                    1178,
                    1223,
                    1185,
                    1244,
                    1302
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1316,
                    1370,
                    1414,
                    1362,
                    1425,
                    1483
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17140M17140: Cincinnati, OH-KY-IN  HUD Metro FMR Area"
        }
    }
});