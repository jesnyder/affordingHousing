var METRO18580M18580 = {
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
                759,
                752,
                826,
                744,
                784,
                822
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                790,
                789,
                876,
                789,
                864,
                909
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                991,
                997,
                1110,
                999,
                1079,
                1118
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1315,
                1328,
                1484,
                1336,
                1428,
                1474
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1511,
                1518,
                1725,
                1553,
                1702,
                1720
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO18580M18580_plot"),{
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
                    759,
                    752,
                    826,
                    744,
                    784,
                    822
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    790,
                    789,
                    876,
                    789,
                    864,
                    909
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    991,
                    997,
                    1110,
                    999,
                    1079,
                    1118
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1315,
                    1328,
                    1484,
                    1336,
                    1428,
                    1474
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1511,
                    1518,
                    1725,
                    1553,
                    1702,
                    1720
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO18580M18580: Corpus Christi, TX MSA"
        }
    }
});