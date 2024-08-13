import React, { useState, useEffect } from "react";
import "./modal.css";

const CustomModal = ({ isOpen, onClose, children }) => {


    const [showClass, setShowClass] = useState(false)
    const [closing, setClosing] = useState(false)

    console.log(showClass, isOpen, 567890)

    useEffect(() => {
        if (isOpen) {
            setClosing(false)
            setShowClass(true)
        }
        else {
            setClosing(true)
            setTimeout(() => setShowClass(false), 100)
        }
    }, [isOpen])

    if (!isOpen && !showClass) return null;


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-content ${showClass && !closing && 'show'}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;
