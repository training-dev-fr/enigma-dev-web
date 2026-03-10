import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import "./Modal.css"
import { X } from "lucide-react";

const Modal = forwardRef(({ children }, ref) => {
    const backdropRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [nativeCloseEnabled, setNativeCloseEnabled] = useState(true);

    const close = () => {
        if (nativeCloseEnabled) {
            setIsOpen(false)
        }
    }

    const handleCloseBackdrop = (e) => {
        if (e.target === backdropRef.current) {
            close()
        }
    }

    const disableNativeClose = () => {
        setNativeCloseEnabled(false);
    }

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        disableNativeClose: disableNativeClose
    }), []);



    return (
        <>
            {isOpen &&
                <div className="modal" onClick={handleCloseBackdrop} ref={backdropRef}>
                    <div className="modal-content">
                        {nativeCloseEnabled &&
                            <X onClick={close} className="close-btn" />
                        }
                        {children}
                    </div>
                </div>
            }
        </>
    )
})

export default Modal;