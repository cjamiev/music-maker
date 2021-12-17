import { useCallback, useState, useEffect } from 'react';

const useDrag = (ref, id, onDrag) => {
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = useCallback((e) => {
    if(e.target.getAttribute('data-testid') === id) {
      setIsDragging(true);
    }
  },[id]);

  const handlePointerUp = useCallback((e) => {
    setIsDragging(false);
  },[]);

  const handlePointerMove = useCallback((e) => {
    if (isDragging) {
      onDrag(e);
    }
  },[isDragging, onDrag]);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('pointerdown', handlePointerDown);
      element.addEventListener('pointerup', handlePointerUp);
      element.addEventListener('pointermove', handlePointerMove);

      return () => {
        element.removeEventListener('pointerdown', handlePointerDown);
        element.removeEventListener('pointerup', handlePointerUp);
        element.removeEventListener('pointermove', handlePointerMove);
      };
    }

    return;
  }, [handlePointerDown, handlePointerMove, handlePointerUp, isDragging, ref]);

  return { isDragging };
};

export default useDrag;
