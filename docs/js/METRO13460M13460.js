var METRO13460M13460 = {
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
                668,
                710,
                742,
                838,
                850,
                866
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                733,
                806,
                884,
                986,
                1042,
                1048
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                857,
                965,
                1071,
                1197,
                1268,
                1303
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1231,
                1385,
                1540,
                1727,
                1815,
                1851
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1510,
                1700,
                1881,
                2102,
                2195,
                2230
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13460M13460_plot"),{
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
                    668,
                    710,
                    742,
                    838,
                    850,
                    866
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    733,
                    806,
                    884,
                    986,
                    1042,
                    1048
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    857,
                    965,
                    1071,
                    1197,
                    1268,
                    1303
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1231,
                    1385,
                    1540,
                    1727,
                    1815,
                    1851
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1510,
                    1700,
                    1881,
                    2102,
                    2195,
                    2230
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13460M13460: Bend-Redmond, OR MSA"
        }
    }
});