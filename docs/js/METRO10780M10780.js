var METRO10780M10780 = {
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
                595,
                536,
                499,
                517,
                540,
                543
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                634,
                600,
                623,
                640,
                650,
                637
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                800,
                750,
                777,
                794,
                819,
                818
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1065,
                991,
                1020,
                1044,
                1085,
                1097
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1251,
                1161,
                1189,
                1184,
                1198,
                1195
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10780M10780_plot"),{
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
                    595,
                    536,
                    499,
                    517,
                    540,
                    543
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    634,
                    600,
                    623,
                    640,
                    650,
                    637
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    800,
                    750,
                    777,
                    794,
                    819,
                    818
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1065,
                    991,
                    1020,
                    1044,
                    1085,
                    1097
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1251,
                    1161,
                    1189,
                    1184,
                    1198,
                    1195
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10780M10780: Alexandria, LA MSA"
        }
    }
});