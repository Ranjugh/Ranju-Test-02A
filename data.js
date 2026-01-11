var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-view",
      "name": "front view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.019952858942373197,
        "pitch": 0.1595529855555906,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.030030358433974058,
          "pitch": 0.3787884588869055,
          "rotation": 1.5707963267948966,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4047355143742024,
        "pitch": -0.06380994485123992,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.7031887322343344,
          "pitch": 0.20041324209888067,
          "rotation": 0,
          "target": "2-chair"
        },
        {
          "yaw": 0.05467929278452033,
          "pitch": 0.4928476477048953,
          "rotation": 0,
          "target": "0-front-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.26747667833845057,
          "pitch": 0.4509540033356281,
          "title": "door",
          "text": "exit"
        }
      ]
    },
    {
      "id": "2-chair",
      "name": "chair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.567873205466288,
          "pitch": 0.30157674733354156,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-6",
      "name": "6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5740768078579261,
        "pitch": 0.4186149802846142,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.644932763966132,
          "pitch": 0.6590648362478966,
          "rotation": 4.71238898038469,
          "target": "1-reception"
        },
        {
          "yaw": -2.9276109007511355,
          "pitch": 0.23425049988899715,
          "rotation": 7.853981633974483,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
