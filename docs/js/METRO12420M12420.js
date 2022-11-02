var METRO12420M12420 = {
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
                799,
                860,
                931,
                988,
                1059,
                1092
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                968,
                1023,
                1086,
                1134,
                1212,
                1236
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1195,
                1251,
                1315,
                1356,
                1434,
                1451
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1619,
                1679,
                1734,
                1763,
                1848,
                1867
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1948,
                2018,
                2099,
                2128,
                2207,
                2194
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12420M12420_plot"),{
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
                    799,
                    860,
                    931,
                    988,
                    1059,
                    1092
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    968,
                    1023,
                    1086,
                    1134,
                    1212,
                    1236
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1195,
                    1251,
                    1315,
                    1356,
                    1434,
                    1451
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1619,
                    1679,
                    1734,
                    1763,
                    1848,
                    1867
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1948,
                    2018,
                    2099,
                    2128,
                    2207,
                    2194
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12420M12420: Austin-Round Rock, TX MSA"
        }
    }
});