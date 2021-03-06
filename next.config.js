/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const nextConfig = withPWA({
/*   */
reactStrictMode: true,
 pwa:{
  dest:'public',
  register: true,
  skipWaiting: true,
  disable: false, /* process.env.NODE_ENV === 'development' */
  scope: '/', 
  sw: 'sw.js'

},


  reactStrictMode: true,
})



module.exports = nextConfig


