var METRO17860M17860 = {
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
                546,
                543,
                594,
                685,
                672,
                658
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                619,
                616,
                659,
                741,
                722,
                718
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                772,
                759,
                803,
                894,
                874,
                878
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1061,
                1043,
                1090,
                1207,
                1173,
                1177
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1360,
                1337,
                1410,
                1544,
                1444,
                1392
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17860M17860_plot"),{
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
                    546,
                    543,
                    594,
                    685,
                    672,
                    658
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    619,
                    616,
                    659,
                    741,
                    722,
                    718
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    772,
                    759,
                    803,
                    894,
                    874,
                    878
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1061,
                    1043,
                    1090,
                    1207,
                    1173,
                    1177
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1360,
                    1337,
                    1410,
                    1544,
                    1444,
                    1392
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17860M17860: Columbia, MO HUD Metro FMR Area"
        }
    }
});