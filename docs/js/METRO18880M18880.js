var METRO18880M18880 = {
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
                754,
                849,
                847,
                941,
                977,
                981
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                810,
                858,
                852,
                947,
                983,
                987
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                961,
                1003,
                995,
                1116,
                1168,
                1172
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1382,
                1431,
                1397,
                1528,
                1559,
                1542
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1680,
                1767,
                1748,
                1959,
                2022,
                1997
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO18880M18880_plot"),{
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
                    754,
                    849,
                    847,
                    941,
                    977,
                    981
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    810,
                    858,
                    852,
                    947,
                    983,
                    987
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    961,
                    1003,
                    995,
                    1116,
                    1168,
                    1172
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1382,
                    1431,
                    1397,
                    1528,
                    1559,
                    1542
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1680,
                    1767,
                    1748,
                    1959,
                    2022,
                    1997
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO18880M18880: Crestview-Fort Walton Beach-Destin, FL HUD Metro FMR Area"
        }
    }
});