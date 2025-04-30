// Configuration file for URLs and tokens

// 3D Tileset URLs
const data3D_tilesetURL = 'https://w2.iaf-ex.hft-stuttgart.de/CesiumData/3DTiles/Buildings/BuildingSolid/UDTIP24/tileset.json';
const data3D_gaia3D_noise_day = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-DAY-RESULT-3DTILES/tileset.json';
const data3D_gaia3D_noise_night = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-NIGHT-RESULT-3DTILES/tileset.json';
const data3D_gaia3D_noise_day_5m = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-DAY-RESULT-3DTILES+5/tileset.json';
const data3D_gaia3D_noise_night_5m = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-NIGHT-RESULT-3DTILES+5/tileset.json';

// Terrain URL
const terrainURL_UDTIP24 = 'https://w2.iaf-ex.hft-stuttgart.de/CesiumData/QuantizedMesh/UDTIP24/';

// Note: Cesium Ion token should be added separately
// Please see README.md for instructions on adding your token
Cesium.Ion.defaultAccessToken = 'YOUR_TOKEN_HERE';