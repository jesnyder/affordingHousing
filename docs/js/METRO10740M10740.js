var METRO10740M10740 = {
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
                557,
                557,
                563,
                571,
                621,
                666
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                716,
                707,
                711,
                713,
                770,
                821
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                878,
                873,
                877,
                877,
                940,
                996
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1278,
                1270,
                1268,
                1265,
                1345,
                1415
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1547,
                1513,
                1508,
                1506,
                1617,
                1705
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10740M10740_plot"),{
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
                    557,
                    557,
                    563,
                    571,
                    621,
                    666
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    716,
                    707,
                    711,
                    713,
                    770,
                    821
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    878,
                    873,
                    877,
                    877,
                    940,
                    996
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1278,
                    1270,
                    1268,
                    1265,
                    1345,
                    1415
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1547,
                    1513,
                    1508,
                    1506,
                    1617,
                    1705
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10740M10740: Albuquerque, NM MSA"
        }
    }
});