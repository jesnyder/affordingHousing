var METRO12980M12980 = {
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
                514,
                470,
                486,
                517,
                552,
                602
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                642,
                585,
                601,
                632,
                661,
                670
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                806,
                737,
                757,
                794,
                837,
                841
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1051,
                962,
                986,
                1028,
                1074,
                1091
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1139,
                1025,
                1040,
                1076,
                1148,
                1183
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12980M12980_plot"),{
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
                    514,
                    470,
                    486,
                    517,
                    552,
                    602
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    642,
                    585,
                    601,
                    632,
                    661,
                    670
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    806,
                    737,
                    757,
                    794,
                    837,
                    841
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1051,
                    962,
                    986,
                    1028,
                    1074,
                    1091
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1139,
                    1025,
                    1040,
                    1076,
                    1148,
                    1183
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12980M12980: Battle Creek, MI MSA"
        }
    }
});