var METRO11100M11100 = {
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
                525,
                514,
                553,
                596,
                629,
                621
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                632,
                616,
                654,
                675,
                705,
                713
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                828,
                806,
                849,
                872,
                906,
                908
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1088,
                1070,
                1148,
                1192,
                1236,
                1230
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1306,
                1231,
                1293,
                1334,
                1406,
                1421
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO11100M11100_plot"),{
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
                    525,
                    514,
                    553,
                    596,
                    629,
                    621
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    632,
                    616,
                    654,
                    675,
                    705,
                    713
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    828,
                    806,
                    849,
                    872,
                    906,
                    908
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1088,
                    1070,
                    1148,
                    1192,
                    1236,
                    1230
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1306,
                    1231,
                    1293,
                    1334,
                    1406,
                    1421
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO11100M11100: Amarillo, TX HUD Metro FMR Area"
        }
    }
});