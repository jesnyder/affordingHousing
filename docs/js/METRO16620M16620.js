var METRO16620M16620 = {
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
                473,
                503,
                527,
                542,
                534,
                577
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                614,
                650,
                671,
                684,
                664,
                690
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                746,
                789,
                821,
                832,
                805,
                833
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                933,
                989,
                1029,
                1038,
                1022,
                1083
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1028,
                1083,
                1184,
                1188,
                1137,
                1167
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16620M16620_plot"),{
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
                    473,
                    503,
                    527,
                    542,
                    534,
                    577
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    614,
                    650,
                    671,
                    684,
                    664,
                    690
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    746,
                    789,
                    821,
                    832,
                    805,
                    833
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    933,
                    989,
                    1029,
                    1038,
                    1022,
                    1083
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1028,
                    1083,
                    1184,
                    1188,
                    1137,
                    1167
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16620M16620: Charleston, WV HUD Metro FMR Area"
        }
    }
});