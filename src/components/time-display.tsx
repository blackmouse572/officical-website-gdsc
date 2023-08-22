'use client';
import clsx from 'clsx';
import { isDate } from 'date-fns';
import { useMemo } from 'react';

type Props = {
  time: Date | string;
  maxTimeRelative?: number;
  locate?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function TimeDisplay({ time, maxTimeRelative, className, locate = 'en-US', ...props }: Props) {
  const timeLocate = useMemo(() => {
    let _time = '';
    if (time instanceof String && isDate(time)) {
      _time = time.toLocaleString(locate);
    }

    //If maxTimeRelative is set, check if the time is within the range
    if (maxTimeRelative) {
      const maxTime = new Date();
      maxTime.setDate(maxTime.getDate() - maxTimeRelative);
      if (time < maxTime) {
        _time = time.toLocaleString(locate);
      }
    }

    return _time;
  }, [locate, maxTimeRelative, time]);
  return (
    <p className={clsx(className, 'text-black font-medium')} {...props}>
      {timeLocate}
    </p>
  );
}

export default TimeDisplay;
