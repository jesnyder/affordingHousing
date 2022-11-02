var METRO16860M16860 = {
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
                562,
                542,
                585,
                599,
                636,
                721
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                661,
                656,
                694,
                686,
                694,
                742
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                822,
                806,
                847,
                832,
                838,
                883
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1084,
                1053,
                1099,
                1081,
                1092,
                1148
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1343,
                1302,
                1344,
                1305,
                1306,
                1380
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16860M16860_plot"),{
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
                    562,
                    542,
                    585,
                    599,
                    636,
                    721
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    661,
                    656,
                    694,
                    686,
                    694,
                    742
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    822,
                    806,
                    847,
                    832,
                    838,
                    883
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1084,
                    1053,
                    1099,
                    1081,
                    1092,
                    1148
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1343,
                    1302,
                    1344,
                    1305,
                    1306,
                    1380
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16860M16860: Chattanooga, TN-GA MSA"
        }
    }
});