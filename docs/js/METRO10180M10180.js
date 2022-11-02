var METRO10180M10180 = {
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
                566,
                565,
                598,
                631,
                707,
                688
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                617,
                605,
                621,
                655,
                733,
                732
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                820,
                805,
                822,
                863,
                955,
                945
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1026,
                1018,
                1064,
                1134,
                1285,
                1288
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1366,
                1324,
                1367,
                1464,
                1639,
                1598
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10180M10180_plot"),{
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
                    566,
                    565,
                    598,
                    631,
                    707,
                    688
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    617,
                    605,
                    621,
                    655,
                    733,
                    732
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    820,
                    805,
                    822,
                    863,
                    955,
                    945
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1026,
                    1018,
                    1064,
                    1134,
                    1285,
                    1288
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1366,
                    1324,
                    1367,
                    1464,
                    1639,
                    1598
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10180M10180: Abilene, TX MSA"
        }
    }
});