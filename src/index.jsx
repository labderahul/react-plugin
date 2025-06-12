import { render } from "preact"

import {
  Input,
  Alert,
  Form,
  Stepper,
  TooltipHoverArea,
  Button,
  Icon,
  Portal
} from "@puppet/react-components"

import preactLogo from "./assets/preact.svg"
import menuLogo from "./assets/menu-icon.svg"
import "./style.scss"
import GoogleAppsMenu from "./app-accordion/AppsMenu"

export function App() {
//   const menuStyle = {
//     backgroundColor: "lightSlateGrey",
//     borderRadius: "4px",
//     color: "mintCream",
//     height: "fit-content",
//     width: "90%",
//     position: "absolute",
//     top: "25px",
//     left: "5%",
//     zIndex: "100",
//     textAlign: "center"
//   }
  return (
    <div>
      <GoogleAppsMenu />
      {/* <div id={"app-header"}>
        <Icon type='connections' size='large' />
      </div>
      <Portal target='app-header' active style={menuStyle} className='test'>
        <h3>I'm some menu content</h3>
      </Portal>
      <br />
      <TooltipHoverArea tooltip="I'm a happy tooltip!" anchor='bottom'>
        <Button>I'm a happy button!</Button>
      </TooltipHoverArea>
      <Form
        submittable
        cancellable
        onSubmit={this.onSubmit}
        labelType='secondary'
        inline
        inlineLabelWidth={180} // default
      >
        <Form.Field
          type='text'
          name='fName'
          autoComplete='firstname'
          label='First name'
          placeholder='Enter your first name...'
        />
        <Form.Field
          type='text'
          name='lName'
          autoComplete='lastname'
          label='Last name'
          placeholder='Enter your last name...'
        />
      </Form>
      <Input
        name='input-ex6'
        // value={state.value}
        placeholder='Search'
        icon='search'
        simple
        // onChange={(value) => setState({ value })}
      />
      <a href='https://preactjs.com' target='_blank'>
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <Alert type='success'>
        Success! Things seem to have gone well afterall.
      </Alert>
      <h1>Get Started building Vite-powered Preact Apps </h1>
      <section>
        <Resource
          title='Learn Preact'
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href='https://preactjs.com/tutorial'
        />
        <Resource
          title='Differences to React'
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href='https://preactjs.com/guide/v10/differences-to-react'
        />
        <Resource
          title='Learn Vite'
          description='To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation'
          href='https://vitejs.dev'
        />
      </section>
      <Stepper activeStepIndex={1}>
        <Stepper.Step subText={"Hello. This is the optional subtext."}>
          Create Group
        </Stepper.Step>
        <Stepper.Step subText={"More optional text here."}>
          Set Permissions
        </Stepper.Step>
        <Stepper.Step subText={"More optional text here."}>
          Final Step
        </Stepper.Step>
      </Stepper> */}
    </div>
  )
}

function Resource(props) {
  return (
    <a href={props.href} target='_blank' class='resource'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  )
}

render(<App />, document.getElementById("app-root"))
