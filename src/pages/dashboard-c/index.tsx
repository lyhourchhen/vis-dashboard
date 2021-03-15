import React, { useEffect, useState } from 'react';
import Layout from '@/layouts/layout';
import { parse } from '@/components/x-plot/common/parse';
import { reportJSON } from '@/datas/dashboard-c';
import './index.less';

const SecondPage = () => {
  const [json, updateJson] = useState(reportJSON);

  useEffect(() => {
    const observer = new MutationObserver(([record]) => {
      if (
        record.target.nodeName === 'BODY' &&
        record.attributeName === 'data-theme'
      ) {
        const theme = document.body.dataset.theme;
        updateJson({ ...json, theme });
      }
    });

    observer.observe(document.body, { attributes: true });
  }, []);

  return (
    <Layout siteTitle="消息中台大屏">
      <div className="x-canvas">{parse(json)}</div>
    </Layout>
  );
};

export default SecondPage;
