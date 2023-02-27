import { useState } from "react";

export default function useOrderModal() {
    const [showOrderModal, setShowOrderModal] = useState(false);
    
    const handleOrderClose = () => setShowOrderModal(false);
    const handleOrderShow = () => setShowOrderModal(true);
    
    return {
        showOrderModal,
        handleOrderClose,
        handleOrderShow,
    };
}
