export default {
  isDevelopment: process.env.NODE_ENV === 'development' && true,
  getUrl: () => {
    return 'production'.includes(process.env.NODE_ENV) ? 'https://jordanbarbosa.com' : '';
  },
  getStatic: function () {
    return `${this.getUrl()}/static`;
  },
};
