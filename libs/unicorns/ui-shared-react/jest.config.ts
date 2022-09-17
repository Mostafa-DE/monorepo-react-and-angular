/* eslint-disable */
export default {
  displayName: 'unicorns-ui-shared-react',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/unicorns/ui-shared-react',
};
