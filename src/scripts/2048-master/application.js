// Wait till the browser is ready to render the game (avoids glitches)
import GameManager from'./game_manager';
export var show=window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
