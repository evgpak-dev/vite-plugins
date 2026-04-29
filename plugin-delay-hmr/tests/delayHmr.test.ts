import { describe, it, expect } from 'vitest';
import { delayHMR } from '../plugins/delayHMR';

describe('delayHMR Plugin', () => {
  it('should delay the update by approximately the specified time', async () => {
    const delay = 1000;
    const plugin = delayHMR(delay);
    
    const mockModules = [{ id: 'module-1' }, { id: 'module-2' }];
    const mockCtx = {
      modules: mockModules,
    } as any;

    const start = Date.now();
    
    if (typeof plugin.handleHotUpdate === 'function') {
      const result = await plugin.handleHotUpdate(mockCtx);

      const duration = Date.now() - start;

      expect(duration).toBeGreaterThanOrEqual(delay);
      expect(result).toEqual(mockModules);
    }
  });
});