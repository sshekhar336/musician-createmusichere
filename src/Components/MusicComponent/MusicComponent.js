import React, { Component } from 'react'
import './MusicComponent.css';

export class MusicComponent extends Component {

    playSound(indexval) {
        let sound = document.querySelectorAll(".sound");

        sound[indexval].currentTime = 0;
        sound[indexval].play();

        const colors = [
            "#f3ead9",
            "#8eee8e",
            "#63b663",
            "#5a945a",
            "#376e37",
            "#1a571a",
            "#145314",
            "#084608",
            "#063506",
            "#031846",
            "#383633",
            "#232e23",
            "#255825e8",
            "#023a02",
            "#013301",
            "#0d290d",
            "#403c64fd",
            "#1d0653ee",
            "#051b05",
            "#090a0c",
        ]

        let visualEffects = document.querySelector(".visualEffects");

        let bubble = document.createElement("div");
        visualEffects.appendChild(bubble);
        bubble.style.backgroundColor = colors[indexval];
        bubble.style.animation = "jump 1s ease";

        bubble.addEventListener('animationend', function () {
            visualEffects.removeChild(this);
        });

    }

    startGame = () => {
        let backgroundMusic = document.querySelector(".backgroundMusic");
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;

        document.querySelector(".startGameButton").style.display = "none";

        document.querySelectorAll(".musicComp")[0].style.display = "flex";
        document.querySelectorAll(".musicComp")[1].style.display = "flex";
    }

    playBackgroundMusic() {
        document.querySelector(".backgroundMusic").play();
    }

    componentDidMount() {
        this.playBackgroundMusic();
        document.querySelectorAll(".musicComp")[0].style.display = "none";
        document.querySelectorAll(".musicComp")[1].style.display = "none";
    }


    render() {
        const style = {
            "backgroundImage": "url(/musicimage.jpg)",
            "height": "100%"
        }
        return (
            <div id="background" style={style}>
                <div className="titlename">
                    <h1>Musician...</h1>
                </div>

                <div className="startGameButton">
                    <button id="id" onClick={this.startGame}>START</button>
                </div>
                <div className="visualEffects">
                </div>

                <audio className="backgroundMusic" src="/sounds/OneStepCloser.mp3"></audio>

                <div className="musicComp bottom">
                    <div className="samediv divSound0" onClick={() => this.playSound(0)}>
                        <audio className="sound" src="/sounds/a3.mp3"></audio>
                    </div>
                    <div className="samediv divSound1" onClick={() => this.playSound(1)}>
                        <audio className="sound" src="/sounds/a4.mp3"></audio>
                    </div>
                    <div className="samediv divSound2" onClick={() => this.playSound(2)}>
                        <audio className="sound" src="/sounds/a5.mp3"></audio>
                    </div>
                    <div className="samediv divSound3" onClick={() => this.playSound(3)}>
                        <audio className="sound" src="/sounds/a32.mp3"></audio>
                    </div>
                    <div className="samediv divSound4" onClick={() => this.playSound(4)}>
                        <audio className="sound" src="/sounds/a42.mp3"></audio>
                    </div>
                    <div className="samediv divSound5" onClick={() => this.playSound(5)}>
                        <audio className="sound" src="/sounds/a52.mp3"></audio>
                    </div>
                    <div className="samediv divSound6" onClick={() => this.playSound(6)}>
                        <audio className="sound" src="/sounds/b3.mp3"></audio>
                    </div>
                    <div className="samediv divSound7" onClick={() => this.playSound(7)}>
                        <audio className="sound" src="/sounds/b4.mp3"></audio>
                    </div>
                    <div className="samediv divSound8" onClick={() => this.playSound(8)}>
                        <audio className="sound" src="/sounds/b5.mp3"></audio>
                    </div>
                    <div className="samediv divSound9" onClick={() => this.playSound(9)}>
                        <audio className="sound" src="/sounds/c3.mp3"></audio>
                    </div>
                </div>
                <div className="musicComp top">
                    <div className="samediv divSound10" onClick={() => this.playSound(10)}>
                        <audio className="sound" src="/sounds/c4.mp3"></audio>
                    </div>
                    <div className="samediv divSound11" onClick={() => this.playSound(11)}>
                        <audio className="sound" src="/sounds/c5.mp3"></audio>
                    </div>
                    <div className="samediv divSound12" onClick={() => this.playSound(12)}>
                        <audio className="sound" src="/sounds/c6.mp3"></audio>
                    </div>
                    <div className="samediv divSound13" onClick={() => this.playSound(13)}>
                        <audio className="sound" src="/sounds/c32.mp3"></audio>
                    </div>
                    <div className="samediv divSound14" onClick={() => this.playSound(14)}>
                        <audio className="sound" src="/sounds/c52.mp3"></audio>
                    </div>
                    <div className="samediv divSound15" onClick={() => this.playSound(15)}>
                        <audio className="sound" src="/sounds/d3.mp3"></audio>
                    </div>
                    <div className="samediv divSound16" onClick={() => this.playSound(16)}>
                        <audio className="sound" src="/sounds/d4.mp3"></audio>
                    </div>
                    <div className="samediv divSound17" onClick={() => this.playSound(17)}>
                        <audio className="sound" src="/sounds/d32.mp3"></audio>
                    </div>
                    <div className="samediv divSound18" onClick={() => this.playSound(18)}>
                        <audio className="sound" src="/sounds/f4.mp3"></audio>
                    </div>
                    <div className="samediv divSound19" onClick={() => this.playSound(19)}>
                        <audio className="sound" src="/sounds/g5.mp3"></audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicComponent