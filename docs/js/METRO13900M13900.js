var METRO13900M13900 = {
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
                636,
                657,
                659,
                694,
                715,
                733
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                649,
                662,
                663,
                698,
                719,
                737
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                859,
                869,
                863,
                892,
                884,
                880
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1196,
                1200,
                1177,
                1242,
                1265,
                1250
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1514,
                1531,
                1474,
                1475,
                1444,
                1442
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13900M13900_plot"),{
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
                    636,
                    657,
                    659,
                    694,
                    715,
                    733
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    649,
                    662,
                    663,
                    698,
                    719,
                    737
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    859,
                    869,
                    863,
                    892,
                    884,
                    880
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1196,
                    1200,
                    1177,
                    1242,
                    1265,
                    1250
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1514,
                    1531,
                    1474,
                    1475,
                    1444,
                    1442
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13900M13900: Bismarck, ND MSA"
        }
    }
});