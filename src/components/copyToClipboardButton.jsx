import ClipboardJS from 'clipboard';
import { useEffect, useRef } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CopyToClipboardButton = ({ textToCopy }) => {
  const copyButtonRef = useRef();

  useEffect(() => {
    const clipboard = new ClipboardJS(copyButtonRef.current, {
      text: () => textToCopy,
    });

    clipboard.on('success', (e) => {
      alert('Text copied to clipboard:', e.text);
      e.clearSelection();
    });

    clipboard.on('error', (e) => {
      console.error('Failed to copy text to clipboard:', e.action);
    });

    return () => {
      clipboard.destroy();
    };
  }, [textToCopy]);

  return (
    <p ref={copyButtonRef} className='flex'>
      <p className="text-cyan-400 cursor-pointer px-1"> 01816575225 </p> <FaRegCopy className="inline-block mr-2" />
    </p>
  );
};

CopyToClipboardButton.propTypes = {
  textToCopy: PropTypes.string.isRequired,
};
export default CopyToClipboardButton;