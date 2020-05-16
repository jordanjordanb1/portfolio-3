import React from 'react';
import { Universal } from '@shopify/react-google-analytics';
import config from '../../config/config';

declare global {
  interface Window {
    ga: any;
  }
}

export default class Analytics {
  static build() {
    return (
      <Universal
        account="UA-152948142-1"
        domain="jordanbarbosa.com"
        // @ts-ignore
        onError={this.gAnalyticsError}
        // @ts-ignore
        onLoad={this.gAnalyticsLoad}
        debug={config.isDevelopment}
      />
    );
  }

  static setPage(path: string) {
    if (this.checkGAExistsOnGlobals()) {
      window.ga('set', {
        page: path,
      });
      window.ga('send', 'pageview');
    }
  }

  static onClick(eventName: string) {
    if (this.checkGAExistsOnGlobals()) {
      window.ga('send', 'event', `${eventName}`, 'click');
    }
  }

  // Checks if window.ga already exists
  static checkGAExistsOnGlobals() {
    return window.ga ? true : false;
  }

  // Renders console error if GAnalytics couldn't load
  static gAnalyticsError() {
    console.error('Analytics failed to load...');
  }

  // Sets first page for GAnalytics
  static gAnalyticsLoad(ga: Function) {
    ga('set', { page: window.location.pathname });
    ga('send', 'pageview');
  }
}
