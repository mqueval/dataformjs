import MarginProps from './margin';
import PaddingProps from './padding';

interface StylesProps extends MarginProps, PaddingProps {
  // shorthand
  col?: Property.GridColumn | Property.GridColumn[];
  colEnd?: Property.GridColumnEnd | Property.GridColumnEnd[];
  cols?: Property.GridTemplateColumns | Property.GridTemplateColumns[];
  colStart?: Property.GridColumnStart | Property.GridColumnStart[];
  content?: Property.AlignContent | Property.AlignContent[];
  direction?: Property.FlexDirection | Property.FlexDirection[];
  g?: Property.Gap | Property.Gap[];
  gX?: Property.RowGap | Property.RowGap[];
  gY?: Property.ColumnGap | Property.ColumnGap[];
  grow?: Property.FlexGrow | Property.FlexGrow[];
  flow?: Property.GridAutoFlow | Property.GridAutoFlow[];
  items?: Property.AlignItems | Property.AlignItems[];
  justify?: Property.JustifyContent | Property.JustifyContent[];
  row?: Property.GridRow | Property.GridRow[];
  rowEnd?: Property.GridRowEnd | Property.GridRowEnd[];
  rows?: Property.GridTemplateRows | Property.GridTemplateRows[];
  rowStart?: Property.GridRowStart | Property.GridRowStart[];
  self?: Property.AlignSelf | Property.AlignSelf[];
  shrink?: Property.FlexShrink | Property.FlexShrink[];
  wrap?: Property.FlexWrap | Property.FlexWrap[];

  // shortcut
  sX?: Property.Space | Property.Space[];
  sY?: Property.Space | Property.Space[];

  // longhand
  alignContent?: Property.AlignContent | Property.AlignContent[];
  alignItems?: Property.AlignItems | Property.AlignItems[];
  alignSelf?: Property.AlignSelf | Property.AlignSelf[];
  columnGap?: Property.ColumnGap | Property.ColumnGap[];
  flex?: Property.Flex | Property.Flex[];
  flexDirection?: Property.FlexDirection | Property.FlexDirection[];
  flexFlow?: Property.FlexFlow | Property.FlexFlow[];
  flexGrow?: Property.FlexGrow | Property.FlexGrow[];
  flexShrink?: Property.FlexShrink | Property.FlexShrink[];
  flexWrap?: Property.FlexWrap | Property.FlexWrap[];
  gap?: Property.Gap | Property.Gap[];
  gridAutoFlow?: Property.GridAutoFlow | Property.GridAutoFlow[];
  gridColumn?: Property.GridColumn | Property.GridColumn[];
  gridColumnEnd?: Property.GridColumnEnd | Property.GridColumnEnd[];
  gridColumnStart?: Property.GridColumnStart | Property.GridColumnStart[];
  gridRow?: Property.GridRow | Property.GridRow[];
  gridRowEnd?: Property.GridRowEnd | Property.GridRowEnd[];
  gridRowStart?: Property.GridRowStart | Property.GridRowStart[];
  gridTemplateColumns?:
    | Property.GridTemplateColumns
    | Property.GridTemplateColumns[];
  gridTemplateRows?: Property.GridTemplateRows | Property.GridTemplateRows[];
  justifyContent?: Property.JustifyContent | Property.JustifyContent[];
  justifyItems?: Property.JustifyItems | Property.JustifyItems[];
  justifySelf?: Property.JustifySelf | Property.JustifySelf[];
  order?: Property.Order | Property.Order[];
  rowGap?: Property.RowGap | Property.RowGap[];
}

export default StylesProps;
