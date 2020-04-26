import React from "react";
import ReactDom from "react-dom";
import "./Button.css";

const sounds = [
  {
    idnum: "1",
    id: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater 1",
  },
  {
    idnum: "2",
    id: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater 2",
  },
  {
    idnum: "3",
    id: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater 3",
  },
  {
    idnum: "4",
    id: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater 4",
  },
  {
    idnum: "5",
    id: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
  },
  {
    idnum: "6",
    id: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open HH",
  },
  {
    idnum: "7",
    id: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick N' Hat",
  },
  {
    idnum: "8",
    id: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick",
  },
  {
    idnum: "9",
    id: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed HH",
  },
];

class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dispName: "None",
    };
    this.soundOn = this.soundOn.bind(this);
  }

  buttonRef = React.createRef();
  audioRef = React.createRef();

  componentDidMount() {
    document.addEventListener("keypress", this.buttonPress);
  }

  buttonPress(e) {
    var a = e.key.toUpperCase();
    if (
      a == "Q" ||
      a == "W" ||
      a == "E" ||
      a == "A" ||
      a == "S" ||
      a == "D" ||
      a == "Z" ||
      a == "X" ||
      a == "C"
    ) {
      console.log(a);
      document.getElementById(a).click();
    }
  }

  soundOn() {
    this.props.onBtnClick(this.props.info.name);
    console.log(this.audioRef.current);
    document.getElementById(this.props.keyTrigger);
    console.log(this.props);
    this.audioRef.current.play();
  }

  render() {
    const { info } = this.props;
    return (
      <button
        ref={this.buttonRef}
        className="drum-pad"
        id={info["idnum"]}
        onClick={this.soundOn}
      >
        {info["id"]}
        <audio
          ref={this.audioRef}
          src={info.src}
          className="clip"
          id={info.id}
          type="audio/mp3"
        ></audio>
      </button>
    );
  }
}

class Button extends React.Component {
  // any other logic
  state = {
    currentBtn: "Let's Play!",
  };

  render() {
    const buttonList = sounds.map((info) => (
      <SoundButton
        info={info}
        key={info.id}
        onBtnClick={(name) => {
          this.setState({ currentBtn: name });
        }}
      />
    ));
    return (
      <div id="display">
        <div className="dis">{this.state.currentBtn}</div>
        <div className="btn">{buttonList}</div>
      </div>
    );
  }
}
export default Button;
