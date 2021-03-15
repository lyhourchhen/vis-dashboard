import React, { useEffect, useState } from 'react';
import { Liquid, LiquidOptions } from '@antv/g2plot';
import * as _ from 'lodash';
import { Attributes, XComponentProps } from '@/types';
import { Header } from '@/components/x-plot/common/header';
import { UseG2Plot } from '@/components/x-plot/common/use-g2plot';
import './liquid.less';

type LiquidAttributes = Attributes & {
  /** 指标 */
  measures: string[];
  /** 元信息 */
  meta: Record<string, { alias?: string }>;
  /** 数据 */
  data: object[];
  options: LiquidOptions[];
  style?: object;
};

export const XLiquid: React.FC<
  XComponentProps<LiquidAttributes>
> = props => {
  const { attributes } = props;
  const { measures, data, style } = attributes;

  const [liquidOptions, updateOptions] = useState({ percent: null });
  const [selectedIdx, changeSelectedIdx] = useState(0);

  useEffect(() => {
    const selectOptions = attributes.options[selectedIdx];
    const theme = attributes.theme;
    updateOptions(_.assign({}, liquidOptions, selectOptions, { theme }));
  }, [attributes, selectedIdx]);

  return (
    <div data-type="liquid" className="full x-plot" style={style || {}}>
      <Header
        {...props}
        changeOption={changeSelectedIdx}
        selectedOption={selectedIdx}
      />
      <div style={{ display: 'flex' }} className="plot-container">
        {measures.map((measure, idx) => {
          const dataValue = _.get(data, ['0', measure]);
          return (
            <UseG2Plot
              key={`${idx}`}
              Ctor={Liquid}
              options={{
                ...liquidOptions,
                percent: dataValue,
              }}
              style={{ flex: 1, height: '100%' }}
            />
          );
        })}
      </div>
    </div>
  );
};
