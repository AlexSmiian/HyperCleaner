'use client';

declare const window: Window &
  typeof globalThis & {
    google_tag_data: {
      glBridge: {
        generate: ({
          _ga,
          _ga_CSF8YKE9Y3,
        }: {
          _ga: string | undefined;
          _ga_CSF8YKE9Y3: string | undefined;
        }) => void;
      };
    };
  };

export function generateGl() {
  if (typeof window !== 'undefined') {
    const getCookiebyName = function (name: string) {
      const pair = document.cookie.match(new RegExp(name + '=([^;]+)'))!;

      if (pair && pair[1]) {
        return pair[1].match(/GA1\.[0-9]\.(.+)/)![1];
      }
      return undefined;
    };

    return window.google_tag_data?.glBridge?.generate({
      _ga: getCookiebyName('_ga'),
      _ga_CSF8YKE9Y3: getCookiebyName('_gid'),
    });
  }

  return null;
}

export default generateGl;