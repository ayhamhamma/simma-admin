"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ConfirmationDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationDialog({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (isOpen) {
      // Prevent background scrolling when dialog is open
      document.body.style.overflow = 'hidden';
      console.log("Dialog opened with mounted state:", mounted, "title:", title);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, title]);

  useEffect(() => {
    console.log("ConfirmationDialog mount state changed:", mounted, "isOpen:", isOpen);
  }, [mounted, isOpen]);
  
  if (!isOpen || !mounted) {
    return null;
  }

  const handleConfirmClick = (e: React.MouseEvent) => {
    console.log("Confirm button clicked");
    e.preventDefault();
    e.stopPropagation();
    onConfirm();
  };
  
  const handleCancelClick = (e: React.MouseEvent) => {
    console.log("Cancel button clicked");
    e.preventDefault();
    e.stopPropagation();
    onCancel();
  };

  // Use createPortal to render the dialog at the document body level
  return createPortal(
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-75 z-[9999] overflow-y-auto" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
      onClick={handleCancelClick}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-2">
                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900" id="modal-title">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-row-reverse">
              <button
                type="button"
                className="ml-3 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={handleConfirmClick}
              >
                Yes, Delete
              </button>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
} 