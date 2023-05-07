'use strict';
import { echartsLayer } from 'insight-iclient-leaflet';

module.exports = publicPackage;

function publicPackage() {
    console.log("echartsLayer", echartsLayer({}))
    return "Hello from publicPackage";
}
