import { Text } from 'src/shared/components/Text';

import { EColors } from "src/shared/components/Text/text.interface";
import { IList } from "./titleblock.interface";

export const LIST: IList[] = [
  {
    id: 'week',
    element: <Text mobileSize={12} size={16} color={EColors.black}>This week</Text>,
    dataAction: 'Week',
    isActive: true,
  },
  {
    id: 'lastweek',
    element: <Text mobileSize={12} size={16} color={EColors.black}>Last week</Text>,
    dataAction: 'LastWeek',
    isActive: false,
  },
  {
    id: 'twoweek',
    element: <Text mobileSize={12} size={16} color={EColors.black}>2 weeks ago</Text>,
    dataAction: 'TwoWeek',
    isActive: false,
  },
];
