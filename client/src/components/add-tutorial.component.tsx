import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';

type Props = {};

type State = ITutorialData & {
  submitted: boolean
};

export default class AddTutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeReenterPassword = this.onChangeReenterPassword.bind(this);
    this.onChangeEntermobileno = this.onChangeEntermobileno.bind(this);
    this.onChangeEnteremailid = this.onChangeEnteremailid.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      username: "",
      password: "",
      message:  "",
      ReenterPassword: "",
      Entermobileno: "",
      Enteremailid: "",
      isloggedin: false,
      submitted: false
    };
  }

  onChangeUsername(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeMessage(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      message: e.target.value
    });
  }
  onChangeReenterPassword(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      ReenterPassword: e.target.value
    });
  }

  onChangeEntermobileno(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      Entermobileno: e.target.value
    });
  }
  onChangeEnteremailid(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      Enteremailid: e.target.value
    });
  }

  saveTutorial() {
    const data: ITutorialData = {
      username: this.state.username,
      password: this.state.password,
      message:this.state.message,
      ReenterPassword: this.state.ReenterPassword,
      Entermobileno: this.state.Entermobileno,
      Enteremailid:this.state.Enteremailid

    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: data.id,
          username:data.username,
          password: data.password,
          isloggedin:data.isloggedin,
          ReenterPassword: data.ReenterPassword,
          Entermobileno: data.Entermobileno,
          Enteremailid:data.Enteremailid,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      username: "",
      password: "",
      message:  "",
      ReenterPassword: "",
      Entermobileno:"",
      Enteremailid:"",
      isloggedin: false,
      submitted: false
    });
  }

  render() {
    const { submitted, username, password,message,ReenterPassword,Entermobileno,Enteremailid } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>Registration complete user have been added successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Sign up
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Username</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={username}
                onChange={this.onChangeUsername}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">password</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={password}
                onChange={this.onChangePassword}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <input
                type="text"
                className="form-control"
                id="Message"
                required
                value={message}
                onChange={this.onChangeMessage}
                name="message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Reenter password">Re-enter password</label>
              <input
                type="text"
                className="form-control"
                id="Reenterpassword"
                // required
                // value={ReenterPassword}
                onChange={this.onChangeReenterPassword}
                name="ReenterPassword"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Entermobileno">Entermobileno</label>
              <input
                type="text"
                className="form-control"
                id="Entermobileno"
                // required
                // value={ReenterPassword}
                onChange={this.onChangeEntermobileno}
                name="Entermobileno"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Enteremailid">Enteremailid</label>
              <input
                type="text"
                className="form-control"
                id="Enteremailid"
                //required
                //value={ReenterPassword}
                onChange={this.onChangeEnteremailid}
                name="Enteremailid"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}