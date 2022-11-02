var METRO17020M17020 = {
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
                656,
                712,
                808,
                761,
                825,
                826
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                729,
                785,
                894,
                842,
                904,
                895
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                923,
                992,
                1144,
                1090,
                1192,
                1177
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1344,
                1443,
                1654,
                1567,
                1692,
                1662
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1614,
                1689,
                1921,
                1881,
                2064,
                2015
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17020M17020_plot"),{
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
                    656,
                    712,
                    808,
                    761,
                    825,
                    826
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    729,
                    785,
                    894,
                    842,
                    904,
                    895
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    923,
                    992,
                    1144,
                    1090,
                    1192,
                    1177
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1344,
                    1443,
                    1654,
                    1567,
                    1692,
                    1662
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1614,
                    1689,
                    1921,
                    1881,
                    2064,
                    2015
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17020M17020: Chico, CA MSA"
        }
    }
});