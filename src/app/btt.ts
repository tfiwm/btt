import { FTrigger } from '../common/trigger';
import { FWidget } from '../common/widget';
import VariableStore from '../common/state';
import * as _ from 'lodash';

import * as Initializer from '../types/initializers';
import * as Types from '../types/types';

import CommonUtils from '../common/util';

import AHapticFeedback from '../common/actions/hapticFeedback';
import ASendText from '../common/actions/sendText';
import ASaveSelectedText from '../common/actions/saveSelectedText';
import ADelayNextAction from '../common/actions/delayNextAction';
import AToggleBTT from '../common/actions/toggle';
import AStartSiri from '../common/actions/startSiri';
import ALaunchApplication from '../common/actions/launchApplication';
import AToggleApplication from '../common/actions/toggleApplication';
import AMute from '../common/actions/mute';
import ATriggerShortcut from '../common/actions/triggerShortcut';
import AToggleNightShift from '../common/actions/toggleNightShift';
import AToggleDnD from '../common/actions/toggleDnD';  
import AToggleMouseSize from '../common/actions/toggleMouseSize';
import AToggleMouseSpeed from '../common/actions/toggleMouseSpeed';
import AToggleMouseCursor from '../common/actions/toggleMouseCursor';
import AToggleDarkMode from '../common/actions/toggleDarkMode';
import ALockScreen from '../common/actions/lockScreen';
import ALogout from '../common/actions/logout';
import ASleepDisplay from '../common/actions/sleepDisplay';
import ASleepComputer from '../common/actions/sleepComputer';
import ARestartBTT from '../common/actions/restart';
import AQuitBTT from '../common/actions/quit';
import ASendShortcut from '../common/actions/sendShortcut';
import AShowHUD from '../common/actions/showHUD';
import AMoveMouse from '../common/actions/moveMouse';
import AShowWebView from '../common/actions/showWebView';
import AExecuteScript from '../common/actions/executeScript';
import EventManager from '../common/events';
import AShowNotification from '../common/actions/showNotification';
import AToggleTrueTone from '../common/actions/toggleTrueTone';

// decorator for creating actions
import { Action, EventMethod, Disallow } from '../common/decorators';

/**
 * Class used to manage the BTT webserver 
 * @constructor IBTTConfig
 */
export class Btt {
  // state, manages BTT variables
  public state: VariableStore;

  // stores Trigger factory
  public Trigger: FTrigger;

  // stores Widget factory
  public Widget: FWidget;

  // stores the config from the constructor
  private config: Types.AppConfig;

  // event manager
  private event: EventManager;

  /**
   * Creates BTT instance which communicates with BetterTouchTool built in webserver
   */
  constructor(config: Types.AppConfig) {
    this.config = config;
    
    // initialize the Widget factory
    this.Widget = new FWidget(config);

    // initialize new trigger
    this.Trigger = new FTrigger(config);

    // initialize the state (variable management)
    this.state = new VariableStore(config);

    // initialize event manager
    this.event = new EventManager(config);
  }

  /**
   * Sends a request to real BTT built in webserver with given data translated as GET query params
   */
  public do(
    action: string,
    data: Types.BttPayload,
  ): Promise<any> {
    return CommonUtils.callBetterTouchTool(action, data, this.config);
  }

  /**
   * Allows to create a queue of actions, and just then invoke them
   */
  public invokeChain() {
    return new Chain(this.config);
  }

  /** Events Management */

  /**
   * Creates actual event listener that'll be run upon certain event type detection.
   * The code will be invoked in btt-node-server, and this method is dependand on this project
   * 
   * Keep in mind that this is persisent - it'll exist until you manually delete it.
   * 
   * @param eventType event type of specific action (for example, oneFingerForceClick)
   * @param cb callback function that'll be invoked upon event detection
   */
  @EventMethod('addEventListener')
  public addEventListener: Initializer.EventMethod;

  /**
   * Removes previously created event listener
   * 
   * @param eventType event type of specific action (for example, oneFingerForceClick)
   * @param cb callback function that'll be invoked upon event detection
   */
  @EventMethod('removeEventListener')
  public removeEventListener: Initializer.EventMethod;

  /**
   * Adds a trigger action to the BetterTouchTool. Keep in mind, that the callback function that
   * you'll pass to this function will be invoked upon registering the action in the BetterTouchTool,
   * not after you trigger the specific eventType! 
   * 
   * Keep in mind that this is persisent - it'll exist until you manually delete it.
   * 
   * @param eventType event type of specific action (for example, oneFingerForceClick)
   * @param cb callback function that'll define what actions should be executed
   * @param options additional options if you want to override the JSON somehow to fit your needs
   */
  @EventMethod('addTriggerAction')
  public addTriggerAction: Initializer.EventMethod;

  /**
   * Removes a trigger of specified ID from the BetterTouchTool
   * 
   * @param eventType event type of specific action (for example, oneFingerForceClick)
   * @param cb a callback that was intended to run
   */
  @EventMethod('removeTriggerAction')
  public removeTriggerAction: Initializer.EventMethod;

  /** Actions */

  /**
   * Sends shortcut to txhe application. Some apps need to have focus so they can recieve shortcuts.
   * 
   * @param shortcut key identifiers separated by space
   * @param applicationPath absolute path pointing to the app which should recieve shortcut
   * @param applicationPath required for BTT to recognize the app, whithin browser env must be provided manually
   */
  @Action(ASendShortcut)
  public sendShortcut: Initializer.SendShortcut;

  /**
   * Executes passed nodejs script. Requires manual specificying of node executable binary if used on frontend
   * 
   * @param code a code to run
   */
  @Action(AExecuteScript)
  public executeScript: Initializer.ExecuteScript;

  /**
   * Toggles do not disturb mode
   */
  @Action(AToggleDnD)
  public toggleDnD: Initializer.ToggleDnD;

  /**
   * Toggles do not disturb mode
   */
  @Action(AToggleTrueTone)
  public toggleTrueTone: Initializer.ToggleTrueTone;
  
  /**
   * Toggles night shift
   */
  @Action(AToggleNightShift)
  public toggleNightShift: Initializer.ToggleNightShift;

  /**
   * Triggers system wide keyboard shortcut
   * @param shortcut key identifiers separated by space
   */
  @Action(ATriggerShortcut) 
  public triggerShortcut: Initializer.TriggerShortcut;

  /**
   * Shows HUD with given config
   */
  @Action(AShowHUD)
  public showHUD: Initializer.ShowHUD;

  /**
   * Sends / Types / Inserts / Pastes custom text
   */
  @Action(ASendText)
  public sendText: Initializer.SendText;

  /**
   * Triggers a haptic response. Takes a number as a param due to BTT lack of information
   * which ID represents which mode, in order to know what value represents what open BTT and map 
   * the order of selects options in config of "Perform Haptic Feedback on Trackpad" action
   * 
   * @param hapticMode a number representing each mode.
   */
  @Action(AHapticFeedback)
  public hapticFeedback: Initializer.HapticFeedback;

  /**
   * Open an application on the given path
   */
  @Action(ALaunchApplication)
  public launchApplication: Initializer.LaunchApplication;

  /**
   * Toggles the visibility of given application
   */
  @Action(AToggleApplication)
  public toggleApplication: Initializer.ToggleApplication;

  /**
   * Toggles the mute state in the system
   */
  @Action(AMute)
  public mute: Initializer.Mute;

  /**
   * Starts Siri
   */
  @Action(AStartSiri)
  public startSiri: Initializer.StartSiri;

  /**
   * Toggles the BetterTouchTool gesture recognition
   */
  @Action(AToggleBTT)
  public toggle: Initializer.ToggleBTT;

  /**
   * Delays the next action. For most cases manually managing the execution of actions in JavaScript
   * should be sufficient - using this will block any new action that BTT will recieve
   * 
   * @param timeout - time in miliseconds during any action execution will be delayed
   */
  @Action(ADelayNextAction)
  public delayNextAction: Initializer.DelayNextAction;

  /**
   * Moves mouse to specified position
   */
  @Action(AMoveMouse)
  public moveMouse: Initializer.MoveMouse;

  /**
   * Toggles the mouse speed between a regular and speeded up one
   */
  @Action(AToggleMouseSpeed)
  public toggleMouseSpeed: Initializer.ToggleMouseSpeed;

  /**
   * Toggles mouse cursor visibility
   */
  @Action(AToggleMouseCursor)
  public toggleMouseCursor: Initializer.ToggleMouseCursor;

  /**
   * Toggles between the big and regular mouse cursor size
   */
  @Action(AToggleMouseSize)
  public toggleMouseSize: Initializer.ToggleMouseSize;

  /**
   * Toggles the system dark mode 
   */
  @Action(AToggleDarkMode)
  public toggleDarkMode: Initializer.ToggleDarkMode;

  /**
   * Opens a web view
   */
  @Action(AShowWebView)
  public showWebView: Initializer.ShowWebView;

  /**
   * Saves selected text to variable selected_text
   * This can be later retrieved via btt.state.get('selected_text')
   */
  @Action(ASaveSelectedText)
  public saveSelectedText: Initializer.SaveSelectedText;

  /**
   * Locks the screen
   */
  @Action(ALockScreen)
  public lockScreen: Initializer.LockScreen;

  /**
   * Logouts current user
   */
  @Action(ALogout)
  public logout: Initializer.Logout;

  /**
   * Sleeps computer display
   */
  @Action(ASleepDisplay)
  public sleepDisplay: Initializer.SleepDisplay;

  /**
   * Sleeps computer
   */
  @Action(ASleepComputer)
  public sleepComputer: Initializer.SleepComputer;

  /**
   * Restarts BetterTouchTool
   */
  @Action(ARestartBTT)
  public restart: Initializer.RestartBTT;

  /**
   * Shows system wide notification. Keep in mind that it's presence depends on the DnD state in the system.
   */
  @Action(AShowNotification)
  public showNotification: Initializer.ShowNotification;

  /**
   * Quits BetterTouchTool
   */
  @Action(AQuitBTT)
  public quit: Initializer.QuitBTT;
}

enum QueueStatus {
  IDLE = 0,
  RUNNING = 1,
  FINISHED = 2,
}
// @TODO: can't be moved out to separate module due to circular dependecy issue
class Chain extends Btt {
  
  // holds all entries ever passed to this chain
  private totalQueue: Types.ChainEntry[] = [];
  
  // modifies action decorator for methods to be chainable
  public readonly isChainable: boolean = true;

  // holds status of the queue - if runinng or not
  private status: QueueStatus = QueueStatus.IDLE;

  // @Disallow('Constructors are only available in base btt instance')
  // public Trigger: FTrigger;

  // @Disallow('Constructors are only available in base btt instance')
  // public Widget: FWidget;
  
  // @Disallow('Variable related functionalities are disabled while in chain')
  // public state: VariableStore;
  
  @Disallow('Event related methods are only valid in base btt instance, not in its chain')
  public addEventListener: Initializer.EventMethod;
  
  @Disallow('Event related methods are only valid in base btt instance, not in its chain')
  public addTriggerAction: Initializer.EventMethod;
  
  @Disallow('Event related methods are only valid in base btt instance, not in its chain')
  public removeEventListener: Initializer.EventMethod;
  
  @Disallow('Event related methods are only valid in base btt instance, not in its chain')
  public removeTriggerAction: Initializer.EventMethod;

  @Disallow('Chaining multiple invokeChain methods is not allowed')
  public invokeChain(): undefined {
    return;
  };

  /**
   * Allows to invoke previously prepared chain, returns promise
   */
  public async call(): Promise<any> {
    const startTime = CommonUtils.performanceNow() * 100;

    // set current queue to the total list
    const queue = _.cloneDeep(this.totalQueue);
    
    // return a promise that'll resolve once all items in queue are done (queue empty)
    return new Promise(async (res, rej) => {
        // complete the queue
        const response = await this.updateQueue(queue);
        const endTime = CommonUtils.performanceNow().toFixed(3) * 100;
        const status = (response.every((r: Types.CallResult) => r.status === 200) ? 200 : 'multiple');
        res({
          value: response,
          status,
          time: (endTime / 100) - (startTime / 100),
        }); 
    });
  };

  /**
   * Allows to delay the action execution from JavaScript side. Time in ms
   * @param timeout 
   */
  public wait(timeout: number) {
    // adds a promise to queue that'll resolve after given timeout
    this.addToQueue(() => new Promise((res, rej) => {
      setTimeout(() => {
        res({
          value: null,
          status: 200,
          time: timeout,
          note: `Explicit timeout`
        } as Types.CallResult);
      }, timeout);
    }));

    // because this method is chainable, we're returning current instance
    return this;
  }

  /**
   * Recursive function that'll invoke the queue elements an remove them from list once resolved
   */
  private async updateQueue(queue: Types.ChainEntry[], result: Types.CallResult[] = []): Promise<Types.CallResult[]> {
    this.status = QueueStatus.RUNNING;

    // if queue is empty at this point, finish
    if (queue.length === 0) {
      this.status = QueueStatus.FINISHED;
      return result;
    };

    // get the item that should be processed now
    const currentStep = queue[0];

    // invoke the current callback and wait for it to complete
    result.push(await currentStep.call(null));

    // remove the element from queue
    queue.shift();

    // proceed to next step
    return this.updateQueue(queue, result);
  }

  /**
   * Allows to add new entries to queue
   * @param fn 
   */
  private addToQueue(fn: () => Promise<any>) {
    this.totalQueue.push(fn);
  }
}