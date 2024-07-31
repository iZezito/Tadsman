// components/JsonViewer.js
import React from 'react';
import {formatJson} from '../../lib/utils';

interface JsonViewerProps {
  src: object;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ src }) => {
  const formattedJson = formatJson(src);

  return (
    <div className="bg-gray-900 overflow-y-scroll max-h-screen">
      <pre className="text-sm text-wrap" dangerouslySetInnerHTML={{ __html: formattedJson }} />
    </div>
  );
};

export default JsonViewer;
