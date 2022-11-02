var METRO13820N01021 = {
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
                484,
                506,
                517,
                594,
                595,
                583
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                538,
                551,
                549,
                627,
                625,
                619
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                621,
                633,
                628,
                714,
                713,
                705
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                904,
                921,
                908,
                1030,
                1020,
                978
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1094,
                1115,
                1103,
                1122,
                1061,
                982
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13820N01021_plot"),{
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
                    484,
                    506,
                    517,
                    594,
                    595,
                    583
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    538,
                    551,
                    549,
                    627,
                    625,
                    619
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    621,
                    633,
                    628,
                    714,
                    713,
                    705
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    904,
                    921,
                    908,
                    1030,
                    1020,
                    978
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1094,
                    1115,
                    1103,
                    1122,
                    1061,
                    982
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13820N01021: Chilton County, AL HUD Metro FMR Area"
        }
    }
});