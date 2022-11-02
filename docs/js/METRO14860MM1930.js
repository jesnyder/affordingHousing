var METRO14860MM1930 = {
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
                888,
                1026,
                1017,
                1140,
                1138,
                1203
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                1103,
                1280,
                1253,
                1360,
                1350,
                1412
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1377,
                1609,
                1583,
                1749,
                1725,
                1810
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1723,
                2017,
                1983,
                2187,
                2171,
                2291
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                2161,
                2512,
                2498,
                2680,
                2557,
                2487
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14860MM1930_plot"),{
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
                    888,
                    1026,
                    1017,
                    1140,
                    1138,
                    1203
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    1103,
                    1280,
                    1253,
                    1360,
                    1350,
                    1412
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1377,
                    1609,
                    1583,
                    1749,
                    1725,
                    1810
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1723,
                    2017,
                    1983,
                    2187,
                    2171,
                    2291
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    2161,
                    2512,
                    2498,
                    2680,
                    2557,
                    2487
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14860MM1930: Danbury, CT HUD Metro FMR Area"
        }
    }
});