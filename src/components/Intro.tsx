import React from 'react';
import Welcome from './Welcome'

interface Props {
  hasData: boolean; // are there cookies containing character data already? Does the link contain a query?
}

export default class App extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasData: this.props.hasData,
    }
  }

  render() {
    return (
      <div className='h-100 w-100'>
        {/* <h1 className='title'>Hello World</h1> */}
        <Welcome view="START"/>
      </div>
    );
  }
}


