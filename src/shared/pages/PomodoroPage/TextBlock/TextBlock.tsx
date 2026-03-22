import { Text } from 'src/shared/components/Text';

import { EColors } from 'src/shared/components/Text/text.interface';

import styles from './textblock.module.css';

export const TextBlock = () => {
  return (
    <>
      <Text As='h2' mobileSize={20} size={24} color={EColors.black}>Hooray! Now you can start working:</Text>
      <ul className={styles.list}>
        <li>
          <Text mobileSize={14} size={16} color={EColors.black}>
            Choose a category and enter the name of your current task
          </Text>
        </li>
        <li>
          <Text mobileSize={14} size={16} color={EColors.black}>
            Start the timer (pomodoro)
          </Text>
        </li>
        <li>
          <Text mobileSize={14} size={16} color={EColors.black}>
            Work until the pomodoro rings
          </Text>
        </li>
        <li>
          <Text mobileSize={14} size={16} color={EColors.black}>
            Take a short break (3-5 minutes)
          </Text>
        </li>
        <li>
          <Text mobileSize={14} size={16} color={EColors.black}>
            Keep working pomodoro by pomodoro until the task is done. Every 4 pomodoros take a long break (15&#8209;30 minutes).
          </Text>
        </li>
      </ul>
    </>
  );
}
