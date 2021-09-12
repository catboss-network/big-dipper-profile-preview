// const isProd = process.env.NODE_ENV === 'production';

// module.exports = nextTranslate({
//   assetPrefix: isProd ? '/big-dipper-profile-preview/' : '',
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// });

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Use the prefix in production and not development.
  assetPrefix: isProd ? '/big-dipper-profile-preview/' : '',
};
