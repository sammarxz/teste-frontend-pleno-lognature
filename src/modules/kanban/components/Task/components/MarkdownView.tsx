import React, { FC } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';

import styles from '@/styles/markdown-styles.module.css';

type MarkdownViewProps = {
  markdown: string;
};

export const MarkdownView: FC<MarkdownViewProps> = React.memo(
  function MarkdownView({ markdown }: MarkdownViewProps) {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkParse, rehypeStringify]}
        className={styles['markdown-body']}
      >
        {markdown}
      </ReactMarkdown>
    );
  }
);
