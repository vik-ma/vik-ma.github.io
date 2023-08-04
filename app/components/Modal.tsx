"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import CloseButton from "../icons/CloseButton";
import { useModalContext } from "../context/ModalContext";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { isEnlargeModalOpen } = useModalContext();

  const onDismiss = useCallback(() => {
    setTimeout(() => {
      router.back();
    }, 100);
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isEnlargeModalOpen) onDismiss();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onDismiss, isEnlargeModalOpen]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 max-[870px]:pt-12 max-[870px]:pb-5 z-10 flex items-center justify-center bg-black/70 animate-fade"
      onClick={onClick}
    >
      <div className="min-[871px]:hidden fixed flex flex-row justify-end w-[340px] min-[491px]:w-[420px] sm:w-[520px] md:w-[600px] top-1.5">
        <div className="align-middle">
          <button
            className="rounded-lg py-1 pr-1.5 pl-2.5 bg-[#202020] hover:bg-stone-700 border border-[#464646cc]"
            onClick={() => onDismiss()}
          >
            <span className="inline-block align-middle font-bold text-xl text-stone-200">
              Close
            </span>
            <span className="inline-block align-middle ml-1">
              <CloseButton />
            </span>
          </button>
        </div>
      </div>
      <div
        ref={wrapper}
        className="relative max-[870px]:h-full max-[870px]:overflow-auto"
      >
        <div className="rounded-xl project-page-container animate-modal">
          <div className="max-[870px]:hidden absolute align-middle -top-11 right-0">
            <button
              className="rounded-lg py-1 pr-1.5 pl-2.5 bg-[#202020] hover:bg-stone-700 border border-[#464646cc]"
              onClick={() => onDismiss()}
            >
              <span className="inline-block align-middle font-bold text-xl text-stone-200">
                Close
              </span>
              <span className="inline-block align-middle ml-1">
                <CloseButton />
              </span>
            </button>
          </div>
          <div className="px-4 py-3 min-[871px]:py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
