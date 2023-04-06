import { allClear } from '../operations/baseOperations';
import { equals } from '../operations/baseCalculations';
import { memoryClear, memoryRecall, memoryPlus, memoryMinus } from '../operations/memoryOperations';

const actions = { allClear, equals, memoryClear, memoryRecall, memoryPlus, memoryMinus };

export default actions;
