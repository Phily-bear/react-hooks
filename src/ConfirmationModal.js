import React from 'react';
function ConfirmationModal({ isOpen, onClose }, ref) {
  if (!isOpen) return null;
  return (
    <div className="modal" ref={ref}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button className="confirm-btn" onClick={onClose}>
          Yes
        </button>
        <button className="deny-btn" onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}

export default React.forwardRef(ConfirmationModal);
