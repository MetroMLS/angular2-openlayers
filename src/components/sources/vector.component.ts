import { Component, Host, Input, OnInit, forwardRef, ContentChild, AfterContentInit } from '@angular/core';
import { source, ProjectionLike, format } from 'openlayers';
import { LayerVectorComponent } from '../layers';
import { FormatComponent } from '../formats';
import { SourceComponent } from './source.component';


@Component({
  selector: 'aol-source-vector',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }
  ]
})
export class SourceVectorComponent extends SourceComponent implements AfterContentInit {
  instance: source.Vector;
  @Input() overlaps: boolean;
  @Input() useSpatialIndex: boolean;
  @Input() wrapX: boolean;
  @Input() url: string;

  @ContentChild(FormatComponent) formatComponent: FormatComponent;
  format: format.Feature;
  // @ContentChild(TileGridComponent) tileGridComponent: TileGridComponent;
  // tileGrid: tilegrid.TileGrid;

  constructor( @Host() layer: LayerVectorComponent) {
    super(layer);
  }
  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    // this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new source.Vector(this);
    this.host.instance.setSource(this.instance);
  }


  //  ngOnInit() {
  //    this.instance = new source.Vector(this);
  //    this.host.instance.setSource(this.instance);
  //  }
}
