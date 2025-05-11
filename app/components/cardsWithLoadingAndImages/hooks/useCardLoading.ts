'use client';

import { useState } from 'react';

const useCardLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return { isLoading, setIsLoading };
};

export default useCardLoading;
