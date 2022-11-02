var METRO12020M12020 = {
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
                625,
                613,
                622,
                690,
                663,
                737
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                696,
                666,
                667,
                723,
                699,
                782
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                815,
                783,
                785,
                848,
                815,
                899
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1107,
                1054,
                1063,
                1150,
                1104,
                1204
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1413,
                1353,
                1303,
                1362,
                1281,
                1409
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12020M12020_plot"),{
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
                    625,
                    613,
                    622,
                    690,
                    663,
                    737
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    696,
                    666,
                    667,
                    723,
                    699,
                    782
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    815,
                    783,
                    785,
                    848,
                    815,
                    899
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1107,
                    1054,
                    1063,
                    1150,
                    1104,
                    1204
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1413,
                    1353,
                    1303,
                    1362,
                    1281,
                    1409
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12020M12020: Athens-Clarke County, GA MSA"
        }
    }
});