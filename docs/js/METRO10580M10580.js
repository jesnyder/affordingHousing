var METRO10580M10580 = {
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
                690,
                700,
                768,
                747,
                809,
                890
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                817,
                837,
                904,
                855,
                912,
                991
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1006,
                1032,
                1115,
                1054,
                1117,
                1207
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1259,
                1294,
                1397,
                1313,
                1389,
                1492
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1387,
                1406,
                1507,
                1428,
                1515,
                1637
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10580M10580_plot"),{
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
                    690,
                    700,
                    768,
                    747,
                    809,
                    890
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    817,
                    837,
                    904,
                    855,
                    912,
                    991
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1006,
                    1032,
                    1115,
                    1054,
                    1117,
                    1207
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1259,
                    1294,
                    1397,
                    1313,
                    1389,
                    1492
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1387,
                    1406,
                    1507,
                    1428,
                    1515,
                    1637
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10580M10580: Albany-Schenectady-Troy, NY MSA"
        }
    }
});