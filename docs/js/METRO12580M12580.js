var METRO12580M12580 = {
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
                903,
                918,
                862,
                897,
                917,
                953
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                1097,
                1125,
                1074,
                1105,
                1115,
                1124
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1376,
                1411,
                1342,
                1376,
                1384,
                1395
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1769,
                1815,
                1732,
                1781,
                1793,
                1809
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                2072,
                2108,
                1992,
                2037,
                2053,
                2075
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12580M12580_plot"),{
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
                    903,
                    918,
                    862,
                    897,
                    917,
                    953
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    1097,
                    1125,
                    1074,
                    1105,
                    1115,
                    1124
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1376,
                    1411,
                    1342,
                    1376,
                    1384,
                    1395
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1769,
                    1815,
                    1732,
                    1781,
                    1793,
                    1809
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    2072,
                    2108,
                    1992,
                    2037,
                    2053,
                    2075
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12580M12580: Baltimore-Columbia-Towson, MD MSA"
        }
    }
});