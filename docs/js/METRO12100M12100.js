var METRO12100M12100 = {
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
                912,
                890,
                858,
                872,
                939,
                946
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                1013,
                1020,
                1003,
                1028,
                1108,
                1107
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1310,
                1312,
                1279,
                1305,
                1401,
                1407
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1765,
                1734,
                1683,
                1745,
                1919,
                1972
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                2010,
                1985,
                1913,
                1980,
                2138,
                2183
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12100M12100_plot"),{
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
                    912,
                    890,
                    858,
                    872,
                    939,
                    946
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    1013,
                    1020,
                    1003,
                    1028,
                    1108,
                    1107
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1310,
                    1312,
                    1279,
                    1305,
                    1401,
                    1407
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1765,
                    1734,
                    1683,
                    1745,
                    1919,
                    1972
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    2010,
                    1985,
                    1913,
                    1980,
                    2138,
                    2183
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12100M12100: Atlantic City-Hammonton, NJ MSA"
        }
    }
});