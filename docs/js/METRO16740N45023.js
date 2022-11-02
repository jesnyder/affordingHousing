var METRO16740N45023 = {
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
                512,
                512,
                526,
                521,
                553,
                569
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                515,
                515,
                529,
                525,
                556,
                572
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                674,
                680,
                700,
                691,
                720,
                712
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                898,
                904,
                941,
                911,
                941,
                966
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1029,
                1028,
                1072,
                1044,
                1109,
                1105
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16740N45023_plot"),{
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
                    512,
                    512,
                    526,
                    521,
                    553,
                    569
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    515,
                    515,
                    529,
                    525,
                    556,
                    572
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    674,
                    680,
                    700,
                    691,
                    720,
                    712
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    898,
                    904,
                    941,
                    911,
                    941,
                    966
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1029,
                    1028,
                    1072,
                    1044,
                    1109,
                    1105
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16740N45023: Chester County, SC HUD Metro FMR Area"
        }
    }
});