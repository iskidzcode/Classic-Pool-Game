class Stick {
    constructor(position) {
        this.position = position;
        this.origin = new Vector2(970, 11);
        this.shotOrigin = new Vector2(950, 11);
        this.shooting = false;
        this.visible = true;
        this.rotation = 0;
        this.power = 0;
        this.trackMouse = true;
    }

    handleInput(delta) {
        if (AI_ON && Game.policy.turn === AI_PLAYER_NUM) return;
        if (Game.policy.turnPlayed) return;

        if (Keyboard.down(Keys.W) && KEYBOARD_INPUT_ON) {
            if (this.power < 75) {
                this.origin.x += 2;
                this.power += 1.2;
            }
        }

        if (Keyboard.down(Keys.S) && KEYBOARD_INPUT_ON) {
            if (this.power > 0) {
                this.origin.x -= 2;
                this.power -= 1.2;
            }
        }

        if (Mouse.left.down && this.power > 0) {
            this.shoot();
        } else if (this.trackMouse) {
            this.updateRotation();
        }
    }

    shoot() {
        const strike = sounds.strike.cloneNode(true);
        strike.volume = Math.min(this.power / 10, 1);
        strike.play();

        Game.policy.turnPlayed = true;
        this.shooting = true;
        this.origin = this.shotOrigin.copy();

        Game.gameWorld.whiteBall.shoot(this.power, this.rotation);

        setTimeout(() => { this.visible = false; }, 500);
    }

    updateRotation() {
        const opposite = Mouse.position.y - this.position.y;
        const adjacent = Mouse.position.x - this.position.x;
        this.rotation = Math.atan2(opposite, adjacent);
    }

    update() {
        if (this.shooting && !Game.gameWorld.whiteBall.moving) {
            this.reset();
        }
    }

    reset() {
        this.position = Game.gameWorld.whiteBall.position.copy();
        this.origin = new Vector2(970, 11);
        this.shooting = false;
        this.visible = true;
        this.power = 0;
    }

    draw() {
        if (!this.visible) return;
        Canvas2D.drawImage(sprites.stick, this.position, this.rotation, 1, this.origin);
    }
}
