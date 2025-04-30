# UDTIP Project (Urban Digital Twin Interoperability Pilot)

![image](https://github.com/user-attachments/assets/929301d8-f8c3-4059-9354-c59ef58d413a)

## About UDTIP
OGC Urban Digital Twins Interoperability Pilot: The Urban Digital Twins Interoperability Pilot aims to improve the interoperability of geospatial data and analyses within digital twins and lay the foundations for better interoperability between Digital Twins developed for separate applications. To provide a useful example of how to improve interoperability, the UDTIP will focus on implementing scenarios and supporting APIs for urban noise analysis and situational analysis of geo-referenced still and moving imagery for use cases in a Smart City.

Key features include:
- 3D visualization of urban environments
- Noise pollution mapping and analysis
- GeoPose data integration
- Multi-location support (Seoul, Korea / Wuhan, UCF/ ...)
- OGC standards compliance for interoperability

## Demo
A live demo of the project is available at: [https://project-udtip-2024.vercel.app/](https://project-udtip-2024.vercel.app/)

## Getting Started

### Setting up Cesium Ion Token
This project uses Cesium for 3D visualization and requires a Cesium Ion token for accessing basemaps (satellite imagery and OpenStreetMap) for development.

To add your token:

1. Sign up for a free account at [https://cesium.com/ion/signup/](https://cesium.com/ion/signup/)
2. After logging in, navigate to your account settings to find your access token
3. Add your token in the `public` directory in the `config.js` with the following content:

```javascript
// Add your Cesium Ion token here
Cesium.Ion.defaultAccessToken = 'YOUR_TOKEN_HERE';
```

## Features
- 3D building visualization
- Day/night noise pollution mapping
- Terrain visualization
- Location-based GeoPose data
- Multiple study areas (Korea, Wuhan, UCF)
