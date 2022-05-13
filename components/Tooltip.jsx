import React, {useState} from 'react';

const Tooltip = ({ children, title }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div className={`${show ? 'block' : 'hidden'} bg-black text-white rounded absolute top-10 z-50 p-2 -translate-x-1/3`}>
        {title}
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;