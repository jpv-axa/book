import React from 'react';
import addons from '@storybook/addons';

const withCode = function(code, type , storyFn = null) {
  const emitAddCode = ({ kind, story }) => {
    console.log("emitAddCode " + type + "/code/" + code + "/story/" + story);
    addons.getChannel().emit(`soft/code/add_${type}`, { code, type });
  };
  return (storyFn, { kind, story }) => {
      emitAddCode({ kind, story });
      return storyFn();
    };
};

export default withCode;