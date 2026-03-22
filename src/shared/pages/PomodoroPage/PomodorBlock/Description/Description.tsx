import { Text } from 'src/shared/components/Text';

import { EColors } from 'src/shared/components/Text/text.interface';
import { IDescription } from './description.interface';

export const Description = ({ title = 'Enter task name', number = '' }: IDescription) => {
  return (
    <>
      {number.length !== 0 && (
        <Text As='p' mobileSize={14} size={16} color={EColors.grey99}>
          Task {number} -
          <Text mobileSize={14} size={16} color={EColors.black}> {title}</Text>
        </Text>
      )}
    </>
  );
}
