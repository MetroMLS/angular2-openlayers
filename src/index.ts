import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MapComponent, ViewComponent,
  LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent,
  SourceBingmapsComponent, SourceOsmComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, SourceTileWMSComponent,
  FeatureComponent,
  GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent,
  CollectionCoordinatesComponent, CoordinateComponent,
  StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent,
  ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent,
  ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent,
  ControlZoomToExtentComponent, DefaultControlComponent,  ControlComponent,
  FormatMVTComponent, FormatGeoJSONComponent,
  TileGridComponent,
  DefaultInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent,
  DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent,
  DragPanInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent,
  OverlayComponent,
  ContentComponent,
  AttributionComponent,
  AttributionsComponent
} from './components';

export * from './components';

const COMPONENTS = [
  MapComponent,

  ViewComponent,

  LayerTileComponent,
  LayerVectorComponent,
  LayerVectorTileComponent,

  SourceOsmComponent,
  SourceBingmapsComponent,
  SourceVectorComponent,
  SourceXYZComponent,
  SourceVectorTileComponent,
  SourceTileWMSComponent,

  FeatureComponent,
  GeometryLinestringComponent,
  GeometryPointComponent,
  GeometryPolygonComponent,
  CoordinateComponent,
  CollectionCoordinatesComponent,

  StyleComponent,
  StyleCircleComponent,
  StyleFillComponent,
  StyleIconComponent,
  StyleStrokeComponent,
  StyleTextComponent,

  DefaultControlComponent,
  ControlComponent,
  ControlAttributionComponent,
  ControlFullScreenComponent,
  ControlMousePositionComponent,
  ControlOverviewMapComponent,
  ControlRotateComponent,
  ControlScaleLineComponent,
  ControlZoomComponent,
  ControlZoomSliderComponent,
  ControlZoomToExtentComponent,

  FormatMVTComponent,
  FormatGeoJSONComponent,
  TileGridComponent,

  DefaultInteractionComponent,
  DoubleClickZoomInteractionComponent,
  DragAndDropInteractionComponent,
  DragBoxInteractionComponent,
  DragPanInteractionComponent,
  DragRotateInteractionComponent,
  DragRotateAndZoomInteractionComponent,
  DragZoomInteractionComponent,
  MouseWheelZoomInteractionComponent,

  OverlayComponent,
  ContentComponent,
  AttributionComponent,
  AttributionsComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class AngularOpenlayersModule {}
