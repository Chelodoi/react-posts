import { useMemo } from 'react';

export const usePagination = (totalPages) => {
  let pagesArray = useMemo(() => {
    const a = [];
    for (let i = 0; i < totalPages; i++) {
      a.push(i + 1);
    }
    return a;
  }, [totalPages]);
  return pagesArray;
};
