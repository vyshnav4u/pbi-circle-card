"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class CircleSettings {
  public circleColor: string = "white";
  public circleThickness: number = 2;
}
export class VisualSettings extends DataViewObjectsParser {
  public circle: CircleSettings = new CircleSettings();
}

// export class VisualSettings extends DataViewObjectsParser {
//   public dataPoint: dataPointSettings = new dataPointSettings();
// }

// export class dataPointSettings {
//   // Default color
//   public defaultColor: string = "";
//   // Show all
//   public showAllDataPoints: boolean = true;
//   // Fill
//   public fill: string = "";
//   // Color saturation
//   public fillRule: string = "";
//   // Text Size
//   public fontSize: number = 12;
// }
