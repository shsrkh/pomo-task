import classNames from "classnames";

import { Icon } from "src/shared/components/Icon";
import { Text } from 'src/shared/components/Text';

import { EIcons } from "src/shared/components/Icon/icon.interface";
import { EColors } from "src/shared/components/Text/text.interface";

import styles from './menuitemslist.module.css';
import { generateId } from "src/utils/react/generateRandomIndex";

export const LIST_DEFAULT = [
  {
    As: 'button' as const,
    element:
    <>
      <Icon name={EIcons.addMenuIcon} size={16}/>
      <Text mobileSize={12} size={16} color={EColors.grey99}>Increase</Text>
    </>,
    className: classNames(styles.menuItem),
    dataAction: 'UpTime',
  },
  {
    As: 'button' as const,
    element:
    <>
      <Icon name={EIcons.downMenuIcon} size={16}/>
      <Text mobileSize={12} size={16} color={EColors.grey99}>Decrease</Text>
    </>,
    className: classNames(styles.menuItem),
    dataAction: 'DownTime',
  },
  {
    As: 'button' as const,
    element:
    <>
      <Icon name={EIcons.editMenuIcon} size={16}/>
      <Text mobileSize={12} size={16} color={EColors.grey99}>Edit</Text>
    </>,
    className: styles.menuItem,
    dataAction: 'EditTask',
  },
  {
    As: 'button' as const,
    element:
      <>
        <Icon name={EIcons.deleteMenuIcon} size={16}/>
        <Text mobileSize={12} size={16} color={EColors.grey99}>Delete</Text>
      </>,
    className: classNames(styles.menuItem),
    dataAction: 'DeleteTask',
  },
].map(generateId);
