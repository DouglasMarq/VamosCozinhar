'use client';

import { useState } from 'react';

const useCardLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return { isLoading, setIsLoading };
};

export default useCardLoading;
