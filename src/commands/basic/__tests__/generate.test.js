jest.mock('node-banner');
jest.mock('fs');
jest.mock('../../../utils/messages');
jest.mock('../component');
jest.mock('../../../utils/exec');
jest.mock('../../../utils/validate');
jest.mock('../../../utils/projectConfig');
jest.mock('../../../utils/fs');
import showBanner from 'node-banner';
import fs from 'fs';
import generateComponent from '../component';
import messages from '../../../utils/messages';
import generateFile from '../generate';

describe('Generate unit test', () => {
  describe('Initial checks', () => {
    test('Call generate component when server does not exists', async () => {
      fs.existsSync.mockReturnValue(false);
      showBanner.mockResolvedValue();
      messages.checkIfConfigFileExists.mockReturnValue();
      await generateFile();
      expect(generateComponent).toHaveBeenCalled();
      expect(showBanner).toHaveBeenCalled();
      expect(messages.checkIfConfigFileExists).toHaveBeenCalled();
    });
    test.todo('Call generate component when server models does not exists');
  });

  describe('Checking types', () => {
    test.todo('Call generate component when type includes component string');

    test.todo(
      'Should try to create graphql and model dir when template is GraphQl',
    );
    test.todo('Should write route files when template is not GraphQl');
    test.todo(
      'Should exec is npm install if is configured server does not exists',
    );
  });

  describe('Complete intialization', () => {
    test.todo(
      'Should go through the process of writing the rest of the generate file if all is good ',
    );
  });

  test.todo('');
});
