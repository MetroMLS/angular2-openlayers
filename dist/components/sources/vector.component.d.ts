/// <reference types="openlayers" />
import { AfterContentInit } from '@angular/core';
import { source, format } from 'openlayers';
import { LayerVectorComponent } from '../layers';
import { FormatComponent } from '../formats';
import { SourceComponent } from './source.component';
export declare class SourceVectorComponent extends SourceComponent implements AfterContentInit {
    instance: source.Vector;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    url: string;
    formatComponent: FormatComponent;
    format: format.Feature;
    constructor(layer: LayerVectorComponent);
    ngAfterContentInit(): void;
}
