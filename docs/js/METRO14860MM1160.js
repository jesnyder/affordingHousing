var METRO14860MM1160 = {
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
                834,
                846,
                858,
                878,
                954,
                911
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                990,
                1010,
                1032,
                1077,
                1156,
                1101
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1243,
                1272,
                1293,
                1346,
                1446,
                1371
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1572,
                1595,
                1631,
                1706,
                1842,
                1765
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1878,
                1969,
                2028,
                2114,
                2217,
                2094
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14860MM1160_plot"),{
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
                    834,
                    846,
                    858,
                    878,
                    954,
                    911
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    990,
                    1010,
                    1032,
                    1077,
                    1156,
                    1101
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1243,
                    1272,
                    1293,
                    1346,
                    1446,
                    1371
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1572,
                    1595,
                    1631,
                    1706,
                    1842,
                    1765
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1878,
                    1969,
                    2028,
                    2114,
                    2217,
                    2094
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14860MM1160: Bridgeport, CT HUD Metro FMR Area"
        }
    }
});