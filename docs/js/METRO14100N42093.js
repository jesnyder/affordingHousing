var METRO14100N42093 = {
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
                691,
                644,
                689,
                662,
                686,
                697
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                747,
                683,
                694,
                666,
                690,
                736
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                980,
                885,
                904,
                820,
                848,
                864
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1226,
                1110,
                1133,
                1047,
                1146,
                1167
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1351,
                1216,
                1222,
                1111,
                1150,
                1172
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14100N42093_plot"),{
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
                    691,
                    644,
                    689,
                    662,
                    686,
                    697
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    747,
                    683,
                    694,
                    666,
                    690,
                    736
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    980,
                    885,
                    904,
                    820,
                    848,
                    864
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1226,
                    1110,
                    1133,
                    1047,
                    1146,
                    1167
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1351,
                    1216,
                    1222,
                    1111,
                    1150,
                    1172
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14100N42093: Montour County, PA HUD Metro FMR Area"
        }
    }
});