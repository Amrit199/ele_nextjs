const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@hooks': `${prefix}/hooks`,
    '@helpers': `${prefix}/helpers`,
    '@api': `${prefix}/api`,
    '@assets': `${prefix}/assets`,
    '@pages': `${prefix}/pages`,
    '@store': `${prefix}/store`,
    '@constants': `${prefix}/constants`,
    '@types': `${prefix}/types`
  });
  
  module.exports = aliases;
  