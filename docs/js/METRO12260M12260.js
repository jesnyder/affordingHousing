var METRO12260M12260 = {
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
                563,
                617,
                691,
                689,
                636,
                685
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                618,
                636,
                697,
                722,
                708,
                789
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                745,
                771,
                836,
                848,
                815,
                906
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1013,
                1053,
                1142,
                1156,
                1108,
                1228
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1313,
                1358,
                1468,
                1489,
                1411,
                1532
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12260M12260_plot"),{
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
                    563,
                    617,
                    691,
                    689,
                    636,
                    685
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    618,
                    636,
                    697,
                    722,
                    708,
                    789
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    745,
                    771,
                    836,
                    848,
                    815,
                    906
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1013,
                    1053,
                    1142,
                    1156,
                    1108,
                    1228
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1313,
                    1358,
                    1468,
                    1489,
                    1411,
                    1532
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12260M12260: Augusta-Richmond County, GA-SC HUD Metro FMR Area"
        }
    }
});