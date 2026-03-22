import { customErrorFactory } from "ts-custom-error";
import { IData } from "../../store/auth/actions";

export interface IError {
  code: number;
  message: string;
}

export interface IVadateForm {
  timePomodoro: string;
  timeShortBreak: string;
  timeLongBreak: string;
  frequencyLongBreak: string;
  isActivePush: string;
  data: IData;
  setSettingsError: (value: React.SetStateAction<IError>) => void;
}

const SettingsError = customErrorFactory(function SettingsError (code: number, message= '') {
	this.code = code
	this.message = message
})

function checkValueNum(value: string) {
  const reg = /[\D]+(\.?|,?)+?[\D]/g;
  return (
    value.trim().length === 0 || !!value.trim().match(reg) || +value.trim() <= 0
  );
}

export function validateSettings({
  timePomodoro,
  timeShortBreak,
  timeLongBreak,
  frequencyLongBreak,
  setSettingsError,
  isActivePush,
  data
}: IVadateForm) {

  try {
    if (checkValueNum(timePomodoro)) {
      throw new SettingsError(211, 'Time must be a number greater than zero');
    }
    if (checkValueNum(timeShortBreak)) {
      throw new SettingsError(212, 'Time must be a number greater than zero');
    }
    if (checkValueNum(timeLongBreak)) {
      throw new SettingsError(213, 'Time must be a number greater than zero');
    }
    if (checkValueNum(frequencyLongBreak)) {
      throw new SettingsError(214, 'Long break frequency must be a number greater than zero');
    }

    data.settings.timePomodoro = Math.ceil(+timePomodoro * 60);
    data.settings.timeShortBreak = Math.ceil(+timeShortBreak * 60);
    data.settings.timeLongBreak = Math.ceil(+timeLongBreak * 60);
    data.settings.frequencyLongBreak = Math.ceil(+frequencyLongBreak);
    data.settings.isActivePush = isActivePush === 'true';

    return data;
  } catch (error: any) {
    setSettingsError({ code: error.code, message: error.message });
  }
}
