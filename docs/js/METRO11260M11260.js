var METRO11260M11260 = {
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
                923,
                931,
                935,
                877,
                877
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                1018,
                1035,
                1005,
                991,
                926,
                948
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1293,
                1337,
                1313,
                1305,
                1220,
                1248
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1882,
                1945,
                1898,
                1883,
                1746,
                1773
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                2278,
                2355,
                2306,
                2291,
                2112,
                2136
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO11260M11260_plot"),{
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
                    923,
                    931,
                    935,
                    877,
                    877
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    1018,
                    1035,
                    1005,
                    991,
                    926,
                    948
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1293,
                    1337,
                    1313,
                    1305,
                    1220,
                    1248
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1882,
                    1945,
                    1898,
                    1883,
                    1746,
                    1773
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    2278,
                    2355,
                    2306,
                    2291,
                    2112,
                    2136
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO11260M11260: Anchorage, AK HUD Metro FMR Area"
        }
    }
});