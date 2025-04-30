// set one
// var color_one = "color('#F7F4F9')";
// var color_two = "color('#E9E3F0')";
// var color_three = "color('#D8C2DF')";   
// var color_four = "color('#CDA0CD')";
// var color_five = "color('#D57ABA')";
// var color_six = "color('#E34A9F')";
// var color_seven = "color('#DF2179')";
// var color_eight = "color('#C20E52')";
// var color_nine = "color('#93003F')";
// var color_ten = "color('#67001F')";

// set two
var color_one = "color('#E0F7FA')";    // Very Light Blue
var color_two = "color('#B2EBF2')";    // Light Cyan
var color_three = "color('#80DEEA')";  // Cyan
var color_four = "color('#4DD0E1')";   // Light Blue
var color_five = "color('#26C6DA')";    // Blue-Cyan
var color_six = "color('#00BCD4')";     // Cyan
var color_seven = "color('#00ACC1')";   // Dark Cyan
var color_eight = "color('#0097A7')";   // Deep Cyan
var color_nine = "color('#00838F')";    // Teal
var color_ten = "color('#006064')";     // Dark Teal

// set three
var color_one = "color('#FFF3E0')";    // Very Light Orange
var color_two = "color('#FFE0B2')";    // Light Orange
var color_three = "color('#FFCC80')";  // Pale Orange
var color_four = "color('#FFB74D')";   // Orange
var color_five = "color('#FFA726')";    // Dark Orange
var color_six = "color('#FF9800')";     // Amber
var color_seven = "color('#FB8C00')";   // Dark Amber
var color_eight = "color('#F57C00')";   // Orange Deep
var color_nine = "color('#EF6C00')";    // Darker Orange
var color_ten = "color('#E65100')";     // Very Dark Orange

var color_one = "color('#FFFFFF')";     // Level 1: White (Very Low Noise)
var color_two = "color('#E0F7FA')";     // Level 2: Very Light Cyan
var color_three = "color('#B2EBF2')";   // Level 3: Light Cyan
var color_four = "color('#80DEEA')";    // Level 4: Cyan
var color_five = "color('#4DD0E1')";    // Level 5: Light Blue
var color_six = "color('#26C6DA')";     // Level 6: Blue-Cyan
var color_seven = "color('#00BCD4')";   // Level 7: Cyan
var color_eight = "color('#FFB74D')";   // Level 8: Light Orange
var color_nine = "color('#FF9800')";    // Level 9: Orange
var color_ten = "color('#F44336')";     // Level 10: Red (High Noise)

var pointcloud_4m = [];
pointcloud_4m["less25db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less25db_h45m/tileset.json",
    show: false
}));
pointcloud_4m["less50db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less50db_h45m/tileset.json",
    show: false
}));
pointcloud_4m["less55db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less55db_h45m/tileset.json",
    show: false
}));
pointcloud_4m["less60db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less60db_h45m/tileset.json",
    show: false
}));
pointcloud_4m["less65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less65db_h45m/tileset.json",
    show: false
}));
pointcloud_4m["more65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_more65db_h45m/tileset.json",
    show: false
}));

pointcloud_4m["less25db"].style = new Cesium.Cesium3DTileStyle({
    color: color_one,
    pointSize: 7.5,
});
pointcloud_4m["less50db"].style = new Cesium.Cesium3DTileStyle({
    color: color_six,
    pointSize: 7.5,
});
pointcloud_4m["less55db"].style = new Cesium.Cesium3DTileStyle({
    color: color_seven,
    pointSize: 7.5,
});
pointcloud_4m["less60db"].style = new Cesium.Cesium3DTileStyle({
    color: color_eight,
    pointSize: 7.5,
});
pointcloud_4m["less65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_nine,
    pointSize: 7.5,
});
pointcloud_4m["more65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_ten,
    pointSize: 7.5,
});


var pointcloud_20m = [];
pointcloud_20m["less25db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less25db_h61m/tileset.json",
    show: false
}));
pointcloud_20m["less50db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less50db_h61m/tileset.json",
    show: false
}));
pointcloud_20m["less55db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less55db_h61m/tileset.json",
    show: false
}));
pointcloud_20m["less60db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less60db_h61m/tileset.json",
    show: false
}));
pointcloud_20m["less65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less65db_h61m/tileset.json",
    show: false
}));
pointcloud_20m["more65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_more65db_h61m/tileset.json",
    show: false
}));

pointcloud_20m["less25db"].style = new Cesium.Cesium3DTileStyle({
    color: color_one,
    pointSize: 7.5,
});
pointcloud_20m["less50db"].style = new Cesium.Cesium3DTileStyle({
    color: color_six,
    pointSize: 7.5,
});
pointcloud_20m["less55db"].style = new Cesium.Cesium3DTileStyle({
    color: color_seven,
    pointSize: 7.5,
});
pointcloud_20m["less60db"].style = new Cesium.Cesium3DTileStyle({
    color: color_eight,
    pointSize: 7.5,
});
pointcloud_20m["less65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_nine,
    pointSize: 7.5,
});
pointcloud_20m["more65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_ten,
    pointSize: 7.5,
});

var pointcloud_40m = [];
pointcloud_40m["less25db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less25db_h81m/tileset.json",
    show: false
}));
pointcloud_40m["less50db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less50db_h81m/tileset.json",
    show: false
}));
pointcloud_40m["less55db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less55db_h81m/tileset.json",
    show: false
}));
pointcloud_40m["less60db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less60db_h81m/tileset.json",
    show: false
}));
pointcloud_40m["less65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less65db_h81m/tileset.json",
    show: false
}));
pointcloud_40m["more65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_more65db_h81m/tileset.json",
    show: false
}));

pointcloud_40m["less25db"].style = new Cesium.Cesium3DTileStyle({
    color: color_one,
    pointSize: 2.5,
});
pointcloud_40m["less50db"].style = new Cesium.Cesium3DTileStyle({
    color: color_six,
    pointSize: 5,
});
pointcloud_40m["less55db"].style = new Cesium.Cesium3DTileStyle({
    color: color_seven,
    pointSize: 6.5,
});
pointcloud_40m["less60db"].style = new Cesium.Cesium3DTileStyle({
    color: color_eight,
    pointSize: 8,
});
pointcloud_40m["less65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_nine,
    pointSize: 9,
});
pointcloud_40m["more65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_ten,
    pointSize: 10,
});


var pointcloud_60m = [];
pointcloud_60m["less25db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less25db_h101m/tileset.json",
    show: false
}));
pointcloud_60m["less50db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less50db_h101m/tileset.json",
    show: false
}));
pointcloud_60m["less55db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less55db_h101m/tileset.json",
    show: false
}));
pointcloud_60m["less60db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less60db_h101m/tileset.json",
    show: false
}));
pointcloud_60m["less65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less65db_h101m/tileset.json",
    show: false
}));
pointcloud_60m["more65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_more65db_h101m/tileset.json",
    show: false
}));

pointcloud_60m["less25db"].style = new Cesium.Cesium3DTileStyle({
    color: color_one,
    pointSize: 2.5,
});
pointcloud_60m["less50db"].style = new Cesium.Cesium3DTileStyle({
    color: color_six,
    pointSize: 5,
});
pointcloud_60m["less55db"].style = new Cesium.Cesium3DTileStyle({
    color: color_seven,
    pointSize: 6.5,
});
pointcloud_60m["less60db"].style = new Cesium.Cesium3DTileStyle({
    color: color_eight,
    pointSize: 8,
});
pointcloud_60m["less65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_nine,
    pointSize: 9,
});
pointcloud_60m["more65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_ten,
    pointSize: 10,
});

var pointcloud_80m = [];
pointcloud_80m["less25db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less25db_h121m/tileset.json",
    show: false
}));
pointcloud_80m["less50db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less50db_h121m/tileset.json",
    show: false
}));
pointcloud_80m["less55db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less55db_h121m/tileset.json",
    show: false
}));
pointcloud_80m["less60db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less60db_h121m/tileset.json",
    show: false
}));
pointcloud_80m["less65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_less65db_h121m/tileset.json",
    show: false
}));
pointcloud_80m["more65db"] = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "noise_modelling/2024_09_18/point_cloud/tileset_more65db_h121m/tileset.json",
    show: false
}));

pointcloud_80m["less25db"].style = new Cesium.Cesium3DTileStyle({
    color: color_one,
    pointSize: 2.5,
});
pointcloud_80m["less50db"].style = new Cesium.Cesium3DTileStyle({
    color: color_six,
    pointSize: 5,
});
pointcloud_80m["less55db"].style = new Cesium.Cesium3DTileStyle({
    color: color_seven,
    pointSize: 6.5,
});
pointcloud_80m["less60db"].style = new Cesium.Cesium3DTileStyle({
    color: color_eight,
    pointSize: 8,
});
pointcloud_80m["less65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_nine,
    pointSize: 9,
});
pointcloud_80m["more65db"].style = new Cesium.Cesium3DTileStyle({
    color: color_ten,
    pointSize: 10,
});

function toggleLegend(isChecked) {
    if (isChecked) {
        $('#noise-legend-3d').show();
    } else {
        // hide the legend if all checkboxes with class "threeDNoiseCheckbox" are unchecked
        if ($('.threeDNoiseCheckbox:checked').length == 0) {
            $('#noise-legend-3d').hide();
        }
    }
}

$(document).ready(function () {
    $('#pointCloudGround_Checkbox').change(function() {
        // Check if checkbox is checked
        var isChecked = $(this).is(':checked');
        toggleLegend(isChecked)
        // Toggle visibility for each point cloud tileset
        for (var key in pointcloud_4m) {
            if (pointcloud_4m.hasOwnProperty(key)) {
                pointcloud_4m[key].show = isChecked;
            }
        }
    });
    $('#pointCloud20m_Checkbox').change(function() {
        // Check if checkbox is checked
        var isChecked = $(this).is(':checked');
        toggleLegend(isChecked)
        // Toggle visibility for each point cloud tileset
        for (var key in pointcloud_20m) {
            if (pointcloud_20m.hasOwnProperty(key)) {
                pointcloud_20m[key].show = isChecked;
            }
        }
    });
    $('#pointCloud40m_Checkbox').change(function() {
        // Check if checkbox is checked
        var isChecked = $(this).is(':checked');
        toggleLegend(isChecked)
        // Toggle visibility for each point cloud tileset
        for (var key in pointcloud_40m) {
            if (pointcloud_40m.hasOwnProperty(key)) {
                pointcloud_40m[key].show = isChecked;
            }
        }
    });
    $('#pointCloud60m_Checkbox').change(function() {
        // Check if checkbox is checked
        var isChecked = $(this).is(':checked');
        toggleLegend(isChecked)
        // Toggle visibility for each point cloud tileset
        for (var key in pointcloud_60m) {
            if (pointcloud_60m.hasOwnProperty(key)) {
                pointcloud_60m[key].show = isChecked;
            }
        }
    });
    $('#pointCloud80m_Checkbox').change(function() {
        // Check if checkbox is checked
        var isChecked = $(this).is(':checked');
        toggleLegend(isChecked)
        // Toggle visibility for each point cloud tileset
        for (var key in pointcloud_80m) {
            if (pointcloud_80m.hasOwnProperty(key)) {
                pointcloud_80m[key].show = isChecked;
            }
        }
    });
});
