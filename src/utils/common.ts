import get from 'lodash/get';

/**
 * Get extraclassnames from combination of className added to the
 * component
 * @param styles
 * @param className
 */
export const getExtraClasses = (styles: any, className?: string) => {
  if (!className) return '';
  const extraClasses = (className || '')
    .split(/\s/g)
    .filter(c => !!c)
    .map((c) => {
      if (typeof styles[c] !== 'undefined') {
        return styles[c];
      }
      return c;
    }).join(' ');
  return extraClasses;
};

