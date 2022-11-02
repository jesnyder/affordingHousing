var METRO14500M14500 = {
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
                905,
                1084,
                1130,
                1273,
                1279,
                1284
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                1021,
                1195,
                1242,
                1412,
                1428,
                1449
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1240,
                1461,
                1516,
                1717,
                1724,
                1748
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1763,
                2056,
                2126,
                2381,
                2360,
                2352
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                2065,
                2350,
                2384,
                2686,
                2721,
                2786
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14500M14500_plot"),{
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
                    905,
                    1084,
                    1130,
                    1273,
                    1279,
                    1284
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    1021,
                    1195,
                    1242,
                    1412,
                    1428,
                    1449
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1240,
                    1461,
                    1516,
                    1717,
                    1724,
                    1748
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1763,
                    2056,
                    2126,
                    2381,
                    2360,
                    2352
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    2065,
                    2350,
                    2384,
                    2686,
                    2721,
                    2786
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14500M14500: Boulder, CO MSA"
        }
    }
});