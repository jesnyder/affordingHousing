var METRO13020M13020 = {
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
                461,
                481,
                495,
                478,
                512,
                522
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                546,
                567,
                583,
                557,
                589,
                611
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                726,
                754,
                771,
                734,
                776,
                786
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                955,
                987,
                1022,
                972,
                1020,
                1031
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1001,
                1045,
                1073,
                994,
                1064,
                1118
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13020M13020_plot"),{
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
                    461,
                    481,
                    495,
                    478,
                    512,
                    522
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    546,
                    567,
                    583,
                    557,
                    589,
                    611
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    726,
                    754,
                    771,
                    734,
                    776,
                    786
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    955,
                    987,
                    1022,
                    972,
                    1020,
                    1031
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1001,
                    1045,
                    1073,
                    994,
                    1064,
                    1118
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13020M13020: Bay City, MI MSA"
        }
    }
});