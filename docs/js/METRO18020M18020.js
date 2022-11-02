var METRO18020M18020 = {
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
                596,
                628,
                712,
                724,
                760,
                822
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                720,
                707,
                717,
                728,
                764,
                825
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                856,
                843,
                856,
                876,
                901,
                953
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1085,
                1075,
                1110,
                1136,
                1181,
                1237
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1180,
                1152,
                1157,
                1216,
                1331,
                1408
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO18020M18020_plot"),{
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
                    596,
                    628,
                    712,
                    724,
                    760,
                    822
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    720,
                    707,
                    717,
                    728,
                    764,
                    825
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    856,
                    843,
                    856,
                    876,
                    901,
                    953
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1085,
                    1075,
                    1110,
                    1136,
                    1181,
                    1237
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1180,
                    1152,
                    1157,
                    1216,
                    1331,
                    1408
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO18020M18020: Columbus, IN MSA"
        }
    }
});