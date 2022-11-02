var METRO16300N19105 = {
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
                412,
                417,
                427,
                448,
                472,
                491
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                488,
                491,
                503,
                522,
                543,
                562
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                649,
                653,
                665,
                687,
                715,
                739
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                857,
                852,
                905,
                944,
                966,
                998
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1015,
                1005,
                1017,
                991,
                970,
                1002
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16300N19105_plot"),{
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
                    412,
                    417,
                    427,
                    448,
                    472,
                    491
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    488,
                    491,
                    503,
                    522,
                    543,
                    562
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    649,
                    653,
                    665,
                    687,
                    715,
                    739
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    857,
                    852,
                    905,
                    944,
                    966,
                    998
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1015,
                    1005,
                    1017,
                    991,
                    970,
                    1002
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16300N19105: Jones County, IA HUD Metro FMR Area"
        }
    }
});