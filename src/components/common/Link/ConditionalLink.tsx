import React from 'react';
import { Link } from './Link';

type Props = React.ComponentPropsWithRef<typeof Link> & { condition: boolean };

export const ConditionalLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  Props
>(({ children, href, condition, ...props }, forwardRef) => (
  <>
    {condition ? (
      <Link href={href} passHref {...props} ref={forwardRef}>
        <a>{children}</a>
      </Link>
    ) : (
      <>{children}</>
    )}
  </>
));

ConditionalLink.displayName = 'ConditionalLink';
