var METRO10500M10500 = {
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
                579,
                562,
                554,
                601,
                624,
                666
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                616,
                588,
                567,
                623,
                645,
                690
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                752,
                716,
                682,
                740,
                761,
                810
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1009,
                950,
                898,
                965,
                985,
                1050
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1043,
                1014,
                973,
                1077,
                1136,
                1273
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10500M10500_plot"),{
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
                    579,
                    562,
                    554,
                    601,
                    624,
                    666
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    616,
                    588,
                    567,
                    623,
                    645,
                    690
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    752,
                    716,
                    682,
                    740,
                    761,
                    810
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1009,
                    950,
                    898,
                    965,
                    985,
                    1050
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1043,
                    1014,
                    973,
                    1077,
                    1136,
                    1273
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10500M10500: Albany, GA MSA"
        }
    }
});