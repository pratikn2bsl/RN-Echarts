/* eslint-disable react/react-in-jsx-scope */
import { FC, useEffect, useRef } from 'react';
import { ChartProps } from './ChartTypes';
import * as echarts from 'echarts/core';
import { Dimensions, StyleSheet, View } from 'react-native';
import { BarChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';
import SvgChart, { SVGRenderer } from '../../svg/svgChart';

const E_HEIGHT = 250;
const E_WIDTH = Dimensions.get('screen').width;

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  // SkiaRenderer,
  // ...
  BarChart,
  LineChart,
]);

function RenderComponent({ option, theme }: any) {
  const svgRef = useRef<any>(null);

  useEffect(() => {
    let chart: any;
    if (svgRef.current) {
      chart = echarts.init(svgRef.current, theme, {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option, theme]);

  return <SvgChart ref={svgRef} useRNGH />;
}
const theme = 'light';
export const Chart: FC<ChartProps> = ({
  option,
}: ChartProps) => {
  return (
    <View style={styles.container}>
      <RenderComponent option={option} theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Chart;