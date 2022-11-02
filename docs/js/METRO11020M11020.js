var METRO11020M11020 = {
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
                553,
                584,
                600,
                561,
                574,
                552
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                589,
                623,
                638,
                616,
                647,
                677
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                725,
                774,
                796,
                770,
                806,
                829
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                907,
                970,
                997,
                960,
                1003,
                1025
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1025,
                1054,
                1076,
                1043,
                1093,
                1124
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO11020M11020_plot"),{
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
                    553,
                    584,
                    600,
                    561,
                    574,
                    552
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    589,
                    623,
                    638,
                    616,
                    647,
                    677
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    725,
                    774,
                    796,
                    770,
                    806,
                    829
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    907,
                    970,
                    997,
                    960,
                    1003,
                    1025
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1025,
                    1054,
                    1076,
                    1043,
                    1093,
                    1124
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO11020M11020: Altoona, PA MSA"
        }
    }
});