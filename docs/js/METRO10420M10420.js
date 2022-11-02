var METRO10420M10420 = {
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
                516,
                537,
                527,
                557,
                566,
                610
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                594,
                629,
                623,
                659,
                664,
                702
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                790,
                826,
                810,
                847,
                849,
                890
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1016,
                1048,
                1019,
                1065,
                1069,
                1126
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1089,
                1125,
                1095,
                1147,
                1151,
                1207
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10420M10420_plot"),{
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
                    516,
                    537,
                    527,
                    557,
                    566,
                    610
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    594,
                    629,
                    623,
                    659,
                    664,
                    702
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    790,
                    826,
                    810,
                    847,
                    849,
                    890
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1016,
                    1048,
                    1019,
                    1065,
                    1069,
                    1126
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1089,
                    1125,
                    1095,
                    1147,
                    1151,
                    1207
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10420M10420: Akron, OH MSA"
        }
    }
});