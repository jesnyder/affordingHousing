var METRO13140M13140 = {
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
                539,
                575,
                647,
                623,
                661,
                747
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                685,
                699,
                745,
                688,
                708,
                798
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                832,
                856,
                920,
                857,
                880,
                982
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1071,
                1101,
                1187,
                1115,
                1145,
                1281
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1171,
                1209,
                1310,
                1180,
                1205,
                1332
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13140M13140_plot"),{
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
                    539,
                    575,
                    647,
                    623,
                    661,
                    747
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    685,
                    699,
                    745,
                    688,
                    708,
                    798
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    832,
                    856,
                    920,
                    857,
                    880,
                    982
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1071,
                    1101,
                    1187,
                    1115,
                    1145,
                    1281
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1171,
                    1209,
                    1310,
                    1180,
                    1205,
                    1332
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13140M13140: Beaumont-Port Arthur, TX MSA"
        }
    }
});