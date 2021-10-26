const GENERAL = {
  LandingPage: '/',
  Stories: '/stories',
  STORIES: '/stories',
  INDEX: '/index',
  MAP: '/map',
  PODCAST: '/podcast',
  SIGN_UP: '/signup',
  SUPPORT_US: '/support-us',
  SHOP: '/shop',
  WCH_HOME: '/WCH-home',
  TAG: '/tag/:tagId/:tagName',
  ARTICLE: '/article/:id/:articleName',
};

const admin = '/admin';
const ADMIN = {
  AWAITING_REVIEW: `${admin}/awaiting-review`,
  PENDING_ARTICLE: `${admin}/edit/:articleId`,
  REJECTED: `${admin}/rejected`,
  APPROVED: `${admin}/approved`,
};

const EXTERNAL = {
  TERMS_OF_USE: 'www.google.com/',
  PRIVACY_POLICY: 'www.google.com/',
  INSTAGRAM: 'https://www.instagram.com/workingclasshistory/',
  FACEBOOK: 'https://www.facebook.com/workingclasshistory/',
  TWITTER: 'https://twitter.com/wrkclasshistory',
  TUMBLER: 'https://workingclasshistory.tumblr.com/',
  MASTODON: 'https://mastodon.social/@workingclasshistory',
  YOUTUBE: 'https://www.youtube.com/c/workingclasshistory',
};

export { GENERAL, EXTERNAL, ADMIN };
