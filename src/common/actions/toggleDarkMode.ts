import { EActions } from 'types/enum';
import { BaseAction } from 'common/action';

/**
 * This action is responsible for toggling the Dark Mode on the target Mac
 */
export default class AToggleDarkMode extends BaseAction {
  protected id: EActions = EActions.TOGGLE_DARK_MODE;
}