"use client";

import { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { LuCopy, LuCopyCheck } from "react-icons/lu";

type Props = { 
  text: string;
}


const CopyToClipboardButton = ({ text }: Props ) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy text to clipboard', error);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, 30000); // 30000 ms = 30 seconds
    }
    return () => clearTimeout(timer);
  }, [isCopied]);
  
  return (
    <div>
      <button onClick={handleCopyClick}>
        {isCopied ? <LuCopyCheck className='h-8 w-8 delay-150 duration-300 text-indigo-400'/> : <LuCopy className='h-8 w-8 delay-150 duration-300 text-white'/> }
      </button>
    </div>
  );
};

export default CopyToClipboardButton;