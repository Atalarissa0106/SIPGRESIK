ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([111.388705, -7.355715, 114.490937, -5.578101]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDVI_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_1_0.png" /> Kehijauan Sangat rendah <br />\
    <img src="styles/legend/NDVI_1_1.png" /> Lahan Tidak bervegetasi<br />\
    <img src="styles/legend/NDVI_1_2.png" /> Kehujauan Sedang<br />\
    <img src="styles/legend/NDVI_1_3.png" /> Kehijauan Rendah<br />\
    <img src="styles/legend/NDVI_1_4.png" /> Kehijauan Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });
var lyr_LST_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST<br />\
    <img src="styles/legend/LST_2_0.png" /> Rendah <br />\
    <img src="styles/legend/LST_2_1.png" /> Normal<br />\
    <img src="styles/legend/LST_2_2.png" /> Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });
var lyr_UHI_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'UHI <br />\
    <img src="styles/legend/UHI_3_0.png" /> Rendah<br />\
    <img src="styles/legend/UHI_3_1.png" /> Sangat tinggi<br />\
    <img src="styles/legend/UHI_3_2.png" /> Normal<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/UHI_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });
var lyr_NDBI_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDBI<br />\
    <img src="styles/legend/NDBI_4_0.png" /> kerapatan bangunan rendah<br />\
    <img src="styles/legend/NDBI_4_1.png" /> non bangunan<br />\
    <img src="styles/legend/NDBI_4_2.png" /> kerapatan bangunan tinggi<br />\
    <img src="styles/legend/NDBI_4_3.png" /> kerapan bangunan sedang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDBI_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_NDVI_1.setVisible(true);lyr_LST_2.setVisible(true);lyr_UHI_3.setVisible(true);lyr_NDBI_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NDVI_1,lyr_LST_2,lyr_UHI_3,lyr_NDBI_4];
