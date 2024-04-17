// useClickAway.ts
import { useEffect, RefObject } from 'react';

export default function useClickAway(refs: RefObject<HTMLElement>[], closeModal: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (refs.every(ref => ref.current && !ref.current.contains(event.target as Node))) {
                closeModal();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [refs, closeModal]);
}
