class Start extends Phaser.Scene {
    constructor() {
        super('start');

}
create(){
    this.add.text(200,100,"Click to begin", {fontSize: 65, fill: '#fff2cc', fontStyle: 'italic'});
                this.input.on('pointerdown', () => this.scene.start('intro'));

}}
class Intro extends Phaser.Scene {
    constructor() {
        super('intro');

}
preload(){
    this.load.path = './Assets/';
    this.load.image('Dragon', 'Dragon.png');
    this.load.image('text', 'Text.png');
    this.load.audio('growl', 'Growl.mp3');
}
create(){
    this.graphics = this.add.graphics();
    this.sound.add ('growl').play();
    this.cameras.main.fadeIn(1000, 0,0,0);
    this.imageObject = this.add.sprite(
        500,
        300,
        'Dragon',
    )
    this.imageObject.setScale(0.1);
    this.imageObject = this.add.image(
        500,
        320,
        'text',
    )
    this.imageObject.setScale(0.1);
    this.time.delayedCall(2000, () => {
        this.cameras.main.fadeOut(2000, 0,0,0);
    });
    //4200
    //'body'
    this.time.delayedCall(4200, () => {
        this.scene.start('body')
    });
}
}
class Body extends Phaser.Scene {
    constructor() {
        super('body');
    }
    preload(){
        this.load.path = './Assets/';
        this.load.audio('winds', 'whispering sands.mp3');
    }
    create() {
        this.graphics = this.add.graphics();
        this.sound.add('winds').play();
        this.cameras.main.fadeIn(2000, 0,0,0);
        let box = this.add.text(-140, 150,
            ` 
             "There is nothing 
               more constant
            than the shifting of 
                  sands"`,
                            {fontSize: 50, fill: '#fff2cc', fontStyle: 'italic'});
                            //box.setW(100);
            this.time.delayedCall(2500, () => {
                this.cameras.main.fadeOut(2000, 0,0,0);
            });
    this.time.delayedCall(4200, () => {
        this.scene.start('end')
            });
    }
}
class End extends Phaser.Scene {
    constructor(){
        super('end');
    }
    preload(){
    this.load.path = './Assets/';
    this.load.image('Scene', 'desrtScene.jpg');
    }
    create(){
        this.graphics = this.add.graphics();
        this.cameras.main.fadeIn(2000, 0,0,0);
        this.imageObject = this.add.sprite(
            500,
            540,
            'Scene',
        )
        this.imageObject.setScale(0.27);
        let sun = this.add.circle(650, -100, 75, 0xb09964);
        this.time.delayedCall(800, () => {
        this.add.tween({
            targets: sun,
            x: 650,
            y: 180,
            duration: 1000,
            ease: 'Linear',
        });});
        let menu = this.add.rectangle(-400, 350, 600, 700, 'black' );
        let title = this.add.text (20, 120, 'Lost Sands',{fontSize: 65, fill: '#fff2cc'})
        title.setAlpha(0);
        let box = this.add.text(-280, 160,
            ` 
            New Game 
            Continue
            Load
            Options
            Quit`,
                            {fontSize: 50, fill: 'white', lineSpacing: 30,})
        box.setAlpha(0);
        this.time.delayedCall(1500, () => {
            this.add.tween({
                targets: menu,
                x: 140,
                y: 350,
                duration: 1000,
                ease: 'Linear',
            });});
        this.time.delayedCall(2500, () => {
            this.add.tween({
                targets: box,
                alpha: 100,
                duration: 6000,
                ease: "Sine.easeInOut",})
            this.add.tween({
                targets: title,
                alpha: 100,
                duration: 6000,
                ease: "Sine.easeInOut",
                
         })
        });
    }
}

let config = {       
    type: Phaser.WEBGL,
    width: 1000,
    height: 700,
    backgroundColor: "black",
    scene: [Start,Intro, Body, End],
}
let game = new Phaser.Game(config);
    


