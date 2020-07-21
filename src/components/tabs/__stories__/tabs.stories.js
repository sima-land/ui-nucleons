import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from '../';

const items = ['Tab 1', 'Tab 2', 'Tab 3'];
const customItems = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
  { id: 3, name: 'third' },
];
const style = {
  padding: '15px 25px',
};
const grayStyle = {
  ...style,
  background: '#d1d2d6',
};
const itemStyle = {
  width: '70px',
  textAlign: 'center',
};
const tabHeaderStyle = {
  borderBottom: '1px solid #e8b6cf',
};

class SelectableTabs extends React.Component {
  state = {
    selected: 'Tab 1',
  };
  isSelectedItem = item => item === this.state.selected;
  onSelectItem = item => this.setState({ selected: item });

  render () {
    return (
      <Tabs items={items} isSelectedItem={this.isSelectedItem} onSelectItem={this.onSelectItem} />
    );
  }
}

class CustomTabs extends React.Component {
  state = {
    selected: 3,
  };
  renderItem = item => (
    <div style={itemStyle}>
      <div style={tabHeaderStyle}>Tab #{item.id}</div>
      <div>{item.name}</div>
    </div>
  );
  isSelectedItem = item => item.id === this.state.selected;
  onSelectItem = item => this.setState({ selected: item.id });

  render () {
    return (
      <Tabs
        items={customItems}
        isSelectedItem={this.isSelectedItem}
        onSelectItem={this.onSelectItem}
        renderItem={this.renderItem}
      />
    );
  }
}

storiesOf('Tabs', module)
  .add('default', () => (
    <div>
      <div style={style}>
        <Tabs items={items} />
      </div>
      <div style={grayStyle}>
        <Tabs items={items} />
      </div>
    </div>
  ))
  .add('selectable tabs', () => (
    <div>
      <div style={style}>
        <SelectableTabs />
      </div>
      <div style={grayStyle}>
        <SelectableTabs />
      </div>
    </div>
  ))
  .add('custom tabs', () => (
    <div>
      <div style={style}>
        <CustomTabs />
      </div>
      <div style={grayStyle}>
        <CustomTabs />
      </div>
    </div>
  ));
