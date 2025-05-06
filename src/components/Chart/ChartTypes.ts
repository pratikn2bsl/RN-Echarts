export type ChartProps = {
  option: ChartOptions;
  renderer?: ChartRenderer;
}

interface ChartOptions {
  xAxis: {
      type: string | undefined;
      data: string[];
  };
  yAxis: {
      type: string | undefined;
  };
  tooltip?: {
      trigger: string | undefined;
  };
  series: {
      data: number[];
      type: string | undefined;
  }[];
  textStyle?: {
      fontFamily: string | undefined;
  };
}

export type ChartRenderer = 'svg' | 'skia';
