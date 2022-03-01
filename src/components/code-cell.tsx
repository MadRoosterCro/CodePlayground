import { useState } from 'react';
import { CodeEditor } from './code-editor';
import { Preview } from './preview';
import { bundle } from '../bundler';

export const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <>
      <CodeEditor
        initialValue={'const a = 2;'}
        onChange={(value) => setInput(value)}
      />
      <>
        <button onClick={onClick}>Submit</button>
      </>
      <Preview code={code} />
    </>
  );
};
