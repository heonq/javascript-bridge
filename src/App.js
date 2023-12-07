import BridgeGameController from './BridgeGameController.js';

class App {
  async play() {
    await new BridgeGameController().play();
  }
}

const app = new App();
await app.play();

export default App;
