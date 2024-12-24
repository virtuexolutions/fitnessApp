const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(getDefaultConfig(__dirname), {
    resolver: {
      assetExts: [
        'png',
        'jpg',
        'jpeg',
        'svg',
        'gif',
        'webp',
        'mp4',
        'mp3',
        'wav',
      ],
      sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
    },
  }),
);