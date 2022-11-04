new Chart(document.getElementById("2502339450_plot"),{
    "type": "line",
    "data": {
        "labels": [
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "datasets": [
            {
                "data": [
                    0.12237037037037037,
                    0.13983353151010702,
                    0.13194860813704498,
                    0.13411764705882354,
                    0.11649056603773585,
                    0.12333931777378815
                ],
                "label": "ratio",
                "fill": "false"
            }
        ]
    },
    "options": {
        "stacked": false,
        "title": {
            "display": "true",
            "text": "2502339450: Brockton, MA HUD Metro FMR Area"
        },
        "scales": {
            "y": {
                "type": "linear",
                "display": true,
                "position": "left"
            },
            "y1": {
                "type": "linear",
                "display": true,
                "position": "right"
            }
        }
    }
});