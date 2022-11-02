var METRO14010M14060 = {
    "labels": [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
    ],
    "datasets": [
        {
            "data": [
                553,
                613,
                585,
                579,
                603
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                613,
                677,
                647,
                648,
                682
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                810,
                894,
                846,
                827,
                853
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1099,
                1229,
                1185,
                1160,
                1215
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1408,
                1534,
                1470,
                1423,
                1477
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14010M14060_plot"),{
    "type": "line",
    "data": {
        "labels": [
            "2017",
            "2018",
            "2019",
            "2020",
            "2021"
        ],
        "datasets": [
            {
                "data": [
                    553,
                    613,
                    585,
                    579,
                    603
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    613,
                    677,
                    647,
                    648,
                    682
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    810,
                    894,
                    846,
                    827,
                    853
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1099,
                    1229,
                    1185,
                    1160,
                    1215
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1408,
                    1534,
                    1470,
                    1423,
                    1477
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14010M14060: Bloomington, IL  HUD Metro FMR Area"
        }
    }
});