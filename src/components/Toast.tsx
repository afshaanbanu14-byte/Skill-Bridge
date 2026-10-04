import React, { useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
        <Info className="w-4 h-4" />
      </div>
      <div className="flex-1 text-xs sm:text-sm text-slate-200 leading-snug">
        <span className="font-bold text-white block mb-0.5">Prototype Note</span>
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
