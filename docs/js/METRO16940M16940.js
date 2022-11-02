var METRO16940M16940 = {
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
                607,
                659,
                642,
                717,
                692,
                670
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                636,
                664,
                646,
                721,
                696,
                699
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                845,
                883,
                855,
                950,
                887,
                890
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1182,
                1231,
                1185,
                1367,
                1269,
                1264
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1377,
                1526,
                1502,
                1668,
                1536,
                1523
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16940M16940_plot"),{
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
                    607,
                    659,
                    642,
                    717,
                    692,
                    670
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    636,
                    664,
                    646,
                    721,
                    696,
                    699
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    845,
                    883,
                    855,
                    950,
                    887,
                    890
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1182,
                    1231,
                    1185,
                    1367,
                    1269,
                    1264
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1377,
                    1526,
                    1502,
                    1668,
                    1536,
                    1523
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16940M16940: Cheyenne, WY MSA"
        }
    }
});