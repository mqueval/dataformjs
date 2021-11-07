declare namespace Property {
  // default
  type ContentDistribution =
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  type ContentPosition = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
  type CustomIndent = string;
  type Globals = 'inherit' | 'initial' | 'unset';
  type GridLine = 'auto' | CustomIndent | number | string;
  type Length = string;
  type OverflowPosition = 'unsafe' | 'safe';
  type Percentage = number;
  type SelfPosition = ContentPosition | 'self-start' | 'self-end';
  type Width =
    | Globals
    | Length
    | Percentage
    | 'auto'
    | 'fill'
    | 'max-content'
    | 'min-content'
    | 'fit-content';

  // shorthand
  type ColAuto = boolean;
  type ColSpan = 'full' | number;
  type RowAuto = boolean;
  type RowSpan = 'full' | number;

  // longhand
  type AlignContent =
    | Globals
    | 'normal'
    | ContentDistribution
    | OverflowPosition
    | ContentPosition;
  type AlignItems =
    | Globals
    | 'normal'
    | 'stretch'
    | 'baseline'
    | OverflowPosition
    | SelfPosition;
  type ColumnGap = Globals | 'normal' | Length | Percentage;
  type Flex = Globals | 'none' | number | FlexBasis;
  type FlexBasis = Globals | Width | 'content';
  type FlexDirection =
    | Globals
    | 'column'
    | 'row'
    | 'column-reverse'
    | 'row-reverse';
  type FlexFlow =
    | Globals
    | FlexDirection
    | FlexWrap
    | 'row-nowrap'
    | 'column-wrap'
    | 'column-reverse-wrap-reverse';
  type FlexGrow = Globals | number;
  type FlexShrink = Globals | number;
  type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
  type Gap = Globals | Length | Percentage;
  type GridColumn = Globals | GridLine;
  type GridColumnEnd = Globals | GridLine;
  type GridColumnStart = Globals | GridLine;
  type GridRow = Globals | GridLine;
  type GridRowEnd = Globals | GridLine;
  type GridRowStart = Globals | GridLine;
  type GridAutoFlow =
    | Globals
    | 'row'
    | 'column'
    | 'dense'
    | 'row-dense'
    | 'column-dense';
  type GridTemplateAreas = Globals | 'none' | string;
  type GridTemplateColumns =
    | Globals
    | 'min-content'
    | 'max-content'
    | 'auto'
    | Length
    | Percentage
    | Flex;
  type GridTemplateRows =
    | Globals
    | 'min-content'
    | 'max-content'
    | 'auto'
    | Length
    | Percentage
    | Flex;
  type JustifyContent =
    | Globals
    | 'normal'
    | 'left'
    | 'right'
    | ContentDistribution
    | ContentPosition
    | OverflowPosition;
  type JustifyItems =
    | Globals
    | 'auto'
    | 'normal'
    | 'stretch'
    | 'baseline'
    | OverflowPosition
    | SelfPosition;
  type JustifySelf =
    | Globals
    | 'auto'
    | 'normal'
    | 'stretch'
    | 'baseline'
    | OverflowPosition
    | SelfPosition;
  type Order = Globals | number;
  type RowGap = Globals | 'normal' | Length | Percentage;
  type Space = number;
}
