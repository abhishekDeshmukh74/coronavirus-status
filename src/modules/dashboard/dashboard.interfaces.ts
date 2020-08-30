export interface AllData {
  objectIdFieldName: string;
  uniqueIdField: UniqueIDField;
  globalIdFieldName: string;
  geometryType: string;
  spatialReference: SpatialReference;
  fields: Field[];
  exceededTransferLimit: boolean;
  features: Feature[];
}

export interface Feature {
  attributes: Attributes;
}

export interface Attributes {
  OBJECTID: number;
  Country_Region: string;
  Last_Update: number;
  Lat: number;
  Long_: number;
  Confirmed: number;
  Deaths: number;
  Recovered: number | null;
  Active: number;
}

export interface Field {
  name: string;
  type: string;
  alias: string;
  sqlType: string;
  domain: null;
  defaultValue: null;
  length?: number;
}

export interface SpatialReference {
  wkid: number;
  latestWkid: number;
}

export interface UniqueIDField {
  name: string;
  isSystemMaintained: boolean;
}
