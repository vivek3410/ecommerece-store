"use client";
import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [ismounted, setismounted] = useState(false);
    useEffect(() => {
        setismounted(true);
    }, []);
    if (!ismounted) return null;
    
    return (
        <>
            <PreviewModal />
        </>
    )
}

export default ModalProvider;