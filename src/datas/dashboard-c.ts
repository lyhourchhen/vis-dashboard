const GAUGE_1 = {
  percent: 0.87,
  appendPadding: [0, 0, 8, 0],
  startAngle: -Math.PI,
  endAngle: 0,
  range: {
    color: 'l(0) 0:#0099FF 0.25:#09ADDF 0.75:#15C8B7 1:#1EDB9A',
  },
  indicator: false,
  statistic: {
    title: {
      formatter: () => '目标完成度',
      offsetY: 12,
      style: {
        color: '#000',
        opacity: 0.65,
        fontSize: '12px',
      },
    },
    content: {
      formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        color: '#000',
        opacity: 0.85,
        fontSize: '24px',
      },
    },
  },
};

export const reportJSON = {
  // theme: {
  //   background: 'rgba(24, 21, 64, 0.8)',
  // },
  layouts: {
    root: {
      lg: [
        { w: 7, h: 10, x: 0, y: 0, i: 'a' },
        { w: 17, h: 10, x: 7, y: 0, i: 'b' },
        { w: 7, h: 17, x: 17, y: 10, i: 'c' },
        { w: 11, h: 17, x: 0, y: 10, i: 'd' },
        { w: 6, h: 8, x: 11, y: 10, i: 'e' },
        { w: 6, h: 9, x: 11, y: 18, i: 'f' },
      ],
      xs: [
        { i: 'a', x: 0, y: 0, w: 12, h: 6 },
        { i: 'b', x: 0, y: 6, w: 12, h: 8 },
        { i: 'c', x: 7, y: 22, w: 5, h: 13 },
        { i: 'd', x: 0, y: 22, w: 7, h: 13 },
        { i: 'e', x: 0, y: 14, w: 6, h: 8 },
        { i: 'f', x: 6, y: 14, w: 6, h: 8 },
        { i: 'g', x: 6, y: 35, w: 6, h: 14 },
        { i: 'h', x: 0, y: 73, w: 6, h: 14 },
        { i: 'i', x: 0, y: 49, w: 12, h: 13 },
        { i: 'j', x: 0, y: 62, w: 12, h: 11 },
        { i: 'k', x: 6, y: 73, w: 6, h: 14 },
        { i: 'l', x: 0, y: 35, w: 6, h: 14 },
      ],
    },
  },
  content: {
    tag: 'panel',
    id: 'root',
    attributes: {},
    children: [
      {
        tag: 'line',
        id: 'a',
        attributes: {
          title: 'GOC成功率',
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
          smooth: true,
          meta: {
            date: {
              type: 'cat',
            },
            value: {
              min: null,
              max: 100,
            },
          },
          data:
            'https://gw.alipayobjects.com/os/antfincdn/m%24NjVqklDe/line-data-1.json',
        },
      },
      {
        tag: 'liquid',
        id: 'b',
        attributes: {
          title: 'AMP核心应用水位',
          measures: [
            'bentley',
            'sync',
            'im-receiver',
            'im-dispatcher',
            'imba-dispatcher',
          ],
          data: [
            {
              bentley: 0.14,
              sync: 0.17,
              'im-receiver': 0.15,
              'im-dispatcher': 0.13,
              'imba-dispatcher': 0.12,
            },
          ],
          options: [
            {
              // shape: 'diamond',
            },
          ],
        },
      },
      {
        tag: 'line',
        id: 'c',
        attributes: {
          title: '淘宝直播互动规模',
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
          smooth: true,
          meta: {
            date: {
              type: 'cat',
            },
          },
          data:
            'https://gw.alipayobjects.com/os/antfincdn/hFF3OS%24lmk/line-data-2.json',
        },
      },
      {
        tag: 'line',
        id: 'd',
        attributes: {
          title: '专属客服消息(分钟)',
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
          smooth: true,
          meta: {
            date: {
              type: 'cat',
            },
            value: {
              min: null,
              max: 100,
            },
          },
          data:
            'https://gw.alipayobjects.com/os/antfincdn/m%24NjVqklDe/line-data-1.json',
        },
      },
      {
        tag: 'gauge',
        id: 'e',
        attributes: {
          title: '淘宝直播互动规模',
          options: [
            {
              ...GAUGE_1,
            },
          ],
        },
      },
      {
        tag: 'line',
        id: 'f',
        attributes: {
          title: '淘宝直播互动规模',
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
          smooth: true,
          meta: {
            date: {
              type: 'cat',
            },
            value: {
              min: null,
              max: 100,
            },
          },
          data:
            'https://gw.alipayobjects.com/os/antfincdn/m%24NjVqklDe/line-data-1.json',
        },
      },
    ],
  },
};
