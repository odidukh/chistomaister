import { useState } from 'react';

export default function useQuestionModal() {
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    const handleQuestionClose = () => setShowQuestionModal(false);
    const handleQuestionShow = () => setShowQuestionModal(true);

    return {
        showQuestionModal,
        handleQuestionClose,
        handleQuestionShow,
    };
}
