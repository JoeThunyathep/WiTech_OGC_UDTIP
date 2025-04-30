const data3D_tilesetURL = 'https://w2.iaf-ex.hft-stuttgart.de/CesiumData/3DTiles/Buildings/BuildingSolid/UDTIP24/tileset.json';
const data3D_gaia3D_noise_day = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-DAY-RESULT-3DTILES/tileset.json';
const data3D_gaia3D_noise_night = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-NIGHT-RESULT-3DTILES/tileset.json';
const data3D_gaia3D_noise_day_5m = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-DAY-RESULT-3DTILES+5/tileset.json';
const data3D_gaia3D_noise_night_5m = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/NOISE-NIGHT-RESULT-3DTILES+5/tileset.json';
const terrainURL_UDTIP24 = 'https://w2.iaf-ex.hft-stuttgart.de/CesiumData/QuantizedMesh/UDTIP24/';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNDI1ZTg5OC05MWU1LTQ5YTYtOTEyZS1mODk1ODZiZGRhMjgiLCJpZCI6MTcxNDQsImlhdCI6MTY4MDIwNTA2MX0.fM4zc4RUfbrgLvaD4FXP-EUNMceSRA1ILRt2qVNACpc';
var viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayerPicker: true,
    vrButton: false,
    geocoder: true,
    navigationHelpButton: false,
    selectionIndicator: false,
    homeButton: false,
    sceneModePicker: false,
    shadows: false,
    timeline: false,
    infoBox: false,
    fullscreenButton: false,
    terrainProvider: new Cesium.CesiumTerrainProvider({
        url: terrainURL_UDTIP24
    })
});
viewer.extend(Cesium.viewerCesiumNavigationMixin, {});
// set current time to be 10 Am 05/06/2024
viewer.clock.currentTime = Cesium.JulianDate.fromIso8601('2024-07-05T12:00:00Z');
viewer.clock.multiplier = 0; // pause the time

var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: data3D_tilesetURL

}));
// View tileset after the tileset is loaded
tileset.readyPromise.then(function (tileset) {
    // Set the camera to view the tileset (Manual setting)
    viewer.camera.setView({ "destination": { "x": -3057695.9616123075, "y": 4031749.1076151417, "z": 3871178.400210162 }, "orientation": { "direction": { "x": 0.371188504245057, "y": -0.8612616029482242, "z": 0.34705553677095097 }, "up": { "x": -0.33657848214500863, "y": 0.22354449323706738, "z": 0.9147364565274225 } } })
    // Set transparency of the tileset
    tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
            conditions: [
                ["true", "rgba(255, 255, 255, 0.5)"]
            ]
        }
    });
});


// Set globe time to be 01 September 2024 10:00 AM
viewer.clock.currentTime = Cesium.JulianDate.fromIso8601('2024-09-01T10:00:00Z');
viewer.clock.multiplier = 0; // pause the time

// const terrainURL = 'https://steinbeis-3dps.eu/3DGeoVolumes/collections/UDTIP/Terrain';
$(document).ready(function () {
    // Define the noise layer providers for both day and night
    var noise_day_layer = new Cesium.ArcGisMapServerImageryProvider({
        url: "https://tiles.arcgis.com/tiles/1lplwYilIlo008hQ/arcgis/rest/services/noise_day_final_tif/MapServer"
    });

    var noise_night_layer = new Cesium.ArcGisMapServerImageryProvider({
        url: "https://tiles.arcgis.com/tiles/1lplwYilIlo008hQ/arcgis/rest/services/noise_night_final_tif2/MapServer"
    });

    // Create variables to store the added layers
    var noiseDayLayerReference;
    var noiseNightLayerReference;

    // Function to handle adding or removing layers based on checkbox state
    function toggleLayer(checkbox, layerProvider, layerReference) {
        if (checkbox.is(':checked')) {
            // Add the layer if the checkbox is checked and store the reference
            layerReference = viewer.imageryLayers.addImageryProvider(layerProvider);
            // show the legend noise-legend-2d
            $('#noise-legend-2d').show();
        } else if (layerReference) {
            // Remove the layer if it's unchecked and a reference exists
            viewer.imageryLayers.remove(layerReference);
            layerReference = null;
            // hide the legend noise-legend-2d if all ground layers class = groundNoiseCheckbox are unchecked
            if ($('.groundNoiseCheckbox:checked').length == 0) {
                $('#noise-legend-2d').hide();
            }
        }
        return layerReference;
    }

    // Bind event listener for the "Noise Day" checkbox
    $('#noiseDayCheckbox').change(function () {
        noiseDayLayerReference = toggleLayer($(this), noise_day_layer, noiseDayLayerReference);
    });

    // Bind event listener for the "Noise Night" checkbox
    $('#noiseNightCheckbox').change(function () {
        noiseNightLayerReference = toggleLayer($(this), noise_night_layer, noiseNightLayerReference);
    });

    // Bind event listener for the "Building Noise" checkbox
    // Initialize variables to store model instances
    var buildingNoiseModelDay = null;
    var buildingNoiseModelNight = null;

    // Handle the day-time model
    $('#buildingNoise_Checkbox_Day').change(function () {
        if ($(this).is(':checked')) {
            var scene = viewer.scene;

            // Define the location of the GLB model for day-time
            var modelUrlDay = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/Type_2_Res_Facade_Day.glb';

            // Define the position where the model will be placed
            // 1 meter = 0.000009 degree
            var shift_1_m = 0.000009;
            var positionDay = Cesium.Cartesian3.fromDegrees(127.18142026292094 - 5 * shift_1_m, 37.61736352484231 + 3 * shift_1_m, 75);

            // Create a model matrix for the initial position
            var modelMatrixDay = Cesium.Transforms.eastNorthUpToFixedFrame(positionDay);

            // Apply rotations (optional: adjust as needed)
            var rotationYMatrixDay = Cesium.Matrix4.fromRotationTranslation(
                Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(-90))
            );
            var rotationZMatrixDay = Cesium.Matrix4.fromRotationTranslation(
                Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(-90))
            );
            Cesium.Matrix4.multiply(modelMatrixDay, rotationYMatrixDay, modelMatrixDay);
            Cesium.Matrix4.multiply(modelMatrixDay, rotationZMatrixDay, modelMatrixDay);

            // Load the day-time model
            buildingNoiseModelDay = scene.primitives.add(Cesium.Model.fromGltf({
                url: modelUrlDay,
                modelMatrix: modelMatrixDay,
                scale: 1.0 // Adjust the scale if necessary
            }));

            viewer.zoomTo(buildingNoiseModelDay);
        } else if (buildingNoiseModelDay) {
            // Remove the day-time model if unchecked
            viewer.scene.primitives.remove(buildingNoiseModelDay);
            buildingNoiseModelDay = null;
        }
    });

    // Handle the night-time model
    $('#buildingNoise_Checkbox_Night').change(function () {
        if ($(this).is(':checked')) {
            var scene = viewer.scene;

            // Define the location of the GLB model for night-time
            var modelUrlNight = 'https://ogcapi.hft-stuttgart.de/udtip/gaia3d/Type_2_Res_Facade_Night.glb';

            // Define the position where the model will be placed
            var shift_1_m = 0.000009;
            var positionNight = Cesium.Cartesian3.fromDegrees(127.18142026292094 - 6 * shift_1_m, 37.61736352484231 + 4 * shift_1_m, 75);

            // Create a model matrix for the initial position
            var modelMatrixNight = Cesium.Transforms.eastNorthUpToFixedFrame(positionNight);

            // Apply rotations (optional: adjust as needed)
            var rotationYMatrixNight = Cesium.Matrix4.fromRotationTranslation(
                Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(-90))
            );
            var rotationZMatrixNight = Cesium.Matrix4.fromRotationTranslation(
                Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(-90))
            );
            Cesium.Matrix4.multiply(modelMatrixNight, rotationYMatrixNight, modelMatrixNight);
            Cesium.Matrix4.multiply(modelMatrixNight, rotationZMatrixNight, modelMatrixNight);

            // Load the night-time model
            buildingNoiseModelNight = scene.primitives.add(Cesium.Model.fromGltf({
                url: modelUrlNight,
                modelMatrix: modelMatrixNight,
                scale: 1.0 // Adjust the scale if necessary
            }));

            viewer.zoomTo(buildingNoiseModelNight);
        } else if (buildingNoiseModelNight) {
            // Remove the night-time model if unchecked
            viewer.scene.primitives.remove(buildingNoiseModelNight);
            buildingNoiseModelNight = null;
        }
    });

    // preload the 3D Tiles model for data3D_gaia3D_noise_day and data3D_gaia3D_noise_night but make show = false
    var tileset3DNoiseDay = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: data3D_gaia3D_noise_day,
        show: false
    }));
    var tileset3DNoiseNight = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: data3D_gaia3D_noise_night,
        show: false
    }));
    var tileset3DNoiseDay_5m = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: data3D_gaia3D_noise_day_5m,
        show: false
    }));
    var tileset3DNoiseNight_5m = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: data3D_gaia3D_noise_night_5m,
        show: false
    }));
    // when the buildingNoise_Checkbox_Day3dTiles is checked, the 3D Tiles model show = true
    $('#buildingNoise_Checkbox_Day3dTiles').change(function () {
        if ($(this).is(':checked')) {
            tileset3DNoiseDay.show = true;
            tileset3DNoiseNight.show = false;
            tileset3DNoiseDay_5m.show = false;
            tileset3DNoiseNight_5m.show = false;
        } else {
            tileset3DNoiseDay.show = false;
        }
    });
    // when the buildingNoise_Checkbox_Night3dTiles is checked, the 3D Tiles model show = true
    $('#buildingNoise_Checkbox_Night3dTiles').change(function () {
        if ($(this).is(':checked')) {
            tileset3DNoiseNight.show = true;
            tileset3DNoiseDay.show = false;
            tileset3DNoiseDay_5m.show = false;
            tileset3DNoiseNight_5m.show = false;
        } else {
            tileset3DNoiseNight.show = false;
        }
    });
    // when the buildingNoise_Checkbox_Day3dTiles_5m is checked, the 3D Tiles model show = true
    $('#buildingNoise_Checkbox_Day3dTiles_5m').change(function () {
        if ($(this).is(':checked')) {
            tileset3DNoiseDay_5m.show = true;
            tileset3DNoiseNight_5m.show = false;
            tileset3DNoiseDay.show = false;
            tileset3DNoiseNight.show = false;
        } else {
            tileset3DNoiseDay_5m.show = false;
        }
    });
    // when the buildingNoise_Checkbox_Night3dTiles_5m is checked, the 3D Tiles model show = true
    $('#buildingNoise_Checkbox_Night3dTiles_5m').change(function () {
        if ($(this).is(':checked')) {
            tileset3DNoiseNight_5m.show = true;
            tileset3DNoiseDay_5m.show = false;
            tileset3DNoiseDay.show = false;
            tileset3DNoiseNight.show = false;
        } else {
            tileset3DNoiseNight_5m.show = false;
        }
    });





    // Function to load both Wuhan and UCF GeoPose data
    // function loadGeoPoseData() {
    //     loadSingleGeoPoseData(geopose_wuhan_path, Cesium.Color.RED, 'Wuhan-');
    //     loadSingleGeoPoseData(geopose_ucf_path, Cesium.Color.GREEN, 'UCF-');
    // }

    // loadGeoPoseData();
});
$(document).ready(function () {
    // Define paths for Wuhan and UCF GeoPose data
    const geopose_wuhan_path = 'geopose/wuhan_update';
    const geopose_ucf_path = 'geopose/ucf';
    // Function to load and display GeoPose data for a given path
    function loadSingleGeoPoseData(geopose_path, entityColor = Cesium.Color.RED, labelPrefix = '') {
        console.log(`Loading geopose data from ${geopose_path}...`);
        $.getJSON(`${geopose_path}/labels.json`, function (data) {
            var trainingData = data.data;
            var selectedEntity = null; // Variable to keep track of the selected entity
            // Loop through each data point
            trainingData.forEach(function (item) {
                // Extract geopose position
                var position = item.geopose.position;
                var lat = position.lat;
                var lon = position.lon;

                // Add a point for each location
                var entity = viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(lon, lat),
                    point: {
                        pixelSize: 20,
                        color: entityColor,
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                        disableDepthTestDistance: Number.POSITIVE_INFINITY // Prevents clipping
                    }
                });
                // Cesium.sampleTerrainMostDetailed(viewer.terrainProvider, [
                //     Cesium.Cartographic.fromDegrees(lon, lat)
                // ]).then(function (updatedPositions) {
                //     var height = updatedPositions[0].height || 0; // Get terrain height
                //     viewer.entities.add({
                //         position: Cesium.Cartesian3.fromDegrees(lon, lat, height + 2), // Add 2m above ground
                //         point: {
                //             pixelSize: 10,
                //             color: entityColor
                //         }
                //     });
                // });
                // Click event for showing metadata
                entity.metadata = item; // Store the metadata in the entity

                // Add label with optional prefix
                // entity.label = {
                //     text: labelPrefix + item.id,
                //     verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                //     pixelOffset: new Cesium.Cartesian2(0, -15),
                //     heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                //     scale: 0.5,
                //     fillColor: Cesium.Color.WHITE, // Text color
                //     outlineColor: Cesium.Color.BLACK, // Outline color
                //     outlineWidth: 2, // Thickness of the outline
                //     style: Cesium.LabelStyle.FILL_AND_OUTLINE, 
                // };

                // Store the metadata in the entity for future use
                entity.metadata = item;
            });

            // Add click handler after all entities are added
            viewer.screenSpaceEventHandler.setInputAction(function onClick(click) {
                var pickedEntity = viewer.scene.pick(click.position);

                if (Cesium.defined(pickedEntity) && pickedEntity.id && pickedEntity.id.metadata) {
                    // If an entity is already selected, reset its color
                    if (selectedEntity) {
                        selectedEntity.point.color = entityColor;
                    }

                    // Highlight the newly selected entity in blue
                    pickedEntity.id.point.color = Cesium.Color.BLUE;
                    selectedEntity = pickedEntity.id;

                    showMetadata(pickedEntity.id.metadata, geopose_path);
                } else {
                    // If clicked somewhere else, reset the color of the previously selected entity
                    if (selectedEntity) {
                        selectedEntity.point.color = entityColor;
                        selectedEntity = null;
                    }
                    $('#wuhan-geopose-content').hide();
                    $('#ucf-geopose-content').hide(); // Hide UCF metadata if visible
                }
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        });
    }

    // Function to display metadata in #wuhan-geopose-content or #ucf-geopose-content
    function showMetadata(metadata, geopose_path) {
        var imageUrl = geopose_path + '/' + metadata.dataURL[0];
        var html = `
                    <div class="card shadow-sm">
                        <div class="card-header text-white" style="background-color:#424242;">
                            <h5 class="mb-0">
                                <i class="bi bi-hash"></i> ${metadata.id}
                            </h5>
                        </div>
                        <div class="card-body">
                            <div class="row">

                                    <img src="${imageUrl}" class="img-fluid rounded" alt="${metadata.id}" style="width: 100%;">

                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <i class="bi bi-tags-fill"></i> <strong>Classification:</strong> ${metadata.labels[0].class}
                                        </li>
                                        <li class="list-group-item">
                                            <i class="bi bi-calendar-event"></i> <strong>Data Time:</strong> ${metadata.dataTime}
                                        </li>
                                        <li class="list-group-item">
                                            <i class="bi bi-geo-alt-fill"></i> <strong>Position:</strong> 
                                            Lat: ${metadata.geopose.position.lat}, Lon: ${metadata.geopose.position.lon}, Height: ${metadata.geopose.position.h}
                                        </li>
                                        <li class="list-group-item">
                                            <i class="bi bi-compass"></i> <strong>Quaternion:</strong> 
                                            x: ${metadata.geopose.quaternion.x}, y: ${metadata.geopose.quaternion.y}, z: ${metadata.geopose.quaternion.z}, w: ${metadata.geopose.quaternion.w}
                                        </li>
                                    </ul>
                                
                            </div>
                        </div>
                    </div>
                `;

        // Determine which metadata container to use based on geopose_path
        if (geopose_path === geopose_wuhan_path) {
            $('#wuhan-geopose-content').html(html);
            $('#wuhan-geopose-content').show();
            $('#ucf-geopose-content').hide();
        } else if (geopose_path === geopose_ucf_path) {
            $('#ucf-geopose-content').html(html);
            $('#ucf-geopose-content').show();
            $('#wuhan-geopose-content').hide();
        }
    }
    console.log("ready!");
    // Load UDTIP Terrain
    $('#load-udtip-terrain').click(function () {
        viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
            url: terrainURL_UDTIP24
        });
    });
    $('#go-to-wuhan-button').click(function () {
        flyToWuhan();
    });
    $('#go-to-ucf-button').click(function () { // New event listener for UCF button
        flyToUCF();
    });
    function flyToWuhan() {
        viewer.camera.setView({ "destination": { "x": -2267620.6940832925, "y": 5009356.303147686, "z": 3221102.542328603 }, "orientation": { "direction": { "x": 0.8141855103554685, "y": -0.43623674282325486, "z": 0.38314417513275967 }, "up": { "x": 0.0005565097230291194, "y": 0.6604913100692209, "z": 0.7508334832837256 } } })
        // load Cesium Terrain when flying to Wuhan
        viewer.terrainProvider = Cesium.createWorldTerrain();
        loadSingleGeoPoseData(geopose_wuhan_path, Cesium.Color.RED, 'Wuhan-');
        // hide noise-legend when flying to Wuhan
        $('#noise-legend').hide();
        // hide metaDataCard when flying to Wuhan
        $('#wuhan-geopose-content').hide();
        $('#ucf-geopose-content').hide();

    }
    function flyToUCF() { // New function to fly to UCF
        viewer.camera.setView({ "destination": { "x": 858461.8123545728, "y": -5538581.58211511, "z": 3034187.5563432924 }, "orientation": { "direction": { "x": 0.19674462793262726, "y": 0.9483415564864976, "z": 0.24887716572722995 }, "up": { "x": 0.3639408981411557, "y": -0.3063417027260123, "z": 0.8796031968058874 } } })// Placeholder: Use the same terrain provider as Korea for now
        viewer.terrainProvider = Cesium.createWorldTerrain();
        loadSingleGeoPoseData(geopose_ucf_path, Cesium.Color.GREEN, 'UCF-');
        // Optionally, show any specific legends or UI elements for UCF
        $('#noise-legend').hide(); // Adjust as needed
        // hide metaDataCard when flying to UCF
        $('#wuhan-geopose-content').hide();
        $('#ucf-geopose-content').hide();
    }
    $('#go-to-Korea-button').click(function () {
        flyToKorea();
    });

    function flyToKorea() {
        viewer.camera.setView({ "destination": { "x": -3057695.9616123075, "y": 4031749.1076151417, "z": 3871178.400210162 }, "orientation": { "direction": { "x": 0.371188504245057, "y": -0.8612616029482242, "z": 0.34705553677095097 }, "up": { "x": -0.33657848214500863, "y": 0.22354449323706738, "z": 0.9147364565274225 } } })
        // load UDTIP Terrain when flying to Korea
        viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
            url: terrainURL_UDTIP24
        });
        // show noise-legend when flying to Korea
        $('#noise-legend').show();
    }

});