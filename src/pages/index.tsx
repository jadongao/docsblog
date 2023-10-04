import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  useEffect(() => {
    history.replace('/docs/intro');
  }, []);

  return (
    <Layout>
      <main>
        <Link to='/docs/intro'>文档页面</Link>
      </main>
    </Layout>
  );
}
