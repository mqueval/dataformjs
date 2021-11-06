declare namespace Property {
  type ColAuto = boolean;
  type ColEnd = 'auto' | number;
  type ColSpan = 'full' | number;
  type ColStart = 'auto' | number;
  type Default = string | number;
  type Global = 'inherit' | 'initial' | 'unset';
  type GridCols = Global | string | number;
  type GridFlow =
    | Global
    | 'row'
    | 'column'
    | 'dense'
    | 'row-dense'
    | 'column-dense';
  type GridRows = Global | string | number;
  type RowAuto = boolean;
  type RowEnd = 'auto' | number;
  type RowSpan = 'full' | number;
  type RowStart = 'auto' | number;
}
