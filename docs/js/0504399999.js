new Chart(document.getElementById("0504399999_plot"),{
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
                    0.12347438752783964,
                    0.11925155925155925,
                    0.117079107505071,
                    0.10218923933209648,
                    0.0909493670886076,
                    0.08396600566572238
                ],
                "label": "ratio",
                "fill": "false"
            }
        ]
    },
    "options": {
        "responsive": true,
        "interaction": {
            "mode": "index",
            "intersect": false
        },
        "stacked": false,
        "title": {
            "display": true,
            "text": "0504399999: Drew County, AR"
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