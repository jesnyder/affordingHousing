var METRO16300N19011 = {
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
                491,
                513,
                522,
                470,
                472,
                558
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                515,
                517,
                526,
                535,
                545,
                562
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                646,
                650,
                683,
                687,
                715,
                739
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                878,
                840,
                871,
                882,
                935,
                1001
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                936,
                902,
                966,
                1018,
                1072,
                1099
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16300N19011_plot"),{
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
                    491,
                    513,
                    522,
                    470,
                    472,
                    558
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    515,
                    517,
                    526,
                    535,
                    545,
                    562
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    646,
                    650,
                    683,
                    687,
                    715,
                    739
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    878,
                    840,
                    871,
                    882,
                    935,
                    1001
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    936,
                    902,
                    966,
                    1018,
                    1072,
                    1099
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16300N19011: Benton County, IA HUD Metro FMR Area"
        }
    }
});