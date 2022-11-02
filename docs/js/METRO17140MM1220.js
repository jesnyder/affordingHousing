var METRO17140MM1220 = {
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
                445,
                461,
                485,
                471,
                487,
                527
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                512,
                526,
                553,
                541,
                560,
                603
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                681,
                700,
                731,
                713,
                738,
                793
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                991,
                1018,
                1030,
                933,
                927,
                980
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1039,
                1065,
                1062,
                966,
                1001,
                1075
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17140MM1220_plot"),{
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
                    445,
                    461,
                    485,
                    471,
                    487,
                    527
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    512,
                    526,
                    553,
                    541,
                    560,
                    603
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    681,
                    700,
                    731,
                    713,
                    738,
                    793
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    991,
                    1018,
                    1030,
                    933,
                    927,
                    980
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1039,
                    1065,
                    1062,
                    966,
                    1001,
                    1075
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17140MM1220: Brown County, OH HUD Metro FMR Area"
        }
    }
});