var METRO12700M12700 = {
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
                845,
                956,
                979,
                986,
                1100,
                1248
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                933,
                1083,
                1152,
                1149,
                1265,
                1428
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1240,
                1441,
                1524,
                1513,
                1667,
                1879
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1554,
                1817,
                1931,
                1919,
                2089,
                2323
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1709,
                1984,
                2101,
                2050,
                2261,
                2548
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12700M12700_plot"),{
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
                    845,
                    956,
                    979,
                    986,
                    1100,
                    1248
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    933,
                    1083,
                    1152,
                    1149,
                    1265,
                    1428
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1240,
                    1441,
                    1524,
                    1513,
                    1667,
                    1879
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1554,
                    1817,
                    1931,
                    1919,
                    2089,
                    2323
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1709,
                    1984,
                    2101,
                    2050,
                    2261,
                    2548
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12700M12700: Barnstable Town, MA MSA"
        }
    }
});