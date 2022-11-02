var METRO13380M13380 = {
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
                659,
                707,
                747,
                846,
                907,
                926
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                747,
                790,
                811,
                905,
                972,
                996
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                968,
                1028,
                1058,
                1175,
                1245,
                1254
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1409,
                1495,
                1530,
                1695,
                1782,
                1781
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1706,
                1811,
                1858,
                2063,
                2156,
                2146
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13380M13380_plot"),{
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
                    659,
                    707,
                    747,
                    846,
                    907,
                    926
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    747,
                    790,
                    811,
                    905,
                    972,
                    996
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    968,
                    1028,
                    1058,
                    1175,
                    1245,
                    1254
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1409,
                    1495,
                    1530,
                    1695,
                    1782,
                    1781
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1706,
                    1811,
                    1858,
                    2063,
                    2156,
                    2146
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13380M13380: Bellingham, WA MSA"
        }
    }
});