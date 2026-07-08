from models import GeneratePlanResponse


FALLBACK_PLAN = GeneratePlanResponse(
    recommended_strategy={
        "name": "Cluster-Based Priority Planning",
        "confidence": 94,
        "reason": [
            "Heavy rain expected after 2 PM",
            "Complaint density is high across four nearby clusters",
            "Five trucks are available for priority deployment",
            "Schools are located inside two active clusters",
        ],
    },
    comparison=[
        {
            "strategy": "Cluster-Based",
            "complaints": 26,
            "travel": "18 km",
            "critical": 9,
            "fuel": "Low",
        },
        {
            "strategy": "Risk-Based",
            "complaints": 21,
            "travel": "25 km",
            "critical": 11,
            "fuel": "Medium",
        },
        {
            "strategy": "Locality-Based",
            "complaints": 23,
            "travel": "15 km",
            "critical": 5,
            "fuel": "Low",
        },
    ],
    workplan=[
        {
            "crew": "Crew 1",
            "vehicle": "Compactor",
            "cluster": "Cluster A",
            "complaints": 6,
            "eta": "2 hours",
        },
        {
            "crew": "Crew 2",
            "vehicle": "Auto Tipper",
            "cluster": "Cluster B",
            "complaints": 5,
            "eta": "1.5 hours",
        },
        {
            "crew": "Crew 3",
            "vehicle": "Compactor",
            "cluster": "Cluster C",
            "complaints": 7,
            "eta": "2.5 hours",
        },
        {
            "crew": "Crew 4",
            "vehicle": "Mini Truck",
            "cluster": "Cluster D",
            "complaints": 4,
            "eta": "1 hour",
        },
    ],
)
