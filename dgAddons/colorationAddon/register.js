import React from 'react';
import addons from '@storybook/addons';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-sass.js';
import 'prismjs/components/prism-scss.js';

//TODO : fix webpack css loader
import '!style-loader!css-loader!prismjs/themes/prism.css';

class Code extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {code: ''};
    this.channelName = `soft/code/add_${props.type}`;
    this.onSelectTab = this.onSelectTab.bind(this);
  }

  onSelectTab({code, type}) {
    const formattedCode = type && code && Prism.highlight(code, Prism.languages[type]);
    console.log("select tab of type : " + type);
    this.setState({code: formattedCode});
  }

  componentDidMount() {
    const { channel, api } = this.props;
    channel.on(this.channelName, this.onSelectTab);

    console.log("component did mount for channel : " + this.channelName);
    this.stopListeningOnStory = api.onStory(() => {
      this.onSelectTab('');
    });
  }

  render() {
    const { code } = this.state;
    const { type } = this.props;
    
    return (
      <div>{ 
        code ? 
          <pre>
            <code>
              <div dangerouslySetInnerHTML={{__html: code}} />
            </code>
          </pre> :
          <p> No {type} code Found </p>
        }
      </div>
    );
  }

  componentWillUnmount() {
    if(this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    console.log("stop listening to channel : " + this.channelName);
    channel.removeListener(this.channelName, this.onSelectTab);
  }
}

const registerTab  = ({label, type}) => {
  addons.register(`soft/code/add_${type}`, (api) => {
    addons.addPanel(`soft/${type}/panel`, {
      title: label,
      render: () => (
        <Code channel={addons.getChannel()} api={api} type={type} />
      )
    })
  })
}
export const setTabs = (tabs) => {
  console.log ("tabs to render : " + tabs.length);
  const tabsToRender = [].concat(tabs);
  tabsToRender.forEach((t) => registerTab(t));
}