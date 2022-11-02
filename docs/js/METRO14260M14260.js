var METRO14260M14260 = {
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
                552,
                560,
                613,
                683,
                783
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                629,
                676,
                688,
                748,
                801,
                896
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                807,
                866,
                872,
                941,
                1002,
                1118
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1168,
                1251,
                1256,
                1346,
                1420,
                1577
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1380,
                1456,
                1445,
                1548,
                1647,
                1841
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14260M14260_plot"),{
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
                    552,
                    560,
                    613,
                    683,
                    783
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    629,
                    676,
                    688,
                    748,
                    801,
                    896
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    807,
                    866,
                    872,
                    941,
                    1002,
                    1118
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1168,
                    1251,
                    1256,
                    1346,
                    1420,
                    1577
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1380,
                    1456,
                    1445,
                    1548,
                    1647,
                    1841
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14260M14260: Boise City, ID HUD Metro FMR Area"
        }
    }
});