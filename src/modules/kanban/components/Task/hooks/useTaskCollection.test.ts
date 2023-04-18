/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { renderHook } from '@testing-library/react';
import { afterEach, describe, it, vi } from 'vitest';

import { useTaskCollection } from './useTaskCollection';

import { initialTasks } from '../data/initialTasks';

describe('useTaskCollection', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('deve retornar um objeto de coleção de tarefas inicial', () => {
    const spy = vi.spyOn(require('usehooks-ts'), 'useLocalStorage');
    const { result } = renderHook(() => useTaskCollection(true));
    const mockTasks = initialTasks(true);

    expect(spy.getMockName()).toEqual('useLocalStorage');
    expect(result.current[0]).toEqual(mockTasks);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
