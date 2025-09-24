import { isTablet, isMobile } from 'react-device-detect';

export function getDeviceType() {
  if (isMobile) {
    return 'mobile';
  } else if (isTablet) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}
